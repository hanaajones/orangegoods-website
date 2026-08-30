"use client";

import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import { BEANIE_STYLES, getBeanieStyleBySlug } from "@/lib/beanie-styles";

const QUANTITY_OPTIONS = [100, 250, 500, 1000];
const shellCardClass = "rounded-[1.75rem] border border-[#081E6F]/12 bg-white/96 p-6 shadow-[0_24px_70px_rgba(8,30,111,0.08)]";
const processCardClass =
  "rounded-[1.5rem] border border-[#081E6F]/12 bg-[linear-gradient(180deg,#FFF9F2_0%,#F7F4ED_100%)] p-5 text-[#0B32A0] shadow-[0_16px_40px_rgba(8,30,111,0.07)]";
const labelTextClass = "text-[13px] font-semibold uppercase tracking-[0.16em] text-[#6b6b6b]";
const blueSelectedOptionClass =
  "border-[#0B32A0] bg-[#0B32A0] text-white shadow-[0_12px_28px_rgba(11,50,160,0.18)]";
const orangeSelectedOptionClass =
  "border-[#FF4200] bg-[#FF4200] text-white shadow-[0_12px_28px_rgba(255,66,0,0.2)]";
const unselectedOptionClass = "border-[#081E6F]/12 bg-[#FBF7F1] text-[#0B32A0] hover:border-[#0B50D0]";

export function BeanieBuilderPreview() {
  const searchParams = useSearchParams();
  const initialStyle = getBeanieStyleBySlug(searchParams.get("style"));
  const [selectedStyleSlug, setSelectedStyleSlug] = useState(initialStyle.slug);
  const [decoration, setDecoration] = useState(initialStyle.decorationOptions[0] ?? "Embroidery");
  const [quantity, setQuantity] = useState(100);
  const [needsArtworkHelp, setNeedsArtworkHelp] = useState(false);

  const selectedStyle = useMemo(
    () => BEANIE_STYLES.find((style) => style.slug === selectedStyleSlug) ?? BEANIE_STYLES[0],
    [selectedStyleSlug],
  );

  const estimatedUnitPriceLabel = decoration === "Woven Label" ? "Custom quote" : "From $8.00 / beanie";
  const timelineItems = [
    { label: "Style + decoration", value: "You are here now" },
    { label: "Artwork review", value: "1-2 business days" },
    { label: "Sampling + approval", value: "Optional" },
    { label: "Production", value: decoration === "Woven Label" ? "Custom quote" : "3-5 weeks" },
    { label: "Shipping", value: "1-4 days" },
  ];
  const includedItems = ["AS Colour beanie blank", decoration, "Size run", "Shipping"];
  const orderProcessSteps = [
    { title: "Choose the beanie", detail: "Start with the right knit, fit, and overall silhouette." },
    { title: "Set the decoration", detail: "Dial in embroidery, patch, or woven-label direction." },
    { title: "Review + quote", detail: "We confirm artwork, pricing, and the cleanest production path." },
  ];
  const projectSummary = [
    "Product: Beanies",
    "Program: Full Custom",
    `Beanie style: ${selectedStyle.model} ${selectedStyle.title}`,
    `Decoration: ${decoration}`,
    `Quantity: ${quantity.toLocaleString()}`,
    `Fit: ${selectedStyle.fit}`,
    `Material: ${selectedStyle.material}`,
    needsArtworkHelp ? "Artwork help: Yes" : "",
  ]
    .filter(Boolean)
    .join("\n");

  const submitHref = `/contact?${new URLSearchParams({
    intent: "submit-build",
    source: "og-crafted-beanie-builder",
    product: "Beanies",
    mode: "Full Custom",
    style: selectedStyle.model,
    styleName: selectedStyle.title,
    qty: String(quantity),
    decoration,
    material: selectedStyle.material,
    fit: selectedStyle.fit,
    needsArtworkHelp: needsArtworkHelp ? "Yes" : "",
    projectSummary,
  }).toString()}`;

  return (
    <main className="bg-[linear-gradient(180deg,#F8F5EE_0%,#F2ECE2_48%,#EEE6DA_100%)] text-[#1C1C1C]">
      <section className="border-b border-[#081E6F]/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.97)_0%,rgba(247,244,237,0.94)_100%)]">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-6 sm:px-6 lg:px-8">
          <Link
            href="/goods/all"
            className="inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-[#0B32A0] transition hover:text-[#FF4200]"
          >
            ← Back to all goods
          </Link>

          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[13px] font-semibold uppercase tracking-[0.22em] text-[#FF4200]">
                Draft builder
              </p>
              <h1 className="mt-3 text-[2.85rem] leading-[0.92] tracking-[-0.04em] text-[#0B32A0] md:text-[5.25rem]">
                Full Custom Beanies
              </h1>
            </div>
            <p className="max-w-2xl text-base leading-7 text-[#4b4b4b] md:text-lg">
              Same builder rhythm as the other custom pages, but kept wider and roomier so the beanie flow still feels like a proper experience.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            <span className="inline-flex min-h-11 items-center rounded-xl border border-dashed border-[#081E6F]/20 bg-[#F4EEDF] px-4 text-sm font-semibold text-[#0B32A0]">
              AS Colour beanie builder
            </span>
          </div>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-[92rem] gap-6 xl:grid-cols-[minmax(0,0.9fr)_minmax(390px,450px)_minmax(290px,330px)]">
          <div className="space-y-6 xl:max-w-[39rem]">
            <div className="relative aspect-[4/4.6] overflow-hidden rounded-[1.75rem] border border-[#081E6F]/10 bg-white shadow-[0_26px_70px_rgba(8,30,111,0.08)]">
              <Image
                src={selectedStyle.image}
                alt={selectedStyle.title}
                fill
                sizes="(min-width: 1280px) 34vw, 100vw"
                className="object-cover"
                style={selectedStyle.imagePosition ? { objectPosition: selectedStyle.imagePosition } : undefined}
              />
            </div>

            <div className={shellCardClass}>
              <p className={labelTextClass}>From order to delivery</p>
              <div className="relative mt-5 space-y-3 before:absolute before:bottom-[24px] before:left-[10px] before:top-[24px] before:w-px before:bg-[#0B32A0]/18">
                {timelineItems.map((item) => (
                  <div key={item.label} className="relative grid grid-cols-[22px_1fr] items-center gap-4">
                    <span className="z-10 h-3 w-3 justify-self-center rounded-full bg-[#FF4200]" />
                    <div className="flex flex-1 items-center justify-between gap-4 rounded-[1.15rem] bg-[linear-gradient(180deg,#FFF9F2_0%,#F6F1E8_100%)] px-5 py-4">
                      <span className="text-base font-medium text-[#4b4b4b]">{item.label}</span>
                      <span className="text-base font-semibold text-[#0B32A0]">{item.value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <section className="border-t border-[#081E6F]/10 pt-10">
              <div>
                <p className="text-[13px] font-semibold uppercase tracking-[0.18em] text-[#FF4200]">
                  Order process
                </p>
                <p className="mt-3 text-[1.35rem] font-semibold leading-tight text-[#0B32A0]">
                  What happens after you start your beanie order
                </p>
              </div>
              <div className="mt-5 grid gap-4 md:grid-cols-3">
                {orderProcessSteps.map((step, index) => (
                  <div key={step.title} className={processCardClass}>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#FF4200]">
                      Step {index + 1}
                    </p>
                    <p className="mt-3 text-xl font-semibold leading-tight">{step.title}</p>
                    <p className="mt-2 text-sm leading-6 text-[#4b4b4b]">{step.detail}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <aside className="space-y-4 lg:self-start">
            <div className={shellCardClass}>
              <nav className="flex flex-wrap gap-1 text-xs text-[#6b6b6b]">
                <span>Goods</span>
                <span>/</span>
                <span>Beanies</span>
                <span>/</span>
                <span className="font-semibold text-[#0B32A0]">{selectedStyle.title}</span>
              </nav>

              <div className="mt-6">
                <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-[#FF4200]">
                  Selected blank
                </p>
                <h2 className="mt-3 text-[2.55rem] leading-[0.94] tracking-[-0.03em] text-[#0B32A0]">
                  {selectedStyle.title}
                </h2>
                <p className="mt-3 text-base leading-7 text-[#4b4b4b]">
                  {selectedStyle.model} · {selectedStyle.typeLabel} · {selectedStyle.fit}
                </p>
                <div className="mt-5 flex flex-wrap gap-2.5">
                  <span className="rounded-full border border-[#081E6F]/12 bg-[#F5F7FC] px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#0B32A0]">
                    {selectedStyle.material}
                  </span>
                  <span className="rounded-full border border-[#0B32A0]/12 bg-[#EEF4FF] px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#0B32A0]">
                    {selectedStyle.fit}
                  </span>
                  <span className="rounded-full border border-[#FF4200]/16 bg-[#FFF4ED] px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#FF4200]">
                    {estimatedUnitPriceLabel}
                  </span>
                </div>
                <p className="mt-5 text-base leading-7 text-[#4b4b4b]">
                  {selectedStyle.description}
                </p>
              </div>
            </div>

            <div className={shellCardClass}>
              <div className="space-y-8 py-1">
                <div>
                  <label className={`mb-4 block ${labelTextClass}`}>Beanie style</label>
                  <div className="grid gap-3.5">
                    {BEANIE_STYLES.map((style) => {
                      const isActive = style.slug === selectedStyle.slug;
                      return (
                        <button
                          key={style.slug}
                          type="button"
                          onClick={() => {
                            setSelectedStyleSlug(style.slug);
                            setDecoration(style.decorationOptions[0] ?? "Embroidery");
                          }}
                          className={`rounded-[1.5rem] border px-5 py-5 text-left transition ${
                            isActive ? blueSelectedOptionClass : unselectedOptionClass
                          }`}
                        >
                          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] opacity-75">
                            {style.model}
                          </p>
                          <p className="mt-2 text-[1.85rem] font-semibold leading-none tracking-[-0.03em]">
                            {style.title}
                          </p>
                          <p className={`mt-3 text-sm leading-6 ${isActive ? "text-white/80" : "text-[#4b4b4b]"}`}>
                            {style.typeLabel} · {style.material}
                          </p>
                          <p className={`mt-1 text-sm leading-6 ${isActive ? "text-white/72" : "text-[#6b6b6b]"}`}>
                            {style.fit}
                          </p>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <section>
                  <p className={`mb-4 block ${labelTextClass}`}>Decoration method</p>
                  <div className="grid gap-3.5">
                    {selectedStyle.decorationOptions.map((option) => {
                      const isActive = decoration === option;
                      return (
                        <button
                          key={option}
                          type="button"
                          onClick={() => setDecoration(option)}
                          className={`min-h-[4.6rem] rounded-[1.25rem] border px-5 py-4 text-left text-base font-semibold uppercase tracking-[0.14em] transition ${
                            isActive ? orangeSelectedOptionClass : unselectedOptionClass
                          }`}
                        >
                          {option}
                        </button>
                      );
                    })}
                  </div>
                </section>

                <section>
                  <label className={`mb-4 block ${labelTextClass}`}>Quantity</label>
                  <div className="flex flex-wrap gap-3">
                    {QUANTITY_OPTIONS.map((option) => {
                      const isActive = quantity === option;
                      return (
                        <button
                          key={option}
                          type="button"
                          onClick={() => setQuantity(option)}
                          className={`min-h-12 rounded-full border px-5 py-3 text-base font-semibold transition ${
                            isActive
                              ? blueSelectedOptionClass
                              : "border-[#081E6F]/12 bg-[#F5F0E8] text-[#0B32A0] hover:border-[#0B50D0]"
                          }`}
                        >
                          {option.toLocaleString()}
                        </button>
                      );
                    })}
                  </div>
                </section>

                <section>
                  <label
                    className={`mb-3 flex items-start justify-between gap-4 rounded-[1.5rem] border px-5 py-5 transition ${
                      needsArtworkHelp ? "border-[#0B32A0]/18 bg-[#EEF4FF]" : "border-[#081E6F]/12 bg-[#F4EEDF]"
                    }`}
                  >
                    <div>
                      <p className={labelTextClass}>Need artwork?</p>
                      <p className="mt-2 text-sm leading-6 text-[#4b4b4b]">
                        Turn this on if the logo needs cleanup or adaptation for the beanie decoration.
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setNeedsArtworkHelp((current) => !current)}
                      className={`inline-flex h-11 min-w-[5.25rem] items-center rounded-full px-1 transition ${
                        needsArtworkHelp ? "bg-[#0B32A0]" : "bg-[#CBD5E7]"
                      }`}
                      aria-pressed={needsArtworkHelp}
                    >
                      <span
                        className={`h-9 w-9 rounded-full bg-white shadow-sm transition ${
                          needsArtworkHelp ? "translate-x-[2.1rem]" : "translate-x-0"
                        }`}
                      />
                    </button>
                  </label>
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

          <aside className="xl:sticky xl:top-28 xl:self-start">
            <div className="rounded-[1.85rem] border border-[#081E6F]/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.98)_0%,rgba(246,241,233,0.96)_100%)] p-6 shadow-[0_24px_70px_rgba(8,30,111,0.08)]">
              <div>
                <p className="text-[13px] font-semibold uppercase tracking-[0.16em] text-[#8a8a8a]">
                  Live price summary
                </p>
                <p className="mt-2 text-[1.65rem] font-semibold leading-tight text-[#0B32A0]">
                  Your build at a glance
                </p>
              </div>

              <div className="mt-6 space-y-3 text-sm">
                {[
                  { label: "Product", value: "Beanies" },
                  { label: "Style", value: `${selectedStyle.model} ${selectedStyle.title}` },
                  { label: "Decoration", value: decoration },
                  { label: "Quantity", value: `${quantity.toLocaleString()} units` },
                  { label: "Fit", value: selectedStyle.fit },
                  { label: "Material", value: selectedStyle.material },
                  { label: "Artwork help", value: needsArtworkHelp ? "Yes" : "No" },
                  { label: "Turnaround", value: decoration === "Woven Label" ? "Custom quote" : "3-5 weeks" },
                ].map((row) => (
                  <div
                    key={row.label}
                    className="grid grid-cols-[1fr_auto] items-baseline gap-4 rounded-[1.1rem] border border-[#081E6F]/10 bg-[#FBF7F1]/85 px-4 py-3"
                  >
                    <span className="text-[#6b6b6b]">{row.label}</span>
                    <span className="text-right font-semibold text-[#171717]">{row.value}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 border-t border-[#081E6F]/10 pt-6">
                <div className="mb-3 flex items-end justify-between gap-4">
                  <p className="text-[13px] font-semibold uppercase tracking-[0.16em] text-[#8a8a8a]">
                    Unit price
                  </p>
                  <p className="text-[1.7rem] font-semibold leading-none text-[#0B32A0]">
                    {estimatedUnitPriceLabel}
                  </p>
                </div>
              </div>

              <Link
                href={submitHref}
                className="mt-6 flex min-h-[3.5rem] w-full items-center justify-center rounded-[1.1rem] bg-[#FF4200] px-5 text-center text-base font-semibold uppercase tracking-[0.14em] text-white transition hover:-translate-y-0.5 hover:bg-[#E24A14]"
              >
                Submit order for review
              </Link>
              <p className="mt-3 text-center text-sm leading-6 text-[#6b6b6b]">
                Send us your build for review. Final quote is confirmed after review.
              </p>
              <Link
                href="/contact"
                className="mt-4 block text-center text-sm font-semibold text-[#777] underline-offset-4 transition hover:text-[#0B32A0] hover:underline"
              >
                Have Questions? Talk to our team.
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
