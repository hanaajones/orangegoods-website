"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import { CustomizerBreadcrumbs } from "@/components/CustomizerBreadcrumbs";
import {
  CustomizerPageHeader,
  immersiveCustomizerGhostLinkClass,
  immersiveCustomizerInsetPanelClass,
  immersiveCustomizerLabelTextClass,
  immersiveCustomizerProcessCardClass,
  immersiveCustomizerSelectInputClass,
  immersiveCustomizerShellCardClass,
  immersiveCustomizerSummaryLabelClass,
  immersiveCustomizerSummaryValueClass,
  immersiveCustomizerTextInputClass,
  MasterCustomizerShell,
} from "@/components/MasterCustomizerShell";
import { buildCustomizerNavigation, getCustomizerProductionPathLabel } from "@/lib/customizer-navigation";
import {
  CATALOG_EMBROIDERY_UNIT_PRICE,
  CATALOG_PACKAGING_PRICES,
  calculateJolScreenPrintLocationUnitPrice,
  type CatalogPackagingUpgrade,
} from "@/data/catalog";
import { AS_COLOUR_TOTES, getAsColourToteBySlug } from "@/lib/as-colour-totes";
import { addProjectCartItem, getProjectCartItem } from "@/lib/project-cart";
import { QUICK_TURN_FREE_SHIPPING_LABEL, addQuickTurnToteShippingIncludedPrice } from "@/lib/quick-turn-shipping";

type ToteBuilderStyle = (typeof AS_COLOUR_TOTES)[number];
type DecorationMethod = "screenPrint" | "embroidery";
type ToteBuilderVariant = "live" | "master-draft";

const QUANTITY_MARKS = [100, 250, 500, 1000, 1500, 2000];
const PACKAGING_OPTIONS: CatalogPackagingUpgrade[] = ["Woven label"];
const FRONT_DECORATION_OPTIONS: Array<{
  id: DecorationMethod;
  label: string;
  note: string;
}> = [
  {
    id: "screenPrint",
    label: "Screen Print",
    note: "Best for larger tote graphics, cleaner bulk pricing, and bold front hits.",
  },
  {
    id: "embroidery",
    label: "Embroidery",
    note: "Best for smaller premium marks and quieter tote branding.",
  },
];

const TOTE_LIFESTYLE_IMAGES: Record<string, Array<{ label: string; url: string }>> = {
  "1000": [{ label: "Lifestyle detail", url: "/images/gallery/banner-coffee-tote-2026-08-14.jpg" }],
  "1001": [{ label: "Lifestyle detail", url: "/images/gallery/bags-solid-state-coffee-stairs.jpg" }],
  "1002": [{ label: "Lifestyle detail", url: "/images/gallery/totes-bags-boatsetter-dscf3148.jpg" }],
  "1007": [{ label: "Lifestyle detail", url: "/images/gallery/screen-printing-field-day-coffee-totes.jpg" }],
  "1008": [{ label: "Lifestyle detail", url: "/images/gallery/bags-boatsetter-tote-angle.jpg" }],
  "1012": [{ label: "Lifestyle detail", url: "/images/gallery/merch-graphics-verve-tokyo-tote-024.jpg" }],
  "1040": [{ label: "Lifestyle detail", url: "/images/gallery/totes-bags-boatsetter-dscf3148.jpg" }],
  "1041": [{ label: "Lifestyle detail", url: "/images/gallery/bags-boatsetter-tote-detail.jpg" }],
};

const COLOR_HEX: Record<string, string> = {
  Black: "#1a1a1a",
  Coal: "#2f2f2f",
  White: "#ffffff",
  Cream: "#efe7d8",
  Bone: "#e6dfd1",
  Ecru: "#efe7d8",
  Khaki: "#9a8761",
  Camel: "#c4966b",
  Walnut: "#7a5a3a",
  "Dark Chocolate": "#5b3f2d",
  Mushroom: "#958475",
  Navy: "#203a77",
  "Petrol Blue": "#28566d",
  Denim: "#446b9d",
  Indigo: "#284b87",
  Liberty: "#69468f",
  Pink: "#dfa7b4",
  "Charity Pink": "#ec9fc0",
  Burgundy: "#742235",
  "Forest Green": "#31533c",
  "Kelly Green": "#2f8c4a",
  "Pine Green": "#28513a",
  Army: "#586749",
  Orange: "#d9793e",
  Red: "#c63a2a",
  Sunset: "#df8350",
  Mustard: "#d0aa3d",
};

const selectArrowSvg = `url("data:image/svg+xml,${encodeURIComponent(
  "<svg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 20 20' fill='none'><path d='M5 7.5L10 12.5L15 7.5' stroke='%230B32A0' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'/></svg>"
)}")`;

function roundToQuarter(value: number) {
  return Math.round(value * 4) / 4;
}

function money(value: number) {
  return value.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });
}

function resolveSwatchColor(color: string) {
  if (COLOR_HEX[color]) return COLOR_HEX[color];

  const parts = color.split("/").map((part) => part.trim()).filter(Boolean);
  if (parts.length > 1) {
    const nonCreamPart = parts.find((part) => !/(cream|white|bone|ecru)/i.test(part));
    return resolveSwatchColor(nonCreamPart ?? parts[0]);
  }

  const normalized = color.toLowerCase();
  if (normalized.includes("black") || normalized.includes("coal")) return "#1a1a1a";
  if (normalized.includes("white")) return "#ffffff";
  if (normalized.includes("cream") || normalized.includes("bone") || normalized.includes("ecru")) return "#efe7d8";
  if (normalized.includes("pink")) return "#dfa7b4";
  if (normalized.includes("burgundy") || normalized.includes("red")) return "#b63333";
  if (normalized.includes("orange") || normalized.includes("sunset")) return "#d9793e";
  if (normalized.includes("mustard") || normalized.includes("yellow")) return "#d0aa3d";
  if (normalized.includes("khaki") || normalized.includes("camel") || normalized.includes("walnut") || normalized.includes("mushroom") || normalized.includes("chocolate")) {
    return "#8b6443";
  }
  if (normalized.includes("army") || normalized.includes("green")) return "#5c7656";
  if (normalized.includes("blue") || normalized.includes("navy") || normalized.includes("denim") || normalized.includes("indigo") || normalized.includes("liberty")) {
    return "#305aa7";
  }

  return "#d8d0c2";
}

function sliderPositionStyle(index: number, count: number) {
  const denominator = Math.max(count - 1, 1);
  const percentage = (index / denominator) * 100;

  return {
    left: `calc(${percentage}% * (100% - 16px) / 100% + 8px)`,
    transform: "translateX(-50%)",
  } as const;
}

function nearestQuantityMarkIndex(value: number) {
  return QUANTITY_MARKS.reduce((closestIndex, mark, index) => (
    Math.abs(mark - value) < Math.abs(QUANTITY_MARKS[closestIndex] - value) ? index : closestIndex
  ), 0);
}

function clampQuantity(value: number) {
  return Math.min(5000, Math.max(100, value));
}

function addDays(date: Date, days: number) {
  const copy = new Date(date);
  copy.setDate(copy.getDate() + days);
  return copy;
}

function formatLongDate(date: Date) {
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

function formatShortDate(date: Date) {
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
}

function calculateToteUnitPrice({
  style,
  qty,
  decoration,
  frontColorCount,
  backColorCount,
  packaging,
}: {
  style: ToteBuilderStyle;
  qty: number;
  decoration: DecorationMethod;
  frontColorCount: number;
  backColorCount: number;
  packaging: CatalogPackagingUpgrade[];
}) {
  const blankUnitPrice = style.tier50Price;
  const frontBaseScreenPrice = calculateJolScreenPrintLocationUnitPrice({
    qty,
    colorCount: 1,
    printCat: "bag",
  });
  const frontFullScreenPrice = calculateJolScreenPrintLocationUnitPrice({
    qty,
    colorCount: Math.max(frontColorCount, 1),
    printCat: "bag",
  });
  const frontDecorationUnitPrice = decoration === "embroidery"
    ? CATALOG_EMBROIDERY_UNIT_PRICE
    : frontBaseScreenPrice;
  const frontExtraColorUnitPrice = decoration === "screenPrint"
    ? Math.max(frontFullScreenPrice - frontBaseScreenPrice, 0)
    : 0;
  const backPrintUnitPrice = decoration === "screenPrint" && backColorCount > 0
    ? calculateJolScreenPrintLocationUnitPrice({
      qty,
      colorCount: backColorCount,
      printCat: "bag",
    })
    : 0;
  const packagingUnitPrice = packaging.reduce(
    (total, option) => total + (CATALOG_PACKAGING_PRICES[option] ?? 0),
    0,
  );
  const unitPrice = roundToQuarter(
    blankUnitPrice + frontDecorationUnitPrice + frontExtraColorUnitPrice + backPrintUnitPrice + packagingUnitPrice,
  );

  return {
    blankUnitPrice: roundToQuarter(blankUnitPrice),
    frontDecorationUnitPrice: roundToQuarter(frontDecorationUnitPrice),
    frontExtraColorUnitPrice: roundToQuarter(frontExtraColorUnitPrice),
    backPrintUnitPrice: roundToQuarter(backPrintUnitPrice),
    packagingUnitPrice: roundToQuarter(packagingUnitPrice),
    unitPrice,
  };
}

type ToteBuilderPreviewProps = {
  lockedStyleSlug?: string;
  pageBackHref?: string;
  pageBackLabel?: string;
  variant?: ToteBuilderVariant;
  showPageHero?: boolean;
};

type SavedToteCartConfig = {
  artworkName?: string;
  backPrintColors?: number;
  basePath?: string;
  colorName?: string;
  embroideryColorCount?: number;
  frontDecoration?: DecorationMethod;
  frontPrintColors?: number;
  kind: "tote";
  needsArtworkHelp?: boolean;
  notes?: string;
  packaging?: string[];
  quantity?: string;
  styleId?: string;
};

export function ToteBuilderPreview(props: ToteBuilderPreviewProps = {}) {
  const searchParams = useSearchParams();
  const requestedStyleId =
    getAsColourToteBySlug(props.lockedStyleSlug)?.id ??
    searchParams.get("style") ??
    searchParams.get("styleId") ??
    AS_COLOUR_TOTES[0]?.id ??
    "";
  const returnTo = searchParams.get("returnTo") ?? "";
  const projectCartItemId = searchParams.get("cartEdit") ?? searchParams.get("projectCartItemId") ?? "";
  const resetKey = `${requestedStyleId}::${returnTo}::${projectCartItemId}::${props.variant ?? "live"}`;

  return <ToteBuilderPreviewContent key={resetKey} {...props} />;
}

function ToteBuilderPreviewContent({
  lockedStyleSlug,
  pageBackHref,
  pageBackLabel,
  variant = "live",
  showPageHero = true,
}: ToteBuilderPreviewProps = {}) {
  const isMasterDraft = variant === "master-draft";
  const useSharedToteTheme = true;
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const requestedStyleId =
    getAsColourToteBySlug(lockedStyleSlug)?.id ??
    searchParams.get("style") ??
    searchParams.get("styleId");
  const projectCartItemId = searchParams.get("cartEdit") ?? searchParams.get("projectCartItemId");
  const fallbackStyle = AS_COLOUR_TOTES.find((style) => style.id === requestedStyleId) ?? AS_COLOUR_TOTES[0];
  const [selectedStyleId, setSelectedStyleId] = useState(fallbackStyle.id);
  const selectedStyle = AS_COLOUR_TOTES.find((style) => style.id === selectedStyleId) ?? fallbackStyle;
  const [selectedColorName, setSelectedColorName] = useState(selectedStyle.colors[0] ?? "");
  const [hoveredColorName, setHoveredColorName] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(100);
  const [frontDecoration, setFrontDecoration] = useState<DecorationMethod>("screenPrint");
  const [frontPrintColors, setFrontPrintColors] = useState(1);
  const [backPrintColors, setBackPrintColors] = useState(0);
  const [embroideryColorCount, setEmbroideryColorCount] = useState(1);
  const [packaging, setPackaging] = useState<CatalogPackagingUpgrade[]>([]);
  const [notes, setNotes] = useState("");
  const [artworkName, setArtworkName] = useState("");
  const [needsArtworkHelp, setNeedsArtworkHelp] = useState(false);
  const hydratedCartItemIdRef = useRef<string | null>(null);
  const skipStyleResetRef = useRef(false);

  useEffect(() => {
    if (skipStyleResetRef.current) {
      skipStyleResetRef.current = false;
      return;
    }
    setSelectedColorName(selectedStyle.colors[0] ?? "");
  }, [selectedStyle]);

  useEffect(() => {
    if (projectCartItemId) return;
    setSelectedStyleId(fallbackStyle.id);
  }, [fallbackStyle.id, projectCartItemId]);

  useEffect(() => {
    if (!projectCartItemId || hydratedCartItemIdRef.current === projectCartItemId) return;

    const savedItem = getProjectCartItem(projectCartItemId);
    const configuration = savedItem?.configuration as SavedToteCartConfig | undefined;
    if (!configuration || configuration.kind !== "tote") return;

    const nextStyle = AS_COLOUR_TOTES.find((style) => style.id === configuration.styleId);
    if (!nextStyle) return;

    hydratedCartItemIdRef.current = projectCartItemId;
    skipStyleResetRef.current = true;
    setSelectedStyleId(nextStyle.id);
    setSelectedColorName(
      nextStyle.colors.includes(configuration.colorName ?? "")
        ? configuration.colorName ?? ""
        : nextStyle.colors[0] ?? "",
    );
    setQuantity(clampQuantity(Number(configuration.quantity) || 100));
    setFrontDecoration(configuration.frontDecoration === "embroidery" ? "embroidery" : "screenPrint");
    setFrontPrintColors(Math.min(5, Math.max(1, configuration.frontPrintColors || 1)));
    setBackPrintColors(Math.min(5, Math.max(0, configuration.backPrintColors || 0)));
    setEmbroideryColorCount(Math.min(5, Math.max(1, configuration.embroideryColorCount || 1)));
    setPackaging(
      (configuration.packaging ?? []).filter((option): option is CatalogPackagingUpgrade => PACKAGING_OPTIONS.includes(option as CatalogPackagingUpgrade)),
    );
    setNotes(configuration.notes ?? "");
    setArtworkName(configuration.artworkName ?? "");
    setNeedsArtworkHelp(Boolean(configuration.needsArtworkHelp));
  }, [projectCartItemId]);

  const quantityTierIndex = nearestQuantityMarkIndex(quantity);
  const visibleColorLabel = hoveredColorName ?? selectedColorName ?? "Select a color";
  const selectedColorHex = resolveSwatchColor(selectedColorName);
  const galleryImages = useMemo(
    () => [
      { label: `${selectedStyle.name} product view`, url: selectedStyle.image },
      ...(TOTE_LIFESTYLE_IMAGES[selectedStyle.id] ?? []),
    ],
    [selectedStyle],
  );
  const pricing = calculateToteUnitPrice({
    style: selectedStyle,
    qty: quantity,
    decoration: frontDecoration,
    frontColorCount: frontPrintColors,
    backColorCount: backPrintColors,
    packaging,
  });
  const shippingIncludedUnitPrice = addQuickTurnToteShippingIncludedPrice(pricing.unitPrice);
  const estimatedTotal = roundToQuarter(shippingIncludedUnitPrice * quantity);
  const estimatedDeliveryStart = addDays(new Date(), 19);
  const estimatedDeliveryEnd = addDays(new Date(), 28);
  const estimatedDeliveryLabel = `${formatLongDate(estimatedDeliveryStart)} - ${formatLongDate(estimatedDeliveryEnd)}`;
  const estimatedDeliveryShortLabel = `${formatShortDate(estimatedDeliveryStart)} - ${formatShortDate(estimatedDeliveryEnd)}`;
  const frontDecorationLabel = frontDecoration === "screenPrint"
    ? `Screen print · ${frontPrintColors} color${frontPrintColors === 1 ? "" : "s"}`
    : `Embroidery · ${embroideryColorCount} color${embroideryColorCount === 1 ? "" : "s"}`;
  const backPrintLabel = backPrintColors > 0
    ? `${backPrintColors} color${backPrintColors === 1 ? "" : "s"}`
    : "None";
  const includedItems = ["Premium blank tote", "Setup costs", QUICK_TURN_FREE_SHIPPING_LABEL];
  const timelineItems = [
    { label: "Tech pack", note: "where we build out the details", value: "1-2 days" },
    { label: "Production", value: "2-3 weeks" },
    { label: "Shipping", value: "1-4 days" },
  ];
  const orderProcessSteps = [
    {
      title: "Choose the tote",
      detail: "Start with the actual AS Colour shape, lock the color, and make sure the base tote fits the program before art gets layered on.",
    },
    {
      title: "Dial in decoration",
      detail: "Use this build to scope print versus embroidery, front and back hits, and any finishing touches that make the tote feel more considered.",
    },
    {
      title: "Review + production",
      detail: "Once the quote and mockup are approved, we move into production and keep the tote timing tied to the quick-turn blank program.",
    },
  ];
  const projectSummary = [
    `Product: AS Colour ${selectedStyle.id} ${selectedStyle.name}`,
    "Program: Quick Turn Tote",
    `Color: ${selectedColorName}`,
    `Quantity: ${quantity}`,
    `Decoration: ${frontDecorationLabel}`,
    `Back print: ${backPrintLabel}`,
    `Packaging: ${packaging.length > 0 ? packaging.join(", ") : "None"}`,
    `Timeline: 2-3 weeks`,
    `Estimated unit price: ${money(shippingIncludedUnitPrice)}`,
    `Estimated total: ${money(estimatedTotal)}`,
    artworkName ? `Artwork file: ${artworkName}` : "",
    needsArtworkHelp ? "Needs artwork help: Yes" : "",
    notes.trim() ? `Notes: ${notes.trim()}` : "",
  ].filter(Boolean).join("\n");
  const selectInputClass = immersiveCustomizerSelectInputClass;
  const textInputClass = immersiveCustomizerTextInputClass;
  const neutralOptionClass = "border-[#0B32A0]/12 bg-[#F5F7FC] text-[#0B32A0] hover:border-[#FF4200] hover:shadow-[0_12px_24px_rgba(8,30,111,0.08)]";
  const secondarySelectedOptionClass = "border-[#0B32A0] bg-[#0B32A0] text-white";
  const frontDecorationSelectedOptionClass = secondarySelectedOptionClass;
  const tintedSecondarySelectedOptionClass = "border-[#0B32A0] bg-[#EAF0FF] text-[#0B32A0]";
  const panelClass = immersiveCustomizerShellCardClass;
  const warmPanelClass = immersiveCustomizerProcessCardClass;
  const insetPanelClass = immersiveCustomizerInsetPanelClass;
  const sectionEyebrowClass = immersiveCustomizerLabelTextClass;
  const summaryLabelClass = immersiveCustomizerSummaryLabelClass;
  const summaryValueClass = immersiveCustomizerSummaryValueClass;
  const navigation = buildCustomizerNavigation({
    category: "totes",
    productionPath: "quick-turn",
    currentLabel: selectedStyle.name,
    returnTo: searchParams.get("returnTo"),
    fallbackHref: pageBackHref,
    fallbackLabel: pageBackLabel,
  });
  const topBadgeLabel = getCustomizerProductionPathLabel("quick-turn");

  function handleAddToProject() {
    const targetCartId = projectCartItemId ?? `project-item-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
    addProjectCartItem({
      artworkName,
      configuration: {
        artworkName: artworkName || undefined,
        backPrintColors,
        basePath: pathname,
        colorName: selectedColorName,
        embroideryColorCount,
        frontDecoration,
        frontPrintColors,
        kind: "tote",
        needsArtworkHelp,
        notes: notes.trim() || undefined,
        packaging,
        quantity: String(quantity),
        schemaVersion: 1,
        styleId: selectedStyle.id,
      },
      editHref: `${pathname}?cartEdit=${encodeURIComponent(targetCartId)}&styleId=${encodeURIComponent(selectedStyle.id)}&returnTo=%2Fcart`,
      id: targetCartId,
      kind: "tote",
      needsArtworkHelp,
      product: selectedStyle.name,
      program: "Quick Turn Tote",
      quantity: String(quantity),
      source: "quick-turn-totes-builder",
      summaryLines: projectSummary.split("\n").filter(Boolean),
      title: `AS Colour ${selectedStyle.id} ${selectedStyle.name}`,
    });
    window.location.assign("/cart");
  }

  return (
    <MasterCustomizerShell
      compactHeader={!showPageHero}
      header={(
        <CustomizerPageHeader
          backHref={navigation.backHref}
          backLabel={navigation.backLabel}
          badgeLabel={topBadgeLabel ?? undefined}
          eyebrow={showPageHero ? (isMasterDraft ? "Master-theme draft" : "Quick Turn") : undefined}
          title={showPageHero ? "Quick Turn Totes" : undefined}
          description={
            !showPageHero
              ? undefined
              : isMasterDraft
              ? "Draft tote builder using the same exact theme direction as the apparel master, but with tote-specific controls and pricing."
              : "Choose the tote, color, decoration, and quantity with the same shared builder styling now used across the customizer family."
          }
        >
          {showPageHero && isMasterDraft ? (
            <Link
              href="/create/bags/quick-turn"
              className={immersiveCustomizerGhostLinkClass}
            >
              Compare current live tote builder
            </Link>
          ) : null}
        </CustomizerPageHeader>
      )}
      gridClassName="xl:grid-cols-[minmax(0,1.04fr)_minmax(380px,460px)_minmax(320px,360px)]"
    >
          <div className="space-y-6">
            <div className="grid gap-5">
              {galleryImages.map((image, index) => (
                <div
                  key={`${selectedStyle.id}-${image.label}-${index}`}
                  className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] border border-[#081E6F]/10 bg-[linear-gradient(180deg,#FFFFFF_0%,#F7F9FC_100%)] sm:aspect-[5/4]"
                >
                  <Image
                    src={image.url}
                    alt={`${selectedStyle.name} - ${image.label}`}
                    fill
                    priority={index === 0}
                    sizes="(min-width: 1280px) 34vw, (min-width: 1024px) 46vw, 100vw"
                    className={index === 0 ? "object-contain p-10" : "object-cover"}
                  />
                </div>
              ))}
            </div>

            <div className={panelClass}>
              <p className={sectionEyebrowClass}>
                From order to delivery
              </p>
              <div className="relative mt-5 space-y-4 before:absolute before:bottom-[26px] before:left-[11px] before:top-[26px] before:w-px before:bg-[#0B32A0]/18">
                {timelineItems.map((item) => (
                  <div key={item.label} className="relative grid grid-cols-[24px_1fr] items-center gap-4">
                    <span className="z-10 h-3 w-3 justify-self-center rounded-full bg-[#FF4200]" />
                    <div className="flex flex-1 items-center justify-between gap-4 rounded-[1.2rem] bg-[#F5F7FC] px-5 py-4">
                      <span className="text-[15px] font-medium text-[#4b4b4b]">
                        {item.label}
                        {"note" in item && item.note ? (
                          <span className="ml-2 text-xs italic text-[#8a8a8a]">{item.note}</span>
                        ) : null}
                      </span>
                      <span className="text-[15px] font-semibold text-[#0B32A0]">{item.value}</span>
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-[15px] text-[#4b4b4b]">
                <span className="font-semibold text-[#0B32A0]">Estimated delivery if ordered today:</span>{" "}
                {estimatedDeliveryLabel}
              </p>
            </div>

            <section className="border-t border-[#081E6F]/10 pt-8">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#FF4200]">
                  Order process
                </p>
                <p className="mt-2 text-2xl font-semibold text-[#0B32A0]">
                  What happens after you start your tote order
                </p>
              </div>
              <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {orderProcessSteps.map((step, index) => (
                  <div key={step.title} className={warmPanelClass}>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#FF4200]">
                      Step {index + 1}
                    </p>
                    <p className="mt-3 text-xl font-semibold leading-tight text-[#0B32A0]">{step.title}</p>
                    <p className="mt-3 text-[15px] leading-6 text-[#4b4b4b]">{step.detail}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <aside className="space-y-4 lg:self-start">
            <div className={panelClass}>
              <CustomizerBreadcrumbs items={navigation.breadcrumbs} />

              <div className="mt-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#FF4200]">
                  Selected blank
                </p>
                <h2 className="mt-2 text-5xl leading-none text-[#0B32A0]">
                  {selectedStyle.name}
                </h2>
                <p className="mt-4 text-[15px] leading-7 text-[#4b4b4b]">
                  AS Colour {selectedStyle.id} · {selectedStyle.typeLabel} · {selectedStyle.size}
                </p>
                <div className="mt-5 flex flex-wrap gap-2.5">
                  <span className="rounded-full border border-[#081E6F]/12 bg-[#F5F7FC] px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#0B32A0]">
                    {selectedStyle.fabric}
                  </span>
                  <span className="rounded-full border border-[#FF4200]/16 bg-[#FFF4ED] px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#FF4200]">
                    From {money(selectedStyle.fromPrice)}/tote
                  </span>
                </div>
                <p className="mt-5 text-[15px] leading-7 text-[#4b4b4b]">
                  {selectedStyle.description}
                </p>
              </div>
            </div>

            <div className={panelClass}>
              <div className="space-y-7 py-2">
                <div>
                  <label className={`mb-3 block ${sectionEyebrowClass}`}>
                    Tote style
                  </label>
                  {lockedStyleSlug ? (
                    <div className={`${insetPanelClass} flex flex-wrap items-center gap-2.5`}>
                      <span className="rounded-full border border-[#081E6F]/12 bg-white px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#0B32A0]">
                        AS Colour {selectedStyle.id}
                      </span>
                      <span className="rounded-full border border-[#081E6F]/12 bg-white px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#0B32A0]">
                        {selectedStyle.name}
                      </span>
                      <span className="rounded-full border border-[#081E6F]/12 bg-white px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#0B32A0]">
                        {selectedStyle.typeLabel}
                      </span>
                    </div>
                  ) : (
                    <select
                      value={selectedStyle.id}
                      onChange={(event) => setSelectedStyleId(event.target.value)}
                      className={selectInputClass}
                      style={{ backgroundImage: selectArrowSvg }}
                    >
                      {AS_COLOUR_TOTES.map((style) => (
                        <option key={style.id} value={style.id}>
                          {`AS Colour ${style.id} - ${style.name}`}
                        </option>
                      ))}
                    </select>
                  )}
                  <p className="mt-3 text-sm leading-6 text-[#8a8a8a]">
                    {selectedStyle.typeLabel} · {selectedStyle.fabric} · 2-3 weeks
                  </p>
                </div>

                <section>
                  <div className="mb-3 flex items-center justify-between">
                    <p className={sectionEyebrowClass}>
                      Color
                    </p>
                    <p className="text-base font-semibold text-[#0B32A0]">
                      {visibleColorLabel}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-3 overflow-visible py-1">
                    {selectedStyle.colors.map((color) => (
                      <button
                        key={`${selectedStyle.id}-${color}`}
                        type="button"
                        title={color}
                        aria-label={`Choose ${color}`}
                        onMouseEnter={() => setHoveredColorName(color)}
                        onMouseLeave={() => setHoveredColorName(null)}
                        onFocus={() => setHoveredColorName(color)}
                        onBlur={() => setHoveredColorName(null)}
                        onClick={() => {
                          setSelectedColorName(color);
                          setHoveredColorName(color);
                        }}
                        className={`h-8 w-8 shrink-0 rounded-full border border-[#1C1C1C]/10 shadow-sm transition ${
                          selectedColorName === color
                            ? "ring-2 ring-[#FF4200] ring-offset-[3px]"
                            : "hover:ring-2 hover:ring-[#FF4200] hover:ring-offset-[3px]"
                        }`}
                        style={{ background: resolveSwatchColor(color) }}
                      />
                    ))}
                  </div>
                  <p className="mt-3 text-sm leading-6 text-[#8a8a8a]">
                    Hover a swatch to preview the tote color, or click to lock it in.
                  </p>
                </section>

                <section>
                  <div className={warmPanelClass}>
                    <div className="mb-3 flex items-start justify-between gap-3">
                      <div>
                        <p className={sectionEyebrowClass}>
                          Quantity
                        </p>
                        <p className="mt-2 text-sm leading-6 text-[#8a8a8a]">
                          Keep the tote build simple: one total quantity, one blank, then layer in decoration.
                        </p>
                      </div>
                      <span className="shrink-0 rounded-full bg-[#FF4200] px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-white">
                        100-piece minimum
                      </span>
                    </div>

                    <div className={insetPanelClass}>
                      <div className="flex items-center gap-2">
                        <input
                          type="number"
                          min={100}
                          step={10}
                          value={quantity}
                          onChange={(event) => setQuantity(Math.max(100, Number(event.target.value) || 100))}
                          className="h-11 w-28 rounded-[0.95rem] border border-[#081E6F]/12 bg-white px-3 text-right text-base font-semibold text-[#0B32A0] outline-none focus:border-[#FF4200]"
                        />
                        <span className="text-sm font-medium text-[#8a8a8a]">pieces</span>
                      </div>

                      <div className="relative mt-4 px-1 pt-8">
                        <div
                          className="pointer-events-none absolute top-0 z-10"
                          style={sliderPositionStyle(quantityTierIndex, QUANTITY_MARKS.length)}
                        >
                          <span className="inline-flex min-h-8 whitespace-nowrap rounded-full bg-[#0B32A0] px-3.5 py-1.5 text-[11px] font-semibold text-white">
                            {money(shippingIncludedUnitPrice)}/tote
                          </span>
                        </div>
                        <input
                          type="range"
                          min={0}
                          max={Math.max(QUANTITY_MARKS.length - 1, 0)}
                          step={1}
                          value={quantityTierIndex}
                          onChange={(event) => setQuantity(QUANTITY_MARKS[Number(event.target.value)] ?? 100)}
                          className="h-2 w-full cursor-pointer accent-[#FF4200]"
                          style={{ accentColor: "#0B32A0" }}
                        />
                        <div className="pointer-events-none relative mt-2 h-4">
                          {QUANTITY_MARKS.map((mark, index) => (
                            <div
                              key={mark}
                              className="absolute top-0 flex min-w-0 flex-col items-center"
                              style={sliderPositionStyle(index, QUANTITY_MARKS.length)}
                            >
                              <div className="h-1.5 w-px bg-[#081E6F]/30" />
                            </div>
                          ))}
                        </div>
                        <div className="mt-1 flex justify-between text-[11px] font-medium text-[#8a8a8a]">
                          {QUANTITY_MARKS.map((mark) => (
                            <span key={mark}>{mark >= 1000 ? mark.toLocaleString() : mark}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <section>
                  <p className={`mb-3 ${sectionEyebrowClass}`}>
                    Decoration method
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    {FRONT_DECORATION_OPTIONS.map((option) => (
                      <button
                        key={option.id}
                        type="button"
                        onClick={() => setFrontDecoration(option.id)}
                        className={`min-h-[5rem] rounded-[1.2rem] border px-4 py-3 text-left transition duration-200 ${
                          frontDecoration === option.id ? frontDecorationSelectedOptionClass : neutralOptionClass
                        }`}
                      >
                        <span className="block text-[13px] font-semibold uppercase tracking-[0.12em]">
                          {option.label}
                        </span>
                        <span className={`mt-2 block text-[12px] leading-5 ${
                          frontDecoration === option.id ? "text-white/78" : "text-[#7b7b7b]"
                        }`}>
                          {option.note}
                        </span>
                      </button>
                    ))}
                  </div>
                </section>

                {frontDecoration === "screenPrint" ? (
                  <>
                    <section className={warmPanelClass}>
                      <p className={sectionEyebrowClass}>
                        Front print colors
                      </p>
                      <div className="mt-4 grid grid-cols-5 gap-2">
                        {[1, 2, 3, 4, 5].map((count) => (
                          <button
                            key={count}
                            type="button"
                            onClick={() => setFrontPrintColors(count)}
                            className={`min-h-12 rounded-[1rem] border text-sm font-semibold transition ${
                              frontPrintColors === count ? secondarySelectedOptionClass : neutralOptionClass
                            }`}
                          >
                            {count}
                          </button>
                        ))}
                      </div>
                    </section>

                    <section className={warmPanelClass}>
                      <p className={sectionEyebrowClass}>
                        Back print
                      </p>
                      <div className="mt-4 grid grid-cols-3 gap-2">
                        {[0, 1, 2, 3, 4, 5].map((count) => (
                          <button
                            key={count}
                            type="button"
                            onClick={() => setBackPrintColors(count)}
                            className={`min-h-12 rounded-[1rem] border px-3 text-sm font-semibold transition ${
                              backPrintColors === count ? secondarySelectedOptionClass : neutralOptionClass
                            }`}
                          >
                            {count === 0 ? "None" : `${count} color${count === 1 ? "" : "s"}`}
                          </button>
                        ))}
                      </div>
                    </section>
                  </>
                ) : (
                  <section className={warmPanelClass}>
                    <p className={sectionEyebrowClass}>
                      Embroidery colors
                    </p>
                    <div className="mt-4 grid grid-cols-5 gap-2">
                      {[1, 2, 3, 4, 5].map((count) => (
                        <button
                          key={count}
                          type="button"
                          onClick={() => setEmbroideryColorCount(count)}
                          className={`min-h-12 rounded-[1rem] border text-sm font-semibold transition ${
                            embroideryColorCount === count ? secondarySelectedOptionClass : neutralOptionClass
                          }`}
                        >
                          {count}
                        </button>
                      ))}
                    </div>
                  </section>
                )}

                <section>
                  <p className={`mb-3 ${useSharedToteTheme ? "text-[11px] font-semibold uppercase tracking-[0.16em] text-[#0B32A0]/58" : sectionEyebrowClass}`}>
                    Finishing details
                  </p>
                  <div className={`grid gap-3 ${useSharedToteTheme ? "sm:grid-cols-2" : ""}`}>
                    {PACKAGING_OPTIONS.map((option) => {
                      const isActive = packaging.includes(option);

                      return (
                        <button
                          key={option}
                          type="button"
                          onClick={() => setPackaging((current) => (
                            current.includes(option)
                              ? current.filter((item) => item !== option)
                              : [...current, option]
                          ))}
                          className={`${useSharedToteTheme ? "rounded-[1.2rem] p-5" : "rounded-[1rem] px-4 py-3"} border text-left transition ${
                            isActive
                              ? (useSharedToteTheme ? tintedSecondarySelectedOptionClass : secondarySelectedOptionClass)
                              : neutralOptionClass
                          }`}
                        >
                          <span className={`block ${useSharedToteTheme ? "text-base" : "text-[13px] uppercase tracking-[0.12em]"} font-semibold`}>
                            {option}
                          </span>
                          <span className={`mt-2 block ${useSharedToteTheme ? "text-sm" : "text-[12px]"} ${
                            isActive
                              ? (useSharedToteTheme ? "text-[#0B32A0]/72" : "text-white/78")
                              : "text-[#7b7b7b]"
                          }`}>
                            {`+${money(CATALOG_PACKAGING_PRICES[option])}${useSharedToteTheme ? "/unit" : " / tote"}`}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </section>

                {useSharedToteTheme ? (
                  <section className="rounded-[1.6rem] border border-dashed border-[#081E6F]/22 bg-[linear-gradient(180deg,#F8FAFD_0%,#F3F6FB_100%)] p-5">
                    <div className="flex flex-col gap-3">
                      <div>
                        <p className={sectionEyebrowClass}>
                          Upload your logo
                        </p>
                        <p className="mt-2 text-sm text-[#8a8a8a]">
                          Vector files preferred: AI, PDF, EPS, SVG
                        </p>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <label className="flex min-h-12 cursor-pointer items-center justify-center rounded-[1rem] bg-[#F5F7FC] px-5 text-base font-semibold text-[#0B32A0] ring-1 ring-[#081E6F]/15 transition hover:ring-[#0B32A0] hover:shadow-[0_12px_24px_rgba(8,30,111,0.08)]">
                          {artworkName || "Upload artwork"}
                          <input
                            type="file"
                            className="sr-only"
                            accept=".ai,.pdf,.eps,.svg,.png,.jpg,.jpeg"
                            onChange={(event) => setArtworkName(event.target.files?.[0]?.name ?? "")}
                          />
                        </label>
                        <button
                          type="button"
                          onClick={() => setNeedsArtworkHelp((current) => !current)}
                          className={`flex min-h-12 items-center justify-center gap-2.5 rounded-[1rem] px-5 text-base font-semibold transition ${
                            needsArtworkHelp
                              ? tintedSecondarySelectedOptionClass
                              : neutralOptionClass
                          }`}
                        >
                          <span
                            className={`flex h-5 w-5 items-center justify-center rounded border text-[11px] leading-none ${
                              needsArtworkHelp
                                ? "border-[#0B32A0] bg-[#0B32A0] text-white"
                                : "border-[#081E6F]/18 bg-white text-transparent"
                            }`}
                          >
                            &#10003;
                          </span>
                          Need Artwork?
                        </button>
                      </div>
                      <p className="text-[15px] leading-7 text-[#4b4b4b]">
                        Not sure your artwork is right? Upload what you&apos;ve got, and we&apos;ll check it out for free.
                      </p>
                    </div>
                  </section>
                ) : null}

                <section>
                  <label className={`mb-3 block ${sectionEyebrowClass}`}>
                    Additional notes
                  </label>
                  {useSharedToteTheme ? (
                    <>
                      <p className="mb-3 text-sm leading-6 text-[#8a8a8a]">
                        Flag placements, Pantones, packaging requests, or anything else we should build around.
                      </p>
                      <p className="mb-3 text-sm leading-6 text-[#8a8a8a]">
                        Need to split this across different colors or styles? Leave a note and we&apos;ll reach out.
                      </p>
                    </>
                  ) : null}
                  <textarea
                    value={notes}
                    onChange={(event) => setNotes(event.target.value)}
                    rows={useSharedToteTheme ? 3 : 5}
                    placeholder={useSharedToteTheme
                      ? "Optional notes on placements, Pantones, finishing details, or anything else to flag"
                      : "Call out print size, branding direction, event use, or anything else that helps us quote the tote more accurately."}
                    className={useSharedToteTheme
                      ? "w-full rounded-[1.2rem] border border-[#081E6F]/15 bg-[#F5F7FC] px-4 py-4 text-[15px] font-normal text-[#0B32A0] placeholder:text-[#8a8a8a] focus:border-[#FF4200] focus:outline-none"
                      : `${textInputClass} w-full py-3`}
                  />
                </section>

                {useSharedToteTheme ? (
                  <section className="border-t border-[#081E6F]/10 pt-5">
                    <p className={`mb-3 ${sectionEyebrowClass}`}>
                      Included
                    </p>
                    <ul className="grid gap-3">
                      {includedItems.map((item) => (
                        <li
                          key={item}
                          className="flex items-center justify-between gap-3 rounded-[1rem] border border-[#0B32A0]/10 bg-[#F5F7FC] px-4 py-3 text-[15px] text-[#4b4b4b]"
                        >
                          <span className="flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-[var(--og-orange)]" />
                            {item}
                          </span>
                          <span className="inline-flex shrink-0 rounded-full border border-[#2F7D32]/18 bg-[#E8F6EA] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#2F7D32]">
                            Included
                          </span>
                        </li>
                      ))}
                    </ul>
                  </section>
                ) : null}
              </div>
            </div>
          </aside>

          <aside className="space-y-4 lg:self-start">
            <div className={`${panelClass} ${useSharedToteTheme ? "overflow-hidden xl:sticky xl:top-24 xl:self-start" : "lg:sticky lg:top-24"}`}>
              <div>
                <div>
                  <p className={`${useSharedToteTheme ? "text-xs tracking-[0.14em] text-[#8a8a8a]" : "text-[11px] tracking-[0.18em] text-[#FF4200]"} font-semibold uppercase`}>
                    Live price summary
                  </p>
                  <p className={`mt-2 ${useSharedToteTheme ? "text-[15px] leading-6 text-[#4b4b4b]" : "text-sm leading-6 text-[#5a5a5a]"}`}>
                    {useSharedToteTheme
                      ? "Your blank, decoration choices, and finish upgrades update the estimate in real time."
                      : "Estimated for the current tote build with local decoration. Final quoting can shift if art scale or finishing changes."}
                  </p>
                </div>
              </div>

              <div className={useSharedToteTheme ? "mt-6 space-y-3.5" : "mt-4 space-y-3"}>
                {[
                  { label: "Tote style", value: `AS Colour ${selectedStyle.id} ${selectedStyle.name}` },
                  { label: "Color", value: selectedColorName },
                  { label: "Total quantity", value: `${quantity.toLocaleString()} units` },
                  { label: "Decoration", value: frontDecorationLabel },
                  { label: "Back print", value: backPrintLabel },
                  { label: useSharedToteTheme ? "Packaging upgrades" : "Packaging", value: packaging.length > 0 ? packaging.join(", ") : "None" },
                  { label: useSharedToteTheme ? "Artwork help" : "Blank tote", value: useSharedToteTheme ? (needsArtworkHelp ? "Yes" : "No") : money(pricing.blankUnitPrice) },
                  { label: useSharedToteTheme ? "Base unit price" : "Front decoration", value: useSharedToteTheme ? money(pricing.blankUnitPrice) : money(pricing.frontDecorationUnitPrice) },
                  { label: useSharedToteTheme ? "Selected options" : "Extra front colors", value: useSharedToteTheme ? (Math.max(shippingIncludedUnitPrice - pricing.blankUnitPrice, 0) > 0 ? `+${money(Math.max(shippingIncludedUnitPrice - pricing.blankUnitPrice, 0))}` : "Included") : (pricing.frontExtraColorUnitPrice > 0 ? money(pricing.frontExtraColorUnitPrice) : "Included") },
                  { label: useSharedToteTheme ? "Turnaround" : "Back print add-on", value: useSharedToteTheme ? "2-3 weeks" : (pricing.backPrintUnitPrice > 0 ? money(pricing.backPrintUnitPrice) : "None") },
                  { label: useSharedToteTheme ? "Estimated delivery date" : "Finishing add-ons", value: useSharedToteTheme ? estimatedDeliveryShortLabel : (pricing.packagingUnitPrice > 0 ? money(pricing.packagingUnitPrice) : "None") },
                  ...(useSharedToteTheme ? [] : [
                    { label: "Estimated unit", value: money(shippingIncludedUnitPrice) },
                    { label: "Estimated total", value: money(estimatedTotal) },
                  ]),
                ].map((row) => (
                  <div
                    key={row.label}
                    className={useSharedToteTheme
                      ? "grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-4 rounded-[1rem] bg-[#F7F9FC] px-4 py-3"
                      : "flex items-center justify-between gap-3 rounded-[1rem] border border-[#081E6F]/10 bg-white px-4 py-3"}
                  >
                    <span className={summaryLabelClass}>{row.label}</span>
                    <span className={summaryValueClass}>{row.value}</span>
                  </div>
                ))}
              </div>

              {!useSharedToteTheme ? (
                <div className={`${insetPanelClass} mt-4`}>
                  <p className={sectionEyebrowClass}>Included</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {includedItems.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-[#081E6F]/10 bg-white px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#0B32A0]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ) : null}

              {!useSharedToteTheme ? (
                <div className="mt-5">
                <div className="flex items-center gap-3 rounded-[1rem] border border-[#081E6F]/10 bg-[#F5F7FC] px-4 py-3">
                  <span
                    className="h-8 w-8 shrink-0 rounded-full border border-[#081E6F]/10"
                    style={{ backgroundColor: selectedColorHex }}
                  />
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#6b6b6b]">
                      Selected tote color
                    </p>
                    <p className="text-sm font-semibold text-[#0B32A0]">{selectedColorName}</p>
                  </div>
                </div>
                </div>
              ) : null}

              {useSharedToteTheme ? (
                <div className="mt-6 rounded-[1.3rem] border border-[#081E6F]/10 bg-[linear-gradient(180deg,#F8F2EA_0%,#FDFDFD_100%)] p-5">
                  <div className="mb-3 flex items-end justify-between gap-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8a8a8a]">
                      Unit price
                    </p>
                    <p className="text-2xl font-semibold leading-none text-[#0B32A0]">
                      {money(shippingIncludedUnitPrice)}
                    </p>
                  </div>
                  <div className="flex items-end justify-between gap-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8a8a8a]">
                      Total
                    </p>
                    <p className="text-4xl font-semibold leading-none text-[#FF4200]">
                      {money(estimatedTotal)}
                    </p>
                  </div>
                </div>
              ) : null}

              <div className="mt-5 space-y-3">
                <button
                  type="button"
                  onClick={handleAddToProject}
                  className={useSharedToteTheme
                    ? "flex min-h-14 w-full items-center justify-center rounded-[1.1rem] bg-[#FF4200] px-6 text-center text-[15px] font-semibold uppercase tracking-[0.12em] text-white transition hover:-translate-y-0.5 hover:shadow-[0_16px_32px_rgba(255,66,0,0.24)]"
                    : "inline-flex min-h-14 w-full items-center justify-center rounded-[1rem] bg-[#0B32A0] px-5 text-center text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-[#082a84]"}
                >
                  Add to Project
                </button>
                {useSharedToteTheme ? (
                  <div className="rounded-[1rem] border border-[#081E6F]/10 bg-[#F7F9FC] px-4 py-3 text-left">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#7a7a7a]">
                      Project flow
                    </p>
                    <p className="mt-1 text-xs leading-5 text-[#4b4b4b]">
                      Add this tote build to your project cart, keep stacking products, and send one combined request when you&apos;re ready.
                    </p>
                    <p className="mt-1 text-xs leading-5 text-[#4b4b4b]">
                      We&apos;ll review the full cart before final pricing, decoration guidance, and timing are confirmed.
                    </p>
                  </div>
                ) : (
                  <div className="rounded-[1rem] border border-[#081E6F]/10 bg-[#F7F9FC] px-4 py-3 text-left">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#7a7a7a]">
                      Project flow
                    </p>
                    <p className="mt-1 text-xs leading-5 text-[#4b4b4b]">
                      Add this tote build to your project cart, then send one combined request from the cart when the project is ready.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </aside>
    </MasterCustomizerShell>
  );
}
