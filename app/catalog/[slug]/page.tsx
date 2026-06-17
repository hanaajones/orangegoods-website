"use client";

import { notFound } from "next/navigation";
import Link from "next/link";
import { useState, useMemo, use } from "react";
import {
  CATALOG_PRODUCTS,
  CATEGORY_LABELS,
  ADDONS,
  calcPrice,
  QTY_OPTIONS,
  type AddonKey,
  type QtyOption,
} from "@/data/catalog";

const PRODUCT_IMAGE =
  "https://orangegoods.co/wp-content/uploads/2025/03/OrangeGoods_Goods_17.avif";

const WHAT_IS_INCLUDED = [
  "1-color screen print (front chest)",
  "Jol print with flash cure",
  "Screen charge amortized into pricing",
  "Pre-press art check",
  "Decorated & QC'd — ready to ship",
];

export default function CatalogProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const product = CATALOG_PRODUCTS.find((p) => p.slug === slug);

  const [qty, setQty] = useState<QtyOption | "lets-talk">(100);
  const [selectedAddons, setSelectedAddons] = useState<Set<AddonKey>>(
    new Set()
  );

  const basePrice = useMemo(() => {
    if (qty === "lets-talk") return null;
    return calcPrice(product!.blank, product!.blankMarkup, product!.printCat, qty as QtyOption);
  }, [product, qty]);

  const addonTotal = useMemo(() => {
    let total = 0;
    selectedAddons.forEach((key) => {
      total += ADDONS[key].price;
    });
    return total;
  }, [selectedAddons]);

  const pricePerUnit = useMemo(() => {
    if (basePrice === null) return null;
    return basePrice + addonTotal;
  }, [basePrice, addonTotal]);

  const estimatedTotal = useMemo(() => {
    if (pricePerUnit === null || qty === "lets-talk") return null;
    return pricePerUnit * (qty as number);
  }, [pricePerUnit, qty]);

  if (!product) return notFound();

  function toggleAddon(key: AddonKey) {
    setSelectedAddons((prev) => {
      const next = new Set(prev);
      if (next.has(key)) {
        next.delete(key);
      } else {
        next.add(key);
      }
      return next;
    });
  }

  function buildMailtoLink() {
    if (!product) return "mailto:Hello@OrangeGoods.co";
    const addonLabels =
      selectedAddons.size > 0
        ? Array.from(selectedAddons)
            .map((k) => ADDONS[k].label)
            .join(", ")
        : "None";
    const priceStr =
      pricePerUnit !== null ? `$${pricePerUnit.toFixed(2)}/ea` : "Let&apos;s Talk";
    const qtyStr = qty === "lets-talk" ? "2,500+" : String(qty);

    const subject = encodeURIComponent(
      `Quote Request — ${product.fullName}`
    );
    const body = encodeURIComponent(
      `Hi Orange Goods team,\n\nI'm interested in a quote for:\n\nProduct: ${product.fullName}\nQty: ${qtyStr}\nAdd-ons: ${addonLabels}\nEstimated price shown: ${priceStr}\n\nPlease reach out to discuss details.`
    );
    return `mailto:Hello@OrangeGoods.co?subject=${subject}&body=${body}`;
  }

  return (
    <main className="pb-24 md:pb-0">
      {/* Breadcrumb */}
      <div className="border-b border-[#1C1C1C]/10 bg-[#F3EFE7] px-4 py-3 md:px-8">
        <div className="mx-auto flex max-w-6xl items-center gap-2 text-xs text-[#1C1C1C]/40">
          <Link href="/catalog" className="hover:text-[#FF4200] transition">
            Catalog
          </Link>
          <span>/</span>
          <span className="capitalize">
            {CATEGORY_LABELS[product.category]}
          </span>
          <span>/</span>
          <span className="text-[#1C1C1C]/70">{product.name}</span>
        </div>
      </div>

      {/* Main layout */}
      <section className="px-4 py-10 md:px-8 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1fr_1fr] lg:gap-16">
          {/* Left — product image + info */}
          <div>
            {/* Image */}
            <div className="relative overflow-hidden rounded-[2rem] bg-[#E4DFCD] aspect-[4/3]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={PRODUCT_IMAGE}
                alt={product.name}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Product info */}
            <div className="mt-8 rounded-[1.5rem] border border-[#1C1C1C]/10 bg-white p-6">
              <h2
                className="text-sm uppercase tracking-[0.22em] text-[#FF4200]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {CATEGORY_LABELS[product.category]}
              </h2>
              <h1
                className="mt-2 text-2xl uppercase leading-tight text-[#1C1C1C] md:text-3xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {product.fullName}
              </h1>
              <p className="mt-3 text-sm leading-6 text-[#1C1C1C]/60">
                {product.description}
              </p>
              {/* Spec grid */}
              <dl className="mt-6 grid grid-cols-2 gap-3">
                {[
                  { label: "Weight", value: product.weight },
                  { label: "Fit", value: product.fit },
                  { label: "Material", value: product.material },
                  { label: "Turnaround", value: "2–3 weeks" },
                ].map(({ label, value }) => (
                  <div key={label} className="rounded-xl bg-[#F3EFE7] px-4 py-3">
                    <dt className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#1C1C1C]/40">
                      {label}
                    </dt>
                    <dd className="mt-1 text-sm font-medium text-[#1C1C1C]">
                      {value}
                    </dd>
                  </div>
                ))}
              </dl>
              {/* Tags */}
              <div className="mt-4 flex flex-wrap gap-2">
                {product.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-xl bg-[#FF4200]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.1em] text-[#FF4200]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* What's included */}
            <div className="mt-4 rounded-[1.5rem] border border-[#1C1C1C]/10 bg-white p-6">
              <h3
                className="text-sm uppercase tracking-[0.18em] text-[#1C1C1C]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                What&apos;s included
              </h3>
              <ul className="mt-4 grid gap-2">
                {WHAT_IS_INCLUDED.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-[#1C1C1C]/70">
                    <span className="mt-0.5 shrink-0 text-[#FF4200]">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right — configurator */}
          <div className="flex flex-col gap-4">
            {/* Sticky configurator card */}
            <div className="rounded-[2rem] border-2 border-[#0B32A0]/20 bg-white p-6 shadow-[0_12px_40px_rgba(8,30,111,0.07)] md:sticky md:top-[88px]">
              <p
                className="text-xs font-semibold uppercase tracking-[0.22em] text-[#FF4200]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Live Pricing Configurator
              </p>
              <h2
                className="mt-2 text-xl uppercase leading-tight text-[#1C1C1C] md:text-2xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Configure Your Order
              </h2>

              {/* Qty selector */}
              <div className="mt-6">
                <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-[#1C1C1C]/60">
                  Quantity
                </label>
                <div className="grid grid-cols-3 gap-2 sm:grid-cols-4">
                  {QTY_OPTIONS.map((q) => (
                    <button
                      key={q}
                      onClick={() => setQty(q)}
                      className={`rounded-xl py-2.5 text-sm font-bold transition ${
                        qty === q
                          ? "bg-[#FF4200] text-white"
                          : "bg-[#F3EFE7] text-[#1C1C1C] hover:bg-[#FF4200]/10 hover:text-[#FF4200]"
                      }`}
                    >
                      {q >= 1000
                        ? `${(q / 1000).toFixed(q % 1000 === 0 ? 0 : 1)}K`
                        : q}
                    </button>
                  ))}
                  <button
                    onClick={() => setQty("lets-talk")}
                    className={`col-span-1 rounded-xl py-2.5 text-xs font-bold transition sm:col-span-2 ${
                      qty === "lets-talk"
                        ? "bg-[#FF4200] text-white"
                        : "bg-[#F3EFE7] text-[#1C1C1C] hover:bg-[#FF4200]/10 hover:text-[#FF4200]"
                    }`}
                  >
                    Let&apos;s Talk
                    <span className="block text-[9px] opacity-60">2,500+</span>
                  </button>
                </div>
              </div>

              {/* Add-ons */}
              <div className="mt-6">
                <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-[#1C1C1C]/60">
                  Add-ons
                </label>
                <div className="grid gap-2">
                  {(Object.entries(ADDONS) as [AddonKey, { label: string; price: number }][]).map(
                    ([key, addon]) => (
                      <label
                        key={key}
                        className="flex cursor-pointer items-center justify-between rounded-xl border border-[#1C1C1C]/10 bg-[#F3EFE7] px-4 py-3 transition hover:border-[#FF4200]/30"
                      >
                        <div className="flex items-center gap-3">
                          <input
                            type="checkbox"
                            checked={selectedAddons.has(key)}
                            onChange={() => toggleAddon(key)}
                            className="h-4 w-4 accent-[#FF4200]"
                          />
                          <span className="text-sm text-[#1C1C1C]">
                            {addon.label}
                          </span>
                        </div>
                        <span className="text-sm font-semibold text-[#1C1C1C]/50">
                          +${addon.price.toFixed(2)}
                        </span>
                      </label>
                    )
                  )}
                </div>
              </div>

              {/* Price display */}
              <div className="mt-6 rounded-[1.25rem] bg-[#1C1C1C] p-5 text-white">
                {qty === "lets-talk" ? (
                  <div className="text-center">
                    <p className="text-3xl font-bold text-[#FF4200]">
                      Let&apos;s Talk
                    </p>
                    <p className="mt-1 text-xs text-white/50">
                      Custom pricing for 2,500+ units
                    </p>
                  </div>
                ) : (
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.14em] text-white/40">
                        Per unit
                      </p>
                      <p className="mt-1 text-2xl font-bold text-[#FF4200]">
                        ${pricePerUnit?.toFixed(2)}
                      </p>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.14em] text-white/40">
                        Est. total
                      </p>
                      <p className="mt-1 text-2xl font-bold text-white">
                        $
                        {estimatedTotal
                          ? estimatedTotal >= 1000
                            ? `${(estimatedTotal / 1000).toFixed(1)}K`
                            : estimatedTotal.toFixed(0)
                          : "—"}
                      </p>
                    </div>
                    <div className="col-span-2 border-t border-white/10 pt-3">
                      <p className="text-[10px] text-white/40">
                        {qty.toLocaleString()} units ×
                        ${pricePerUnit?.toFixed(2)}/ea
                        {addonTotal > 0 && (
                          <span className="ml-1 text-[#FF7F00]">
                            (incl. +${addonTotal.toFixed(2)} add-ons)
                          </span>
                        )}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* CTAs */}
              <div className="mt-4 grid gap-3">
                <a
                  href={buildMailtoLink()}
                  className="flex min-h-12 items-center justify-center rounded-xl bg-[#FF4200] px-6 text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-[#d73b05]"
                >
                  Request a Quote →
                </a>
                <div className="relative">
                  <button
                    disabled
                    title="Shopify checkout coming soon — reach out to order now."
                    className="flex min-h-12 w-full cursor-not-allowed items-center justify-center rounded-xl border border-[#1C1C1C]/20 bg-[#F3EFE7] px-6 text-sm font-semibold uppercase tracking-[0.14em] text-[#1C1C1C]/30"
                  >
                    Add to Cart
                  </button>
                  <span className="pointer-events-none absolute -top-1 right-3 rounded-lg bg-[#1C1C1C] px-2 py-0.5 text-[9px] font-semibold uppercase tracking-[0.1em] text-white opacity-0 transition group-hover:opacity-100">
                    Coming Soon
                  </span>
                  <p className="mt-1.5 text-center text-[10px] text-[#1C1C1C]/30">
                    Shopify checkout coming soon — reach out to order now.
                  </p>
                </div>
              </div>

              <p className="mt-4 text-center text-[10px] text-[#1C1C1C]/30">
                Prices shown are estimates. Final quote confirmed after artwork
                review.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom nav */}
      <section className="border-t border-[#1C1C1C]/10 px-4 py-8 md:px-8">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <Link
            href="/catalog"
            className="text-sm font-semibold text-[#1C1C1C]/50 transition hover:text-[#FF4200]"
          >
            ← Back to Catalog
          </Link>
          <Link
            href="/contact"
            className="inline-flex min-h-10 items-center rounded-xl bg-[#1C1C1C] px-5 text-xs font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-[#FF4200]"
          >
            Start a Project
          </Link>
        </div>
      </section>
    </main>
  );
}
