"use client";

import { useState, useRef, useEffect } from "react";

// ── Color hex map ─────────────────────────────────────────────────────────
const COLOR_HEX: Record<string, string> = {
  "Black": "#1a1a1a", "Coal": "#3a3a3a", "Asphalt": "#4a4a4a",
  "Midnight Blue": "#1b2a4a", "Atlantic": "#1e3a5f", "Navy": "#1a2f5a",
  "Cypress": "#2d4a3e", "Forest": "#2d4a2d", "Forest Green": "#254833", "Army": "#4a5a2a",
  "Khaki": "#8a7a5a", "Camel": "#c4956a", "Walnut": "#7a5a3a", "Natural": "#ddd3bf",
  "Bone": "#e8e0d0", "Ecru": "#f0ead8", "Cream": "#f5f0e0",
  "White": "#ffffff", "Bright White": "#ffffff",
  "Hazy Pink": "#e8c4c0", "Bubblegum": "#f0a0b8", "Charity Pink": "#f3a0b9", "Pale Pink": "#efc2c4", "Orchid": "#c87ab8",
  "Burgundy": "#6a1a2a", "Cardinal": "#9a1a2a", "Red": "#cc2222",
  "Fire": "#e05a1a", "Sunset": "#e88040", "Mustard": "#c8a020",
  "Butter": "#f0d870", "Lemonade": "#f5e878", "Yellow": "#f0d020",
  "Seafoam": "#7acfb8", "Sage": "#9ca68b", "Mint": "#b8d8c8", "Eucalyptus": "#708f83", "Powder": "#a0c8e8", "Carolina Blue": "#5aa0d0",
  "Slate Blue": "#637a92", "Petrol Blue": "#22536b", "Hydro": "#168aa6", "Topaz": "#1b9eb3", "Bright Royal": "#2255bb",
  "Royal": "#2255bb", "Cobalt": "#1d4f91", "Autumn": "#c86030", "Clay": "#b87060", "Chestnut": "#7d4f3c",
  "Mushroom": "#a08878", "Taupe": "#908070", "Grey": "#808080", "Light Grey": "#c8c9c7",
  "Ash": "#c8c8c8", "Silver": "#b8b8b8", "Smoke": "#777c78", "Storm": "#6b7480",
  "Citrus": "#d2c83a", "Pistachio": "#a1ad70", "Pine Green": "#1f4a36", "Grape": "#5c4a82", "Violet": "#8d75b5", "Liberty": "#5d3f91",
  "Charlotte": "#79c7d3", "Lapis": "#3347a1", "Lime": "#a8c63f", "Mineral": "#7c8f8b",
  "Desert Camo": "#8a8060", "Tree Camo": "#4a6040",
  "Faded Bone": "#ddd8ca", "Faded Midnight": "#2a3550",
  "Faded Grey": "#909090", "Faded Black": "#3a3a3a",
};

function resolveSwatchColor(name: string): string | undefined {
  const direct = COLOR_HEX[name];
  if (direct) return direct;

  const unslashed = name.replace(/\s*\/\s*/g, " ");
  if (COLOR_HEX[unslashed]) return COLOR_HEX[unslashed];

  if (name.includes(" / ")) {
    const parts = name.split(" / ").map(part => part.trim());
    const match = parts.find(part => !part.toLowerCase().includes("black") && COLOR_HEX[part]) ?? parts.find(part => COLOR_HEX[part]);
    if (match) return COLOR_HEX[match];
  }

  const lowerName = unslashed.toLowerCase();
  const key = Object.keys(COLOR_HEX)
    .sort((a, b) => b.length - a.length)
    .find(colorName => lowerName.includes(colorName.toLowerCase()));

  return key ? COLOR_HEX[key] : undefined;
}

function swatchStyle(name: string): React.CSSProperties {
  return { background: resolveSwatchColor(name) ?? "#d0ccc0" };
}

// ── Types ─────────────────────────────────────────────────────────────────
export type HatColor = {
  name: string;
  front?: string;
  side?: string;
  back?: string;
  main?: string;
  turn?: string;
  swatch?: string;
};

export type ReadyMadeHatStyle = {
  id: string;
  name: string;
  tagline: string;
  material: string;
  crown: string;
  closure: string;
  bill: string;
  colors: HatColor[];
  fit?: string;
  fabricDesc?: string;
};

// ── Pricing ───────────────────────────────────────────────────────────────
const QTY_TIERS = [
  { qty: 100,  label: "100",   price: 16.50 },
  { qty: 250,  label: "250",   price: 15.50 },
  { qty: 500,  label: "500",   price: 14.50 },
  { qty: 1000, label: "1,000", price: 13.50 },
];

function priceForQty(qty: number) {
  return [...QTY_TIERS].reverse().find(t => qty >= t.qty) ?? QTY_TIERS[0];
}

function uniquePhotos(candidates: (string | undefined)[]) {
  return candidates.filter((src, i, arr): src is string => !!src && arr.indexOf(src) === i);
}

function galleryPhotos(color: HatColor) {
  const front = color.front;
  const threeQuarter = color.side ?? color.turn;

  return uniquePhotos([front, threeQuarter, color.back]);
}

// ── Component ─────────────────────────────────────────────────────────────
export function ShoppableReadyMadeHat({ style, recommendedStyles }: {
  style: ReadyMadeHatStyle;
  recommendedStyles?: ReadyMadeHatStyle[];
}) {
  const [colorIdx, setColorIdx]       = useState(0);
  const [qty, setQty]                 = useState(100);
  const [qtyInput, setQtyInput]       = useState("100");
  const [decoration, setDecoration]   = useState<"embroidery" | "patch">("embroidery");
  const [embStyle, setEmbStyle]       = useState<"none" | "puff" | "chain">("none");
  const [backEmb, setBackEmb]         = useState(false);
  const [sideEmb, setSideEmb]         = useState(false);
  const [threadFinish, setThreadFinish] = useState<"matte" | "shiny">("matte");
  const [embColor, setEmbColor]       = useState("");
  const [logoFile, setLogoFile]       = useState<File | null>(null);
  const [tab, setTab]                 = useState<"details" | "fit" | "fabric">("details");
  const [showSticky, setShowSticky]   = useState(false);
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  // Show sticky bar when Order Now button scrolls out of view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setShowSticky(!entry.isIntersecting),
      { threshold: 0 }
    );
    if (ctaRef.current) observer.observe(ctaRef.current);
    return () => observer.disconnect();
  }, []);

  const color = style.colors[colorIdx];
  const tier  = priceForQty(qty);
  const photos = galleryPhotos(color);

  // Price calc
  const embUpgrade  = embStyle !== "none" ? 1.00 : 0;
  const backCost    = backEmb ? 4.50 : 0;
  const sideCost    = sideEmb ? 4.50 : 0;
  const unitPrice   = tier.price + embUpgrade + backCost + sideCost;
  const totalPrice  = (unitPrice * qty).toFixed(2);

  // Timeline
  const timeline = decoration === "patch" ? "4–6 weeks" : "2–3 weeks";

  function handleQtyChange(val: string) {
    setQtyInput(val);
    const n = parseInt(val, 10);
    if (!isNaN(n) && n >= 100) setQty(n);
  }

  // Cart params (placeholder until cart system is built)
  const cartParams = new URLSearchParams({
    style: `${style.id} ${style.name}`,
    color: color.name,
    qty: String(qty),
    decoration,
    embStyle,
    back: String(backEmb),
    side: String(sideEmb),
  });

  return (
    <div className="mx-auto max-w-6xl">
      {/* ── Included callout ── */}
      <div className="mb-5 rounded-[1.25rem] border border-[#1C1C1C]/8 bg-white px-6 py-4">
        <p className="mb-2 text-sm font-bold uppercase tracking-[0.18em] text-[var(--og-orange)]">Every order includes</p>
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          {["Your choice of blank", "Front embroidery", "Free digitizing setup"].map(item => (
            <span key={item} className="flex items-center gap-2 text-sm font-semibold text-[var(--og-blue)]">
              <span className="text-green-600">✓</span>{item}
            </span>
          ))}
        </div>
      </div>

      <div className="overflow-hidden rounded-[2rem] border border-[#1C1C1C]/8 bg-white shadow-[0_4px_24px_rgba(0,0,0,0.06)]">
        <div className="grid lg:grid-cols-[1fr_1fr]">

          {/* ── LEFT: stacked photos, click to zoom ── */}
          <div className="bg-white p-4">
            <div className="flex flex-col gap-3">
              {photos.map((src, i) => (
                  <button
                    key={src}
                    type="button"
                    onClick={() => setLightboxIdx(i)}
                    className="group relative aspect-square w-full cursor-zoom-in overflow-hidden rounded-xl bg-white"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={src}
                      alt={`${style.name} ${color.name}`}
                      className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/5" />
                  </button>
                ))}
            </div>
          </div>

          {/* ── RIGHT: configurator ── */}
          <div className="flex flex-col gap-7 p-6 md:p-8">

            {/* Header */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--og-orange)]">
                Ready Made · #{style.id}
              </p>
              <h2 className="mt-1.5 text-3xl font-semibold text-[var(--og-blue)]"
                style={{ fontFamily: "var(--font-display)" }}>
                {style.name}
              </h2>
              <p className="mt-1 text-sm text-[var(--og-muted)]">{style.tagline}</p>
            </div>

            {/* Details / Fit / Fabric */}
            <div className="pt-5">
              <div className="flex gap-4 border-b border-[#0B32A0]/10">
                {(["details","fit","fabric"] as const).map(t => (
                  <button key={t} type="button" onClick={() => setTab(t)}
                    className={`pb-2 text-xs font-semibold uppercase tracking-[0.16em] transition border-b-2 ${
                      tab === t ? "-mb-px border-[var(--og-orange)] text-[var(--og-orange)]"
                        : "border-transparent text-[var(--og-muted)] hover:text-[var(--og-blue)]"
                    }`}>
                    {t}
                  </button>
                ))}
              </div>
              <div className="mt-3 text-sm leading-6 text-[var(--og-muted)]">
                <div className="min-h-[4rem]">
                  {tab === "details" && (
                    <ul className="space-y-1">
                      {[style.crown, style.closure].map(d => (
                        <li key={d} className="flex items-center gap-2">
                          <span className="text-[var(--og-orange)]">·</span>{d}
                        </li>
                      ))}
                    </ul>
                  )}
                  {tab === "fit" && <p>{style.fit ?? "One size fits most. Adjustable closure for a custom fit."} {style.bill} bill.</p>}
                  {tab === "fabric" && <p>{style.fabricDesc ?? style.material}</p>}
                </div>
              </div>

            {/* Color swatches — below header */}
            <div className="pt-5">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#1C1C1C]">
                Color <span className="text-[var(--og-orange)]">{color.name}</span>
              </p>
              <div className="flex flex-wrap gap-2.5 overflow-visible py-1">
                {style.colors
                  .filter(c => c.name !== "Default" && !c.name.includes("→"))
                  .map((c, i) => (
                    <button
                      key={c.name}
                      type="button"
                      title={c.name}
                      onClick={() => setColorIdx(i)}
                      style={c.swatch ? { background: c.swatch } : swatchStyle(c.name)}
                      className={`h-7 w-7 shrink-0 rounded-full shadow-sm transition ${
                        colorIdx === i
                          ? "ring-2 ring-[var(--og-orange)] ring-offset-2"
                          : "hover:ring-2 hover:ring-[var(--og-orange)] hover:ring-offset-2"
                      }`}
                    />
                  ))}
              </div>
            </div>

                        {/* Qty — free-slide with tier marks */}
            <div className="pt-5">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#1C1C1C]">Quantity</p>
              {/* Editable qty box + price inline */}
              <div className="mb-3 flex items-center gap-3">
                <input
                  type="number"
                  min={100}
                  max={1000}
                  step={10}
                  value={qtyInput}
                  onChange={e => handleQtyChange(e.target.value)}
                  className="w-24 rounded-xl border border-[#1C1C1C]/15 px-3 py-2 text-sm font-bold text-[#1C1C1C] focus:border-[#1C1C1C] focus:outline-none"
                />
                <span className="text-xs text-[#1C1C1C]/40">units</span>
                <span className="ml-auto text-sm font-semibold text-[#1C1C1C]">${priceForQty(qty).price}<span className="font-normal text-[#1C1C1C]/40">/hat</span></span>
              </div>
              {/* Slider */}
              <div className="relative px-1">
                <input
                  type="range"
                  min={100}
                  max={1000}
                  step={10}
                  value={qty}
                  onChange={e => { const n = Number(e.target.value); setQty(n); setQtyInput(String(n)); }}
                  className="w-full"
                  style={{ accentColor: "#1C1C1C" }}
                />
                {/* Ticks + labels — corrected for thumb offset (~8px each side) */}
                <div className="pointer-events-none relative mt-1.5 h-5 w-full">
                  {([
                    { val: 100,  label: "100",   tick: false },
                    { val: 250,  label: "250",   tick: true  },
                    { val: 500,  label: "500",   tick: true  },
                    { val: 750,  label: "750",   tick: true  },
                    { val: 1000, label: "1,000", tick: false },
                  ]).map(({ val, label, tick }) => {
                    const pct = (val - 100) / (1000 - 100) * 100;
                    return (
                      <div
                        key={val}
                        className="absolute flex flex-col items-center"
                        style={{ left: `calc(${pct}% * (100% - 16px) / 100% + 8px)`, transform: "translateX(-50%)" }}
                      >
                        {tick && <div className="h-1.5 w-px bg-[#1C1C1C]/30" />}
                        {!tick && <div className="h-1.5 w-px bg-transparent" />}
                        <span className={`mt-0.5 text-[10px] transition ${qty === val ? "font-bold text-[#1C1C1C]" : "text-[#1C1C1C]/35"}`}>
                          {label}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
              <p className="mt-3 text-[11px] text-[#1C1C1C]/40">
                Need more than 1,000?{" "}
                <a href="/contact?qty=bulk" className="font-semibold text-[var(--og-orange)] hover:underline">
                  Contact us for a custom quote.
                </a>
              </p>
            </div>


            {/* Decoration type */}
            <div className="pt-5">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#1C1C1C]">Decoration</p>
              <div className="grid grid-cols-2 gap-2">
                {(["embroidery", "patch"] as const).map(d => (
                  <button key={d} type="button" onClick={() => setDecoration(d)}
                    className={`rounded-xl border p-3 text-left text-xs font-semibold uppercase tracking-[0.12em] transition ${
                      decoration === d
                        ? "border-2 border-[var(--og-blue)] text-[var(--og-blue)]"
                        : "border-[var(--og-blue)]/15 bg-white text-[var(--og-blue)] hover:border-[var(--og-blue)]/40"
                    }`}>
                    <p>
                      {d === "embroidery" ? "Embroidery" : "Embroidery Patch"}
                    </p>
                    <p className="mt-0.5 text-[10px] normal-case tracking-normal text-[#1C1C1C]/40">
                      {d === "embroidery" ? "Included · 2–3 wks" : "Same price · 4–6 wks"}
                    </p>
                  </button>
                ))}
              </div>
              {/* Embroidery upgrade — optional, click again to deselect */}
              {decoration === "embroidery" && (
                <div className="mt-2">
                  <p className="mb-1.5 text-[11px] text-[#1C1C1C]/40">Upgrade — optional</p>
                  <div className="flex gap-2">
                    {([
                      { id: "puff",  label: "Puff Embroidery", sub: "+$1.00" },
                      { id: "chain", label: "Chain Stitch",     sub: "+$1.00" },
                    ] as const).map(opt => (
                      <button key={opt.id} type="button"
                        onClick={() => setEmbStyle(embStyle === opt.id ? "none" : opt.id)}
                        className={`flex-1 rounded-xl border py-2.5 text-center transition ${
                          embStyle === opt.id
                            ? "border-2 border-[var(--og-blue)] text-[var(--og-blue)]"
                            : "border border-[var(--og-blue)]/15 text-[var(--og-blue)]/50 hover:border-[var(--og-blue)]/40"
                        }`}>
                        <p className="text-[11px] font-semibold">{opt.label}</p>
                        <p className="text-[10px] text-[#1C1C1C]/40">{opt.sub}</p>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Additional locations */}
            <div className="pt-5">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#1C1C1C]">Additional Locations</p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { label: "Back Embroidery", val: backEmb, set: setBackEmb },
                  { label: "Side Embroidery", val: sideEmb, set: setSideEmb },
                ].map(({ label, val, set }) => (
                  <button key={label} type="button" onClick={() => set(!val)}
                    className={`rounded-xl border p-3 text-left transition ${
                      val
                        ? "border-2 border-[var(--og-blue)] text-[var(--og-blue)]"
                        : "border-[var(--og-blue)]/15 bg-white text-[var(--og-blue)] hover:border-[var(--og-blue)]/40"
                    }`}>
                    <p className="text-xs font-semibold uppercase tracking-[0.12em]">{label}</p>
                    <p className="mt-0.5 text-[10px] text-[#1C1C1C]/40">+$4.50/hat</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Thread finish */}
            <div className="pt-5">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#1C1C1C]">Thread Finish</p>
              <div className="grid grid-cols-2 gap-2">
                {(["matte", "shiny"] as const).map(f => (
                  <button key={f} type="button" onClick={() => setThreadFinish(f)}
                    className={`rounded-xl border py-3 text-center text-xs font-semibold uppercase tracking-[0.12em] transition ${
                      threadFinish === f
                        ? "border-2 border-[var(--og-blue)] text-[var(--og-blue)]"
                        : "border border-[var(--og-blue)]/15 text-[var(--og-blue)]/50 hover:border-[var(--og-blue)]/40"
                    }`}>
                    {f === "matte" ? "Matte" : "Shiny"}
                  </button>
                ))}
              </div>
              <p className="mt-2 text-[11px] text-[#1C1C1C]/40">Not sure? We&apos;ll walk you through it when we send your proof.</p>
            </div>

            {/* Embroidery color */}
            <div className="pt-5">
              <p className="mb-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#1C1C1C]">Embroidery Color</p>
              <p className="mb-2 text-[11px] text-[#1C1C1C]/40">Enter a Pantone, HEX, or describe your color</p>
              <div className="flex gap-2">
                {embColor && (
                  <div
                    className="h-10 w-10 shrink-0 rounded-lg border border-[#1C1C1C]/10"
                    style={{ background: embColor.startsWith("#") ? embColor : undefined }}
                    title={embColor}
                  />
                )}
                <input
                  type="text"
                  value={embColor}
                  onChange={e => setEmbColor(e.target.value)}
                  placeholder="e.g. Pantone 165 C, #FF4200, Orange"
                  className="flex-1 rounded-xl border border-[#1C1C1C]/15 px-4 py-2.5 text-sm placeholder:text-[#1C1C1C]/30 focus:border-[#1C1C1C] focus:outline-none"
                />
              </div>
            </div>

            {/* Logo upload */}
            <div className="pt-5">
              <p className="mb-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#1C1C1C]">Your Logo</p>
              <p className="mb-2 text-[11px] text-[var(--og-muted)]">Vector files preferred: AI, PDF, EPS, SVG</p>
              <div className="flex gap-2">
                <button type="button" onClick={() => fileRef.current?.click()}
                  className="flex flex-1 items-center justify-center gap-1.5 rounded-xl border-2 border-dashed border-[#0B32A0]/20 bg-white px-3 py-3 text-xs font-semibold text-[var(--og-muted)] transition hover:border-[var(--og-orange)] hover:text-[var(--og-orange)]">
                  {logoFile
                    ? <span className="text-green-600">✓ {logoFile.name.length > 14 ? logoFile.name.slice(0,14)+"…" : logoFile.name}</span>
                    : <>↑ Upload your logo</>}
                </button>
                <a href="/design"
                  className="flex flex-1 items-center justify-center rounded-xl border border-[#0B32A0]/15 bg-white px-3 py-3 text-center text-xs font-semibold text-[var(--og-blue)] transition hover:border-[var(--og-orange)] hover:text-[var(--og-orange)]">
                  Need artwork?
                </a>
              </div>
              <input ref={fileRef} type="file" accept=".png,.svg,.ai,.pdf,.jpg,.eps"
                className="hidden" onChange={e => { const f = e.target.files?.[0]; if (f) setLogoFile(f); }} />
              <p className="mt-2 text-[11px] leading-5 text-[var(--og-muted)]">
                Not sure your artwork is right? Upload what you&apos;ve got and we&apos;ll check it for free.
              </p>
            </div>

            {/* Price + timeline */}
            <div className="rounded-[1.25rem] border border-[#0B32A0]/15 bg-white px-5 py-4">
              <div className="flex items-baseline justify-between">
                <span className="text-sm text-[var(--og-muted)]">{qty.toLocaleString()} hats × ${unitPrice.toFixed(2)}/hat</span>
                <span className="text-2xl font-bold text-[var(--og-blue)]">${Number(totalPrice).toLocaleString()}</span>
              </div>
              <div className="mt-2 flex items-center gap-3">
                <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ${
                  decoration === "patch"
                    ? "bg-amber-100 text-amber-700"
                    : "bg-green-100 text-green-700"
                }`}>
                  {timeline} production
                </span>
                <span className="text-xs text-[var(--og-muted)]">Free digitizing · $40 flat-rate shipping</span>
              </div>
            </div>

            {/* Order Now */}
            <div ref={ctaRef} className="space-y-3 pt-3">
              <a href={`/cart?${cartParams}`}
                className="inline-flex min-h-14 w-full items-center justify-center rounded-xl bg-[#1C1C1C] text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-[#333]">
                Proceed to Checkout →
              </a>
              <a href="/contact"
                className="flex w-full items-center justify-center gap-2 rounded-xl border border-[#1C1C1C]/15 py-3 text-xs font-semibold text-[#1C1C1C]/60 transition hover:border-[#1C1C1C]/40 hover:text-[#1C1C1C]">
                Have questions? Talk to our team
              </a>
            </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── What happens after you order ── */}
      <section className="mt-8 overflow-hidden rounded-[2rem] bg-white px-6 py-12 md:px-12 lg:px-16">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-8 text-center text-xs font-normal uppercase tracking-[0.2em] text-[#1C1C1C]/40">What happens after you order</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { n: "1", title: "Order confirmed",           time: "Instant",            body: "Your order details and logo go straight to our team the moment checkout clears." },
              { n: "2", title: "Tech pack prepared",        time: "Next business day",  body: "We turn your selections into a production-ready spec with placement, colors, and decoration notes." },
              { n: "3", title: "Sample photo approval",     time: "2–3 business days",  body: "We send a real sample photo for approval. Reply with a thumbs up or ask for free tweaks." },
              { n: "4", title: "Production + shipping",     time: "After approval",     body: "Main production starts once you sign off. Tracking is sent as soon as your hats ship." },
            ].map(({ n, title, time, body }) => (
              <div key={n} className="flex flex-col items-center gap-2 text-center">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#1C1C1C] text-[11px] font-bold text-white">{n}</span>
                <p className="text-sm font-semibold text-[#1C1C1C]">{title}</p>
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#1C1C1C]/40">{time}</p>
                <p className="text-sm leading-6 text-[#1C1C1C]/50">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Trust strip with photos ── */}
      <section className="mt-8 overflow-hidden rounded-[2rem] bg-white">
        <div className="flex flex-col md:flex-row md:divide-x md:divide-[#1C1C1C]/8">
          {[
            {
              label: "2–3 Week Turnaround",
              body: "From your order to your door in 2–3 weeks. No back-and-forth delays.",
              img: "/images/product/hats/feb-snapback-nylon-front.jpg",
            },
            {
              label: "Embroidered by Experts",
              body: "Each hat is embroidered locally in Los Angeles and built with care.",
              img: "/images/product/hats/feb-canvas-snapback-interior.jpg",
            },
            {
              label: "You're in Good Hands",
              body: "We've been doing this a long time. If something's off, we'll make it right.",
              img: "/images/product/hats/client-boatsetter-boat.jpg",
            },
          ].map(({ label, body, img }) => (
            <div key={label} className="flex flex-1 flex-col">
              <div className="aspect-[4/3] w-full overflow-hidden bg-[#F5F0E8]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={img} alt={label} className="h-full w-full object-cover" />
              </div>
              <div className="flex flex-col items-center px-8 py-8 text-center">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#1C1C1C]">{label}</p>
                <p className="mt-2 text-sm leading-7 text-[#1C1C1C]/50">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="mt-8 overflow-hidden rounded-[2rem] bg-white px-6 py-12 md:px-12 lg:px-16">
        <h2 className="mb-6 text-center text-xs font-normal uppercase tracking-[0.2em] text-[#1C1C1C]/40">Frequently Asked Questions</h2>
        <div className="mx-auto max-w-2xl divide-y divide-[#1C1C1C]/8 text-left">
          {[
            { q: "What's the minimum order?",                   a: "100 hats per style. Need fewer? Contact us and we'll see what we can do." },
            { q: "Do I need to create an account to order?",    a: "Nope. Just configure your hat, upload your logo, and check out. No account required." },
            { q: "What file format should I use for my logo?",  a: "Vector files (AI, EPS, SVG) give the sharpest embroidery. PNG works too — we'll optimize it and let you approve the result before anything ships." },
            { q: "Can I see a sample before full production?",  a: "Yes. We stitch a real physical sample and send you a photo within 2–3 business days. Nothing goes to full production until you sign off." },
            { q: "How long does production take?",              a: "Embroidery orders: 2–3 weeks. Patch orders: 4–6 weeks. Both include your sample approval time." },
            { q: "What if I don't like the result?",            a: "We'll fix it. Revisions are free and unlimited until you're happy. If we can't get it right, we'll refund you." },
          ].map(({ q, a }) => (
            <details key={q} className="group py-4">
              <summary className="flex cursor-pointer items-center justify-between text-sm font-semibold text-[#1C1C1C] marker:content-none">
                {q}
                <span className="ml-4 shrink-0 text-[#1C1C1C]/40 transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-2 text-sm leading-6 text-[#1C1C1C]/50">{a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* ── You may also like — exact shop page layout ── */}
      {recommendedStyles && recommendedStyles.length > 0 && (
        <section className="py-12">
          <h2 className="mb-6 px-6 text-center text-xs font-normal uppercase tracking-[0.2em] text-[#1C1C1C]/40 md:px-12 lg:px-16">You may also like</h2>
          <div className="grid grid-cols-5 gap-1">
            {recommendedStyles.map(s => {
              const hero = s.colors[0]?.main ?? s.colors[0]?.turn ?? s.colors[0]?.front ?? "";
              return (
                <a key={s.id} href={`/goods/hats/ready-made/${s.id.toLowerCase()}`}
                  className="group flex flex-col gap-1.5">
                  <div className="relative aspect-square overflow-hidden rounded-lg border border-[#1C1C1C]/8 bg-[#F5F0E8] transition group-hover:border-[#0B32A0]">
                    {hero && (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={hero} alt={s.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    )}
                  </div>
                  <p className="px-1 text-sm font-medium text-[#1C1C1C]">{s.name}</p>
                  <p className="px-1 text-sm text-[#1C1C1C]/50">From $16.50</p>
                </a>
              );
            })}
          </div>
        </section>
      )}

      {/* ── Lightbox ── */}
      {lightboxIdx !== null && (() => {
        return (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90" onClick={() => setLightboxIdx(null)}>
            <button onClick={() => setLightboxIdx(null)}
              className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-sm transition hover:bg-black/50">
              ✕
            </button>
            {lightboxIdx > 0 && (
              <button onClick={e => { e.stopPropagation(); setLightboxIdx(i => i !== null ? i - 1 : 0); }}
                className="absolute left-5 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-sm transition hover:bg-black/50">
                ‹
              </button>
            )}
            <div className="relative h-[80vmin] w-[80vmin] max-h-[90vh] max-w-[90vw]" onClick={e => e.stopPropagation()}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={photos[lightboxIdx]} alt="" className="h-full w-full object-contain" />
            </div>
            {lightboxIdx < photos.length - 1 && (
              <button onClick={e => { e.stopPropagation(); setLightboxIdx(i => i !== null ? i + 1 : 0); }}
                className="absolute right-5 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-sm transition hover:bg-black/50">
                ›
              </button>
            )}
            <div className="absolute bottom-5 flex gap-2">
              {photos.map((_, i) => (
                <button key={i} onClick={e => { e.stopPropagation(); setLightboxIdx(i); }}
                  className={`h-1.5 rounded-full transition-all ${i === lightboxIdx ? "w-6 bg-white" : "w-1.5 bg-white/40"}`} />
              ))}
            </div>
          </div>
        );
      })()}

      {/* ── Sticky Order Now bar ── */}
      {showSticky && (
        <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-[#1C1C1C]/10 bg-white/95 px-6 py-4 shadow-[0_-8px_32px_rgba(0,0,0,0.08)] backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
            <div>
              <p className="font-semibold text-[#1C1C1C]">{style.name}</p>
              <p className="text-sm text-[#1C1C1C]/50">{color.name} · {qty.toLocaleString()} units · ${Number(totalPrice).toLocaleString()}</p>
            </div>
            <a href={`/cart?${cartParams}`}
              className="shrink-0 rounded-xl bg-[var(--og-orange)] px-6 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-[#d73b05]">
              Proceed to Checkout →
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
