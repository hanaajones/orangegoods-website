"use client";

import { useMemo, useState, type CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import type {
  ApparelCatalogBrand,
  ApparelCatalogColor,
  ApparelCatalogFamily,
  ApparelCatalogStyleItem,
} from "@/lib/apparel-styles";

const FAMILY_OPTIONS: { key: ApparelCatalogFamily | "all"; label: string }[] = [
  { key: "all", label: "All Styles" },
  { key: "tees", label: "T-Shirts" },
  { key: "long-sleeves", label: "Long Sleeves" },
  { key: "hoodies", label: "Fleece" },
  { key: "bottoms", label: "Bottoms" },
  { key: "womens", label: "Women's" },
  { key: "outerwear", label: "Outerwear" },
];

const BRAND_OPTIONS: Array<ApparelCatalogBrand | "all"> = [
  "all",
  "AS Colour",
  "Bella+Canvas",
  "Comfort Colors",
  "Gildan",
  "LA Apparel",
  "Lane Seven",
  "Other",
];

const FAMILY_LABELS: Record<ApparelCatalogFamily, string> = {
  tees: "T-Shirts",
  "long-sleeves": "Long Sleeves",
  hoodies: "Fleece",
  bottoms: "Bottoms",
  womens: "Women's",
  outerwear: "Outerwear",
};

const COLOR_OPTIONS: ApparelCatalogColor[] = [
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

const COLOR_SWATCH_BACKGROUNDS: Record<ApparelCatalogColor, string> = {
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

function buildStyleSpecs(style: ApparelCatalogStyleItem) {
  const fit = style.fit ? `${style.fit} fit` : "";
  return [fit, style.weight, style.material].filter(Boolean).join(". ") + ".";
}

function colorFilterSwatchStyle(color: ApparelCatalogColor): CSSProperties {
  return {
    background: COLOR_SWATCH_BACKGROUNDS[color],
  };
}

function normalizeSearchValue(style: ApparelCatalogStyleItem) {
  return [
    style.brand,
    style.name,
    style.title,
    style.fullName,
    style.fit,
    style.weight,
    style.material,
    FAMILY_LABELS[style.family],
  ]
    .join(" ")
    .toLowerCase();
}

function formatResultsCount(count: number) {
  return `${count} ${count === 1 ? "style" : "styles"}`;
}

function swatchBorderClass(color: ApparelCatalogColor) {
  return color === "White" ? "border-[#0B32A0]/12" : "border-transparent";
}

type FilterState = {
  search: string;
  family: ApparelCatalogFamily | "all";
  brand: ApparelCatalogBrand | "all";
  selectedColor: ApparelCatalogColor | "all";
  fit: string | "all";
  weight: string | "all";
  material: string | "all";
};

export function ApparelStylesCatalog({
  styles,
  className = "mx-auto w-full max-w-[min(1760px,calc(100vw-1rem))] px-3 pb-10 md:px-6 xl:px-8",
}: {
  styles: ApparelCatalogStyleItem[];
  className?: string;
}) {
  const [search, setSearch] = useState("");
  const [family, setFamily] = useState<ApparelCatalogFamily | "all">("all");
  const [brand, setBrand] = useState<ApparelCatalogBrand | "all">("all");
  const [selectedColor, setSelectedColor] = useState<ApparelCatalogColor | "all">("all");
  const [fit, setFit] = useState<string | "all">("all");
  const [weight, setWeight] = useState<string | "all">("all");
  const [material, setMaterial] = useState<string | "all">("all");

  const fitOptions = useMemo(
    () => Array.from(new Set(styles.map((style) => style.fit).filter(Boolean))).sort(),
    [styles],
  );
  const weightOptions = useMemo(
    () => Array.from(new Set(styles.map((style) => style.weight).filter(Boolean))).sort(),
    [styles],
  );
  const materialOptions = useMemo(
    () => Array.from(new Set(styles.map((style) => style.material).filter(Boolean))).sort(),
    [styles],
  );
  const availableColors = useMemo(
    () => COLOR_OPTIONS.filter((color) => styles.some((style) => style.colors.includes(color))),
    [styles],
  );

  const filters = useMemo<FilterState>(
    () => ({ search, family, brand, selectedColor, fit, weight, material }),
    [brand, family, fit, material, search, selectedColor, weight],
  );

  const matchesStyle = (
    style: ApparelCatalogStyleItem,
    activeFilters: FilterState,
    omit: Partial<Record<keyof FilterState, boolean>> = {},
  ) => {
    const searchValue = activeFilters.search.trim().toLowerCase();
    if (!omit.search && searchValue && !normalizeSearchValue(style).includes(searchValue)) return false;
    if (!omit.family && activeFilters.family !== "all" && style.family !== activeFilters.family) return false;
    if (!omit.brand && activeFilters.brand !== "all" && style.brand !== activeFilters.brand) return false;
    if (
      !omit.selectedColor &&
      activeFilters.selectedColor !== "all" &&
      !style.colors.includes(activeFilters.selectedColor)
    ) {
      return false;
    }
    if (!omit.fit && activeFilters.fit !== "all" && style.fit !== activeFilters.fit) return false;
    if (!omit.weight && activeFilters.weight !== "all" && style.weight !== activeFilters.weight) return false;
    if (!omit.material && activeFilters.material !== "all" && style.material !== activeFilters.material) return false;
    return true;
  };

  const visibleStyles = useMemo(
    () => styles.filter((style) => matchesStyle(style, filters)),
    [filters, styles],
  );

  const familyCounts = useMemo(
    () =>
      Object.fromEntries(
        FAMILY_OPTIONS.map((option) => [
          option.key,
          styles.filter((style) =>
            matchesStyle(
              style,
              {
                ...filters,
                family: option.key,
              },
              { family: true },
            ),
          ).length,
        ]),
      ) as Record<ApparelCatalogFamily | "all", number>,
    [filters, styles],
  );

  const brandCounts = useMemo(
    () =>
      Object.fromEntries(
        BRAND_OPTIONS.map((option) => [
          option,
          styles.filter((style) =>
            matchesStyle(
              style,
              {
                ...filters,
                brand: option,
              },
              { brand: true },
            ),
          ).length,
        ]),
      ) as Record<ApparelCatalogBrand | "all", number>,
    [filters, styles],
  );

  const colorCounts = useMemo(
    () =>
      Object.fromEntries(
        availableColors.map((color) => [
          color,
          styles.filter((style) =>
            matchesStyle(
              style,
              {
                ...filters,
                selectedColor: color,
              },
              { selectedColor: true },
            ),
          ).length,
        ]),
      ) as Record<ApparelCatalogColor, number>,
    [availableColors, filters, styles],
  );

  const fitCounts = useMemo(
    () =>
      Object.fromEntries(
        fitOptions.map((option) => [
          option,
          styles.filter((style) =>
            matchesStyle(
              style,
              {
                ...filters,
                fit: option,
              },
              { fit: true },
            ),
          ).length,
        ]),
      ) as Record<string, number>,
    [filters, fitOptions, styles],
  );

  const weightCounts = useMemo(
    () =>
      Object.fromEntries(
        weightOptions.map((option) => [
          option,
          styles.filter((style) =>
            matchesStyle(
              style,
              {
                ...filters,
                weight: option,
              },
              { weight: true },
            ),
          ).length,
        ]),
      ) as Record<string, number>,
    [filters, styles, weightOptions],
  );

  const materialCounts = useMemo(
    () =>
      Object.fromEntries(
        materialOptions.map((option) => [
          option,
          styles.filter((style) =>
            matchesStyle(
              style,
              {
                ...filters,
                material: option,
              },
              { material: true },
            ),
          ).length,
        ]),
      ) as Record<string, number>,
    [filters, materialOptions, styles],
  );

  const activeFilterCount =
    (search.trim() ? 1 : 0) +
    (family !== "all" ? 1 : 0) +
    (brand !== "all" ? 1 : 0) +
    (selectedColor !== "all" ? 1 : 0) +
    (fit !== "all" ? 1 : 0) +
    (weight !== "all" ? 1 : 0) +
    (material !== "all" ? 1 : 0);

  const clearFilters = () => {
    setSearch("");
    setFamily("all");
    setBrand("all");
    setSelectedColor("all");
    setFit("all");
    setWeight("all");
    setMaterial("all");
  };

  return (
    <div className={className}>
      <div className="overflow-hidden rounded-[2rem] border border-[#0B32A0]/10 bg-[rgba(255,253,248,0.94)] shadow-[0_28px_90px_rgba(8,30,111,0.08)]">
        <div className="border-b border-[#0B32A0]/8 px-4 py-4 md:px-6 xl:px-8">
          <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
            <div className="flex min-w-0 flex-1 items-center gap-3 rounded-[1.3rem] border border-[#0B32A0]/10 bg-[#EAE2D4] px-4 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.55)]">
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
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search styles, brands, fit, or fabric"
                className="w-full bg-transparent text-base text-[var(--og-blue)] outline-none placeholder:text-[var(--og-blue)]/55"
                aria-label="Search apparel styles"
              />
            </div>

            <div className="flex items-center justify-between gap-4 xl:min-w-[16rem] xl:justify-end">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--og-blue)]">
                {formatResultsCount(visibleStyles.length)}
              </p>
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

          <div className="mt-4 overflow-x-auto pb-1">
            <div className="flex min-w-max gap-2.5">
              {FAMILY_OPTIONS.map((option) => {
                const isActive = family === option.key;
                const count = familyCounts[option.key];

                return (
                  <button
                    key={option.key}
                    type="button"
                    onClick={() => setFamily(option.key)}
                    className={`inline-flex min-h-14 items-center gap-3 rounded-full border px-4 py-2.5 text-left transition ${
                      isActive
                        ? "border-[#0B50D0] bg-[#0B50D0] text-white shadow-[0_10px_24px_rgba(11,80,208,0.24)]"
                        : "border-[#0B32A0]/10 bg-[#F4EEDF] text-[var(--og-blue)] hover:border-[#0B50D0]/24"
                    }`}
                  >
                    <span className="text-sm font-semibold">{option.label}</span>
                    <span
                      className={`rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] ${
                        isActive ? "bg-white/16 text-white/86" : "bg-white/72 text-[var(--og-blue)]/72"
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="grid gap-6 px-4 py-5 md:px-6 xl:grid-cols-[280px_minmax(0,1fr)] xl:gap-8 xl:px-8 xl:py-8">
          <aside className="xl:sticky xl:top-24 xl:self-start">
            <div className="rounded-[1.8rem] bg-[#F4EEDF] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.55)]">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-3xl font-semibold uppercase leading-none text-[#0B50D0]">
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
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0B50D0]">
                    Brand
                  </p>
                  <div className="mt-3 space-y-2">
                    {BRAND_OPTIONS.map((option) => {
                      const count = brandCounts[option];
                      const isActive = brand === option;

                      return (
                        <button
                          key={option}
                          type="button"
                          onClick={() => setBrand(option)}
                          className={`flex w-full items-center justify-between rounded-2xl px-3 py-2 text-left transition ${
                            isActive
                              ? "bg-white text-[#0B50D0] shadow-sm"
                              : "text-[var(--og-blue)]/78 hover:bg-white/66"
                          }`}
                        >
                          <span className="text-sm font-medium">
                            {option === "all" ? "All Brands" : option}
                          </span>
                          <span className="text-sm font-semibold">{count}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="border-t border-[#0B32A0]/14 pt-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0B50D0]">
                    Color
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2.5">
                    <button
                      type="button"
                      onClick={() => setSelectedColor("all")}
                      className={`rounded-full border px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] transition ${
                        selectedColor === "all"
                          ? "border-[#0B50D0] bg-[#0B50D0] text-white"
                          : "border-[#0B32A0]/12 bg-white/62 text-[var(--og-blue)] hover:border-[#0B50D0]/28"
                      }`}
                    >
                      All Colors
                    </button>
                    {availableColors.map((color) => {
                      const isActive = selectedColor === color;
                      const count = colorCounts[color];

                      return (
                        <button
                          key={color}
                          type="button"
                          onClick={() => setSelectedColor(color)}
                          className={`inline-flex items-center gap-2 rounded-full border px-2.5 py-1.5 text-[11px] font-semibold transition ${
                            isActive
                              ? "border-[#0B50D0] bg-white text-[#0B50D0]"
                              : "border-[#0B32A0]/12 bg-white/62 text-[var(--og-blue)] hover:border-[#0B50D0]/28"
                          }`}
                        >
                          <span
                            className={`h-4 w-4 rounded-full border ${swatchBorderClass(color)}`}
                            style={colorFilterSwatchStyle(color)}
                          />
                          <span>{color}</span>
                          <span className="text-[var(--og-blue)]/58">{count}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="border-t border-[#0B32A0]/14 pt-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0B50D0]">
                    Fit
                  </p>
                  <div className="mt-3 space-y-2">
                    <button
                      type="button"
                      onClick={() => setFit("all")}
                      className={`flex w-full items-center justify-between rounded-2xl px-3 py-2 text-left transition ${
                        fit === "all"
                          ? "bg-white text-[#0B50D0] shadow-sm"
                          : "text-[var(--og-blue)]/78 hover:bg-white/66"
                      }`}
                    >
                      <span className="text-sm font-medium">All Fits</span>
                      <span className="text-sm font-semibold">
                        {styles.filter((style) => matchesStyle(style, filters, { fit: true })).length}
                      </span>
                    </button>
                    {fitOptions.map((option) => (
                      <button
                        key={option}
                        type="button"
                        onClick={() => setFit(option)}
                        className={`flex w-full items-center justify-between rounded-2xl px-3 py-2 text-left transition ${
                          fit === option
                            ? "bg-white text-[#0B50D0] shadow-sm"
                            : "text-[var(--og-blue)]/78 hover:bg-white/66"
                        }`}
                      >
                        <span className="text-sm font-medium">{option}</span>
                        <span className="text-sm font-semibold">{fitCounts[option]}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="border-t border-[#0B32A0]/14 pt-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0B50D0]">
                    Fabric Weight
                  </p>
                  <div className="mt-3 space-y-2">
                    <button
                      type="button"
                      onClick={() => setWeight("all")}
                      className={`flex w-full items-center justify-between rounded-2xl px-3 py-2 text-left transition ${
                        weight === "all"
                          ? "bg-white text-[#0B50D0] shadow-sm"
                          : "text-[var(--og-blue)]/78 hover:bg-white/66"
                      }`}
                    >
                      <span className="text-sm font-medium">All Weights</span>
                      <span className="text-sm font-semibold">
                        {styles.filter((style) => matchesStyle(style, filters, { weight: true })).length}
                      </span>
                    </button>
                    {weightOptions.map((option) => (
                      <button
                        key={option}
                        type="button"
                        onClick={() => setWeight(option)}
                        className={`flex w-full items-center justify-between rounded-2xl px-3 py-2 text-left transition ${
                          weight === option
                            ? "bg-white text-[#0B50D0] shadow-sm"
                            : "text-[var(--og-blue)]/78 hover:bg-white/66"
                        }`}
                      >
                        <span className="text-sm font-medium">{option}</span>
                        <span className="text-sm font-semibold">{weightCounts[option]}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="border-t border-[#0B32A0]/14 pt-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0B50D0]">
                    Fabric Content
                  </p>
                  <div className="mt-3 space-y-2">
                    <button
                      type="button"
                      onClick={() => setMaterial("all")}
                      className={`flex w-full items-center justify-between rounded-2xl px-3 py-2 text-left transition ${
                        material === "all"
                          ? "bg-white text-[#0B50D0] shadow-sm"
                          : "text-[var(--og-blue)]/78 hover:bg-white/66"
                      }`}
                    >
                      <span className="text-sm font-medium">All Fabrics</span>
                      <span className="text-sm font-semibold">
                        {styles.filter((style) => matchesStyle(style, filters, { material: true })).length}
                      </span>
                    </button>
                    {materialOptions.map((option) => (
                      <button
                        key={option}
                        type="button"
                        onClick={() => setMaterial(option)}
                        className={`flex w-full items-center justify-between rounded-2xl px-3 py-2 text-left transition ${
                          material === option
                            ? "bg-white text-[#0B50D0] shadow-sm"
                            : "text-[var(--og-blue)]/78 hover:bg-white/66"
                        }`}
                      >
                        <span className="max-w-[11rem] text-sm font-medium leading-5">{option}</span>
                        <span className="text-sm font-semibold">{materialCounts[option]}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </aside>

          <div>
            {visibleStyles.length === 0 ? (
              <div className="rounded-[1.8rem] border border-dashed border-[#0B32A0]/16 bg-white/72 px-6 py-20 text-center">
                <p className="text-lg font-semibold text-[var(--og-blue)]">No styles match those filters.</p>
                <button
                  type="button"
                  onClick={clearFilters}
                  className="mt-4 rounded-full border border-[#0B32A0]/14 px-4 py-2 text-sm font-semibold text-[var(--og-orange)] transition hover:border-[var(--og-orange)]/32"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid gap-5 md:grid-cols-2 2xl:grid-cols-3 3xl:grid-cols-4">
                {visibleStyles.map((style) => {
                  const href = `/create/apparel/${encodeURIComponent(style.slug)}`;
                  const visibleSwatches = style.colors.slice(0, 5);
                  const hiddenColorCount = Math.max(style.colors.length - visibleSwatches.length, 0);

                  return (
                    <article
                      key={style.slug}
                      className="group relative overflow-hidden rounded-[1.9rem] border-[3px] border-transparent bg-[rgba(255,248,241,0.88)] transition hover:border-[#0B32A0] hover:shadow-lg"
                    >
                      <Link
                        href={href}
                        aria-label={`Open ${style.fullName}`}
                        className="absolute inset-0 z-10 rounded-[1.9rem]"
                      />
                      <div className="pointer-events-none">
                        <div className="relative aspect-[4/4.45] bg-white p-4">
                          <Image
                            src={style.image}
                            alt={style.title}
                            fill
                            sizes="(min-width: 1800px) 22vw, (min-width: 1536px) 26vw, (min-width: 768px) 40vw, 100vw"
                            className="object-contain p-2 scale-[1.05] transition duration-300 group-hover:scale-[1.08]"
                          />
                          <span className="absolute right-3 top-3 rounded-full bg-[#0B32A0]/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[var(--og-blue)]">
                            {FAMILY_LABELS[style.family]}
                          </span>
                        </div>
                      </div>
                      <div className="pointer-events-none p-6">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--og-orange)]">
                          {style.name}
                        </p>
                        <h2 className="mt-1 text-2xl font-semibold leading-none text-[var(--og-blue)]">
                          {style.title}
                        </h2>
                        <p className="mt-2 text-sm text-[var(--og-muted)]">{buildStyleSpecs(style)}</p>
                        <div className="mt-4 flex items-center gap-3">
                          <p className="text-sm font-semibold text-[var(--og-blue)]">
                            Available in {style.colors.length} color{style.colors.length === 1 ? "" : "s"}
                          </p>
                          <div className="flex items-center gap-1.5">
                            {visibleSwatches.map((color) => (
                              <span
                                key={`${style.slug}-${color}`}
                                className={`h-3.5 w-3.5 rounded-full border ${swatchBorderClass(color)}`}
                                style={colorFilterSwatchStyle(color)}
                                aria-hidden="true"
                              />
                            ))}
                            {hiddenColorCount > 0 ? (
                              <span className="text-[11px] font-semibold text-[var(--og-blue)]/56">
                                +{hiddenColorCount}
                              </span>
                            ) : null}
                          </div>
                        </div>
                        <p className="mt-4 text-sm font-semibold text-[var(--og-orange)]">
                          From ${style.fromPrice.toFixed(2)} / piece with printing
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
        </div>
      </div>
    </div>
  );
}
