import Link from "next/link";
import { HeroSlideshow } from "@/components/HeroSlideshow";

const categories = [
  "Hats", "Apparel", "Socks", "Drinkware",
  "Bags", "Accessories", "Packaging", "Embroidery",
];

export function Hero() {
  return (
    <>
      {/* ── HERO: full-width slideshow ── */}
      <section className="relative h-[calc(90vh-80px)] min-h-[520px] w-full overflow-hidden">

        {/* Full-width background slideshow */}
        <HeroSlideshow />

        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#081E6F]/75 via-[#081E6F]/40 to-transparent" />

        {/* Content — left-aligned, vertically centered */}
        <div className="absolute inset-0 flex items-center px-8 md:px-16 lg:px-24">
          <div className="max-w-2xl">
            <h1
              className="text-5xl uppercase leading-[1.0] tracking-tight text-white md:text-7xl lg:text-[5.5rem]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Merch people<br />actually keep.
            </h1>

            <p
              className="mt-5 max-w-md text-lg leading-7 text-white/85 md:text-xl"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Design, production, and delivery — handled.<br />
              Built for brands that care about quality.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="mailto:hello@orangegoods.co?subject=Start%20a%20Project"
                className="inline-flex items-center rounded-full bg-[#FF4200] px-8 py-4 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#d73b05]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                START A PROJECT
              </Link>
              <Link
                href="https://orangegoods.co/goods/"
                className="inline-flex items-center rounded-full border-2 border-white px-8 py-4 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white hover:text-[#FF4200]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                BUILD ONLINE
              </Link>
            </div>

            {/* Stats */}
            <div
              className="mt-10 flex gap-8 border-t border-white/20 pt-8"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {[
                { value: "100+", label: "MOQ" },
                { value: "3–6 wks", label: "Timeline" },
                { value: "15+", label: "Categories" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold text-[#FF4200]">{stat.value}</div>
                  <div className="mt-0.5 text-xs uppercase tracking-[0.18em] text-white/60">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <div
        className="overflow-hidden border-y-4 border-[#FF4200] bg-[#FF4200]"
        style={{ height: "56px" }}
      >
        <div className="animate-marquee flex h-full w-max items-center gap-16 px-16">
          {Array.from({ length: 4 }).flatMap((_, i) =>
            categories.map((cat) => (
              <span
                key={`${cat}-${i}`}
                className="flex-none text-xs font-semibold uppercase tracking-[0.28em] text-white"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {cat}
              </span>
            ))
          )}
        </div>
      </div>
    </>
  );
}
