import type { ProjectCartItem, ProjectCartHatConfiguration } from "@/lib/project-cart";

type ProductStyleCartItemInput = {
  activeModeLabel: string;
  activeModeTitle: string;
  additionalCallouts: string;
  backDecoration: "none" | "embroidery";
  cartEditId: string;
  catalogRush: boolean;
  customDecoration: string;
  decoration: string;
  embroideryColor: string;
  hatAdditionalDecorations: string[];
  hatBrimCurve: string;
  hatClosure: string;
  hatColorCallout: string;
  hatMaterial: string;
  hatStyleSlug: string;
  isHatBuilderMode: boolean;
  logoFileName: string;
  mode: ProjectCartHatConfiguration["mode"];
  needsArtworkHelp: boolean;
  normalizedEmbroideryHex: string;
  pathname: string;
  projectSummaryLines: string[];
  qty: number;
  sampleDelivery: "photo" | "shipped";
  sampleType: "none" | "pp" | "proto";
  selectedCatalogPackaging: string[];
  selectedHatStyleTitle: string;
  selectedReadyMadeColorName: string;
  selectedReadyMadeStyleId: string;
  selectedReadyMadeStyleTitle: string;
  sideDecoration: "none" | "embroidery";
  threadFinish: "matte" | "shiny";
  washedFabric: boolean;
};

export function buildProductStyleCartItem({
  activeModeLabel,
  activeModeTitle,
  additionalCallouts,
  backDecoration,
  cartEditId,
  catalogRush,
  customDecoration,
  decoration,
  embroideryColor,
  hatAdditionalDecorations,
  hatBrimCurve,
  hatClosure,
  hatColorCallout,
  hatMaterial,
  hatStyleSlug,
  isHatBuilderMode,
  logoFileName,
  mode,
  needsArtworkHelp,
  normalizedEmbroideryHex,
  pathname,
  projectSummaryLines,
  qty,
  sampleDelivery,
  sampleType,
  selectedCatalogPackaging,
  selectedHatStyleTitle,
  selectedReadyMadeColorName,
  selectedReadyMadeStyleId,
  selectedReadyMadeStyleTitle,
  sideDecoration,
  threadFinish,
  washedFabric,
}: ProductStyleCartItemInput): Omit<ProjectCartItem, "addedAt"> & { id: string } {
  const targetCartId = cartEditId || `project-item-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
  const source = isHatBuilderMode
    ? "og-crafted-hat-builder"
    : mode === "ready"
      ? "quick-turn-hat-builder"
      : "product-style-preview";
  const title = mode === "ready" && selectedReadyMadeStyleTitle
    ? selectedReadyMadeStyleTitle
    : isHatBuilderMode
      ? selectedHatStyleTitle
      : activeModeTitle;

  return {
    id: targetCartId,
    artworkName: logoFileName,
    configuration: {
      additionalCallouts: additionalCallouts || undefined,
      artworkName: logoFileName || undefined,
      backDecoration,
      basePath: pathname,
      customDecoration: customDecoration || undefined,
      decoration,
      embroideryColor: embroideryColor || undefined,
      embroideryHex: normalizedEmbroideryHex || undefined,
      fabricColor: hatColorCallout || undefined,
      hatAdditionalDecorations,
      hatBrimCurve,
      hatClosure,
      hatMaterial,
      kind: "hat",
      mode,
      needsArtworkHelp,
      packagingUpgrades: selectedCatalogPackaging,
      quantity: String(qty),
      readyMadeColorName: selectedReadyMadeColorName,
      readyMadeStyleId: selectedReadyMadeStyleId,
      rush: catalogRush,
      sampleDelivery,
      sampleType,
      schemaVersion: 1,
      sideDecoration,
      styleSlug: hatStyleSlug,
      threadFinish,
      washedFabric,
    },
    editHref: `${pathname}?cartEdit=${targetCartId}&returnTo=%2Fcart`,
    kind: "hat",
    needsArtworkHelp,
    product: activeModeTitle,
    program: activeModeLabel,
    quantity: String(qty),
    source,
    summaryLines: projectSummaryLines,
    title,
  };
}
