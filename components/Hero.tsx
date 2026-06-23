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
      <section className="relative flex h-[calc(78vh-64px)] min-h-[460px] w-full overflow-hidden">

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
            Merch that<br />doesn&apos;t suck
          </h1>

          <p
            className="mt-5 max-w-sm text-lg leading-7 text-[#1C1C1C]/80"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Built for brands that care what they sell and hand out. OG helps shape your idea, source the right goods, manage production, and make sure it lands right.
          </p>

          <div className="mt-8 flex flex-row flex-wrap gap-3">
            <Link
              href="/contact"
              className="btn-og inline-flex items-center rounded-xl px-6 py-3 text-sm font-bold uppercase tracking-[0.1em] text-white"
              style={{ fontFamily: "var(--font-noir-alt)" }}
            >
              START A PROJECT
            </Link>
            <Link
              href="/build"
              className="inline-flex items-center rounded-xl border-2 border-[#0B32A0] px-7 py-3.5 text-sm font-semibold text-[#0B32A0] transition hover:-translate-y-0.5 hover:bg-[#0B32A0] hover:text-white"
              style={{ fontFamily: "var(--font-noir-alt)" }}
            >
              BUILD ONLINE
            </Link>
          </div>
        </div>

        {/* Mobile: overlay text on image */}
        <div className="absolute inset-x-0 bottom-0 flex flex-col gap-3 bg-gradient-to-t from-black/90 via-black/60 to-transparent px-5 pb-6 pt-16 lg:hidden">
          <h1
            className="text-3xl uppercase leading-tight text-white"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Merch that doesn&apos;t suck
          </h1>
          <p className="text-sm leading-5 text-white/80">
            For brands that care what they sell and hand out. One team from idea to delivery.
          </p>
          <div className="flex gap-3 pt-1">
            <Link
              href="/contact"
              className="btn-og inline-flex items-center rounded-xl px-6 py-3 text-sm font-bold uppercase tracking-[0.1em] text-white"
              style={{ fontFamily: "var(--font-noir-alt)" }}
            >
              START A PROJECT
            </Link>
            <Link
              href="/build"
              className="inline-flex items-center rounded-xl border border-white/80 bg-white/10 px-5 py-3 text-xs font-semibold text-white backdrop-blur-sm"
              style={{ fontFamily: "var(--font-noir-alt)" }}
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
                className="font-subtitle-alt flex-none text-[clamp(18px,3.5vw,28px)] font-medium normal-case tracking-normal text-[#1C1C1C]"
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
