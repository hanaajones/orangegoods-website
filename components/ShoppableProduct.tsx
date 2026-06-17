"use client";

import Link from "next/link";
import { useState } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

export type PriceTier = {
  label: string;
  corePrice: string;
  deluxePrice: string;
  note?: string;
  coreFeatures: string[];
  deluxeFeatures: string[];
};

export type ProductVariant = {
  name: string;
  modelNum: string;
  description: string;
  image?: string;
};

export type AddOnItem = {
  label: string;
  price: string; // e.g. "Included" | "+$1.00" | "+$0.50"
};

export type AddOnGroup = {
  heading: string;
  note?: string;
  items: AddOnItem[];
};

export type ProductTab = {
  label: string;
  content: string | React.ReactNode;
};

export type ShoppableProductProps = {
  name: string;
  tagline: string;
  image: string;
  tiers: PriceTier[];
  variants: ProductVariant[];
  tabs: ProductTab[];
  addOnGroups?: AddOnGroup[];
  ctaHref: string;
  ctaLabel?: string;
};

// ─── Component ────────────────────────────────────────────────────────────────

export function ShoppableProduct({
  name,
  tagline,
  image,
  tiers,
  variants,
  tabs,
  addOnGroups = [],
  ctaHref,
  ctaLabel = "Start a Project",
}: ShoppableProductProps) {
  const [selectedTier, setSelectedTier] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(0);
  const [activeTab, setActiveTab] = useState(0);
  const [pkg, setPkg] = useState<"core" | "deluxe">("core");

  const tier = tiers[selectedTier];
  const variant = variants[selectedVariant];

  return (
    <div className="mx-auto max-w-6xl rounded-[2rem] border border-[var(--og-sand)] bg-[rgba(255,248,241,0.88)] p-6 shadow-[0_24px_80px_rgba(8,30,111,0.07)] backdrop-blur md:p-8">
      {/* Header */}
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--og-orange)]">
          OG Crafted
        </p>
        <h2
          className="mt-2 text-4xl font-semibold leading-none tracking-[-0.03em] text-[var(--og-blue)] md:text-6xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {name}
        </h2>
        <p className="mt-3 text-lg text-[var(--og-muted)]">{tagline}</p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr]">
        {/* ── Left: image + style dropdown ── */}
        <div className="space-y-5">
          <div className="relative aspect-square w-full overflow-hidden rounded-[1.5rem] bg-[#d5bba2]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={variant.image || image}
              alt={variant.name}
              className="h-full w-full object-cover"
            />
            {/* Model badge */}
            <span className="absolute bottom-3 left-3 rounded-lg bg-black/50 px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-white backdrop-blur-sm">
              {variant.modelNum}
            </span>
          </div>

          {/* Style dropdown */}
          <div>
            <label
              htmlFor="hat-style-select"
              className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.22em] text-[var(--og-blue)]"
            >
              Style
            </label>
            <div className="relative">
              <select
                id="hat-style-select"
                value={selectedVariant}
                onChange={(e) => setSelectedVariant(Number(e.target.value))}
                className="w-full appearance-none rounded-xl border border-[#0B32A0]/20 bg-white/80 px-4 py-3 text-sm font-semibold text-[var(--og-blue)] focus:border-[var(--og-orange)] focus:outline-none"
              >
                {variants.map((v, i) => (
                  <option key={v.modelNum} value={i}>
                    {v.modelNum} — {v.name}
                  </option>
                ))}
              </select>
              {/* Chevron */}
              <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[var(--og-orange)]">
                ▾
              </span>
            </div>
            {variant.description ? (
              <p className="mt-2 text-sm leading-6 text-[var(--og-muted)]">
                {variant.description}
              </p>
            ) : null}
          </div>
        </div>

        {/* ── Right: package toggle + tier + tabs ── */}
        <div className="space-y-6">
          {/* Package toggle */}
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--og-blue)]">
              Package
            </p>
            <div className="grid grid-cols-2 gap-2">
              {(["core", "deluxe"] as const).map((p) => (
                <button
                  key={p}
                  type="button"
                  onClick={() => setPkg(p)}
                  className={`rounded-xl border px-4 py-3 text-left transition ${
                    pkg === p
                      ? "border-[var(--og-orange)] bg-[var(--og-dark-blue)] text-white"
                      : "border-[#0B32A0]/20 bg-white/60 hover:border-[var(--og-orange)]"
                  }`}
                >
                  <p
                    className={`text-xs font-semibold uppercase tracking-[0.14em] ${
                      pkg === p ? "text-white" : "text-[var(--og-blue)]"
                    }`}
                  >
                    {p === "core" ? "Hat Core" : "Hat Core Deluxe"}
                  </p>
                  {p === "deluxe" && (
                    <span className="mt-0.5 inline-block rounded-full bg-[var(--og-orange)] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
                      Best Value
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity tier selector */}
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--og-blue)]">
              Quantity
            </p>
            <div className="grid gap-2">
              {tiers.map((t, i) => (
                <button
                  key={t.label}
                  type="button"
                  onClick={() => setSelectedTier(i)}
                  className={`flex items-center justify-between rounded-xl border p-4 text-left transition ${
                    i === selectedTier
                      ? "border-[var(--og-orange)] bg-[var(--og-dark-blue)]"
                      : "border-[#0B32A0]/20 bg-white/60 hover:border-[var(--og-orange)]"
                  }`}
                >
                  <span
                    className={`text-sm font-semibold uppercase tracking-[0.12em] ${
                      i === selectedTier ? "text-white" : "text-[var(--og-blue)]"
                    }`}
                  >
                    {t.label}
                  </span>
                  <span
                    className={`text-sm font-bold ${
                      i === selectedTier ? "text-[#FF7F00]" : "text-[var(--og-orange)]"
                    }`}
                  >
                    {pkg === "core" ? t.corePrice : t.deluxePrice}
                  </span>
                </button>
              ))}
            </div>
            {tier.note && (
              <p className="mt-2 text-xs text-[var(--og-muted)] opacity-70">{tier.note}</p>
            )}
          </div>

          {/* What's included */}
          <div className="rounded-[1.25rem] border border-[#0B32A0]/15 bg-white/70 p-5">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--og-blue)]">
              {pkg === "core" ? "Hat Core includes" : "Hat Core Deluxe includes"}
            </p>
            <ul className="space-y-1.5">
              {(pkg === "core" ? tier.coreFeatures : tier.deluxeFeatures).map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-[var(--og-muted)]">
                  <span className="mt-0.5 text-[var(--og-orange)]">✓</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* Tabs */}
          <div>
            <div className="flex gap-1 overflow-x-auto border-b border-[#0B32A0]/15">
              {tabs.map((tab, i) => (
                <button
                  key={tab.label}
                  type="button"
                  onClick={() => setActiveTab(i)}
                  className={`shrink-0 border-b-2 px-3 pb-2 text-xs font-semibold uppercase tracking-[0.14em] transition ${
                    i === activeTab
                      ? "-mb-px border-[var(--og-orange)] text-[var(--og-orange)]"
                      : "border-transparent text-[var(--og-muted)] hover:text-[var(--og-blue)]"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            <div className="mt-4 text-sm leading-7 text-[var(--og-muted)]">
              {tabs[activeTab]?.content}
            </div>
          </div>

          {/* CTA */}
          <Link
            href={ctaHref}
            className="inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-[var(--og-orange)] text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-[#d73b05]"
          >
            {ctaLabel}
          </Link>
        </div>
      </div>

      {/* ── Add-ons section ── */}
      {addOnGroups.length > 0 && (
        <div className="mt-10 border-t border-[#0B32A0]/10 pt-10">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--og-orange)]">
            Upgrades & Add-Ons
          </p>
          <h3
            className="mb-8 text-2xl font-semibold text-[var(--og-blue)]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Customize every detail
          </h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {addOnGroups.map((group) => (
              <div
                key={group.heading}
                className="rounded-[1.25rem] border border-[#0B32A0]/15 bg-white/70 p-5"
              >
                <p className="mb-1 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--og-blue)]">
                  {group.heading}
                </p>
                {group.note && (
                  <p className="mb-3 text-xs text-[var(--og-muted)] opacity-70">{group.note}</p>
                )}
                <ul className="space-y-2">
                  {group.items.map((item) => (
                    <li
                      key={item.label}
                      className="flex items-center justify-between gap-2 text-sm"
                    >
                      <span className="text-[var(--og-muted)]">{item.label}</span>
                      <span
                        className={`shrink-0 text-xs font-semibold ${
                          item.price === "Included"
                            ? "text-green-600"
                            : "text-[var(--og-orange)]"
                        }`}
                      >
                        {item.price}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
