"use client";

import Image from "next/image";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import { CustomizerBreadcrumbs } from "@/components/CustomizerBreadcrumbs";
import {
  CustomizerPageHeader,
  immersiveCustomizerGhostLinkClass,
  immersiveCustomizerHelperTextClass,
  immersiveCustomizerInsetPanelClass,
  immersiveCustomizerLabelTextClass,
  immersiveCustomizerProcessCardClass,
  immersiveCustomizerSecondarySelectedOptionClass,
  immersiveCustomizerShellCardClass,
  immersiveCustomizerSummaryLabelClass,
  immersiveCustomizerSummaryValueClass,
  immersiveCustomizerUnselectedOptionClass,
  MasterCustomizerShell,
} from "@/components/MasterCustomizerShell";
import { buildCustomizerNavigation, getCustomizerProductionPathLabel } from "@/lib/customizer-navigation";
import { BEANIE_STYLES, getBeanieStyleBySlug } from "@/lib/beanie-styles";
import { addProjectCartItem, getProjectCartItem } from "@/lib/project-cart";
import { QUICK_TURN_FREE_SHIPPING_LABEL } from "@/lib/quick-turn-shipping";

const QUANTITY_OPTIONS = [100, 250, 500, 1000];
const shellCardClass = immersiveCustomizerShellCardClass;
const processCardClass = immersiveCustomizerProcessCardClass;
const insetPanelClass = immersiveCustomizerInsetPanelClass;
const labelTextClass = immersiveCustomizerLabelTextClass;
const helperTextClass = immersiveCustomizerHelperTextClass;
const summaryLabelClass = immersiveCustomizerSummaryLabelClass;
const summaryValueClass = immersiveCustomizerSummaryValueClass;
const blueSelectedOptionClass = immersiveCustomizerSecondarySelectedOptionClass;
const unselectedOptionClass = immersiveCustomizerUnselectedOptionClass;
const selectArrowSvg = `url("data:image/svg+xml,${encodeURIComponent(
  "<svg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 20 20' fill='none'><path d='M5 7.5L10 12.5L15 7.5' stroke='%230B32A0' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'/></svg>"
)}")`;

type BeanieBuilderPreviewProps = {
  lockedStyleSlug?: string;
  pageBackHref?: string;
  pageBackLabel?: string;
  showPageHero?: boolean;
};

type SavedBeanieCartConfig = {
  additionalNotes?: string;
  artworkName?: string;
  basePath?: string;
  colorName?: string;
  decoration?: string;
  kind: "beanie";
  needsArtworkHelp?: boolean;
  quantity?: string;
  styleSlug?: string;
};

function swatchBorderClass(hex?: string) {
  if (!hex) return "border-[#081E6F]/10";
  const normalized = hex.toLowerCase();
  return normalized === "#ffffff" || normalized === "#e4e0d4" || normalized === "#d1cdca" || normalized === "#e4e4e6"
    ? "border-[#081E6F]/16"
    : "border-transparent";
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

function clampQuantity(value: number) {
  return Math.min(5000, Math.max(100, value));
}

export function BeanieBuilderPreview(props: BeanieBuilderPreviewProps) {
  const searchParams = useSearchParams();
  const requestedStyleSlug = props.lockedStyleSlug ?? searchParams.get("style") ?? "";
  const returnTo = searchParams.get("returnTo") ?? "";
  const projectCartItemId = searchParams.get("cartEdit") ?? searchParams.get("projectCartItemId") ?? "";
  const resetKey = `${requestedStyleSlug}::${returnTo}::${projectCartItemId}`;

  return <BeanieBuilderPreviewContent key={resetKey} {...props} />;
}

function BeanieBuilderPreviewContent({
  lockedStyleSlug,
  pageBackHref = "/goods/all",
  pageBackLabel = "Back to all goods",
  showPageHero: showPageHeroOverride,
}: BeanieBuilderPreviewProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const requestedStyleSlug = lockedStyleSlug ?? searchParams.get("style");
  const projectCartItemId = searchParams.get("cartEdit") ?? searchParams.get("projectCartItemId");
  const initialStyle = getBeanieStyleBySlug(requestedStyleSlug);
  const [selectedStyleSlug, setSelectedStyleSlug] = useState(initialStyle.slug);
  const [selectedColorName, setSelectedColorName] = useState(initialStyle.colors[0]?.name ?? "");
  const [decoration, setDecoration] = useState(initialStyle.decorationOptions[0] ?? "Embroidery");
  const [quantity, setQuantity] = useState(100);
  const [qtyInput, setQtyInput] = useState("100");
  const [needsArtworkHelp, setNeedsArtworkHelp] = useState(false);
  const [logoFileName, setLogoFileName] = useState("");
  const [additionalNotes, setAdditionalNotes] = useState("");
  const hydratedCartItemIdRef = useRef<string | null>(null);

  const selectedStyle = useMemo(
    () =>
      BEANIE_STYLES.find((style) => style.slug === (lockedStyleSlug ?? selectedStyleSlug)) ?? BEANIE_STYLES[0],
    [lockedStyleSlug, selectedStyleSlug],
  );
  const selectedColor =
    selectedStyle.colors.find((color) => color.name === selectedColorName) ?? selectedStyle.colors[0];
  const showStyleChooser = !lockedStyleSlug;
  const showPageHero = showPageHeroOverride ?? !lockedStyleSlug;
  const quantityTierIndex =
    QUANTITY_OPTIONS.reduce(
      (bestIndex, option, index) =>
        Math.abs(option - quantity) < Math.abs(QUANTITY_OPTIONS[bestIndex] - quantity) ? index : bestIndex,
      0,
    ) ?? 0;
  const qtyTooltipPosition = sliderPositionStyle(quantityTierIndex, QUANTITY_OPTIONS.length);

  const estimatedUnitPriceLabel =
    decoration === "Woven Label"
      ? "Custom quote"
      : `From $${selectedStyle.fromPrice.toFixed(2)} / beanie`;
  const estimatedDeliveryLabel = decoration === "Woven Label" ? "Custom quote" : "2-3 weeks";
  const timelineItems = [
    { label: "Style + color", value: "You are here now" },
    { label: "Artwork review", value: "1-2 business days" },
    { label: "Sampling + approval", value: "Optional" },
    { label: "Production", value: decoration === "Woven Label" ? "Custom quote" : "2-3 weeks" },
    { label: "Shipping", value: "1-4 days" },
  ];
  const includedItems = [
    "AS Colour beanie blank",
    selectedColor?.name ?? "Selected color",
    decoration,
    QUICK_TURN_FREE_SHIPPING_LABEL,
  ];
  const orderProcessSteps = [
    { title: "Choose the beanie", detail: "Start with the right knit, fit, and overall silhouette." },
    { title: "Pick the color", detail: "Lock in the colorway that fits the brand and the season." },
    { title: "Set the decoration", detail: "Dial in embroidery, patch, or woven-label direction." },
  ];
  const projectSummary = [
    "Product: Beanies",
    "Program: Quick Turn",
    `Beanie style: ${selectedStyle.model} ${selectedStyle.title}`,
    selectedColor ? `Color: ${selectedColor.name}` : "",
    `Decoration: ${decoration}`,
    `Quantity: ${quantity.toLocaleString()}`,
    `Fit: ${selectedStyle.fit}`,
    `Material: ${selectedStyle.material}`,
    logoFileName ? `Artwork file: ${logoFileName}` : "",
    needsArtworkHelp ? "Artwork help: Yes" : "",
    additionalNotes.trim() ? `Notes: ${additionalNotes.trim()}` : "",
  ]
    .filter(Boolean)
    .join("\n");

  const navigation = buildCustomizerNavigation({
    category: "beanies",
    productionPath: "quick-turn",
    currentLabel: selectedStyle.title,
    returnTo: searchParams.get("returnTo"),
    fallbackHref: pageBackHref.includes("?") ? pageBackHref : undefined,
    fallbackLabel: pageBackHref.includes("?") ? pageBackLabel : undefined,
  });
  const topBadgeLabel = getCustomizerProductionPathLabel("quick-turn");

  useEffect(() => {
    if (!projectCartItemId || hydratedCartItemIdRef.current === projectCartItemId) return;

    const savedItem = getProjectCartItem(projectCartItemId);
    const configuration = savedItem?.configuration as SavedBeanieCartConfig | undefined;
    if (!configuration || configuration.kind !== "beanie") return;

    const nextStyle = getBeanieStyleBySlug(configuration.styleSlug ?? requestedStyleSlug ?? "");
    const nextColorName = nextStyle.colors.some((color) => color.name === configuration.colorName)
      ? configuration.colorName ?? ""
      : nextStyle.colors[0]?.name ?? "";
    const nextDecoration = nextStyle.decorationOptions.includes(configuration.decoration ?? "")
      ? configuration.decoration ?? "Embroidery"
      : nextStyle.decorationOptions[0] ?? "Embroidery";
    const nextQuantity = clampQuantity(Number(configuration.quantity) || 100);

    hydratedCartItemIdRef.current = projectCartItemId;
    setSelectedStyleSlug(nextStyle.slug);
    setSelectedColorName(nextColorName);
    setDecoration(nextDecoration);
    setQuantity(nextQuantity);
    setQtyInput(String(nextQuantity));
    setNeedsArtworkHelp(Boolean(configuration.needsArtworkHelp));
    setLogoFileName(configuration.artworkName ?? "");
    setAdditionalNotes(configuration.additionalNotes ?? "");
  }, [projectCartItemId, requestedStyleSlug]);

  function handleAddToProject() {
    const targetCartId = projectCartItemId ?? `project-item-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
    addProjectCartItem({
      artworkName: logoFileName,
      configuration: {
        additionalNotes: additionalNotes.trim() || undefined,
        artworkName: logoFileName || undefined,
        basePath: pathname,
        colorName: selectedColor?.name ?? "",
        decoration,
        kind: "beanie",
        needsArtworkHelp,
        quantity: String(quantity),
        schemaVersion: 1,
        styleSlug: selectedStyle.slug,
      },
      editHref: `${pathname}?cartEdit=${encodeURIComponent(targetCartId)}&style=${encodeURIComponent(selectedStyle.slug)}&returnTo=%2Fcart`,
      id: targetCartId,
      kind: "beanie",
      needsArtworkHelp,
      product: "Beanies",
      program: "Quick Turn",
      quantity: String(quantity),
      source: "quick-turn-beanie-builder",
      summaryLines: projectSummary.split("\n").filter(Boolean),
      title: `${selectedStyle.model} ${selectedStyle.title}`,
    });
    window.location.assign("/cart");
  }

  function handleStyleChange(nextSlug: string) {
    const nextStyle = BEANIE_STYLES.find((style) => style.slug === nextSlug) ?? BEANIE_STYLES[0];
    setSelectedStyleSlug(nextStyle.slug);
    setSelectedColorName(nextStyle.colors[0]?.name ?? "");
    setDecoration(nextStyle.decorationOptions[0] ?? "Embroidery");
  }

  function handleQtySlider(value: string) {
    const nextIndex = Number(value);
    const nextQuantity = QUANTITY_OPTIONS[nextIndex] ?? QUANTITY_OPTIONS[0];
    setQuantity(nextQuantity);
    setQtyInput(String(nextQuantity));
  }

  function handleQtyInput(rawValue: string) {
    const digitsOnly = rawValue.replace(/[^\d]/g, "");
    setQtyInput(digitsOnly);
    if (!digitsOnly) return;
    setQuantity(clampQuantity(Number(digitsOnly)));
  }

  return (
    <MasterCustomizerShell
      compactHeader={!showPageHero}
      header={(
        <CustomizerPageHeader
          backHref={navigation.backHref}
          backLabel={navigation.backLabel}
          badgeLabel={topBadgeLabel ?? undefined}
          eyebrow={showPageHero ? "Quick Turn" : undefined}
          title={showPageHero ? "Quick Turn Beanies" : undefined}
          description={showPageHero ? "Use the same shared customizer rhythm as the hat pages, now focused on the AS Colour beanie lineup." : undefined}
        >
          {showPageHero ? (
            <>
              <span className={immersiveCustomizerGhostLinkClass}>
                {BEANIE_STYLES.length} styles
              </span>
              <span className={`${immersiveCustomizerGhostLinkClass} border-[#FF4200]/20 bg-[#FFF4ED] text-[#FF4200] hover:border-[#FF4200] hover:text-[#FF4200]`}>
                2-3 week turnaround
              </span>
            </>
          ) : null}
        </CustomizerPageHeader>
      )}
    >
          <div className="space-y-4 xl:max-w-[41rem]">
            <div className="grid gap-4">
              <button
                type="button"
                className="group relative aspect-[4/5] overflow-hidden rounded-[1.75rem] border border-[#081E6F]/10 bg-[linear-gradient(180deg,#FFFFFF_0%,#F7F9FC_100%)] text-left sm:aspect-[5/4]"
              >
                <Image
                  src={selectedColor?.image ?? selectedStyle.image}
                  alt={`${selectedStyle.title} in ${selectedColor?.name ?? "selected color"}`}
                  fill
                  sizes="(min-width: 1280px) 34vw, (min-width: 1024px) 46vw, 100vw"
                  className="object-contain p-10 transition duration-500 group-hover:scale-[1.02]"
                  style={selectedStyle.imagePosition ? { objectPosition: selectedStyle.imagePosition } : undefined}
                  priority
                />
              </button>
            </div>

            <div className={shellCardClass}>
              <p className={labelTextClass}>
                From order to delivery
              </p>
              <div className="relative mt-5 space-y-4 before:absolute before:bottom-[26px] before:left-[11px] before:top-[26px] before:w-px before:bg-[#0B32A0]/18">
                {timelineItems.map((item) => (
                  <div key={item.label} className="relative grid grid-cols-[24px_1fr] items-center gap-4">
                    <span className="z-10 h-3 w-3 justify-self-center rounded-full bg-[#FF4200]" />
                    <div className="flex flex-1 items-center justify-between gap-4 rounded-[1.2rem] bg-[#F5F7FC] px-5 py-4">
                      <span className="text-[15px] font-medium text-[#4b4b4b]">{item.label}</span>
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
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#FF4200]">
                  Order process
                </p>
                <p className="mt-2 text-lg font-semibold text-[#0B32A0]">
                  What happens after you start your order
                </p>
              </div>
              <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {orderProcessSteps.map((step, index) => (
                  <div key={step.title} className={processCardClass}>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#FF4200]">
                      Step {index + 1}
                    </p>
                    <p className="mt-3 text-xl font-semibold leading-tight">{step.title}</p>
                    <p className="mt-2 text-[15px] leading-6 text-[#4b4b4b]">{step.detail}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <aside className="space-y-3 lg:self-start">
            <div className={shellCardClass}>
              <CustomizerBreadcrumbs
                items={navigation.breadcrumbs}
                className="flex flex-wrap gap-1 text-xs text-[#6b6b6b]"
              />

              <div className="mt-5">
                <h2 className="mt-2 text-5xl leading-none text-[#0B32A0]">
                  {selectedStyle.title}
                </h2>
                <p className="mt-3 text-base leading-7 text-[#4b4b4b]">
                  {selectedStyle.description}
                </p>
                <p className="mt-5 text-[15px] leading-7 text-[#4b4b4b]">
                  {selectedStyle.model} · {selectedStyle.typeLabel} · {selectedStyle.fit}
                </p>
              </div>
            </div>

            <div className={shellCardClass}>
              <div className="space-y-7 py-2">
                {showStyleChooser ? (
                  <div>
                    <label className={`mb-3 block ${labelTextClass}`}>Beanie style</label>
                    <select
                      value={selectedStyle.slug}
                      onChange={(event) => handleStyleChange(event.target.value)}
                      className="h-12 w-full appearance-none rounded-[1rem] border border-[#0B32A0]/12 bg-[#F5F7FC] bg-[length:14px_14px] bg-[right_1rem_center] bg-no-repeat px-4 pr-11 text-[15px] font-semibold text-[#0B32A0] transition focus:border-[#FF4200] focus:outline-none"
                      style={{ backgroundImage: selectArrowSvg }}
                    >
                      {BEANIE_STYLES.map((style) => (
                        <option key={style.slug} value={style.slug}>
                          {`${style.model} - ${style.title}`}
                        </option>
                      ))}
                    </select>
                    <p className={`mt-2 ${helperTextClass}`}>
                      {selectedStyle.typeLabel} · {selectedStyle.material}
                    </p>
                  </div>
                ) : null}

                <section>
                  <div className="mb-3 flex items-center justify-between gap-3">
                    <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-[#7a7a7a]">
                      Quantity (100-piece minimum)
                    </p>
                    <div className="flex items-center gap-2">
                      <input
                        type="number"
                        min={100}
                        max={5000}
                        step={10}
                        value={qtyInput}
                        onChange={(event) => handleQtyInput(event.target.value)}
                        className="h-12 w-32 rounded-xl border border-[#081E6F]/15 px-4 text-base font-semibold text-[#0B32A0] focus:border-[#0B32A0] focus:outline-none"
                      />
                      <span className="text-sm font-medium text-[#8a8a8a]">units</span>
                    </div>
                  </div>
                  <div className="relative px-1 pt-8">
                    <div className="pointer-events-none absolute top-0 z-10" style={qtyTooltipPosition}>
                      <span className="inline-flex min-h-7 whitespace-nowrap rounded-full bg-[#FF4200] px-4 py-1.5 text-xs font-semibold text-white shadow-[0_10px_24px_rgba(255,66,0,0.18)]">
                        {estimatedUnitPriceLabel}
                      </span>
                    </div>
                    <input
                      type="range"
                      min={0}
                      max={QUANTITY_OPTIONS.length - 1}
                      step={1}
                      value={quantityTierIndex}
                      onChange={(event) => handleQtySlider(event.target.value)}
                      className="h-2 w-full cursor-pointer accent-[#0B32A0]"
                      style={{ accentColor: "#0B32A0" }}
                    />
                    <div className="pointer-events-none relative mt-1.5 h-8">
                      {QUANTITY_OPTIONS.map((value, index) => {
                        const position = sliderPositionStyle(index, QUANTITY_OPTIONS.length);

                        return (
                          <div key={value} className="absolute top-0 flex min-w-0 flex-col items-center" style={position}>
                            <div className="h-1.5 w-px bg-[#081E6F]/30" />
                            <span
                              className={`mt-0.5 text-[10px] ${
                                quantityTierIndex === index ? "font-semibold text-[#0B32A0]" : "text-[#8a8a8a]"
                              }`}
                            >
                              {value.toLocaleString()}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </section>

                <section>
                  <div className="mb-3 flex items-center justify-between">
                    <p className={labelTextClass}>Color</p>
                    <p className="text-sm font-semibold text-[#0B32A0]">{selectedColor?.name ?? ""}</p>
                  </div>
                  <div className="flex flex-wrap gap-2.5 overflow-visible py-1">
                    {selectedStyle.colors.map((color) => {
                      const isActive = color.name === selectedColor?.name;
                      return (
                        <button
                          key={`${selectedStyle.slug}-${color.name}`}
                          type="button"
                          onClick={() => setSelectedColorName(color.name)}
                          className={`h-7 w-7 shrink-0 rounded-full border border-[#1C1C1C]/10 shadow-sm transition ${
                            isActive
                              ? "ring-2 ring-[#FF4200] ring-offset-2"
                              : "hover:ring-2 hover:ring-[#FF4200] hover:ring-offset-2"
                          }`}
                          title={color.name}
                          aria-label={`Choose ${color.name}`}
                          style={{ backgroundColor: color.swatch ?? "#d8d0c2" }}
                        >
                          <span
                            className={`block h-full w-full rounded-full border ${
                              isActive ? "border-transparent" : swatchBorderClass(color.swatch)
                            }`}
                          />
                        </button>
                      );
                    })}
                  </div>
                  <p className={`mt-2 ${helperTextClass}`}>Click a swatch to lock in the color.</p>
                </section>

                <section>
                  <p className={`mb-3 block ${labelTextClass}`}>Front decoration</p>
                  <p className={`mb-3 ${helperTextClass}`}>
                    Keep the beanie front simple here and we&apos;ll guide the final placement in review.
                  </p>
                  <div className="grid gap-3">
                    {selectedStyle.decorationOptions.map((option) => {
                      const isActive = decoration === option;
                      return (
                        <button
                          key={option}
                          type="button"
                          onClick={() => setDecoration(option)}
                          className={`min-h-[5rem] rounded-xl border px-4 py-3.5 text-left text-base font-semibold uppercase tracking-[0.14em] transition ${
                            isActive ? blueSelectedOptionClass : unselectedOptionClass
                          }`}
                        >
                          {option}
                        </button>
                      );
                    })}
                  </div>
                </section>

                <section>
                  <label className={`mb-3 block ${labelTextClass}`}>
                    Additional notes
                  </label>
                  <p className={`mb-3 ${helperTextClass}`}>
                    Flag patch ideas, branding notes, rush context, or anything else we should build around.
                  </p>
                  <p className={`mb-3 ${helperTextClass}`}>
                    Need to split this across different colors or styles? Leave a note and we&apos;ll reach out.
                  </p>
                  <textarea
                    value={additionalNotes}
                    onChange={(event) => setAdditionalNotes(event.target.value)}
                    placeholder="Optional notes on placement, artwork, timing, or anything else to flag"
                    rows={3}
                    className="w-full rounded-[1.2rem] border border-[#081E6F]/15 bg-[#F5F7FC] px-4 py-4 text-[15px] font-normal text-[#0B32A0] placeholder:text-[#8a8a8a] focus:border-[#FF4200] focus:outline-none"
                  />
                </section>

                <section className="rounded-xl border border-dashed border-[#081E6F]/25 bg-[#FFF6ED] p-5">
                  <div className="flex flex-col gap-3">
                    <div>
                      <p className={labelTextClass}>Upload your logo</p>
                      <p className={`mt-1 ${helperTextClass}`}>Vector files preferred: AI, PDF, EPS, SVG</p>
                    </div>
                    <div className="grid gap-3 md:grid-cols-2">
                      <label className="flex min-h-12 cursor-pointer items-center justify-center rounded-xl bg-white px-5 text-base font-semibold text-[#0B32A0] ring-1 ring-[#081E6F]/15 transition hover:ring-[#0B32A0]">
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
                        className={`flex min-h-12 items-center justify-center gap-2 rounded-xl px-4 text-base font-semibold transition ${
                          needsArtworkHelp
                            ? "bg-[#F5F7FC] text-[#0B32A0] ring-2 ring-[#0B32A0]"
                            : "bg-white text-[#0B32A0] ring-1 ring-[#081E6F]/15 hover:ring-[#FF4200] hover:text-[#FF4200]"
                        }`}
                      >
                        <span
                          className={`flex h-6 w-6 items-center justify-center rounded border text-[11px] leading-none ${
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
                    <p className="text-base leading-7 text-[#4b4b4b]">
                      Not sure your artwork is right? Upload what you&apos;ve got, and we&apos;ll check it out for free.
                    </p>
                  </div>
                </section>

                <section className="border-t border-[#081E6F]/10 pt-6">
                  <p className={`mb-4 ${labelTextClass}`}>Included</p>
                  <ul className="grid gap-2.5">
                    {includedItems.map((item) => (
                      <li
                        key={item}
                        className="flex items-center justify-between gap-3 rounded-[1.1rem] border border-[#0B32A0]/10 bg-[#FBF7F1] px-4 py-3 text-sm text-[#4b4b4b]"
                      >
                        <span className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#FF4200]" />
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

          <aside className="lg:sticky lg:top-28 lg:self-start xl:col-start-3 xl:self-start">
            <div className={shellCardClass}>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8a8a8a]">
                  Live price summary
                </p>
              </div>

              <div className="mt-6 space-y-3 text-sm">
                {[
                  { label: "Units", value: `${quantity.toLocaleString()}` },
                  { label: "Beanie style", value: `${selectedStyle.model} ${selectedStyle.title}` },
                  { label: "Color", value: selectedColor?.name ?? "Selected color" },
                  { label: "Front decoration", value: decoration },
                  { label: "Fit", value: selectedStyle.fit },
                  { label: "Material", value: selectedStyle.material },
                  ...(logoFileName ? [{ label: "Artwork file", value: logoFileName }] : []),
                  { label: "Artwork help", value: needsArtworkHelp ? "Yes" : "No" },
                  ...(additionalNotes.trim() ? [{ label: "Additional notes", value: additionalNotes.trim() }] : []),
                  { label: "Turnaround", value: decoration === "Woven Label" ? "Custom quote" : "2-3 weeks" },
                ].map((row) => (
                  <div
                    key={row.label}
                    className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-4 rounded-[1rem] bg-[#F7F9FC] px-4 py-3"
                  >
                    <span className={summaryLabelClass}>{row.label}</span>
                    <span className={summaryValueClass}>{row.value}</span>
                  </div>
                ))}
              </div>

              <div className={`${insetPanelClass} mt-6`}>
                <div className="mb-3 flex items-end justify-between gap-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8a8a8a]">
                    Unit price
                  </p>
                  <p className="text-2xl font-semibold leading-none text-[#0B32A0]">{estimatedUnitPriceLabel}</p>
                </div>
              </div>

              <button
                type="button"
                onClick={handleAddToProject}
                className="mt-6 flex min-h-14 w-full items-center justify-center rounded-[1.1rem] bg-[#FF4200] px-6 text-center text-[15px] font-semibold uppercase tracking-[0.12em] text-white transition hover:-translate-y-0.5 hover:shadow-[0_16px_32px_rgba(255,66,0,0.24)]"
              >
                Add to Project
              </button>
              <div className="mt-3 rounded-[1rem] border border-[#081E6F]/10 bg-[#F7F9FC] px-4 py-3 text-left">
                <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#7a7a7a]">
                  Project flow
                </p>
                <p className="mt-1 text-xs leading-5 text-[#4b4b4b]">
                  Add this beanie build to your project cart, keep building, and send one combined request when everything is ready.
                </p>
                <p className="mt-1 text-xs leading-5 text-[#4b4b4b]">
                  We&apos;ll review the full project before final pricing and next-step timing are confirmed.
                </p>
              </div>
            </div>
          </aside>
    </MasterCustomizerShell>
  );
}
