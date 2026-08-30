"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { hatStyles, type HatStyle } from "../style-data";

const PROFILE_OPTIONS = ["all", "Low profile", "Mid profile", "High profile"] as const;
const STYLE_TYPE_OPTIONS = ["all", "Unstructured", "Structured", "6-Panel", "5-Panel", "Trucker", "Performance"] as const;
const STARTING_PRICE = "$13.00";
const UNSTRUCTURED_STYLE_SLUGS = new Set([
  "og-100-dad-hat",
  "og-120-coast-cap",
  "og-140-surf-trucker",
  "og-180-trail-cap",
  "og-210-bucket-hat",
]);
const SIX_PANEL_STYLE_SLUGS = new Set([
  "og-100-dad-hat",
  "og-120-coast-cap",
  "og-160-field-trucker",
]);
const STRUCTURED_STYLE_SLUGS = new Set([
  "og-130-setter-cap",
  "og-150-stock-trucker",
  "og-160-field-trucker",
  "og-190-highline-cap",
  "og-200-perform-cap",
]);
const FIVE_PANEL_STYLE_SLUGS = new Set([
  "og-110-five-panel-unstructured-hat",
  "og-130-setter-cap",
  "og-140-surf-trucker",
  "og-150-stock-trucker",
  "og-170-foam-trucker",
  "og-180-trail-cap",
  "og-190-highline-cap",
  "og-200-perform-cap",
]);

function getStyleTypes(style: HatStyle) {
  const title = style.title.toLowerCase();
  const selector = style.selectorDescription.toLowerCase();
  const types = new Set<(typeof STYLE_TYPE_OPTIONS)[number]>();

  if (UNSTRUCTURED_STYLE_SLUGS.has(style.slug) || title.includes("unstructured") || selector.includes("unstructured")) {
    types.add("Unstructured");
  }
  if (STRUCTURED_STYLE_SLUGS.has(style.slug) || selector.includes("structured")) types.add("Structured");
  if (SIX_PANEL_STYLE_SLUGS.has(style.slug) || title.includes("dad")) types.add("6-Panel");
  if (FIVE_PANEL_STYLE_SLUGS.has(style.slug) || title.includes("trail") || selector.includes("camper") || title.includes("5-panel") || selector.includes("5-panel")) {
    types.add("5-Panel");
  }
  if (title.includes("trucker")) types.add("Trucker");
  if (title.includes("perform")) types.add("Performance");

  return types.size > 0 ? [...types] : ["5-Panel"];
}

export function HatStylesCatalog({ className = "mx-auto max-w-6xl px-6 pb-10 md:px-12" }: { className?: string }) {
  const [profile, setProfile] = useState<(typeof PROFILE_OPTIONS)[number]>("all");
  const [styleType, setStyleType] = useState<(typeof STYLE_TYPE_OPTIONS)[number]>("all");

  const filteredStyles = useMemo(() => (
    hatStyles.filter((style) => {
      if (profile !== "all" && style.profile !== profile) return false;
      if (styleType !== "all" && !getStyleTypes(style).includes(styleType)) return false;
      return true;
    })
  ), [profile, styleType]);

  const hasFilters = profile !== "all" || styleType !== "all";

  return (
    <div className={className}>
      <div className="mb-8 overflow-hidden rounded-[1.6rem] border border-[#0B32A0]/10 bg-[rgba(255,255,255,0.72)] shadow-[0_14px_36px_rgba(8,30,111,0.05)] backdrop-blur-sm">
        <div className="flex flex-col gap-3 px-4 py-4 md:flex-row md:items-start md:px-5">
          <p className="pt-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--og-blue)]/72 md:w-[4.75rem] md:shrink-0">
            Profile
          </p>
          <div className="flex flex-1 flex-wrap gap-2.5">
            {PROFILE_OPTIONS.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setProfile(option)}
                className={`rounded-full border px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] transition ${
                  profile === option
                    ? "border-[var(--og-orange)]/35 bg-[var(--og-orange)]/10 text-[var(--og-orange)]"
                    : "border-[#0B32A0]/12 bg-white/45 text-[var(--og-blue)]/72 hover:border-[var(--og-orange)]/28 hover:text-[var(--og-blue)]"
                }`}
              >
                <span className="relative top-px inline-block">
                  {option === "all" ? "All" : option}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="border-t border-[#0B32A0]/8 px-4 py-4 md:px-5">
          <div className="flex flex-col gap-3 md:flex-row md:items-start">
            <p className="pt-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--og-blue)]/72 md:w-[4.75rem] md:shrink-0">
              Style
            </p>
            <div className="flex flex-1 flex-wrap items-start gap-2.5">
              {STYLE_TYPE_OPTIONS.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setStyleType(option)}
                  className={`rounded-full border px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] transition ${
                    styleType === option
                      ? "border-[var(--og-orange)]/35 bg-[var(--og-orange)]/10 text-[var(--og-orange)]"
                      : "border-[#0B32A0]/12 bg-white/45 text-[var(--og-blue)]/72 hover:border-[var(--og-orange)]/28 hover:text-[var(--og-blue)]"
                  }`}
                >
                  <span className="relative top-px inline-block">
                    {option === "all" ? "All Styles" : option}
                  </span>
                </button>
              ))}
              {hasFilters ? (
                <button
                  type="button"
                  onClick={() => {
                    setProfile("all");
                    setStyleType("all");
                  }}
                  className="text-[11px] font-semibold text-[var(--og-muted)]/80 transition hover:text-[var(--og-orange)] md:ml-auto md:-translate-x-[5px] md:self-center"
                >
                  Clear ✕
                </button>
              ) : null}
            </div>
          </div>
        </div>
      </div>

      {filteredStyles.length === 0 ? (
        <div className="py-20 text-center text-sm text-[var(--og-muted)]">
          No styles match those filters.{" "}
          <button
            type="button"
            onClick={() => {
              setProfile("all");
              setStyleType("all");
            }}
            className="font-semibold text-[var(--og-orange)]"
          >
            Clear
          </button>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 2xl:grid-cols-3">
          {filteredStyles.map((style) => (
            <article
              key={style.slug}
              className="group relative overflow-hidden rounded-[1.9rem] border-[3px] border-transparent bg-[rgba(255,248,241,0.88)] transition hover:border-[#0B32A0] hover:shadow-lg"
            >
              <Link
                href={`/build/og-crafted-hats?hatStyle=${encodeURIComponent(style.slug)}`}
                aria-label={`Open ${style.title}`}
                className="absolute inset-0 z-10 rounded-[1.9rem]"
              />
              <div className="pointer-events-none">
                <div className="relative aspect-[4/3] bg-white">
                  <Image
                    src={style.image}
                    alt={style.title}
                    fill
                    sizes="(min-width: 1536px) 28vw, (min-width: 768px) 44vw, 100vw"
                    className="object-cover transition duration-300 group-hover:scale-[1.03]"
                    style={{ objectPosition: style.imagePosition }}
                  />
                  <span className="absolute right-3 top-3 rounded-full bg-[#0B32A0]/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[var(--og-blue)]">
                    {style.profile}
                  </span>
                </div>
              </div>
              <div className="pointer-events-none p-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--og-orange)]">
                  {style.model}
                </p>
                <h2 className="mt-1 text-2xl font-semibold leading-none text-[var(--og-blue)]">
                  {style.title}
                </h2>
                <p className="mt-2 text-sm text-[var(--og-muted)]">
                  {style.description}
                </p>
                <p className="mt-3 text-sm font-semibold text-[var(--og-orange)]">
                  From {STARTING_PRICE} / hat
                </p>
                <Link
                  href={`/build/og-crafted-hats?hatStyle=${encodeURIComponent(style.slug)}`}
                  className="pointer-events-auto relative z-20 mt-5 inline-flex min-h-11 items-center justify-center rounded-xl border-2 border-[#0B32A0] px-5 text-sm font-semibold uppercase tracking-[0.12em] text-[#0B32A0] transition hover:-translate-y-[2px] hover:border-[var(--og-orange)] hover:bg-[var(--og-orange)] hover:text-white"
                >
                  Customize
                </Link>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
