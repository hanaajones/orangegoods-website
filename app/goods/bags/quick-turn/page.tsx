import { Suspense } from "react";
import Link from "next/link";
import { AllGoodsBrowser } from "@/components/AllGoodsBrowser";
import { CTASection } from "@/components/CTASection";
import { ContactPromptSection } from "@/components/ContactPromptSection";
import { ParallaxHeroBackground } from "@/components/ParallaxHeroBackground";
import { buildGoodsBrowserItems } from "@/lib/goods-browser";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Quick Turn Bags + Totes — Orange Goods",
  description:
    "Browse quick turn tote styles, compare shape, fabric, and color, then move into the create flow from one dedicated page.",
  path: "/goods/bags/quick-turn",
  image: "/images/gallery/totes-bags-boatsetter-dscf3148.jpg",
  imageAlt: "Quick turn custom tote bags",
});

export default function QuickTurnBagsPage() {
  const items = buildGoodsBrowserItems();

  return (
    <main className="bg-[#F7F4ED] pb-24 md:pb-0">
      <section className="relative overflow-hidden bg-[#1C1C1C] px-4 py-14 text-white md:px-8 md:py-20 lg:px-12">
        <ParallaxHeroBackground
          image="/images/gallery/totes-bags-boatsetter-dscf3148.jpg"
          inset="-0.75%"
          position="center 50%"
          speed={0.1}
        />
        <div className="absolute inset-0 bg-[#1C1C1C]/46" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1C1C1C]/78 via-[#1C1C1C]/58 to-[#1C1C1C]/28" />
        <div className="relative mx-auto max-w-6xl">
          <Link
            href="/goods/bags"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-white/82 hover:text-[var(--og-orange)]"
          >
            ← Back to bags
          </Link>
          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.28em] text-white/75">
            Quick turn bags
          </p>
          <h1 className="mt-4 max-w-4xl text-5xl uppercase leading-none text-[var(--og-orange)] md:text-6xl lg:text-7xl">
            Start with the tote
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/82 md:text-xl">
            Compare tote shape, fabric, and color first. Then move into the create flow to lock
            the decoration method, quantity, and final details.
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
            lockedCategory="totes"
            initialProductionPath="quick-turn"
            className="mx-auto w-full max-w-[min(1760px,calc(100vw-1rem))] px-3 pb-10 md:px-6 xl:px-8"
            searchPlaceholder="Search quick turn totes by shape, fabric, or color"
          />
        </Suspense>
      </section>

      <CTASection
        eyebrow="Ready to build it out?"
        title="Create your tote."
        description="Once the bag direction is close, we can help finalize decoration, quantity, and timing."
        buttonLabel="Create your tote"
        buttonHref="/create/bags/quick-turn"
        backgroundImage="/images/gallery/screen-printing-field-day-coffee-totes.jpg"
        backgroundImagePosition="center 50%"
        overlayClassName="bg-[linear-gradient(135deg,rgba(28,28,28,0.76),rgba(28,28,28,0.42))]"
      />

      <ContactPromptSection />
    </main>
  );
}
