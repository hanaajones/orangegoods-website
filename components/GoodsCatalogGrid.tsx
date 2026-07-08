"use client";

import Link from "next/link";
import { useState, startTransition } from "react";

type CatalogFilter = {
  key: string;
  label: string;
};

type CatalogItem = {
  slug: string;
  href: string;
  category: string;
  categoryLabel: string;
  name: string;
  description: string;
  image: string;
  fromPrice: number;
};

export function GoodsCatalogGrid({
  filters,
  items,
}: {
  filters: CatalogFilter[];
  items: CatalogItem[];
}) {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filteredItems =
    activeFilter === "all"
      ? items
      : items.filter((item) => item.category === activeFilter);

  return (
    <div className="mx-auto max-w-6xl">
      <div className="flex gap-2 overflow-x-auto border-b border-[#081E6F]/10 pb-5">
        {filters.map((filter) => {
          const active = filter.key === activeFilter;

          return (
            <button
              key={filter.key}
              type="button"
              onClick={() => {
                startTransition(() => {
                  setActiveFilter(filter.key);
                });
              }}
              className={`shrink-0 rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] transition ${
                active
                  ? "border-[#FF7F00] bg-[#FF7F00] text-white"
                  : "border-[#081E6F]/14 bg-white text-[var(--og-blue)] hover:border-[#FF7F00] hover:text-[#FF7F00]"
              }`}
            >
              {filter.label}
            </button>
          );
        })}
      </div>

      <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-3">
        {filteredItems.map((item) => (
          <Link
            key={item.slug}
            href={item.href}
            className="group flex min-h-full flex-col overflow-hidden rounded-lg border border-[#081E6F]/12 bg-white transition hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(8,30,111,0.12)]"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={item.image}
              alt={item.name}
              className="h-64 w-full object-cover transition duration-500 group-hover:scale-[1.03] md:h-72"
            />
            <div className="flex flex-1 flex-col p-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#FF7F00]">
                {item.categoryLabel}
              </p>
              <h3 className="mt-2 text-lg leading-none text-[var(--og-blue)]">
                {item.name}
              </h3>
              <div className="mt-auto flex items-end justify-between gap-2 pt-5">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#1C1C1C]/42">
                    Starting price
                  </p>
                  <p className="mt-1 text-sm font-semibold text-[var(--og-orange)]">
                    ${item.fromPrice.toFixed(2)}
                    <span className="ml-1 text-[10px] font-normal text-[#1C1C1C]/45">
                      /ea at 100
                    </span>
                  </p>
                </div>
                <span className="rounded-full bg-[#081E6F] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-white transition group-hover:bg-[#FF7F00]">
                  Customize
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
