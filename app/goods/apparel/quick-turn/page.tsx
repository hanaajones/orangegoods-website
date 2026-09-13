import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { CTASection } from "@/components/CTASection";
import { ContactPromptSection } from "@/components/ContactPromptSection";
import { ParallaxHeroBackground } from "@/components/ParallaxHeroBackground";
import { AllGoodsBrowser } from "@/components/AllGoodsBrowser";
import { buildGoodsBrowserItems } from "@/lib/goods-browser";
import { buildMetadata } from "@/lib/seo";

const quickTurnApparelLinks = [
  {
    title: "Blank",
    href: "#styles-catalog",
    description: "Start with the tee, fleece, polo, or layer that fits the job before decoration narrows the build.",
    image: "/images/gallery/apparel-blank-people-would-buy-dscf4886.jpg",
    imagePosition: "center 54%",
    imageScaleClass: "scale-[1.14] group-hover:scale-[1.18]",
  },
  {
    title: "Color",
    href: "#styles-catalog",
    description: "Use the style grid to narrow the real colorways that keep the program aligned with the brand palette.",
    image: "/images/gallery/apparel-upgrade-the-handfeel-img-1172.jpg",
    imagePosition: "center 52%",
    imageScaleClass: "scale-[1.16] group-hover:scale-[1.2]",
  },
  {
    title: "Decoration",
    href: "/create/apparel/quick-turn",
    description: "Once the garment is right, move into screen print, embroidery, placements, and finishing details.",
    image: "/images/gallery/embroidery-k1-apparel-embroidery.jpg",
    imagePosition: "center 34%",
    imageScaleClass: "scale-[1.22] group-hover:scale-[1.26]",
  },
  {
    title: "Quantity",
    href: "/create/apparel/quick-turn",
    description: "Then set the size run, lock the order quantity, and send the project through for review.",
    image: "/images/gallery/apparel-686-hoodie-back.jpg",
    imagePosition: "center 40%",
    imageScaleClass: "scale-[1.08] group-hover:scale-[1.12]",
  },
];

export const metadata = buildMetadata({
  title: "Quick Turn Apparel — Orange Goods",
  description:
    "Browse premium blank apparel styles, compare fits and colors, and move into the quick-turn create flow from one dedicated page.",
  path: "/goods/apparel/quick-turn",
  image: "/images/gallery/apparel-blank-people-would-buy-dscf4886.jpg",
  imageAlt: "Quick turn custom apparel",
});

export default function QuickTurnApparelPage() {
  const items = buildGoodsBrowserItems();

  return (
    <main className="bg-[#F7F4ED] pb-24 md:pb-0">
      <section className="relative overflow-hidden bg-[#1C1C1C] px-4 py-14 text-white md:px-8 md:py-20 lg:px-12">
        <ParallaxHeroBackground
          image="/images/gallery/apparel-blank-people-would-buy-dscf4886.jpg"
          inset="-0.75%"
          position="center 54%"
          speed={0.1}
        />
        <div className="absolute inset-0 bg-[#1C1C1C]/46" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1C1C1C]/78 via-[#1C1C1C]/58 to-[#1C1C1C]/28" />
        <div className="relative mx-auto max-w-6xl">
          <Link
            href="/goods/apparel"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-white/82 hover:text-[var(--og-orange)]"
          >
            ← Back to apparel
          </Link>
          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.28em] text-white/75">
            Quick turn apparel
          </p>
          <h1 className="mt-4 max-w-4xl text-5xl uppercase leading-none text-[var(--og-orange)] md:text-6xl lg:text-7xl">
            Start with the blank
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/82 md:text-xl">
            Compare premium blanks, fit, fabric, and color first. Then move into the create flow
            once the right garment is clear.
          </p>
          <p className="mt-4 text-sm font-semibold uppercase tracking-[0.12em] text-white/78">
            100+ pieces. 2-3 week turnaround.
          </p>
        </div>
      </section>

      <section id="styles-catalog" className="pt-8 md:pt-10">
        <Suspense fallback={<div className="mx-auto w-full max-w-[min(1760px,calc(100vw-1rem))] px-3 pb-10 md:px-6 xl:px-8" />}>
          <AllGoodsBrowser
            items={items}
            lockedCategory="apparel"
            initialProductionPath="quick-turn"
            className="mx-auto w-full max-w-[min(1760px,calc(100vw-1rem))] px-3 pb-10 md:px-6 xl:px-8"
            searchPlaceholder="Search quick turn apparel styles, brands, fit, or fabric"
          />
        </Suspense>
      </section>

      <section className="px-4 py-12 md:px-8 md:py-16 lg:px-12">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-[#0B32A0]/10 bg-white px-6 py-8 shadow-[0_24px_80px_rgba(8,30,111,0.08)] md:px-8 md:py-10">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--og-orange)]">
              What&apos;s Next
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-[var(--og-blue)] md:text-5xl">
              Start with the garment, then build out the details.
            </h2>
            <p className="mt-4 text-base leading-7 text-[var(--og-muted)] md:text-lg">
              Once the blank is right, the rest of the decisions get easier: color, decoration,
              quantity, and finishing details.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {quickTurnApparelLinks.map((link) => (
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
                      See options
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Need a deeper build?"
        title="Talk through full custom apparel."
        description="If the garment itself needs custom colors, labels, trims, or a more proprietary silhouette, we can scope that separately."
        buttonLabel="See full custom"
        buttonHref="/services/full-custom"
        backgroundImage="/images/gallery/apparel-wearable-palette-bgxhj-23.jpg"
        backgroundImagePosition="center 44%"
        overlayClassName="bg-[linear-gradient(135deg,rgba(28,28,28,0.76),rgba(28,28,28,0.42))]"
      />

      <ContactPromptSection />
    </main>
  );
}
