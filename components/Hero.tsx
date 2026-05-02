import Link from "next/link";
import { HeroSlideshow } from "@/components/HeroSlideshow";

const categories = [
  "Hats", "Apparel", "Socks", "Drinkware",
  "Bags", "Accessories", "Packaging", "Embroidery",
];

export function Hero() {
  return (
    <>
      {/* ── HERO: split screen ── */}
      <section className="flex h-[calc(90vh-64px)] min-h-[500px] w-full overflow-hidden">

        {/* Left: photo slideshow */}
        <div className="relative w-full lg:w-1/2">
          <HeroSlideshow />
        </div>

        {/* Right: text panel */}
        <div
          className="relative hidden flex-col items-start justify-center overflow-hidden bg-[#F3EFE7] py-16 pl-14 pr-10 lg:flex lg:w-1/2 xl:pl-20"
        >
          <p
            className="text-xs font-semibold uppercase tracking-[0.3em] text-[#FF4200]/70"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Custom Branded Goods & Designs
          </p>

          <h1
            className="mt-4 text-5xl uppercase leading-[1.0] tracking-tight text-[#FF4200] xl:text-6xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Merch people<br />actually keep.
          </h1>

          <p
            className="mt-5 max-w-sm text-lg leading-7 text-[#1C1C1C]/80"
            style={{ fontFamily: "var(--font-body)" }}
          >
            One team handles everything — design, production, and delivery.
            Built for brands that care about quality.
          </p>

          <p
            className="mt-3 text-xs uppercase tracking-[0.28em] text-[#0B32A0]/60"
            style={{ fontFamily: "var(--font-accent)" }}
          >
            Los Angeles, California
          </p>

          <div className="mt-8 flex flex-row flex-wrap gap-3">
            <Link
              href="mailto:hello@orangegoods.co?subject=Start%20a%20Project"
              className="inline-flex items-center rounded-full bg-[#FF4200] px-7 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#d73b05]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              START A PROJECT
            </Link>
            <Link
              href="https://orangegoods.co/goods/"
              className="inline-flex items-center rounded-full border-2 border-[#0B32A0] px-7 py-3.5 text-sm font-semibold text-[#0B32A0] transition hover:-translate-y-0.5 hover:bg-[#0B32A0] hover:text-white"
              style={{ fontFamily: "var(--font-display)" }}
            >
              BUILD ONLINE
            </Link>
          </div>

          {/* Stats row */}
          <div
            className="mt-12 flex gap-8 border-t border-black/10 pt-8"
            style={{ fontFamily: "var(--font-body)" }}
          >
            <div>
              <div className="text-2xl font-bold text-[#FF4200]">100+</div>
              <div className="mt-0.5 text-xs uppercase tracking-[0.18em] text-[#1C1C1C]/60">MOQ</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-[#FF4200]">3–6 wks</div>
              <div className="mt-0.5 text-xs uppercase tracking-[0.18em] text-[#1C1C1C]/60">Timeline</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-[#FF4200]">15+</div>
              <div className="mt-0.5 text-xs uppercase tracking-[0.18em] text-[#1C1C1C]/60">Categories</div>
            </div>
          </div>
        </div>

        {/* Mobile: overlay text on image */}
        <div className="absolute inset-x-0 bottom-0 flex flex-col gap-4 bg-gradient-to-t from-black/80 to-transparent p-6 lg:hidden">
          <h1
            className="text-4xl uppercase leading-tight text-white"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Merch people actually keep.
          </h1>
          <div className="flex gap-3">
            <Link
              href="mailto:hello@orangegoods.co?subject=Start%20a%20Project"
              className="inline-flex items-center rounded-full bg-[#FF4200] px-5 py-3 text-xs font-semibold text-white"
              style={{ fontFamily: "var(--font-display)" }}
            >
              START A PROJECT
            </Link>
            <Link
              href="https://orangegoods.co/goods/"
              className="inline-flex items-center rounded-full border border-white px-5 py-3 text-xs font-semibold text-white"
              style={{ fontFamily: "var(--font-display)" }}
            >
              BUILD ONLINE
            </Link>
          </div>
        </div>
      </section>

      {/* ── MARQUEE: product categories ── */}
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
