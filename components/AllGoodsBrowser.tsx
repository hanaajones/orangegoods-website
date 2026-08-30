"use client";

import { useMemo, useState, type CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  GOODS_BROWSER_CATEGORY_LABELS,
  GOODS_BROWSER_PRODUCTION_PATH_LABELS,
  type GoodsBrowserCategory,
  type GoodsBrowserColor,
  type GoodsBrowserItem,
  type GoodsBrowserProductionPath,
} from "@/lib/goods-browser";

const COLOR_SWATCH_BACKGROUNDS: Record<string, string> = {
  Black: "#1a1a1a",
  White: "#ffffff",
  Grey: "#80858d",
  Cream: "#efe7d8",
  Blue: "#234a93",
  Green: "#647a4e",
  Brown: "#7a5a3a",
  Tan: "#c9b390",
  Pink: "#dfa7b4",
  Burgundy: "#6a1a2a",
  Red: "#c63a2a",
  Orange: "#d9793e",
  Yellow: "#e7c85f",
  Purple: "#7b61a9",
  Camo: "linear-gradient(135deg, #5b6a43 0%, #8a7b54 50%, #2d3a28 100%)",
  Stripe: "linear-gradient(135deg, #234a93 0%, #234a93 35%, #efe7d8 35%, #efe7d8 65%, #1a1a1a 65%, #1a1a1a 100%)",
  "Athletic Heather": "#b9bdc4",
};

const COLOR_GROUPS = [
  { key: "blacks", label: "Blacks", swatch: "#1a1a1a" },
  { key: "greys", label: "Greys", swatch: "#9297a1" },
  { key: "naturals", label: "Naturals", swatch: "#e7dece" },
  { key: "browns", label: "Browns", swatch: "#8b6443" },
  { key: "greens", label: "Greens", swatch: "#5d7b5f" },
  { key: "blues", label: "Blues", swatch: "#305aa7" },
  { key: "reds", label: "Reds", swatch: "#bc2c2c" },
  { key: "oranges", label: "Oranges", swatch: "#d9793e" },
  { key: "yellows", label: "Yellows", swatch: "#e7c85f" },
  { key: "pinks", label: "Pinks", swatch: "#dfa7b4" },
  { key: "purples", label: "Purples", swatch: "#7b61a9" },
  { key: "patterns", label: "Patterns", swatch: "linear-gradient(135deg, #5b6a43 0%, #d8d0c2 50%, #234a93 100%)" },
] as const;

const PRICE_OPTIONS = [
  { key: "all", label: "All Prices" },
  { key: "under-15", label: "Under $15" },
  { key: "15-25", label: "$15-$25" },
  { key: "25-40", label: "$25-$40" },
  { key: "40-plus", label: "$40+" },
] as const;

type PriceFilter = (typeof PRICE_OPTIONS)[number]["key"];
type ColorFilterGroup = (typeof COLOR_GROUPS)[number]["key"];
const isDefinedString = (value: string | undefined): value is string => Boolean(value);

type AllGoodsBrowserProps = {
  items: GoodsBrowserItem[];
  className?: string;
  initialCategory?: GoodsBrowserCategory | "all";
  lockedCategory?: GoodsBrowserCategory;
  searchPlaceholder?: string;
  showProductionPathToggle?: boolean;
  productionPathHelperText?: string;
};

type GoodsBrowserFilters = {
  search: string;
  productionPath: GoodsBrowserProductionPath | "all";
  category: GoodsBrowserCategory | "all";
  type: string | "all";
  brand: string | "all";
  selectedColor: ColorFilterGroup | "all";
  fit: string | "all";
  price: PriceFilter;
};

function swatchStyle(color: GoodsBrowserColor): CSSProperties {
  return { background: COLOR_SWATCH_BACKGROUNDS[color] ?? "#d8d0c2" };
}

function swatchBorderClass(color: GoodsBrowserColor) {
  return color === "White" || color === "Cream" ? "border-[#0B32A0]/12" : "border-transparent";
}

function formatResultsCount(count: number) {
  return `${count} ${count === 1 ? "result" : "results"}`;
}

function getColorGroup(color: GoodsBrowserColor): ColorFilterGroup {
  const normalized = color.toLowerCase();

  if (normalized.includes("camo") || normalized.includes("stripe") || normalized.includes("multi")) return "patterns";
  if (normalized.includes("black") || normalized.includes("coal") || normalized.includes("midnight")) return "blacks";
  if (normalized.includes("grey") || normalized.includes("gray") || normalized.includes("heather") || normalized.includes("silver") || normalized.includes("smoke") || normalized.includes("storm") || normalized.includes("ash")) return "greys";
  if (normalized.includes("white") || normalized.includes("cream") || normalized.includes("bone") || normalized.includes("natural") || normalized.includes("ecru")) return "naturals";
  if (normalized.includes("brown") || normalized.includes("tan") || normalized.includes("khaki") || normalized.includes("camel") || normalized.includes("walnut") || normalized.includes("mushroom") || normalized.includes("taupe") || normalized.includes("chestnut")) return "browns";
  if (normalized.includes("green") || normalized.includes("forest") || normalized.includes("cypress") || normalized.includes("sage") || normalized.includes("mint") || normalized.includes("seafoam") || normalized.includes("eucalyptus") || normalized.includes("pine") || normalized.includes("army") || normalized.includes("pistachio") || normalized.includes("lime") || normalized.includes("mineral")) return "greens";
  if (normalized.includes("blue") || normalized.includes("navy") || normalized.includes("royal") || normalized.includes("cobalt") || normalized.includes("slate") || normalized.includes("petrol") || normalized.includes("hydro") || normalized.includes("topaz") || normalized.includes("carolina") || normalized.includes("powder") || normalized.includes("lapis") || normalized.includes("atlantic")) return "blues";
  if (normalized.includes("red") || normalized.includes("burgundy") || normalized.includes("cardinal")) return "reds";
  if (normalized.includes("orange") || normalized.includes("fire") || normalized.includes("sunset") || normalized.includes("autumn") || normalized.includes("clay")) return "oranges";
  if (normalized.includes("yellow") || normalized.includes("mustard") || normalized.includes("butter") || normalized.includes("lemon") || normalized.includes("citrus")) return "yellows";
  if (normalized.includes("pink")) return "pinks";
  if (normalized.includes("purple") || normalized.includes("violet") || normalized.includes("grape") || normalized.includes("orchid") || normalized.includes("liberty")) return "purples";
  return "naturals";
}

function matchesPrice(item: GoodsBrowserItem, activePrice: PriceFilter) {
  if (activePrice === "all") return true;
  if (typeof item.fromPrice !== "number") return false;
  if (activePrice === "under-15") return item.fromPrice < 15;
  if (activePrice === "15-25") return item.fromPrice >= 15 && item.fromPrice < 25;
  if (activePrice === "25-40") return item.fromPrice >= 25 && item.fromPrice < 40;
  return item.fromPrice >= 40;
}

function matchesItem(
  item: GoodsBrowserItem,
  filters: GoodsBrowserFilters,
  omit: Partial<Record<keyof GoodsBrowserFilters, boolean>> = {},
) {
  const searchValue = filters.search.trim().toLowerCase();
  if (!omit.search && searchValue && !item.searchText.includes(searchValue)) return false;
  if (!omit.productionPath && filters.productionPath !== "all" && item.productionPath !== filters.productionPath) {
    return false;
  }
  if (!omit.category && filters.category !== "all" && item.category !== filters.category) return false;
  if (!omit.type && filters.type !== "all" && item.typeLabel !== filters.type) return false;
  if (!omit.brand && filters.brand !== "all" && item.brand !== filters.brand) return false;
  if (!omit.selectedColor && filters.selectedColor !== "all" && !item.colors.some((color) => getColorGroup(color) === filters.selectedColor)) {
    return false;
  }
  if (!omit.fit && filters.fit !== "all" && item.fit !== filters.fit) return false;
  if (!omit.price && !matchesPrice(item, filters.price)) return false;
  return true;
}

export function AllGoodsBrowser({
  items,
  className = "mx-auto w-full max-w-[min(1760px,calc(100vw-1rem))] px-3 pb-10 md:px-6 xl:px-8",
  initialCategory = "all",
  lockedCategory,
  searchPlaceholder = "Search styles, categories, brands, fit, or product type",
  showProductionPathToggle = false,
  productionPathHelperText,
}: AllGoodsBrowserProps) {
  const [search, setSearch] = useState("");
  const [productionPath, setProductionPath] = useState<GoodsBrowserProductionPath | "all">("all");
  const [category, setCategory] = useState<GoodsBrowserCategory | "all">(lockedCategory ?? initialCategory);
  const [type, setType] = useState<string | "all">("all");
  const [brand, setBrand] = useState<string | "all">("all");
  const [selectedColor, setSelectedColor] = useState<ColorFilterGroup | "all">("all");
  const [fit, setFit] = useState<string | "all">("all");
  const [price, setPrice] = useState<PriceFilter>("all");

  const effectiveCategory = lockedCategory ?? category;

  const filters = useMemo(
    () => ({ search, productionPath, category: effectiveCategory, type, brand, selectedColor, fit, price }),
    [brand, effectiveCategory, fit, price, productionPath, search, selectedColor, type],
  );

  const visibleItems = useMemo(
    () =>
      items
        .filter((item) => matchesItem(item, filters))
        .sort((left, right) => {
          if (left.kind !== right.kind) return left.kind === "style" ? -1 : 1;
          return left.title.localeCompare(right.title);
        }),
    [filters, items],
  );

  const categoryOptions = useMemo(
    () => [
      { key: "all" as const, label: "All Goods" },
      ...Object.entries(GOODS_BROWSER_CATEGORY_LABELS).map(([key, label]) => ({
        key: key as GoodsBrowserCategory,
        label,
      })),
    ],
    [],
  );

  const productionPathOptions = useMemo(
    () => [
      { key: "all" as const, label: "All" },
      ...Object.entries(GOODS_BROWSER_PRODUCTION_PATH_LABELS).map(([key, label]) => ({
        key: key as GoodsBrowserProductionPath,
        label,
      })),
    ],
    [],
  );

  const categoryCounts = useMemo(
    () =>
      Object.fromEntries(
        categoryOptions.map((option) => [
          option.key,
          items.filter((item) =>
            matchesItem(
              item,
              { ...filters, category: option.key },
              { category: true },
            ),
          ).length,
        ]),
      ) as Record<GoodsBrowserCategory | "all", number>,
    [categoryOptions, filters, items],
  );

  const typeOptions = useMemo(
    () =>
      Array.from(
        new Set(
          items
            .filter((item) => matchesItem(item, filters, { type: true }))
            .map((item) => item.typeLabel)
            .filter(isDefinedString),
        ),
      ).sort(),
    [filters, items],
  );

  const brandOptions = useMemo(
    () =>
      Array.from(
        new Set(
          items
            .filter((item) => matchesItem(item, filters, { brand: true }))
            .map((item) => item.brand)
            .filter(isDefinedString),
        ),
      ).sort(),
    [filters, items],
  );

  const colorOptions = useMemo(
    () =>
      Array.from(
        new Set(
          items
            .filter((item) => matchesItem(item, filters, { selectedColor: true }))
            .flatMap((item) => item.colors.map(getColorGroup)),
        ),
      )
        .map((groupKey) => COLOR_GROUPS.find((group) => group.key === groupKey))
        .filter(Boolean) as Array<(typeof COLOR_GROUPS)[number]>,
    [filters, items],
  );

  const fitOptions = useMemo(
    () =>
      Array.from(
        new Set(
          items
            .filter((item) => matchesItem(item, filters, { fit: true }))
            .map((item) => item.fit)
            .filter(isDefinedString),
        ),
      ).sort(),
    [filters, items],
  );

  const activeFilterCount =
    (search.trim() ? 1 : 0) +
    (showProductionPathToggle && productionPath !== "all" ? 1 : 0) +
    (lockedCategory ? 0 : effectiveCategory !== "all" ? 1 : 0) +
    (type !== "all" ? 1 : 0) +
    (brand !== "all" ? 1 : 0) +
    (selectedColor !== "all" ? 1 : 0) +
    (fit !== "all" ? 1 : 0) +
    (price !== "all" ? 1 : 0);

  const clearFilters = () => {
    setSearch("");
    setProductionPath("all");
    if (!lockedCategory) setCategory("all");
    setType("all");
    setBrand("all");
    setSelectedColor("all");
    setFit("all");
    setPrice("all");
  };

  return (
    <div className={className}>
      <div className="overflow-hidden rounded-[2rem] border border-[#0B32A0]/10 bg-[rgba(255,253,248,0.94)] shadow-[0_28px_90px_rgba(8,30,111,0.08)]">
        <div className="border-b border-[#0B32A0]/8 px-4 py-4 md:px-6 xl:px-8">
          {showProductionPathToggle ? (
            <div className="mb-5 rounded-[1.6rem] border border-[#0B32A0]/10 bg-[#F4EEDF] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.52)] md:p-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#0B50D0]">
                Production Path
              </p>
              <div className="mt-3 inline-flex flex-wrap gap-2 rounded-full bg-white/78 p-1">
                {productionPathOptions.map((option) => {
                  const isActive = productionPath === option.key;

                  return (
                    <button
                      key={option.key}
                      type="button"
                      onClick={() => setProductionPath(option.key)}
                      className={`min-h-11 rounded-full px-4 py-2 text-sm font-semibold transition ${
                        isActive
                          ? "bg-[#0B50D0] text-white shadow-[0_10px_22px_rgba(11,80,208,0.2)]"
                          : "text-[var(--og-blue)] hover:bg-[#0B32A0]/6"
                      }`}
                    >
                      {option.label}
                    </button>
                  );
                })}
              </div>
              {productionPathHelperText ? (
                <p className="mt-3 max-w-3xl text-sm leading-6 text-[var(--og-muted)]">
                  {productionPathHelperText}
                </p>
              ) : null}
            </div>
          ) : null}

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
                placeholder={searchPlaceholder}
                className="w-full bg-transparent text-base text-[var(--og-blue)] outline-none placeholder:text-[var(--og-blue)]/55"
                aria-label="Search goods browser"
              />
            </div>

            <div className="flex items-center justify-between gap-4 xl:min-w-[16rem] xl:justify-end">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--og-blue)]">
                {formatResultsCount(visibleItems.length)}
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

          {!lockedCategory ? (
            <div className="mt-4 overflow-x-auto pb-1">
              <div className="flex min-w-max gap-2.5">
                {categoryOptions.map((option) => {
                  const isActive = effectiveCategory === option.key;
                  const count = categoryCounts[option.key];

                  return (
                    <button
                      key={option.key}
                      type="button"
                      onClick={() => setCategory(option.key)}
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
          ) : null}
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
                {typeOptions.length ? (
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0B50D0]">
                      Type
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2.5">
                      <button
                        type="button"
                        onClick={() => setType("all")}
                        className={`rounded-full border px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] transition ${
                          type === "all"
                            ? "border-[#0B50D0] bg-[#0B50D0] text-white"
                            : "border-[#0B32A0]/12 bg-white/62 text-[var(--og-blue)] hover:border-[#0B50D0]/28"
                        }`}
                      >
                        All Types
                      </button>
                      {typeOptions.map((option) => (
                        <button
                          key={option}
                          type="button"
                          onClick={() => setType(option)}
                          className={`rounded-full border px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] transition ${
                            type === option
                              ? "border-[#0B50D0] bg-white text-[#0B50D0]"
                              : "border-[#0B32A0]/12 bg-white/62 text-[var(--og-blue)] hover:border-[#0B50D0]/28"
                          }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>
                ) : null}

                {brandOptions.length ? (
                  <div className="border-t border-[#0B32A0]/14 pt-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0B50D0]">
                      Brand
                    </p>
                    <div className="mt-3 space-y-2">
                      <button
                        type="button"
                        onClick={() => setBrand("all")}
                        className={`flex w-full items-center justify-between rounded-2xl px-3 py-2 text-left transition ${
                          brand === "all"
                            ? "bg-white text-[#0B50D0] shadow-sm"
                            : "text-[var(--og-blue)]/78 hover:bg-white/66"
                        }`}
                      >
                        <span className="text-sm font-medium">All Brands</span>
                      </button>
                      {brandOptions.map((option) => (
                        <button
                          key={option}
                          type="button"
                          onClick={() => setBrand(option)}
                          className={`flex w-full items-center justify-between rounded-2xl px-3 py-2 text-left transition ${
                            brand === option
                              ? "bg-white text-[#0B50D0] shadow-sm"
                              : "text-[var(--og-blue)]/78 hover:bg-white/66"
                          }`}
                        >
                          <span className="text-sm font-medium">{option}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                ) : null}

                {colorOptions.length ? (
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
                      {colorOptions.map((colorGroup) => (
                        <button
                          key={colorGroup.key}
                          type="button"
                          onClick={() => setSelectedColor(colorGroup.key)}
                          className={`inline-flex items-center gap-2 rounded-full border px-2.5 py-1.5 text-[11px] font-semibold transition ${
                            selectedColor === colorGroup.key
                              ? "border-[#0B50D0] bg-white text-[#0B50D0]"
                              : "border-[#0B32A0]/12 bg-white/62 text-[var(--og-blue)] hover:border-[#0B50D0]/28"
                          }`}
                        >
                          <span
                            className={`h-4 w-4 rounded-full border ${colorGroup.key === "naturals" ? "border-[#0B32A0]/12" : "border-transparent"}`}
                            style={{ background: colorGroup.swatch }}
                          />
                          <span>{colorGroup.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                ) : null}

                {fitOptions.length ? (
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
                        </button>
                      ))}
                    </div>
                  </div>
                ) : null}

                <div className="border-t border-[#0B32A0]/14 pt-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0B50D0]">
                    Cost
                  </p>
                  <div className="mt-3 space-y-2">
                    {PRICE_OPTIONS.map((option) => (
                      <button
                        key={option.key}
                        type="button"
                        onClick={() => setPrice(option.key)}
                        className={`flex w-full items-center justify-between rounded-2xl px-3 py-2 text-left transition ${
                          price === option.key
                            ? "bg-white text-[#0B50D0] shadow-sm"
                            : "text-[var(--og-blue)]/78 hover:bg-white/66"
                        }`}
                      >
                        <span className="text-sm font-medium">{option.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </aside>

          <div>
            {visibleItems.length === 0 ? (
              <div className="rounded-[1.8rem] border border-dashed border-[#0B32A0]/18 bg-white/72 px-8 py-20 text-center">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--og-blue)]">
                  No matches
                </p>
                <p className="mt-3 text-base leading-7 text-[var(--og-muted)]">
                  Try clearing a few filters or broadening the search.
                </p>
                <button
                  type="button"
                  onClick={clearFilters}
                  className="mt-6 inline-flex min-h-11 items-center justify-center rounded-xl border-2 border-[#0B32A0] px-5 text-sm font-semibold uppercase tracking-[0.12em] text-[#0B32A0] transition hover:border-[var(--og-orange)] hover:bg-[var(--og-orange)] hover:text-white"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid gap-6 md:grid-cols-2 2xl:grid-cols-3">
                {visibleItems.map((item) => (
                  <article
                    key={item.id}
                    className="group overflow-hidden rounded-[1.9rem] border-[3px] border-transparent bg-[rgba(255,248,241,0.88)] transition hover:border-[#0B32A0] hover:shadow-lg"
                  >
                    <Link href={item.href} className="block">
                      <div className={`relative ${item.imageAspectClass ?? "aspect-[4/4.4]"} bg-white`}>
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          sizes="(min-width: 1536px) 28vw, (min-width: 768px) 44vw, 100vw"
                          className="object-cover transition duration-300 group-hover:scale-[1.03]"
                          style={item.imagePosition ? { objectPosition: item.imagePosition } : undefined}
                        />
                        <div className="absolute left-3 top-3 flex flex-wrap gap-2">
                          <span className="rounded-full bg-[#0B32A0]/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[var(--og-blue)]">
                            {item.categoryLabel}
                          </span>
                          <span className="rounded-full bg-[var(--og-orange)]/14 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[var(--og-orange)]">
                            {GOODS_BROWSER_PRODUCTION_PATH_LABELS[item.productionPath]}
                          </span>
                          {item.typeLabel ? (
                            <span className="rounded-full bg-white/86 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[var(--og-blue)]">
                              {item.typeLabel}
                            </span>
                          ) : null}
                        </div>
                      </div>

                      <div className="p-6">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--og-orange)]">
                          {item.subtitle}
                        </p>
                        <h2 className="mt-1 text-2xl font-semibold leading-none text-[var(--og-blue)]">
                          {item.title}
                        </h2>
                        <p className="mt-3 text-sm leading-6 text-[var(--og-muted)]">
                          {item.description}
                        </p>

                        {item.decorationOptions?.length ? (
                          <div className="mt-4 flex flex-wrap gap-2">
                            {item.decorationOptions.map((option) => (
                              <span
                                key={`${item.id}-${option}`}
                                className="rounded-full border border-[#0B32A0]/10 bg-white/82 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--og-blue)]"
                              >
                                {option}
                              </span>
                            ))}
                          </div>
                        ) : null}

                        {item.colors.length ? (
                          <div className="mt-4 flex items-center gap-2">
                            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--og-blue)]/58">
                              Available in {item.colors.length} color{item.colors.length === 1 ? "" : "s"}
                            </p>
                            <div className="flex items-center gap-1.5">
                              {item.colors.slice(0, 5).map((color) => (
                                <span
                                  key={`${item.id}-${color}`}
                                  className={`h-3.5 w-3.5 rounded-full border ${swatchBorderClass(color)}`}
                                  style={swatchStyle(color)}
                                />
                              ))}
                              {item.colors.length > 5 ? (
                                <span className="text-[11px] font-semibold text-[var(--og-blue)]/58">
                                  +{item.colors.length - 5}
                                </span>
                              ) : null}
                            </div>
                          </div>
                        ) : null}

                        {item.priceLabel ? (
                          <p className="mt-4 text-sm font-semibold text-[var(--og-orange)]">
                            {item.priceLabel}
                          </p>
                        ) : (
                          <p className="mt-4 text-sm font-semibold text-[var(--og-orange)]">
                            Explore category
                          </p>
                        )}

                        <span className="mt-5 inline-flex min-h-11 items-center justify-center rounded-xl border-2 border-[#0B32A0] px-5 text-sm font-semibold uppercase tracking-[0.12em] text-[#0B32A0] transition group-hover:-translate-y-[2px] group-hover:border-[var(--og-orange)] group-hover:bg-[var(--og-orange)] group-hover:text-white">
                          {item.ctaLabel}
                        </span>
                      </div>
                    </Link>
                  </article>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
