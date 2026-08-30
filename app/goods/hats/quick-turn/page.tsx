import Image from "next/image";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { ContactPromptSection } from "@/components/ContactPromptSection";
import { HatPageStickyNav } from "@/components/HatPageStickyNav";
import { ParallaxHeroBackground } from "@/components/ParallaxHeroBackground";
import { ReadyMadeHatGrid } from "@/components/ReadyMadeHatGrid";
import { READY_MADE_HATS } from "@/lib/ready-made-hats";

const quickTurnNextLinks = [
  {
    title: "Style",
    href: "#styles-catalog",
    description: "Start with the blank shape that gets you closest without building the hat from scratch.",
    image: "/images/gallery/headwear-quick-turn-reel-life-gear-film-10.jpg",
    imagePosition: "center 76%",
    imageScaleClass: "scale-[1.6] group-hover:scale-[1.64]",
    cta: "See styles",
  },
  {
    title: "Color",
    href: "#styles-catalog",
    description: "Use the swatches to narrow the colorways that are actually available for that style.",
    image: "/images/gallery/hat-og-yosemite-dscf4216.jpg",
    imagePosition: "center 54%",
    cta: "Filter colors",
  },
  {
    title: "Decoration",
    href: "/build/quick-turn-hats",
    description: "Move into embroidery, patches, or print depending on the blank and the look you want.",
    image: "/images/gallery/hat-feb-img_7603.jpg",
    imagePosition: "center 52%",
    imageScaleClass: "scale-[1.6] group-hover:scale-[1.64]",
    cta: "Start building",
  },
  {
    title: "Quantity",
    href: "/contact",
    description: "Once the lane looks right, lock the count, timeline, and notes with our team.",
    image: "/images/product/hats/feb-snapback-nylon-interior.jpg",
    imagePosition: "center 48%",
    cta: "Get help fast",
  },
];

export const metadata = {
  title: "Quick Turn Hats — Orange Goods",
  description: "Premium blank hats with your embroidery. 2–3 week turnaround from 100 units.",
};

export default function QuickTurnHatsPage() {
  return (
    <main className="bg-[#F7F4ED] pb-24 md:pb-0">
      <section className="relative overflow-hidden bg-[#1C1C1C] px-4 py-14 text-white md:px-8 md:py-20 lg:px-12">
        <ParallaxHeroBackground
          image="/images/gallery/headwear-quick-turn-reel-life-gear-film-10.jpg"
          inset="-0.75%"
          position="center 78%"
          speed={0.1}
        />
        <div className="absolute inset-0 bg-[#1C1C1C]/46" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1C1C1C]/78 via-[#1C1C1C]/58 to-[#1C1C1C]/28" />
        <div className="relative mx-auto max-w-6xl">
          <Link
            href="/goods/hats"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-white/82 hover:text-[var(--og-orange)]"
          >
            ← Back to custom hats
          </Link>
          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.28em] text-white/75">
            Quick turn hats
          </p>
          <h1 className="mt-4 max-w-4xl text-5xl uppercase leading-none text-[var(--og-orange)] md:text-6xl lg:text-7xl">
            Hats in 2-3 weeks
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/82 md:text-xl">
            Premium blank hats decorated locally with your logo, patch, or print. Fast,
            clean headwear without building the hat from scratch.
          </p>
          <p className="mt-4 text-sm font-semibold uppercase tracking-[0.12em] text-white/78">
            100+ hats per style. 2-3 week turnaround.
          </p>
        </div>
      </section>

      <HatPageStickyNav mode="quick-turn" />

      <section id="styles-catalog" className="pt-8 md:pt-10">
        <ReadyMadeHatGrid styles={READY_MADE_HATS} />
      </section>

      <section className="px-4 py-12 md:px-8 md:py-16 lg:px-12">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-[#0B32A0]/10 bg-white px-6 py-8 shadow-[0_24px_80px_rgba(8,30,111,0.08)] md:px-8 md:py-10">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--og-orange)]">
              What&apos;s Next
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-[var(--og-blue)] md:text-5xl">
              Start with the blank, then dial in the fast lane.
            </h2>
            <p className="mt-4 text-base leading-7 text-[var(--og-muted)] md:text-lg">
              Once you know the style, keep narrowing the quick-turn route through color,
              decoration, quantity, and timing.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {quickTurnNextLinks.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="group relative overflow-hidden rounded-[1.5rem] border border-[#0B32A0]/12 bg-[#F7F4ED] transition hover:-translate-y-1 hover:border-[var(--og-orange)]/30"
              >
                <div className="relative aspect-[4/4.7]">
                  <Image
                    src={link.image}
                    alt={link.title}
                    fill
                    sizes="(min-width: 1280px) 22vw, (min-width: 768px) 44vw, 100vw"
                    className={`object-cover transition duration-300 ${link.imageScaleClass ?? "group-hover:scale-[1.03]"}`}
                    style={{ objectPosition: link.imagePosition }}
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(52,52,52,0.36),rgba(52,52,52,0.58)_40%,rgba(52,52,52,0.84))]" />
                  <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/76">
                      Quick Turn
                    </p>
                    <h3 className="mt-3 text-2xl font-semibold leading-none text-white">
                      {link.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-white/82">
                      {link.description}
                    </p>
                    <p className="mt-5 text-xs font-semibold uppercase tracking-[0.14em] text-white transition group-hover:text-[var(--og-orange)]">
                      {link.cta}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Want to build from scratch?"
        title="See full custom hat styles."
        description="If you want custom fabric, shape, closure, labels, and finishing details, move into the full custom lineup."
        buttonLabel="Shop full custom hats"
        buttonHref="/goods/hats"
        backgroundImage="/images/gallery/headwear-patch-layout-mg-9412.jpg"
        backgroundImagePosition="center 42%"
        overlayClassName="bg-[linear-gradient(135deg,rgba(28,28,28,0.76),rgba(28,28,28,0.44))]"
      />

      <ContactPromptSection />
    </main>
  );
}
