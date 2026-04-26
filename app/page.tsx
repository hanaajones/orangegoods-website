import Image from "next/image";
import { CTASection } from "@/components/CTASection";
import { Gallery } from "@/components/Gallery";
import { Hero } from "@/components/Hero";
import { ProcessSteps } from "@/components/ProcessSteps";
import { Reveal } from "@/components/Reveal";
import { Testimonials } from "@/components/Testimonials";
import { TwoPaths } from "@/components/TwoPaths";
import {
  homeGallery,
  homeHero,
  homeProcess,
  homeStats,
  logos,
  testimonials,
  twoPaths,
} from "@/lib/content";

export default function HomePage() {
  return (
    <main className="pb-24 md:pb-0">
      <Hero
        eyebrow="Custom Branded Goods & Designs"
        title={homeHero.title}
        description={homeHero.description}
        stats={homeStats}
        ctaLabel="Start a Project"
        ctaHref="mailto:hello@orangegoods.co?subject=Start%20a%20Project"
      />

      <Reveal className="px-4 py-14 md:px-8 lg:px-12">
        <section className="mx-auto grid max-w-6xl gap-8 rounded-[2rem] border border-black/10 bg-[#1d1714] p-8 text-[#f7f1e8] md:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#ff9e7a]">
              Why Most Merch Gets Ignored
            </p>
            <h2 className="mt-4 max-w-md text-3xl font-semibold leading-tight md:text-4xl">
              Generic. Rushed. Forgotten in a week.
            </h2>
          </div>
          <div className="space-y-4 text-base leading-7 text-[#dacbbb] md:text-lg">
            <p>
              Most teams piece merch together across blanks, printers, decorators,
              and shipping vendors.
            </p>
            <p>
              The result is usually off-brand, overcomplicated, or not worth
              keeping.
            </p>
          </div>
        </section>
      </Reveal>

      <Reveal className="px-4 py-6 md:px-8 lg:px-12">
        <section className="mx-auto max-w-6xl rounded-[2rem] border border-[var(--og-sand)] bg-[rgba(255,248,241,0.88)] p-8 backdrop-blur">
          <div className="grid gap-8 md:grid-cols-[1fr_0.9fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--og-orange)]">
                One Team, End To End
              </p>
              <h2 className="mt-4 max-w-2xl text-3xl font-semibold leading-tight text-[var(--og-ink)] md:text-5xl">
                Crafted to be kept and loved, with our California team handling
                production from idea to delivery.
              </h2>
            </div>
            <div className="space-y-4 text-base leading-7 text-[var(--og-muted)] md:text-lg">
              <p>
                Orange Goods combines product development, graphic design,
                production, and fulfillment in one process.
              </p>
              <p>
                You get quality goods, direct communication, and a clearer path
                from first brief to final shipment.
              </p>
            </div>
          </div>
        </section>
      </Reveal>

      <TwoPaths items={twoPaths} />
      <Gallery
        id="gallery"
        eyebrow="Selected Goods"
        title="Real product work pulled from the current site."
        description="Factory direct hats, trims, drinkware, packaging, and retail-finished goods."
        items={homeGallery}
      />
      <Testimonials testimonials={testimonials} logos={logos} />
      <ProcessSteps
        eyebrow="How It Works"
        title="A tighter process makes better merch."
        description="Orange Goods already lays out the workflow clearly. This version turns it into a direct project path."
        steps={homeProcess}
      />
      <Reveal className="px-4 py-8 md:px-8 lg:px-12">
        <section
          id="about"
          className="mx-auto grid max-w-6xl gap-8 rounded-[2rem] border border-[var(--og-sand)] bg-[rgba(255,248,241,0.88)] p-6 backdrop-blur md:grid-cols-[1fr_1.05fr] md:p-8"
        >
          <div className="relative min-h-[20rem] overflow-hidden rounded-[1.75rem] bg-[#d6bea7]">
            <Image
              src="https://orangegoods.co/wp-content/uploads/2024/07/OrangeGoods_ABoutUs_5-1.jpg"
              alt="Orange Goods founders"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--og-orange)]">
              Small-Town Service
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-[var(--og-ink)] md:text-5xl">
              Easton and Casey built Orange Goods around quality service and thoughtful design.
            </h2>
            <p className="mt-5 text-base leading-7 text-[var(--og-muted)] md:text-lg">
              Longtime friends with more than 25 years of combined experience,
              they partner with teams that appreciate quality goods, direct
              communication, and a more considered process.
            </p>
          </div>
        </section>
      </Reveal>
      <CTASection
        title="Ready to make something worth keeping?"
        description="Tell us what you are making, what quantity you need, and where it has to land."
        buttonLabel="Start a Project"
        buttonHref="mailto:hello@orangegoods.co?subject=Ready%20to%20make%20something%20worth%20keeping"
      />
    </main>
  );
}
