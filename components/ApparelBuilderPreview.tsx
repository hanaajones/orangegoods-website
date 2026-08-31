"use client";

import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
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
  immersiveCustomizerTextInputClass,
  getCustomizerTopBadgeAsset,
  MasterCustomizerShell,
} from "@/components/MasterCustomizerShell";
import { buildCustomizerNavigation, getCustomizerProductionPathLabel } from "@/lib/customizer-navigation";
import {
  CATALOG_PACKAGING_PRICES,
  calculateCatalogBuilderPricing,
  type CatalogPackagingUpgrade,
  type CatalogSpecialtyPrintUpgrade,
  type PrintCat,
} from "@/data/catalog";
import { QUICK_TURN_FREE_SHIPPING_LABEL, addQuickTurnApparelShippingIncludedPrice } from "@/lib/quick-turn-shipping";

type BuilderColor = {
  name: string;
  hex: string;
  imageUrl: string;
  images: Array<{
    label: string;
    url: string;
  }>;
  family: string | null;
};

export type ApparelBuilderStyle = {
  slug: string;
  name: string;
  fullName: string;
  brand: string;
  category: "tees" | "hoodies" | "fleece-bottoms" | "outerwear" | "womens";
  fit: string;
  weight: string;
  material: string;
  description: string;
  printCat: PrintCat;
  blank: number;
  blankMarkup: number;
  timeline: string;
  priceFrom: number;
  sizes: string[];
  colors: BuilderColor[];
};
type FrontDecorationKey = "screenPrint" | "embroidery";
type SleevePrintSide = "left" | "right";
type InkColorEntry = {
  name: string;
  hex: string;
};

const CATEGORY_LABELS: Record<ApparelBuilderStyle["category"], string> = {
  tees: "Tees",
  hoodies: "Hoodies + Fleece",
  "fleece-bottoms": "Bottoms",
  outerwear: "Outerwear",
  womens: "Women's",
};

const FRONT_DECORATION_OPTIONS: Array<{
  id: FrontDecorationKey;
  label: string;
  note: string;
}> = [
  { id: "screenPrint", label: "Screen Print", note: "Best for tees, multi-color art, and cleaner bulk pricing." },
  { id: "embroidery", label: "Embroidery", note: "Best for fleece, outerwear, and quieter logo applications. +$6.00/unit." },
];

const SPECIALTY_OPTIONS: CatalogSpecialtyPrintUpgrade[] = [
  "Water-Based Ink",
  "Discharge Print",
  "Puff Print",
];

const PACKAGING_OPTIONS = Object.keys(CATALOG_PACKAGING_PRICES) as CatalogPackagingUpgrade[];
const COLOR_COUNT_OPTIONS = [1, 2, 3, 4, 5];
const QUANTITY_MARKS = [100, 250, 500, 1000, 1500, 2000];
const SIZE_ORDER = ["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL"];
const DEFAULT_IMAGE = "/images/gallery/apparel-blank-people-would-buy-dscf4886.jpg";
const PANTONE_SWATCHES = [
  { name: "Pantone White", hex: "#F5F4F0" },
  { name: "Pantone Black C", hex: "#2D2926" },
  { name: "Pantone Cool Gray 11 C", hex: "#53565A" },
  { name: "Pantone Warm Gray 8 C", hex: "#A8998A" },
  { name: "Pantone 123 C", hex: "#FFC72C" },
  { name: "Pantone 7406 C", hex: "#F2A900" },
  { name: "Pantone 165 C", hex: "#FF671F" },
  { name: "Pantone 172 C", hex: "#FA4616" },
  { name: "Pantone Orange 021 C", hex: "#FE5000" },
  { name: "Pantone 185 C", hex: "#E4002B" },
  { name: "Pantone 186 C", hex: "#C8102E" },
  { name: "Pantone 200 C", hex: "#BA0C2F" },
  { name: "Pantone 295 C", hex: "#003A70" },
  { name: "Pantone 286 C", hex: "#0033A0" },
  { name: "Pantone 7687 C", hex: "#1D428A" },
  { name: "Pantone 2728 C", hex: "#0047BB" },
  { name: "Pantone 3252 C", hex: "#00B5E2" },
  { name: "Pantone 3268 C", hex: "#00C7B1" },
  { name: "Pantone 347 C", hex: "#009A44" },
  { name: "Pantone 356 C", hex: "#007A33" },
  { name: "Pantone 5535 C", hex: "#1D3C34" },
  { name: "Pantone 4625 C", hex: "#4F2C1D" },
  { name: "Pantone 871 C", hex: "#84754E" },
  { name: "Pantone 877 C", hex: "#8A8D8F" },
] as const;
const selectArrowSvg = `url("data:image/svg+xml,${encodeURIComponent(
  "<svg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 20 20' fill='none'><path d='M5 7.5L10 12.5L15 7.5' stroke='%230B32A0' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'/></svg>"
)}")`;

function money(value: number) {
  return value.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });
}

function sortSizes(sizes: string[]) {
  return [...sizes].sort((left, right) => {
    const leftIndex = SIZE_ORDER.indexOf(left);
    const rightIndex = SIZE_ORDER.indexOf(right);

    if (leftIndex >= 0 || rightIndex >= 0) {
      if (leftIndex === -1) return 1;
      if (rightIndex === -1) return -1;
      return leftIndex - rightIndex;
    }

    return Number(left) - Number(right);
  });
}

function buildInitialSizeBreakdown(sizes: string[], targetQty: number) {
  const orderedSizes = sortSizes(sizes);
  const alphaWeights: Record<string, number> = {
    XS: 0.04,
    S: 0.16,
    M: 0.28,
    L: 0.28,
    XL: 0.16,
    "2XL": 0.05,
    "3XL": 0.02,
    "4XL": 0.008,
    "5XL": 0.002,
  };
  const hasAlphaSizing = orderedSizes.some((size) => SIZE_ORDER.includes(size));
  const breakdown: Record<string, number> = {};
  let assigned = 0;

  orderedSizes.forEach((size, index) => {
    const remainingSlots = orderedSizes.length - index;
    const nextValue = hasAlphaSizing
      ? Math.round(targetQty * (alphaWeights[size] ?? 0.08))
      : Math.floor(targetQty / orderedSizes.length);
    const normalizedValue = index === orderedSizes.length - 1
      ? Math.max(targetQty - assigned, 0)
      : Math.max(remainingSlots === 1 ? targetQty - assigned : nextValue, 0);

    breakdown[size] = normalizedValue;
    assigned += normalizedValue;
  });

  if (assigned !== targetQty && orderedSizes.length > 0) {
    const finalSize = orderedSizes[orderedSizes.length - 1];
    breakdown[finalSize] += targetQty - assigned;
  }

  return breakdown;
}

function rebalanceSizeBreakdown(sizes: string[], current: Record<string, number>, targetQty: number) {
  const orderedSizes = sortSizes(sizes);
  const currentTotal = orderedSizes.reduce((sum, size) => sum + (current[size] ?? 0), 0);

  if (currentTotal <= 0) {
    return buildInitialSizeBreakdown(sizes, targetQty);
  }

  const next: Record<string, number> = {};
  let assigned = 0;

  orderedSizes.forEach((size, index) => {
    const currentValue = current[size] ?? 0;
    const scaledValue = index === orderedSizes.length - 1
      ? Math.max(targetQty - assigned, 0)
      : Math.max(Math.round((currentValue / currentTotal) * targetQty), 0);
    next[size] = scaledValue;
    assigned += scaledValue;
  });

  if (assigned !== targetQty && orderedSizes.length > 0) {
    const finalSize = orderedSizes[orderedSizes.length - 1];
    next[finalSize] += targetQty - assigned;
  }

  return next;
}

function timelineLabel(style: ApparelBuilderStyle) {
  return style.timeline;
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

function estimatedDeliveryWindow(style: ApparelBuilderStyle) {
  if (style.timeline === "2-4 weeks") return { startDays: 19, endDays: 35 };
  return { startDays: 19, endDays: 28 };
}

function summarySizeLabel(sizeBreakdown: Record<string, number>) {
  return Object.entries(sizeBreakdown)
    .filter(([, qty]) => qty > 0)
    .map(([size, qty]) => `${size} ${qty}`)
    .join(" / ");
}

function nearestQuantityMarkIndex(value: number) {
  return QUANTITY_MARKS.reduce((bestIndex, mark, index) => (
    Math.abs(mark - value) < Math.abs(QUANTITY_MARKS[bestIndex] - value) ? index : bestIndex
  ), 0);
}

function sliderPositionStyle(index: number, total: number) {
  if (total <= 1) {
    return { left: "0%", transform: "translateX(0%)" };
  }

  const percent = (index / (total - 1)) * 100;
  const clampedTransform = index === 0 ? "translateX(0%)" : index === total - 1 ? "translateX(-100%)" : "translateX(-50%)";

  return {
    left: `${percent}%`,
    transform: clampedTransform,
  };
}

function createInkColorSlots(count: number) {
  return Array.from({ length: count }, () => ({
    name: "",
    hex: "#0B32A0",
  }));
}

function summarizeInkColors(label: string, colors: InkColorEntry[], count: number) {
  const filled = colors
    .slice(0, count)
    .map((color, index) => {
      const name = color.name.trim();
      return name ? `${name} (${color.hex})` : `Color ${index + 1} (${color.hex})`;
    });

  return filled.length > 0 ? `${label}: ${filled.join(", ")}` : "";
}

function normalizePantoneLabel(value: string) {
  return value
    .trim()
    .toUpperCase()
    .replace(/^PMS\s+/, "")
    .replace(/^PANTONE\s+/, "")
    .replace(/\s+/g, " ");
}

function findPantoneByName(value: string) {
  const normalized = normalizePantoneLabel(value);
  if (!normalized) return null;

  const direct = PANTONE_SWATCHES.find((pantone) => normalizePantoneLabel(pantone.name) === normalized);
  if (direct) return direct;

  const inferred = PANTONE_SWATCHES.find((pantone) => {
    const pantoneLabel = normalizePantoneLabel(pantone.name);
    return pantoneLabel.endsWith(normalized) || normalized.endsWith(pantoneLabel.replace(/^PANTONE\s+/, ""));
  });

  return inferred ?? null;
}

function hexToRgb(hex: string) {
  const cleaned = hex.replace("#", "");
  if (cleaned.length !== 6) return null;

  const red = Number.parseInt(cleaned.slice(0, 2), 16);
  const green = Number.parseInt(cleaned.slice(2, 4), 16);
  const blue = Number.parseInt(cleaned.slice(4, 6), 16);

  if ([red, green, blue].some(Number.isNaN)) {
    return null;
  }

  return { red, green, blue };
}

function findClosestPantoneByHex(hex: string) {
  const target = hexToRgb(hex);
  if (!target) return null;

  return PANTONE_SWATCHES.reduce<(typeof PANTONE_SWATCHES)[number] | null>((closest, pantone) => {
    const rgb = hexToRgb(pantone.hex);
    if (!rgb) return closest;

    const distance = (
      (target.red - rgb.red) ** 2 +
      (target.green - rgb.green) ** 2 +
      (target.blue - rgb.blue) ** 2
    );

    if (!closest) {
      return pantone;
    }

    const closestRgb = hexToRgb(closest.hex);
    if (!closestRgb) {
      return pantone;
    }

    const closestDistance = (
      (target.red - closestRgb.red) ** 2 +
      (target.green - closestRgb.green) ** 2 +
      (target.blue - closestRgb.blue) ** 2
    );

    return distance < closestDistance ? pantone : closest;
  }, null);
}

function HexColorPicker({
  value,
  onChange,
  ariaLabel,
}: {
  value: string;
  onChange: (value: string) => void;
  ariaLabel: string;
}) {
  return (
    <label className="group relative flex h-12 cursor-pointer items-center gap-2.5 rounded-[1rem] border border-[#0B32A0]/12 bg-[#F5F7FC] px-3 transition duration-200 hover:border-[#FF4200] hover:shadow-[0_14px_30px_rgba(8,30,111,0.1)]">
      <span
        className="h-6 w-6 shrink-0 rounded-[0.8rem] border border-[#0B32A0]/16 shadow-sm"
        style={{ backgroundColor: value }}
      />
      <span className="min-w-0 flex-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#0B32A0]">
        Pick hex
      </span>
      <span className="text-base text-[#0B32A0]/45 transition group-hover:text-[#FF4200]">+</span>
      <input
        type="color"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
        aria-label={ariaLabel}
      />
    </label>
  );
}

export function ApparelBuilderPreview({
  styles,
  draftLinks,
  showPageHero = true,
}: {
  styles: ApparelBuilderStyle[];
  draftLinks: Array<{ label: string; href: string }>;
  showPageHero?: boolean;
}) {
  const searchParams = useSearchParams();
  const requestedStyleSlug = searchParams.get("style") ?? searchParams.get("styleSlug");
  const fallbackStyle = styles.find((style) => style.slug === requestedStyleSlug) ?? styles[0];
  const [selectedStyleSlug, setSelectedStyleSlug] = useState(fallbackStyle?.slug ?? "");
  const selectedStyle = styles.find((style) => style.slug === selectedStyleSlug) ?? fallbackStyle;
  const [selectedColorName, setSelectedColorName] = useState(selectedStyle?.colors[0]?.name ?? "");
  const [hoveredColorName, setHoveredColorName] = useState<string | null>(null);
  const [sizeBreakdown, setSizeBreakdown] = useState<Record<string, number>>(
    selectedStyle ? buildInitialSizeBreakdown(selectedStyle.sizes, 250) : {}
  );
  const [frontDecoration, setFrontDecoration] = useState<FrontDecorationKey>("screenPrint");
  const [frontPrintEnabled, setFrontPrintEnabled] = useState(true);
  const [frontPrintColors, setFrontPrintColors] = useState(1);
  const [backPrintColors, setBackPrintColors] = useState(0);
  const [sleevePrintColors, setSleevePrintColors] = useState(0);
  const [sleevePrintSide, setSleevePrintSide] = useState<SleevePrintSide>("left");
  const [embroideryColorCount, setEmbroideryColorCount] = useState(1);
  const [printUpgrade, setPrintUpgrade] = useState<CatalogSpecialtyPrintUpgrade | "none">("none");
  const [packaging, setPackaging] = useState<CatalogPackagingUpgrade[]>([]);
  const [notes, setNotes] = useState("");
  const [artworkName, setArtworkName] = useState("");
  const [needsArtworkHelp, setNeedsArtworkHelp] = useState(false);
  const [placementInkColors, setPlacementInkColors] = useState<{
    front: InkColorEntry[];
    back: InkColorEntry[];
    sleeve: InkColorEntry[];
    embroidery: InkColorEntry[];
  }>({
    front: createInkColorSlots(5),
    back: createInkColorSlots(5),
    sleeve: createInkColorSlots(5),
    embroidery: createInkColorSlots(5),
  });

  useEffect(() => {
    if (!selectedStyle) return;
    if (!styles.some((style) => style.slug === selectedStyleSlug)) {
      setSelectedStyleSlug(selectedStyle.slug);
    }
  }, [selectedStyle, selectedStyleSlug, styles]);

  useEffect(() => {
    if (!selectedStyle) return;
    setSelectedColorName(selectedStyle.colors[0]?.name ?? "");
    setHoveredColorName(null);
    setSizeBreakdown(buildInitialSizeBreakdown(selectedStyle.sizes, 250));
  }, [selectedStyle]);

  useEffect(() => {
    if (frontDecoration === "screenPrint") return;
    setFrontPrintEnabled(true);
    setBackPrintColors(0);
    setSleevePrintColors(0);
    setSleevePrintSide("left");
    setEmbroideryColorCount(1);
    setPrintUpgrade("none");
  }, [frontDecoration]);

  function updatePlacementInkColor(
    placement: "front" | "back" | "sleeve" | "embroidery",
    index: number,
    field: keyof InkColorEntry,
    value: string
  ) {
    const pantoneMatch = field === "name" ? findPantoneByName(value) : null;
    const closestPantone = field === "hex" ? findClosestPantoneByHex(value) : null;

    setPlacementInkColors((current) => ({
      ...current,
      [placement]: current[placement].map((color, colorIndex) => (
        colorIndex === index
          ? {
            ...color,
            ...(
              field === "name"
                ? {
                  name: value,
                  hex: pantoneMatch?.hex ?? color.hex,
                }
                : {
                  hex: value,
                  name: closestPantone?.name ?? color.name,
                }
            ),
          }
          : color
      )),
    }));
  }

  if (!selectedStyle) {
    return null;
  }

  const selectedColor = selectedStyle.colors.find((color) => color.name === selectedColorName)
    ?? selectedStyle.colors[0];
  const selectedColorImages = selectedColor?.images.length
    ? selectedColor.images
    : [{ label: "Front", url: selectedColor?.imageUrl ?? DEFAULT_IMAGE }];
  const showScreenPrintFlow = frontDecoration === "screenPrint";
  const orderedSizes = sortSizes(selectedStyle.sizes);
  const actualQuantity = orderedSizes.reduce((sum, size) => sum + (sizeBreakdown[size] ?? 0), 0);
  const pricedQuantity = Math.max(actualQuantity, 100);
  const quantityTierIndex = nearestQuantityMarkIndex(pricedQuantity);
  const pricing = calculateCatalogBuilderPricing({
    blank: selectedStyle.blank,
    blankMarkup: selectedStyle.blankMarkup,
    printCat: selectedStyle.printCat,
    qty: pricedQuantity,
    frontDecoration,
    frontColors: frontDecoration === "screenPrint" && frontPrintEnabled ? frontPrintColors : 0,
    backPrintColors: frontDecoration === "screenPrint" ? backPrintColors : 0,
    sidePrintColors: frontDecoration === "screenPrint" ? sleevePrintColors : 0,
    printUpgrade: frontDecoration === "screenPrint" && printUpgrade !== "none" ? printUpgrade : null,
    packagingUpgrades: packaging,
    rush: false,
    customerSuppliedGoods: false,
  });
  const shippingIncludedUnitPrice = addQuickTurnApparelShippingIncludedPrice(pricing.unitPrice, selectedStyle.printCat);
  const estimatedTotal = shippingIncludedUnitPrice * pricedQuantity;
  const selectedFamilyLabel = CATEGORY_LABELS[selectedStyle.category];
  const visibleColorLabel = hoveredColorName ?? selectedColor?.name ?? "Select a color";
  const deliveryWindow = estimatedDeliveryWindow(selectedStyle);
  const estimatedDeliveryStart = addDays(new Date(), deliveryWindow.startDays);
  const estimatedDeliveryEnd = addDays(new Date(), deliveryWindow.endDays);
  const estimatedDeliveryLabel = `${formatLongDate(estimatedDeliveryStart)} - ${formatLongDate(estimatedDeliveryEnd)}`;
  const estimatedDeliveryShortLabel = `${formatShortDate(estimatedDeliveryStart)} - ${formatShortDate(estimatedDeliveryEnd)}`;
  const baseUnitPrice = selectedStyle.blank + selectedStyle.blankMarkup;
  const selectedOptionsUnitPrice = Math.max(shippingIncludedUnitPrice - baseUnitPrice, 0);
  const basePriceLabel = money(baseUnitPrice);
  const selectedOptionsLabel = selectedOptionsUnitPrice > 0 ? `+${money(selectedOptionsUnitPrice)}` : "Included";
  const sleevePlacementLabel = sleevePrintSide === "left" ? "Left sleeve" : "Right sleeve";
  const frontPrintLabel = frontDecoration === "screenPrint"
    ? (frontPrintEnabled ? `${frontPrintColors} color${frontPrintColors === 1 ? "" : "s"}` : "None")
    : "Front embroidery";
  const sleevePrintLabel = sleevePrintColors > 0
    ? `${sleevePlacementLabel} · ${sleevePrintColors} color${sleevePrintColors === 1 ? "" : "s"}`
    : "None";
  const canTurnOffFrontPrint = backPrintColors > 0 || sleevePrintColors > 0;
  const canTurnOffBackPrint = frontPrintEnabled || sleevePrintColors > 0;
  const canTurnOffSleevePrint = frontPrintEnabled || backPrintColors > 0;
  const brandColorSummary = [
    showScreenPrintFlow ? summarizeInkColors("Front colors", placementInkColors.front, frontPrintColors) : "",
    showScreenPrintFlow && backPrintColors > 0 ? summarizeInkColors("Back colors", placementInkColors.back, backPrintColors) : "",
    showScreenPrintFlow && sleevePrintColors > 0 ? summarizeInkColors("Sleeve colors", placementInkColors.sleeve, sleevePrintColors) : "",
    !showScreenPrintFlow ? summarizeInkColors("Embroidery colors", placementInkColors.embroidery, embroideryColorCount) : "",
  ].filter(Boolean).join(" | ");
  const includedItems = [
    "Premium blank",
    "Size run",
    "Setup costs",
    QUICK_TURN_FREE_SHIPPING_LABEL,
  ];
  const timelineItems = [
    {
      label: "Order review",
      note: "quote, artwork, and final scope check",
      value: "1-2 days",
    },
    { label: "Production", value: timelineLabel(selectedStyle) },
    { label: "Shipping", value: "1-4 days" },
  ];
  const orderProcessSteps = [
    {
      title: "Choose your blank",
      detail: "Start with the actual garment, lock your preferred color, and set the size run before art gets involved.",
    },
    {
      title: "Dial in decoration",
      detail: "Use the live build to scope the right print method, placements, and finish upgrades for the actual blank you picked.",
    },
    {
      title: "Review + production",
      detail: "Once the quote and mockup are approved, we move into production and keep the timing tied to the selected blank and decoration lane.",
    },
  ];
  const projectSummary = [
    `Product: ${selectedStyle.fullName}`,
    "Program: Quick Turn Apparel",
    `Category: ${selectedFamilyLabel}`,
    `Color: ${selectedColor?.name ?? "Not selected"}`,
    `Quantity: ${pricedQuantity}`,
    `Size breakdown: ${summarySizeLabel(sizeBreakdown) || "Not assigned yet"}`,
    `Front decoration: ${frontDecoration === "screenPrint" ? `Screen print (${frontPrintLabel})` : "Embroidery"}`,
    `Back print: ${backPrintColors > 0 ? `${backPrintColors} color${backPrintColors === 1 ? "" : "s"}` : "None"}`,
    `Sleeve print: ${sleevePrintLabel}`,
    `Embroidery colors: ${frontDecoration === "embroidery" ? `${embroideryColorCount} color${embroideryColorCount === 1 ? "" : "s"}` : "N/A"}`,
    `Print upgrade: ${printUpgrade === "none" ? "None" : printUpgrade}`,
    `Packaging: ${packaging.length > 0 ? packaging.join(", ") : "None"}`,
    brandColorSummary ? `Brand colors: ${brandColorSummary}` : "",
    `Timeline: ${timelineLabel(selectedStyle)}`,
    `Estimated unit price: ${money(shippingIncludedUnitPrice)}`,
    `Estimated total: ${money(estimatedTotal)}`,
    artworkName ? `Artwork file: ${artworkName}` : "",
    needsArtworkHelp ? "Needs artwork help: Yes" : "",
    notes.trim() ? `Notes: ${notes.trim()}` : "",
  ].filter(Boolean).join("\n");

  const handoffParams = new URLSearchParams({
    intent: "apparel-quote",
    source: "og-crafted-apparel-builder",
    product: selectedStyle.fullName,
    mode: "Quick Turn Apparel",
    category: selectedFamilyLabel,
    color: selectedColor?.name ?? "",
    qty: String(pricedQuantity),
    sizeBreakdown: orderedSizes.map((size) => `${size}:${sizeBreakdown[size] ?? 0}`).join(", "),
    decoration: frontDecoration,
    frontPrintEnabled: frontDecoration === "screenPrint" && frontPrintEnabled ? "Yes" : "",
    frontPrintColors: frontDecoration === "screenPrint" && frontPrintEnabled ? String(frontPrintColors) : "",
    backPrintColors: frontDecoration === "screenPrint" && backPrintColors > 0 ? String(backPrintColors) : "",
    sleevePrintColors: frontDecoration === "screenPrint" && sleevePrintColors > 0 ? String(sleevePrintColors) : "",
    sleevePrintSide: frontDecoration === "screenPrint" && sleevePrintColors > 0 ? sleevePrintSide : "",
    embroideryColorCount: frontDecoration === "embroidery" ? String(embroideryColorCount) : "",
    printUpgrade: printUpgrade === "none" ? "" : printUpgrade,
    packaging: packaging.join(", "),
    brandColors: brandColorSummary,
    timeline: timelineLabel(selectedStyle),
    estimatedUnitPrice: money(shippingIncludedUnitPrice),
    estimatedTotal: money(estimatedTotal),
    projectSummary,
    additionalCallouts: notes.trim(),
    logoFile: artworkName,
    needsArtworkHelp: needsArtworkHelp ? "Yes" : "",
  });
  const selectInputClass = immersiveCustomizerSelectInputClass;
  const textInputClass = immersiveCustomizerTextInputClass;
  const neutralOptionClass = "border-[#0B32A0]/12 bg-[#F5F7FC] text-[#0B32A0] hover:border-[#FF4200] hover:shadow-[0_12px_24px_rgba(8,30,111,0.08)]";
  const secondarySelectedOptionClass = "border-[#0B32A0] bg-[#0B32A0] text-white";
  const frontDecorationSelectedOptionClass = secondarySelectedOptionClass;
  const tintedSecondarySelectedOptionClass = "border-[#0B32A0] bg-[#EAF0FF] text-[#0B32A0]";
  const disabledOptionClass = "cursor-not-allowed border-[#0B32A0]/10 bg-[#EEF1F6] text-[#0B32A0]/35";
  const panelClass = immersiveCustomizerShellCardClass;
  const warmPanelClass = immersiveCustomizerProcessCardClass;
  const insetPanelClass = immersiveCustomizerInsetPanelClass;
  const sectionEyebrowClass = immersiveCustomizerLabelTextClass;
  const summaryLabelClass = immersiveCustomizerSummaryLabelClass;
  const summaryTitle = selectedStyle.fullName.startsWith(`${selectedStyle.name} — `)
    ? selectedStyle.fullName.slice(selectedStyle.name.length + 3)
    : selectedStyle.fullName;
  const navigation = buildCustomizerNavigation({
    category: "apparel",
    productionPath: "quick-turn",
    currentLabel: summaryTitle,
    returnTo: searchParams.get("returnTo"),
  });
  const topBadgeLabel = getCustomizerProductionPathLabel("quick-turn");
  const topBadgeAsset = getCustomizerTopBadgeAsset(topBadgeLabel ?? undefined);

  return (
    <MasterCustomizerShell
      compactHeader={!showPageHero}
      header={(
        <CustomizerPageHeader
          backHref={navigation.backHref}
          backLabel={navigation.backLabel}
          eyebrow={showPageHero ? "Quick Turn" : undefined}
          title={showPageHero ? "Quick Turn Apparel" : undefined}
          description={showPageHero ? "Build quick-turn apparel around premium blanks, cleaner decoration decisions, and the same tighter customizer rhythm used across the approved hats flow." : undefined}
        >
          {showPageHero && draftLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={immersiveCustomizerGhostLinkClass}
            >
              {link.label}
            </Link>
          ))}
        </CustomizerPageHeader>
      )}
      gridClassName="xl:grid-cols-[minmax(0,1.04fr)_minmax(380px,460px)_minmax(320px,360px)]"
    >
          <div className="space-y-6">
            <div className="grid gap-5">
              {selectedColorImages.map((image, index) => (
                <div
                  key={`${selectedStyle.slug}-${selectedColor?.name ?? "color"}-${image.label}-${index}`}
                  className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] border border-[#081E6F]/10 bg-[linear-gradient(180deg,#FFFFFF_0%,#F7F9FC_100%)] sm:aspect-[5/4]"
                >
                  <Image
                    src={image.url}
                    alt={`${selectedStyle.fullName} in ${selectedColor?.name ?? "selected color"} - ${image.label}`}
                    fill
                    priority={index === 0}
                    sizes="(min-width: 1280px) 34vw, (min-width: 1024px) 46vw, 100vw"
                    className="object-contain p-10"
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
                  What happens after you start your apparel order
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
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#FF4200]">
                      {selectedStyle.name}
                    </p>
                    <h2 className="mt-2 text-5xl leading-none text-[#0B32A0]">
                      {summaryTitle}
                    </h2>
                  </div>

                  {topBadgeLabel ? (
                    topBadgeAsset ? (
                      <Image
                        src={topBadgeAsset.src}
                        alt={topBadgeAsset.alt}
                        width={topBadgeAsset.width}
                        height={topBadgeAsset.height}
                        className="h-10 w-auto shrink-0"
                        priority
                      />
                    ) : (
                      <span className="inline-flex min-h-10 shrink-0 items-center rounded-full border border-[#0B32A0]/14 bg-[#EFF4FF] px-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#0B32A0]">
                        {topBadgeLabel}
                      </span>
                    )
                  ) : null}
                </div>
                <p className="mt-3 text-base leading-7 text-[#4b4b4b]">
                  A tighter quick-turn apparel build around premium blanks, real colorways, and only the decoration decisions that actually matter.
                </p>
              </div>
            </div>

            <div className={panelClass}>
              <div className="space-y-7 py-2">
                <div>
                  <label className={`mb-3 block ${sectionEyebrowClass}`}>
                    Apparel style
                  </label>
                  <select
                    value={selectedStyle.slug}
                    onChange={(event) => setSelectedStyleSlug(event.target.value)}
                    className={selectInputClass}
                    style={{ backgroundImage: selectArrowSvg }}
                  >
                    {styles.map((style) => (
                      <option key={style.slug} value={style.slug}>
                        {`${style.name} - ${CATEGORY_LABELS[style.category]} - ${style.fit} fit`}
                      </option>
                    ))}
                  </select>
                  <p className="mt-3 text-sm leading-6 text-[#8a8a8a]">
                    {selectedStyle.fullName} · {selectedFamilyLabel} · {selectedStyle.fit} fit
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2.5">
                    <span className="rounded-full border border-[#081E6F]/12 bg-[#F5F7FC] px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#0B32A0]">
                      {selectedStyle.brand}
                    </span>
                    <span className="rounded-full border border-[#081E6F]/12 bg-[#F5F7FC] px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#0B32A0]">
                      {selectedStyle.weight}
                    </span>
                    <span className="rounded-full border border-[#081E6F]/12 bg-[#F5F7FC] px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#0B32A0]">
                      {selectedStyle.material}
                    </span>
                    <span className="rounded-full border border-[#FF4200]/16 bg-[#FFF4ED] px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#FF4200]">
                      From {money(selectedStyle.priceFrom)}/unit
                    </span>
                  </div>
                  <p className="mt-4 text-[15px] leading-7 text-[#4b4b4b]">
                    {selectedStyle.description}
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
                        key={`${selectedStyle.slug}-${color.name}`}
                        type="button"
                        title={color.name}
                        aria-label={`Choose ${color.name}`}
                        onMouseEnter={() => setHoveredColorName(color.name)}
                        onMouseLeave={() => setHoveredColorName(null)}
                        onFocus={() => setHoveredColorName(color.name)}
                        onBlur={() => setHoveredColorName(null)}
                        onClick={() => {
                          setSelectedColorName(color.name);
                          setHoveredColorName(color.name);
                        }}
                        className={`h-8 w-8 shrink-0 rounded-full border border-[#1C1C1C]/10 shadow-sm transition ${
                          selectedColor?.name === color.name
                            ? "ring-2 ring-[#FF4200] ring-offset-[3px]"
                            : "hover:ring-2 hover:ring-[#FF4200] hover:ring-offset-[3px]"
                        }`}
                        style={{ backgroundColor: color.hex }}
                      />
                    ))}
                  </div>
                  <p className="mt-3 text-sm leading-6 text-[#8a8a8a]">
                    Hover a swatch to preview the color name, or click to lock it in.
                  </p>
                </section>

                <section>
                  <div className={warmPanelClass}>
                    <div className="mb-3 flex items-start justify-between gap-3">
                      <div>
                        <p className={sectionEyebrowClass}>
                          Sizes + quantity
                        </p>
                        <p className="mt-2 text-sm leading-6 text-[#8a8a8a]">
                          Set the total and keep the full size run in one compact block.
                        </p>
                      </div>
                      <span className="shrink-0 rounded-full bg-[#FF4200] px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-white">
                        100-piece minimum
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 xl:grid-cols-5">
                      {orderedSizes.map((size) => (
                        <label key={size} className="block">
                          <span className="mb-2 block text-center text-[11px] font-semibold uppercase tracking-[0.1em] text-[#7d7d7d]">
                            {size}
                          </span>
                          <input
                            type="number"
                            min={0}
                            step={1}
                            value={sizeBreakdown[size] ?? 0}
                            onChange={(event) => {
                              const nextValue = Math.max(0, Number(event.target.value) || 0);
                              setSizeBreakdown((current) => ({
                                ...current,
                                [size]: nextValue,
                              }));
                            }}
                            className="h-14 w-full rounded-[1rem] border border-[#081E6F]/10 bg-white px-2 text-center text-lg font-semibold text-[#0B32A0] outline-none transition focus:border-[#FF4200]"
                            aria-label={`${size} quantity`}
                          />
                        </label>
                      ))}
                    </div>

                    <div className={`${insetPanelClass} mt-4`}>
                      <div className="flex items-center gap-2">
                        <input
                          type="number"
                          min={100}
                          step={10}
                          value={pricedQuantity}
                          onChange={(event) => {
                            const nextQty = Math.max(100, Number(event.target.value) || 100);
                            setSizeBreakdown(rebalanceSizeBreakdown(selectedStyle.sizes, sizeBreakdown, nextQty));
                          }}
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
                            {money(shippingIncludedUnitPrice)}/unit
                          </span>
                        </div>
                        <input
                          type="range"
                          min={0}
                          max={Math.max(QUANTITY_MARKS.length - 1, 0)}
                          step={1}
                          value={quantityTierIndex}
                          onChange={(event) => {
                            const nextMark = QUANTITY_MARKS[Number(event.target.value)] ?? 100;
                            setSizeBreakdown(rebalanceSizeBreakdown(selectedStyle.sizes, sizeBreakdown, nextMark));
                          }}
                          className="h-2 w-full cursor-pointer accent-[#FF4200]"
                          style={{ accentColor: "#0B32A0" }}
                        />
                        <div className="pointer-events-none relative mt-2 h-4">
                          {QUANTITY_MARKS.map((mark, index) => {
                            const markPosition = sliderPositionStyle(index, QUANTITY_MARKS.length);

                            return (
                              <div
                                key={mark}
                                className="absolute top-0 flex min-w-0 flex-col items-center"
                                style={markPosition}
                              >
                                <div className="h-1.5 w-px bg-[#081E6F]/30" />
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <section>
                  <div className="mb-3 flex items-center gap-2">
                    <p className={sectionEyebrowClass}>
                      Decoration method
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {FRONT_DECORATION_OPTIONS.map((option) => (
                      <button
                        key={option.id}
                        type="button"
                        onClick={() => setFrontDecoration(option.id)}
                        className={`min-h-[5rem] rounded-[1.2rem] border px-4 py-3 text-left transition duration-200 ${
                          frontDecoration === option.id
                            ? frontDecorationSelectedOptionClass
                            : neutralOptionClass
                        }`}
                      >
                        <span className="block min-w-0">
                          <span className="block text-[13px] font-semibold uppercase tracking-[0.12em]">
                            {option.label}
                          </span>
                          <span className={`mt-2 block text-[12px] leading-5 ${
                            frontDecoration === option.id ? "text-white/78" : "text-[#7b7b7b]"
                          }`}>
                            {option.note}
                          </span>
                        </span>
                      </button>
                    ))}
                  </div>
                </section>

                {showScreenPrintFlow ? (
                  <>
                    <section className={warmPanelClass}>
                      <div className="mb-3 flex items-center justify-between gap-3">
                        <div>
                          <p className={sectionEyebrowClass}>
                            Front print
                          </p>
                          <p className="mt-2 text-sm leading-6 text-[#8a8a8a]">
                            Turn the front hit on or off depending on where the artwork should land.
                          </p>
                        </div>
                      </div>
                      <div className="mt-4 grid grid-cols-2 gap-3">
                        <button
                          type="button"
                          onClick={() => {
                            if (!canTurnOffFrontPrint) return;
                            setFrontPrintEnabled(false);
                          }}
                          disabled={!canTurnOffFrontPrint}
                          className={`rounded-[1rem] border px-4 py-3.5 text-base font-semibold transition ${
                            !frontPrintEnabled
                              ? secondarySelectedOptionClass
                              : canTurnOffFrontPrint
                                ? neutralOptionClass
                                : disabledOptionClass
                          }`}
                        >
                          No front print
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            setFrontPrintEnabled(true);
                            setFrontPrintColors((current) => current > 0 ? current : 1);
                          }}
                          className={`rounded-[1rem] border px-4 py-3.5 text-base font-semibold transition ${
                            frontPrintEnabled
                              ? secondarySelectedOptionClass
                              : neutralOptionClass
                          }`}
                        >
                          Add front print
                        </button>
                      </div>
                      {frontPrintEnabled ? (
                        <label className="mt-3 grid gap-2">
                          <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#0B32A0]/58">
                            How many colors is the design?
                          </span>
                          <select
                            value={frontPrintColors}
                            onChange={(event) => setFrontPrintColors(Number(event.target.value))}
                            className={selectInputClass}
                          >
                            {COLOR_COUNT_OPTIONS.map((count) => (
                              <option key={count} value={count}>
                                {count} color{count === 1 ? "" : "s"}
                              </option>
                            ))}
                          </select>
                        </label>
                      ) : null}
                    </section>

                    <section className="grid gap-4">
                      <div className={warmPanelClass}>
                        <p className={sectionEyebrowClass}>
                          Back print
                        </p>
                        <div className="mt-4 grid grid-cols-2 gap-3">
                          <button
                            type="button"
                            onClick={() => {
                              if (!canTurnOffBackPrint) return;
                              setBackPrintColors(0);
                            }}
                            disabled={!canTurnOffBackPrint}
                            className={`rounded-[1rem] border px-4 py-3.5 text-base font-semibold transition ${
                              backPrintColors === 0
                                ? secondarySelectedOptionClass
                                : canTurnOffBackPrint
                                  ? neutralOptionClass
                                  : disabledOptionClass
                            }`}
                          >
                            No back print
                          </button>
                          <button
                            type="button"
                            onClick={() => setBackPrintColors((current) => current > 0 ? current : 1)}
                            className={`rounded-[1rem] border px-4 py-3.5 text-base font-semibold transition ${
                              backPrintColors > 0
                                ? secondarySelectedOptionClass
                                : neutralOptionClass
                            }`}
                          >
                            Add back print
                          </button>
                        </div>
                        {backPrintColors > 0 ? (
                          <label className="mt-3 grid gap-2">
                            <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#0B32A0]/58">
                              Back print colors
                            </span>
                          <select
                            value={backPrintColors}
                            onChange={(event) => setBackPrintColors(Number(event.target.value))}
                            className={selectInputClass}
                          >
                            {COLOR_COUNT_OPTIONS.map((count) => (
                              <option key={count} value={count}>
                                {count} color{count === 1 ? "" : "s"}
                                </option>
                              ))}
                            </select>
                          </label>
                        ) : null}
                      </div>

                      <div className={warmPanelClass}>
                        <p className={sectionEyebrowClass}>
                          Sleeve print
                        </p>
                        <div className="mt-4 grid grid-cols-2 gap-3">
                          <button
                            type="button"
                            onClick={() => {
                              if (!canTurnOffSleevePrint) return;
                              setSleevePrintColors(0);
                              setSleevePrintSide("left");
                            }}
                            disabled={!canTurnOffSleevePrint}
                            className={`rounded-[1rem] border px-4 py-3.5 text-base font-semibold transition ${
                              sleevePrintColors === 0
                                ? secondarySelectedOptionClass
                                : canTurnOffSleevePrint
                                  ? neutralOptionClass
                                  : disabledOptionClass
                            }`}
                          >
                            No sleeve print
                          </button>
                          <button
                            type="button"
                          onClick={() => {
                            setSleevePrintSide("left");
                            setSleevePrintColors((current) => current > 0 ? current : 1);
                          }}
                          className={`rounded-[1rem] border px-4 py-3.5 text-base font-semibold transition ${
                            sleevePrintColors > 0
                              ? secondarySelectedOptionClass
                              : neutralOptionClass
                          }`}
                        >
                          Add sleeve print
                          </button>
                        </div>
                        {sleevePrintColors > 0 ? (
                          <div className="mt-3 grid gap-3">
                            <label className="grid gap-2">
                              <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#0B32A0]/58">
                                Which sleeve?
                              </span>
                              <select
                                value={sleevePrintSide}
                                onChange={(event) => setSleevePrintSide(event.target.value as SleevePrintSide)}
                                className={selectInputClass}
                              >
                                <option value="left">Left sleeve</option>
                                <option value="right">Right sleeve</option>
                              </select>
                            </label>
                            <label className="grid gap-2">
                              <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#0B32A0]/58">
                                Sleeve print colors
                              </span>
                              <select
                                value={sleevePrintColors}
                                onChange={(event) => setSleevePrintColors(Number(event.target.value))}
                                className={selectInputClass}
                              >
                                {COLOR_COUNT_OPTIONS.map((count) => (
                                  <option key={count} value={count}>
                                    {count} color{count === 1 ? "" : "s"}
                                  </option>
                                ))}
                              </select>
                            </label>
                          </div>
                        ) : null}
                      </div>
                    </section>

                    <section>
                      <label className="grid gap-2">
                        <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#0B32A0]/58">
                          Specialty print upgrade
                        </span>
                        <select
                          value={printUpgrade}
                          onChange={(event) => setPrintUpgrade(event.target.value as CatalogSpecialtyPrintUpgrade | "none")}
                          className={selectInputClass}
                        >
                          <option value="none">None</option>
                          {SPECIALTY_OPTIONS.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      </label>
                    </section>
                  </>
                ) : (
                  <section className={warmPanelClass}>
                    <p className={sectionEyebrowClass}>
                      Front embroidery
                    </p>
                    <p className="mt-3 text-[15px] leading-7 text-[#4b4b4b]">
                      Embroidery keeps the build focused on one front placement, then you can note thread colors below.
                    </p>
                    <label className="mt-3 grid gap-2">
                      <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#0B32A0]/58">
                        Embroidery colors
                      </span>
                      <select
                        value={embroideryColorCount}
                        onChange={(event) => setEmbroideryColorCount(Number(event.target.value))}
                        className={selectInputClass}
                      >
                        {COLOR_COUNT_OPTIONS.map((count) => (
                          <option key={count} value={count}>
                            {count} color{count === 1 ? "" : "s"}
                          </option>
                        ))}
                      </select>
                    </label>
                  </section>
                )}

                <section>
                  <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#0B32A0]/58">
                    Finishing details
                  </p>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {PACKAGING_OPTIONS.map((option) => {
                      const selected = packaging.includes(option);

                      return (
                        <button
                          key={option}
                          type="button"
                          onClick={() => setPackaging((current) => (
                            current.includes(option)
                              ? current.filter((item) => item !== option)
                              : [...current, option]
                          ))}
                          className={`rounded-[1.2rem] border p-5 text-left transition duration-200 ${
                            selected
                              ? tintedSecondarySelectedOptionClass
                              : neutralOptionClass
                          }`}
                        >
                          <span className="block text-base font-semibold">{option}</span>
                          <span className={`mt-2 block text-sm ${selected ? "text-[#0B32A0]/72" : "text-[#1C1C1C]/55"}`}>
                            +{money(CATALOG_PACKAGING_PRICES[option])}/unit
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </section>

                <section className={warmPanelClass}>
                  <div className="mb-4">
                    <p className={sectionEyebrowClass}>
                      Pantone or hex colors
                    </p>
                    <p className="mt-2 text-sm leading-6 text-[#8a8a8a]">
                      We match ink and thread colors to Pantones.
                    </p>
                  </div>

                  <div className="grid gap-4">
                    {showScreenPrintFlow ? (
                      <>
                        {frontPrintEnabled ? (
                        <div className="grid gap-3">
                          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#0B32A0]/58">
                            Front print colors
                          </p>
                          {placementInkColors.front.slice(0, frontPrintColors).map((color, index) => (
                            <div key={`front-${index}`} className="grid gap-2 sm:grid-cols-[minmax(0,0.96fr)_minmax(104px,0.48fr)]">
                              <input
                                value={color.name}
                                onChange={(event) => updatePlacementInkColor("front", index, "name", event.target.value)}
                                className={textInputClass}
                                placeholder={`Front color ${index + 1} name or Pantone`}
                              />
                              <HexColorPicker
                                value={color.hex}
                                onChange={(value) => updatePlacementInkColor("front", index, "hex", value)}
                                ariaLabel={`Front color ${index + 1} hex`}
                              />
                            </div>
                          ))}
                        </div>
                        ) : null}

                        {backPrintColors > 0 ? (
                          <div className="grid gap-3">
                            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#0B32A0]/58">
                              Back print colors
                            </p>
                            {placementInkColors.back.slice(0, backPrintColors).map((color, index) => (
                              <div key={`back-${index}`} className="grid gap-2 sm:grid-cols-[minmax(0,0.96fr)_minmax(104px,0.48fr)]">
                              <input
                                value={color.name}
                                onChange={(event) => updatePlacementInkColor("back", index, "name", event.target.value)}
                                className={textInputClass}
                                placeholder={`Back color ${index + 1} name or Pantone`}
                              />
                              <HexColorPicker
                                  value={color.hex}
                                  onChange={(value) => updatePlacementInkColor("back", index, "hex", value)}
                                  ariaLabel={`Back color ${index + 1} hex`}
                                />
                              </div>
                            ))}
                          </div>
                        ) : null}

                        {sleevePrintColors > 0 ? (
                          <div className="grid gap-3">
                            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#0B32A0]/58">
                              {sleevePlacementLabel} colors
                            </p>
                            {placementInkColors.sleeve.slice(0, sleevePrintColors).map((color, index) => (
                              <div key={`sleeve-${index}`} className="grid gap-2 sm:grid-cols-[minmax(0,0.96fr)_minmax(104px,0.48fr)]">
                              <input
                                value={color.name}
                                onChange={(event) => updatePlacementInkColor("sleeve", index, "name", event.target.value)}
                                className={textInputClass}
                                placeholder={`${sleevePlacementLabel} color ${index + 1} name or Pantone`}
                              />
                              <HexColorPicker
                                  value={color.hex}
                                  onChange={(value) => updatePlacementInkColor("sleeve", index, "hex", value)}
                                  ariaLabel={`${sleevePlacementLabel} color ${index + 1} hex`}
                                />
                              </div>
                            ))}
                          </div>
                        ) : null}
                      </>
                    ) : (
                        <div className="grid gap-3">
                          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#0B32A0]/58">
                            Embroidery colors
                          </p>
                          {placementInkColors.embroidery.slice(0, embroideryColorCount).map((color, index) => (
                            <div key={`embroidery-${index}`} className="grid gap-2 sm:grid-cols-[minmax(0,0.96fr)_minmax(104px,0.48fr)]">
                              <input
                                value={color.name}
                                onChange={(event) => updatePlacementInkColor("embroidery", index, "name", event.target.value)}
                                className={textInputClass}
                                placeholder={`Embroidery color ${index + 1} name, Pantone, or notes`}
                              />
                              <HexColorPicker
                                value={color.hex}
                                onChange={(value) => updatePlacementInkColor("embroidery", index, "hex", value)}
                                ariaLabel={`Embroidery color ${index + 1} hex`}
                              />
                            </div>
                          ))}
                        </div>
                    )}
                  </div>
                </section>

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

                <section>
                  <label className={`mb-3 block ${sectionEyebrowClass}`}>
                    Additional notes
                  </label>
                  <p className="mb-3 text-sm leading-6 text-[#8a8a8a]">
                    Flag placements, Pantones, packaging requests, or anything else we should build around.
                  </p>
                  <p className="mb-3 text-sm leading-6 text-[#8a8a8a]">
                    Need to split this across different colors or styles? Leave a note and we&apos;ll reach out.
                  </p>
                  <textarea
                    value={notes}
                    onChange={(event) => setNotes(event.target.value)}
                    rows={3}
                    placeholder="Optional notes on placements, Pantones, finishing details, or anything else to flag"
                    className="w-full rounded-[1.2rem] border border-[#081E6F]/15 bg-[#F5F7FC] px-4 py-4 text-[15px] font-normal text-[#0B32A0] placeholder:text-[#8a8a8a] focus:border-[#FF4200] focus:outline-none"
                  />
                </section>

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
                </div>
              </div>
          </aside>

          <aside className="xl:sticky xl:top-24 xl:self-start">
            <div className={`${panelClass} overflow-hidden xl:flex xl:max-h-[calc(100vh-8.5rem)] xl:flex-col`}>
              <div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8a8a8a]">
                    Live price summary
                  </p>
                  <p className="mt-2 text-[15px] leading-6 text-[#4b4b4b]">
                    Your blank, decoration choices, and finish upgrades update the estimate in real time.
                  </p>
                </div>
              </div>

              <div className="mt-6 rounded-[1rem] border border-[#081E6F]/10 bg-[#FBF7F1]/65 text-sm xl:min-h-0 xl:flex-1 xl:overflow-y-auto xl:pr-1">
                {[
                  { label: "Product", value: selectedStyle.name },
                  { label: "Color", value: selectedColor?.name ?? "Not selected" },
                  { label: "Total quantity", value: `${pricedQuantity.toLocaleString()} units` },
                  { label: "Size breakdown", value: summarySizeLabel(sizeBreakdown) || "Not assigned yet" },
                  { label: "Decoration method", value: frontDecoration === "screenPrint" ? "Screen print" : "Embroidery" },
                  { label: "Front print", value: frontPrintLabel },
                  { label: "Back of shirt", value: backPrintColors > 0 ? `${backPrintColors} color${backPrintColors === 1 ? "" : "s"}` : "None" },
                  { label: "Sleeve print", value: sleevePrintLabel },
                  { label: "Embroidery colors", value: frontDecoration === "embroidery" ? `${embroideryColorCount} color${embroideryColorCount === 1 ? "" : "s"}` : "N/A" },
                  { label: "Print upgrades", value: printUpgrade === "none" ? "None" : printUpgrade },
                  { label: "Packaging upgrades", value: packaging.length > 0 ? packaging.join(", ") : "None" },
                  { label: "Brand colors", value: brandColorSummary || "Not specified" },
                  { label: "Artwork help", value: needsArtworkHelp ? "Yes" : "No" },
                  { label: "Base unit price", value: basePriceLabel },
                  { label: "Selected options", value: selectedOptionsLabel },
                  { label: "Turnaround", value: timelineLabel(selectedStyle) },
                  { label: "Estimated delivery date", value: estimatedDeliveryShortLabel },
                ].map((row, index) => (
                  <div
                    key={row.label}
                    className={`grid grid-cols-[minmax(0,1fr)_auto] gap-3 px-3.5 py-2 ${index > 0 ? "border-t border-[#081E6F]/10" : ""}`}
                  >
                    <span className={summaryLabelClass}>{row.label}</span>
                    <span className="text-right text-[12px] font-semibold leading-5 text-[#171717]">{row.value}</span>
                  </div>
                ))}
              </div>

              <div className="mt-5 border-t border-[#081E6F]/10 pt-5">
                <div className="mb-3 flex items-end justify-between gap-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8a8a8a]">
                    Unit price
                  </p>
                  <p className="text-xl font-semibold leading-none text-[#0B32A0]">
                    {money(shippingIncludedUnitPrice)}
                  </p>
                </div>
                <div className="flex items-end justify-between gap-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8a8a8a]">
                    Total
                  </p>
                  <p className="text-3xl font-semibold leading-none text-[#FF4200]">
                    {money(estimatedTotal)}
                  </p>
                </div>
              </div>

              <Link
                href={`/contact?${handoffParams.toString()}`}
                className="mt-5 flex min-h-12 w-full items-center justify-center rounded-lg bg-[#FF4200] px-5 text-center text-sm font-semibold uppercase tracking-[0.12em] text-white transition hover:-translate-y-0.5"
              >
                Submit order for review
              </Link>
              <div className="mt-3 rounded-lg border border-[#081E6F]/10 bg-[#F7F9FC] px-3.5 py-3 text-left">
                <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#7a7a7a]">
                  Next steps
                </p>
                <p className="mt-1 text-xs leading-5 text-[#4b4b4b]">
                  Send us your build for review and we&apos;ll confirm final pricing, decoration guidance, and delivery timing.
                </p>
              </div>
              <Link
                href={`/contact?${handoffParams.toString()}`}
                className="mt-3 flex min-h-11 w-full items-center justify-center rounded-lg border border-[#081E6F]/12 bg-white px-5 text-center text-sm font-semibold text-[#0B32A0] transition hover:border-[#0B32A0] hover:bg-[#F7F9FC]"
              >
                Talk to our team
              </Link>
            </div>
          </aside>
    </MasterCustomizerShell>
  );
}
