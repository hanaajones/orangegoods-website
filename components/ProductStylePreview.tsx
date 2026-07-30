"use client";

import { hatStyles, type HatStyle, type HatStyleImage } from "@/app/goods/hats/style-data";
import {
  CATALOG_PACKAGING_PRICES,
  CATALOG_PRODUCTS,
  JOL_SPECIALTY_INK_PRICE,
  calculateCatalogBuilderPricing,
  type CatalogPackagingUpgrade,
  type CatalogSpecialtyPrintUpgrade,
} from "@/data/catalog";
import { READY_MADE_HATS } from "@/lib/ready-made-hats";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import { type Dispatch, type SetStateAction, useEffect, useMemo, useRef, useState } from "react";

type ModeKey = "ready" | "catalog" | "shop" | "build" | "crafted";
type ApparelSize = "XS" | "S" | "M" | "L" | "XL" | "2XL" | "3XL" | "4XL";
type CatalogColorOption = {
  name: string;
  value: string;
};

type ProductStylePreviewProps = {
  initialMode?: ModeKey;
  lockedMode?: ModeKey;
  pageKicker?: string;
  pageTitle?: string;
  pageDescription?: string;
  pageBackHref?: string;
  pageBackLabel?: string;
  modeLabelOverrides?: Partial<Record<ModeKey, string>>;
  previewLinks?: {
    label: string;
    href: string;
  }[];
};

type PreviewMediaItem = {
  src: string;
  alt: string;
  label: string;
  imagePosition?: string;
  imageClassName?: string;
};

type ReadyMadeStyle = (typeof READY_MADE_HATS)[number];
type ReadyMadeColor = ReadyMadeStyle["colors"][number];

const modes: Record<ModeKey, {
  label: string;
  eyebrow: string;
  title: string;
  description: string;
  cta: string;
  unitLabel: string;
  unitPrice: number;
  timeline: string;
}> = {
  ready: {
    label: "Ready-made",
    eyebrow: "Ready Made · AS Colour",
    title: "Ready Made Hats",
    description: "A simplified branded-hat builder built around premium blanks, fast turns, and only the decisions that actually matter.",
    cta: "Submit Hat for Review",
    unitLabel: "per hat",
    unitPrice: 16.5,
    timeline: "2-3 weeks",
  },
  catalog: {
    label: "Catalog",
    eyebrow: "Catalog · Apparel",
    title: "Heavyweight Tee",
    description: "A clean quote-first product page for common blanks, quantity tiers, print add-ons, and clear B2B pricing.",
    cta: "Request a Quote",
    unitLabel: "per tee",
    unitPrice: 18.25,
    timeline: "2-3 weeks",
  },
  shop: {
    label: "Shop",
    eyebrow: "Shop · In stock",
    title: "OG Classic Cap",
    description: "Retail-style product storytelling with cleaner buying controls and product imagery doing most of the work.",
    cta: "Add to Cart",
    unitLabel: "each",
    unitPrice: 32,
    timeline: "Ships this week",
  },
  build: {
    label: "Build Online",
    eyebrow: "Build Online · OG Crafted",
    title: "Build Your Hat",
    description: "A guided builder path for shape, fabric, interior labels, seam tape, patches, and full custom decisions.",
    cta: "Submit Hat for Review",
    unitLabel: "starting at",
    unitPrice: 12.5,
    timeline: "6-8 weeks",
  },
  crafted: {
    label: "OG Crafted Hats",
    eyebrow: "OG Crafted · Hats",
    title: "OG Crafted Hats",
    description: "A dedicated OG Crafted hats page with guided decisions for silhouette, fabric, labels, seam tape, patches, and custom details.",
    cta: "Submit Hat for Review",
    unitLabel: "starting at",
    unitPrice: 12.5,
    timeline: "6-8 weeks",
  },
};

const colorOptions = [
  { name: "Navy", value: "#172a54" },
  { name: "Walnut", value: "#795235" },
  { name: "Natural", value: "#e8dfcc" },
  { name: "Eucalyptus", value: "#718a78" },
];

const catalogColorOptions: CatalogColorOption[] = [
  { name: "Vintage Black", value: "#232323" },
  { name: "Bone", value: "#e7ddca" },
  { name: "Natural", value: "#e4d9c8" },
  { name: "Heather Grey", value: "#b6b7bb" },
  { name: "Cobalt", value: "#315caa" },
  { name: "Forest", value: "#32443a" },
  { name: "Clay", value: "#bf785d" },
  { name: "Chocolate", value: "#5b4035" },
];

const READY_MADE_COLOR_HEX: Record<string, string> = {
  Black: "#1a1a1a",
  Coal: "#3a3a3a",
  Asphalt: "#4a4a4a",
  "Midnight Blue": "#1b2a4a",
  Atlantic: "#1e3a5f",
  Navy: "#1a2f5a",
  Cypress: "#2d4a3e",
  Forest: "#2d4a2d",
  "Forest Green": "#254833",
  Army: "#4a5a2a",
  Khaki: "#8a7a5a",
  Camel: "#c4956a",
  Walnut: "#7a5a3a",
  Natural: "#ddd3bf",
  Bone: "#e8e0d0",
  Ecru: "#f0ead8",
  Cream: "#f5f0e0",
  White: "#ffffff",
  "Bright White": "#ffffff",
  "Hazy Pink": "#e8c4c0",
  Bubblegum: "#f0a0b8",
  "Charity Pink": "#f3a0b9",
  "Pale Pink": "#efc2c4",
  Orchid: "#c87ab8",
  Burgundy: "#6a1a2a",
  Cardinal: "#9a1a2a",
  Red: "#cc2222",
  Fire: "#e05a1a",
  Sunset: "#e88040",
  Mustard: "#c8a020",
  Butter: "#f0d870",
  Lemonade: "#f5e878",
  Yellow: "#f0d020",
  Seafoam: "#7acfb8",
  Sage: "#9ca68b",
  Mint: "#b8d8c8",
  Eucalyptus: "#708f83",
  Powder: "#a0c8e8",
  "Carolina Blue": "#5aa0d0",
  "Slate Blue": "#637a92",
  "Petrol Blue": "#22536b",
  Hydro: "#168aa6",
  Topaz: "#1b9eb3",
  "Bright Royal": "#2255bb",
  Royal: "#2255bb",
  Cobalt: "#1d4f91",
  Autumn: "#c86030",
  Clay: "#b87060",
  Chestnut: "#7d4f3c",
  Mushroom: "#a08878",
  Taupe: "#908070",
  Grey: "#808080",
  "Light Grey": "#c8c9c7",
  Ash: "#c8c8c8",
  Silver: "#b8b8b8",
  Smoke: "#777c78",
  Storm: "#6b7480",
  Citrus: "#d2c83a",
  Pistachio: "#a1ad70",
  "Pine Green": "#1f4a36",
  Grape: "#5c4a82",
  Violet: "#8d75b5",
  Liberty: "#5d3f91",
  Charlotte: "#79c7d3",
  Lapis: "#3347a1",
  Lime: "#a8c63f",
  Mineral: "#7c8f8b",
  "Desert Camo": "#8a8060",
  "Tree Camo": "#4a6040",
  "Faded Bone": "#ddd8ca",
  "Faded Midnight": "#2a3550",
  "Faded Grey": "#909090",
  "Faded Black": "#3a3a3a",
};

const DEFAULT_CATALOG_PRICING_PRODUCT =
  CATALOG_PRODUCTS.find((product) => product.slug === "as-colour-5026") ?? CATALOG_PRODUCTS[0];

function resolveReadyMadeSwatchColor(name: string) {
  const direct = READY_MADE_COLOR_HEX[name];
  if (direct) return direct;

  const unslashed = name.replace(/\s*\/\s*/g, " ");
  if (READY_MADE_COLOR_HEX[unslashed]) return READY_MADE_COLOR_HEX[unslashed];

  if (name.includes(" / ")) {
    const parts = name.split(" / ").map((part) => part.trim());
    const match = parts.find((part) => !part.toLowerCase().includes("black") && READY_MADE_COLOR_HEX[part])
      ?? parts.find((part) => READY_MADE_COLOR_HEX[part]);
    if (match) return READY_MADE_COLOR_HEX[match];
  }

  const lowerName = unslashed.toLowerCase();
  const key = Object.keys(READY_MADE_COLOR_HEX)
    .sort((a, b) => b.length - a.length)
    .find((colorName) => lowerName.includes(colorName.toLowerCase()));

  return key ? READY_MADE_COLOR_HEX[key] : undefined;
}

function readyMadeSwatchStyle(name: string) {
  return { background: resolveReadyMadeSwatchColor(name) ?? "#d0ccc0" };
}

function uniqueReadyMadePhotos(candidates: (string | undefined)[]) {
  return candidates.filter((src, index, all): src is string => Boolean(src) && all.indexOf(src) === index);
}

function readyMadeGalleryPhotos(color: ReadyMadeColor) {
  return uniqueReadyMadePhotos([color.front, color.side ?? color.turn, color.back]);
}

function firstReadyMadeColorIndex(style: ReadyMadeStyle) {
  const nextIndex = style.colors.findIndex((color) => readyMadeGalleryPhotos(color).length > 0);
  return nextIndex >= 0 ? nextIndex : 0;
}

function rebalanceApparelSizeBreakdown(
  target: number,
  current: Record<ApparelSize, number>,
) {
  const next = Object.fromEntries(apparelSizeOptions.map((size) => [size, 0])) as Record<ApparelSize, number>;
  const currentTotal = Object.values(current).reduce((sum, value) => sum + value, 0);

  if (currentTotal <= 0) {
    next.M = Math.floor(target * 0.4);
    next.L = Math.floor(target * 0.35);
    next.XL = Math.floor(target * 0.15);
    next.S = target - next.M - next.L - next.XL;
    return next;
  }

  let assigned = 0;
  apparelSizeOptions.forEach((size, index) => {
    if (index === apparelSizeOptions.length - 1) {
      next[size] = Math.max(0, target - assigned);
      return;
    }

    const value = Math.floor((current[size] / currentTotal) * target);
    next[size] = value;
    assigned += value;
  });

  return next;
}

const shopSizeOptions = ["S/M", "L/XL", "One size"];
const apparelSizeOptions: ApparelSize[] = ["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL"];
const initialApparelSizeBreakdown: Record<ApparelSize, number> = {
  XS: 10,
  S: 35,
  M: 80,
  L: 70,
  XL: 25,
  "2XL": 20,
  "3XL": 10,
  "4XL": 0,
};

const standardQtyMarks = [
  { value: 100, label: "100", tick: false },
  { value: 250, label: "250", tick: true },
  { value: 500, label: "500", tick: true },
  { value: 750, label: "750", tick: true },
  { value: 1000, label: "1,000", tick: false },
];

const catalogQtyMarks = [
  { value: 100, label: "100", tick: false },
  { value: 500, label: "500", tick: true },
  { value: 1000, label: "1,000", tick: true },
  { value: 2000, label: "2,000", tick: false },
];

const buildQtyMarks = [
  { value: 100, label: "100", tick: false },
  { value: 250, label: "250", tick: true },
  { value: 500, label: "500", tick: true },
  { value: 1000, label: "1K", tick: true },
  { value: 2000, label: "2K", tick: true },
  { value: 3000, label: "3K", tick: true },
  { value: 4000, label: "4K", tick: true },
  { value: 5000, label: "5K", tick: false },
];

const defaultMedia: PreviewMediaItem[] = [
  {
    src: "/images/product/hats/feb-snapback-navy-front.jpg",
    alt: "Navy stock cap front view",
    label: "Product",
  },
  {
    src: "/images/product/hats/og-patch-detail.jpg",
    alt: "Embroidered patch detail",
    label: "Detail",
  },
  {
    src: "/images/product/hats/feb-canvas-snapback-interior.jpg",
    alt: "Interior hat label and seam tape detail",
    label: "Inside",
  },
  {
    src: "/images/gallery/apparel-686-hoodie-detail.jpg",
    alt: "Heavyweight apparel detail",
    label: "Fabric",
  },
];

const catalogMedia: PreviewMediaItem[] = [
  {
    src: "/images/product/apparel-tshirt-hero.jpg",
    alt: "Heavyweight tee front view",
    label: "Front view",
  },
  {
    src: "/images/gallery/apparel-verve-gd-tee-verve_grateful-dead_tshirt_040.jpg",
    alt: "Screen printed tee detail",
    label: "Print detail",
  },
  {
    src: "/images/gallery/apparel-686-hoodie-front.jpg",
    alt: "Premium blank garment view",
    label: "Garment view",
  },
  {
    src: "/images/gallery/apparel-686-hoodie-detail.jpg",
    alt: "Garment fabric and print detail",
    label: "Fabric detail",
  },
];

const relatedProducts = [
  {
    href: "/shop/og-classic-hat",
    name: "OG Classic Hat",
    price: "$32",
    image: "/images/product/hats/feb-snapback-navy-front.jpg",
  },
  {
    href: "/goods/hats/ready-made/1130",
    name: "Stock Cap",
    price: "From $16.50",
    image: "/images/product/hats/as-colour/1130-cap-ecru-turn.jpg",
  },
  {
    href: "/goods/hats/ready-made/1123",
    name: "Surf Rope Cap",
    price: "From $17.50",
    image: "/images/product/hats/as-colour/1123-rope-cap-main.jpg",
  },
  {
    href: "/goods/hats/ready-made/1141",
    name: "Trucker Cap",
    price: "From $15.75",
    image: "/images/product/hats/as-colour/1141-trucker-cap-bone-front.jpg",
  },
  {
    href: "/goods/hats/ready-made/1175",
    name: "Bucket Hat",
    price: "From $18.50",
    image: "/images/product/hats/as-colour/1175-bucket-hat-white-back.jpg",
  },
];

const includedByMode: Record<ModeKey, string[]> = {
  ready: ["Blank cap", "Front embroidery", "Digitizing setup", "Tech pack", "Sample photo"],
  catalog: ["Blank garment", "Color selection", "Size breakdown", "Front print", "Quote review"],
  shop: ["Finished product", "OG packaging", "Fast fulfillment", "Easy checkout"],
  build: ["Custom silhouette", "Fabric selection", "Front decoration", "Interior label", "Tech pack"],
  crafted: ["Full custom hat", "Front decoration", "Interior label", "Extras"],
};

const shopInfoSections = [
  {
    label: "Details",
    copy: "100% cotton twill. Unstructured. Low-profile adjustable strap closure.",
  },
  {
    label: "Care",
    copy: "Spot clean or hand wash cold. Air dry only.",
  },
  {
    label: "Shipping",
    copy: "Ships from Los Angeles. Standard in-stock fulfillment is 2-4 business days before carrier transit.",
  },
  {
    label: "Size",
    copy: "One size fits most with an adjustable back strap.",
  },
  {
    label: "Fit guide",
    copy: "Low-profile crown with a relaxed fit. Best for customers who like a softer, easy-wearing cap.",
  },
];

const hatMaterialOptions = [
  "Cotton twill",
  "Cotton canvas",
  "Denim",
  "Nylon",
  "Corduroy",
  "Ripstop",
];

const hatAdditionalDecorationOptions = [
  "Branded taping",
  "Closure label",
  "Brim rope",
  "Contrast fabric",
  "Stripe trim",
] as const;

const hatClosureOptions = [
  "Snapback",
  "Strapback + clasp",
  "Strapback + slider",
  "Velcro",
  "Clip closure",
  "Leather clasp",
];

const hatClosurePrices: Partial<Record<(typeof hatClosureOptions)[number], number>> = {
  "Leather clasp": 1,
};

const hatBrimCurveOptions = ["Flat", "Slight curve", "Curved"] as const;

const hatClosurePreviewOptions = [
  {
    label: "Snapback",
    image: "/images/hats/closures/closure-snapback.jpg",
    imageAlt: "Snapback closure reference",
    imagePosition: "center 100%",
    imageScale: 1.3,
  },
  {
    label: "Strapback + clasp",
    image: "/images/hats/closures/closure-strapback-clasp.jpg",
    imageAlt: "Strapback with clasp closure reference",
    imagePosition: "center 104%",
    imageScale: 1.38,
  },
  {
    label: "Strapback + slider",
    image: "/images/hats/closures/closure-strapback-slider.jpg",
    imageAlt: "Strapback with slider closure reference",
    imagePosition: "center 100%",
    imageScale: 1.3,
  },
  {
    label: "Velcro",
    image: "/images/hats/closures/closure-velcro.jpg",
    imageAlt: "Velcro closure reference",
    imagePosition: "center 104%",
    imageScale: 1.38,
  },
  {
    label: "Clip closure",
    image: "/images/hats/closures/closure-clip-buckle.jpg",
    imageAlt: "Clip closure reference",
    imagePosition: "center 100%",
    imageScale: 1.3,
  },
  {
    label: "Leather clasp",
    image: "/images/hats/closures/closure-leather-clasp.jpg",
    imageAlt: "Leather clasp closure reference",
    imagePosition: "center 102%",
    imageScale: 1.34,
  },
] as const;

function defaultHatClosureForStyle(style: HatStyle): (typeof hatClosureOptions)[number] | "No closure" {
  if (style.profile === "Bucket" || style.closure === "Fitted") return "No closure";
  if (style.closure === "Clip closure") return "Clip closure";
  if (style.closure === "Leather / metal clasp") return "Leather clasp";
  if (style.closure === "Strapback + slider") return "Strapback + slider";
  if (style.closure === "Velcro") return "Velcro";
  if (style.closure === "Strapback") return "Strapback + clasp";
  return "Snapback";
}

function defaultHatBrimCurveForStyle(style: HatStyle): (typeof hatBrimCurveOptions)[number] {
  switch (style.slug) {
    case "og-100-dad-hat":
    case "og-120-coast-cap":
      return "Curved";
    case "og-140-surf-trucker":
    case "og-150-stock-trucker":
    case "og-200-perform-cap":
      return "Slight curve";
    default:
      return "Flat";
  }
}

const hatSampleOptions = [
  {
    id: "none",
    label: "No sample",
    description: "Skip sampling and move into production from the approved tech pack.",
    feeLabel: "No added sample time",
    image: "",
    imageAlt: "",
  },
  {
    id: "pp",
    label: "PP sample",
    description: "Minor adjustments only after bulk materials are placed with the factory.",
    feeLabel: "Included upon request · adds two weeks",
    image: "/images/gallery/headwear-patch-layout-mg-9412.jpg",
    imageAlt: "PP sample reference",
  },
  {
    id: "proto",
    label: "Proto sample",
    description: "Full custom sample before bulk materials are placed with the factory.",
    feeLabel: "+$100 per sample",
    image: "/images/gallery/headwear-customize-detail-mg-2672.jpg",
    imageAlt: "Proto sample reference",
  },
] as const;

const hatSampleDeliveryOptions = [
  {
    id: "photo",
    label: "Photo review",
    description: "Review the sample by photos first.",
    feeLabel: "Included",
  },
  {
    id: "shipped",
    label: "Ship sample",
    description: "Ship the physical sample for review.",
    feeLabel: "+$50 shipping · adds 1 week",
  },
] as const;

const additionalLocations = [
  { label: "Back embroidery", price: 4.5 },
  { label: "Side embroidery", price: 4.5 },
];

const catalogPrintAddOnOptions = [
  { label: "Water-Based Ink", price: JOL_SPECIALTY_INK_PRICE },
  { label: "Discharge Print", price: JOL_SPECIALTY_INK_PRICE },
  { label: "Puff Print", price: JOL_SPECIALTY_INK_PRICE },
] as const;

const catalogPackagingOptions = [
  { label: "Printed neck label", price: CATALOG_PACKAGING_PRICES["Printed neck label"] },
  { label: "Woven label", price: CATALOG_PACKAGING_PRICES["Woven label"] },
  { label: "Folded + poly bagged", price: CATALOG_PACKAGING_PRICES["Folded + poly bagged"] },
] as const;

const craftedDecorationOptions = [
  {
    id: "embroidery",
    label: "Embroidery",
    sub: "Classic stitched finish with texture.",
    image: "/images/gallery/headwear-flat-embroidery-mg-6827.jpg",
    imageAlt: "Flat embroidery detail",
    imagePosition: "center 66%",
  },
  {
    id: "embroideredPatch",
    label: "Embroidered Patch",
    sub: "Raised patch look with border.",
    image: "/images/gallery/headwear-patch-mg-6923.jpg",
    imageAlt: "Embroidered patch detail",
    imagePosition: "center 52%",
  },
  {
    id: "wovenPatch",
    label: "Woven Patch",
    sub: "Crisp detail for finer logos.",
    image: "/images/gallery/headwear-woven-patch-mg-6859.jpg",
    imageAlt: "Woven patch detail",
    imagePosition: "center 52%",
  },
  {
    id: "screenPrint",
    label: "Screen Print",
    sub: "Best for bold graphic hits.",
    image: "/images/gallery/hat-feb-img_7544.jpg",
    imageAlt: "Screen print detail",
    imagePosition: "center 48%",
  },
  {
    id: "rubberPvcPatch",
    label: "Rubber PVC Patch",
    sub: "Dimensional molded patch with depth.",
    image: "/images/gallery/headwear-patch-mg-6923.jpg",
    imageAlt: "Rubber PVC patch detail",
    imagePosition: "center 52%",
  },
] as const;

const readyMadeDecorationOptions = [
  {
    id: "embroidery",
    label: "Embroidery",
    sub: "Classic stitched finish with texture.",
  },
  {
    id: "embroideredPatch",
    label: "Patch (adds three weeks)",
    sub: "A cleaner patch-first direction for bolder logos.",
  },
  {
    id: "heatTransfer",
    label: "Heat Transfer",
    sub: "Best for crisp graphic hits and flatter artwork.",
  },
  {
    id: "other",
    label: "Other Decoration",
    sub: "If you want something outside the core set.",
  },
] as const;

const catalogDecorationOptions = [
  {
    id: "screenPrint",
    label: "Screen Print",
    sub: "Default front print. Best for standard runs.",
  },
  {
    id: "embroidery",
    label: "Embroidery",
    sub: "Premium stitched option. Usually +$3/ea.",
  },
] as const;

const selectArrowSvg = encodeURIComponent(`
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path d="M3.5 5.25L7 8.75L10.5 5.25" stroke="#0B32A0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
`);

function addDays(date: Date, days: number) {
  const next = new Date(date);
  next.setDate(next.getDate() + days);
  return next;
}

function formatLongDate(date: Date) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(date);
}

function formatShortDate(date: Date) {
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const year = String(date.getFullYear()).slice(-2);
  return `${month}/${day}/${year}`;
}

function parseListParam(value: string | null) {
  return (value ?? "")
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

function sliderPositionStyle(index: number, total: number, thumbSizePx = 16) {
  if (total <= 1) {
    return {
      left: `${thumbSizePx / 2}px`,
      transform: "translateX(-50%)",
    };
  }

  const percent = (index / (total - 1)) * 100;

  return {
    left: `calc(${percent}% * (100% - ${thumbSizePx}px) / 100% + ${thumbSizePx / 2}px)`,
    transform: "translateX(-50%)",
  };
}

export function ProductStylePreview({
  initialMode = "ready",
  lockedMode,
  pageKicker = "",
  pageTitle = "Unified Product Page Preview",
  pageDescription = "One shared layout for ready-made hats, ready-made apparel, catalog products, shop items, and OG Crafted hats.",
  pageBackHref,
  pageBackLabel,
  modeLabelOverrides = {},
  previewLinks = [],
}: ProductStylePreviewProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const requestedBuilderMode = searchParams.get("builderMode");
  const requestedHatStyleSlug = searchParams.get("hatStyleSlug") ?? searchParams.get("hatStyle");
  const requestedInitialHatStyle = hatStyles.find((style) => style.slug === requestedHatStyleSlug);
  const [mode, setMode] = useState<ModeKey>(lockedMode ?? initialMode);
  const [color, setColor] = useState(colorOptions[0]);
  const [catalogColors, setCatalogColors] = useState<CatalogColorOption[]>([catalogColorOptions[0], catalogColorOptions[1]]);
  const [shopSize, setShopSize] = useState(shopSizeOptions[2]);
  const [apparelSizeBreakdown, setApparelSizeBreakdown] = useState<Record<ApparelSize, number>>(initialApparelSizeBreakdown);
  const [qty, setQty] = useState(250);
  const [qtyInput, setQtyInput] = useState("250");
  const [decoration, setDecoration] = useState<
    | "embroidery"
    | "embroideredPatch"
    | "wovenPatch"
    | "screenPrint"
    | "rubberPvcPatch"
    | "heatTransfer"
    | "waterBasedInk"
    | "dischargePrint"
    | "puffPrint"
    | "chainStitchEmbroidery"
    | "foilPrint"
    | "other"
  >("embroidery");
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const [selectedCatalogPackaging, setSelectedCatalogPackaging] = useState<string[]>([]);
  const [catalogFrontPrintColors, setCatalogFrontPrintColors] = useState(1);
  const [catalogBackPrintEnabled, setCatalogBackPrintEnabled] = useState(false);
  const [catalogBackPrintColors, setCatalogBackPrintColors] = useState(1);
  const [catalogSidePrintEnabled, setCatalogSidePrintEnabled] = useState(false);
  const [catalogSidePrintColors, setCatalogSidePrintColors] = useState(1);
  const [hatStyleSlug, setHatStyleSlug] = useState(requestedInitialHatStyle?.slug ?? hatStyles[0].slug);
  const [hatMaterial, setHatMaterial] = useState(hatMaterialOptions[0]);
  const [washedFabric, setWashedFabric] = useState(false);
  const [hatColorCallout, setHatColorCallout] = useState("");
  const [hatClosure, setHatClosure] = useState<(typeof hatClosureOptions)[number] | "No closure">(
    defaultHatClosureForStyle(requestedInitialHatStyle ?? hatStyles[0])
  );
  const [hatBrimCurve, setHatBrimCurve] = useState<(typeof hatBrimCurveOptions)[number]>(
    defaultHatBrimCurveForStyle(requestedInitialHatStyle ?? hatStyles[0])
  );
  const [backDecoration, setBackDecoration] = useState<"none" | "embroidery">("none");
  const [sideDecoration, setSideDecoration] = useState<"none" | "embroidery">("none");
  const [hatAdditionalDecorations, setHatAdditionalDecorations] = useState<string[]>([]);
  const [sampleType, setSampleType] = useState<"none" | "pp" | "proto">("none");
  const [sampleDelivery, setSampleDelivery] = useState<"photo" | "shipped">("photo");
  const [threadFinish, setThreadFinish] = useState<"matte" | "shiny">("matte");
  const [embroideryColor, setEmbroideryColor] = useState("");
  const [customDecoration, setCustomDecoration] = useState("");
  const [additionalCallouts, setAdditionalCallouts] = useState("");
  const [catalogRush, setCatalogRush] = useState(false);
  const customDecorationRef = useRef<HTMLTextAreaElement | null>(null);
  const [needsArtworkHelp, setNeedsArtworkHelp] = useState(false);
  const [logoFileName, setLogoFileName] = useState("");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [readyMadeStyleId, setReadyMadeStyleId] = useState(READY_MADE_HATS[0]?.id.toLowerCase() ?? "");
  const [readyMadeColorIndex, setReadyMadeColorIndex] = useState(
    READY_MADE_HATS[0] ? firstReadyMadeColorIndex(READY_MADE_HATS[0]) : 0
  );

  const activeMode = modes[mode];
  const isHatBuilderMode = mode === "build" || mode === "crafted";
  const summaryBreadcrumbLabel = mode === "crafted" ? "hats" : activeMode.label;
  const summaryEyebrow = mode === "crafted" ? "" : activeMode.eyebrow;
  const selectedReadyMadeStyle = READY_MADE_HATS.find((style) => style.id.toLowerCase() === readyMadeStyleId) ?? READY_MADE_HATS[0];
  const selectedReadyMadeColor = selectedReadyMadeStyle?.colors[readyMadeColorIndex] ?? selectedReadyMadeStyle?.colors[0];
  const activeDecorationOptions = mode === "ready"
    ? readyMadeDecorationOptions
    : mode === "catalog"
      ? catalogDecorationOptions
      : craftedDecorationOptions;
  const activeCatalogAddOnOptions = mode === "catalog" ? catalogPrintAddOnOptions : additionalLocations;
  const showCatalogEmbroideryFields = mode !== "catalog" || decoration === "embroidery";
  const summaryTitle = mode === "crafted"
    ? "full custom hats"
    : mode === "ready" && selectedReadyMadeStyle
      ? selectedReadyMadeStyle.name
      : activeMode.title;
  const showBuilderSecondaryCta = mode === "ready" || mode === "build" || mode === "crafted";
  const selectedHatStyle = hatStyles.find((style) => style.slug === hatStyleSlug) ?? hatStyles[0];
  const isBucketHatStyle = selectedHatStyle.title === "Bucket Hat";
  const defaultHatBrimCurve = defaultHatBrimCurveForStyle(selectedHatStyle);
  const showDecorationIncludedPill = mode === "ready" || mode === "crafted";
  const showLiveCalculator = mode !== "shop";
  const hasPageHeaderContent = Boolean(pageKicker || pageTitle || pageDescription);
  const activeMedia = useMemo<PreviewMediaItem[]>(() => {
    if (mode === "ready" && selectedReadyMadeStyle && selectedReadyMadeColor) {
      const currentGallery = readyMadeGalleryPhotos(selectedReadyMadeColor);
      const fallbackColor = selectedReadyMadeStyle.colors.find((color) => readyMadeGalleryPhotos(color).length > 0) ?? selectedReadyMadeColor;
      const gallery = currentGallery.length > 0 ? currentGallery : readyMadeGalleryPhotos(fallbackColor);
      const labels = ["Front view", "Side view", "Back view"];

      return gallery.map((src, index) => ({
        src,
        alt: `${selectedReadyMadeStyle.name} ${selectedReadyMadeColor.name} ${labels[index]?.toLowerCase() ?? "view"}`,
        label: labels[index] ?? `View ${index + 1}`,
        imageClassName: "object-contain transition duration-500 group-hover:scale-[1.02]",
      }));
    }

    if (mode === "catalog") return catalogMedia;

    if (mode !== "crafted") return defaultMedia;

    const styleGallery: HatStyleImage[] = selectedHatStyle.gallery?.length
      ? selectedHatStyle.gallery
      : [{ src: selectedHatStyle.image, label: "Front view", imagePosition: selectedHatStyle.imagePosition }];

    return styleGallery.map((image) => ({
      src: image.src,
      alt: `${selectedHatStyle.model} ${selectedHatStyle.title} ${image.label.toLowerCase()}`,
      label: image.label,
      imagePosition: image.imagePosition ?? selectedHatStyle.imagePosition,
      imageClassName: "object-cover transition duration-500 group-hover:scale-[1.02]",
    }));
  }, [mode, selectedHatStyle, selectedReadyMadeColor, selectedReadyMadeStyle]);
  const useSingleColumnMedia = mode === "crafted" || mode === "ready" || mode === "catalog";
  const maxQty = isHatBuilderMode ? 5000 : mode === "catalog" ? 2000 : 1000;
  const activeQtyMarks = isHatBuilderMode
    ? buildQtyMarks
    : mode === "catalog"
      ? catalogQtyMarks
      : standardQtyMarks;
  const qtyTierIndex = activeQtyMarks.reduce((bestIndex, mark, index) => (
    qty >= mark.value ? index : bestIndex
  ), 0);
  const qtyTooltipPosition = sliderPositionStyle(qtyTierIndex, activeQtyMarks.length);
  const isCustomQuote = isHatBuilderMode && qty >= 5000;
  const apparelSizeTotal = Object.values(apparelSizeBreakdown).reduce((sum, value) => sum + value, 0);
  const catalogPrintUpgrade = (selectedLocations[0] ?? null) as CatalogSpecialtyPrintUpgrade | null;
  const catalogPricing = useMemo(
    () => mode === "catalog"
      ? calculateCatalogBuilderPricing({
        blank: DEFAULT_CATALOG_PRICING_PRODUCT.blank,
        blankMarkup: DEFAULT_CATALOG_PRICING_PRODUCT.blankMarkup,
        printCat: DEFAULT_CATALOG_PRICING_PRODUCT.printCat,
        qty,
        frontDecoration: decoration === "embroidery" ? "embroidery" : "screenPrint",
        frontColors: catalogFrontPrintColors,
        backPrintColors: catalogBackPrintEnabled ? catalogBackPrintColors : 0,
        sidePrintColors: catalogSidePrintEnabled ? catalogSidePrintColors : 0,
        printUpgrade: catalogPrintUpgrade,
        packagingUpgrades: selectedCatalogPackaging as CatalogPackagingUpgrade[],
        rush: catalogRush,
        customerSuppliedGoods: false,
      })
      : null,
    [
      catalogBackPrintColors,
      catalogBackPrintEnabled,
      catalogFrontPrintColors,
      catalogPrintUpgrade,
      catalogRush,
      catalogSidePrintColors,
      catalogSidePrintEnabled,
      decoration,
      mode,
      qty,
      selectedCatalogPackaging,
    ]
  );
  const catalogPrintUpgradeTotal = useMemo(
    () => mode === "catalog"
      ? (catalogPricing?.specialtyUpgradeUnitPrice ?? 0)
      : activeCatalogAddOnOptions
        .filter((location) => selectedLocations.includes(location.label))
        .reduce((total, location) => total + location.price, 0),
    [activeCatalogAddOnOptions, catalogPricing?.specialtyUpgradeUnitPrice, mode, selectedLocations]
  );
  const catalogPackagingTotal = useMemo(
    () => mode === "catalog"
      ? (catalogPricing?.packagingUnitPrice ?? 0)
      : catalogPackagingOptions
        .filter((option) => selectedCatalogPackaging.includes(option.label))
        .reduce((total, option) => total + option.price, 0),
    [catalogPricing?.packagingUnitPrice, mode, selectedCatalogPackaging]
  );
  const readyMadeExtraLocationTotal = (backDecoration === "embroidery" ? 4.5 : 0) + (sideDecoration === "embroidery" ? 4.5 : 0);
  const hatExtraBrandingTotal = (backDecoration === "embroidery" ? 1 : 0) + (sideDecoration === "embroidery" ? 1 : 0);
  const catalogDecorationPriceMap: Partial<Record<typeof decoration, number>> = {
    embroidery: 3,
  };
  const catalogDecorationExtraPrice = mode === "catalog"
    ? (catalogPricing?.frontDecorationUnitPrice ?? catalogDecorationPriceMap[decoration] ?? 0)
    : 0;
  const catalogRushPrice = mode === "catalog" ? (catalogPricing?.rushUnitPrice ?? 0) : 0;
  const catalogFrontPrintColorPrice = mode === "catalog" && decoration === "screenPrint"
    ? (catalogPricing?.frontExtraColorUnitPrice ?? 0)
    : 0;
  const catalogBackPrintPrice = mode === "catalog" && catalogBackPrintEnabled
    ? (catalogPricing?.backPrintUnitPrice ?? 0)
    : 0;
  const catalogSidePrintPrice = mode === "catalog" && catalogSidePrintEnabled
    ? (catalogPricing?.sidePrintUnitPrice ?? 0)
    : 0;
  const catalogPlacementTotal = catalogFrontPrintColorPrice + catalogBackPrintPrice + catalogSidePrintPrice;
  const locationTotal = isHatBuilderMode
    ? hatExtraBrandingTotal
    : mode === "ready"
      ? readyMadeExtraLocationTotal
      : mode === "catalog"
        ? catalogPlacementTotal + catalogPrintUpgradeTotal
        : 0;
  const washedFabricPrice = isHatBuilderMode && washedFabric ? 0.5 : 0;
  const hatAdditionalDecorationPrice = isHatBuilderMode ? hatAdditionalDecorations.length : 0;
  const hatClosurePrice = isHatBuilderMode ? (hatClosurePrices[hatClosure] ?? 0) : 0;
  const sampleBaseFee = sampleType === "proto" ? 100 : 0;
  const sampleShippingFee = sampleType !== "none" && sampleDelivery === "shipped" ? 50 : 0;
  const sampleFlatFeeTotal = sampleBaseFee + sampleShippingFee;
  const sampleProductionDays = sampleType === "none" ? 0 : 14;
  const sampleShippingDays = sampleType !== "none" && sampleDelivery === "shipped" ? 7 : 0;
  const showBuilderTimeline = isHatBuilderMode || mode === "ready" || mode === "catalog";
  const baseUnitPrice = mode === "catalog"
    ? (catalogPricing?.baseUnitPrice ?? activeMode.unitPrice)
    : baseUnitPriceForQty(activeMode.unitPrice);
  const addOnUnitPrice = mode === "catalog"
    ? (catalogPricing?.addOnUnitPrice ?? 0)
    : mode === "shop"
      ? 0
      : locationTotal + catalogPackagingTotal + catalogRushPrice + washedFabricPrice + hatAdditionalDecorationPrice + hatClosurePrice + catalogDecorationExtraPrice;
  const unitPrice = mode === "catalog"
    ? (catalogPricing?.unitPrice ?? (baseUnitPrice + addOnUnitPrice))
    : baseUnitPrice + (mode === "shop" ? 0 : addOnUnitPrice);
  const total = mode === "shop" ? unitPrice : (unitPrice * qty) + sampleFlatFeeTotal;
  const unitName = mode === "catalog" ? "tee" : mode === "shop" ? "item" : "hat";
  const closureSummaryLabel = isBucketHatStyle
    ? "None"
    : hatClosurePrice > 0
      ? `${hatClosure} (+$${hatClosurePrice.toFixed(2)}/${unitName})`
      : hatClosure;
  const sampleTypeLabel = sampleType === "none" ? "No sample" : sampleType === "pp" ? "PP sample" : "Proto sample";
  const sampleReviewLabel = sampleType === "none" ? "Not needed" : sampleDelivery === "photo" ? "Photo review" : "Shipped sample";
  const sampleSummaryLabel = sampleType === "none" ? "No sample" : `${sampleTypeLabel} · ${sampleReviewLabel}`;
  const sampleFeeLabel = sampleType === "none"
    ? "None"
    : sampleFlatFeeTotal > 0
      ? `+$${sampleFlatFeeTotal.toFixed(0)} one-time`
      : "Included";
  const readyMadeUsesPatchTimeline = mode === "ready" && decoration === "embroideredPatch";
  const timelineItems = [
    { label: "Tech pack", value: "2 days" },
    ...(sampleType !== "none" ? [{ label: "Sample production", value: "2 weeks" }] : []),
    ...(sampleType !== "none" && sampleDelivery === "shipped" ? [{ label: "Sample shipping", value: "1 week" }] : []),
    {
      label: "Production",
      value: mode === "ready"
        ? (readyMadeUsesPatchTimeline ? "3 to 4 weeks + sewing" : "1 to 2 weeks")
        : mode === "catalog"
          ? (catalogRush ? "10 business days" : "2 to 3 weeks")
          : "5 weeks",
    },
    {
      label: "Shipping",
      value: mode === "ready"
        ? "3 to 5 days"
        : mode === "catalog"
          ? "3 to 5 days"
          : "1 to 2 weeks",
    },
  ];
  const orderProcessSteps = [
    { title: "Build your order", detail: "You are here now." },
    { title: "We build your tech pack and get your approval", detail: "We map out every detail and get your sign-off before anything moves forward." },
    ...(sampleType !== "none"
      ? [{
          title: sampleType === "proto" ? "Proto sample review" : "PP sample review",
          detail: sampleDelivery === "shipped"
            ? "We make your sample and ship it for review before production starts."
            : "We make your sample and send photos for review before production starts.",
        }]
      : []),
    {
      title: "We produce and deliver",
      detail: mode === "catalog"
        ? "Production starts after your approval, then your printed garments arrive."
        : "Factory production starts after your approval, then your custom hats arrive.",
    },
  ];
  const orderPriceLabel = isCustomQuote
    ? "Custom quote"
    : mode === "shop"
      ? `$${unitPrice.toFixed(0)}`
      : `$${total.toLocaleString(undefined, { maximumFractionDigits: 0 })}`;
  const orderDetailLabel = mode === "shop"
    ? `${activeMode.timeline} · ${activeMode.unitLabel}`
    : isCustomQuote
      ? "5,000 units · custom quote confirmed with the OG team"
      : `${qty.toLocaleString()} units · $${unitPrice.toFixed(2)}/${unitName} · ${timelineLabel().replace(/\s*weeks$/, " week")} turnaround`;
  const basePriceLabel = isCustomQuote ? "Custom quote" : `$${baseUnitPrice.toFixed(2)}/${unitName}`;
  const selectedOptionsLabel = addOnUnitPrice > 0 ? `+$${addOnUnitPrice.toFixed(2)}/${unitName}` : "Included";
  const unitPriceLabel = isCustomQuote ? "Custom quote" : `$${unitPrice.toFixed(2)}/${unitName}`;
  const totalPriceLabel = isCustomQuote ? "Custom quote" : `$${total.toLocaleString(undefined, { maximumFractionDigits: 0 })}`;
  const turnAroundLabel = timelineLabel();
  const lightboxItem = lightboxIndex === null ? null : activeMedia[lightboxIndex];
  const availableModes = useMemo(
    () =>
      lockedMode
        ? [lockedMode]
        : (Object.keys(modes) as ModeKey[]).filter((key) => key !== "build"),
    [lockedMode],
  );
  const requestedQty = searchParams.get("qty");
  const requestedDecoration = searchParams.get("decoration");
  const requestedHatMaterial = searchParams.get("hatMaterial");
  const requestedWashedFabric = searchParams.get("washedFabric");
  const requestedFabricColor = searchParams.get("fabricColor");
  const requestedHatClosure = searchParams.get("hatClosure");
  const requestedHatBrimCurve = searchParams.get("hatBrimCurve") ?? searchParams.get("brimCurve");
  const requestedBackDecoration = searchParams.get("backDecoration");
  const requestedSideDecoration = searchParams.get("sideDecoration");
  const requestedHatAdditionalDecorations = searchParams.get("hatAdditionalDecorations") ?? searchParams.get("additionalDecorations");
  const requestedSampleType = searchParams.get("sampleType");
  const requestedSampleDelivery = searchParams.get("sampleDelivery");
  const requestedThreadFinish = searchParams.get("threadFinish");
  const requestedEmbroideryColor = searchParams.get("embroideryColor");
  const requestedCustomDecoration = searchParams.get("customDecoration")
    ?? (searchParams.get("decoration") === "other" ? searchParams.get("additionalCallouts") : null);
  const requestedAdditionalCallouts = searchParams.get("additionalCallouts");
  const requestedPackagingUpgrades = searchParams.get("packagingUpgrades");
  const requestedRush = searchParams.get("rush");
  const requestedNeedsArtworkHelp = searchParams.get("needsArtworkHelp");
  const readyMadeLocationSummary = [
    backDecoration === "embroidery" ? "Back embroidery" : "",
    sideDecoration === "embroidery" ? "Side embroidery" : "",
  ].filter(Boolean).join(", ");
  const catalogFrontPlacementSummary = decoration === "screenPrint"
    ? `Screen print · ${catalogFrontPrintColors} color${catalogFrontPrintColors === 1 ? "" : "s"}`
    : "Embroidery";
  const catalogBackPlacementSummary = catalogBackPrintEnabled
    ? `${catalogBackPrintColors} color${catalogBackPrintColors === 1 ? "" : "s"}`
    : "None";
  const catalogSidePlacementSummary = catalogSidePrintEnabled
    ? `${catalogSidePrintColors} color${catalogSidePrintColors === 1 ? "" : "s"}`
    : "None";
  const catalogPrintAddOnSummary = selectedLocations.length > 0 ? selectedLocations.join(", ") : "None";
  const catalogPackagingSummary = selectedCatalogPackaging.length > 0 ? selectedCatalogPackaging.join(", ") : "None";
  const frontDecorationSummaryLabel = decoration === "other"
    ? (customDecoration.trim() || "Other decoration")
    : (activeDecorationOptions.find((option) => option.id === decoration)?.label ?? decoration);
  const apparelSizeBreakdownSummary = apparelSizeOptions
    .map((size) => ({ size, qty: apparelSizeBreakdown[size] }))
    .filter((item) => item.qty > 0)
    .map((item) => `${item.size} ${item.qty}`)
    .join(" · ");
  const selectedColorLabel = mode === "ready"
    ? (selectedReadyMadeColor?.name ?? "Not specified yet")
    : mode === "catalog"
      ? (catalogColors.length > 0 ? catalogColors.map((option) => option.name).join(", ") : "Not specified yet")
      : isHatBuilderMode
        ? (hatColorCallout.trim() || "Not specified yet")
        : color.name;
  const estimatedDeliveryStart = addDays(
    new Date(),
    (mode === "catalog" ? (catalogRush ? 14 : 19) : 44) + sampleProductionDays + sampleShippingDays
  );
  const estimatedDeliveryEnd = addDays(
    new Date(),
    (mode === "catalog" ? (catalogRush ? 19 : 28) : 51) + sampleProductionDays + sampleShippingDays
  );
  const estimatedDeliveryLabel = `${formatLongDate(estimatedDeliveryStart)} - ${formatLongDate(estimatedDeliveryEnd)}`;
  const estimatedDeliveryShortLabel = `${formatShortDate(estimatedDeliveryStart)} - ${formatShortDate(estimatedDeliveryEnd)}`;
  const projectSummary = [
    `Product: ${activeMode.title}`,
    `Program: ${activeMode.label}`,
    mode === "ready" && selectedReadyMadeStyle ? `Hat style: ${selectedReadyMadeStyle.id} ${selectedReadyMadeStyle.name}` : "",
    isHatBuilderMode ? `Hat style: ${selectedHatStyle.model} ${selectedHatStyle.title}` : "",
    `Quantity: ${qty.toLocaleString()}`,
    mode === "catalog" ? `Size breakdown: ${apparelSizeBreakdownSummary || "Not assigned yet"}` : "",
    `Tier: ${quantityTierLabel()}`,
    `Color: ${selectedColorLabel}`,
    mode === "catalog" ? `Front of shirt: ${catalogFrontPlacementSummary}` : "",
    mode === "catalog" ? `Back of shirt: ${catalogBackPlacementSummary}` : "",
    mode === "catalog" ? `Side print: ${catalogSidePlacementSummary}` : "",
    mode === "catalog" ? `Print upgrades: ${catalogPrintAddOnSummary}` : "",
    mode === "catalog" ? `Packaging upgrades: ${catalogPackagingSummary}` : "",
    mode === "catalog" ? `Rush delivery: ${catalogRush ? "Yes" : "No"}` : "",
    mode === "ready" && selectedReadyMadeStyle ? `Blank details: ${selectedReadyMadeStyle.crown} · ${selectedReadyMadeStyle.closure}` : "",
    isHatBuilderMode ? `Fabric: ${[hatMaterial, washedFabric ? "Washed fabric" : ""].filter(Boolean).join(" · ")}` : "",
    isHatBuilderMode ? `Closure: ${closureSummaryLabel}` : "",
    isHatBuilderMode && !isBucketHatStyle ? `Brim curve: ${hatBrimCurve}` : "",
    isHatBuilderMode ? `Sample: ${sampleSummaryLabel}` : "",
    `Front decoration: ${frontDecorationSummaryLabel}`,
    (isHatBuilderMode || mode === "ready") ? `Back decoration: ${backDecoration === "embroidery" ? "Embroidery" : "None"}` : "",
    (isHatBuilderMode || mode === "ready") ? `Side decoration: ${sideDecoration === "embroidery" ? "Embroidery" : "None"}` : "",
    isHatBuilderMode && hatAdditionalDecorations.length > 0 ? `Additional decorations: ${hatAdditionalDecorations.join(", ")}` : "",
    (mode !== "catalog" || showCatalogEmbroideryFields) ? `Embroidery thread finish: ${threadFinish}` : "",
    (mode !== "catalog" || showCatalogEmbroideryFields) && embroideryColor ? `Embroidery color: ${embroideryColor}` : "",
    needsArtworkHelp ? "Artwork help: Yes" : "",
    customDecoration ? `Custom decoration: ${customDecoration}` : "",
    additionalCallouts ? `${mode === "catalog" ? "Order notes" : "Additional notes"}: ${additionalCallouts}` : "",
    isHatBuilderMode && sampleType !== "none" ? `Sample fees: ${sampleFeeLabel}` : "",
    `Estimated unit price: ${isCustomQuote ? "Custom quote" : `$${unitPrice.toFixed(2)}`}`,
    `Estimated total: ${isCustomQuote ? "Custom quote" : `$${total.toLocaleString(undefined, { maximumFractionDigits: 0 })}`}`,
    logoFileName ? `Logo file: ${logoFileName}` : "",
  ]
    .filter(Boolean)
    .join("\n");
  const questionsHref = `/contact?${new URLSearchParams({
    intent: isHatBuilderMode ? "submit-build" : "product-question",
    source: isHatBuilderMode ? "og-crafted-hat-builder" : mode === "ready" ? "ready-made-hat-builder" : "",
    product: activeMode.title,
    mode: activeMode.label,
    builderMode: isHatBuilderMode ? mode : "",
    readyMadeStyleId: mode === "ready" && selectedReadyMadeStyle ? selectedReadyMadeStyle.id : "",
    readyMadeStyle: mode === "ready" && selectedReadyMadeStyle ? selectedReadyMadeStyle.name : "",
    hatStyleSlug: isHatBuilderMode ? selectedHatStyle.slug : "",
    hatStyle: isHatBuilderMode ? `${selectedHatStyle.model} ${selectedHatStyle.title}` : "",
    color: selectedColorLabel,
    size: mode === "shop" ? shopSize : "",
    sizeBreakdown: mode === "catalog" ? apparelSizeOptions.map((size) => `${size}:${apparelSizeBreakdown[size]}`).join(", ") : "",
    colors: mode === "catalog" ? catalogColors.map((option) => option.name).join(", ") : "",
    frontPrintColors: mode === "catalog" && decoration === "screenPrint" ? String(catalogFrontPrintColors) : "",
    backPrint: mode === "catalog" ? (catalogBackPrintEnabled ? "Yes" : "No") : "",
    backPrintColors: mode === "catalog" && catalogBackPrintEnabled ? String(catalogBackPrintColors) : "",
    sidePrint: mode === "catalog" ? (catalogSidePrintEnabled ? "Yes" : "No") : "",
    sidePrintColors: mode === "catalog" && catalogSidePrintEnabled ? String(catalogSidePrintColors) : "",
    printUpgrades: mode === "catalog" ? selectedLocations.join(", ") : "",
    packagingUpgrades: mode === "catalog" ? selectedCatalogPackaging.join(", ") : "",
    qty: String(qty),
    tier: quantityTierLabel(),
    decoration,
    fabricColor: isHatBuilderMode ? hatColorCallout : "",
    hatMaterial: isHatBuilderMode ? hatMaterial : "",
    washedFabric: isHatBuilderMode && washedFabric ? "true" : "",
    fabric: isHatBuilderMode ? [hatMaterial, washedFabric ? "Washed fabric" : ""].filter(Boolean).join(" · ") : "",
    hatClosure: isHatBuilderMode ? hatClosure : "",
    hatBrimCurve: isHatBuilderMode && !isBucketHatStyle ? hatBrimCurve : "",
    brimCurve: isHatBuilderMode && !isBucketHatStyle ? hatBrimCurve : "",
    closure: isHatBuilderMode ? closureSummaryLabel : "",
    sampleType: isHatBuilderMode ? sampleType : "",
    sampleDelivery: isHatBuilderMode ? sampleDelivery : "",
    sample: isHatBuilderMode ? sampleSummaryLabel : "",
    sampleFees: isHatBuilderMode ? sampleFeeLabel : "",
    backDecoration: (isHatBuilderMode || mode === "ready") ? backDecoration : "",
    sideDecoration: (isHatBuilderMode || mode === "ready") ? sideDecoration : "",
    hatAdditionalDecorations: isHatBuilderMode ? hatAdditionalDecorations.join(", ") : "",
    additionalDecorations: isHatBuilderMode ? hatAdditionalDecorations.join(", ") : "",
    additionalLocations: isHatBuilderMode ? "" : mode === "ready" ? readyMadeLocationSummary : selectedLocations.join(", "),
    rush: mode === "catalog" ? (catalogRush ? "Yes" : "No") : "",
    threadFinish,
    embroideryColor,
    customDecoration,
    additionalCallouts,
    needsArtworkHelp: needsArtworkHelp ? "Yes" : "",
    timeline: timelineLabel(),
    estimatedDeliveryDate: isHatBuilderMode ? estimatedDeliveryLabel : "",
    estimatedUnitPrice: isCustomQuote ? "Custom quote" : `$${unitPrice.toFixed(2)}`,
    estimatedTotal: isCustomQuote ? "Custom quote" : `$${total.toLocaleString(undefined, { maximumFractionDigits: 0 })}`,
    logoFile: logoFileName,
    projectSummary,
  }).toString()}`;
  const primaryCtaLabel = showBuilderSecondaryCta && !isCustomQuote
    ? "Submit Hat for Review"
    : activeMode.cta;

  function toggleLocation(label: string) {
    setSelectedLocations((current) => {
      if (mode === "catalog") {
        return current[0] === label ? [] : [label];
      }

      return current.includes(label)
        ? current.filter((item) => item !== label)
        : [...current, label];
    });
  }

  function toggleCatalogPackaging(label: string) {
    setSelectedCatalogPackaging((current) =>
      current.includes(label)
        ? current.filter((item) => item !== label)
        : [...current, label]
    );
  }

  function adjustCatalogPrintColors(
    setter: Dispatch<SetStateAction<number>>,
    delta: number,
  ) {
    setter((current) => Math.min(8, Math.max(1, current + delta)));
  }

  function setCatalogPrintColorCount(
    setter: Dispatch<SetStateAction<number>>,
    value: string,
  ) {
    const parsedValue = Number.parseInt(value, 10);
    if (Number.isNaN(parsedValue)) {
      setter(1);
      return;
    }
    setter(Math.min(8, Math.max(1, parsedValue)));
  }

  function toggleHatAdditionalDecoration(label: string) {
    setHatAdditionalDecorations((current) =>
      current.includes(label)
        ? current.filter((item) => item !== label)
        : [...current, label]
    );
  }

  function toggleCatalogColor(option: CatalogColorOption) {
    setCatalogColors((current) => {
      const exists = current.some((item) => item.name === option.name);
      if (exists) {
        return current.length === 1 ? current : current.filter((item) => item.name !== option.name);
      }
      return [...current, option];
    });
  }

  function updateApparelSize(size: ApparelSize, value: string) {
    const nextValue = Math.max(0, Number(value) || 0);
    setApparelSizeBreakdown((current) => {
      const nextBreakdown = {
        ...current,
        [size]: nextValue,
      };
      const nextTotal = Object.values(nextBreakdown).reduce((sum, amount) => sum + amount, 0);
      setQty(nextTotal);
      setQtyInput(String(nextTotal));
      return nextBreakdown;
    });
  }

  useEffect(() => {
    if (qty > maxQty) {
      setQty(maxQty);
      setQtyInput(String(maxQty));
    }
  }, [maxQty, qty]);

  useEffect(() => {
    if (!isHatBuilderMode && mode !== "ready") return;

    if (isBucketHatStyle) {
      setHatClosure("No closure");
      return;
    }

    if (hatClosure === "No closure") {
      const defaultClosure = selectedHatStyle.closure === "Fitted"
        ? "Snapback"
        : selectedHatStyle.closure === "Clip closure"
          ? "Clip closure"
          : selectedHatStyle.closure === "Strapback"
            ? "Strapback + clasp"
            : selectedHatStyle.closure === "Leather / metal clasp"
              ? "Leather clasp"
              : "Snapback";

      setHatClosure(defaultClosure);
    }
  }, [hatClosure, isBucketHatStyle, isHatBuilderMode, mode, selectedHatStyle.closure]);

  useEffect(() => {
    if (lockedMode && mode !== lockedMode) {
      setMode(lockedMode);
    }
  }, [lockedMode, mode]);

  useEffect(() => {
    if (!requestedBuilderMode) return;

    const nextMode = requestedBuilderMode as ModeKey;
    if (availableModes.includes(nextMode) && nextMode !== mode) {
      setMode(nextMode);
    }
  }, [availableModes, mode, requestedBuilderMode]);

  useEffect(() => {
    if (!isHatBuilderMode || !requestedHatStyleSlug) return;

    const requestedStyle = hatStyles.find((style) => style.slug === requestedHatStyleSlug);
    if (requestedStyle && requestedStyle.slug !== hatStyleSlug) {
      setHatStyleSlug(requestedStyle.slug);
      if (!requestedHatClosure) {
        setHatClosure(defaultHatClosureForStyle(requestedStyle));
      }
      if (!requestedHatBrimCurve) {
        setHatBrimCurve(defaultHatBrimCurveForStyle(requestedStyle));
      }
    }
  }, [hatStyleSlug, isHatBuilderMode, requestedHatBrimCurve, requestedHatClosure, requestedHatStyleSlug]);

  useEffect(() => {
    if (!isHatBuilderMode || !requestedQty) return;

    const nextQty = Number(requestedQty);
    if (!Number.isFinite(nextQty) || nextQty < 100) return;

    const clampedQty = Math.min(nextQty, maxQty);
    if (clampedQty !== qty) {
      setQty(clampedQty);
      setQtyInput(String(clampedQty));
    }
  }, [isHatBuilderMode, maxQty, qty, requestedQty]);

  useEffect(() => {
    const validDecorationIds = activeDecorationOptions.map((option) => option.id) as typeof decoration[];
    if (!validDecorationIds.includes(decoration)) {
      setDecoration(mode === "catalog" ? "screenPrint" : "embroidery");
    }
  }, [activeDecorationOptions, decoration, mode]);

  useEffect(() => {
    if (mode === "catalog" && requestedDecoration === null) {
      setDecoration((current) => (current === "embroidery" ? "screenPrint" : current));
    }
  }, [mode, requestedDecoration]);

  useEffect(() => {
    if (mode !== "catalog") return;

    const validLabels = new Set<string>(catalogPrintAddOnOptions.map((option) => option.label));
    setSelectedLocations((current) => current.filter((label) => validLabels.has(label)).slice(0, 1));
  }, [mode]);

  useEffect(() => {
    if (mode !== "catalog") return;

    const validLabels = new Set<string>(catalogPackagingOptions.map((option) => option.label));
    setSelectedCatalogPackaging((current) => current.filter((label) => validLabels.has(label)));
  }, [mode]);

  useEffect(() => {
    if (mode !== "catalog") return;

    if (requestedPackagingUpgrades !== null) {
      const validLabels = new Set<string>(catalogPackagingOptions.map((option) => option.label));
      const nextPackaging = parseListParam(requestedPackagingUpgrades).filter((label) => validLabels.has(label));
      if (nextPackaging.join(", ") !== selectedCatalogPackaging.join(", ")) {
        setSelectedCatalogPackaging(nextPackaging);
      }
    }

    if (requestedRush !== null) {
      const nextRush = requestedRush.toLowerCase() === "yes" || requestedRush.toLowerCase() === "true";
      if (nextRush !== catalogRush) {
        setCatalogRush(nextRush);
      }
    }
  }, [catalogRush, mode, requestedPackagingUpgrades, requestedRush, selectedCatalogPackaging]);

  useEffect(() => {
    if (!isHatBuilderMode) return;

    if (
      requestedDecoration
      && (craftedDecorationOptions.some((option) => option.id === requestedDecoration) || requestedDecoration === "other")
      && requestedDecoration !== decoration
    ) {
      setDecoration(requestedDecoration as typeof decoration);
    }

    if (requestedHatMaterial && hatMaterialOptions.includes(requestedHatMaterial) && requestedHatMaterial !== hatMaterial) {
      setHatMaterial(requestedHatMaterial);
    }

    if (requestedWashedFabric !== null) {
      const nextWashedFabric = requestedWashedFabric.toLowerCase() === "true";
      if (nextWashedFabric !== washedFabric) {
        setWashedFabric(nextWashedFabric);
      }
    }

    if (requestedFabricColor !== null && requestedFabricColor !== hatColorCallout) {
      setHatColorCallout(requestedFabricColor);
    }

    if (
      requestedHatClosure
      && (hatClosureOptions.includes(requestedHatClosure) || requestedHatClosure === "No closure")
      && requestedHatClosure !== hatClosure
    ) {
      setHatClosure(requestedHatClosure);
    }

    if (
      requestedHatBrimCurve
      && hatBrimCurveOptions.includes(requestedHatBrimCurve as (typeof hatBrimCurveOptions)[number])
      && requestedHatBrimCurve !== hatBrimCurve
    ) {
      setHatBrimCurve(requestedHatBrimCurve as (typeof hatBrimCurveOptions)[number]);
    }

    if (
      requestedBackDecoration
      && (requestedBackDecoration === "none" || requestedBackDecoration === "embroidery")
      && requestedBackDecoration !== backDecoration
    ) {
      setBackDecoration(requestedBackDecoration);
    }

    if (
      requestedSideDecoration
      && (requestedSideDecoration === "none" || requestedSideDecoration === "embroidery")
      && requestedSideDecoration !== sideDecoration
    ) {
      setSideDecoration(requestedSideDecoration);
    }

    if (requestedHatAdditionalDecorations !== null) {
      const nextAdditionalDecorations = parseListParam(requestedHatAdditionalDecorations)
        .filter((item): item is (typeof hatAdditionalDecorationOptions)[number] =>
          hatAdditionalDecorationOptions.includes(item as (typeof hatAdditionalDecorationOptions)[number]));
      const currentAdditionalDecorations = hatAdditionalDecorations.join(", ");

      if (nextAdditionalDecorations.join(", ") !== currentAdditionalDecorations) {
        setHatAdditionalDecorations(nextAdditionalDecorations);
      }
    }

    if (
      requestedSampleType
      && hatSampleOptions.some((option) => option.id === requestedSampleType)
      && requestedSampleType !== sampleType
    ) {
      setSampleType(requestedSampleType as typeof sampleType);
    }

    if (
      requestedSampleDelivery
      && hatSampleDeliveryOptions.some((option) => option.id === requestedSampleDelivery)
      && requestedSampleDelivery !== sampleDelivery
    ) {
      setSampleDelivery(requestedSampleDelivery as typeof sampleDelivery);
    }

    if (
      requestedThreadFinish
      && (requestedThreadFinish === "matte" || requestedThreadFinish === "shiny")
      && requestedThreadFinish !== threadFinish
    ) {
      setThreadFinish(requestedThreadFinish);
    }

    if (requestedEmbroideryColor !== null && requestedEmbroideryColor !== embroideryColor) {
      setEmbroideryColor(requestedEmbroideryColor);
    }

    if (requestedCustomDecoration !== null && requestedCustomDecoration !== customDecoration) {
      setCustomDecoration(requestedCustomDecoration);
    }

    if (requestedAdditionalCallouts !== null && requestedAdditionalCallouts !== additionalCallouts) {
      setAdditionalCallouts(requestedAdditionalCallouts);
    }

    if (requestedNeedsArtworkHelp !== null) {
      const nextNeedsArtworkHelp = requestedNeedsArtworkHelp.toLowerCase() === "yes";
      if (nextNeedsArtworkHelp !== needsArtworkHelp) {
        setNeedsArtworkHelp(nextNeedsArtworkHelp);
      }
    }
  }, [
    additionalCallouts,
    backDecoration,
    customDecoration,
    decoration,
    embroideryColor,
    hatClosure,
    hatColorCallout,
    hatMaterial,
    hatAdditionalDecorations,
    hatBrimCurve,
    isHatBuilderMode,
    mode,
    needsArtworkHelp,
    requestedAdditionalCallouts,
    requestedCustomDecoration,
    requestedBackDecoration,
    requestedDecoration,
    requestedEmbroideryColor,
    requestedFabricColor,
    requestedHatAdditionalDecorations,
    requestedHatBrimCurve,
    requestedHatClosure,
    requestedHatMaterial,
    requestedNeedsArtworkHelp,
    requestedSampleDelivery,
    requestedSampleType,
    requestedSideDecoration,
    requestedThreadFinish,
    requestedWashedFabric,
    sampleDelivery,
    sampleType,
    sideDecoration,
    threadFinish,
    washedFabric,
  ]);

  useEffect(() => {
    if (decoration === "other") {
      customDecorationRef.current?.focus();
    }
  }, [decoration]);

  useEffect(() => {
    if (!selectedReadyMadeStyle) return;
    const nextIndex = firstReadyMadeColorIndex(selectedReadyMadeStyle);
    setReadyMadeColorIndex(nextIndex);
    setLightboxIndex(null);
  }, [selectedReadyMadeStyle]);

  function handleQtyInput(value: string) {
    setQtyInput(value);
    const nextQty = Number(value);
    if (Number.isFinite(nextQty) && nextQty >= 100 && nextQty <= maxQty) {
      setQty(nextQty);
      if (mode === "catalog") {
        setApparelSizeBreakdown((current) => rebalanceApparelSizeBreakdown(nextQty, current));
      }
    }
  }

  function handleQtySlider(value: string) {
    const nextQty = activeQtyMarks[Number(value)]?.value ?? activeQtyMarks[0].value;
    setQty(nextQty);
    setQtyInput(String(nextQty));
    if (mode === "catalog") {
      setApparelSizeBreakdown((current) => rebalanceApparelSizeBreakdown(nextQty, current));
    }
  }

  function handleHatStyleChange(nextHatStyleSlug: string) {
    const nextStyle = hatStyles.find((style) => style.slug === nextHatStyleSlug) ?? hatStyles[0];
    const nextDefaultClosure = defaultHatClosureForStyle(nextStyle);
    const nextDefaultBrimCurve = defaultHatBrimCurveForStyle(nextStyle);

    setHatStyleSlug(nextHatStyleSlug);
    setHatClosure(nextDefaultClosure);
    setHatBrimCurve(nextDefaultBrimCurve);
    setLightboxIndex(null);

    const nextParams = new URLSearchParams(searchParams.toString());
    nextParams.set("hatStyle", nextHatStyleSlug);
    nextParams.set("hatClosure", nextDefaultClosure);
    if (nextStyle.profile === "Bucket") {
      nextParams.delete("hatBrimCurve");
      nextParams.delete("brimCurve");
    } else {
      nextParams.set("hatBrimCurve", nextDefaultBrimCurve);
      nextParams.set("brimCurve", nextDefaultBrimCurve);
    }
    nextParams.delete("hatStyleSlug");

    router.replace(`${pathname}?${nextParams.toString()}`, { scroll: false });
  }

  function quantityTierLabel() {
    if (mode === "catalog") {
      if (qty >= 2000) return "2,000+";
      if (qty >= 1000) return "1,000-1,999";
      if (qty >= 500) return "500-999";
      return "100-499";
    }
    if (!isHatBuilderMode) return "100-1,000";
    if (qty >= 5000) return "5,000 custom quote";
    if (qty >= 4000) return "4,000-4,999";
    if (qty >= 3000) return "3,000-3,999";
    if (qty >= 2000) return "2,000-2,999";
    if (qty >= 1000) return "1,000-1,999";
    if (qty >= 500) return "500-999";
    if (qty >= 250) return "250-499";
    return "100-250";
  }

  function baseUnitPriceForQty(basePrice: number) {
    if (mode === "shop") return basePrice;
    if (qty >= 5000) return Math.max(basePrice - 3.5, 1);
    if (qty >= 4000) return Math.max(basePrice - 3.25, 1);
    if (qty >= 3000) return Math.max(basePrice - 3, 1);
    if (qty >= 2000) return Math.max(basePrice - 2.5, 1);
    if (qty >= 1000) return Math.max(basePrice - 2, 1);
    if (qty >= 500) return Math.max(basePrice - 1, 1);
    if (qty >= 250) return basePrice;
    return basePrice + 0.5;
  }

  function timelineLabel() {
    if (mode === "shop") return activeMode.timeline;
    if (isHatBuilderMode) {
      if (sampleType === "none") return activeMode.timeline;
      return sampleDelivery === "shipped" ? "9-11 weeks" : "8-10 weeks";
    }
    if (mode === "catalog") return catalogRush ? "10 business days" : "2-3 weeks";
    if (mode === "ready" && decoration === "embroideredPatch") return "4-5 weeks";
    if (decoration === "embroidery") return activeMode.timeline;
    return "4-6 weeks";
  }

  function showPreviousImage() {
    setLightboxIndex((current) =>
      current === null ? activeMedia.length - 1 : (current - 1 + activeMedia.length) % activeMedia.length
    );
  }

  function showNextImage() {
    setLightboxIndex((current) =>
      current === null ? 0 : (current + 1) % activeMedia.length
    );
  }

  return (
    <main className="bg-[#F7F4ED] text-[var(--og-off-black)]">
      <section className="border-b border-[#081E6F]/10 bg-white">
        <div
          className={`${
            hasPageHeaderContent
              ? "mx-auto flex max-w-7xl flex-col gap-5 px-4 py-5 sm:px-6 lg:px-8"
              : "flex justify-start px-6 pt-6 pb-3 md:px-12"
          }`}
        >
          {pageBackHref && pageBackLabel ? (
            <Link
              href={pageBackHref}
              className={`inline-flex items-center gap-1.5 text-sm font-semibold transition ${
                hasPageHeaderContent
                  ? "w-fit text-[var(--og-blue)] hover:text-[var(--og-orange)]"
                  : "text-[var(--og-blue)] hover:text-[var(--og-orange)]"
              }`}
            >
              ← {pageBackLabel}
            </Link>
          ) : null}
          {hasPageHeaderContent ? (
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                {pageKicker ? (
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--og-orange)]">
                    {pageKicker}
                  </p>
                ) : null}
                {pageTitle ? (
                  <h1 className="mt-2 text-3xl leading-none text-[var(--og-blue)] md:text-5xl">
                    {pageTitle}
                  </h1>
                ) : null}
              </div>
              {pageDescription ? (
                <p className="max-w-xl text-sm leading-6 text-[#4b4b4b]">
                  {pageDescription}
                </p>
              ) : null}
            </div>
          ) : null}

          {lockedMode ? null : (
            <div className="space-y-3">
              <div className="flex gap-2 overflow-x-auto pb-1">
                {availableModes.map((key) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setMode(key)}
                    className={`min-h-10 shrink-0 rounded-lg border px-4 text-sm font-semibold transition ${
                      mode === key
                        ? "border-[var(--og-blue)] bg-[var(--og-blue)] text-white"
                        : "border-[#081E6F]/15 bg-white text-[var(--og-blue)] hover:border-[var(--og-blue)]"
                    }`}
                  >
                    {modeLabelOverrides[key] ?? modes[key].label}
                  </button>
                ))}
              </div>

              {previewLinks.length > 0 ? (
                <div className="flex flex-wrap gap-2">
                  {previewLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="inline-flex min-h-10 items-center rounded-lg border border-dashed border-[#081E6F]/20 bg-[#F7F4ED] px-4 text-sm font-semibold text-[var(--og-blue)] transition hover:border-[var(--og-orange)] hover:text-[var(--og-orange)]"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          )}
        </div>
      </section>

      <section className="px-4 py-8 sm:px-6 lg:px-8">
        <div
          className={`mx-auto grid max-w-[90rem] gap-4 ${
            showLiveCalculator
              ? "xl:grid-cols-[minmax(0,1fr)_minmax(360px,420px)_minmax(300px,340px)]"
              : "lg:grid-cols-[minmax(0,1fr)_minmax(360px,420px)]"
          }`}
        >
          <div className="space-y-4">
            <div className={useSingleColumnMedia ? "grid gap-4" : "grid gap-4 md:grid-cols-2"}>
              {activeMedia.map((item, index) => (
                <button
                  key={item.src}
                  type="button"
                  onClick={() => setLightboxIndex(index)}
                  className={`group relative overflow-hidden rounded-lg bg-white text-left ${
                    useSingleColumnMedia
                      ? index === 0
                        ? "aspect-[4/5] sm:aspect-[5/4]"
                        : "aspect-[4/5] sm:aspect-[3/2]"
                      : "aspect-square"
                  }`}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes={useSingleColumnMedia
                      ? "(min-width: 1280px) 34vw, (min-width: 1024px) 46vw, 100vw"
                      : "(min-width: 1024px) 32vw, (min-width: 768px) 50vw, 100vw"}
                    className={item.imageClassName ?? "object-cover transition duration-500 group-hover:scale-[1.02]"}
                    style={item.imagePosition ? { objectPosition: item.imagePosition } : undefined}
                    priority={index === 0}
                  />
                </button>
              ))}
            </div>

            {showBuilderTimeline ? (
              <div className="rounded-lg border border-[#081E6F]/10 bg-white p-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#6b6b6b]">
                  From order to delivery
                </p>
                <div className="relative mt-4 space-y-3 before:absolute before:bottom-[22px] before:left-[9px] before:top-[22px] before:w-px before:bg-[#0B32A0]/18">
                  {timelineItems.map((item) => (
                    <div key={item.label} className="relative grid grid-cols-[20px_1fr] items-center gap-3">
                      <span className="z-10 h-2.5 w-2.5 justify-self-center rounded-full bg-[var(--og-orange)]" />
                      <div className="flex flex-1 items-center justify-between gap-4 rounded-lg bg-[#F7F4ED] px-4 py-3">
                        <span className="text-sm font-medium text-[#4b4b4b]">{item.label}</span>
                        <span className="text-sm font-semibold text-[var(--og-blue)]">{item.value}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-sm text-[#4b4b4b]">
                  <span className="font-semibold text-[var(--og-blue)]">Estimated delivery if ordered today:</span>{" "}
                  {estimatedDeliveryLabel}
                </p>
              </div>
            ) : (
              <div className="grid gap-3 md:grid-cols-3">
                {[
                  { label: "Best used for", value: mode === "shop" ? "Finished goods" : "Repeatable orders" },
                  { label: "Turnaround", value: activeMode.timeline },
                  { label: "Decision style", value: mode === "shop" ? "Buy now" : "Configure first" },
                ].map((item) => (
                  <div key={item.label} className="rounded-lg border border-[#081E6F]/10 bg-white p-4">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#6b6b6b]">
                      {item.label}
                    </p>
                    <p className="mt-2 text-lg font-semibold text-[var(--og-blue)]">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            )}

            <section className="border-t border-[#081E6F]/10 pt-8">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--og-orange)]">
                  Order process
                </p>
                <p className="mt-2 text-lg font-semibold text-[var(--og-blue)]">
                  What happens after you start your order
                </p>
              </div>
              <div className={`mt-4 grid gap-4 md:grid-cols-2 ${sampleType !== "none" ? "xl:grid-cols-4" : "xl:grid-cols-3"}`}>
                {orderProcessSteps.map((step, index) => (
                  <div key={step.title} className="rounded-lg border border-[#081E6F]/12 bg-[#F7F4ED] p-4 text-[var(--og-blue)] shadow-[0_12px_35px_rgba(8,30,111,0.06)]">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--og-orange)]">
                      Step {index + 1}
                    </p>
                    <p className="mt-3 text-lg font-semibold leading-tight">{step.title}</p>
                    <p className="mt-2 text-sm leading-5 text-[#4b4b4b]">{step.detail}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <aside className="space-y-3 lg:self-start">
            <div className="rounded-lg border border-[#081E6F]/12 bg-white p-5 shadow-[0_18px_55px_rgba(8,30,111,0.07)]">
              <nav className="flex flex-wrap gap-1 text-xs text-[#6b6b6b]">
                <span>Goods</span>
                <span>/</span>
                <span>{summaryBreadcrumbLabel}</span>
                <span>/</span>
                <span className="font-semibold text-[var(--og-blue)]">{summaryTitle}</span>
              </nav>

              <div className="mt-5">
                {summaryEyebrow ? (
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--og-orange)]">
                    {summaryEyebrow}
                  </p>
                ) : null}
                <h2 className="mt-2 text-4xl leading-none text-[var(--og-blue)]">
                  {summaryTitle}
                </h2>
                <p className="mt-3 text-sm leading-6 text-[#4b4b4b]">
                  {activeMode.description}
                </p>
                {mode === "shop" && (
                  <div className="mt-5 flex flex-col gap-4 border-t border-[#081E6F]/10 pt-5 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8a8a8a]">
                        Price
                      </p>
                      <p className="mt-1 text-3xl font-semibold leading-none text-[var(--og-orange)]">
                        {orderPriceLabel}
                      </p>
                      <p className="mt-2 text-xs leading-5 text-[#777]">
                        {orderDetailLabel}
                      </p>
                    </div>
                    <button
                      type="button"
                      className="flex min-h-12 items-center justify-center rounded-lg bg-[var(--og-orange)] px-5 text-sm font-semibold uppercase tracking-[0.12em] text-white transition hover:-translate-y-0.5"
                    >
                      {activeMode.cta}
                    </button>
                  </div>
                )}
              </div>
            </div>

            <div className="rounded-lg border border-[#081E6F]/12 bg-white p-5 shadow-[0_18px_55px_rgba(8,30,111,0.07)]">
              <div className="space-y-6 py-5">
                {!isHatBuilderMode && (
                  mode === "ready" ? (
                    <div>
                      <label className="mb-3 block text-xs font-semibold uppercase tracking-[0.14em] text-[#6b6b6b]">
                        Hat style
                      </label>
                      <select
                        value={readyMadeStyleId}
                        onChange={(event) => setReadyMadeStyleId(event.target.value)}
                        className="h-11 w-full appearance-none rounded-lg border border-[#081E6F]/15 bg-[length:14px_14px] bg-[right_0.9rem_center] bg-no-repeat px-3 pr-10 text-sm font-semibold text-[var(--og-blue)] focus:border-[var(--og-blue)] focus:outline-none"
                        style={{ backgroundImage: `url("data:image/svg+xml,${selectArrowSvg}")` }}
                      >
                        {READY_MADE_HATS.map((style) => (
                          <option key={style.id} value={style.id.toLowerCase()}>
                            {`${style.id} - ${style.name}`}
                          </option>
                        ))}
                      </select>
                      {selectedReadyMadeStyle ? (
                        <p className="mt-2 text-xs leading-5 text-[#8a8a8a]">
                          {selectedReadyMadeStyle.tagline} · {selectedReadyMadeStyle.crown}
                        </p>
                      ) : null}
                    </div>
                  ) : null
                )}

                {!isHatBuilderMode && mode !== "catalog" && (
                  <div>
                    <div className="mb-3 flex items-center justify-between">
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#6b6b6b]">
                        Color
                      </p>
                      <p className="text-sm font-semibold text-[var(--og-blue)]">
                        {mode === "ready" ? selectedReadyMadeColor?.name : color.name}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2.5 overflow-visible py-1">
                      {mode === "ready" && selectedReadyMadeStyle
                        ? selectedReadyMadeStyle.colors
                            .filter((option) => option.name !== "Default" && !option.name.includes("→"))
                            .map((option) => {
                              const actualIndex = selectedReadyMadeStyle.colors.findIndex(
                                (colorOption) => colorOption.name === option.name
                              );

                              return (
                                <button
                                  key={`${selectedReadyMadeStyle.id}-${option.name}`}
                                  type="button"
                                  aria-label={option.name}
                                  title={option.name}
                                  onClick={() => setReadyMadeColorIndex(actualIndex)}
                                  style={option.swatch ? { background: option.swatch } : readyMadeSwatchStyle(option.name)}
                                  className={`h-7 w-7 shrink-0 rounded-full border border-[#1C1C1C]/10 shadow-sm transition ${
                                    readyMadeColorIndex === actualIndex
                                      ? "ring-2 ring-[var(--og-orange)] ring-offset-2"
                                      : "hover:ring-2 hover:ring-[var(--og-orange)] hover:ring-offset-2"
                                  }`}
                                />
                              );
                            })
                        : colorOptions.map((option) => (
                            <button
                              key={option.name}
                              type="button"
                              title={option.name}
                              onClick={() => setColor(option)}
                              className={`h-6 w-6 rounded-full border transition ${
                                color.name === option.name
                                  ? "border-[var(--og-orange)] ring-2 ring-[var(--og-orange)] ring-offset-1"
                                  : "border-[#1C1C1C]/15 hover:border-[var(--og-blue)]"
                              }`}
                              style={{ backgroundColor: option.value }}
                            />
                          ))}
                    </div>
                    {mode === "ready" && selectedReadyMadeStyle ? (
                      <p className="mt-2 text-xs leading-5 text-[#8a8a8a]">
                        {selectedReadyMadeStyle.material} · {selectedReadyMadeStyle.bill} bill
                      </p>
                    ) : null}
                  </div>
                )}

                {mode === "catalog" && (
                  <div>
                    <div className="mb-3 flex items-center justify-between">
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#6b6b6b]">
                        Colors
                      </p>
                      <p className="text-sm font-semibold text-[var(--og-blue)]">
                        {selectedColorLabel}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2.5 overflow-visible py-1">
                      {catalogColorOptions.map((option) => {
                        const isSelected = catalogColors.some((item) => item.name === option.name);
                        return (
                          <button
                            key={option.name}
                            type="button"
                            aria-label={option.name}
                            title={option.name}
                            onClick={() => toggleCatalogColor(option)}
                            className={`h-7 w-7 shrink-0 rounded-full border border-[#1C1C1C]/10 shadow-sm transition ${
                              isSelected
                                ? "ring-2 ring-[var(--og-orange)] ring-offset-2"
                                : "hover:ring-2 hover:ring-[var(--og-orange)] hover:ring-offset-2"
                            }`}
                            style={{ backgroundColor: option.value }}
                          />
                        );
                      })}
                    </div>
                    <p className="mt-2 text-xs leading-5 text-[#8a8a8a]">
                      {catalogColors.length > 0
                        ? `${catalogColors.length} selected · ${catalogColors.map((option) => option.name).join(", ")}`
                        : "Select at least one color to price the run."}
                    </p>
                  </div>
                )}

                {isHatBuilderMode && (
                  <div>
                    <label className="mb-3 block text-xs font-semibold uppercase tracking-[0.14em] text-[#6b6b6b]">
                      Hat style
                    </label>
                    <select
                      value={hatStyleSlug}
                      onChange={(event) => handleHatStyleChange(event.target.value)}
                      className="h-11 w-full appearance-none rounded-lg border border-[#081E6F]/15 bg-[length:14px_14px] bg-[right_0.9rem_center] bg-no-repeat px-3 pr-10 text-sm font-semibold text-[var(--og-blue)] focus:border-[var(--og-blue)] focus:outline-none md:inline-block md:w-auto md:max-w-full"
                      style={{ backgroundImage: `url("data:image/svg+xml,${selectArrowSvg}")` }}
                    >
                      {hatStyles.map((style) => (
                        <option key={style.slug} value={style.slug}>
                          {`${style.model} - ${style.title} - ${style.selectorDescription}`}
                        </option>
                      ))}
                    </select>
                    <p className="mt-2 text-xs leading-5 text-[#8a8a8a]">
                      {selectedHatStyle.selectorDescription} · {selectedHatStyle.bestFor}
                    </p>
                  </div>
                )}

                {mode === "shop" && (
                  <div>
                    <div className="mb-3 flex items-center justify-between gap-3">
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#6b6b6b]">
                        Size
                      </p>
                      <a href="#fit-guide" className="text-xs font-semibold text-[var(--og-blue)] underline-offset-4 hover:underline">
                        Fit guide
                      </a>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      {shopSizeOptions.map((size) => (
                        <button
                          key={size}
                          type="button"
                          onClick={() => setShopSize(size)}
                          className={`min-h-10 rounded-lg border px-3 text-sm font-semibold transition ${
                            shopSize === size
                              ? "border-[var(--og-blue)] bg-[var(--og-blue)] text-white"
                              : "border-[#081E6F]/15 bg-white text-[var(--og-blue)] hover:border-[var(--og-blue)]"
                          }`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {mode !== "shop" && mode !== "catalog" && (
                  <div>
                    <div className="mb-3 flex items-center justify-between gap-3">
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#6b6b6b]">
                        Quantity (100-piece minimum)
                      </p>
                      <div className="flex items-center gap-2">
                        <input
                          type="number"
                          min={100}
                          max={maxQty}
                          step={10}
                          value={qtyInput}
                          onChange={(event) => handleQtyInput(event.target.value)}
                          className="h-10 w-24 rounded-lg border border-[#081E6F]/15 px-3 text-sm font-semibold text-[var(--og-blue)] focus:border-[var(--og-blue)] focus:outline-none"
                        />
                        <span className="text-xs text-[#8a8a8a]">units</span>
                      </div>
                    </div>
                    <div className="relative px-1 pt-8">
                      <div
                        className="pointer-events-none absolute top-0 z-10"
                        style={qtyTooltipPosition}
                      >
                        <span className="inline-flex min-h-7 whitespace-nowrap rounded-full bg-[var(--og-blue)] px-3 py-1 text-[11px] font-semibold text-white shadow-[0_10px_24px_rgba(8,30,111,0.16)]">
                          {basePriceLabel}
                        </span>
                      </div>
                      <input
                        type="range"
                        min={0}
                        max={Math.max(activeQtyMarks.length - 1, 0)}
                        step={1}
                        value={qtyTierIndex}
                        onChange={(event) => handleQtySlider(event.target.value)}
                        className="h-2 w-full cursor-pointer accent-[var(--og-orange)]"
                        style={{ accentColor: "#0B32A0" }}
                      />
                      <div className="pointer-events-none relative mt-1.5 h-8">
                        {activeQtyMarks.map(({ value, label }, index) => {
                          const markPosition = sliderPositionStyle(index, activeQtyMarks.length);

                          return (
                            <div
                              key={value}
                              className="absolute top-0 flex min-w-0 flex-col items-center"
                              style={markPosition}
                            >
                              <div className="h-1.5 w-px bg-[#081E6F]/30" />
                              <span className={`mt-0.5 text-[10px] ${
                                qtyTierIndex === index
                                  ? "font-semibold text-[var(--og-blue)]"
                                  : "text-[#8a8a8a]"
                              }`}>
                                {label}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}

                {mode === "catalog" && (
                  <div className="rounded-[1.5rem] border border-[#081E6F]/10 bg-[#FBF8F1] p-4 md:p-5">
                    <div className="mb-4 flex items-start justify-between gap-3">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#6b6b6b]">
                          Sizes + quantity
                        </p>
                        <p className="mt-1 text-[11px] leading-5 text-[#8a8a8a]">
                          Set the total and keep the full size run in one compact block.
                        </p>
                      </div>
                      <span className="shrink-0 rounded-full bg-[var(--og-orange)] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-white">
                        100-piece minimum
                      </span>
                    </div>

                    <div className="grid grid-cols-4 gap-2 md:grid-cols-8">
                      {apparelSizeOptions.map((size) => (
                        <label key={size} className="block">
                          <span className="mb-1.5 block text-center text-[11px] font-semibold uppercase tracking-[0.08em] text-[#7d7d7d]">
                            {size}
                          </span>
                          <input
                            type="number"
                            min={0}
                            step={1}
                            value={apparelSizeBreakdown[size]}
                            onChange={(event) => updateApparelSize(size, event.target.value)}
                            className="h-14 w-full rounded-2xl border border-[#081E6F]/10 bg-white px-2 text-center text-xl font-semibold text-[var(--og-blue)] outline-none transition focus:border-[var(--og-orange)]"
                            aria-label={`${size} quantity`}
                          />
                        </label>
                      ))}
                    </div>

                    <div className="mt-4 rounded-[1.5rem] bg-[#F3EEE4] p-4 md:p-5">
                      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                        <p className="text-xl font-semibold text-[var(--og-blue)]">
                          Total: {qty.toLocaleString()} pieces
                        </p>
                        <div className="flex items-center gap-2">
                          <input
                            type="number"
                            min={100}
                            max={maxQty}
                            step={10}
                            value={qtyInput}
                            onChange={(event) => handleQtyInput(event.target.value)}
                            className="h-10 w-28 rounded-xl border border-[#081E6F]/12 bg-white px-3 text-right text-sm font-semibold text-[var(--og-blue)] outline-none focus:border-[var(--og-orange)]"
                          />
                          <span className="text-xs font-medium text-[#8a8a8a]">pieces</span>
                        </div>
                      </div>

                      <div className="relative mt-4 px-1 pt-8">
                        <div
                          className="pointer-events-none absolute top-0 z-10"
                          style={qtyTooltipPosition}
                        >
                          <span className="inline-flex min-h-7 whitespace-nowrap rounded-full bg-[var(--og-blue)] px-3 py-1 text-[11px] font-semibold text-white shadow-[0_10px_24px_rgba(8,30,111,0.16)]">
                            {basePriceLabel}
                          </span>
                        </div>
                        <input
                          type="range"
                          min={0}
                          max={Math.max(activeQtyMarks.length - 1, 0)}
                          step={1}
                          value={qtyTierIndex}
                          onChange={(event) => handleQtySlider(event.target.value)}
                          className="h-2 w-full cursor-pointer accent-[var(--og-orange)]"
                          style={{ accentColor: "#0B32A0" }}
                        />
                        <div className="pointer-events-none relative mt-2 h-11">
                          {activeQtyMarks.map(({ value, label }, index) => {
                            const markPosition = sliderPositionStyle(index, activeQtyMarks.length);

                            return (
                              <div
                                key={value}
                                className="absolute top-0 flex min-w-0 flex-col items-center"
                                style={markPosition}
                              >
                                <div className="h-1.5 w-px bg-[#081E6F]/30" />
                                <span className={`mt-1 inline-flex min-w-[3.75rem] justify-center whitespace-nowrap rounded-full border px-2.5 py-1 text-[10px] ${
                                  qtyTierIndex === index
                                    ? "border-[var(--og-blue)] bg-[var(--og-blue)] font-semibold text-white"
                                    : "border-[#081E6F]/12 bg-white text-[#8a8a8a]"
                                }`}>
                                  {label}
                                </span>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>

                    <p className="mt-3 text-xs leading-5 text-[#8a8a8a]">
                      {apparelSizeBreakdownSummary || "No sizes assigned yet"}
                    </p>
                  </div>
                )}

                {mode !== "shop" && (
                  <div>
                    <div className="mb-3 flex items-center gap-2">
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#6b6b6b]">
                        Front decoration
                      </p>
                      {showDecorationIncludedPill ? (
                        <span className="inline-flex rounded-full border border-[#0B32A0]/12 bg-[#F5F7FC] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--og-blue)]">
                          Included
                        </span>
                      ) : null}
                    </div>
                    <p className="mb-3 text-[11px] leading-5 text-[#8a8a8a]">
                      {mode === "catalog"
                        ? "Keep the main decoration simple here, then layer in print upgrades or extra placements below."
                        : "Not sure? We&apos;ll help guide you into the right decoration."}
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      {activeDecorationOptions
                        .filter((option) => option.id !== "other")
                        .map((option) => (
                        <button
                          key={option.id}
                          type="button"
                          onClick={() => setDecoration(option.id)}
                          className={`min-h-[4.25rem] rounded-lg border px-3 py-2.5 text-left transition ${
                            decoration === option.id
                              ? "border-[var(--og-blue)] bg-[var(--og-blue)] text-white"
                              : "border-[#081E6F]/15 bg-white text-[var(--og-blue)] hover:border-[var(--og-blue)]"
                          }`}
                        >
                          <span className="block min-w-0">
                            <span className="block text-xs font-semibold uppercase tracking-[0.12em]">
                              {option.label}
                            </span>
                            <span className={`mt-1 block text-[11px] leading-4 ${
                              decoration === option.id ? "text-white/75" : "text-[#8a8a8a]"
                            }`}>
                              {option.sub}
                            </span>
                          </span>
                        </button>
                      ))}
                      {(mode === "ready" || isHatBuilderMode) && (
                        <button
                          type="button"
                          onClick={() => setDecoration("other")}
                          className={`min-h-[4.25rem] rounded-lg border px-3 py-2.5 text-left transition ${
                            decoration === "other"
                              ? "border-[var(--og-blue)] bg-[var(--og-blue)] text-white"
                              : "border-[#081E6F]/15 bg-white text-[var(--og-blue)] hover:border-[var(--og-blue)]"
                          }`}
                        >
                          <span className="block min-w-0">
                            <span className="block text-xs font-semibold uppercase tracking-[0.12em]">
                              Other decoration
                            </span>
                            <span className={`mt-1 block text-[11px] leading-4 ${
                              decoration === "other" ? "text-white/75" : "text-[#8a8a8a]"
                            }`}>
                              {mode === "ready"
                                ? "If you want something outside the core set."
                                : "Felt patch, woven label, puff print, and more."}
                            </span>
                          </span>
                        </button>
                      )}
                    </div>
                    {decoration === "other" && (
                      <div className="mt-3">
                        <label className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.12em] text-[#6b6b6b]">
                          Other decoration details
                        </label>
                        <textarea
                          ref={customDecorationRef}
                          value={customDecoration}
                          onChange={(event) => setCustomDecoration(event.target.value)}
                          placeholder="Tell us the decoration method you want"
                          rows={2}
                          className="w-full rounded-lg border border-[#081E6F]/15 px-3 py-3 text-sm font-semibold text-[var(--og-blue)] placeholder:text-[#8a8a8a] focus:border-[var(--og-blue)] focus:outline-none"
                        />
                        <p className="mt-2 text-[11px] leading-5 text-[#8a8a8a]">
                          {mode === "catalog"
                            ? "Tell us if you want something like patches, hem labels, hang tags, or another specialty print finish."
                            : "Tell us the decoration method you want. Not sure what&apos;s right? Tell us what you&apos;re after and we&apos;ll help guide you."}
                        </p>
                      </div>
                    )}
                    <a
                      href="/insights/decoration-options-guide"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex min-h-10 w-full items-center justify-center rounded-lg border border-[#081E6F]/15 bg-white px-4 text-center text-xs font-semibold uppercase tracking-[0.1em] text-[var(--og-blue)] transition hover:border-[var(--og-orange)] hover:text-[var(--og-orange)]"
                    >
                      Learn more about decoration options
                    </a>
                  </div>
                )}

                {mode === "catalog" && (
                  <div className="rounded-[1.5rem] border border-[#081E6F]/10 bg-[#FBF7F1] p-4 md:p-5">
                    <div className="mb-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#6b6b6b]">
                        Decoration locations
                      </p>
                      <p className="mt-2 text-sm leading-6 text-[#4b4b4b]">
                        Set the front, back, and side decoration here. If it&apos;s a screen print, you can type the number of colors needed for each placement and the pricing updates automatically.
                      </p>
                    </div>

                    <div className="grid gap-4">
                      <div>
                        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#6b6b6b]">
                          Front decoration
                        </p>
                        {decoration === "screenPrint" ? (
                          <>
                            <p className="mb-3 text-[11px] leading-5 text-[#8a8a8a]">
                              Screen print includes one front color. Add more colors here and the price updates automatically.
                            </p>
                            <div className="rounded-lg border border-[#081E6F]/10 bg-white px-3 py-3">
                              <div className="flex items-start justify-between gap-4">
                                <div>
                                  <p className="text-sm font-semibold text-[var(--og-blue)]">Front decoration colors</p>
                                  <p className="mt-1 text-[11px] text-[#8a8a8a]">
                                    {catalogFrontPrintColors === 1 ? "1 color included" : `+$${(catalogFrontPrintColors - 1).toFixed(2)}/tee for extra front colors`}
                                  </p>
                                </div>
                                <div className="flex items-center gap-2">
                                  <button
                                    type="button"
                                    onClick={() => adjustCatalogPrintColors(setCatalogFrontPrintColors, -1)}
                                    className="flex h-8 w-8 items-center justify-center rounded-full border border-[#081E6F]/15 text-[var(--og-blue)] transition hover:border-[var(--og-blue)]"
                                  >
                                    −
                                  </button>
                                  <input
                                    type="number"
                                    min={1}
                                    max={8}
                                    value={catalogFrontPrintColors}
                                    onChange={(event) => setCatalogPrintColorCount(setCatalogFrontPrintColors, event.target.value)}
                                    className="h-10 w-16 rounded-lg border border-[#081E6F]/15 text-center text-sm font-semibold text-[var(--og-blue)] focus:border-[var(--og-blue)] focus:outline-none"
                                    aria-label="Front decoration color count"
                                  />
                                  <button
                                    type="button"
                                    onClick={() => adjustCatalogPrintColors(setCatalogFrontPrintColors, 1)}
                                    className="flex h-8 w-8 items-center justify-center rounded-full border border-[#081E6F]/15 text-[var(--og-blue)] transition hover:border-[var(--og-blue)]"
                                  >
                                    +
                                  </button>
                                </div>
                              </div>
                            </div>
                          </>
                        ) : (
                          <p className="rounded-lg border border-[#081E6F]/10 bg-white px-3 py-3 text-sm text-[#4b4b4b]">
                            Front embroidery selected. Embroidery adds +$3.00 per tee.
                          </p>
                        )}
                      </div>

                      <div>
                        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#6b6b6b]">
                          Back decoration
                        </p>
                        <div className="grid grid-cols-2 gap-2">
                          {([
                            { id: "none", label: "None" },
                            { id: "print", label: "Add back decoration" },
                          ] as const).map((option) => (
                            <button
                              key={option.id}
                              type="button"
                              onClick={() => setCatalogBackPrintEnabled(option.id === "print")}
                              className={`min-h-10 rounded-lg border px-3 text-sm font-semibold transition ${
                                (catalogBackPrintEnabled && option.id === "print") || (!catalogBackPrintEnabled && option.id === "none")
                                  ? "border-[var(--og-blue)] bg-[var(--og-blue)] text-white"
                                  : "border-[#081E6F]/15 bg-white text-[var(--og-blue)] hover:border-[var(--og-blue)]"
                              }`}
                            >
                              {option.label}
                            </button>
                          ))}
                        </div>
                        {catalogBackPrintEnabled ? (
                          <div className="mt-3 rounded-lg border border-[#081E6F]/10 bg-white px-3 py-3">
                            <div className="flex items-start justify-between gap-4">
                              <div>
                                <p className="text-sm font-semibold text-[var(--og-blue)]">Back decoration colors</p>
                                <p className="mt-1 text-[11px] text-[#8a8a8a]">
                                  1 color starts at +$3.00/tee, then +$1.00 per extra color
                                </p>
                              </div>
                              <div className="flex items-center gap-2">
                                <button
                                  type="button"
                                  onClick={() => adjustCatalogPrintColors(setCatalogBackPrintColors, -1)}
                                  className="flex h-8 w-8 items-center justify-center rounded-full border border-[#081E6F]/15 text-[var(--og-blue)] transition hover:border-[var(--og-blue)]"
                                >
                                  −
                                </button>
                                <input
                                  type="number"
                                  min={1}
                                  max={8}
                                  value={catalogBackPrintColors}
                                  onChange={(event) => setCatalogPrintColorCount(setCatalogBackPrintColors, event.target.value)}
                                  className="h-10 w-16 rounded-lg border border-[#081E6F]/15 text-center text-sm font-semibold text-[var(--og-blue)] focus:border-[var(--og-blue)] focus:outline-none"
                                  aria-label="Back decoration color count"
                                />
                                <button
                                  type="button"
                                  onClick={() => adjustCatalogPrintColors(setCatalogBackPrintColors, 1)}
                                  className="flex h-8 w-8 items-center justify-center rounded-full border border-[#081E6F]/15 text-[var(--og-blue)] transition hover:border-[var(--og-blue)]"
                                >
                                  +
                                </button>
                              </div>
                            </div>
                          </div>
                        ) : null}
                      </div>

                      <div>
                        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#6b6b6b]">
                          Side decoration
                        </p>
                        <div className="grid grid-cols-2 gap-2">
                          {([
                            { id: "none", label: "None" },
                            { id: "print", label: "Add side decoration" },
                          ] as const).map((option) => (
                            <button
                              key={option.id}
                              type="button"
                              onClick={() => setCatalogSidePrintEnabled(option.id === "print")}
                              className={`min-h-10 rounded-lg border px-3 text-sm font-semibold transition ${
                                (catalogSidePrintEnabled && option.id === "print") || (!catalogSidePrintEnabled && option.id === "none")
                                  ? "border-[var(--og-blue)] bg-[var(--og-blue)] text-white"
                                  : "border-[#081E6F]/15 bg-white text-[var(--og-blue)] hover:border-[var(--og-blue)]"
                              }`}
                            >
                              {option.label}
                            </button>
                          ))}
                        </div>
                        {catalogSidePrintEnabled ? (
                          <div className="mt-3 rounded-lg border border-[#081E6F]/10 bg-white px-3 py-3">
                            <div className="flex items-start justify-between gap-4">
                              <div>
                                <p className="text-sm font-semibold text-[var(--og-blue)]">Side decoration colors</p>
                                <p className="mt-1 text-[11px] text-[#8a8a8a]">
                                  1 color starts at +$2.00/tee, then +$1.00 per extra color
                                </p>
                              </div>
                              <div className="flex items-center gap-2">
                                <button
                                  type="button"
                                  onClick={() => adjustCatalogPrintColors(setCatalogSidePrintColors, -1)}
                                  className="flex h-8 w-8 items-center justify-center rounded-full border border-[#081E6F]/15 text-[var(--og-blue)] transition hover:border-[var(--og-blue)]"
                                >
                                  −
                                </button>
                                <input
                                  type="number"
                                  min={1}
                                  max={8}
                                  value={catalogSidePrintColors}
                                  onChange={(event) => setCatalogPrintColorCount(setCatalogSidePrintColors, event.target.value)}
                                  className="h-10 w-16 rounded-lg border border-[#081E6F]/15 text-center text-sm font-semibold text-[var(--og-blue)] focus:border-[var(--og-blue)] focus:outline-none"
                                  aria-label="Side decoration color count"
                                />
                                <button
                                  type="button"
                                  onClick={() => adjustCatalogPrintColors(setCatalogSidePrintColors, 1)}
                                  className="flex h-8 w-8 items-center justify-center rounded-full border border-[#081E6F]/15 text-[var(--og-blue)] transition hover:border-[var(--og-blue)]"
                                >
                                  +
                                </button>
                              </div>
                            </div>
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </div>
                )}

                {isHatBuilderMode && (
                  <div>
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#6b6b6b]">
                      Fabric
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      {hatMaterialOptions.map((option) => (
                        <button
                          key={option}
                          type="button"
                          onClick={() => setHatMaterial(option)}
                          className={`min-h-10 rounded-lg border px-3 text-sm font-semibold transition ${
                            hatMaterial === option
                              ? "border-[var(--og-blue)] bg-[var(--og-blue)] text-white"
                              : "border-[#081E6F]/15 bg-white text-[var(--og-blue)] hover:border-[var(--og-blue)]"
                          }`}
                        >
                          {option}
                        </button>
                        ))}
                      </div>
                    <div className="mt-3 grid gap-2">
                      <button
                        type="button"
                        onClick={() => setWashedFabric((current) => !current)}
                        className={`rounded-lg border p-3 text-left transition ${
                          washedFabric
                            ? "border-[var(--og-blue)] bg-[#F7F4ED] text-[var(--og-blue)]"
                            : "border-[#081E6F]/15 bg-white text-[var(--og-blue)] hover:border-[var(--og-blue)]"
                        }`}
                      >
                        <span className="block text-xs font-semibold uppercase tracking-[0.12em]">
                          Washed fabric
                        </span>
                        <span className="mt-1 block text-[11px] text-[#8a8a8a]">+$0.50</span>
                      </button>
                    </div>
                    <div className="mt-4">
                      <label className="mb-3 block text-xs font-semibold uppercase tracking-[0.14em] text-[#6b6b6b]">
                        Fabric color
                      </label>
                      <input
                        type="text"
                        value={hatColorCallout}
                        onChange={(event) => setHatColorCallout(event.target.value)}
                        placeholder="e.g. Black canvas number 26"
                        className="h-11 w-full rounded-lg border border-[#081E6F]/15 px-3 text-sm font-normal text-[var(--og-blue)] placeholder:text-[#8a8a8a] focus:border-[var(--og-blue)] focus:outline-none"
                      />
                      <a
                        href="/goods/hats/fabric"
                        target="_blank"
                        rel="noreferrer"
                        className="mt-3 inline-flex min-h-10 w-full items-center justify-center rounded-lg border border-[#081E6F]/15 bg-white px-4 text-center text-xs font-semibold uppercase tracking-[0.1em] text-[var(--og-blue)] transition hover:border-[var(--og-orange)] hover:text-[var(--og-orange)]"
                      >
                        See fabric and color options
                      </a>
                    </div>
                  </div>
                )}

                {isHatBuilderMode && (
                  <div>
                    <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-2">
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#6b6b6b]">
                        Closure
                      </p>
                      <div className="group relative inline-flex">
                        <button
                          type="button"
                          className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--og-blue)] underline underline-offset-4 transition hover:text-[var(--og-orange)] focus:text-[var(--og-orange)] focus:outline-none"
                        >
                          See closure options
                        </button>
                        <div className="pointer-events-none absolute left-0 top-full z-30 mt-3 w-[30rem] max-w-[calc(100vw-2rem)] rounded-[1.5rem] border border-[#081E6F]/12 bg-white p-4 opacity-0 shadow-[0_22px_55px_rgba(8,30,111,0.16)] transition duration-200 group-hover:opacity-100 group-focus-within:opacity-100">
                          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#6b6b6b]">
                            Closure guide
                          </p>
                          <div className="grid grid-cols-3 gap-3">
                            {hatClosurePreviewOptions.map((option) => (
                              <div key={option.label} className="overflow-hidden rounded-xl border border-[#081E6F]/10 bg-[#F7F4ED]">
                                <div className="relative aspect-[4/3] overflow-hidden">
                                  <Image
                                    src={option.image}
                                    alt={option.imageAlt}
                                    fill
                                    sizes="(max-width: 768px) 30vw, 150px"
                                    className="object-cover"
                                    style={{
                                      objectPosition: option.imagePosition,
                                      transform: `scale(${option.imageScale})`,
                                    }}
                                  />
                                </div>
                                <div className="px-2.5 py-2.5 text-[11px] font-semibold leading-4 text-[var(--og-blue)]">
                                  {option.label}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    {isBucketHatStyle ? (
                      <div className="rounded-lg border border-dashed border-[#081E6F]/18 bg-[#F7F4ED] px-3 py-3 text-sm font-medium text-[var(--og-blue)]">
                        Bucket hats do not use a closure.
                      </div>
                    ) : (
                      <div className="grid grid-cols-2 gap-2">
                        {hatClosureOptions.map((option) => (
                          <button
                            key={option}
                            type="button"
                            onClick={() => setHatClosure(option)}
                            className={`min-h-10 rounded-lg border px-3 py-2 text-sm font-semibold transition ${
                              hatClosure === option
                                ? "border-[var(--og-blue)] bg-[var(--og-blue)] text-white"
                                : "border-[#081E6F]/15 bg-white text-[var(--og-blue)] hover:border-[var(--og-blue)]"
                            }`}
                          >
                            <span className="block">{option}</span>
                            {(hatClosurePrices[option] ?? 0) > 0 ? (
                              <span className={`mt-0.5 block text-[11px] ${
                                hatClosure === option ? "text-white/75" : "text-[#8a8a8a]"
                              }`}>
                                +${(hatClosurePrices[option] ?? 0).toFixed(2)}
                              </span>
                            ) : null}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {isHatBuilderMode && !isBucketHatStyle && (
                  <div>
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#6b6b6b]">
                      Brim curve
                    </p>
                    <div className="grid grid-cols-3 gap-2">
                      {hatBrimCurveOptions.map((option) => (
                        <button
                          key={option}
                          type="button"
                          onClick={() => setHatBrimCurve(option)}
                          className={`min-h-10 rounded-lg border px-3 py-2 text-sm font-semibold transition ${
                            hatBrimCurve === option
                              ? "border-[var(--og-blue)] bg-[var(--og-blue)] text-white"
                              : "border-[#081E6F]/15 bg-white text-[var(--og-blue)] hover:border-[var(--og-blue)]"
                          }`}
                        >
                          <span className="flex items-center justify-center gap-1.5">
                            <span>{option}</span>
                            {defaultHatBrimCurve === option ? (
                              <span
                                className={`text-[11px] font-medium ${
                                  hatBrimCurve === option ? "text-white/70" : "text-[#a3a3a3]"
                                }`}
                              >
                                (Default)
                              </span>
                            ) : null}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {(isHatBuilderMode || mode === "ready") && (
                  <div>
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#6b6b6b]">
                      Back decoration
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      {([
                        { id: "none", label: "None" },
                        { id: "embroidery", label: mode === "ready" ? "Embroidery +$4.50" : "Embroidery +$1.00" },
                      ] as const).map((option) => (
                        <button
                          key={option.id}
                          type="button"
                          onClick={() => setBackDecoration(option.id)}
                          className={`min-h-10 rounded-lg border px-3 text-sm font-semibold transition ${
                            backDecoration === option.id
                              ? "border-[var(--og-blue)] bg-[var(--og-blue)] text-white"
                              : "border-[#081E6F]/15 bg-white text-[var(--og-blue)] hover:border-[var(--og-blue)]"
                          }`}
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {(isHatBuilderMode || mode === "ready") && (
                  <div>
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#6b6b6b]">
                      Side decoration
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      {([
                        { id: "none", label: "None" },
                        { id: "embroidery", label: mode === "ready" ? "Embroidery +$4.50" : "Embroidery +$1.00" },
                      ] as const).map((option) => (
                        <button
                          key={option.id}
                          type="button"
                          onClick={() => setSideDecoration(option.id)}
                          className={`min-h-10 rounded-lg border px-3 text-sm font-semibold transition ${
                            sideDecoration === option.id
                              ? "border-[var(--og-blue)] bg-[var(--og-blue)] text-white"
                              : "border-[#081E6F]/15 bg-white text-[var(--og-blue)] hover:border-[var(--og-blue)]"
                          }`}
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {mode !== "shop" && !isHatBuilderMode && mode !== "ready" && (
                  <div>
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#6b6b6b]">
                      {mode === "catalog" ? "Print upgrades" : "Additional locations"}
                    </p>
                    {mode === "catalog" ? (
                      <p className="mb-3 text-[11px] leading-5 text-[#8a8a8a]">
                        Use these when the print itself needs a specific finish beyond standard screen print.
                      </p>
                    ) : null}
                    <div className="space-y-2">
                      {activeCatalogAddOnOptions.map((location) => (
                        <label
                          key={location.label}
                          className="flex min-h-12 cursor-pointer items-center justify-between rounded-lg border border-[#081E6F]/10 px-3 transition hover:border-[var(--og-blue)]"
                        >
                          <span className="flex items-center gap-3 text-sm font-medium text-[var(--og-blue)]">
                            <input
                              type={mode === "catalog" ? "radio" : "checkbox"}
                              name={mode === "catalog" ? "catalog-print-upgrade" : undefined}
                              checked={selectedLocations.includes(location.label)}
                              onChange={() => toggleLocation(location.label)}
                              className="h-4 w-4 accent-[var(--og-orange)]"
                            />
                            {location.label}
                          </span>
                          <span className="text-sm text-[#8a8a8a]">+${location.price.toFixed(2)}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                )}

                {mode === "catalog" && (
                  <div>
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#6b6b6b]">
                      Packaging upgrades
                    </p>
                    <p className="mb-3 text-[11px] leading-5 text-[#8a8a8a]">
                      Add the finishing touches here. Use order notes if you want hem labels, hang tags, or something more custom.
                    </p>
                    <div className="space-y-2">
                      {catalogPackagingOptions.map((option) => (
                        <label
                          key={option.label}
                          className="flex min-h-12 cursor-pointer items-center justify-between rounded-lg border border-[#081E6F]/10 px-3 transition hover:border-[var(--og-blue)]"
                        >
                          <span className="flex items-center gap-3 text-sm font-medium text-[var(--og-blue)]">
                            <input
                              type="checkbox"
                              checked={selectedCatalogPackaging.includes(option.label)}
                              onChange={() => toggleCatalogPackaging(option.label)}
                              className="h-4 w-4 accent-[var(--og-orange)]"
                            />
                            {option.label}
                          </span>
                          <span className="text-sm text-[#8a8a8a]">+${option.price.toFixed(2)}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                )}

                {mode === "catalog" && (
                  <div>
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#6b6b6b]">
                      Rush delivery
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      {([
                        { id: "standard", label: "Standard", sub: "Included · 2 to 3 weeks" },
                        { id: "rush", label: "Rush +$3.00", sub: "Cuts production to 10 business days" },
                      ] as const).map((option) => (
                        <button
                          key={option.id}
                          type="button"
                          onClick={() => setCatalogRush(option.id === "rush")}
                          className={`rounded-lg border p-3 text-left transition ${
                            (catalogRush && option.id === "rush") || (!catalogRush && option.id === "standard")
                              ? "border-[var(--og-blue)] bg-[var(--og-blue)] text-white"
                              : "border-[#081E6F]/15 bg-white text-[var(--og-blue)] hover:border-[var(--og-blue)]"
                          }`}
                        >
                          <span className="block text-sm font-semibold">{option.label}</span>
                          <span className={`mt-1 block text-[11px] ${
                            (catalogRush && option.id === "rush") || (!catalogRush && option.id === "standard")
                              ? "text-white/72"
                              : "text-[#8a8a8a]"
                          }`}>
                            {option.sub}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {mode !== "shop" && showCatalogEmbroideryFields && (
                  <div>
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#6b6b6b]">
                      {mode === "catalog" ? "Embroidery finish" : "Embroidery thread finish"}
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      {(["matte", "shiny"] as const).map((finish) => (
                        <button
                          key={finish}
                          type="button"
                          onClick={() => setThreadFinish(finish)}
                          className={`min-h-10 rounded-lg border px-3 text-sm font-semibold capitalize transition ${
                            threadFinish === finish
                              ? "border-[var(--og-blue)] bg-[var(--og-blue)] text-white"
                              : "border-[#081E6F]/15 bg-white text-[var(--og-blue)] hover:border-[var(--og-blue)]"
                          }`}
                        >
                          {finish}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {mode !== "shop" && showCatalogEmbroideryFields && (
                  <div>
                    <label className="mb-3 block text-xs font-semibold uppercase tracking-[0.14em] text-[#6b6b6b]">
                      Embroidery color
                    </label>
                    <input
                      type="text"
                      value={embroideryColor}
                      onChange={(event) => setEmbroideryColor(event.target.value)}
                      placeholder="e.g. Ivory, PMS 165, tonal navy"
                      className="h-11 w-full rounded-lg border border-[#081E6F]/15 px-3 text-sm font-normal text-[var(--og-blue)] placeholder:text-[#8a8a8a] focus:border-[var(--og-blue)] focus:outline-none"
                    />
                  </div>
                )}

                {isHatBuilderMode && (
                  <div>
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#6b6b6b]">
                      Additional decorations
                    </p>
                    <div className="grid gap-2 md:grid-cols-3">
                      {hatAdditionalDecorationOptions.map((option) => (
                        <button
                          key={option}
                          type="button"
                          onClick={() => toggleHatAdditionalDecoration(option)}
                          className={`rounded-lg border p-3 text-left transition ${
                            hatAdditionalDecorations.includes(option)
                              ? "border-[var(--og-blue)] bg-[var(--og-blue)] text-white"
                              : "border-[#081E6F]/15 bg-white text-[var(--og-blue)] hover:border-[var(--og-blue)]"
                          }`}
                        >
                          <span className="block text-sm font-semibold">{option}</span>
                          <span className={`mt-1 block text-[11px] ${hatAdditionalDecorations.includes(option) ? "text-white/72" : "text-[#8a8a8a]"}`}>
                            +$1.00
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {(isHatBuilderMode || mode === "catalog") && (
                  <div>
                    <label className="mb-3 block text-xs font-semibold uppercase tracking-[0.14em] text-[#6b6b6b]">
                      {mode === "catalog" ? "Order notes" : "Additional notes"}
                    </label>
                    <p className="mb-3 text-[11px] leading-5 text-[#8a8a8a]">
                      {mode === "catalog"
                        ? "Flag placements, patch ideas, hang tags, hem labels, packaging requests, or anything else we should build around."
                        : "Anything else to flag beyond your decoration notes? Tell us here."}
                    </p>
                    <textarea
                      value={additionalCallouts}
                      onChange={(event) => setAdditionalCallouts(event.target.value)}
                      placeholder={mode === "catalog"
                        ? "Optional notes on placements, rush needs, packaging, labels, or anything else to flag"
                        : "Optional notes, fabric requests, packaging ideas, or anything else to flag"}
                      rows={3}
                      className="w-full rounded-lg border border-[#081E6F]/15 px-3 py-3 text-sm font-normal text-[var(--og-blue)] placeholder:text-[#8a8a8a] focus:border-[var(--og-blue)] focus:outline-none"
                    />
                  </div>
                )}

                {mode !== "shop" && (
                  <div className="rounded-lg border border-dashed border-[#081E6F]/25 bg-[#F7F4ED] p-4">
                    <div className="flex flex-col gap-3">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#6b6b6b]">
                          Upload your logo
                        </p>
                        <p className="mt-1 text-[11px] text-[#8a8a8a]">
                          Vector files preferred: AI, PDF, EPS, SVG
                        </p>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <label className="flex min-h-11 cursor-pointer items-center justify-center rounded-lg bg-white px-4 text-sm font-semibold text-[var(--og-blue)] ring-1 ring-[#081E6F]/15 transition hover:ring-[var(--og-blue)]">
                          {logoFileName || "Upload artwork"}
                          <input
                            type="file"
                            className="sr-only"
                            accept=".ai,.pdf,.eps,.svg,.png,.jpg,.jpeg"
                            onChange={(event) => setLogoFileName(event.target.files?.[0]?.name ?? "")}
                          />
                        </label>
                        <button
                          type="button"
                          onClick={() => setNeedsArtworkHelp((current) => !current)}
                          className={`flex min-h-11 items-center justify-center gap-2 rounded-lg px-4 text-sm font-semibold transition ${
                            needsArtworkHelp
                              ? "bg-[#F7F4ED] text-[var(--og-blue)] ring-2 ring-[var(--og-blue)]"
                              : "bg-white text-[var(--og-blue)] ring-1 ring-[#081E6F]/15 hover:ring-[var(--og-orange)] hover:text-[var(--og-orange)]"
                          }`}
                        >
                          <span
                            className={`flex h-5 w-5 items-center justify-center rounded border text-[11px] leading-none ${
                              needsArtworkHelp
                                ? "border-[var(--og-blue)] bg-[var(--og-blue)] text-white"
                                : "border-[#081E6F]/18 bg-white text-transparent"
                            }`}
                          >
                            &#10003;
                          </span>
                          Need Artwork?
                        </button>
                      </div>
                      <p className="text-sm leading-6 text-[#4b4b4b]">
                        Not sure your artwork is right? Upload what you&apos;ve got, and we&apos;ll check it out for free.
                      </p>
                    </div>
                  </div>
                )}

                {isHatBuilderMode && (
                  <div className="rounded-lg border border-[#081E6F]/10 bg-white p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#6b6b6b]">
                      Do you want a sample?
                    </p>
                    <p className="mt-2 text-[11px] leading-5 text-[#8a8a8a]">
                      Hat samples are only made after a bulk order is placed and paid.
                    </p>
                    <div className="mt-4 grid gap-2 md:grid-cols-3">
                      {hatSampleOptions.map((option) => (
                        <button
                          key={option.id}
                          type="button"
                          onClick={() => setSampleType(option.id)}
                          className={`rounded-lg border p-3 text-left transition ${
                            sampleType === option.id
                              ? "border-[var(--og-blue)] bg-[var(--og-blue)] text-white"
                              : "border-[#081E6F]/15 bg-white text-[var(--og-blue)] hover:border-[var(--og-blue)]"
                          }`}
                        >
                          <span className="block text-sm font-semibold">{option.label}</span>
                          <span className={`mt-1 block text-[11px] leading-5 ${
                            sampleType === option.id ? "text-white/78" : "text-[#6b6b6b]"
                          }`}>
                            {option.description}
                          </span>
                          <span className={`mt-2 block text-[11px] font-semibold ${
                            sampleType === option.id ? "text-white/80" : "text-[#8a8a8a]"
                          }`}>
                            {option.feeLabel}
                          </span>
                        </button>
                      ))}
                    </div>

                    {sampleType !== "none" && (
                      <div className="mt-4">
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#6b6b6b]">
                            Do you want the sample by photo or shipped?
                          </p>
                          <div className="mt-3 grid gap-2 md:grid-cols-2">
                            {hatSampleDeliveryOptions.map((option) => (
                              <button
                                key={option.id}
                                type="button"
                                onClick={() => setSampleDelivery(option.id)}
                                className={`rounded-lg border p-3 text-left transition ${
                                  sampleDelivery === option.id
                                    ? "border-[var(--og-blue)] bg-[var(--og-blue)] text-white"
                                    : "border-[#081E6F]/15 bg-white text-[var(--og-blue)] hover:border-[var(--og-blue)]"
                                }`}
                              >
                                <span className="block text-sm font-semibold">{option.label}</span>
                                <span className={`mt-1 block text-[11px] leading-5 ${
                                  sampleDelivery === option.id ? "text-white/78" : "text-[#6b6b6b]"
                                }`}>
                                  {option.description}
                                </span>
                                <span className={`mt-2 block text-[11px] font-semibold ${
                                  sampleDelivery === option.id ? "text-white/80" : "text-[#8a8a8a]"
                                }`}>
                                  {option.feeLabel}
                                </span>
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>

              <div className="mt-5">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#6b6b6b]">
                  Included
                </p>
                <ul className="grid gap-2">
                  {includedByMode[mode].map((item) => (
                    <li
                      key={item}
                      className={`text-sm text-[#4b4b4b] ${
                        mode === "crafted"
                          ? "flex items-center justify-between gap-3 rounded-xl border border-[#0B32A0]/10 bg-[#FBF7F1] px-3 py-2.5"
                          : "flex items-center gap-2"
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-[var(--og-orange)]" />
                        {item}
                      </span>
                      {mode === "crafted" ? (
                        <span className="inline-flex shrink-0 rounded-full border border-[#2F7D32]/18 bg-[#E8F6EA] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#2F7D32]">
                          Included
                        </span>
                      ) : null}
                    </li>
                  ))}
                </ul>
              </div>

              {mode === "shop" && (
                <div className="mt-5 border-t border-[#081E6F]/10 pt-5">
                  <div className="divide-y divide-[#081E6F]/10">
                    {shopInfoSections.map((section, index) => (
                      <details
                        key={section.label}
                        id={section.label === "Fit guide" ? "fit-guide" : undefined}
                        className="group scroll-mt-28 py-3"
                        open={index === 0}
                      >
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--og-blue)]">
                          {section.label}
                          <span className="text-base leading-none text-[#8a8a8a] transition group-open:rotate-45">
                            +
                          </span>
                        </summary>
                        <p className="mt-3 text-sm leading-6 text-[#4b4b4b]">
                          {section.copy}
                        </p>
                      </details>
                    ))}
                  </div>
                </div>
              )}

            </div>
          </aside>

          {showLiveCalculator && (
            <aside className="lg:sticky lg:top-32 lg:self-start xl:col-start-3 xl:self-start">
              <div className="rounded-lg border border-[#081E6F]/12 bg-white p-5 shadow-[0_18px_55px_rgba(8,30,111,0.07)]">
                <div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8a8a8a]">
                      Live price summary
                    </p>
                  </div>
                </div>

                <div className="mt-5 space-y-3 text-sm">
                  {[
                    { label: "Units", value: qty.toLocaleString() },
                    ...(mode === "catalog"
                      ? [
                          { label: "Colors", value: selectedColorLabel },
                          { label: "Total quantity", value: `${qty.toLocaleString()} units` },
                          { label: "Size breakdown", value: apparelSizeBreakdownSummary || "Not assigned yet" },
                          { label: "Sizes", value: `${apparelSizeTotal.toLocaleString()} assigned` },
                          { label: "Front decoration", value: frontDecorationSummaryLabel },
                          { label: "Front of shirt", value: catalogFrontPlacementSummary },
                          { label: "Back of shirt", value: catalogBackPlacementSummary },
                          { label: "Side print", value: catalogSidePlacementSummary },
                          { label: "Print upgrades", value: catalogPrintAddOnSummary },
                          { label: "Packaging upgrades", value: catalogPackagingSummary },
                          { label: "Rush delivery", value: catalogRush ? "Yes" : "No" },
                          ...(showCatalogEmbroideryFields ? [{ label: "Embroidery finish", value: threadFinish === "matte" ? "Matte" : "Shiny" }] : []),
                          ...(showCatalogEmbroideryFields && embroideryColor.trim() ? [{ label: "Embroidery color", value: embroideryColor.trim() }] : []),
                          ...(needsArtworkHelp ? [{ label: "Artwork help", value: "Yes" }] : []),
                          ...(customDecoration.trim() && decoration === "other" ? [{ label: "Other decoration", value: customDecoration.trim() }] : []),
                          ...(additionalCallouts.trim() ? [{ label: "Order notes", value: additionalCallouts.trim() }] : []),
                        ]
                      : []),
                    ...(mode === "ready" && selectedReadyMadeStyle
                      ? [
                          { label: "Hat style", value: `${selectedReadyMadeStyle.id} ${selectedReadyMadeStyle.name}` },
                          { label: "Color", value: selectedColorLabel },
                          { label: "Blank details", value: `${selectedReadyMadeStyle.crown} · ${selectedReadyMadeStyle.closure}` },
                          { label: "Front decoration", value: frontDecorationSummaryLabel },
                          { label: "Embroidery thread finish", value: threadFinish === "matte" ? "Matte" : "Shiny" },
                          ...(embroideryColor.trim() ? [{ label: "Embroidery color", value: embroideryColor.trim() }] : []),
                          { label: "Back decoration", value: backDecoration === "embroidery" ? "Embroidery" : "None" },
                          { label: "Side decoration", value: sideDecoration === "embroidery" ? "Embroidery" : "None" },
                          ...(needsArtworkHelp ? [{ label: "Artwork help", value: "Yes" }] : []),
                          ...(customDecoration.trim() && decoration === "other" ? [{ label: "Other decoration", value: customDecoration.trim() }] : []),
                        ]
                      : []),
                    ...(isHatBuilderMode
                      ? [
                          { label: "Hat style", value: `${selectedHatStyle.model} ${selectedHatStyle.title}` },
                          { label: "Color", value: selectedColorLabel },
                          { label: "Fabric", value: [hatMaterial, washedFabric ? "Washed" : ""].filter(Boolean).join(" · ") },
                          { label: "Closure", value: closureSummaryLabel },
                          ...(!isBucketHatStyle ? [{ label: "Brim curve", value: hatBrimCurve }] : []),
                          { label: "Sample", value: sampleSummaryLabel },
                          { label: "Front decoration", value: frontDecorationSummaryLabel },
                          { label: "Embroidery thread finish", value: threadFinish === "matte" ? "Matte" : "Shiny" },
                          ...(embroideryColor.trim() ? [{ label: "Embroidery color", value: embroideryColor.trim() }] : []),
                          { label: "Back decoration", value: backDecoration === "embroidery" ? "Embroidery" : "None" },
                          { label: "Side decoration", value: sideDecoration === "embroidery" ? "Embroidery" : "None" },
                          { label: "Additional decorations", value: hatAdditionalDecorations.length > 0 ? hatAdditionalDecorations.join(", ") : "None" },
                          ...(needsArtworkHelp ? [{ label: "Artwork help", value: "Yes" }] : []),
                          ...(customDecoration.trim() && decoration === "other" ? [{ label: "Other decoration", value: customDecoration.trim() }] : []),
                          ...(additionalCallouts.trim() ? [{ label: "Additional notes", value: additionalCallouts.trim() }] : []),
                        ]
                      : []),
                    { label: "Base unit price", value: basePriceLabel },
                    ...(isHatBuilderMode && sampleType !== "none" ? [{ label: "Sample fees", value: sampleFeeLabel }] : []),
                    { label: "Selected options", value: selectedOptionsLabel },
                    { label: "Turnaround", value: turnAroundLabel },
                    ...(isHatBuilderMode ? [{ label: "Estimated delivery date", value: estimatedDeliveryShortLabel }] : []),
                  ].map((row) => (
                    <div key={row.label} className="grid grid-cols-[1fr_auto] items-baseline gap-4">
                      <span className="text-[#6b6b6b]">{row.label}</span>
                      <span className="text-right font-semibold text-[#171717]">{row.value}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-5 border-t border-[#081E6F]/10 pt-5">
                  <div className="mb-3 flex items-end justify-between gap-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8a8a8a]">
                      Unit price
                    </p>
                    <p className="text-xl font-semibold leading-none text-[var(--og-blue)]">
                      {unitPriceLabel}
                    </p>
                  </div>
                  <div className="flex items-end justify-between gap-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8a8a8a]">
                      Total
                    </p>
                    <p className="text-3xl font-semibold leading-none text-[var(--og-orange)]">
                      {totalPriceLabel}
                    </p>
                  </div>
                </div>

                {isCustomQuote ? (
                  <>
                    <a
                      href={questionsHref}
                      className="mt-5 flex min-h-12 w-full items-center justify-center rounded-lg bg-[var(--og-orange)] px-5 text-sm font-semibold uppercase tracking-[0.12em] text-white transition hover:-translate-y-0.5"
                    >
                      Request Custom Quote
                    </a>
                    <p className="mt-3 text-center text-xs leading-5 text-[#6b6b6b]">
                      We&apos;ll review your selections and come back with a custom quote for 5,000+ pieces.
                    </p>
                  </>
                ) : (
                  showBuilderSecondaryCta ? (
                    <>
                      <a
                        href={questionsHref}
                        className="mt-5 flex min-h-12 w-full items-center justify-center rounded-lg bg-[var(--og-orange)] px-5 text-sm font-semibold uppercase tracking-[0.12em] text-white transition hover:-translate-y-0.5"
                      >
                        {primaryCtaLabel}
                      </a>
                      <p className="mt-3 text-center text-xs leading-5 text-[#6b6b6b]">
                        Send us your build for review. Final quote is confirmed after review.
                      </p>
                    </>
                  ) : (
                    <button
                      type="button"
                      className="mt-5 flex min-h-12 w-full items-center justify-center rounded-lg bg-[var(--og-orange)] px-5 text-sm font-semibold uppercase tracking-[0.12em] text-white transition hover:-translate-y-0.5"
                    >
                      {primaryCtaLabel}
                    </button>
                  )
                )}
                {!showBuilderSecondaryCta || isCustomQuote ? (
                  <a
                    href={questionsHref}
                    className="mt-3 block text-center text-xs font-semibold text-[#777] underline-offset-4 transition hover:text-[var(--og-blue)] hover:underline"
                  >
                    Have Questions? Talk to our team.
                  </a>
                ) : null}
              </div>
            </aside>
          )}
        </div>
      </section>

      <section className="border-t border-[#1C1C1C]/8 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[90rem]">
          <h2 className="mb-6 text-xs font-normal uppercase tracking-[0.2em] text-[#1C1C1C]/40">
            You may also like
          </h2>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {relatedProducts.map((product) => (
              <a key={product.name} href={product.href} className="group flex flex-col gap-1.5">
                <div className="relative aspect-square overflow-hidden rounded-lg border border-[#1C1C1C]/8 bg-[#F5F0E8] transition group-hover:border-[var(--og-blue)]">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(min-width: 1024px) 18vw, (min-width: 640px) 30vw, 45vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <p className="text-sm font-medium text-[#1C1C1C]">{product.name}</p>
                <p className="text-sm text-[#1C1C1C]/50">{product.price}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {lightboxItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#F3EFE7]/88 p-6 backdrop-blur-sm sm:p-8"
          onClick={() => setLightboxIndex(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`${lightboxItem.label} photo preview`}
        >
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              setLightboxIndex(null);
            }}
            className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-white text-xl font-semibold text-[var(--og-blue)] shadow-sm sm:right-8 sm:top-8"
            aria-label="Close photo preview"
          >
            &times;
          </button>
          <div className="relative h-[78vh] w-full max-w-5xl" onClick={(event) => event.stopPropagation()}>
            <Image
              src={lightboxItem.src}
              alt={lightboxItem.alt}
              fill
              sizes="90vw"
              className="object-contain"
            />
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                showPreviousImage();
              }}
              className="absolute left-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-xl font-semibold text-[var(--og-blue)] shadow-sm md:-left-14"
              aria-label="Previous photo"
            >
              &lt;
            </button>
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                showNextImage();
              }}
              className="absolute right-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-xl font-semibold text-[var(--og-blue)] shadow-sm md:-right-14"
              aria-label="Next photo"
            >
              &gt;
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
