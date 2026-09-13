export type ProjectCartItemKind = "apparel" | "beanie" | "hat" | "tote";

export type ProjectCartSizeBreakdown = Record<string, number>;

type ProjectCartConfigurationBase = {
  basePath: string;
  quantity: string;
  schemaVersion: 1;
};

export type ProjectCartHatConfiguration = ProjectCartConfigurationBase & {
  additionalCallouts?: string;
  artworkName?: string;
  backDecoration?: "embroidery" | "none";
  customDecoration?: string;
  decoration: string;
  embroideryColor?: string;
  embroideryHex?: string;
  fabricColor?: string;
  hatAdditionalDecorations?: string[];
  hatBrimCurve?: string;
  hatClosure?: string;
  hatMaterial?: string;
  kind: "hat";
  mode: "build" | "catalog" | "crafted" | "ready" | "shop";
  needsArtworkHelp?: boolean;
  packagingUpgrades?: string[];
  readyMadeColorName?: string;
  readyMadeStyleId?: string;
  rush?: boolean;
  sampleDelivery?: "photo" | "shipped";
  sampleType?: "none" | "pp" | "proto";
  sideDecoration?: "embroidery" | "none";
  styleSlug?: string;
  threadFinish?: "matte" | "shiny";
  washedFabric?: boolean;
};

export type ProjectCartApparelConfiguration = ProjectCartConfigurationBase & {
  artworkName?: string;
  backPrintColors: number;
  colorName: string;
  embroideryColorCount: number;
  frontDecoration: "embroidery" | "screenPrint";
  frontPrintColors: number;
  frontPrintEnabled: boolean;
  kind: "apparel";
  needsArtworkHelp?: boolean;
  notes?: string;
  packaging: string[];
  placementInkColors: {
    back: Array<{ hex: string; name: string }>;
    embroidery: Array<{ hex: string; name: string }>;
    front: Array<{ hex: string; name: string }>;
    sleeve: Array<{ hex: string; name: string }>;
  };
  printUpgrade: "Discharge Print" | "Puff Print" | "Water-Based Ink" | "none";
  sizeBreakdown: ProjectCartSizeBreakdown;
  sleevePrintColors: number;
  sleevePrintSide: "left" | "right";
  styleSlug: string;
};

export type ProjectCartBeanieConfiguration = ProjectCartConfigurationBase & {
  additionalNotes?: string;
  artworkName?: string;
  colorName: string;
  decoration: string;
  kind: "beanie";
  needsArtworkHelp?: boolean;
  styleSlug: string;
};

export type ProjectCartToteConfiguration = ProjectCartConfigurationBase & {
  artworkName?: string;
  backPrintColors: number;
  colorName: string;
  embroideryColorCount: number;
  frontDecoration: "embroidery" | "screenPrint";
  frontPrintColors: number;
  kind: "tote";
  needsArtworkHelp?: boolean;
  notes?: string;
  packaging: string[];
  styleId: string;
};

export type ProjectCartItemConfiguration =
  | ProjectCartApparelConfiguration
  | ProjectCartBeanieConfiguration
  | ProjectCartHatConfiguration
  | ProjectCartToteConfiguration;

export type ProjectCartItem = {
  addedAt: string;
  artworkName?: string;
  configuration?: ProjectCartItemConfiguration;
  editHref?: string;
  id: string;
  kind?: ProjectCartItemKind;
  needsArtworkHelp?: boolean;
  product: string;
  program?: string;
  quantity?: string;
  sizeBreakdown?: ProjectCartSizeBreakdown;
  source: string;
  summaryLines: string[];
  title: string;
};

const STORAGE_KEY = "og-project-cart-v1";
const UPDATE_EVENT = "og-project-cart-updated";

function canUseStorage() {
  return typeof window !== "undefined" && typeof window.localStorage !== "undefined";
}

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function isProjectCartItemConfiguration(value: unknown): value is ProjectCartItemConfiguration {
  if (!isPlainObject(value)) return false;

  return (
    value.schemaVersion === 1
    && typeof value.kind === "string"
    && typeof value.basePath === "string"
    && typeof value.quantity === "string"
  );
}

function appendQueryParam(path: string, key: string, value: string) {
  return `${path}${path.includes("?") ? "&" : "?"}${key}=${encodeURIComponent(value)}`;
}

function normalizeCreateBasePath(basePath: string) {
  return basePath
    .replace(/^\/create\/apparel\/quick-turn\/([^/?#]+)$/, "/create/apparel/$1")
    .replace(/^\/create\/beanies\/quick-turn\/([^/?#]+)$/, "/create/beanies/$1")
    .replace(/^\/create\/bags\/quick-turn\/([^/?#]+)$/, "/create/bags/$1")
    .replace(/^\/create\/hats\/(?:quick-turn|full-custom)\/([^/?#]+)$/, "/create/hats/$1");
}

function buildProjectCartEditHref(id: string, configuration: ProjectCartItemConfiguration) {
  const href = appendQueryParam(normalizeCreateBasePath(configuration.basePath), "cartEdit", id);

  if (configuration.kind === "apparel") {
    return appendQueryParam(href, "style", configuration.styleSlug);
  }

  if (configuration.kind === "beanie") {
    return appendQueryParam(href, "style", configuration.styleSlug);
  }

  if (configuration.kind === "hat") {
    if (configuration.mode === "ready" && configuration.readyMadeStyleId) {
      return appendQueryParam(href, "readyMadeStyleId", configuration.readyMadeStyleId);
    }

    if ((configuration.mode === "build" || configuration.mode === "crafted") && configuration.styleSlug) {
      return appendQueryParam(href, "hatStyle", configuration.styleSlug);
    }
  }

  if (configuration.kind === "tote") {
    return appendQueryParam(href, "styleId", configuration.styleId);
  }

  return href;
}

function notifyProjectCartUpdated() {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent(UPDATE_EVENT));
}

export function projectCartStorageKey() {
  return STORAGE_KEY;
}

export function projectCartUpdateEvent() {
  return UPDATE_EVENT;
}

export function readProjectCart(): ProjectCartItem[] {
  if (!canUseStorage()) return [];

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];

    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];

    return parsed.filter((item): item is ProjectCartItem => (
      item &&
      typeof item === "object" &&
      typeof item.id === "string" &&
      typeof item.title === "string" &&
      typeof item.product === "string" &&
      typeof item.source === "string" &&
      (typeof item.editHref === "undefined" || typeof item.editHref === "string") &&
      (typeof item.kind === "undefined" || item.kind === "apparel" || item.kind === "beanie" || item.kind === "hat" || item.kind === "tote") &&
      (typeof item.configuration === "undefined" || isProjectCartItemConfiguration(item.configuration)) &&
      Array.isArray(item.summaryLines)
    )).map((item) => (
      item.configuration
        ? { ...item, editHref: buildProjectCartEditHref(item.id, item.configuration) }
        : item
    ));
  } catch {
    return [];
  }
}

export function writeProjectCart(items: ProjectCartItem[]) {
  if (!canUseStorage()) return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  notifyProjectCartUpdated();
}

export function getProjectCartItem(id: string) {
  return readProjectCart().find((item) => item.id === id) ?? null;
}

export function addProjectCartItem(item: Omit<ProjectCartItem, "addedAt" | "id"> & { id?: string }) {
  const current = readProjectCart();
  const existingItem = item.id ? current.find((entry) => entry.id === item.id) : null;
  const nextItemId = item.id ?? `project-item-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
  const nextItem: ProjectCartItem = {
    ...item,
    addedAt: existingItem?.addedAt ?? new Date().toISOString(),
    editHref: item.editHref ?? (item.configuration ? buildProjectCartEditHref(nextItemId, item.configuration) : undefined),
    id: nextItemId,
  };

  if (existingItem) {
    writeProjectCart(current.map((entry) => (entry.id === existingItem.id ? nextItem : entry)));
    return nextItem;
  }

  writeProjectCart([nextItem, ...current]);
  return nextItem;
}

export function removeProjectCartItem(id: string) {
  writeProjectCart(readProjectCart().filter((item) => item.id !== id));
}

export function clearProjectCart() {
  if (!canUseStorage()) return;
  window.localStorage.removeItem(STORAGE_KEY);
  notifyProjectCartUpdated();
}

function buildSizeBreakdownSummary(sizeBreakdown: ProjectCartSizeBreakdown) {
  return Object.entries(sizeBreakdown)
    .filter(([, quantity]) => Number(quantity) > 0)
    .map(([size, quantity]) => `${size} ${quantity}`)
    .join(", ");
}

function replaceSummaryLine(summaryLines: string[], label: string, value: string) {
  const prefix = `${label}:`;
  const nextLine = `${label}: ${value}`;
  const existingIndex = summaryLines.findIndex((line) => line.startsWith(prefix));

  if (existingIndex === -1) {
    return [...summaryLines, nextLine];
  }

  return summaryLines.map((line, index) => (index === existingIndex ? nextLine : line));
}

function updateProjectCartItems(
  updater: (items: ProjectCartItem[]) => ProjectCartItem[],
) {
  writeProjectCart(updater(readProjectCart()));
}

export function updateProjectCartItem(id: string, updater: (item: ProjectCartItem) => ProjectCartItem) {
  updateProjectCartItems((items) => items.map((item) => (item.id === id ? updater(item) : item)));
}

export function updateProjectCartItemQuantity(id: string, quantity: string) {
  const normalizedQuantity = quantity.replace(/[^\d]/g, "");

  updateProjectCartItem(id, (item) => ({
    ...item,
    configuration: item.configuration ? { ...item.configuration, quantity: normalizedQuantity } : item.configuration,
    quantity: normalizedQuantity,
    summaryLines: replaceSummaryLine(item.summaryLines, "Quantity", normalizedQuantity || "Not set"),
  }));
}

export function updateProjectCartItemSizeBreakdown(id: string, sizeBreakdown: ProjectCartSizeBreakdown) {
  const totalQuantity = Object.values(sizeBreakdown).reduce((sum, quantity) => sum + Math.max(0, Number(quantity) || 0), 0);
  const sizeSummary = buildSizeBreakdownSummary(sizeBreakdown);

  updateProjectCartItem(id, (item) => ({
    ...item,
    configuration: item.configuration ? { ...item.configuration, quantity: totalQuantity > 0 ? String(totalQuantity) : "", sizeBreakdown } : item.configuration,
    quantity: totalQuantity > 0 ? String(totalQuantity) : "",
    sizeBreakdown,
    summaryLines: replaceSummaryLine(
      replaceSummaryLine(item.summaryLines, "Quantity", totalQuantity > 0 ? String(totalQuantity) : "Not set"),
      "Size breakdown",
      sizeSummary || "Not assigned yet",
    ),
  }));
}

export function formatProjectCartItemLabel(item: Pick<ProjectCartItem, "quantity" | "title">) {
  const quantity = item.quantity?.trim();
  return quantity ? `${item.title} x ${quantity}` : item.title;
}

export function buildProjectCartSummary(items: ProjectCartItem[]) {
  if (!items.length) return "";

  return [
    `Project request: ${items.length} customized product${items.length === 1 ? "" : "s"}`,
    "",
    ...items.flatMap((item, index) => [
      `Item ${index + 1}: ${formatProjectCartItemLabel(item)}`,
      ...item.summaryLines.map((line) => `- ${line}`),
      "",
    ]),
  ]
    .join("\n")
    .trim();
}

export function buildProjectCartTitles(items: ProjectCartItem[]) {
  return items.map((item, index) => `${index + 1}. ${formatProjectCartItemLabel(item)}`).join(" | ");
}

export function collectProjectCartArtworkNames(items: ProjectCartItem[]) {
  return Array.from(new Set(items.map((item) => item.artworkName).filter(Boolean)));
}
