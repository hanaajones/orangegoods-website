import Image from "next/image";
import Link from "next/link";
import { CaliforniaBanner } from "@/components/CaliforniaBanner";
import { DesignCallout } from "@/components/DesignCallout";
import { PhotoCarousel } from "@/components/PhotoCarousel";
import { ProductCategories } from "@/components/ProductCategories";
import { ServicesPreview } from "@/components/ServicesPreview";
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

      {/* Checkers divider */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      {/* California banner */}
      <CaliforniaBanner />

      <img src="/graphics/OrangeGoods_Checkers_Orange.svg" alt="" aria-hidden="true" className="w-full" />

      {/* Trust signal */}
      <Testimonials testimonials={testimonials} logos={logos} />

      {/* Product categories — We Handle It All */}
      <ProductCategories />

      {/* Two ways to start */}
      <TwoPaths items={twoPaths} title={twoPathsTitle} />

      {/* Checkers divider */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/graphics/OrangeGoods_Checkers_Blue.svg" alt="" aria-hidden="true" className="w-full" />

      {/* Work lands here — visitor now knows what they're looking at */}
      <SelectedWork />

      <Reveal className="px-4 py-14 md:px-8 lg:px-12">
        <section className="mx-auto grid max-w-6xl gap-8 rounded-[2rem] border border-[#0B32A0]/20 bg-[var(--og-blue)] p-8 text-[#f7f1e8] md:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#ff9e7a]">
              The Merch Problem
            </p>
            <h2 className="mt-4 max-w-md text-3xl font-semibold leading-tight md:text-4xl">
              Most merch is an afterthought
            </h2>
          </div>
          <div className="space-y-4 text-base leading-7 text-[#dacbbb] md:text-lg">
            <p>
              Sourced from five vendors. Arrived off-brand. Sat in a closet.
              Orange Goods fixes that - one team handles design, production,
              and fulfillment from day one
            </p>
          </div>
        </section>
      </Reveal>

      {/* Full-width photo carousel */}
      <PhotoCarousel />

      <div style={{ height: "30px" }} />

      {/* Two production paths */}
      <ServicesPreview />

      {/* Design: do you have artwork? */}
      <DesignCallout />

      <ProcessSteps
        eyebrow="How It Works"
        title="A clear path from brief to delivery"
        description="One team handles design, production, and delivery — start to finish. No vendor juggling, no broken phone games"
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
              Southern California
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-[var(--og-blue)] md:text-5xl">
              Real people. Real craft. No corporate nonsense
            </h2>
            <p className="mt-5 text-base leading-7 text-[var(--og-muted)] md:text-lg">
              Orange Goods is a small, tight-knit team based in Southern California.
              We&apos;re designers, manufacturers, and brand obsessives — not a
              fulfillment warehouse or a faceless platform. Every project gets
              a real person behind it who cares about the outcome
            </p>
            {/* Trust strip */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { label: "CA-Based Team", detail: "Southern California, not a call center" },
                { label: "In-House Design", detail: "Human designers, not AI templates" },
                { label: "Product Experts", detail: "15+ years in design + manufacturing" },
                { label: "Direct Access", detail: "Talk to the people making your goods" },
              ].map(({ label, detail }) => (
                <div key={label} className="rounded-2xl border border-[var(--og-sand)] bg-white p-4">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF4200]" style={{ fontFamily: "var(--font-display)" }}>{label}</p>
                  <p className="mt-1 text-sm leading-5 text-[#1C1C1C]/60">{detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>
      {/* Quiz callout — bottom of page */}
      <div className="bg-[#F3EFE7] px-4 py-10 text-center md:px-8">
        <p className="text-base text-[#1C1C1C]/60">Not sure what to order?</p>
        <h3
          className="mt-1 text-2xl uppercase text-[#FF4200] md:text-3xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Take our 60-second quiz
        </h3>
        <p className="mx-auto mt-2 max-w-sm text-sm text-[#1C1C1C]/50">
          Answer a few questions and we&apos;ll recommend the right products for your brand
        </p>
        <Link href="/quiz" className="btn-og mt-6 inline-flex">
          FIND MY GOODS
        </Link>
      </div>

      <CTASection
        title="Ready to make something worth keeping?"
        description="Tell us what you're making, how many you need, and when it has to land"
        buttonLabel="Start a Project"
        buttonHref={startProjectHref}
      />
    </main>
  );
}
