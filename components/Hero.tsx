import Image from "next/image";
import Link from "next/link";
import { HeroSlideshow } from "@/components/HeroSlideshow";

const categories = [
  "Beanies",
  "Polos",
  "Totes",
  "Towels",
  "Flannels",
  "Outerwear",
  "Activewear",
  "Boardshorts",
  "Shirts",
  "Hats",
  "Drinkware",
  "Blankets",
  "Bags",
  "Socks",
  "Accessories",
  "Packaging",
  "Embroidery",
  "Patches",
  "Kits",
  "Apparel",
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
          <Image
            src="/graphics/stickers/orange-goods.svg"
            alt=""
            aria-hidden="true"
            width={136}
            height={136}
            className="pointer-events-none absolute left-7 top-8 w-24 -rotate-[8deg] select-none drop-shadow-[0_8px_18px_rgba(28,28,28,0.16)] xl:left-10 xl:top-10 xl:w-28"
          />
          <Image
            src="/graphics/stickers/juice-box.svg"
            alt=""
            aria-hidden="true"
            width={136}
            height={136}
            className="pointer-events-none absolute left-1/2 top-6 w-20 -translate-x-1/2 rotate-[4deg] select-none drop-shadow-[0_8px_18px_rgba(28,28,28,0.16)] xl:top-8 xl:w-24"
          />
          <Image
            src="/graphics/stickers/og-mark.svg"
            alt=""
            aria-hidden="true"
            width={136}
            height={136}
            className="pointer-events-none absolute right-6 top-1/2 w-20 -translate-y-1/2 -rotate-[6deg] select-none drop-shadow-[0_8px_18px_rgba(28,28,28,0.16)] xl:right-10 xl:w-24"
          />
          <Image
            src="/graphics/stickers/quality-goods.svg"
            alt=""
            aria-hidden="true"
            width={136}
            height={136}
            className="pointer-events-none absolute bottom-8 left-7 w-24 -rotate-[10deg] select-none drop-shadow-[0_8px_18px_rgba(28,28,28,0.16)] xl:bottom-10 xl:left-10 xl:w-28"
          />
          <Image
            src="/graphics/stickers/goods-by-nature.svg"
            alt=""
            aria-hidden="true"
            width={136}
            height={136}
            className="pointer-events-none absolute bottom-12 right-8 w-24 rotate-[12deg] select-none drop-shadow-[0_8px_18px_rgba(28,28,28,0.16)] xl:bottom-16 xl:right-12 xl:w-28"
          />
          <h1
            className="relative z-10 mt-4 text-5xl uppercase leading-[1.0] tracking-tight text-[#FF4200] xl:text-6xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Good brands.<br />Better goods.
          </h1>

          <p
            className="relative z-10 mt-5 max-w-md text-xl leading-8 text-[#1C1C1C]/80"
            style={{ fontFamily: "var(--font-noir-alt)" }}
          >
            Built for brands that care what they sell and hand out. OG helps shape your idea, source the right goods, manage production, and make sure it lands right.
          </p>

          <div className="relative z-10 mt-8 flex flex-row flex-wrap gap-3">
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
            Good brands. Better goods.
          </h1>
          <p className="text-base leading-6 text-white/80">
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
        style={{ height: "clamp(64px, 8vw, 84px)" }}
      >
        <div className="animate-marquee flex h-full w-max items-center gap-14 px-14">
          {Array.from({ length: 2 }).flatMap((_, i) =>
            categories.map((cat) => (
              <span
                key={`${cat}-${i}`}
                className="font-subtitle-alt flex-none text-[clamp(22px,4vw,36px)] font-medium leading-none normal-case tracking-normal text-[#1C1C1C]"
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
