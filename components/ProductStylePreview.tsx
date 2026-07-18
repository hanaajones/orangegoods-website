"use client";

import { hatStyles } from "@/app/goods/hats/style-data";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

type ModeKey = "ready" | "catalog" | "shop" | "build" | "crafted";
type ApparelSize = "XS" | "S" | "M" | "L" | "XL" | "2XL" | "3XL";

type ProductStylePreviewProps = {
  initialMode?: ModeKey;
  lockedMode?: ModeKey;
  pageKicker?: string;
  pageTitle?: string;
  pageDescription?: string;
};

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
    title: "Stock Cap",
    description: "A proven blank with front embroidery included, fast turnaround, and enough options to make it feel intentional.",
    cta: "Proceed to Checkout",
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
    cta: "Start Your Order",
    unitLabel: "starting at",
    unitPrice: 12.5,
    timeline: "6-8 weeks",
  },
  crafted: {
    label: "OG Crafted Hats",
    eyebrow: "OG Crafted · Hats",
    title: "OG Crafted Hats",
    description: "A dedicated OG Crafted hats page with guided decisions for silhouette, fabric, labels, seam tape, patches, and custom details.",
    cta: "Start Your Order",
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

const shopSizeOptions = ["S/M", "L/XL", "One size"];
const apparelSizeOptions: ApparelSize[] = ["XS", "S", "M", "L", "XL", "2XL", "3XL"];
const initialApparelSizeBreakdown: Record<ApparelSize, number> = {
  XS: 10,
  S: 35,
  M: 80,
  L: 70,
  XL: 25,
  "2XL": 20,
  "3XL": 10,
};

const standardQtyMarks = [
  { value: 100, label: "100", tick: false },
  { value: 250, label: "250", tick: true },
  { value: 500, label: "500", tick: true },
  { value: 750, label: "750", tick: true },
  { value: 1000, label: "1,000", tick: false },
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

const defaultMedia = [
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

const craftedHatMedia = [
  {
    src: "/images/gallery/headwear-full-custom-verve-larrea-hat-038.jpg",
    alt: "Full custom Verve hat lineup",
    label: "Program",
  },
  {
    src: "/images/gallery/headwear-customize-detail-mg-2672.jpg",
    alt: "Exploded full-custom hat detail",
    label: "Detail",
  },
  {
    src: "/images/gallery/headwear-fabric-swatches-mg-9430.jpg",
    alt: "Fabric swatches for OG Crafted hats",
    label: "Fabric",
  },
  {
    src: "/images/gallery/headwear-interior-label-img-7638.jpg",
    alt: "Interior label and seam tape detail",
    label: "Inside",
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
  catalog: ["Blank garment", "Standard print", "Art check", "Tiered pricing", "Quote review"],
  shop: ["Finished product", "OG packaging", "Fast fulfillment", "Easy checkout"],
  build: ["Custom silhouette", "Fabric selection", "Front decoration", "Interior label", "Tech pack"],
  crafted: ["Custom silhouette", "Fabric selection", "Front decoration", "Interior label", "Tech pack"],
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
] as const;

const hatClosureOptions = [
  "Snapback",
  "Strapback + clasp",
  "Strapback + slider",
  "Velcro",
  "Clip closure",
  "Leather clasp",
];

const additionalLocations = [
  { label: "Back embroidery", price: 4.5 },
  { label: "Side embroidery", price: 4.5 },
];

const decorationOptions = [
  {
    id: "embroidery",
    label: "Embroidery",
    sub: "2-3 weeks · included",
    image: "/images/product/hats/og100-dad-detail.jpg",
    imageAlt: "Flat embroidery detail",
  },
  {
    id: "embroideredPatch",
    label: "Embroidered Patch",
    sub: "4-6 weeks · included",
    image: "/images/gallery/patches-og-oval-quality-logo-dscf2869.jpg",
    imageAlt: "Embroidered patch detail",
  },
  {
    id: "wovenPatch",
    label: "Woven Patch",
    sub: "4-6 weeks · included",
    image: "/images/gallery/headwear-woven-patch-mg-6859.jpg",
    imageAlt: "Woven patch detail",
  },
] as const;

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

export function ProductStylePreview({
  initialMode = "ready",
  lockedMode,
  pageKicker = "Product page system",
  pageTitle = "Unified Product Page Preview",
  pageDescription = "One shared layout for ready-made hats, ready-made apparel, catalog products, shop items, and Build Online.",
}: ProductStylePreviewProps) {
  const searchParams = useSearchParams();
  const [mode, setMode] = useState<ModeKey>(lockedMode ?? initialMode);
  const [color, setColor] = useState(colorOptions[0]);
  const [shopSize, setShopSize] = useState(shopSizeOptions[2]);
  const [apparelSizeBreakdown, setApparelSizeBreakdown] = useState<Record<ApparelSize, number>>(initialApparelSizeBreakdown);
  const [qty, setQty] = useState(250);
  const [qtyInput, setQtyInput] = useState("250");
  const [decoration, setDecoration] = useState<"embroidery" | "embroideredPatch" | "wovenPatch">("embroidery");
  const [embroideryUpgrade, setEmbroideryUpgrade] = useState<"none" | "puff" | "chain">("none");
  const [selectedLocations, setSelectedLocations] = useState<string[]>(["Back embroidery"]);
  const [hatStyleSlug, setHatStyleSlug] = useState(hatStyles[0].slug);
  const [hatMaterial, setHatMaterial] = useState(hatMaterialOptions[0]);
  const [washedFabric, setWashedFabric] = useState(false);
  const [hatColorCallout, setHatColorCallout] = useState("");
  const [hatClosure, setHatClosure] = useState(hatClosureOptions[0]);
  const [backDecoration, setBackDecoration] = useState<"none" | "embroidery">("none");
  const [sideDecoration, setSideDecoration] = useState<"none" | "embroidery">("none");
  const [hatAdditionalDecorations, setHatAdditionalDecorations] = useState<string[]>([]);
  const [threadFinish, setThreadFinish] = useState<"matte" | "shiny">("matte");
  const [embroideryColor, setEmbroideryColor] = useState("");
  const [additionalCallouts, setAdditionalCallouts] = useState("");
  const [needsArtworkHelp, setNeedsArtworkHelp] = useState(false);
  const [logoFileName, setLogoFileName] = useState("");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const activeMode = modes[mode];
  const isHatBuilderMode = mode === "build" || mode === "crafted";
  const showBuilderSecondaryCta = mode === "build" || mode === "crafted";
  const selectedHatStyle = hatStyles.find((style) => style.slug === hatStyleSlug) ?? hatStyles[0];
  const isBucketHatStyle = selectedHatStyle.title === "Bucket Hat";
  const showDecorationIncludedPill = mode === "ready" || mode === "crafted";
  const showLiveCalculator = mode !== "shop";
  const activeMedia = mode === "crafted" ? craftedHatMedia : defaultMedia;
  const useSingleColumnMedia = mode === "crafted";
  const maxQty = isHatBuilderMode ? 5000 : 1000;
  const activeQtyMarks = isHatBuilderMode ? buildQtyMarks : standardQtyMarks;
  const qtyTierIndex = activeQtyMarks.reduce((bestIndex, mark, index) => (
    qty >= mark.value ? index : bestIndex
  ), 0);
  const qtySliderPct = activeQtyMarks.length <= 1
    ? 0
    : (qtyTierIndex / (activeQtyMarks.length - 1)) * 100;
  const isCustomQuote = isHatBuilderMode && qty >= 5000;
  const apparelSizeTotal = Object.values(apparelSizeBreakdown).reduce((sum, value) => sum + value, 0);
  const additionalLocationTotal = useMemo(
    () => additionalLocations
      .filter((location) => selectedLocations.includes(location.label))
      .reduce((total, location) => total + location.price, 0),
    [selectedLocations]
  );
  const hatExtraBrandingTotal = (backDecoration === "embroidery" ? 1 : 0) + (sideDecoration === "embroidery" ? 1 : 0);
  const locationTotal = isHatBuilderMode ? hatExtraBrandingTotal : additionalLocationTotal;
  const embroideryUpgradePrice = mode !== "shop" && decoration === "embroidery" && embroideryUpgrade !== "none" ? 1 : 0;
  const washedFabricPrice = isHatBuilderMode && washedFabric ? 0.5 : 0;
  const hatAdditionalDecorationPrice = isHatBuilderMode ? hatAdditionalDecorations.length : 0;
  const baseUnitPrice = baseUnitPriceForQty(activeMode.unitPrice);
  const unitPrice = baseUnitPrice + (mode === "shop" ? 0 : locationTotal + embroideryUpgradePrice + washedFabricPrice + hatAdditionalDecorationPrice);
  const total = mode === "shop" ? unitPrice : unitPrice * qty;
  const addOnUnitPrice = mode === "shop" ? 0 : locationTotal + embroideryUpgradePrice + washedFabricPrice + hatAdditionalDecorationPrice;
  const unitName = mode === "catalog" ? "tee" : mode === "shop" ? "item" : "hat";
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
  const availableModes = lockedMode ? [lockedMode] : (Object.keys(modes) as ModeKey[]);
  const requestedHatStyleSlug = searchParams.get("hatStyle");
  const requestedQty = searchParams.get("qty");
  const selectedColorLabel = isHatBuilderMode ? (hatColorCallout.trim() || "Not specified yet") : color.name;
  const estimatedDeliveryStart = addDays(new Date(), 58);
  const estimatedDeliveryEnd = addDays(new Date(), 65);
  const estimatedDeliveryLabel = `${formatLongDate(estimatedDeliveryStart)} - ${formatLongDate(estimatedDeliveryEnd)}`;
  const estimatedDeliveryShortLabel = `${formatShortDate(estimatedDeliveryStart)} - ${formatShortDate(estimatedDeliveryEnd)}`;
  const projectSummary = [
    `Product: ${activeMode.title}`,
    `Program: ${activeMode.label}`,
    isHatBuilderMode ? `Hat style: ${selectedHatStyle.model} ${selectedHatStyle.title}` : "",
    `Quantity: ${qty.toLocaleString()}`,
    `Tier: ${quantityTierLabel()}`,
    `Color: ${selectedColorLabel}`,
    isHatBuilderMode ? `Material: ${[hatMaterial, washedFabric ? "Washed fabric" : ""].filter(Boolean).join(" · ")}` : "",
    isHatBuilderMode ? `Closure: ${isBucketHatStyle ? "None" : hatClosure}` : "",
    `Front decoration: ${decorationOptions.find((option) => option.id === decoration)?.label ?? decoration}`,
    isHatBuilderMode ? `Back decoration: ${backDecoration === "embroidery" ? "Embroidery" : "None"}` : "",
    isHatBuilderMode ? `Side decoration: ${sideDecoration === "embroidery" ? "Embroidery" : "None"}` : "",
    isHatBuilderMode && hatAdditionalDecorations.length > 0 ? `Additional decorations: ${hatAdditionalDecorations.join(", ")}` : "",
    `Embroidery thread finish: ${threadFinish}`,
    embroideryColor ? `Embroidery color: ${embroideryColor}` : "",
    needsArtworkHelp ? "Artwork help: Yes" : "",
    additionalCallouts ? `Additional callouts: ${additionalCallouts}` : "",
    `Estimated unit price: ${isCustomQuote ? "Custom quote" : `$${unitPrice.toFixed(2)}`}`,
    `Estimated total: ${isCustomQuote ? "Custom quote" : `$${total.toFixed(0)}`}`,
    logoFileName ? `Logo file: ${logoFileName}` : "",
  ]
    .filter(Boolean)
    .join("\n");
  const questionsHref = `/contact?${new URLSearchParams({
    intent: "product-question",
    product: activeMode.title,
    mode: activeMode.label,
    hatStyle: isHatBuilderMode ? `${selectedHatStyle.model} ${selectedHatStyle.title}` : "",
    color: selectedColorLabel,
    size: mode === "shop" ? shopSize : "",
    sizeBreakdown: mode === "catalog" ? apparelSizeOptions.map((size) => `${size}:${apparelSizeBreakdown[size]}`).join(", ") : "",
    qty: String(qty),
    tier: quantityTierLabel(),
    decoration,
    material: isHatBuilderMode ? [hatMaterial, washedFabric ? "Washed fabric" : ""].filter(Boolean).join(" · ") : "",
    closure: isHatBuilderMode ? hatClosure : "",
    backDecoration: isHatBuilderMode ? backDecoration : "",
    sideDecoration: isHatBuilderMode ? sideDecoration : "",
    additionalDecorations: isHatBuilderMode ? hatAdditionalDecorations.join(", ") : "",
    embroideryUpgrade,
    additionalLocations: isHatBuilderMode ? "" : selectedLocations.join(", "),
    threadFinish,
    embroideryColor,
    additionalCallouts,
    needsArtworkHelp: needsArtworkHelp ? "Yes" : "",
    timeline: timelineLabel(),
    estimatedUnitPrice: isCustomQuote ? "Custom quote" : `$${unitPrice.toFixed(2)}`,
    estimatedTotal: isCustomQuote ? "Custom quote" : `$${total.toFixed(0)}`,
    logoFile: logoFileName,
    projectSummary,
  }).toString()}`;

  function toggleLocation(label: string) {
    setSelectedLocations((current) =>
      current.includes(label)
        ? current.filter((item) => item !== label)
        : [...current, label]
    );
  }

  function toggleHatAdditionalDecoration(label: string) {
    setHatAdditionalDecorations((current) =>
      current.includes(label)
        ? current.filter((item) => item !== label)
        : [...current, label]
    );
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
    if (!isHatBuilderMode) return;

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
  }, [hatClosure, isBucketHatStyle, isHatBuilderMode, selectedHatStyle.closure]);

  useEffect(() => {
    if (lockedMode && mode !== lockedMode) {
      setMode(lockedMode);
    }
  }, [lockedMode, mode]);

  useEffect(() => {
    if (!isHatBuilderMode || !requestedHatStyleSlug) return;

    const requestedStyle = hatStyles.find((style) => style.slug === requestedHatStyleSlug);
    if (requestedStyle && requestedStyle.slug !== hatStyleSlug) {
      setHatStyleSlug(requestedStyle.slug);
    }
  }, [hatStyleSlug, isHatBuilderMode, requestedHatStyleSlug]);

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

  function handleQtyInput(value: string) {
    setQtyInput(value);
    const nextQty = Number(value);
    if (Number.isFinite(nextQty) && nextQty >= 100 && nextQty <= maxQty) {
      setQty(nextQty);
    }
  }

  function handleQtySlider(value: string) {
    const nextQty = activeQtyMarks[Number(value)]?.value ?? activeQtyMarks[0].value;
    setQty(nextQty);
    setQtyInput(String(nextQty));
  }

  function quantityTierLabel() {
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
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-4 py-5 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--og-orange)]">
                {pageKicker}
              </p>
              <h1 className="mt-2 text-3xl leading-none text-[var(--og-blue)] md:text-5xl">
                {pageTitle}
              </h1>
            </div>
            <p className="max-w-xl text-sm leading-6 text-[#4b4b4b]">
              {pageDescription}
            </p>
          </div>

          {lockedMode ? null : (
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
                {modes[key].label}
              </button>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="px-4 py-8 sm:px-6 lg:px-8">
        <div
          className={`mx-auto grid max-w-[90rem] gap-8 ${
            showLiveCalculator
              ? "xl:grid-cols-[minmax(0,1fr)_minmax(360px,420px)_minmax(300px,340px)]"
              : "lg:grid-cols-[minmax(0,1fr)_minmax(360px,420px)]"
          }`}
        >
          <div className="space-y-8">
            <div className={useSingleColumnMedia ? "grid gap-3" : "grid gap-3 md:grid-cols-2"}>
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
                    className="object-cover transition duration-500 group-hover:scale-[1.02]"
                    priority={index === 0}
                  />
                </button>
              ))}
            </div>

            {isHatBuilderMode ? (
              <div className="rounded-lg border border-[#081E6F]/10 bg-white p-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#6b6b6b]">
                  Turnaround
                </p>
                <div className="relative mt-4 space-y-3 before:absolute before:bottom-3 before:left-[9px] before:top-3 before:w-px before:bg-[#0B32A0]/18">
                  {[
                    { label: "Tech pack", value: "2 days" },
                    { label: "Sample", value: "2 weeks" },
                    { label: "Production", value: "5 weeks" },
                    { label: "Shipping", value: "1 to 2 weeks" },
                  ].map((item) => (
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
              <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {[
                  { title: "Build your order", detail: "You are here now." },
                  { title: "We build your tech pack", detail: "Every detail gets mapped out." },
                  { title: "You approve the details", detail: "Nothing moves forward without sign-off." },
                  { title: "We produce and deliver", detail: "Factory production starts after approval, then your hats arrive ready to go." },
                ].map((step, index) => (
                  <div key={step.title} className="rounded-lg border border-[#081E6F]/12 bg-[#F7F4ED] p-4 text-[var(--og-blue)] shadow-[0_12px_35px_rgba(8,30,111,0.06)]">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--og-orange)]">
                      Step {index + 1}
                    </p>
                    <p className="mt-3 text-lg font-semibold">{step.title}</p>
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
                <span>{activeMode.label}</span>
                <span>/</span>
                <span className="font-semibold text-[var(--og-blue)]">{activeMode.title}</span>
              </nav>

              <div className="mt-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--og-orange)]">
                  {activeMode.eyebrow}
                </p>
                <h2 className="mt-2 text-4xl leading-none text-[var(--og-blue)]">
                  {activeMode.title}
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
                  <div>
                    <div className="mb-3 flex items-center justify-between">
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#6b6b6b]">
                        Color
                      </p>
                      <p className="text-sm font-semibold text-[var(--og-blue)]">{color.name}</p>
                    </div>
                    <div className="flex gap-2">
                      {colorOptions.map((option) => (
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
                  </div>
                )}

                {isHatBuilderMode && (
                  <div>
                    <label className="mb-3 block text-xs font-semibold uppercase tracking-[0.14em] text-[#6b6b6b]">
                      Hat style
                    </label>
                    <select
                      value={hatStyleSlug}
                      onChange={(event) => setHatStyleSlug(event.target.value)}
                      className="h-11 w-full rounded-lg border border-[#081E6F]/15 bg-white px-3 text-sm font-semibold text-[var(--og-blue)] focus:border-[var(--og-blue)] focus:outline-none"
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

                {mode !== "shop" && (
                  <div>
                    <div className="mb-3 flex items-center justify-between gap-3">
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#6b6b6b]">
                        Quantity
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
                        className="pointer-events-none absolute top-0 z-10 transition-all duration-300 ease-out"
                        style={{
                          left: `${qtySliderPct}%`,
                          transform: qtyTierIndex === 0
                            ? "translateX(0)"
                            : qtyTierIndex === activeQtyMarks.length - 1
                              ? "translateX(-100%)"
                              : "translateX(-50%)",
                        }}
                      >
                        <span className="inline-flex min-h-7 whitespace-nowrap rounded-full bg-[var(--og-blue)] px-3 py-1 text-[11px] font-semibold text-white shadow-[0_10px_24px_rgba(8,30,111,0.16)]">
                          Tier {quantityTierLabel()} · {basePriceLabel}
                        </span>
                      </div>
                      <input
                        type="range"
                        min={0}
                        max={Math.max(activeQtyMarks.length - 1, 0)}
                        step={1}
                        value={qtyTierIndex}
                        onChange={(event) => handleQtySlider(event.target.value)}
                        className="w-full"
                        style={{ accentColor: "#0B32A0" }}
                      />
                      <div className="pointer-events-none mt-1.5 flex items-start justify-between gap-2 px-1">
                        {activeQtyMarks.map(({ value, label, tick }) => {
                          return (
                            <div key={value} className="flex min-w-0 flex-1 flex-col items-center">
                              <div className={`h-1.5 w-px ${tick ? "bg-[#081E6F]/30" : "bg-transparent"}`} />
                              <span className={`mt-0.5 text-[10px] transition ${
                                qtyTierIndex === activeQtyMarks.findIndex((mark) => mark.value === value)
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

                {isHatBuilderMode && (
                  <div>
                    <label className="mb-3 block text-xs font-semibold uppercase tracking-[0.14em] text-[#6b6b6b]">
                      Type the color or fabrics
                    </label>
                    <input
                      type="text"
                      value={hatColorCallout}
                      onChange={(event) => setHatColorCallout(event.target.value)}
                      placeholder="e.g. washed black canvas, natural twill, cream / forest combo"
                      className="h-11 w-full rounded-lg border border-[#081E6F]/15 px-3 text-sm font-semibold text-[var(--og-blue)] placeholder:text-[#8a8a8a] focus:border-[var(--og-blue)] focus:outline-none"
                    />
                    <p className="mt-2 text-[11px] leading-5 text-[#8a8a8a]">
                      Type the color or fabrics you have in mind.
                    </p>
                    <a
                      href="/goods/hats/fabric"
                      target="_blank"
                      rel="noreferrer"
                      className="mt-3 inline-flex text-xs font-semibold uppercase tracking-[0.12em] text-[var(--og-blue)] underline-offset-4 transition hover:text-[var(--og-orange)] hover:underline"
                    >
                      See fabric and color options
                    </a>
                  </div>
                )}

                {mode === "catalog" && (
                  <div>
                    <div className="mb-3 flex items-center justify-between gap-3">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#6b6b6b]">
                          Size breakdown
                        </p>
                        <p className="mt-1 text-[11px] text-[#8a8a8a]">
                          Add quantities by size. Example: 25 XL.
                        </p>
                      </div>
                      <p className="shrink-0 text-xs font-semibold text-[var(--og-blue)]">
                        {qty.toLocaleString()} units
                      </p>
                    </div>
                    <div className="flex gap-2 overflow-x-auto pb-1">
                      {apparelSizeOptions.map((size) => (
                        <label
                          key={size}
                          className="flex min-h-10 min-w-[5.25rem] shrink-0 items-center gap-2 rounded-lg border border-[#081E6F]/10 bg-white px-2.5 py-1.5 transition focus-within:border-[var(--og-blue)]"
                        >
                          <span className="w-7 text-[11px] font-semibold uppercase tracking-[0.08em] text-[var(--og-blue)]">
                            {size}
                          </span>
                          <input
                            type="number"
                            min={0}
                            step={1}
                            value={apparelSizeBreakdown[size]}
                            onChange={(event) => updateApparelSize(size, event.target.value)}
                            className="h-7 w-10 rounded-md border border-[#081E6F]/12 px-1 text-center text-xs font-semibold text-[var(--og-blue)] focus:border-[var(--og-blue)] focus:outline-none"
                            aria-label={`${size} quantity`}
                          />
                        </label>
                      ))}
                    </div>
                    <p className="mt-2 text-xs leading-5 text-[#8a8a8a]">
                      Updating a size quantity updates the total units and slider.
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
                    <div className="grid gap-2">
                      {decorationOptions.map((option) => (
                        <button
                          key={option.id}
                          type="button"
                          onClick={() => setDecoration(option.id)}
                          className={`rounded-lg border p-3 text-left transition ${
                            decoration === option.id
                              ? "border-[var(--og-blue)] bg-[#F7F4ED] text-[var(--og-blue)]"
                              : "border-[#081E6F]/15 bg-white text-[var(--og-blue)] hover:border-[var(--og-blue)]"
                          }`}
                        >
                          <span className="flex items-center gap-3">
                            <span className="relative h-14 w-14 shrink-0 overflow-hidden rounded-md bg-[#F7F4ED]">
                              <Image
                                src={option.image}
                                alt={option.imageAlt}
                                fill
                                sizes="56px"
                                className="object-cover transition duration-300 group-hover:scale-[1.04]"
                              />
                            </span>
                            <span className="min-w-0">
                              <span className="block text-xs font-semibold uppercase tracking-[0.12em]">
                                {option.label}
                              </span>
                              <span className="mt-1 block text-[11px] text-[#8a8a8a]">
                                {showDecorationIncludedPill
                                  ? (option.id === "embroidery" ? activeMode.timeline : option.sub.replace(" · included", ""))
                                  : (option.id === "embroidery" ? `${activeMode.timeline} · included` : option.sub)}
                              </span>
                            </span>
                          </span>
                        </button>
                      ))}
                    </div>
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

                {isHatBuilderMode && (
                  <div>
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#6b6b6b]">
                      Material
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
                  </div>
                )}

                {isHatBuilderMode && (
                  <div>
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#6b6b6b]">
                      Closure
                    </p>
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
                            className={`min-h-10 rounded-lg border px-3 text-sm font-semibold transition ${
                              hatClosure === option
                                ? "border-[var(--og-blue)] bg-[var(--og-blue)] text-white"
                                : "border-[#081E6F]/15 bg-white text-[var(--og-blue)] hover:border-[var(--og-blue)]"
                            }`}
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {mode !== "shop" && decoration === "embroidery" && (
                  <div>
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#6b6b6b]">
                      Embroidery upgrade
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      {([
                        { id: "puff", label: "Puff Embroidery" },
                        { id: "chain", label: "Chain Stitch" },
                      ] as const).map((option) => (
                        <button
                          key={option.id}
                          type="button"
                          onClick={() => setEmbroideryUpgrade(embroideryUpgrade === option.id ? "none" : option.id)}
                          className={`rounded-lg border p-3 text-left transition ${
                            embroideryUpgrade === option.id
                              ? "border-[var(--og-blue)] bg-[#F7F4ED] text-[var(--og-blue)]"
                              : "border-[#081E6F]/15 bg-white text-[var(--og-blue)] hover:border-[var(--og-blue)]"
                          }`}
                        >
                          <span className="block text-xs font-semibold">{option.label}</span>
                          <span className="mt-1 block text-[11px] text-[#8a8a8a]">+$1.00</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {isHatBuilderMode && (
                  <div>
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#6b6b6b]">
                      Back decoration
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      {([
                        { id: "none", label: "None" },
                        { id: "embroidery", label: "Embroidery +$1.00" },
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

                {isHatBuilderMode && (
                  <div>
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#6b6b6b]">
                      Side decoration
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      {([
                        { id: "none", label: "None" },
                        { id: "embroidery", label: "Embroidery +$1.00" },
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

                {mode !== "shop" && !isHatBuilderMode && (
                  <div>
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#6b6b6b]">
                      Additional locations
                    </p>
                    <div className="space-y-2">
                      {additionalLocations.map((location) => (
                        <label
                          key={location.label}
                          className="flex min-h-12 cursor-pointer items-center justify-between rounded-lg border border-[#081E6F]/10 px-3 transition hover:border-[var(--og-blue)]"
                        >
                          <span className="flex items-center gap-3 text-sm font-medium text-[var(--og-blue)]">
                            <input
                              type="checkbox"
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

                {mode !== "shop" && (
                  <div>
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#6b6b6b]">
                      Embroidery thread finish
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

                {mode !== "shop" && (
                  <div>
                    <label className="mb-3 block text-xs font-semibold uppercase tracking-[0.14em] text-[#6b6b6b]">
                      Embroidery color
                    </label>
                    <input
                      type="text"
                      value={embroideryColor}
                      onChange={(event) => setEmbroideryColor(event.target.value)}
                      placeholder="e.g. Ivory, PMS 165, tonal navy"
                      className="h-11 w-full rounded-lg border border-[#081E6F]/15 px-3 text-sm font-semibold text-[var(--og-blue)] placeholder:text-[#8a8a8a] focus:border-[var(--og-blue)] focus:outline-none"
                    />
                  </div>
                )}

                {isHatBuilderMode && (
                  <div>
                    <label className="mb-3 block text-xs font-semibold uppercase tracking-[0.14em] text-[#6b6b6b]">
                      Additional callouts
                    </label>
                    <p className="mb-3 text-[11px] leading-5 text-[#8a8a8a]">
                      Want something specific that you don&apos;t see here? Let us know.
                    </p>
                    <textarea
                      value={additionalCallouts}
                      onChange={(event) => setAdditionalCallouts(event.target.value)}
                      placeholder="Optional notes, fabric requests, trim ideas, or anything else to flag"
                      rows={3}
                      className="w-full rounded-lg border border-[#081E6F]/15 px-3 py-3 text-sm font-semibold text-[var(--og-blue)] placeholder:text-[#8a8a8a] focus:border-[var(--og-blue)] focus:outline-none"
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
              </div>

              <div className="mt-5 border-t border-[#081E6F]/10 pt-5">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#6b6b6b]">
                  Included
                </p>
                <ul className="grid gap-2">
                  {includedByMode[mode].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-[#4b4b4b]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[var(--og-orange)]" />
                      {item}
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
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8a8a8a]">
                      Live price summary
                    </p>
                    <p className="mt-1 text-sm leading-6 text-[#4b4b4b]">
                      Updates as the product options change.
                    </p>
                  </div>
                  <p className="rounded-full bg-[#F7F4ED] px-3 py-1 text-xs font-semibold text-[var(--og-blue)]">
                    {quantityTierLabel()}
                  </p>
                </div>

                <div className="mt-5 space-y-3 text-sm">
                  {[
                    { label: "Units", value: qty.toLocaleString() },
                    ...(mode === "catalog" ? [{ label: "Sizes", value: `${apparelSizeTotal.toLocaleString()} assigned` }] : []),
                    ...(isHatBuilderMode
                      ? [
                          { label: "Hat style", value: `${selectedHatStyle.model} ${selectedHatStyle.title}` },
                          { label: "Color", value: selectedColorLabel },
                          { label: "Material", value: [hatMaterial, washedFabric ? "Washed" : ""].filter(Boolean).join(" · ") },
                          { label: "Closure", value: isBucketHatStyle ? "None" : hatClosure },
                          { label: "Back decoration", value: backDecoration === "embroidery" ? "Embroidery" : "None" },
                          { label: "Side decoration", value: sideDecoration === "embroidery" ? "Embroidery" : "None" },
                          { label: "Additional decorations", value: hatAdditionalDecorations.length > 0 ? hatAdditionalDecorations.join(", ") : "None" },
                          ...(needsArtworkHelp ? [{ label: "Artwork help", value: "Yes" }] : []),
                          ...(additionalCallouts.trim() ? [{ label: "Additional callouts", value: additionalCallouts.trim() }] : []),
                        ]
                      : []),
                    { label: "Base unit price", value: basePriceLabel },
                    { label: "Selected options", value: selectedOptionsLabel },
                    { label: "Turnaround", value: turnAroundLabel },
                    ...(isHatBuilderMode ? [{ label: "Estimated delivery date", value: estimatedDeliveryShortLabel }] : []),
                  ].map((row) => (
                    <div key={row.label} className="grid grid-cols-[1fr_auto] items-baseline gap-4">
                      <span className="text-[#6b6b6b]">{row.label}</span>
                      <span className="text-right font-semibold text-[var(--og-blue)]">{row.value}</span>
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

                <button
                  type="button"
                  className="mt-5 flex min-h-12 w-full items-center justify-center rounded-lg bg-[var(--og-orange)] px-5 text-sm font-semibold uppercase tracking-[0.12em] text-white transition hover:-translate-y-0.5"
                >
                  {activeMode.cta}
                </button>
                {showBuilderSecondaryCta ? (
                  <>
                    <a
                      href={questionsHref}
                      className="mt-3 flex min-h-12 w-full items-center justify-center rounded-lg border border-[var(--og-blue)] bg-white px-5 text-center text-sm font-semibold uppercase tracking-[0.12em] text-[var(--og-blue)] transition hover:-translate-y-0.5 hover:bg-[#f5f7ff]"
                    >
                      Build This with Our Team
                    </a>
                    <p className="mt-3 text-center text-xs leading-5 text-[#6b6b6b]">
                      Before anything goes to production, we&apos;ll build your tech pack and get your approval before sending off to the factory.
                    </p>
                  </>
                ) : (
                  <a
                    href={questionsHref}
                    className="mt-3 block text-center text-xs font-semibold text-[#777] underline-offset-4 transition hover:text-[var(--og-blue)] hover:underline"
                  >
                    Have Questions? Talk to our team.
                  </a>
                )}
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
