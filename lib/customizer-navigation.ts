import {
  type GoodsBrowserCategory,
  type GoodsBrowserProductionPath,
} from "@/lib/goods-browser";

export type CustomizerBreadcrumbItem = {
  label: string;
  href?: string;
};

const CUSTOMIZER_CATEGORY_LABELS: Record<GoodsBrowserCategory, string> = {
  hats: "Hats",
  beanies: "Beanies",
  apparel: "Apparel",
  blankets: "Blankets",
  drinkware: "Drinkware",
  bags: "Bags + Totes",
  totes: "Bags + Totes",
  accessories: "Accessories",
  socks: "Socks",
};

const CUSTOMIZER_PRODUCTION_PATH_LABELS: Record<GoodsBrowserProductionPath, string> = {
  "full-custom": "Full Custom",
  "quick-turn": "Quick Turn",
};

export function getCustomizerProductionPathLabel(
  productionPath: GoodsBrowserProductionPath | null | undefined
) {
  if (!productionPath) return null;
  return CUSTOMIZER_PRODUCTION_PATH_LABELS[productionPath];
}

function sanitizeRelativeHref(value: string | null | undefined) {
  if (!value) return null;
  if (!value.startsWith("/") || value.startsWith("//")) return null;
  return value;
}

function parseBrowserContext(returnTo: string | null | undefined) {
  const sanitized = sanitizeRelativeHref(returnTo);
  if (!sanitized) return {};

  const [pathname, search = ""] = sanitized.split("?");
  if (pathname !== "/goods/all") return {};

  const params = new URLSearchParams(search);
  const category = params.get("category");
  const productionPath = params.get("productionPath");

  return {
    category: category as GoodsBrowserCategory | null,
    productionPath:
      productionPath === "full-custom" || productionPath === "quick-turn"
        ? (productionPath as GoodsBrowserProductionPath)
        : null,
  };
}

export function buildFilteredGoodsHref({
  category,
  productionPath,
}: {
  category?: GoodsBrowserCategory | null;
  productionPath?: GoodsBrowserProductionPath | null;
}) {
  const params = new URLSearchParams();

  if (productionPath) params.set("productionPath", productionPath);
  if (category) params.set("category", category);

  const query = params.toString();
  return query ? `/goods/all?${query}` : "/goods/all";
}

function defaultBackLabel(categoryLabel: string) {
  return `Back to ${categoryLabel.toLowerCase()}`;
}

function normalizeBreadcrumbLabel(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

export function buildCustomizerNavigation({
  category,
  productionPath,
  currentLabel,
  includeCurrentLabel = false,
  returnTo,
  fallbackHref,
  fallbackLabel,
}: {
  category: GoodsBrowserCategory;
  productionPath?: GoodsBrowserProductionPath | null;
  currentLabel: string;
  includeCurrentLabel?: boolean;
  returnTo?: string | null;
  fallbackHref?: string;
  fallbackLabel?: string;
}) {
  const sanitizedReturnTo = sanitizeRelativeHref(returnTo);
  const browserContext = parseBrowserContext(sanitizedReturnTo);
  const resolvedCategory = browserContext.category ?? category;
  const resolvedProductionPath = browserContext.productionPath ?? productionPath ?? null;
  const categoryLabel = CUSTOMIZER_CATEGORY_LABELS[resolvedCategory];
  const productionPathLabel = resolvedProductionPath
    ? getCustomizerProductionPathLabel(resolvedProductionPath)
    : null;
  const productionPathHref = resolvedProductionPath
    ? buildFilteredGoodsHref({ productionPath: resolvedProductionPath })
    : null;
  const categoryHref = buildFilteredGoodsHref({
    category: resolvedCategory,
    productionPath: resolvedProductionPath,
  });
  const normalizedCurrentLabel = normalizeBreadcrumbLabel(currentLabel);
  const normalizedCategoryLabel = normalizeBreadcrumbLabel(categoryLabel);
  const normalizedComposedLabel = normalizeBreadcrumbLabel(
    [productionPathLabel, categoryLabel].filter(Boolean).join(" ")
  );
  const shouldIncludeCurrentLabel =
    includeCurrentLabel &&
    normalizedCurrentLabel.length > 0 &&
    normalizedCurrentLabel !== normalizedCategoryLabel &&
    normalizedCurrentLabel !== normalizedComposedLabel;

  const breadcrumbs: CustomizerBreadcrumbItem[] = [
    { label: "Goods", href: "/goods/all" },
  ];

  if (productionPathLabel && productionPathHref) {
    breadcrumbs.push({ label: productionPathLabel, href: productionPathHref });
  }

  breadcrumbs.push({ label: categoryLabel, href: shouldIncludeCurrentLabel ? categoryHref : undefined });

  if (shouldIncludeCurrentLabel) {
    breadcrumbs.push({ label: currentLabel });
  }

  return {
    backHref:
      sanitizedReturnTo ??
      sanitizeRelativeHref(fallbackHref) ??
      categoryHref,
    backLabel:
      sanitizedReturnTo
        ? "Back to results"
        : fallbackLabel ?? defaultBackLabel(categoryLabel),
    breadcrumbs,
  };
}
