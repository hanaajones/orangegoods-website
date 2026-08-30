"use client";

import { useMemo, useState, type CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { CATALOG_PRODUCTS, calcPrice, type CatalogProduct } from "@/data/catalog";

type FamilyKey =
  | "all"
  | "tees"
  | "long-sleeves"
  | "hoodies"
  | "bottoms"
  | "womens"
  | "outerwear";

type BrandKey =
  | "all"
  | "AS Colour"
  | "Bella+Canvas"
  | "Comfort Colors"
  | "Gildan"
  | "LA Apparel"
  | "Lane Seven"
  | "Other";

type ColorKey =
  | "all"
  | "Black"
  | "White"
  | "Grey"
  | "Blue"
  | "Green"
  | "Brown"
  | "Tan"
  | "Pink"
  | "Red"
  | "Orange"
  | "Yellow";

type QuickTurnApparelStyleSpec = {
  slug: string;
  family: Exclude<FamilyKey, "all">;
  brand: Exclude<BrandKey, "all">;
  colors: Exclude<ColorKey, "all">[];
  image: string;
  title: string;
  description: string;
  timeline?: string;
};

const FAMILY_OPTIONS: { key: FamilyKey; label: string }[] = [
  { key: "all", label: "All Styles" },
  { key: "tees", label: "Tees" },
  { key: "long-sleeves", label: "Long Sleeves" },
  { key: "hoodies", label: "Hoodies + Fleece" },
  { key: "bottoms", label: "Bottoms" },
  { key: "womens", label: "Women's" },
  { key: "outerwear", label: "Outerwear" },
];

const BRAND_OPTIONS: BrandKey[] = [
  "all",
  "AS Colour",
  "Bella+Canvas",
  "Comfort Colors",
  "Gildan",
  "LA Apparel",
  "Lane Seven",
  "Other",
];

const FAMILY_LABELS: Record<Exclude<FamilyKey, "all">, string> = {
  tees: "Tees",
  "long-sleeves": "Long Sleeves",
  hoodies: "Hoodies + Fleece",
  bottoms: "Bottoms",
  womens: "Women's",
  outerwear: "Outerwear",
};

const COLOR_OPTIONS: Exclude<ColorKey, "all">[] = [
  "Black",
  "White",
  "Grey",
  "Blue",
  "Green",
  "Brown",
  "Tan",
  "Pink",
  "Red",
  "Orange",
  "Yellow",
];

const COLOR_SWATCH_BACKGROUNDS: Record<Exclude<ColorKey, "all">, string> = {
  Black: "#1a1a1a",
  White: "#ffffff",
  Grey: "#80858d",
  Blue: "#234a93",
  Green: "#647a4e",
  Brown: "#7a5a3a",
  Tan: "#c9b390",
  Pink: "#dfa7b4",
  Red: "#c63a2a",
  Orange: "#d9793e",
  Yellow: "#e7c85f",
};

const PRODUCT_BY_SLUG: Record<string, CatalogProduct> = Object.fromEntries(
  CATALOG_PRODUCTS.map((product) => [product.slug, product])
);

function timelineForFamily(family: Exclude<FamilyKey, "all">) {
  if (family === "outerwear") return "3-4 weeks";
  return "2-3 weeks";
}

function colorFilterSwatchStyle(color: Exclude<ColorKey, "all">): CSSProperties {
  return {
    background: COLOR_SWATCH_BACKGROUNDS[color],
  };
}

export function QuickTurnApparelStyleGrid({
  styles,
  className = "mx-auto max-w-6xl px-6 pb-10 md:px-12",
}: {
  styles: QuickTurnApparelStyleSpec[];
  className?: string;
}) {
  const [family, setFamily] = useState<FamilyKey>("all");
  const [brand, setBrand] = useState<BrandKey>("all");
  const [selectedColor, setSelectedColor] = useState<ColorKey>("all");

  const availableColors = useMemo(
    () => COLOR_OPTIONS.filter((color) => styles.some((style) => style.colors.includes(color))),
    [styles]
  );

  const visibleStyles = useMemo(
    () =>
      styles.filter((style) => PRODUCT_BY_SLUG[style.slug]).filter((style) => {
        if (family !== "all" && style.family !== family) return false;
        if (brand !== "all" && style.brand !== brand) return false;
        if (selectedColor !== "all" && !style.colors.includes(selectedColor)) return false;
        return true;
      }),
    [family, brand, selectedColor, styles]
  );

  const hasFilters = family !== "all" || brand !== "all" || selectedColor !== "all";

  return (
    <div className={className}>
      <div className="mb-8 overflow-hidden rounded-[1.6rem] border border-[#0B32A0]/10 bg-[rgba(255,255,255,0.72)] shadow-[0_14px_36px_rgba(8,30,111,0.05)] backdrop-blur-sm">
        <div className="flex flex-col gap-3 px-4 py-4 md:flex-row md:items-start md:px-5">
          <p className="pt-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--og-blue)]/72 md:w-[4.75rem] md:shrink-0">
            Garment
          </p>
          <div className="flex flex-1 flex-wrap gap-2.5">
            {FAMILY_OPTIONS.map((option) => (
              <button
                key={option.key}
                type="button"
                onClick={() => setFamily(option.key)}
                className={`rounded-full border px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] transition ${
                  family === option.key
                    ? "border-[var(--og-orange)]/35 bg-[var(--og-orange)]/10 text-[var(--og-orange)]"
                    : "border-[#0B32A0]/12 bg-white/45 text-[var(--og-blue)]/72 hover:border-[var(--og-orange)]/28 hover:text-[var(--og-blue)]"
                }`}
              >
                <span className="relative top-px inline-block">{option.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="border-t border-[#0B32A0]/8 px-4 py-4 md:px-5">
          <div className="flex flex-col gap-3 md:flex-row md:items-start">
            <p className="pt-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--og-blue)]/72 md:w-[4.75rem] md:shrink-0">
              Brand
            </p>
            <div className="flex flex-1 flex-wrap items-start gap-2.5">
              {BRAND_OPTIONS.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setBrand(option)}
                  className={`rounded-full border px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] transition ${
                    brand === option
                      ? "border-[var(--og-orange)]/35 bg-[var(--og-orange)]/10 text-[var(--og-orange)]"
                      : "border-[#0B32A0]/12 bg-white/45 text-[var(--og-blue)]/72 hover:border-[var(--og-orange)]/28 hover:text-[var(--og-blue)]"
                  }`}
                >
                  <span className="relative top-px inline-block">
                    {option === "all" ? "All Brands" : option}
                  </span>
                </button>
              ))}
              {hasFilters ? (
                <button
                  type="button"
                  onClick={() => {
                    setFamily("all");
                    setBrand("all");
                    setSelectedColor("all");
                  }}
                  className="text-[11px] font-semibold text-[var(--og-muted)]/80 transition hover:text-[var(--og-orange)] md:ml-auto md:-translate-x-[5px] md:self-center"
                >
                  Clear ✕
                </button>
              ) : null}
            </div>
          </div>
        </div>

        <div className="border-t border-[#0B32A0]/8 px-4 py-4 md:px-5">
          <div className="flex flex-col gap-3 md:flex-row md:items-start">
            <p className="pt-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--og-blue)]/72 md:w-[4.75rem] md:shrink-0">
              Color{selectedColor !== "all" ? ` · ${selectedColor}` : ""}
            </p>
            <div className="flex flex-1 flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => setSelectedColor("all")}
                className={`rounded-full border px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] transition ${
                  selectedColor === "all"
                    ? "border-[var(--og-orange)]/35 bg-[var(--og-orange)]/10 text-[var(--og-orange)]"
                    : "border-[#0B32A0]/12 bg-white/45 text-[var(--og-blue)]/72 hover:border-[var(--og-orange)]/28 hover:text-[var(--og-blue)]"
                }`}
              >
                <span className="relative top-px inline-block">All Colors</span>
              </button>
              <div className="flex flex-wrap items-center gap-2.5 py-0.5">
                {availableColors.map((color) => (
                  <button
                    key={color}
                    type="button"
                    title={color}
                    aria-label={`Filter by ${color}`}
                    onClick={() => setSelectedColor(color)}
                    style={colorFilterSwatchStyle(color)}
                    className={`h-7 w-7 shrink-0 rounded-full border border-[#1C1C1C]/12 shadow-sm transition ${
                      selectedColor === color
                        ? "ring-2 ring-[var(--og-orange)] ring-offset-2"
                        : "hover:ring-2 hover:ring-[var(--og-orange)] hover:ring-offset-2"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {visibleStyles.length === 0 ? (
        <div className="py-20 text-center text-sm text-[var(--og-muted)]">
          No styles match those filters.{" "}
          <button
            type="button"
            onClick={() => {
              setFamily("all");
              setBrand("all");
              setSelectedColor("all");
            }}
            className="font-semibold text-[var(--og-orange)]"
          >
            Clear
          </button>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 2xl:grid-cols-3">
          {visibleStyles.map((style) => {
            const product = PRODUCT_BY_SLUG[style.slug];
            const fromPrice = calcPrice(product.blank, product.blankMarkup, product.printCat, 100);
            const href = `/catalog/${style.slug}?source=quick-turn-apparel-grid&program=Quick+Turn+Apparel`;

            return (
              <article
                key={style.slug}
                className="group relative overflow-hidden rounded-[1.9rem] border-[3px] border-transparent bg-[rgba(255,248,241,0.88)] transition hover:border-[#0B32A0] hover:shadow-lg"
              >
                <Link
                  href={href}
                  aria-label={`Open ${product.fullName}`}
                  className="absolute inset-0 z-10 rounded-[1.9rem]"
                />
                <div className="pointer-events-none">
                  <div className="relative aspect-[4/3] bg-white p-5">
                    <Image
                      src={style.image}
                      alt={style.title}
                      fill
                      sizes="(min-width: 1536px) 28vw, (min-width: 768px) 44vw, 100vw"
                      className="object-contain p-4 transition duration-300 group-hover:scale-[1.03]"
                    />
                    <span className="absolute right-3 top-3 rounded-full bg-[#0B32A0]/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[var(--og-blue)]">
                      {FAMILY_LABELS[style.family]}
                    </span>
                  </div>
                </div>
                <div className="pointer-events-none p-6">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--og-orange)]">
                    {product.name}
                  </p>
                  <h2 className="mt-1 text-2xl font-semibold leading-none text-[var(--og-blue)]">
                    {style.title}
                  </h2>
                  <p className="mt-2 text-sm text-[var(--og-muted)]">{style.description}</p>
                  <p className="mt-4 text-sm font-semibold text-[var(--og-orange)]">
                    From ${fromPrice.toFixed(2)} / piece
                  </p>
                  <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--og-blue)]/60">
                    {style.timeline ?? timelineForFamily(style.family)}
                  </p>
                  <Link
                    href={href}
                    className="pointer-events-auto relative z-20 mt-5 inline-flex min-h-11 items-center justify-center rounded-xl border-2 border-[#0B32A0] px-5 text-sm font-semibold uppercase tracking-[0.12em] text-[#0B32A0] transition hover:-translate-y-[2px] hover:border-[var(--og-orange)] hover:bg-[var(--og-orange)] hover:text-white"
                  >
                    Customize
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      )}
    </div>
  );
}
