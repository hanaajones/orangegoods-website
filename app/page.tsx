import Image from "next/image";
import { CTASection } from "@/components/CTASection";
import { Hero } from "@/components/Hero";
import { ProcessSteps } from "@/components/ProcessSteps";
import { Reveal } from "@/components/Reveal";
import { SelectedWork } from "@/components/SelectedWork";
import { Testimonials } from "@/components/Testimonials";
import { TwoPaths } from "@/components/TwoPaths";
import {
  homeProcess,
  logos,
  startProjectHref,
  testimonials,
  twoPaths,
  twoPathsTitle,
} from "@/lib/content";

export default function HomePage() {
  return (
    <main className="pb-24 md:pb-0">
      <Hero />
      <SelectedWork />

      <Reveal className="px-4 py-14 md:px-8 lg:px-12">
        <section className="mx-auto grid max-w-6xl gap-8 rounded-[2rem] border border-[#0B32A0]/20 bg-[var(--og-dark-blue)] p-8 text-[#f7f1e8] md:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#ff9e7a]">
              The Merch Problem
            </p>
            <h2 className="mt-4 max-w-md text-3xl font-semibold leading-tight md:text-4xl">
              Most merch is an afterthought.
            </h2>
          </div>
          <div className="space-y-4 text-base leading-7 text-[#dacbbb] md:text-lg">
            <p>
              Sourced from five vendors. Arrived off-brand. Sat in a closet.
              Orange Goods fixes that - one team handles design, production,
              and fulfillment from day one.
            </p>
          </div>
        </section>
      </Reveal>

      <Reveal className="px-4 py-6 md:px-8 lg:px-12">
        <section className="mx-auto max-w-6xl rounded-[2rem] border border-[var(--og-sand)] bg-[rgba(255,248,241,0.88)] p-8 backdrop-blur">
          <div className="grid gap-8 md:grid-cols-[1fr_0.9fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--og-orange)]">
                One Team, End to End
              </p>
              <h2 className="mt-4 max-w-2xl text-3xl font-semibold leading-tight text-[var(--og-blue)] md:text-5xl">
                From first brief to final shipment.
              </h2>
            </div>
            <div className="space-y-4 text-base leading-7 text-[var(--og-muted)] md:text-lg">
              <p>
                Design, production, and fulfillment handled in a single process.
                No vendor juggling, no broken phone games.
              </p>
              <p>
                Quality goods, direct communication, and a faster path from
                concept to delivery.
              </p>
            </div>
          </div>
        </section>
      </Reveal>

      <TwoPaths items={twoPaths} title={twoPathsTitle} />
      <Testimonials testimonials={testimonials} logos={logos} />
      <ProcessSteps
        eyebrow="How It Works"
        title="A clear path from brief to delivery."
        description="Structured enough to keep the project moving. Human enough to keep the work clear."
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
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-[var(--og-blue)] md:text-5xl">
              Easton built Orange Goods around one idea: goods worth keeping.
            </h2>
            <p className="mt-5 text-base leading-7 text-[var(--og-muted)] md:text-lg">
              Over a decade of experience in custom merch, design, and
              production. We partner with brands that care about quality - and
              we treat every project like it matters.
            </p>
          </div>
        </section>
      </Reveal>
      <CTASection
        title="Ready to make something worth keeping?"
        description="Tell us what you're making, how many you need, and when it has to land."
        buttonLabel="Start a Project"
        buttonHref={startProjectHref}
      />
    </main>
  );
}
