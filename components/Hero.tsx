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
      <section className="flex h-[calc(78vh-64px)] min-h-[460px] w-full overflow-hidden">

        {/* Left: photo slideshow */}
        <div className="relative w-full lg:w-1/2">
          <HeroSlideshow />
        </div>

        {/* Right: text panel */}
        <div
          className="relative hidden flex-col items-start justify-center overflow-hidden bg-[#F3EFE7] py-16 pl-14 pr-10 lg:flex lg:w-1/2 xl:pl-20"
        >
          <h1
            className="mt-4 text-5xl uppercase leading-[1.0] tracking-tight text-[#FF4200] xl:text-6xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Everything your<br />brand wears.
          </h1>

          <p
            className="mt-5 max-w-sm text-lg leading-7 text-[#1C1C1C]/80"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Hats, tees, socks, drinkware, outerwear — if your brand puts its name on it, we make it. Custom from scratch or fast from premium blanks. Always retail quality, always done right.
          </p>

          <div className="mt-8 flex flex-row flex-wrap gap-3">
            <Link
              href="mailto:hello@orangegoods.co?subject=Start%20a%20Project"
              className="btn-lift inline-flex items-center rounded-xl bg-[#FF4200] px-7 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#d73b05]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              START A PROJECT
            </Link>
            <Link
              href="/build"
              className="inline-flex items-center rounded-xl border-2 border-[#0B32A0] px-7 py-3.5 text-sm font-semibold text-[#0B32A0] transition hover:-translate-y-0.5 hover:bg-[#0B32A0] hover:text-white"
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
        <div className="absolute inset-x-0 bottom-0 flex flex-col gap-3 bg-gradient-to-t from-black/90 via-black/60 to-transparent px-5 pb-6 pt-16 lg:hidden">
          <h1
            className="text-3xl uppercase leading-tight text-white"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Everything your<br />brand wears.
          </h1>
          <p className="text-sm leading-5 text-white/80">
            Hats, tees, socks, drinkware &amp; more — custom from scratch or fast from premium blanks.
          </p>
          <div className="flex gap-3 pt-1">
            <Link
              href="mailto:hello@orangegoods.co?subject=Start%20a%20Project"
              className="btn-lift inline-flex items-center rounded-xl bg-[#FF4200] px-5 py-3 text-xs font-semibold text-white"
              style={{ fontFamily: "var(--font-display)" }}
            >
              START A PROJECT
            </Link>
            <Link
              href="/build"
              className="inline-flex items-center rounded-xl border border-white/80 bg-white/10 px-5 py-3 text-xs font-semibold text-white backdrop-blur-sm"
              style={{ fontFamily: "var(--font-display)" }}
            >
              BUILD ONLINE
            </Link>
          </div>
        </div>
      </section>

      {/* ── MARQUEE: product categories ── */}
      <div
        className="overflow-hidden border-y-[3px] border-[#1C1C1C] bg-white"
        style={{ height: "clamp(56px, 8vw, 72px)" }}
      >
        <div className="animate-marquee flex h-full w-max items-center gap-14 px-14">
          {Array.from({ length: 4 }).flatMap((_, i) =>
            categories.map((cat) => (
              <span
                key={`${cat}-${i}`}
                className="flex-none text-[clamp(18px,3.5vw,28px)] text-[#1C1C1C]"
                style={{ fontFamily: "var(--font-sirenia)", fontWeight: 600 }}
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
