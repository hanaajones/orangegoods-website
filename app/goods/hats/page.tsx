import Image from "next/image";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { HatBuildAccordion } from "@/components/HatBuildAccordion";
import { HatPageStickyNav } from "@/components/HatPageStickyNav";
import { HatPricingSlider } from "@/components/HatPricingSlider";
import { HomepageGoodsSlideshow } from "@/components/HomepageGoodsSlideshow";
import { ParallaxHeroBackground } from "@/components/ParallaxHeroBackground";
import { Reveal } from "@/components/Reveal";
import {
  addOnOptions,
  closureOptions,
  decorationOptions,
  fabricOptions,
} from "./options-data";
import { featuredHatStyles } from "./style-data";
import {
  hatAnchorLinks,
  hatFaqs,
  hatProcess,
} from "@/lib/content";

const startHatsHref = "/contact";
const hatsBuilderHref = "/build/og-crafted-hats";

const quantityTiers = [
  {
    label: "100",
    base: "$13.00",
    href: hatsBuilderHref,
  },
  {
    label: "250",
    base: "$12.50",
    href: hatsBuilderHref,
  },
  {
    label: "500",
    base: "$11.50",
    badge: "Great value",
    href: hatsBuilderHref,
  },
  {
    label: "1,000",
    base: "$10.50",
    href: hatsBuilderHref,
  },
];

const flowCards = [
  {
    title: "Send the direction",
    body: "Send the brand, quantity, and timeline.",
  },
  {
    title: "Approve the build",
    body: "We dial in style, fabric, and decoration.",
  },
  {
    title: "We run the project",
    body: "One team handles production and delivery.",
  },
];

const decorationPreviewOptions = [
  {
    ...decorationOptions.find((option) => option.title === "Flat embroidery")!,
    title: "Embroidery",
    imagePosition: "center 48%",
  },
  {
    ...decorationOptions.find((option) => option.title === "Patch")!,
    imagePosition: "center 48%",
  },
  {
    title: "Printed",
    description: "Printed decoration options.",
    image: "/images/gallery/headwear-printed-mg-6778.jpg",
    imagePosition: "center 48%",
    details: [],
  },
];

const heroShowcaseSlides = [
  {
    src: "/images/gallery/headwear-customize-detail-mg-2672.jpg",
    position: "center 62%",
  },
  {
    src: "/images/gallery/headwear-fabric-swatches-mg-9430.jpg",
    position: "center 50%",
  },
  {
    src: "/images/gallery/headwear-strap-color-mg-9427.jpg",
    position: "center 50%",
  },
  {
    src: "/images/gallery/headwear-interior-label-img-7638.jpg",
    position: "center 50%",
  },
];

function OptionPathCard({
  id,
  eyebrow,
  title,
  description,
  href,
  cta,
  options,
  horizontal,
  fullBleed,
  previewCount,
}: {
  id: string;
  eyebrow?: string;
  title: string;
  description: string;
  href: string;
  cta: string;
  options: typeof fabricOptions;
  horizontal?: boolean;
  fullBleed?: boolean;
  previewCount?: number;
}) {
  const visibleOptions = previewCount ? options.slice(0, previewCount) : options;

  return (
    <section id={id} className={fullBleed ? "" : "mx-auto max-w-6xl"}>
      <div className="mx-auto max-w-4xl text-center">
        {eyebrow ? (
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--og-orange)]">
            {eyebrow}
          </p>
        ) : null}
        <h2
          className={`text-3xl font-semibold leading-tight text-[var(--og-blue)] md:text-5xl ${
            eyebrow ? "mt-3" : "mt-0"
          }`}
        >
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-[var(--og-muted)] md:text-base">
          {description}
        </p>
      </div>

      {horizontal && previewCount ? (
        <div className="mx-auto mt-8 max-w-6xl">
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {visibleOptions.map((option) => (
              <Link key={option.title} href={href} className="group block">
                {(() => {
                  const isDecorationPreview =
                    id === "decoration" &&
                    (option.title === "Embroidery" ||
                      option.title === "Patch" ||
                      option.title === "Printed");
                  const imageScaleClass = isDecorationPreview
                    ? "scale-[1.43] group-hover:scale-[1.46]"
                    : "scale-[1.08] group-hover:scale-[1.11]";

                  return (
                <article className="overflow-hidden rounded-[1.35rem] border-[3px] border-[#0B32A0] bg-white transition group-hover:-translate-y-[2px] group-hover:border-[var(--og-orange)]">
                  <div className="relative aspect-[5/4] bg-[#d8c3aa]">
                    <Image
                      src={option.image}
                      alt={option.title}
                      fill
                      sizes="(min-width: 1280px) 30vw, (min-width: 768px) 45vw, 100vw"
                      className={`object-cover transition duration-300 ${imageScaleClass}`}
                      style={{ objectPosition: option.imagePosition }}
                    />
                  </div>
                  <div className="flex min-h-[84px] items-center justify-center px-4 py-4 text-center">
                    <h3 className="font-noir-alt text-[15px] font-bold uppercase leading-tight tracking-[0.12em] text-[#0B32A0]">
                      {option.title}
                    </h3>
                  </div>
                </article>
                  );
                })()}
              </Link>
            ))}
          </div>
        </div>
      ) : horizontal ? (
        <div
          className={`hide-scrollbar mt-8 overflow-x-auto pt-3 pb-1 ${
            fullBleed
              ? "relative left-1/2 right-1/2 w-screen -translate-x-1/2 px-4 md:px-8 lg:px-12"
              : "-mx-4 px-4 md:mx-0 md:px-0"
          }`}
        >
          <div className="flex w-max snap-x snap-mandatory gap-4">
            {visibleOptions.map((option) => (
              <Link
                key={option.title}
                href={href}
                className="group block w-[23rem] shrink-0 snap-start md:w-[25rem] lg:w-[26rem]"
              >
                <article className="overflow-hidden rounded-[1.35rem] border-[3px] border-[#0B32A0] bg-white transition group-hover:-translate-y-[2px] group-hover:border-[var(--og-orange)]">
                  <div className="relative aspect-[5/4] bg-[#d8c3aa]">
                    <Image
                      src={option.image}
                      alt={option.title}
                      fill
                      sizes="(min-width: 1024px) 416px, (min-width: 768px) 400px, 368px"
                      className="object-cover scale-[1.08] transition duration-300 group-hover:scale-[1.11]"
                      style={{ objectPosition: option.imagePosition }}
                    />
                  </div>
                  <div className="px-4 pb-5 pt-4 text-center">
                    <h3 className="font-noir-alt text-[15px] font-bold uppercase leading-tight tracking-[0.12em] text-[#0B32A0]">
                      {option.title}
                    </h3>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      ) : (
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visibleOptions.map((option) => (
            <Link
              key={option.title}
              href={href}
              className="group block"
            >
              <article className="overflow-hidden rounded-[1.35rem] bg-transparent transition group-hover:-translate-y-[2px]">
                <div className="relative aspect-[1/1] bg-[#d8c3aa]">
                  <Image
                    src={option.image}
                    alt={option.title}
                    fill
                    sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                    className="object-cover scale-[1.08] transition duration-300 group-hover:scale-[1.11]"
                    style={{ objectPosition: option.imagePosition }}
                  />
                </div>
                <div className="px-2 pb-1 pt-4 text-center">
                  <h3 className="text-lg font-semibold uppercase leading-tight tracking-[0.04em] text-[#1C1C1C] md:text-[1.38rem]">
                    {option.title}
                  </h3>
                </div>
              </article>
            </Link>
          ))}
        </div>
      )}

      <div className="mt-6 flex justify-center">
        <Link
          href={href}
          className="inline-flex min-h-10 items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-[#1C1C1C] transition hover:text-[var(--og-orange)]"
        >
          {cta}
          <span aria-hidden="true" className="text-[var(--og-orange)]">
            →
          </span>
        </Link>
      </div>
    </section>
  );
}

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? (
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--og-orange)]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-3 text-3xl font-semibold leading-tight text-[var(--og-blue)] md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-sm leading-7 text-[var(--og-muted)] md:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}

export default function HatsPage() {
  return (
    <main className="bg-[#F7F4ED] pb-24 md:pb-0">
      <section className="relative overflow-hidden bg-[#1C1C1C] px-4 py-12 text-white md:px-8 md:py-[4.5rem] lg:px-12">
        <ParallaxHeroBackground
          image="/images/gallery/headwear-patch-layout-mg-9412.jpg"
          inset="-0.75%"
          position="center 40%"
          speed={0.1}
        />
        <div className="absolute inset-0 bg-[#1C1C1C]/34" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1C1C1C]/60 via-[#1C1C1C]/42 to-[#1C1C1C]/16" />
        <div className="relative mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white/75">
            OG Crafted
          </p>
          <h1 className="mt-5 max-w-3xl text-5xl uppercase leading-none text-[var(--og-orange)] md:text-6xl lg:text-7xl">
            Custom Hats
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-white/82 md:text-xl">
            Fully custom hats built around your brand, down to the fabric, patch, label, rope,
            and closure.
          </p>
          <p className="mt-4 text-sm font-semibold uppercase tracking-[0.12em] text-white/78">
            100+ hats per style. 6-8 week lead time.
          </p>
        </div>
      </section>

      <HatPageStickyNav mode="og-crafted" links={hatAnchorLinks} />

      <Reveal className="px-4 py-10 md:px-8 lg:px-12">
        <section id="overview" className="mx-auto max-w-6xl">
          <article className="relative overflow-hidden rounded-[2rem] border-[3px] border-[#0B32A0] text-white">
            <div className="absolute inset-0">
              <HomepageGoodsSlideshow
                slides={heroShowcaseSlides}
                intervalMs={3200}
                transitionMs={550}
              />
            </div>
            <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(72,72,72,0.72),rgba(28,28,28,0.52))]" />
            <div className="relative p-8 md:p-10">
              <div>
                <span className="inline-flex rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-white backdrop-blur-sm">
                  OG Crafted
                </span>
                <h3 className="mt-4 text-4xl font-semibold leading-none md:text-5xl">
                  Customize every detail
                </h3>
                <p className="mt-4 max-w-2xl text-lg leading-7 text-white/82">
                  Shape, structure, fabric, decoration, and finishing all get built around the
                  brand.
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Link href="#pricing" className="btn-og inline-flex">
                    See pricing
                  </Link>
                  <Link href="#styles" className="btn-og-white inline-flex">
                    View styles
                  </Link>
                </div>
              </div>
            </div>
          </article>

        </section>
      </Reveal>

      <Reveal className="px-4 pb-8 pt-3 md:px-8 lg:px-12">
        <section className="mx-auto max-w-6xl">
          <HatBuildAccordion />
        </section>
      </Reveal>

      <Reveal className="px-4 py-8 md:px-8 lg:px-12">
        <section id="pricing" className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="Pricing"
            title="Straightforward Pricing"
          />

          <HatPricingSlider tiers={quantityTiers} />

          <div className="mt-8 rounded-[1.9rem] border border-[#0B32A0]/15 bg-white p-6 md:p-7">
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--og-orange)]">
                  How it moves
                </p>
                <h3 className="mt-2 text-3xl font-semibold leading-none text-[#1C1C1C]">
                  Keep it simple.
                </h3>
              </div>
              <p className="max-w-xl text-sm leading-6 text-[var(--og-muted)]">
                We help narrow the choices and run the project.
              </p>
            </div>

            <div className="mt-6 grid gap-3 lg:grid-cols-3">
              {flowCards.map((card, index) => (
                <article
                  key={card.title}
                  className="rounded-[1.35rem] border border-[#0B32A0]/12 bg-[rgba(255,248,241,0.72)] p-5"
                >
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--og-orange)]">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h4 className="mt-3 text-2xl font-semibold leading-tight text-[#1C1C1C]">
                    {card.title}
                  </h4>
                  <p className="mt-3 text-sm leading-6 text-[var(--og-muted)]">
                    {card.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal className="px-4 py-8 md:px-8 lg:px-12">
        <section className="mx-auto max-w-6xl">
          <div className="grid gap-5 lg:grid-cols-[0.72fr_1.28fr]">
            <div className="relative min-h-[16rem] overflow-hidden rounded-[1.75rem] border border-[#0B32A0]/15 bg-[#d9c5ae]">
              <Image
                src="/images/product/hat-lifestyle-hero.jpg"
                alt="Orange Goods ready-made hats"
                fill
                sizes="(min-width: 1024px) 30vw, 100vw"
                className="object-cover"
                style={{ objectPosition: "center 42%" }}
              />
            </div>
            <div className="rounded-[1.75rem] border border-[#0B32A0]/15 bg-white p-6 md:p-7">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--og-orange)]">
                Need it sooner?
              </p>
              <h3 className="mt-3 text-3xl font-semibold leading-tight text-[#1C1C1C]">
                Start with a premium blank.
              </h3>
              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                {[
                  "Premium blanks with your decoration",
                  "2-3 week turnaround",
                  "Less customization",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-[1.15rem] border border-[#0B32A0]/10 bg-[rgba(255,248,241,0.88)] p-4 text-sm leading-6 text-[var(--og-muted)]"
                  >
                    {item}
                  </div>
                ))}
              </div>
              <Link
                href="/goods/hats/ready-made"
                className="mt-6 inline-flex min-h-11 items-center rounded-xl border-2 border-[#0B32A0] px-5 text-sm font-semibold uppercase tracking-[0.12em] text-[#1C1C1C] transition hover:-translate-y-[3px] hover:bg-[#0B32A0] hover:text-white"
              >
                See ready-made hats
              </Link>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal className="px-4 py-8 md:px-8 lg:px-12">
        <section id="styles" className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="Styles"
            title="Start with the shape"
            description="Pick the silhouette here, then refine the rest inside the builder."
          />

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {featuredHatStyles.map((card) => (
              <Link
                key={card.slug}
                href={`${hatsBuilderHref}?hatStyle=${card.slug}`}
                className="group block"
              >
                <article className="overflow-hidden rounded-[1.9rem] border-[3px] border-transparent bg-white shadow-[0_18px_50px_rgba(8,30,111,0.07)] transition group-hover:-translate-y-[2px] group-hover:border-[#0B32A0]">
                  <div className="relative aspect-[16/10] bg-[#d9c5ae]">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover transition duration-300 group-hover:scale-[1.03]"
                      style={{ objectPosition: card.imagePosition }}
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--og-orange)]">
                      {card.model}
                    </p>
                    <h3 className="mt-2 text-3xl font-semibold leading-none text-[#1C1C1C]">
                      {card.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-[var(--og-muted)] md:text-base">
                      {card.description}
                    </p>
                    <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-[#0B32A0] transition group-hover:text-[var(--og-orange)]">
                      Build this style →
                    </p>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <Link
              href="/goods/hats/styles"
              className="inline-flex min-h-11 items-center rounded-xl border-2 border-[#0B32A0] px-5 text-sm font-semibold uppercase tracking-[0.12em] text-[#1C1C1C] transition hover:-translate-y-[3px] hover:bg-[#0B32A0] hover:text-white"
            >
              See all styles
            </Link>
          </div>
        </section>
      </Reveal>

      <Reveal className="px-4 py-8 md:px-8 lg:px-12">
        <OptionPathCard
          id="decoration-methods"
          title="Choose your decoration"
          description="See the branding methods in one place, then click through to the full page."
          href="/goods/hats/decoration"
          cta="See all decoration methods"
          options={decorationPreviewOptions}
          horizontal
          fullBleed
          previewCount={3}
        />
      </Reveal>

      <Reveal className="px-4 py-8 md:px-8 lg:px-12">
        <OptionPathCard
          id="fabric"
          title="Choose your fabric"
          description="Fabric changes the feel fast. Click through to see the options grouped more clearly."
          href="/goods/hats/fabric"
          cta="See all fabric options"
          options={fabricOptions}
          horizontal
          fullBleed
          previewCount={3}
        />
      </Reveal>

      <Reveal className="px-4 py-8 md:px-8 lg:px-12">
        <OptionPathCard
          id="closure"
          title="Choose your closure"
          description="Back closures change the feel too. See the main options, then click through for the full set."
          href="/goods/hats/closure"
          cta="See all closure options"
          options={closureOptions}
          horizontal
          fullBleed
          previewCount={3}
        />
      </Reveal>

      <Reveal className="px-4 py-8 md:px-8 lg:px-12">
        <OptionPathCard
          id="addons"
          title="Choose your add-ons"
          description="Interior hits, extra embroidery, and finishing details live on their own page too."
          href="/goods/hats/add-ons"
          cta="See all add-ons"
          options={addOnOptions}
          horizontal
          fullBleed
          previewCount={3}
        />
      </Reveal>

      <Reveal className="px-4 py-8 md:px-8 lg:px-12">
        <section id="process" className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="Process"
            title="How it works."
            description="A simple path from idea to delivery."
          />
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {hatProcess.map((step, index) => (
              <article
                key={step.title}
                className="rounded-[1.75rem] border border-[#0B32A0]/20 bg-[rgba(255,248,241,0.88)] p-6"
              >
                <p
                  className={`text-sm font-semibold uppercase tracking-[0.22em] ${
                    index % 2 === 0 ? "text-[var(--og-orange)]" : "text-[var(--og-blue)]"
                  }`}
                >
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-4 text-2xl font-semibold text-[#1C1C1C]">
                  {step.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-[var(--og-muted)]">
                  {step.body}
                </p>
              </article>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal className="px-4 py-8 md:px-8 lg:px-12">
        <section id="faq" className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="FAQ"
            title="Good to know before you start."
          />
          <div className="mt-8 grid gap-3">
            {hatFaqs.map((faq) => (
              <details
                key={faq.question}
                className="rounded-[1.5rem] border border-[#0B32A0]/20 bg-[rgba(255,248,241,0.88)] p-5"
              >
                <summary className="cursor-pointer text-lg font-semibold text-[#1C1C1C]">
                  {faq.question}
                </summary>
                <p className="mt-3 text-base leading-7 text-[var(--og-muted)]">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </section>
      </Reveal>

      <CTASection
        title="Ready to start your hat project?"
        description="Send the style, quantity, and timeline. We will take it from there."
        buttonLabel="Start a Project"
        buttonHref={startHatsHref}
      />
    </main>
  );
}
