import Image from "next/image";
import Link from "next/link";
import { PhotoCarousel } from "@/components/PhotoCarousel";
import { ProductCategories } from "@/components/ProductCategories";
import { ServicesPreview } from "@/components/ServicesPreview";
import { CTASection } from "@/components/CTASection";
import { Hero } from "@/components/Hero";
import { MerchTipsCarousel } from "@/components/MerchTipsCarousel";
import { ProcessSteps } from "@/components/ProcessSteps";
import { Reveal } from "@/components/Reveal";
import { SelectedWork } from "@/components/SelectedWork";
import { Testimonials } from "@/components/Testimonials";
import { TwoPaths } from "@/components/TwoPaths";
import { UseCaseCarousel } from "@/components/UseCaseCarousel";
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
      <img src="/graphics/OrangeGoods_Checkers_Orange.svg" alt="" aria-hidden="true" className="w-full" />

      <UseCaseCarousel />

      <Reveal className="bg-[#F7F4ED] px-4 py-16 md:px-8 md:py-20 lg:px-12">
        <section id="why-orange-goods" className="mx-auto max-w-6xl scroll-mt-24">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#FF7F00]">
              Why Orange Goods
            </p>
            <h2 className="mt-3 max-w-2xl text-4xl leading-[0.95] text-[var(--og-blue)] md:text-5xl">
              Top 3 reasons brands choose Orange Goods over other merch companies.
            </h2>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              {
                number: "01",
                title: "Higher-end product options",
                copy: "From better blanks and materials to thoughtful decoration details, we help your goods feel closer to retail than promo.",
                mark: "/logos/OrangeGoods_Logo_Secondary_FullColor.svg",
                markClassName: "h-28 w-44 md:h-32 md:w-52",
              },
              {
                number: "02",
                title: "One connected merch partner",
                copy: "Sourcing, artwork, production, kitting, and delivery stay connected so your team is not managing five different vendors.",
                mark: "/graphics/OrangeGoods_Checkers_Blue.svg",
                markClassName: "h-24 w-[24rem] max-w-none md:h-28 md:w-[30rem]",
              },
              {
                number: "03",
                title: "Built for modern brands",
                copy: "We move fast, adapt to changes, and support teams that care about quality, service, and long-term brand equity.",
                mark: "/logos/OrangeGoods_Logo_Main_Orange.svg",
                markClassName: "h-24 w-48 md:h-28 md:w-56",
              },
            ].map((reason) => (
              <article
                key={reason.title}
                className="flex min-h-[25rem] flex-col justify-between overflow-hidden rounded-lg bg-[#E5E2DC] p-6 text-[var(--og-blue)] md:min-h-[31rem] md:p-8"
              >
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#FF7F00]">
                    {reason.number}
                  </p>
                  <h3 className="mt-7 text-3xl leading-none md:text-4xl">
                    {reason.title}
                  </h3>
                  <p className="mt-4 max-w-sm text-sm leading-6 text-[#1C1C1C]/64">
                    {reason.copy}
                  </p>
                </div>
                <div className="mt-12 flex min-h-32 items-center justify-center">
                  {reason.mark.includes("Checkers") ? (
                    <div className="flex h-32 w-32 items-center justify-center overflow-hidden rounded-full bg-[#F7F4ED] ring-2 ring-[var(--og-blue)]/12">
                      <Image
                        src={reason.mark}
                        alt=""
                        width={480}
                        height={112}
                        aria-hidden="true"
                        className={`${reason.markClassName} object-cover`}
                      />
                    </div>
                  ) : (
                    <Image
                      src={reason.mark}
                      alt=""
                      width={260}
                      height={150}
                      aria-hidden="true"
                      className={`${reason.markClassName} object-contain`}
                    />
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>
      </Reveal>

      {/* Trust signal */}
      <Testimonials testimonials={testimonials} logos={logos} />

      {/* Product categories — We Handle It All */}
      <ProductCategories />

      {/* Two ways to start */}
      <TwoPaths items={twoPaths} title={twoPathsTitle} />

      {/* Work lands here — visitor now knows what they're looking at */}
      <SelectedWork />

      <MerchTipsCarousel />

      {/* Full-width photo carousel */}
      <PhotoCarousel />

      <div style={{ height: "30px" }} />

      <ProcessSteps
        eyebrow="How It Works"
        title="Transparent process. No surprises."
        description="We tell you exactly what happens, when, and who's responsible. Unlike the big guys, you talk to one person from first email to final delivery."
        steps={homeProcess}
      />

      {/* How we build it */}
      <ServicesPreview />
      <Reveal className="px-4 py-8 md:px-8 lg:px-12">
        <section
          id="about"
          className="mx-auto grid max-w-6xl gap-8 rounded-[2rem] border border-[var(--og-sand)] bg-[rgba(255,248,241,0.88)] p-6 backdrop-blur md:grid-cols-[1fr_1.05fr] md:p-8"
        >
          <div className="relative min-h-[20rem] overflow-hidden rounded-[1.75rem] bg-[#d6bea7]">
            <Image
              src="/images/product/apparel-tshirt-hero.jpg"
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
              A real partner,<br />not a platform
            </h2>
            <p className="mt-5 text-base leading-7 text-[var(--og-muted)] md:text-lg">
              We&apos;re a small, focused team based in Southern California. Not a fulfillment warehouse, not an overseas call center. You get one person who knows your project, handles every step, and is reachable by text.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { label: "Free mockups", detail: "Every project includes mockups and revisions at no charge" },
                { label: "One contact", detail: "Same person from your first email to the box at your door" },
                { label: "Transparent pricing", detail: "No hidden setup fees, no surprise charges at the end" },
                { label: "Real lead times", detail: "We tell you exactly when it ships — and we hit it" },
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
      <div className="bg-[#F3EFE7] px-4 py-20 text-center md:px-8 md:py-24">
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
