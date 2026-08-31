import Image from "next/image";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { HatBuildAccordion } from "@/components/HatBuildAccordion";
import { HatPageStickyNav } from "@/components/HatPageStickyNav";
import { HatPricingSlider } from "@/components/HatPricingSlider";
import { HatQuickLeadForm } from "@/components/HatQuickLeadForm";
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

const hatsBuilderHref = "/build/og-crafted-hats";
const fullCustomHatsBrowserHref = "/goods/all?productionPath=full-custom&category=hats";
const quickTurnHatsBrowserHref = "/goods/all?productionPath=quick-turn&category=hats";
const featuredStyleStartingPrice = "$13.00";

const quantityTiers = [
  {
    label: "100 hats",
    base: "$13.00",
    href: hatsBuilderHref,
  },
  {
    label: "250 hats",
    base: "$12.50",
    href: hatsBuilderHref,
  },
  {
    label: "500 hats",
    base: "$11.50",
    badge: "Great value",
    href: hatsBuilderHref,
  },
  {
    label: "1000 hats",
    base: "$10.50",
    href: hatsBuilderHref,
  },
];

const decorationPreviewOptions = [
  {
    ...decorationOptions.find((option) => option.title === "Flat embroidery")!,
    title: "Embroidery",
    imagePosition: "54% 58%",
    imageScaleClass: "scale-[1.5] group-hover:scale-[1.53]",
  },
  {
    ...decorationOptions.find((option) => option.title === "Patch")!,
    imagePosition: "46% 54%",
    imageScaleClass: "scale-[1.47] group-hover:scale-[1.5]",
  },
  {
    title: "Printed",
    description: "Printed decoration options.",
    image: "/images/gallery/headwear-printed-mg-6778.jpg",
    imagePosition: "52% 52%",
    imageScaleClass: "scale-[1.46] group-hover:scale-[1.49]",
    details: [],
  },
];

const fabricPreviewOptions = fabricOptions.map((option, index) => ({
  ...option,
  imageScaleClass:
    index < 3
      ? "-translate-y-[10px] scale-[1.08] group-hover:-translate-y-[10px] group-hover:scale-[1.11]"
      : option.imageScaleClass,
}));

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
    src: "/images/gallery/headwear-interior-label-img-7638.jpg",
    position: "center 50%",
  },
];

const quickTurnHighlights = [
  {
    label: "Base",
    value: "Premium blanks with your decoration",
  },
  {
    label: "Timing",
    value: "2-3 week turnaround",
  },
  {
    label: "Finish",
    value: "Decorated locally",
  },
];

const brandConfidenceWordmarkClassName =
  "text-[0.95rem] font-semibold uppercase tracking-[0.18em] text-[#1C1C1C] md:text-[1rem]";

const brandConfidenceCards = [
  {
    name: "Verve Coffee",
    image: "/images/gallery/headwear-full-custom-verve-larrea-hat-038.jpg",
    imagePosition: "center 58%",
    logoType: "wordmark" as const,
    wordmark: "Verve Coffee",
    wordmarkClassName: brandConfidenceWordmarkClassName,
  },
  {
    name: "Grateful Dead",
    image: "/images/gallery/hat-grateful-dead-img-7444-2.jpg",
    imagePosition: "center 68%",
    logoType: "wordmark" as const,
    wordmark: "Grateful Dead",
    wordmarkClassName: brandConfidenceWordmarkClassName,
  },
  {
    name: "Bread Head",
    image: "/images/gallery/hat-bread-head-tezza-3828.jpg",
    imagePosition: "center 96%",
    logoType: "wordmark" as const,
    wordmark: "Bread Head",
    wordmarkClassName: brandConfidenceWordmarkClassName,
  },
];

const hatProcessVisuals = [
  {
    mediaType: "image" as const,
    image: "/images/gallery/headwear-brief-direction-mg-9422-v2.jpg",
    imagePosition: "center 58%",
    accent: "Share your direction",
  },
  {
    mediaType: "image" as const,
    image: "/images/gallery/headwear-mockups-approval-bread-head-2026-07-30-005357.png",
    imagePosition: "center 48%",
    imageScaleClass: "scale-[1.03]",
    accent: "Review the details",
  },
  {
    mediaType: "video" as const,
    image: "/images/gallery/headwear-production-delivery-gatt-hat-3.mp4",
    imagePosition: "center center",
    accent: "Production to delivery",
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
                  const defaultImageScaleClass = isDecorationPreview
                    ? "scale-[1.43] group-hover:scale-[1.46]"
                    : "scale-[1.08] group-hover:scale-[1.11]";
                  const imageScaleClass = option.imageScaleClass ?? defaultImageScaleClass;

                  return (
                <article className="overflow-hidden rounded-[1.35rem] border-[3px] border-[#0B32A0] bg-white transition group-hover:-translate-y-[2px] group-hover:border-[var(--og-orange)]">
                  <div className="relative aspect-[5/4] overflow-hidden bg-[#d8c3aa]">
                    <Image
                      src={option.image}
                      alt={option.title}
                      fill
                      sizes="(min-width: 1280px) 30vw, (min-width: 768px) 45vw, 100vw"
                      className={`object-cover transition duration-300 ${imageScaleClass}`}
                      style={{ objectPosition: option.imagePosition }}
                    />
                  </div>
                  <div className="relative z-10 flex min-h-[84px] items-center justify-center bg-white px-4 py-4 text-center">
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
                      className={`object-cover transition duration-300 ${option.imageScaleClass ?? "scale-[1.08] group-hover:scale-[1.11]"}`}
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
                    className={`object-cover transition duration-300 ${option.imageScaleClass ?? "scale-[1.08] group-hover:scale-[1.11]"}`}
                    style={{ objectPosition: option.imagePosition }}
                  />
                </div>
                <div className="px-2 pb-1 pt-4 text-center">
                  <h3 className="text-lg font-semibold uppercase leading-tight tracking-[0.04em] text-[#0B32A0] md:text-[1.38rem]">
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
          className="group inline-flex min-h-10 items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-[#1C1C1C] transition hover:text-[var(--og-orange)]"
        >
          {cta}
          <span
            aria-hidden="true"
            className="text-[var(--og-orange)] transition-transform duration-200 group-hover:translate-x-1"
          >
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
          image="/images/gallery/headwear-custom-hats-hero-dscf3128.jpg"
          inset="-0.75%"
          position="center 56%"
          speed={0.1}
        />
        <div className="absolute inset-0 bg-[#1C1C1C]/46" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1C1C1C]/72 via-[#1C1C1C]/54 to-[#1C1C1C]/26" />
        <div className="relative mx-auto max-w-6xl">
          <p className="hidden text-sm font-semibold uppercase tracking-[0.28em] text-white/75 md:block">
            Full Custom
          </p>
          <h1 className="mt-3 max-w-3xl text-[2.8rem] uppercase leading-none text-[var(--og-orange)] md:mt-5 md:text-6xl lg:text-7xl">
            Custom Hats
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-white/82 md:text-xl">
            Fully custom hats built around your brand, down to the fabric, patch, label, rope,
            and closure.
          </p>
          <p className="mt-4 text-sm font-semibold uppercase tracking-[0.12em] text-white/78">
            100+ hats per style. 6-8 week turnaround.
          </p>
        </div>
      </section>

      <HatPageStickyNav mode="og-crafted" links={hatAnchorLinks} showModeToggle={false} />

      <Reveal className="px-4 pb-10 pt-5 md:px-8 lg:px-12">
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
                <h3 className="text-4xl font-semibold leading-none md:text-5xl">
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
        <section className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold leading-tight text-[var(--og-blue)] md:text-5xl">
              Trusted by brands you know
            </h2>
            <p className="mt-4 text-sm leading-7 text-[var(--og-muted)] md:text-base">
              A few examples of how a logo, the right shape, and thoughtful details come together
              on finished hats.
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {brandConfidenceCards.map((card) => (
              <article
                key={card.name}
                className="relative overflow-hidden rounded-[1.9rem] border-[3px] border-[#0B32A0] bg-[#d8c3aa]"
              >
                <div className="relative aspect-[4/4.35]">
                  <Image
                    src={card.image}
                    alt={card.name}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover"
                    style={{ objectPosition: card.imagePosition }}
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(28,28,28,0.18),rgba(28,28,28,0.02)_42%,rgba(28,28,28,0.34))]" />
                  <div className="absolute left-5 top-5 rounded-full bg-white/92 px-4 py-3 shadow-[0_16px_32px_rgba(20,20,20,0.14)] backdrop-blur-sm">
                    <span className={card.wordmarkClassName}>{card.wordmark}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal className="px-4 pb-8 pt-2 md:px-8 lg:px-12">
        <section className="mx-auto max-w-6xl">
          <HatQuickLeadForm />
        </section>
      </Reveal>

      <Reveal className="px-4 py-8 md:px-8 lg:px-12">
        <section id="pricing" className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="Pricing"
            title="Straightforward Pricing"
          />

          <HatPricingSlider tiers={quantityTiers} />

          <div className="relative left-1/2 mt-12 w-screen -translate-x-1/2 border-y-[3px] border-[#1C1C1C] bg-[#081E6F] px-4 py-4 text-center md:mt-14 md:px-6 md:py-5 lg:px-8">
            <p
              className="mx-auto flex max-w-[76rem] flex-wrap items-center justify-center gap-x-4 gap-y-1 text-[1.9rem] uppercase leading-none tracking-[0.01em] text-[#FF4200] sm:gap-x-5 sm:text-[2.5rem] md:flex-nowrap md:gap-x-6 md:text-[3.4rem] lg:gap-x-8 lg:text-[4.6rem] xl:text-[5.35rem]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              <span>HATS</span>
              <span>BUILT</span>
              <span>FROM</span>
              <span>SCRATCH</span>
            </p>
          </div>

          <div id="styles" className="mt-12 rounded-[1.9rem] border border-[#0B32A0]/15 bg-white p-6 md:mt-14 md:p-7">
            <SectionHeader
              eyebrow="Styles"
              title="Start with the right shape"
              description="Pick the silhouette here, then refine the rest inside the builder."
            />
            <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {featuredHatStyles.map((style) => (
                <article
                  key={style.slug}
                  className="group relative overflow-hidden rounded-[1.9rem] border-[3px] border-transparent bg-[rgba(255,248,241,0.88)] transition hover:border-[#0B32A0] hover:shadow-lg"
                >
                  <Link
                    href={`${hatsBuilderHref}?hatStyle=${encodeURIComponent(style.slug)}`}
                    aria-label={`Open ${style.title}`}
                    className="absolute inset-0 z-10 rounded-[1.9rem]"
                  />
                  <div className="pointer-events-none">
                    <div className="relative aspect-[4/3] bg-white">
                      <Image
                        src={style.image}
                        alt={style.title}
                        fill
                        sizes="(min-width: 1536px) 28vw, (min-width: 768px) 44vw, 100vw"
                        className="object-cover transition duration-300 group-hover:scale-[1.03]"
                        style={{ objectPosition: style.imagePosition }}
                      />
                      <span className="absolute right-3 top-3 rounded-full bg-[#0B32A0]/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[var(--og-blue)]">
                        {style.profile}
                      </span>
                    </div>
                  </div>
                  <div className="pointer-events-none p-6">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--og-orange)]">
                      {style.model}
                    </p>
                    <h3 className="mt-1 text-2xl font-semibold leading-none text-[var(--og-blue)]">
                      {style.title}
                    </h3>
                    <p className="mt-2 text-sm text-[var(--og-muted)]">
                      {style.description}
                    </p>
                    <p className="mt-3 text-sm font-semibold text-[var(--og-orange)]">
                      From {featuredStyleStartingPrice} / hat
                    </p>
                    <div className="mt-5 flex items-center gap-2 pt-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#0B32A0] transition group-hover:text-[var(--og-orange)]">
                      <span>Customize this hat</span>
                      <span
                        aria-hidden="true"
                        className="text-[var(--og-orange)] transition-transform duration-200 group-hover:translate-x-1"
                      >
                        →
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-8 flex justify-center">
              <Link
                href={fullCustomHatsBrowserHref}
                className="inline-flex min-h-11 items-center rounded-xl border-2 border-[#0B32A0] px-5 text-sm font-semibold uppercase tracking-[0.12em] text-[#0B32A0] transition hover:-translate-y-[3px] hover:bg-[#0B32A0] hover:text-white"
              >
                See all styles
              </Link>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal className="px-4 py-8 md:px-8 lg:px-12">
        <OptionPathCard
          id="decoration-methods"
          title="Choose your decoration"
          description="Compare the main decoration options here, then click through to see the full set."
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
          description="Fabric sets the tone fast. Click through to compare the options more clearly."
          href="/goods/hats/fabric"
          cta="See all fabric options"
          options={fabricPreviewOptions}
          horizontal
          fullBleed
          previewCount={3}
        />
      </Reveal>

      <Reveal className="px-4 py-8 md:px-8 lg:px-12">
        <OptionPathCard
          id="closure"
          title="Choose your closure"
          description="Closure changes the feel fast. Click through to compare the full set."
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
          description="Interior hits, extra embroidery, and finishing details all live here. Click through to see the full set."
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
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-semibold leading-tight text-[var(--og-blue)] md:text-5xl">
              Simple process
            </h2>
            <p className="mt-4 text-sm leading-7 text-[var(--og-muted)] md:text-base">
              A simple path from idea to delivery.
            </p>
          </div>
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {hatProcess.map((step, index) => (
              <article
                key={step.title}
                className="overflow-hidden rounded-[1.75rem] border border-[#0B32A0]/20 bg-[rgba(255,248,241,0.88)]"
              >
                <div className="relative aspect-[5/4] overflow-hidden bg-[#d8c3aa]">
                  {hatProcessVisuals[index]?.mediaType === "video" ? (
                    <video
                      autoPlay
                      className="absolute inset-0 h-full w-full object-cover"
                      loop
                      muted
                      playsInline
                      preload="metadata"
                      style={{
                        objectPosition:
                          hatProcessVisuals[index]?.imagePosition ?? "center 52%",
                      }}
                    >
                      <source
                        src={hatProcessVisuals[index]?.image}
                        type="video/mp4"
                      />
                    </video>
                  ) : (
                    <Image
                      src={hatProcessVisuals[index]?.image ?? "/images/gallery/headwear-customize-detail-mg-2672.jpg"}
                      alt={step.title}
                      fill
                      sizes="(min-width: 1024px) 30vw, 100vw"
                      className={`object-cover ${hatProcessVisuals[index]?.imageScaleClass ?? ""}`}
                      style={{
                        objectPosition:
                          hatProcessVisuals[index]?.imagePosition ?? "center 52%",
                      }}
                    />
                  )}
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(28,28,28,0.12),rgba(28,28,28,0.03)_45%,rgba(28,28,28,0.34))]" />
                  <div className="absolute left-4 top-4 rounded-full bg-white/92 px-3 py-2 shadow-[0_14px_28px_rgba(20,20,20,0.14)] backdrop-blur-sm">
                    <span className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[#0B32A0]">
                      {hatProcessVisuals[index]?.accent}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                <p
                  className={`text-sm font-semibold uppercase tracking-[0.22em] ${
                    index % 2 === 0 ? "text-[var(--og-orange)]" : "text-[var(--og-blue)]"
                  }`}
                >
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-4 text-2xl font-semibold text-[#0B32A0]">
                  {step.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-[var(--og-muted)]">
                  {step.body}
                </p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal className="px-4 py-8 md:px-8 lg:px-12">
        <section id="faq" className="mx-auto max-w-6xl">
          <div className="mb-8 grid gap-5 lg:grid-cols-[0.72fr_1.28fr]">
            <div className="relative min-h-[16rem] overflow-hidden rounded-[1.75rem] border border-[#0B32A0]/15 bg-[#d9c5ae]">
              <Image
                src="/images/product/hat-lifestyle-hero.jpg"
                alt="Orange Goods quick-turn hats"
                fill
                sizes="(min-width: 1024px) 30vw, 100vw"
                className="object-cover"
                style={{ objectPosition: "center 42%" }}
              />
            </div>
            <div className="rounded-[1.75rem] border border-[#0B32A0]/15 bg-[linear-gradient(180deg,rgba(255,255,255,1),rgba(255,247,238,0.98))] p-6 shadow-[0_22px_52px_rgba(11,50,160,0.08)] md:p-7">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--og-orange)]">
                Need it sooner?
              </p>
              <h3 className="mt-3 text-3xl font-semibold leading-tight text-[#0B32A0]">
                Start with a premium blank.
              </h3>
              <p className="mt-3 max-w-2xl text-base leading-7 text-[var(--og-muted)]">
                Keep the retail feel, skip the longer custom build. Quick Turn starts
                with a better blank and moves fast.
              </p>
              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                {quickTurnHighlights.map((item) => (
                  <div
                    key={item.value}
                    className="min-h-[7.25rem] rounded-[1.25rem] border border-[#0B32A0]/12 bg-white px-4 py-4 shadow-[0_12px_26px_rgba(11,50,160,0.06)]"
                  >
                    <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[var(--og-orange)]">
                      {item.label}
                    </p>
                    <p className="mt-3 max-w-[12rem] text-base font-medium leading-6 text-[#0B32A0]">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
              <Link
                href={quickTurnHatsBrowserHref}
                className="mt-6 inline-flex min-h-11 items-center rounded-xl border-2 border-[#0B32A0] px-5 text-sm font-semibold uppercase tracking-[0.12em] text-[#0B32A0] transition hover:-translate-y-[3px] hover:bg-[#0B32A0] hover:text-white"
              >
                See quick turn hats
              </Link>
            </div>
          </div>
          <SectionHeader
            eyebrow="FAQ"
            title="Common Questions"
          />
          <div className="mt-8 grid gap-3">
            {hatFaqs.map((faq) => (
              <details
                key={faq.question}
                className="rounded-[1.5rem] border border-[#0B32A0]/20 bg-[rgba(255,248,241,0.88)] p-5"
              >
                <summary className="cursor-pointer text-lg font-semibold text-[#0B32A0]">
                  {faq.question}
                </summary>
                <p className="mt-3 text-base leading-7 text-[var(--og-muted)]">
                  {faq.answer}{" "}
                  {faq.question === "What file formats do you need?" ? (
                    <Link
                      href="/design"
                      target="_blank"
                      rel="noreferrer"
                      className="font-semibold text-[#0B32A0] underline decoration-[0.08em] underline-offset-4"
                    >
                      We can help
                    </Link>
                  ) : null}
                </p>
              </details>
            ))}
          </div>
        </section>
      </Reveal>

      <CTASection
        title="Ready to start your hat project?"
        description="Start with the style and details you want, and we’ll help build out the rest."
        buttonLabel="Customize your hats"
        buttonHref={fullCustomHatsBrowserHref}
        backgroundImage="/images/gallery/headwear-full-custom-verve-larrea-hat-038.jpg"
        backgroundImagePosition="center 32%"
        showImageOverlay={false}
      />
    </main>
  );
}
