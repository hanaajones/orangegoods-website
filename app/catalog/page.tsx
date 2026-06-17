"use client";

import Link from "next/link";
import { useState } from "react";
import {
  CATALOG_PRODUCTS,
  CATEGORY_LABELS,
  CATEGORY_ORDER,
  calcPrice,
  type CatalogCategory,
} from "@/data/catalog";

const PRODUCT_IMAGES: Record<string, string> = {
  "bella-canvas-3001":
    "https://orangegoods.co/wp-content/uploads/2025/03/OrangeGoods_Goods_17.avif",
  "gildan-8000":
    "https://orangegoods.co/wp-content/uploads/2025/03/OrangeGoods_Goods_17.avif",
  "as-colour-5026":
    "https://orangegoods.co/wp-content/uploads/2025/03/OrangeGoods_Goods_17.avif",
  "as-colour-5083":
    "https://orangegoods.co/wp-content/uploads/2025/03/OrangeGoods_Goods_17.avif",
  "comfort-colors-1717":
    "https://orangegoods.co/wp-content/uploads/2025/03/OrangeGoods_Goods_17.avif",
  "la-apparel-1801":
    "https://orangegoods.co/wp-content/uploads/2025/03/OrangeGoods_Goods_17.avif",
  "lane-seven-ls16005gd":
    "https://orangegoods.co/wp-content/uploads/2025/03/OrangeGoods_Goods_17.avif",
  "as-colour-5101":
    "https://orangegoods.co/wp-content/uploads/2025/03/OrangeGoods_Goods_17.avif",
  "as-colour-5100":
    "https://orangegoods.co/wp-content/uploads/2025/03/OrangeGoods_Goods_17.avif",
  "bella-canvas-3719":
    "https://orangegoods.co/wp-content/uploads/2025/03/OrangeGoods_Goods_17.avif",
  "comfort-colors-1566":
    "https://orangegoods.co/wp-content/uploads/2025/03/OrangeGoods_Goods_17.avif",
  "as-colour-5120":
    "https://orangegoods.co/wp-content/uploads/2025/03/OrangeGoods_Goods_17.avif",
  "as-colour-5120-crew":
    "https://orangegoods.co/wp-content/uploads/2025/03/OrangeGoods_Goods_17.avif",
  "as-colour-5921":
    "https://orangegoods.co/wp-content/uploads/2025/03/OrangeGoods_Goods_17.avif",
  "as-colour-5942":
    "https://orangegoods.co/wp-content/uploads/2025/03/OrangeGoods_Goods_17.avif",
  "as-colour-5933":
    "https://orangegoods.co/wp-content/uploads/2025/03/OrangeGoods_Goods_17.avif",
  "as-colour-5903":
    "https://orangegoods.co/wp-content/uploads/2025/03/OrangeGoods_Goods_17.avif",
  "as-colour-4001":
    "https://orangegoods.co/wp-content/uploads/2025/03/OrangeGoods_Goods_17.avif",
  "as-colour-4030":
    "https://orangegoods.co/wp-content/uploads/2025/03/OrangeGoods_Goods_17.avif",
  "as-colour-4072":
    "https://orangegoods.co/wp-content/uploads/2025/03/OrangeGoods_Goods_17.avif",
  "as-colour-4007":
    "https://orangegoods.co/wp-content/uploads/2025/03/OrangeGoods_Goods_17.avif",
  "as-colour-5520":
    "https://orangegoods.co/wp-content/uploads/2025/03/OrangeGoods_Goods_17.avif",
  exp54lwp:
    "https://orangegoods.co/wp-content/uploads/2025/03/OrangeGoods_Goods_17.avif",
  "as-colour-5522":
    "https://orangegoods.co/wp-content/uploads/2025/03/OrangeGoods_Goods_17.avif",
};

function getProductImage(slug: string): string {
  return (
    PRODUCT_IMAGES[slug] ||
    "https://orangegoods.co/wp-content/uploads/2025/03/OrangeGoods_Goods_17.avif"
  );
}

const ACTIVE_CATEGORIES = CATEGORY_ORDER.filter((cat) =>
  CATALOG_PRODUCTS.some((p) => p.category === cat)
);

export default function CatalogPage() {
  const [activeCategory, setActiveCategory] = useState<
    CatalogCategory | "all"
  >("all");

  const filtered =
    activeCategory === "all"
      ? CATALOG_PRODUCTS
      : CATALOG_PRODUCTS.filter((p) => p.category === activeCategory);

  return (
    <main className="pb-24 md:pb-0">
      {/* Hero */}
      <section className="bg-[#1C1C1C] px-4 py-14 md:px-8 md:py-20 lg:px-12">
        <div className="mx-auto max-w-5xl">
          <p
            className="text-sm font-semibold uppercase tracking-[0.28em] text-[#FF7F00]"
            style={{ fontFamily: "var(--font-accent)" }}
          >
            B2B Wholesale Catalog
          </p>
          <h1
            className="mt-3 text-5xl uppercase leading-tight text-white md:text-7xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Shoppable Catalog
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-white/60 md:text-lg">
            Browse our full lineup of premium blanks — configured with screen
            print, live pricing, and bulk-order breakdowns. Minimum 100 units.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2 text-sm text-white/70">
              <span className="h-2 w-2 rounded-full bg-[#FF4200]" />
              100-unit minimum
            </span>
            <span className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2 text-sm text-white/70">
              <span className="h-2 w-2 rounded-full bg-[#FF4200]" />
              2–3 week turnaround
            </span>
            <span className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2 text-sm text-white/70">
              <span className="h-2 w-2 rounded-full bg-[#FF4200]" />
              Screen print included
            </span>
          </div>
        </div>
      </section>

      {/* Category filters */}
      <section className="sticky top-[72px] z-20 border-b border-[#1C1C1C]/10 bg-[#F3EFE7]/95 backdrop-blur px-4 py-3 md:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
            <button
              onClick={() => setActiveCategory("all")}
              className={`shrink-0 rounded-xl px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] transition ${
                activeCategory === "all"
                  ? "bg-[#FF4200] text-white"
                  : "bg-white text-[#1C1C1C]/60 hover:bg-[#1C1C1C]/8 hover:text-[#1C1C1C]"
              }`}
            >
              All
            </button>
            {ACTIVE_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`shrink-0 rounded-xl px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] transition ${
                  activeCategory === cat
                    ? "bg-[#FF4200] text-white"
                    : "bg-white text-[#1C1C1C]/60 hover:bg-[#1C1C1C]/8 hover:text-[#1C1C1C]"
                }`}
              >
                {CATEGORY_LABELS[cat]}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Product grid */}
      <section className="px-4 py-10 md:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <p className="mb-6 text-sm text-[#1C1C1C]/40">
            {filtered.length} product{filtered.length !== 1 ? "s" : ""}
          </p>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {filtered.map((product) => {
              const fromPrice = calcPrice(
                product.blank,
                product.blankMarkup,
                product.printCat,
                100
              );
              return (
                <Link
                  key={product.slug}
                  href={`/catalog/${product.slug}`}
                  className="group flex flex-col overflow-hidden rounded-[1.5rem] border border-[#1C1C1C]/10 bg-white transition hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.10)]"
                >
                  {/* Thumbnail */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#E4DFCD]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={getProductImage(product.slug)}
                      alt={product.name}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                    {/* Tags */}
                    {product.tags.slice(0, 1).map((tag) => (
                      <span
                        key={tag}
                        className="absolute left-3 top-3 rounded-lg bg-[#FF4200] px-2 py-1 text-[10px] font-bold uppercase tracking-[0.08em] text-white"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {/* Info */}
                  <div className="flex flex-1 flex-col p-4">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#FF4200]">
                      {CATEGORY_LABELS[product.category]}
                    </p>
                    <h2
                      className="mt-1 text-sm uppercase leading-tight text-[#1C1C1C]"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {product.name}
                    </h2>
                    <p className="mt-1 line-clamp-2 text-xs leading-5 text-[#1C1C1C]/50">
                      {product.description}
                    </p>
                    {/* Tags row */}
                    <div className="mt-2 flex flex-wrap gap-1">
                      {product.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="rounded-lg bg-[#E4DFCD] px-2 py-0.5 text-[9px] font-semibold uppercase tracking-[0.1em] text-[#1C1C1C]/60"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    {/* Price */}
                    <div className="mt-4 flex items-center justify-between border-t border-[#1C1C1C]/8 pt-3">
                      <div>
                        <p className="text-[10px] text-[#1C1C1C]/40">
                          From
                        </p>
                        <p className="text-base font-bold text-[#FF4200]">
                          ${fromPrice.toFixed(2)}
                          <span className="ml-1 text-[10px] font-normal text-[#1C1C1C]/40">
                            /ea at 100
                          </span>
                        </p>
                      </div>
                      <span className="rounded-xl bg-[#1C1C1C] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.1em] text-white transition group-hover:bg-[#FF4200]">
                        Configure →
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {filtered.length === 0 && (
            <div className="py-20 text-center">
              <p className="text-[#1C1C1C]/40">
                No products in this category yet.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-[#1C1C1C]/10 bg-[#1C1C1C] px-4 py-16 text-center md:px-8">
        <p
          className="text-xs font-semibold uppercase tracking-[0.28em] text-[#FF7F00]"
          style={{ fontFamily: "var(--font-accent)" }}
        >
          Don&apos;t see what you need?
        </p>
        <h2
          className="mt-3 text-3xl uppercase text-white md:text-4xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          We source beyond the catalog
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-white/50">
          If you have a specific blank in mind, we can source it. Reach out and
          we&apos;ll build a custom quote.
        </p>
        <a
          href="/contact"
          className="mt-8 inline-flex min-h-12 items-center rounded-xl bg-[#FF4200] px-8 text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-[#d73b05]"
        >
          Start a Project
        </a>
      </section>
    </main>
  );
}
