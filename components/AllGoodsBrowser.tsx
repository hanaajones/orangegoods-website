"use client";

import { useEffect, useMemo, useRef, useState, type CSSProperties, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  GOODS_BROWSER_CATEGORY_LABELS,
  GOODS_BROWSER_PRODUCTION_PATH_LABELS,
  hasCustomizerPage,
  type GoodsBrowserCategory,
  type GoodsBrowserColor,
  type GoodsBrowserItem,
  type GoodsBrowserProductionPath,
} from "@/lib/goods-browser";

const COLOR_SWATCH_BACKGROUNDS: Record<string, string> = {
  Black: "#1a1a1a",
  White: "#ffffff",
  Grey: "#80858d",
  Cream: "#efe7d8",
  Blue: "#234a93",
  Green: "#647a4e",
  Brown: "#7a5a3a",
  Tan: "#c9b390",
  Pink: "#dfa7b4",
  Burgundy: "#6a1a2a",
  Red: "#c63a2a",
  Orange: "#d9793e",
  Yellow: "#e7c85f",
  Purple: "#7b61a9",
  Camo: "linear-gradient(135deg, #5b6a43 0%, #8a7b54 50%, #2d3a28 100%)",
  Stripe: "linear-gradient(135deg, #234a93 0%, #234a93 35%, #efe7d8 35%, #efe7d8 65%, #1a1a1a 65%, #1a1a1a 100%)",
  "Athletic Heather": "#b9bdc4",
};

const COLOR_GROUPS = [
  { key: "blacks", label: "Blacks", swatch: "#1a1a1a" },
  { key: "greys", label: "Greys", swatch: "#9297a1" },
  { key: "naturals", label: "Naturals", swatch: "#e7dece" },
  { key: "browns", label: "Browns", swatch: "#8b6443" },
  { key: "greens", label: "Greens", swatch: "#5d7b5f" },
  { key: "blues", label: "Blues", swatch: "#305aa7" },
  { key: "reds", label: "Reds", swatch: "#bc2c2c" },
  { key: "oranges", label: "Oranges", swatch: "#d9793e" },
  { key: "yellows", label: "Yellows", swatch: "#e7c85f" },
  { key: "pinks", label: "Pinks", swatch: "#dfa7b4" },
  { key: "purples", label: "Purples", swatch: "#7b61a9" },
  { key: "patterns", label: "Patterns", swatch: "linear-gradient(135deg, #5b6a43 0%, #d8d0c2 50%, #234a93 100%)" },
] as const;

const FULL_CUSTOM_PREVIEW_SWATCHES = ["Black", "Tan", "Blue", "Green", "Orange"] as const;
const CATEGORY_DISPLAY_ORDER: GoodsBrowserCategory[] = ["hats", "totes", "beanies", "apparel", "blankets", "drinkware", "bags", "accessories", "socks"];
const FULL_CUSTOM_BRAND_FILTER = "Orange Goods Full Custom";
const PAGE_SIZE_OPTIONS = [40, 48] as const;
const DEFAULT_PAGE_SIZE = PAGE_SIZE_OPTIONS[1];

const PRICE_OPTIONS = [
  { key: "all", label: "All Prices" },
  { key: "under-15", label: "Under $15" },
  { key: "15-25", label: "$15-$25" },
  { key: "25-40", label: "$25-$40" },
  { key: "40-plus", label: "$40+" },
] as const;

type PriceFilter = (typeof PRICE_OPTIONS)[number]["key"];
type ColorFilterGroup = (typeof COLOR_GROUPS)[number]["key"];
const isDefinedString = (value: string | undefined): value is string => Boolean(value);
const PRODUCTION_PATH_BADGE_SRC: Record<GoodsBrowserProductionPath, string> = {
  "full-custom": "/graphics/services/full-custom-orange.svg",
  "quick-turn": "/graphics/services/quick-turn.svg",
};

type EducationalCard = {
  id: string;
  eyebrow: string;
  title: string;
  body: string;
  image: string;
  imagePosition?: string;
  size: "single" | "double";
  productionPaths?: GoodsBrowserProductionPath[];
  categories?: GoodsBrowserCategory[];
  accent: "orange" | "blue";
};

type DisplayGridItem =
  | { kind: "product"; id: string; item: GoodsBrowserItem }
  | { kind: "education"; id: string; card: EducationalCard };

const GRID_SLOT_COUNT = 3;

const EDUCATIONAL_CARD_LIBRARY: EducationalCard[] = [
  {
    id: "quick-turn-hats-embroidery",
    eyebrow: "Quick Turn",
    title: "Embroidered in 2-3 weeks",
    body: "Use a stock hat with pro embroidery, patches, or clean print placement when you need branded headwear without a custom development cycle.",
    image: "/images/gallery/embroidery-flat-embroidery-mg-6796.jpg",
    imagePosition: "center 56%",
    size: "single",
    productionPaths: ["quick-turn"],
    categories: ["hats"],
    accent: "blue",
  },
  {
    id: "quick-turn-hats-turnaround",
    eyebrow: "Quick Turn",
    title: "Clean hats, faster turnaround",
    body: "AS Colour blanks keep the fit and shape dialed while decoration stays efficient, which is why this lane works when you need polished hats in 2-3 weeks.",
    image: "/images/gallery/headwear-quick-turn-reel-life-gear-film-10.jpg",
    imagePosition: "center 86%",
    size: "single",
    productionPaths: ["quick-turn"],
    categories: ["hats"],
    accent: "blue",
  },
  {
    id: "quick-turn-beanies-patch",
    eyebrow: "Quick Turn",
    title: "Patch and go",
    body: "A strong lane when you want a little more texture without stepping into a full custom development timeline.",
    image: "/images/gallery/headwear-woven-patch-mg-6859.jpg",
    imagePosition: "center 50%",
    size: "single",
    productionPaths: ["quick-turn"],
    categories: ["beanies"],
    accent: "blue",
  },
  {
    id: "premium-blanks",
    eyebrow: "Quick Turn",
    title: "Premium blanks, fewer variables",
    body: "AS Colour and the other better blank lines move faster because the base product is already dialed in.",
    image: "/images/gallery/screen-printing-premium-blanks-dscf4877.jpg",
    imagePosition: "center 50%",
    size: "double",
    productionPaths: ["quick-turn"],
    accent: "blue",
  },
  {
    id: "apparel-boxy-fit",
    eyebrow: "Apparel",
    title: "Boxy fits already dialed",
    body: "A lot of the best quick-turn tees and fleece styles already have the wider, more modern silhouette clients are asking for.",
    image: "/images/gallery/quiz-heavy-box-tee-verve-grateful-dead.jpg",
    imagePosition: "center 52%",
    size: "double",
    productionPaths: ["quick-turn"],
    categories: ["apparel"],
    accent: "blue",
  },
  {
    id: "apparel-pigment-dye",
    eyebrow: "Apparel",
    title: "Pigment dye changes the feel",
    body: "Washed tones, faded color, and heavier blanks can make a quick-turn piece feel more intentional before decoration even goes on.",
    image: "/images/gallery/quiz-pigment-dyed-tee-synergy-washed.jpg",
    imagePosition: "center 48%",
    size: "single",
    productionPaths: ["quick-turn"],
    categories: ["apparel"],
    accent: "blue",
  },
  {
    id: "apparel-decoration",
    eyebrow: "Apparel",
    title: "Start with the blank, then decorate",
    body: "For apparel, the right fit, weight, and dye treatment usually matter just as much as whether the art ends up embroidered, screen printed, or both.",
    image: "/images/gallery/screen-printing-premium-blanks-dscf4877.jpg",
    imagePosition: "center 50%",
    size: "single",
    productionPaths: ["quick-turn"],
    categories: ["apparel"],
    accent: "blue",
  },
  {
    id: "full-custom-detail",
    eyebrow: "Full Custom",
    title: "Customize every detail",
    body: "Shape, fabric, trim, labeling, and finishing can all be built around the exact hat instead of adapting to a stock blank.",
    image: "/images/gallery/full-custom-feelingswell-hat-labbet-app.jpg",
    imagePosition: "center 48%",
    size: "double",
    productionPaths: ["full-custom"],
    categories: ["hats"],
    accent: "orange",
  },
  {
    id: "full-custom-build",
    eyebrow: "Full Custom",
    title: "From sketch to final sample",
    body: "This lane makes more sense when the hat itself is the idea, not just the decoration on top of it.",
    image: "/images/gallery/headwear-mockups-approval-bread-head-2026-07-30.png",
    imagePosition: "center 44%",
    size: "single",
    productionPaths: ["full-custom"],
    categories: ["hats"],
    accent: "orange",
  },
  {
    id: "full-custom-finishes",
    eyebrow: "Full Custom",
    title: "Inside details matter too",
    body: "Closures, seam tape, woven labels, and branded interior touches are where a custom hat starts feeling finished.",
    image: "/images/gallery/headwear-closure-label-mg-6920.jpg",
    imagePosition: "center 52%",
    size: "single",
    productionPaths: ["full-custom"],
    categories: ["hats"],
    accent: "orange",
  },
  {
    id: "art-direction",
    eyebrow: "Start Here",
    title: "We can help narrow the lane",
    body: "If you know the vibe but not the exact product yet, start with timeline, quantity, budget, and use case.",
    image: "/images/gallery/design-full-line-000068200009.jpg",
    imagePosition: "center 50%",
    size: "double",
    accent: "orange",
  },
];

type AllGoodsBrowserProps = {
  items: GoodsBrowserItem[];
  className?: string;
  initialSearch?: string;
  initialCategory?: GoodsBrowserCategory | "all";
  initialProductionPath?: GoodsBrowserProductionPath | "all";
  initialType?: string | "all";
  initialBrand?: string | "all";
  initialSelectedColor?: string;
  initialFit?: string | "all";
  initialPrice?: string;
  initialPage?: number;
  initialPageSize?: number;
  lockedCategory?: GoodsBrowserCategory;
  searchPlaceholder?: string;
  showProductionPathToggle?: boolean;
  productionPathHelperText?: ReactNode;
};

type GoodsBrowserFilters = {
  search: string;
  productionPath: GoodsBrowserProductionPath | "all";
  category: GoodsBrowserCategory | "all";
  type: string | "all";
  brand: string | "all";
  selectedColor: ColorFilterGroup | "all";
  fit: string | "all";
  price: PriceFilter;
};

function parseStringFilter(value: string | undefined) {
  const trimmed = value?.trim();

  return trimmed ? trimmed : "all";
}

function isFullCustomBrandFilter(value: string | "all") {
  return value === FULL_CUSTOM_BRAND_FILTER;
}

function parseSearchFilter(value: string | undefined) {
  return value?.trim() ?? "";
}

function parseColorFilterGroup(value: string | undefined): ColorFilterGroup | "all" {
  if (!value) return "all";
  return COLOR_GROUPS.some((group) => group.key === value)
    ? (value as ColorFilterGroup)
    : "all";
}

function parsePriceFilter(value: string | undefined): PriceFilter {
  if (!value) return "all";
  return PRICE_OPTIONS.some((option) => option.key === value)
    ? (value as PriceFilter)
    : "all";
}

function parsePageNumber(value: number | string | undefined) {
  const parsed = typeof value === "number" ? value : Number.parseInt(value ?? "", 10);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : 1;
}

function parsePageSize(value: number | string | undefined) {
  const parsed = typeof value === "number" ? value : Number.parseInt(value ?? "", 10);
  return PAGE_SIZE_OPTIONS.includes(parsed as (typeof PAGE_SIZE_OPTIONS)[number])
    ? (parsed as (typeof PAGE_SIZE_OPTIONS)[number])
    : DEFAULT_PAGE_SIZE;
}

function buildFilterSearchParams({
  search,
  productionPath,
  category,
  type,
  brand,
  selectedColor,
  fit,
  price,
}: GoodsBrowserFilters, lockedCategory?: GoodsBrowserCategory, pagination?: { page: number; pageSize: number }) {
  const params = new URLSearchParams();

  if (search.trim()) params.set("search", search.trim());
  if (productionPath !== "all") params.set("productionPath", productionPath);
  if (!lockedCategory && category !== "all") params.set("category", category);
  if (type !== "all") params.set("type", type);
  if (brand !== "all") params.set("brand", brand);
  if (selectedColor !== "all") params.set("color", selectedColor);
  if (fit !== "all") params.set("fit", fit);
  if (price !== "all") params.set("price", price);
  if (pagination?.pageSize && pagination.pageSize !== DEFAULT_PAGE_SIZE) params.set("perPage", String(pagination.pageSize));
  if (pagination?.page && pagination.page > 1) params.set("page", String(pagination.page));

  return params;
}

function buildCustomizerItemHref(
  itemHref: string,
  filters: GoodsBrowserFilters,
  lockedCategory?: GoodsBrowserCategory,
  pagination?: { page: number; pageSize: number },
) {
  const url = new URL(itemHref, "https://orangegoods.local");
  const returnParams = buildFilterSearchParams(filters, lockedCategory, pagination);
  const returnTo = returnParams.toString()
    ? `/goods/all?${returnParams.toString()}`
    : "/goods/all";

  url.searchParams.set("returnTo", returnTo);

  const query = url.searchParams.toString();
  return query ? `${url.pathname}?${query}` : url.pathname;
}

function swatchStyle(color: GoodsBrowserColor): CSSProperties {
  return { background: resolveSwatchBackground(color) };
}

function swatchBorderClass(color: GoodsBrowserColor) {
  return isLightSwatch(color) ? "border-[#0B32A0]/12" : "border-transparent";
}

function normalizeSwatchColor(color: GoodsBrowserColor) {
  return color.toLowerCase().replace(/[/_-]+/g, " ").replace(/\s+/g, " ").trim();
}

function resolveSwatchBackground(color: GoodsBrowserColor) {
  if (COLOR_SWATCH_BACKGROUNDS[color]) return COLOR_SWATCH_BACKGROUNDS[color];

  const compositeParts = color
    .split("/")
    .map((part) => part.trim())
    .filter(Boolean);

  // Two-tone hat colorways should read off the leading body color instead of the trim color.
  if (compositeParts.length > 1) {
    return resolveSwatchBackground(compositeParts[0]);
  }

  const normalized = normalizeSwatchColor(color);

  if (normalized.includes("camo")) return COLOR_SWATCH_BACKGROUNDS.Camo;
  if (normalized.includes("stripe")) return COLOR_SWATCH_BACKGROUNDS.Stripe;
  if (normalized.includes("black") || normalized.includes("coal") || normalized.includes("midnight")) return "#1a1a1a";
  if (normalized.includes("white")) return "#ffffff";
  if (normalized.includes("cream") || normalized.includes("bone") || normalized.includes("ecru") || normalized.includes("natural")) {
    return "#efe7d8";
  }
  if (normalized.includes("grey") || normalized.includes("gray") || normalized.includes("heather") || normalized.includes("marle") || normalized.includes("ash") || normalized.includes("storm") || normalized.includes("silver")) {
    return "#9297a1";
  }
  if (normalized.includes("walnut") || normalized.includes("brown") || normalized.includes("tan") || normalized.includes("camel") || normalized.includes("khaki") || normalized.includes("mushroom") || normalized.includes("taupe") || normalized.includes("chestnut")) {
    return "#8b6443";
  }
  if (normalized.includes("chocolate")) return "#5f4330";
  if (normalized.includes("green") || normalized.includes("forest") || normalized.includes("cypress") || normalized.includes("sage") || normalized.includes("mint") || normalized.includes("seafoam") || normalized.includes("eucalyptus") || normalized.includes("pine") || normalized.includes("army") || normalized.includes("pistachio") || normalized.includes("lime") || normalized.includes("mineral") || normalized.includes("jade")) {
    return "#5d7b5f";
  }
  if (normalized.includes("blue") || normalized.includes("navy") || normalized.includes("royal") || normalized.includes("cobalt") || normalized.includes("slate") || normalized.includes("petrol") || normalized.includes("hydro") || normalized.includes("topaz") || normalized.includes("carolina") || normalized.includes("powder") || normalized.includes("lapis") || normalized.includes("atlantic") || normalized.includes("denim") || normalized.includes("indigo")) {
    return "#305aa7";
  }
  if (normalized.includes("red") || normalized.includes("burgundy") || normalized.includes("cardinal")) return "#bc2c2c";
  if (normalized.includes("orange") || normalized.includes("fire") || normalized.includes("sunset") || normalized.includes("autumn") || normalized.includes("clay")) return "#d9793e";
  if (normalized.includes("yellow") || normalized.includes("mustard") || normalized.includes("butter") || normalized.includes("lemon") || normalized.includes("citrus") || normalized.includes("gold")) return "#e7c85f";
  if (normalized.includes("pink") || normalized.includes("orchid")) return "#dfa7b4";
  if (normalized.includes("purple") || normalized.includes("violet") || normalized.includes("grape") || normalized.includes("plum") || normalized.includes("liberty")) return "#7b61a9";

  return "#d8d0c2";
}

function isLightSwatch(color: GoodsBrowserColor) {
  const normalized = normalizeSwatchColor(color);

  return (
    normalized.includes("white") ||
    normalized.includes("cream") ||
    normalized.includes("bone") ||
    normalized.includes("natural") ||
    normalized.includes("ecru")
  );
}

function formatResultsCount(count: number) {
  return `${count} ${count === 1 ? "result" : "results"}`;
}

function formatVisibleRangeLabel(page: number, pageSize: number, totalCount: number) {
  if (totalCount === 0) return "Showing 0 results";

  const start = (page - 1) * pageSize + 1;
  const end = Math.min(page * pageSize, totalCount);

  return `Showing ${start}-${end} of ${totalCount}`;
}

function getCardImageBackgroundClass(item: GoodsBrowserItem) {
  if (item.category === "hats" && item.productionPath === "full-custom") {
    return "bg-[#E8E2D7]";
  }

  if (item.category === "beanies") {
    return "bg-[#F4F1EA]";
  }

  if (item.category === "totes") {
    return "bg-white";
  }

  return "bg-white";
}

function getCardImageScaleClass(item: GoodsBrowserItem) {
  if (item.category === "hats" && item.productionPath === "quick-turn") return "scale-[1.19]";
  if (item.category === "hats" && item.productionPath === "full-custom") return "scale-[0.98]";
  if (item.category === "beanies") return "scale-[1.05]";
  if (item.category === "totes") return "scale-[0.9]";
  if (item.category === "apparel") return "scale-[1.02]";
  return "scale-[1.04]";
}

function getCardHoverZoomClass(item: GoodsBrowserItem) {
  if (item.category === "hats" && item.productionPath === "quick-turn") return "group-hover:scale-[1.27]";
  return "group-hover:scale-[1.12]";
}

function getCardImageFitClass(item: GoodsBrowserItem) {
  if (item.category === "totes") return "object-contain";
  return "object-cover";
}

function getCardImageOffsetClass(item: GoodsBrowserItem) {
  if (item.category === "totes") return "-translate-y-[20px]";
  return "";
}

function getCardDescriptorLabel(item: GoodsBrowserItem) {
  if (item.typeLabel && item.typeLabel !== GOODS_BROWSER_PRODUCTION_PATH_LABELS[item.productionPath]) {
    return item.typeLabel;
  }

  return item.categoryLabel;
}

function shouldShowFullCustomPaletteRow(item: GoodsBrowserItem) {
  return item.productionPath === "full-custom" && item.category === "hats" && item.colors.length === 0;
}

function hashString(value: string) {
  let hash = 0;

  for (let index = 0; index < value.length; index += 1) {
    hash = (hash * 31 + value.charCodeAt(index)) >>> 0;
  }

  return hash;
}

function getEducationalCards(
  visibleItems: GoodsBrowserItem[],
  filters: GoodsBrowserFilters,
): EducationalCard[] {
  const visiblePaths = new Set(visibleItems.map((item) => item.productionPath));
  const visibleCategories = new Set(visibleItems.map((item) => item.category));

  const eligibleCards = EDUCATIONAL_CARD_LIBRARY.filter((card) => {
    if (card.productionPaths?.length) {
      const pathMatch = card.productionPaths.some((path) => visiblePaths.has(path));
      if (!pathMatch) return false;
      const activeProductionPath = filters.productionPath;
      if (activeProductionPath !== "all" && !card.productionPaths.includes(activeProductionPath)) return false;
    }

    if (card.categories?.length) {
      const categoryMatch = card.categories.some((category) => visibleCategories.has(category));
      if (!categoryMatch) return false;
      const activeCategory = filters.category;
      if (activeCategory !== "all" && !card.categories.includes(activeCategory)) return false;
    }

    return true;
  });

  const activeCategory = filters.category;
  const categorySpecificCards = activeCategory !== "all"
    ? eligibleCards.filter((card) => card.categories?.includes(activeCategory))
    : eligibleCards;
  const cardsAfterCategoryPass = categorySpecificCards.length > 0 ? categorySpecificCards : eligibleCards;

  const activeProductionPath = filters.productionPath;
  const pathSpecificCards = activeProductionPath !== "all"
    ? cardsAfterCategoryPass.filter((card) => card.productionPaths?.includes(activeProductionPath))
    : cardsAfterCategoryPass;
  const narrowedCards = pathSpecificCards.length > 0 ? pathSpecificCards : cardsAfterCategoryPass;

  const seed = `${filters.productionPath}|${filters.category}|${filters.type}|${filters.brand}|${filters.fit}|${filters.price}|${visibleItems
    .slice(0, 24)
    .map((item) => item.id)
    .join("|")}`;

  return [...narrowedCards].sort(
    (left, right) =>
      hashString(`${seed}:${left.id}`) - hashString(`${seed}:${right.id}`) || left.id.localeCompare(right.id),
  );
}

function buildDisplayGridItems(
  visibleItems: GoodsBrowserItem[],
  filters: GoodsBrowserFilters,
): DisplayGridItem[] {
  const displayItems: DisplayGridItem[] = visibleItems.map((item) => ({
    kind: "product",
    id: item.id,
    item,
  }));

  if (visibleItems.length < 6) return displayItems;

  const educationalCards = getEducationalCards(visibleItems, filters);
  if (educationalCards.length === 0) return displayItems;

  const maxCards = Math.min(educationalCards.length, Math.max(1, Math.floor(visibleItems.length / 6)));
  const cardsToInsert = educationalCards.slice(0, maxCards);
  const insertedItems: DisplayGridItem[] = [];
  const seed = hashString(
    `${filters.search}|${filters.productionPath}|${filters.category}|${visibleItems.map((item) => item.id).join("|")}`,
  );

  let nextBreak = 6 + (seed % 2);
  let productsSinceInsert = 0;
  let cardIndex = 0;
  let rowSlotsFilled = 0;

  displayItems.forEach((displayItem, index) => {
    insertedItems.push(displayItem);
    productsSinceInsert += 1;
    rowSlotsFilled = (rowSlotsFilled + 1) % GRID_SLOT_COUNT;

    const productsRemaining = displayItems.length - index - 1;
    if (cardIndex >= cardsToInsert.length) return;
    if (productsSinceInsert < nextBreak) return;

    const card = cardsToInsert[cardIndex];
    const cardSlotSpan = card.size === "double" ? 2 : 1;
    const canFitInCurrentRow = cardSlotSpan === 1 || rowSlotsFilled <= 1;
    if (!canFitInCurrentRow) return;

    const hasAdjacentProductSlot =
      cardSlotSpan === 1 || rowSlotsFilled === 1 || productsRemaining >= 1;
    if (!hasAdjacentProductSlot) return;

    insertedItems.push({
      kind: "education",
      id: `education:${card.id}:${cardIndex}`,
      card,
    });

    rowSlotsFilled = (rowSlotsFilled + cardSlotSpan) % GRID_SLOT_COUNT;
    cardIndex += 1;
    productsSinceInsert = 0;
    nextBreak = 6 + (hashString(`${seed}:${card.id}:${cardIndex}`) % 3);
  });

  return insertedItems;
}

function getColorGroup(color: GoodsBrowserColor): ColorFilterGroup {
  const normalized = color.toLowerCase();

  if (normalized.includes("camo") || normalized.includes("stripe") || normalized.includes("multi")) return "patterns";
  if (normalized.includes("black") || normalized.includes("coal") || normalized.includes("midnight")) return "blacks";
  if (normalized.includes("grey") || normalized.includes("gray") || normalized.includes("heather") || normalized.includes("silver") || normalized.includes("smoke") || normalized.includes("storm") || normalized.includes("ash")) return "greys";
  if (normalized.includes("white") || normalized.includes("cream") || normalized.includes("bone") || normalized.includes("natural") || normalized.includes("ecru")) return "naturals";
  if (normalized.includes("brown") || normalized.includes("tan") || normalized.includes("khaki") || normalized.includes("camel") || normalized.includes("walnut") || normalized.includes("mushroom") || normalized.includes("taupe") || normalized.includes("chestnut") || normalized.includes("chocolate")) return "browns";
  if (normalized.includes("green") || normalized.includes("forest") || normalized.includes("cypress") || normalized.includes("sage") || normalized.includes("mint") || normalized.includes("seafoam") || normalized.includes("eucalyptus") || normalized.includes("pine") || normalized.includes("army") || normalized.includes("pistachio") || normalized.includes("lime") || normalized.includes("mineral")) return "greens";
  if (normalized.includes("blue") || normalized.includes("navy") || normalized.includes("royal") || normalized.includes("cobalt") || normalized.includes("slate") || normalized.includes("petrol") || normalized.includes("hydro") || normalized.includes("topaz") || normalized.includes("carolina") || normalized.includes("powder") || normalized.includes("lapis") || normalized.includes("atlantic") || normalized.includes("denim") || normalized.includes("indigo")) return "blues";
  if (normalized.includes("red") || normalized.includes("burgundy") || normalized.includes("cardinal")) return "reds";
  if (normalized.includes("orange") || normalized.includes("fire") || normalized.includes("sunset") || normalized.includes("autumn") || normalized.includes("clay")) return "oranges";
  if (normalized.includes("yellow") || normalized.includes("mustard") || normalized.includes("butter") || normalized.includes("lemon") || normalized.includes("citrus")) return "yellows";
  if (normalized.includes("pink")) return "pinks";
  if (normalized.includes("purple") || normalized.includes("violet") || normalized.includes("grape") || normalized.includes("orchid") || normalized.includes("liberty")) return "purples";
  return "naturals";
}

function toTitleCaseWords(value: string) {
  return value
    .toLowerCase()
    .replace(/\b[a-z]/g, (char) => char.toUpperCase())
    .replace(/\bHi Vis\b/g, "Hi-Vis");
}

function normalizeFitLabel(fit: string) {
  const normalized = fit.toLowerCase().replace(/[/_,]+/g, " ").replace(/\s+/g, " ").trim();

  if (normalized.includes("low profile")) return "Low Profile";
  if (normalized.includes("mid profile")) return "Mid Profile";
  if (normalized.includes("high profile")) return "High Profile";
  if (normalized.includes("boxy") || normalized.includes("oversized")) return "Boxy / Oversized";
  if (normalized.includes("relaxed")) return "Relaxed";
  if (normalized.includes("fitted")) return "Fitted";
  if (normalized.includes("slim")) return "Slim / Retail";
  if (normalized.includes("classic")) return "Classic";
  if (normalized.includes("regular")) return "Regular";
  if (normalized.includes("cropped")) return "Cropped";
  if (normalized.includes("longer body")) return "Longer Body";
  if (normalized.includes("hi vis")) return "Hi-Vis";

  return toTitleCaseWords(normalized);
}

function matchesPrice(item: GoodsBrowserItem, activePrice: PriceFilter) {
  if (activePrice === "all") return true;
  if (typeof item.fromPrice !== "number") return false;
  if (activePrice === "under-15") return item.fromPrice < 15;
  if (activePrice === "15-25") return item.fromPrice >= 15 && item.fromPrice < 25;
  if (activePrice === "25-40") return item.fromPrice >= 25 && item.fromPrice < 40;
  return item.fromPrice >= 40;
}

function matchesItem(
  item: GoodsBrowserItem,
  filters: GoodsBrowserFilters,
  omit: Partial<Record<keyof GoodsBrowserFilters, boolean>> = {},
) {
  const searchValue = filters.search.trim().toLowerCase();
  if (!omit.search && searchValue && !item.searchText.includes(searchValue)) return false;
  if (!omit.productionPath && filters.productionPath !== "all" && item.productionPath !== filters.productionPath) {
    return false;
  }
  if (!omit.category && filters.category !== "all" && item.category !== filters.category) return false;
  if (!omit.type && filters.type !== "all" && item.typeLabel !== filters.type) return false;
  if (!omit.brand && filters.brand !== "all") {
    if (isFullCustomBrandFilter(filters.brand)) {
      if (item.productionPath !== "full-custom") return false;
    } else if (item.brand !== filters.brand) {
      return false;
    }
  }
  if (!omit.selectedColor && filters.selectedColor !== "all" && !item.colors.some((color) => getColorGroup(color) === filters.selectedColor)) {
    return false;
  }
  if (!omit.fit && filters.fit !== "all" && normalizeFitLabel(item.fit ?? "") !== filters.fit) return false;
  if (!omit.price && !matchesPrice(item, filters.price)) return false;
  return true;
}

function getFullCustomHatStyleNumber(item: GoodsBrowserItem) {
  if (item.category !== "hats" || item.productionPath !== "full-custom") return Number.POSITIVE_INFINITY;

  const match = item.subtitle.match(/(\d+)/);
  return match ? Number.parseInt(match[1], 10) : Number.POSITIVE_INFINITY;
}

function compareVisibleItems(left: GoodsBrowserItem, right: GoodsBrowserItem) {
  if (left.kind !== right.kind) return left.kind === "style" ? -1 : 1;
  const leftHatStyleNumber = getFullCustomHatStyleNumber(left);
  const rightHatStyleNumber = getFullCustomHatStyleNumber(right);
  if (leftHatStyleNumber !== rightHatStyleNumber) return leftHatStyleNumber - rightHatStyleNumber;
  return left.title.localeCompare(right.title);
}

function mixAllGoodsItems(items: GoodsBrowserItem[], filters: GoodsBrowserFilters) {
  const sortedItems = [...items].sort(compareVisibleItems);

  if (filters.category !== "all") return sortedItems;

  const buckets = new Map<GoodsBrowserCategory, GoodsBrowserItem[]>();

  for (const item of sortedItems) {
    const existingBucket = buckets.get(item.category);
    if (existingBucket) {
      existingBucket.push(item);
      continue;
    }

    buckets.set(item.category, [item]);
  }

  const seed = hashString(
    `${filters.search}|${filters.productionPath}|${filters.type}|${filters.brand}|${filters.fit}|${filters.price}|${sortedItems.map((item) => item.id).join("|")}`,
  );

  const categoryOrder = [...buckets.keys()].sort((left, right) => {
    const leftRank = hashString(`${seed}:${left}`);
    const rightRank = hashString(`${seed}:${right}`);

    if (leftRank !== rightRank) return leftRank - rightRank;
    return CATEGORY_DISPLAY_ORDER.indexOf(left) - CATEGORY_DISPLAY_ORDER.indexOf(right);
  });

  const mixedItems: GoodsBrowserItem[] = [];
  let addedItem = true;

  while (addedItem) {
    addedItem = false;

    for (const category of categoryOrder) {
      const bucket = buckets.get(category);
      const nextItem = bucket?.shift();

      if (!nextItem) continue;

      mixedItems.push(nextItem);
      addedItem = true;
    }
  }

  return mixedItems;
}

export function AllGoodsBrowser({
  items,
  className = "mx-auto w-full max-w-[min(1680px,calc(100vw-1rem))] px-3 pb-10 md:px-6 xl:px-8",
  initialSearch = "",
  initialCategory = "all",
  initialProductionPath = "all",
  initialType = "all",
  initialBrand = "all",
  initialSelectedColor = "all",
  initialFit = "all",
  initialPrice = "all",
  initialPage = 1,
  initialPageSize = DEFAULT_PAGE_SIZE,
  lockedCategory,
  searchPlaceholder = "Search styles, categories, brands, fit, or product type",
  showProductionPathToggle = false,
  productionPathHelperText,
}: AllGoodsBrowserProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [search, setSearch] = useState(parseSearchFilter(initialSearch));
  const [productionPath, setProductionPath] = useState<GoodsBrowserProductionPath | "all">(initialProductionPath);
  const [category, setCategory] = useState<GoodsBrowserCategory | "all">(lockedCategory ?? initialCategory);
  const [type, setType] = useState<string | "all">(parseStringFilter(initialType));
  const [brand, setBrand] = useState<string | "all">(parseStringFilter(initialBrand));
  const [selectedColor, setSelectedColor] = useState<ColorFilterGroup | "all">(parseColorFilterGroup(initialSelectedColor));
  const [fit, setFit] = useState<string | "all">(parseStringFilter(initialFit));
  const [price, setPrice] = useState<PriceFilter>(parsePriceFilter(initialPrice));
  const [page, setPage] = useState(parsePageNumber(initialPage));
  const [pageSize, setPageSize] = useState(parsePageSize(initialPageSize));
  const hasInitializedPaginationReset = useRef(false);

  const effectiveCategory = lockedCategory ?? category;

  const filters = useMemo(
    () => ({ search, productionPath, category: effectiveCategory, type, brand, selectedColor, fit, price }),
    [brand, effectiveCategory, fit, price, productionPath, search, selectedColor, type],
  );

  useEffect(() => {
    const nextSearchParams = buildFilterSearchParams(filters, lockedCategory, { page, pageSize });
    const currentSearchParams = buildFilterSearchParams({
      search: parseSearchFilter(searchParams.get("search") ?? undefined),
      productionPath:
        searchParams.get("productionPath") === "full-custom" ||
        searchParams.get("productionPath") === "quick-turn"
          ? (searchParams.get("productionPath") as GoodsBrowserProductionPath)
          : "all",
      category:
        searchParams.get("category") &&
        Object.prototype.hasOwnProperty.call(
          GOODS_BROWSER_CATEGORY_LABELS,
          searchParams.get("category") as GoodsBrowserCategory,
        )
          ? (searchParams.get("category") as GoodsBrowserCategory)
          : "all",
      type: parseStringFilter(searchParams.get("type") ?? undefined),
      brand: parseStringFilter(searchParams.get("brand") ?? undefined),
      selectedColor: parseColorFilterGroup(searchParams.get("color") ?? undefined),
      fit: parseStringFilter(searchParams.get("fit") ?? undefined),
      price: parsePriceFilter(searchParams.get("price") ?? undefined),
    }, lockedCategory, {
      page: parsePageNumber(searchParams.get("page") ?? undefined),
      pageSize: parsePageSize(searchParams.get("perPage") ?? undefined),
    });

    if (nextSearchParams.toString() === currentSearchParams.toString()) return;

    const nextUrl = nextSearchParams.toString()
      ? `${pathname}?${nextSearchParams.toString()}`
      : pathname;

    router.replace(nextUrl, { scroll: false });
  }, [filters, lockedCategory, page, pageSize, pathname, router, searchParams]);

  const visibleItems = useMemo(
    () =>
      mixAllGoodsItems(
        items.filter((item) => matchesItem(item, filters)),
        filters,
      ),
    [filters, items],
  );

  const totalPages = Math.max(1, Math.ceil(visibleItems.length / pageSize));
  const paginatedVisibleItems = useMemo(() => {
    const startIndex = (page - 1) * pageSize;
    return visibleItems.slice(startIndex, startIndex + pageSize);
  }, [page, pageSize, visibleItems]);

  const displayItems = useMemo(
    () => buildDisplayGridItems(paginatedVisibleItems, filters),
    [filters, paginatedVisibleItems],
  );

  const categoryOptions = useMemo(
    () => {
      const availableCategories = Array.from(new Set(items.map((item) => item.category))).sort(
        (left, right) => CATEGORY_DISPLAY_ORDER.indexOf(left) - CATEGORY_DISPLAY_ORDER.indexOf(right),
      );

      return [
        { key: "all" as const, label: "All Goods" },
        ...availableCategories.map((key) => ({
          key,
          label: GOODS_BROWSER_CATEGORY_LABELS[key],
        })),
      ];
    },
    [items],
  );

  const productionPathOptions = useMemo(
    () => [
      { key: "all" as const, label: "All" },
      ...Object.entries(GOODS_BROWSER_PRODUCTION_PATH_LABELS).map(([key, label]) => ({
        key: key as GoodsBrowserProductionPath,
        label,
      })),
    ],
    [],
  );

  const typeOptions = useMemo(
    () =>
      Array.from(
        new Set(
          items
            .filter((item) => matchesItem(item, filters, { type: true }))
            .map((item) => item.typeLabel)
            .filter(isDefinedString),
        ),
      ).sort(),
    [filters, items],
  );

  const brandOptions = useMemo(
    () => {
      const matchingItems = items.filter((item) =>
        matchesItem(item, filters, {
          brand: true,
          productionPath: isFullCustomBrandFilter(filters.brand),
        }),
      );
      const availableBrands = Array.from(
        new Set(
          matchingItems
            .map((item) => item.brand)
            .filter(isDefinedString),
        ),
      ).sort();

      const hasFullCustomItems = matchingItems.some((item) => item.productionPath === "full-custom");
      return hasFullCustomItems
        ? [FULL_CUSTOM_BRAND_FILTER, ...availableBrands]
        : availableBrands;
    },
    [filters, items],
  );

  useEffect(() => {
    if (brand === FULL_CUSTOM_BRAND_FILTER && productionPath === "quick-turn") {
      setBrand("all");
    }
  }, [brand, productionPath]);

  useEffect(() => {
    if (!hasInitializedPaginationReset.current) {
      hasInitializedPaginationReset.current = true;
      return;
    }

    setPage(1);
  }, [search, productionPath, effectiveCategory, type, brand, selectedColor, fit, price, pageSize]);

  useEffect(() => {
    if (page > totalPages) {
      setPage(totalPages);
    }
  }, [page, totalPages]);

  const colorOptions = useMemo(
    () =>
      Array.from(
        new Set(
          items
            .filter((item) => matchesItem(item, filters, { selectedColor: true }))
            .flatMap((item) => item.colors.map(getColorGroup)),
        ),
      )
        .map((groupKey) => COLOR_GROUPS.find((group) => group.key === groupKey))
        .filter(Boolean) as Array<(typeof COLOR_GROUPS)[number]>,
    [filters, items],
  );

  const fitOptions = useMemo(
    () =>
      Array.from(
        new Set(
          items
            .filter((item) => matchesItem(item, filters, { fit: true }))
            .map((item) => item.fit)
            .map((fit) => (fit ? normalizeFitLabel(fit) : undefined))
            .filter(isDefinedString),
        ),
      ).sort(),
    [filters, items],
  );

  const activeFilterCount =
    (search.trim() ? 1 : 0) +
    (showProductionPathToggle && productionPath !== "all" ? 1 : 0) +
    (lockedCategory ? 0 : effectiveCategory !== "all" ? 1 : 0) +
    (type !== "all" ? 1 : 0) +
    (brand !== "all" ? 1 : 0) +
    (selectedColor !== "all" ? 1 : 0) +
    (fit !== "all" ? 1 : 0) +
    (price !== "all" ? 1 : 0);

  const clearFilters = () => {
    setSearch("");
    setProductionPath("all");
    if (!lockedCategory) setCategory("all");
    setType("all");
    setBrand("all");
    setSelectedColor("all");
    setFit("all");
    setPrice("all");
    setPage(1);
  };

  const handleBrandChange = (nextBrand: string | "all") => {
    setBrand(nextBrand);
    setPage(1);

    if (nextBrand === FULL_CUSTOM_BRAND_FILTER) {
      setProductionPath("full-custom");
      return;
    }

    if (nextBrand !== "all" && productionPath === "full-custom") {
      setProductionPath("all");
    }
  };

  const hasMultiplePages = totalPages > 1;
  const showingRangeLabel = formatVisibleRangeLabel(page, pageSize, visibleItems.length);

  return (
    <div className={className}>
      <div className="overflow-hidden rounded-[2rem] border border-[#0B32A0]/10 bg-[rgba(255,253,248,0.94)] shadow-[0_28px_90px_rgba(8,30,111,0.08)]">
        <div className="border-b border-[#0B32A0]/8 px-4 py-4 md:px-6 xl:px-8">
          {showProductionPathToggle ? (
            <div className="mb-5 rounded-[1.6rem] border border-[#0B32A0]/10 bg-[#F4EEDF] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.52)] md:p-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#0B50D0]">
                Production Path
              </p>
              <div className="mt-3 inline-flex flex-wrap gap-2 rounded-full bg-white/78 p-1">
                {productionPathOptions.map((option) => {
                  const isActive = productionPath === option.key;
                  const hasIcon = option.key !== "all";

                  return (
                    <button
                      key={option.key}
                      type="button"
                      onClick={() => {
                        setProductionPath(option.key);
                        setPage(1);
                      }}
                      className={`min-h-11 rounded-full px-4 py-2 text-sm font-semibold transition ${
                        isActive
                          ? "bg-[#0B50D0] text-white"
                          : "text-[var(--og-blue)] hover:bg-[#0B32A0]/6"
                      }`}
                    >
                      <span className="flex items-center gap-2.5">
                        {hasIcon ? (
                          <span
                            className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${
                              isActive ? "bg-white" : "bg-white/72"
                            }`}
                          >
                            <Image
                              src={PRODUCTION_PATH_BADGE_SRC[option.key]}
                              alt=""
                              width={20}
                              height={20}
                              className="h-5 w-5 object-contain"
                              aria-hidden="true"
                            />
                          </span>
                        ) : null}
                        <span>{option.label}</span>
                      </span>
                    </button>
                  );
                })}
              </div>
              {productionPathHelperText ? (
                <p className="relative left-[3px] mt-3 max-w-3xl text-sm leading-6 text-[var(--og-muted)]">
                  {productionPathHelperText}
                </p>
              ) : null}
            </div>
          ) : null}

          <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
            <div className="flex min-w-0 flex-1 items-center gap-3 rounded-[1.3rem] border border-[#0B32A0]/10 bg-white/86 px-4 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.72)]">
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-5 w-5 shrink-0 text-[var(--og-blue)]"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-3.5-3.5" />
              </svg>
              <input
                type="search"
                value={search}
                onChange={(event) => {
                  setSearch(event.target.value);
                  setPage(1);
                }}
                placeholder={searchPlaceholder}
                className="w-full bg-transparent text-base text-[var(--og-blue)] outline-none placeholder:text-[var(--og-blue)]/55"
                aria-label="Search goods browser"
              />
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 xl:min-w-[24rem] xl:justify-end">
              <div className="text-right">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--og-blue)]">
                  {formatResultsCount(visibleItems.length)}
                </p>
                {visibleItems.length > 0 ? (
                  <p className="mt-1 text-xs font-medium uppercase tracking-[0.12em] text-[var(--og-blue)]/58">
                    {showingRangeLabel}
                  </p>
                ) : null}
              </div>
              <div className="flex flex-wrap items-center justify-end gap-2">
                <div className="inline-flex items-center gap-1 rounded-full border border-[#0B32A0]/10 bg-white/86 p-1">
                  <span className="pl-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--og-blue)]/58">
                    Show
                  </span>
                  {PAGE_SIZE_OPTIONS.map((option) => {
                    const isActive = pageSize === option;

                    return (
                      <button
                        key={option}
                        type="button"
                        onClick={() => {
                          setPageSize(option);
                          setPage(1);
                        }}
                        className={`min-h-9 rounded-full px-3 text-[11px] font-semibold uppercase tracking-[0.12em] transition ${
                          isActive
                            ? "bg-[#0B50D0] text-white"
                            : "text-[var(--og-blue)] hover:bg-[#0B32A0]/6"
                        }`}
                      >
                        {option}
                      </button>
                    );
                  })}
                </div>
                {activeFilterCount > 0 ? (
                  <button
                    type="button"
                    onClick={clearFilters}
                    className="rounded-full border border-[#0B32A0]/14 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--og-blue)] transition hover:border-[var(--og-orange)]/32 hover:text-[var(--og-orange)]"
                  >
                    Clear all
                  </button>
                ) : null}
              </div>
            </div>
          </div>

          {!lockedCategory ? (
            <div className="mt-4 overflow-x-auto pb-1">
              <div className="grid min-w-[max(100%,64rem)] grid-flow-col auto-cols-[minmax(7.25rem,1fr)] gap-2">
                {categoryOptions.map((option) => {
                  const isActive = effectiveCategory === option.key;

                  return (
                    <button
                      key={option.key}
                      type="button"
                      onClick={() => {
                        setCategory(option.key);
                        setPage(1);
                      }}
                      className={`inline-flex min-h-12 w-full items-center justify-center rounded-full border px-3 py-2 text-center transition ${
                        isActive
                          ? "border-[#0B50D0] bg-[#0B50D0] text-white ring-1 ring-white/45"
                          : "border-[#0B32A0]/10 bg-[#F4EEDF] text-[var(--og-blue)] hover:border-[#0B50D0]/24"
                      }`}
                    >
                      <span className="text-[13px] font-semibold leading-tight">{option.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          ) : null}
        </div>

        <div className="grid gap-6 px-4 py-5 md:px-6 xl:grid-cols-[280px_minmax(0,1fr)] xl:gap-8 xl:px-8 xl:py-8">
          <aside className="xl:sticky xl:top-24 xl:self-start">
            <div className="rounded-[1.8rem] bg-[#F4EEDF] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.55)]">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-[1.7rem] font-semibold uppercase leading-none text-[#0B50D0]">
                    Filters
                  </p>
                  <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--og-blue)]/62">
                    {activeFilterCount} active
                  </p>
                </div>
                {activeFilterCount > 0 ? (
                  <button
                    type="button"
                    onClick={clearFilters}
                    className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--og-blue)]/68 transition hover:text-[var(--og-orange)]"
                  >
                    Reset
                  </button>
                ) : null}
              </div>

              <div className="mt-7 space-y-7">
                {typeOptions.length ? (
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0B50D0]">
                      Type
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2.5">
                      <button
                        type="button"
                        onClick={() => {
                          setType("all");
                          setPage(1);
                        }}
                        className={`rounded-full border px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] transition ${
                          type === "all"
                            ? "border-[#0B50D0] bg-[#0B50D0] text-white"
                            : "border-[#0B32A0]/12 bg-white/62 text-[var(--og-blue)] hover:border-[#0B50D0]/28"
                        }`}
                      >
                        All Types
                      </button>
                      {typeOptions.map((option) => (
                          <button
                            key={option}
                            type="button"
                            onClick={() => {
                              setType(option);
                              setPage(1);
                            }}
                          className={`rounded-full border px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] transition ${
                            type === option
                              ? "border-[#0B50D0] bg-white text-[#0B50D0]"
                              : "border-[#0B32A0]/12 bg-white/62 text-[var(--og-blue)] hover:border-[#0B50D0]/28"
                          }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>
                ) : null}

                {brandOptions.length ? (
                  <div className="border-t border-[#0B32A0]/14 pt-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0B50D0]">
                      Brand
                    </p>
                    <div className="mt-3 space-y-2">
                      <button
                        type="button"
                        onClick={() => handleBrandChange("all")}
                        className={`flex w-full items-center justify-between rounded-2xl px-3 py-2 text-left transition ${
                          brand === "all"
                            ? "bg-white text-[#0B50D0] shadow-sm"
                            : "text-[var(--og-blue)]/78 hover:bg-white/66"
                        }`}
                      >
                        <span className="text-sm font-medium">All Brands</span>
                      </button>
                      {brandOptions.map((option) => (
                        <button
                          key={option}
                          type="button"
                          onClick={() => handleBrandChange(option)}
                          className={`flex w-full items-center justify-between rounded-2xl px-3 py-2 text-left transition ${
                            brand === option
                              ? "bg-white text-[#0B50D0] shadow-sm"
                              : "text-[var(--og-blue)]/78 hover:bg-white/66"
                          }`}
                        >
                          <span className="text-sm font-medium">{option}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                ) : null}

                {colorOptions.length ? (
                  <div className="border-t border-[#0B32A0]/14 pt-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0B50D0]">
                      Color
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2.5">
                      <button
                        type="button"
                        onClick={() => {
                          setSelectedColor("all");
                          setPage(1);
                        }}
                        className={`rounded-full border px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] transition ${
                          selectedColor === "all"
                            ? "border-[#0B50D0] bg-[#0B50D0] text-white"
                            : "border-[#0B32A0]/12 bg-white/62 text-[var(--og-blue)] hover:border-[#0B50D0]/28"
                        }`}
                      >
                        All Colors
                      </button>
                      {colorOptions.map((colorGroup) => (
                        <button
                          key={colorGroup.key}
                          type="button"
                          onClick={() => {
                            setSelectedColor(colorGroup.key);
                            setPage(1);
                          }}
                          className={`inline-flex items-center gap-2 rounded-full border px-2.5 py-1.5 text-[11px] font-semibold transition ${
                            selectedColor === colorGroup.key
                              ? "border-[#0B50D0] bg-white text-[#0B50D0]"
                              : "border-[#0B32A0]/12 bg-white/62 text-[var(--og-blue)] hover:border-[#0B50D0]/28"
                          }`}
                        >
                          <span
                            className={`h-4 w-4 rounded-full border ${colorGroup.key === "naturals" ? "border-[#0B32A0]/12" : "border-transparent"}`}
                            style={{ background: colorGroup.swatch }}
                          />
                          <span>{colorGroup.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                ) : null}

                {fitOptions.length ? (
                  <div className="border-t border-[#0B32A0]/14 pt-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0B50D0]">
                      Fit
                    </p>
                    <div className="mt-3 space-y-2">
                      <button
                        type="button"
                        onClick={() => {
                          setFit("all");
                          setPage(1);
                        }}
                        className={`flex w-full items-center justify-between rounded-2xl px-3 py-2 text-left transition ${
                          fit === "all"
                            ? "bg-white text-[#0B50D0] shadow-sm"
                            : "text-[var(--og-blue)]/78 hover:bg-white/66"
                        }`}
                      >
                        <span className="text-sm font-medium">All Fits</span>
                      </button>
                      {fitOptions.map((option) => (
                        <button
                          key={option}
                          type="button"
                          onClick={() => {
                            setFit(option);
                            setPage(1);
                          }}
                          className={`flex w-full items-center justify-between rounded-2xl px-3 py-2 text-left transition ${
                            fit === option
                              ? "bg-white text-[#0B50D0] shadow-sm"
                              : "text-[var(--og-blue)]/78 hover:bg-white/66"
                          }`}
                        >
                          <span className="text-sm font-medium">{option}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                ) : null}

                <div className="border-t border-[#0B32A0]/14 pt-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0B50D0]">
                    Cost
                  </p>
                  <div className="mt-3 space-y-2">
                    {PRICE_OPTIONS.map((option) => (
                      <button
                        key={option.key}
                        type="button"
                        onClick={() => {
                          setPrice(option.key);
                          setPage(1);
                        }}
                        className={`flex w-full items-center justify-between rounded-2xl px-3 py-2 text-left transition ${
                          price === option.key
                            ? "bg-white text-[#0B50D0] shadow-sm"
                            : "text-[var(--og-blue)]/78 hover:bg-white/66"
                        }`}
                      >
                        <span className="text-sm font-medium">{option.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </aside>

          <div>
            {visibleItems.length === 0 ? (
              <div className="rounded-[1.8rem] border border-dashed border-[#0B32A0]/18 bg-white/72 px-8 py-20 text-center">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--og-blue)]">
                  No matches
                </p>
                <p className="mt-3 text-base leading-7 text-[var(--og-muted)]">
                  Try clearing a few filters or broadening the search.
                </p>
                <p className="mx-auto mt-4 max-w-[34rem] text-sm leading-6 text-[var(--og-muted)]">
                  Don&apos;t see the product you want to customize? That doesn&apos;t mean we can&apos;t make it.{" "}
                  <Link href="/contact" className="font-semibold text-[var(--og-orange)] underline decoration-[0.08em] underline-offset-[0.18em]">
                    Contact us
                  </Link>{" "}
                  and we&apos;ll help scope it.
                </p>
                <button
                  type="button"
                  onClick={clearFilters}
                  className="mt-6 inline-flex min-h-11 items-center justify-center rounded-xl border-2 border-[#0B32A0] px-5 text-sm font-semibold uppercase tracking-[0.12em] text-[#0B32A0] transition hover:border-[var(--og-orange)] hover:bg-[var(--og-orange)] hover:text-white"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <>
                <div className="mb-5 flex flex-wrap items-center justify-between gap-3 rounded-[1.4rem] border border-[#0B32A0]/10 bg-white/72 px-4 py-3">
                  <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--og-blue)]">
                    {showingRangeLabel}
                  </p>
                  {hasMultiplePages ? (
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setPage((currentPage) => Math.max(1, currentPage - 1))}
                        disabled={page === 1}
                        className="inline-flex min-h-10 items-center justify-center rounded-full border border-[#0B32A0]/14 px-4 text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--og-blue)] transition hover:border-[#0B50D0] hover:text-[#0B50D0] disabled:cursor-not-allowed disabled:opacity-35"
                      >
                        Previous
                      </button>
                      <p className="min-w-[6.5rem] text-center text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--og-blue)]/68">
                        Page {page} of {totalPages}
                      </p>
                      <button
                        type="button"
                        onClick={() => setPage((currentPage) => Math.min(totalPages, currentPage + 1))}
                        disabled={page === totalPages}
                        className="inline-flex min-h-10 items-center justify-center rounded-full border border-[#0B32A0]/14 px-4 text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--og-blue)] transition hover:border-[#0B50D0] hover:text-[#0B50D0] disabled:cursor-not-allowed disabled:opacity-35"
                      >
                        Next
                      </button>
                    </div>
                  ) : null}
                </div>

                <div className="grid gap-6 md:grid-cols-2 min-[1280px]:grid-cols-3">
                  {displayItems.map((entry) => {
                  if (entry.kind === "education") {
                    const { card } = entry;
                    const accentClass =
                      card.accent === "orange"
                        ? "text-[var(--og-orange)]"
                        : "text-[#0B50D0]";

                    return (
                      <article
                        key={entry.id}
                        className={`group relative h-full overflow-hidden rounded-[1.9rem] ${
                          card.size === "double" ? "md:col-span-2" : ""
                        }`}
                      >
                        <div
                          className={`relative h-full min-h-[19rem] ${card.size === "double" ? "md:min-h-[21rem]" : ""}`}
                        >
                          <Image
                            src={card.image}
                            alt={card.title}
                            fill
                            sizes="(min-width: 1536px) 40vw, (min-width: 768px) 50vw, 100vw"
                            className={`object-cover transition duration-500 ${
                              card.id === "quick-turn-hats-turnaround" ? "scale-[1.14]" : ""
                            }`}
                            style={card.imagePosition ? { objectPosition: card.imagePosition } : undefined}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/82 via-[#262626]/34 to-transparent" />
                          <div className="absolute inset-x-0 bottom-0 p-6 md:p-7">
                            <p className={`text-[11px] font-semibold uppercase tracking-[0.2em] ${accentClass} drop-shadow-[0_1px_8px_rgba(0,0,0,0.28)]`}>
                              {card.eyebrow}
                            </p>
                            <h2 className="mt-2 max-w-[16ch] text-[clamp(1.8rem,2.5vw,2.8rem)] font-semibold leading-[0.94] text-white">
                              {card.title}
                            </h2>
                            <p className="mt-3 max-w-[34rem] text-sm leading-6 text-white/88">
                              {card.body}
                            </p>
                          </div>
                        </div>
                      </article>
                    );
                  }

                  const { item } = entry;
                  const itemHref = hasCustomizerPage(item)
                    ? buildCustomizerItemHref(item.href, filters, lockedCategory, { page, pageSize })
                    : item.href;

                  return (
                    <article
                      key={entry.id}
                      className="group h-full overflow-hidden rounded-[1.9rem] border-[3px] border-[#B79A78] bg-[rgba(255,248,241,0.88)] transition hover:border-[#0B32A0] hover:shadow-lg"
                    >
                      <Link href={itemHref} className="flex h-full flex-col">
                        <div className={`relative aspect-square overflow-hidden border-b border-[#0B32A0]/8 ${getCardImageBackgroundClass(item)}`}>
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            sizes="(min-width: 1536px) 28vw, (min-width: 768px) 44vw, 100vw"
                            className={`${getCardImageFitClass(item)} ${getCardImageOffsetClass(item)} transition duration-500 ${item.hoverImage ? "opacity-100 group-hover:opacity-0" : getCardHoverZoomClass(item)} ${getCardImageScaleClass(item)}`}
                            style={item.imagePosition ? { objectPosition: item.imagePosition } : undefined}
                          />
                          {item.hoverImage ? (
                            <Image
                              src={item.hoverImage}
                              alt={`${item.title} alternate view`}
                              fill
                              sizes="(min-width: 1536px) 28vw, (min-width: 768px) 44vw, 100vw"
                              className={`${getCardImageFitClass(item)} ${getCardImageOffsetClass(item)} opacity-0 transition duration-500 group-hover:opacity-100 ${getCardImageScaleClass(item)}`}
                              style={item.imagePosition ? { objectPosition: item.imagePosition } : undefined}
                            />
                          ) : null}
                          <div className="absolute left-3 top-3">
                            <span className="rounded-full bg-[#0B32A0]/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[var(--og-blue)]">
                              {getCardDescriptorLabel(item)}
                            </span>
                          </div>
                          <div className="absolute right-3 top-3 p-2.5">
                            <Image
                              src={PRODUCTION_PATH_BADGE_SRC[item.productionPath]}
                              alt={`${GOODS_BROWSER_PRODUCTION_PATH_LABELS[item.productionPath]} badge`}
                              width={45}
                              height={45}
                              className="h-[44.8px] w-[44.8px]"
                            />
                          </div>
                        </div>

                        <div className="flex h-full flex-1 flex-col p-6">
                          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--og-orange)]">
                            {item.subtitle}
                          </p>
                          <h2 className="mt-1 text-2xl font-semibold leading-none text-[var(--og-blue)]">
                            {item.title}
                          </h2>
                          <p className="mt-3 min-h-[4.5rem] line-clamp-3 text-sm leading-6 text-[var(--og-muted)]">
                            {item.description}
                          </p>

                          {item.decorationOptions?.length ? (
                            <div className="mt-4 flex flex-wrap gap-2">
                              {item.decorationOptions.map((option) => (
                                <span
                                  key={`${item.id}-${option}`}
                                  className="rounded-full border border-[#0B32A0]/10 bg-white/82 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--og-blue)]"
                                >
                                  {option}
                                </span>
                              ))}
                            </div>
                          ) : null}

                          {item.colors.length ? (
                            <div className="mt-4 flex items-center gap-2">
                              <p className="text-sm font-medium leading-none tracking-[0.01em] text-[var(--og-muted)]">
                                Choose from {item.colors.length} color{item.colors.length === 1 ? "" : "s"}
                              </p>
                              <div className="flex items-center gap-1.5">
                                {item.colors.slice(0, 5).map((color) => (
                                  <span
                                    key={`${item.id}-${color}`}
                                    className={`h-3.5 w-3.5 rounded-full border ${swatchBorderClass(color)}`}
                                    style={swatchStyle(color)}
                                  />
                                ))}
                                {item.colors.length > 5 ? (
                                  <span className="text-[11px] font-semibold text-[var(--og-blue)]/58">
                                    +{item.colors.length - 5}
                                  </span>
                                ) : null}
                              </div>
                            </div>
                        ) : shouldShowFullCustomPaletteRow(item) ? (
                          <div className="mt-4 flex items-center gap-2">
                            <p className="text-sm font-medium leading-none tracking-[0.01em] text-[var(--og-muted)]">
                              Custom fabric + colors
                            </p>
                            <div className="flex items-center gap-1.5">
                                {FULL_CUSTOM_PREVIEW_SWATCHES.map((color) => (
                                  <span
                                    key={`${item.id}-${color}`}
                                    className={`h-3.5 w-3.5 rounded-full border ${swatchBorderClass(color)}`}
                                    style={swatchStyle(color)}
                                  />
                                ))}
                              </div>
                            </div>
                          ) : null}

                          <div className="mt-auto pt-4 flex items-end justify-between gap-3">
                            {item.priceLabel ? (
                              <div className="-translate-y-1 space-y-1.5">
                                <p className="text-sm font-semibold text-[var(--og-orange)]">
                                  {item.priceLabel}
                                </p>
                                {item.turnaroundLabel ? (
                                  <p
                                    className="text-[11px] leading-none tracking-[0.03em] text-[var(--og-muted)]"
                                    style={{ fontFamily: "JukeboxJohnny, var(--font-subtitle-alt)" }}
                                  >
                                    Turnaround {item.turnaroundLabel}
                                  </p>
                                ) : null}
                              </div>
                            ) : (
                              <p className="-translate-y-1 text-sm font-semibold text-[var(--og-orange)]">
                                Explore category
                              </p>
                            )}

                            <span className="inline-flex min-h-11 shrink-0 items-center justify-center rounded-xl border-2 border-[#0B32A0] px-5 text-sm font-semibold uppercase tracking-[0.12em] text-[#0B32A0] transition group-hover:-translate-y-[2px] group-hover:border-[var(--og-orange)] group-hover:bg-[var(--og-orange)] group-hover:text-white">
                              {item.ctaLabel}
                            </span>
                          </div>
                        </div>
                      </Link>
                    </article>
                  );
                  })}
                </div>

                {hasMultiplePages ? (
                  <div className="mt-8 flex flex-wrap items-center justify-center gap-3 rounded-[1.4rem] border border-[#0B32A0]/10 bg-white/72 px-4 py-4">
                    <button
                      type="button"
                      onClick={() => setPage((currentPage) => Math.max(1, currentPage - 1))}
                      disabled={page === 1}
                      className="inline-flex min-h-11 items-center justify-center rounded-full border-2 border-[#0B32A0] px-5 text-sm font-semibold uppercase tracking-[0.12em] text-[#0B32A0] transition hover:border-[var(--og-orange)] hover:text-[var(--og-orange)] disabled:cursor-not-allowed disabled:opacity-35"
                    >
                      Previous page
                    </button>
                    <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--og-blue)]/72">
                      Page {page} of {totalPages}
                    </p>
                    <button
                      type="button"
                      onClick={() => setPage((currentPage) => Math.min(totalPages, currentPage + 1))}
                      disabled={page === totalPages}
                      className="inline-flex min-h-11 items-center justify-center rounded-full bg-[var(--og-orange)] px-5 text-sm font-semibold uppercase tracking-[0.12em] text-white transition hover:-translate-y-[2px] hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-35"
                    >
                      Next page
                    </button>
                  </div>
                ) : null}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
