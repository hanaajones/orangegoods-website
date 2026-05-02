import Image from "next/image";
import { CTASection } from "@/components/CTASection";
import { Gallery } from "@/components/Gallery";
import { ProcessSteps } from "@/components/ProcessSteps";
import { ProductSelector } from "@/components/ProductSelector";
import { Reveal } from "@/components/Reveal";
import {
  hatGallery,
  hatHero,
  hatOptions,
  hatProcess,
  hatSelectorStyles,
} from "@/lib/content";

export default function HatsPage() {
  return (
    <main className="pb-24 md:pb-0">
      <section className="px-4 pb-8 pt-10 md:px-8 md:pt-16 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-10 overflow-hidden rounded-[2rem] border border-[var(--og-sand)] bg-[rgba(255,248,241,0.84)] p-6 shadow-[0_24px_80px_rgba(22,17,15,0.08)] backdrop-blur md:grid-cols-[0.95fr_1.05fr] md:p-8">
          <div className="flex flex-col justify-between gap-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--og-orange)]">
                {hatHero.eyebrow}
              </p>
              <h1 className="mt-4 text-4xl font-semibold leading-none tracking-[-0.04em] text-[var(--og-ink)] md:text-6xl">
                {hatHero.title}
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-7 text-[var(--og-muted)]">
                {hatHero.description}
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {hatHero.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-[1.5rem] border border-black/10 bg-white/80 p-4"
                >
                  <div className="text-2xl font-semibold text-[var(--og-ink)]">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-sm uppercase tracking-[0.16em] text-[var(--og-muted)]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative overflow-hidden rounded-[1.75rem] bg-[#d5bba2]">
            <Image
              src={hatHero.image}
              alt="Orange Goods custom hat"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <ProductSelector styles={hatSelectorStyles} options={hatOptions} />

      <Reveal className="px-4 py-4 md:px-8 lg:px-12">
        <section className="mx-auto max-w-6xl rounded-[2rem] border border-black/10 bg-[#1c1714] p-8 text-[#f5efe6]">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#ff9e7a]">
                Behind The Scenes
              </p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-4xl">
                Verve Coffee x The Grateful Dead
              </h2>
            </div>
            <p className="text-base leading-7 text-[#dbcbbb] md:text-lg">
              Verve Coffee came to Orange Goods for a classic dad hat with a
              washed-out black denim fabric. The team built it from scratch, then
              added a unique interior label, metal clasp, and embroidery on both
              the front and back so every placement felt intentional.
            </p>
          </div>
        </section>
      </Reveal>

      <ProcessSteps
        eyebrow="Hat Process"
        title="From brief to delivery without guessing."
        description="The custom hats page already spells out the expectations. This build turns those details into a cleaner production path."
        steps={hatProcess}
      />
      <Gallery
        eyebrow="Hat Gallery"
        title="Custom headwear, trims, and details from current Orange Goods projects."
        description="Built from the actual hats page image set."
        items={hatGallery}
      />
      <CTASection
        title="Get a quote for custom hats"
        description="Orders start at 100 pieces per style. Share your shape, decoration, and timeline."
        buttonLabel="Start a Hat Project"
        buttonHref="mailto:hello@orangegoods.co?subject=Custom%20Hats%20Quote"
      />
    </main>
  );
}
