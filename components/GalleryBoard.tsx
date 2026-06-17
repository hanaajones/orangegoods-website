"use client";

import { useState } from "react";
import type { GalleryItem } from "@/lib/gallery-data";

const CATEGORIES = [
  { key: "all",        label: "All" },
  { key: "hats",       label: "Hats" },
  { key: "apparel",    label: "Apparel" },
  { key: "bags",       label: "Bags" },
  { key: "accessories",label: "Accessories" },
  { key: "drinkware",  label: "Drinkware" },
  { key: "socks",      label: "Socks" },
] as const;

export function GalleryBoard({ items }: { items: GalleryItem[] }) {
  const [active, setActive] = useState<"all" | GalleryItem["category"]>("all");
  const [lightbox, setLightbox] = useState<GalleryItem | null>(null);

  const filtered = active === "all" ? items : items.filter((i) => i.category === active);

  return (
    <section className="px-4 py-10 md:px-8 lg:px-12">
      {/* Filter pills */}
      <div className="mx-auto mb-8 flex max-w-6xl flex-wrap gap-2">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.key}
            type="button"
            onClick={() => setActive(cat.key as typeof active)}
            className={`rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] transition ${
              active === cat.key
                ? "border-[var(--og-orange)] bg-[var(--og-orange)] text-white"
                : "border-[#0B32A0]/20 text-[var(--og-blue)] hover:border-[var(--og-orange)] hover:text-[var(--og-orange)]"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Masonry grid */}
      <div className="mx-auto max-w-6xl columns-2 gap-3 md:columns-3 lg:columns-4">
        {filtered.map((item) => (
          <button
            key={`${item.src}-${item.client}`}
            type="button"
            onClick={() => setLightbox(item)}
            className="group relative mb-3 block w-full overflow-hidden rounded-[1.25rem] bg-[#e4dfcd]"
            style={{ breakInside: "avoid" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={item.src}
              alt={`${item.client} — ${item.product}`}
              className="w-full object-cover transition duration-300 group-hover:scale-[1.03]"
              loading="lazy"
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 via-black/10 to-transparent p-4 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--og-orange)]">
                {item.client}
              </p>
              <p className="mt-0.5 text-sm font-semibold text-white">
                {item.product}
              </p>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
          role="dialog"
          aria-modal="true"
        >
          {/* Backdrop */}
          <button
            type="button"
            aria-label="Close"
            onClick={() => setLightbox(null)}
            className="absolute inset-0 bg-black/85 backdrop-blur-sm"
          />
          {/* Card */}
          <div className="relative z-10 w-full max-w-3xl overflow-hidden rounded-[2rem] bg-[#1a1512]">
            {/* Close */}
            <button
              type="button"
              onClick={() => setLightbox(null)}
              className="absolute right-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
              aria-label="Close"
            >
              ✕
            </button>
            {/* Image */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={lightbox.src}
              alt={`${lightbox.client} — ${lightbox.product}`}
              className="max-h-[80vh] w-full object-contain"
            />
            {/* Caption */}
            <div className="px-6 py-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--og-orange)]">
                {lightbox.client}
              </p>
              <p className="mt-1 text-base font-semibold text-white">
                {lightbox.product}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
