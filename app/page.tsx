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
import { TwoPaths } from "@/components/TwoPaths";
import { UseCaseCarousel } from "@/components/UseCaseCarousel";
import {
  homeProcess,
  logos,
  startProjectHref,
  twoPaths,
  twoPathsTitle,
} from "@/lib/content";

export default function HomePage() {
  return (
    <main className="pb-24 md:pb-0">
      <Hero />

      {/* Fat Frank divider */}
      <div className="border-b-[3px] border-[#1C1C1C] bg-[#081E6F] px-4 py-4 text-center md:px-6 md:py-5 lg:px-8">
        <p
          className="grid w-full grid-cols-2 items-center gap-x-4 gap-y-1 text-[1.9rem] uppercase leading-none tracking-[0.01em] text-[#FF4200] sm:text-[2.5rem] md:flex md:flex-nowrap md:justify-between md:text-[3.4rem] lg:text-[4.6rem] xl:text-[5.35rem]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          <span>BRANDED</span>
          <span>GOODS</span>
          <span>WORTH</span>
          <span>KEEPING</span>
        </p>
      </div>

      <UseCaseCarousel logos={logos} />

      <Reveal className="relative isolate overflow-hidden px-4 py-16 md:px-8 md:py-20 lg:px-12">
        <Image
          src="/images/gallery/goods-hero-misc-dscf4876.jpg"
          alt=""
          fill
          sizes="100vw"
          aria-hidden="true"
          className="absolute inset-0 -z-30 object-cover object-center"
        />
        <div className="absolute inset-0 -z-20 bg-[#1C1C1C]/86" />
        <div
          className="absolute inset-0 -z-10 opacity-30 mix-blend-soft-light"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160' viewBox='0 0 160 160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='160' height='160' filter='url(%23n)' opacity='.62'/%3E%3C/svg%3E\")",
          }}
          aria-hidden="true"
        />
        <section id="why-orange-goods" className="relative z-10 mx-auto max-w-6xl scroll-mt-24">
          <h2 className="font-accent w-full max-w-none whitespace-nowrap text-center text-xl font-normal normal-case leading-tight tracking-normal text-white sm:text-2xl md:text-3xl">
            For us, it&apos;s all about the details.
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              {
                title: "One merch partner",
                copy: "Skip the vendor juggling. OG connects sourcing, mockups, production, kitting, and delivery with one team.",
                icon: (
                  <svg
                    aria-hidden="true"
                    className="h-9 w-9"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 7h10" />
                    <path d="m11 4 3 3-3 3" />
                    <path d="M20 17H10" />
                    <path d="m13 14-3 3 3 3" />
                  </svg>
                ),
              },
              {
                title: "California team",
                copy: "A real California team you can text, call, or email. No hub, no call center, no getting passed around.",
                icon: (
                  <svg
                    aria-hidden="true"
                    className="h-9 w-9"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 21s7-5.3 7-11a7 7 0 0 0-14 0c0 5.7 7 11 7 11Z" />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>
                ),
              },
              {
                title: "Communication done right",
                copy: "We keep you posted from first mockup to final delivery, so you always know what is moving and what is next.",
                icon: (
                  <svg
                    aria-hidden="true"
                    className="h-9 w-9"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 12a8 8 0 0 1-8 8H6l-4 3 1.5-5A8 8 0 1 1 21 12Z" />
                    <path d="M8 11h8" />
                    <path d="M8 15h5" />
                  </svg>
                ),
              },
            ].map((reason) => (
              <article
                key={reason.title}
                className="flex min-h-[17rem] flex-col items-center justify-center rounded-lg border-[3px] border-[#B8AA8E] bg-[var(--og-sand)] p-6 text-center text-[#081E6F] shadow-[5px_5px_0px_#0B32A0] md:min-h-[18rem] md:p-8"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full border-[3px] border-[#B8AA8E] bg-[#F3EFE7] text-[#FF4200]">
                  {reason.icon}
                </div>
                <h3 className="font-subtitle-alt mt-6 text-3xl font-medium normal-case leading-none tracking-normal text-[#081E6F] md:text-4xl">
                  {reason.title}
                </h3>
                <p className="font-noir-alt mt-4 max-w-sm text-base font-medium leading-7 text-[#1C1C1C]/70">
                  {reason.copy}
                </p>
              </article>
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <Link
              href={startProjectHref}
              className="font-noir-alt inline-flex min-h-11 items-center justify-center rounded-xl bg-white px-5 text-sm font-bold uppercase tracking-[0.1em] text-[#0B32A0] shadow-[5px_5px_0px_#0B32A0] transition hover:-translate-y-0.5 hover:bg-[#F3EFE7]"
            >
              Get in touch
            </Link>
          </div>
        </section>
      </Reveal>

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
