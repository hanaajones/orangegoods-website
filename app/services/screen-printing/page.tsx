import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { ClientLogoMarquee } from "@/components/ClientLogoMarquee";
import { ParallaxHeroBackground } from "@/components/ParallaxHeroBackground";
import { Reveal } from "@/components/Reveal";
import { logos } from "@/lib/content";
import {
  ServiceBlankQuiz,
} from "../_components/ServiceBlankQuiz";
import {
  ServiceLeadForm,
} from "../_components/ServiceLeadForm";
import {
  ServiceProjectCarousel,
  type ServiceProjectCarouselItem,
} from "../_components/ServiceProjectCarousel";
import { ServiceSnapCarousel } from "../_components/ServiceSnapCarousel";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Screen Printing - Orange Goods",
  description:
    "Fast custom screen printing for brands that need premium blanks, clean graphics, and a simple quote path.",
  path: "/services/screen-printing",
  image: "/images/gallery/screen-printing-premium-blanks-dscf4877.jpg",
  imageAlt: "Custom screen printing by Orange Goods",
});

const processSteps = [
  {
    number: "01",
    title: "Pick the right blank",
    body: "Tell us the product, artwork, budget, and timeline. We help narrow the right blank fast.",
  },
  {
    number: "02",
    title: "Approve the artwork",
    body: "We review placement, sizing, colors, and print approach so the artwork lands right.",
  },
  {
    number: "03",
    title: "Print fast and clean",
    body: "Once the blank, art, and quantities are locked, production moves fast.",
  },
];

const faqs = [
  {
    question: "What is the minimum order?",
    answer:
      "100 pieces total. That can be mixed across sizes and colors, and if the artwork stays the same we can usually split it across products too, like 50 shirts and 50 hoodies.",
  },
  {
    question: "How fast can we get started?",
    answer:
      "Once the artwork, quantities, and blanks are approved, most quick-turn runs move in about 2-3 weeks.",
  },
  {
    question: "Can you help us choose the right product?",
    answer:
      "Yes. If you know the vibe but not the exact blank yet, we can narrow it down for you.",
  },
  {
    question: "What files do you need?",
    answer:
      "Vector files are best: AI, EPS, SVG, or a clean PDF. If you do not have that yet, send what you have and we will tell you what is workable.",
  },
  {
    question: "When should we do screen print instead of embroidery?",
    answer:
      "Usually when the artwork wants more scale, more color, or a bigger graphic moment. Screen print is strongest for tees, fleece, and totes. Embroidery is better for smaller premium logo placements.",
  },
];

const projectCarouselItems: ServiceProjectCarouselItem[] = [
  {
    title: "Graphic Tees",
    detail: "Verve Coffee x Grateful Dead",
    src: "/images/gallery/apparel-verve-gd-tee-verve_grateful-dead_tshirt_101.jpg",
    alt: "Verve Coffee x Grateful Dead screen printed tee",
    position: "center 30%",
    activePosition: "center 30%",
  },
  {
    title: "Totes",
    detail: "Field Day Coffee",
    src: "/images/gallery/screen-printing-field-day-coffee-totes.jpg",
    alt: "Field Day Coffee screen printed tote bags laid out on pavement",
    position: "center",
    activePosition: "center",
  },
  {
    title: "Hats",
    detail: "Agua De Kefir",
    src: "/images/gallery/screen-printing-agua-de-kefir-hats-mg-6778.jpg",
    alt: "Agua De Kefir blue and white trucker hat photographed on a studio sweep",
    position: "center 60%",
    activePosition: "center 60%",
    activeScaleClass: "scale-[1.18]",
    thumbnailScaleClass: "scale-[1.18]",
  },
  {
    title: "Fleece",
    detail: "686",
    src: "/images/gallery/apparel-686-hoodie-back.jpg",
    alt: "Screen printed hoodie by Orange Goods",
    position: "center 36%",
    activePosition: "center 36%",
    activeScaleClass: "scale-[1.08]",
    thumbnailScaleClass: "scale-[1.08]",
  },
  {
    title: "Sweatpants",
    detail: "High St Deli",
    src: "/images/gallery/screen-printing-high-st-deli-sweatpants-hsd-baywood-127-2.jpg",
    alt: "High St Deli screen printed sweatpants",
    position: "center 52%",
    activePosition: "center 52%",
  },
  {
    title: "Soft Goods",
    detail: "Synergy Kombucha",
    src: "/images/testimonials/synergy-kombucha-shirt-press-fullwidth.jpg",
    alt: "Synergy Kombucha shirt press closeup",
    position: "center 46%",
    activePosition: "center 46%",
  },
  {
    title: "Youth Tees",
    detail: "Sully & Co",
    src: "/images/gallery/screen-printing-sully-co-coyotee-on-model.webp",
    alt: "Sully & Co screen printed tee on model",
    position: "center 28%",
    activePosition: "center 28%",
  },
  {
    title: "Recycled Materials",
    detail: "Heal The Bay",
    src: "/images/gallery/screen-printing-heal-the-bay-sweatshirt-tote-hat.jpg",
    alt: "Heal The Bay branded sweatshirt, tote, and hat on model",
    position: "center 34%",
    activePosition: "center 34%",
  },
];

const finishingCarouselItems: ServiceProjectCarouselItem[] = [
  {
    title: "Waterbased Ink",
    detail: "Soft-hand print",
    src: "/images/gallery/screen-printing-waterbased-ink-bread-bike-cram-1321.jpg",
    alt: "Close detail of a yellow hoodie with a small blue chest print shown as the Waterbased Ink finishing example",
    position: "center 58%",
    activePosition: "center 58%",
    activeScaleClass: "scale-[1.14]",
    thumbnailScaleClass: "scale-[1.14]",
  },
  {
    title: "Puff Print",
    detail: "Raised ink finish",
    src: "/images/gallery/screen-printing-puff-print-img-7553.jpg",
    alt: "Close cropped detail of a white puff print raised off a brown fabric swatch",
    position: "26% 52%",
    activePosition: "26% 52%",
  },
  {
    title: "Sleeve Prints",
    detail: "Branded arm hit",
    src: "/images/gallery/screen-printing-sleeve-print-hsd-baywood-113.jpg",
    alt: "High St Deli hoodie photographed from the side with a sleeve print visible on the arm",
    position: "38% 42%",
    activePosition: "38% 42%",
    activeScaleClass: "scale-[1.1]",
    thumbnailScaleClass: "scale-[1.1]",
  },
  {
    title: "Hem Label",
    detail: "Subtle brand hit",
    src: "/images/gallery/screen-printing-hem-label-sully-and-co.png",
    alt: "Sully & Co hem label sewn into the bottom edge of a cream tee",
    position: "center 52%",
    activePosition: "center 52%",
  },
  {
    title: "Hang Tags",
    detail: "Retail-ready finish",
    src: "/images/gallery/screen-printing-hang-tags-dscf9998.jpg",
    alt: "Body Glove hang tag with black string laid on a concrete surface",
    position: "center 52%",
    activePosition: "center 52%",
    activeScaleClass: "scale-[1.12]",
    thumbnailScaleClass: "scale-[1.12]",
  },
  {
    title: "Printed Size Labels",
    detail: "Tagless inside print",
    src: "/images/gallery/screen-printing-printed-neck-labels-mcalister-017-2.jpg",
    alt: "Printed neck label inside a black tee, cropped to keep the interior branding detail clear while showing a bit of the garment front",
    position: "center 24%",
    activePosition: "center 24%",
  },
  {
    title: "Poly Bagged",
    detail: "Packed and sorted",
    src: "/images/gallery/screen-printing-poly-bagged-img-2411.jpg",
    alt: "Stacks of folded screen printed garments individually packed in clear poly bags",
    position: "center 54%",
    activePosition: "center 54%",
  },
  {
    title: "Woven Label",
    detail: "Permanent brand detail",
    src: "/images/gallery/screen-printing-woven-label-mg-5846.jpg",
    alt: "Woven Fish At Sea label sewn onto the hem of a black tee",
    position: "36% 58%",
    activePosition: "36% 58%",
    scaleClass: "scale-[1.14]",
  },
];

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
}) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? (
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--og-orange)]">
          {eyebrow}
        </p>
      ) : null}
      <h2
        className="mt-3 text-[2.45rem] uppercase leading-[0.94] text-[var(--og-blue)] md:text-[4rem]"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-4 max-w-2xl text-base leading-7 text-[#676767] md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}

export default function ScreenPrintingPage() {
  return (
    <main className="bg-[#F7F4ED] pb-24 md:pb-0">
      <section className="relative overflow-hidden bg-[#1C1C1C] px-4 py-24 text-white md:px-8 md:py-32 lg:px-12 lg:py-36">
        <ParallaxHeroBackground
          image="/images/gallery/screen-printing-header-high-street-deli-dec-2020-11-1.jpg"
          position="center 20%"
        />
        <div className="absolute inset-0 bg-[#1C1C1C]/34" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1C1C1C]/62 via-[#1C1C1C]/42 to-[#1C1C1C]/18" />
        <div className="relative mx-auto max-w-6xl">
          <p className="hidden text-sm font-semibold uppercase tracking-[0.28em] text-white/74 md:block">
            Quick Turn Services
          </p>
          <h1
            className="mt-2 text-[2.9rem] uppercase leading-[0.92] text-[var(--og-orange)] md:mt-4 md:text-[5.25rem]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Screen Printing
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/82 md:text-xl">
            Printed in Los Angeles by a team that cares enough to size the graphic right, match
            Pantones, and build the art properly before it ever hits press.
          </p>
        </div>
      </section>

      <section className="px-4 pb-10 pt-8 md:px-8 md:pt-12 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-8 overflow-hidden rounded-[2rem] border border-[var(--og-sand)] bg-[rgba(255,248,241,0.92)] p-6 shadow-[0_24px_80px_rgba(8,30,111,0.08)] md:grid-cols-[1fr_0.9fr] md:p-8">
          <div className="flex flex-col justify-center">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--og-orange)]">
              Screen Printing
            </p>
            <h2
              className="mt-4 text-5xl leading-none text-[var(--og-blue)] md:text-7xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              In hand in
              <br />
              2-3 weeks
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-7 text-[var(--og-muted)] md:text-xl">
              Best for real merch runs that need premium blanks, clean prints, and a team that can
              actually guide the product decisions.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="#start-project" className="btn-og inline-flex">
                Start a Project
              </Link>
              <a
                href="/pdfs/orangegoods-apparel-catalog-summer-26.pdf"
                target="_blank"
                rel="noreferrer"
                className="btn-og-white inline-flex"
              >
                View Apparel Catalog
              </a>
            </div>
          </div>
          <div className="relative min-h-[24rem] overflow-hidden rounded-[1.75rem] bg-[#d5bba2]">
            <Image
              src="/images/gallery/screen-printing-turnaround-bike-merch-drop-2025-5.jpg"
              alt="Cyclist wearing a screen printed merch-drop tee"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              style={{ objectPosition: "center 38%" }}
              priority
            />
          </div>
        </div>
      </section>

      <Reveal className="relative isolate overflow-hidden px-4 pb-0 pt-16 md:px-8 md:pb-0 md:pt-20 lg:px-12">
        <video
          className="absolute inset-0 -z-30 h-full w-full object-cover object-center"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/videos/homepage/why-brands-choose-us-mvi-7403-stabilized-6s-poster.jpg"
          aria-hidden="true"
        >
          <source src="/videos/homepage/why-brands-choose-us-mvi-7403-stabilized-6s.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 -z-20 bg-[#1C1C1C]/84" />
        <div
          className="absolute inset-0 -z-10 opacity-30 mix-blend-soft-light"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160' viewBox='0 0 160 160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='160' height='160' filter='url(%23n)' opacity='.62'/%3E%3C/svg%3E\")",
          }}
          aria-hidden="true"
        />
        <section className="relative z-10 mx-auto max-w-6xl">
          <h2
            className="mb-8 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-center text-4xl uppercase leading-none tracking-[0.01em] text-white md:mb-10 md:gap-x-4 md:text-6xl lg:text-7xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            <span>Why teams use</span>
            <Image
              src="/graphics/stickers/og-mark.svg"
              alt="OG"
              width={136}
              height={136}
              loading="eager"
              unoptimized
              className="h-[1.45em] w-[1.45em] object-contain"
            />
            <span>for screen printing</span>
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Better Blank Guidance",
                copy: "We help choose blanks worth printing on, not just the easiest option.",
                iconSrc: "/graphics/services/better-blanks-asset-54.svg",
                iconAlt: "Better blanks icon",
              },
              {
                title: "Artwork That Prints Well",
                copy: "We build out the placement, scale, and ink approach so the final product turns out right.",
                iconSrc: "/graphics/services/artwork-prints-well-asset-44.svg",
                iconAlt: "Artwork that prints well icon",
              },
              {
                title: "Fast, Real Communication",
                copy: "A real team that stays on it, communicates clearly, and keeps the project moving from quote to delivery.",
                iconSrc: "/graphics/services/fast-real-communication-asset-39.svg",
                iconAlt: "Fast real communication icon",
              },
            ].map((reason) => (
              <article
                key={reason.title}
                className="flex min-h-[17rem] flex-col items-center justify-start rounded-[2rem] border-[3px] border-[#B8AA8E] bg-[#F7F4ED] p-6 pt-8 text-center text-[#081E6F] shadow-[5px_5px_0px_#0B32A0] md:min-h-[18rem] md:p-8 md:pt-10"
              >
                {reason.iconSrc ? (
                  <div className="relative h-14 w-12">
                    <Image
                      src={reason.iconSrc}
                      alt={reason.iconAlt ?? ""}
                      fill
                      sizes="48px"
                      loading="eager"
                      unoptimized
                      className="object-contain"
                    />
                  </div>
                ) : (
                  <div className="h-12 w-12 rounded-full bg-[#FF4200]" />
                )}
                <h3 className="font-display mt-6 flex min-h-[4.2rem] max-w-full items-center justify-center text-[1.75rem] font-normal normal-case leading-none tracking-normal text-[#0B32A0] md:min-h-[4.7rem] md:text-[1.9rem] lg:text-[2.1rem]">
                  {reason.title}
                </h3>
                <p className="font-noir-alt mt-4 max-w-sm text-base font-medium leading-7 text-[#1C1C1C]/70">
                  {reason.copy}
                </p>
              </article>
            ))}
          </div>
          <ClientLogoMarquee logos={logos} className="mt-10 md:mt-12" />
        </section>
      </Reveal>

      <Reveal className="px-4 py-12 md:px-8 md:py-16 lg:px-12">
        <section className="mx-auto grid max-w-6xl gap-6 md:grid-cols-[1.04fr_0.96fr] md:items-stretch">
          <article className="relative flex h-full overflow-hidden rounded-[1.75rem] border-[3px] border-white bg-[#E4DFCD]">
            <div className="relative min-h-[24rem] flex-1 md:min-h-[30rem]">
              <Image
                src="/images/gallery/screen-printing-built-for-graphic-merch-2021-02-23.png"
                alt="Graphic merch tees laid out side by side"
                fill
                sizes="(max-width: 768px) 100vw, 55vw"
                className="object-cover"
                style={{ objectPosition: "center center" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C]/72 via-[#1C1C1C]/14 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 text-white md:p-7">
                <p className="font-noir-alt text-xs font-bold uppercase tracking-[0.18em] text-[var(--og-tangerine)]">
                  Better than default blanks
                </p>
                <h3
                  className="mt-2 text-[2.2rem] uppercase leading-none md:text-[3.5rem]"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Built for
                  <br />
                  graphic merch
                </h3>
                <p className="mt-3 max-w-lg text-sm leading-6 text-white/82 md:text-base">
                  This path works best when the design needs scale, color, and room to actually
                  feel like a product instead of a generic giveaway.
                </p>
              </div>
            </div>
          </article>

          <div className="grid gap-4">
            <article className="rounded-[1.6rem] border-[2.5px] border-[#0B32A0] bg-white p-6 shadow-[5px_5px_0px_rgba(11,50,160,0.12)] md:p-7">
              <SectionHeader
                eyebrow="A few things to know"
                title={
                  <>
                    More than
                    <br />
                    your local
                    <br />
                    print shop
                  </>
                }
                description="For teams that want fast communication, sharper decisions, and someone who catches the details before anything goes to press."
              />
            </article>

            <div className="grid gap-4 sm:grid-cols-3">
              <article className="rounded-[1.45rem] border-[2.5px] border-[#0B32A0] bg-white p-5 shadow-[4px_4px_0px_rgba(11,50,160,0.1)]">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--og-orange)]">
                  100 piece minimum
                </p>
                <p className="mt-3 text-sm leading-6 text-[var(--og-muted)]">
                  Meant for real company orders and merch drops, not one-off prints.
                </p>
              </article>
              <article className="rounded-[1.45rem] border-[2.5px] border-[#0B32A0] bg-white p-5 shadow-[4px_4px_0px_rgba(11,50,160,0.1)]">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--og-orange)]">
                  2-3 week turnaround
                </p>
                <p className="mt-3 text-sm leading-6 text-[var(--og-muted)]">
                  Once the blank, artwork, and quantity are approved, most jobs move fast.
                </p>
              </article>
              <article className="rounded-[1.45rem] border-[2.5px] border-[#0B32A0] bg-white p-5 shadow-[4px_4px_0px_rgba(11,50,160,0.1)]">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--og-orange)]">
                  Better blanks
                </p>
                <p className="mt-3 text-sm leading-6 text-[var(--og-muted)]">
                  AS Colour, Comfort Colors, Bella+Canvas, and other blanks that are actually
                  worth printing on.
                </p>
              </article>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal className="relative isolate overflow-hidden px-4 py-14 md:px-8 md:py-18 lg:px-12">
        <div className="absolute inset-0 -z-30">
          <Image
            src="/images/gallery/screen-printing-premium-blanks-dscf4877.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: "center 54%" }}
            aria-hidden="true"
          />
        </div>
        <div className="absolute inset-0 -z-20 bg-[#3D312C]/46" aria-hidden="true" />
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(circle at top left, rgba(255,255,255,0.12), transparent 34%), linear-gradient(180deg, rgba(28,28,28,0.04), rgba(28,28,28,0.18))",
          }}
          aria-hidden="true"
        />
        <section className="mx-auto max-w-6xl">
          <div className="grid gap-8 rounded-[2rem] border border-white/30 bg-[rgba(255,249,243,0.93)] p-6 shadow-[0_24px_80px_rgba(8,30,111,0.16)] backdrop-blur-[2px] md:p-8">
            <SectionHeader
              eyebrow="Premium Blanks"
              title="We use the good stuff"
              description="We work with premium blank manufacturers like AS Colour, Lane Seven, Los Angeles Apparel, Independent, and other better-quality apparel lines so the finished print starts with the right base and the right feel."
            />

            <div className="grid gap-4 md:grid-cols-3">
              {[
                {
                  name: "AS Colour",
                  src: "/logos/blank-brands/ascolour-white.svg",
                  width: 220,
                  height: 44,
                  wrapClassName: "bg-white",
                  imageClassName: "h-10 w-auto invert",
                },
                {
                  name: "Lane Seven",
                  src: "/logos/blank-brands/lane-seven-header-logo.svg",
                  width: 298,
                  height: 43,
                  wrapClassName: "bg-white",
                  imageClassName: "h-9 w-auto",
                },
                {
                  name: "Los Angeles Apparel",
                  src: "/logos/blank-brands/los-angeles-apparel-header-logo.svg",
                  width: 360,
                  height: 16,
                  wrapClassName: "bg-white",
                  imageClassName: "h-6 w-auto",
                },
              ].map((brand) => {
                const isSvg = brand.src.endsWith(".svg");

                return (
                  <article
                    key={brand.name}
                    className={`flex min-h-[9.5rem] items-center justify-center rounded-[1.5rem] border border-[#0B32A0]/12 p-6 shadow-[4px_4px_0px_#0B32A0] ${brand.wrapClassName}`}
                  >
                    <Image
                      src={brand.src}
                      alt={brand.name}
                      width={brand.width}
                      height={brand.height}
                      loading={isSvg ? "eager" : undefined}
                      unoptimized={isSvg}
                      className={brand.imageClassName}
                    />
                  </article>
                );
              })}
            </div>

            <p className="text-sm leading-6 text-[#676767]">
              Choose a blank you like, or ask us for our opinion. We will help you find the best
              options for your style and budget.
            </p>
          </div>
        </section>
      </Reveal>

      <Reveal className="relative isolate overflow-hidden px-4 py-14 md:px-8 md:py-18 lg:px-12">
        <section className="mx-auto max-w-6xl">
          <div className="relative overflow-hidden rounded-[2rem] border-[3px] border-[#0B32A0] bg-white">
            <Image
              src="/images/gallery/apparel-upgrade-the-handfeel-img-1172.jpg"
              alt=""
              aria-hidden="true"
              fill
              sizes="100vw"
              className="object-cover"
              style={{ objectPosition: "center 52%" }}
            />
            <div className="absolute inset-0 bg-[#1C1C1C]/28" aria-hidden="true" />
            <div className="relative z-10 px-6 py-8 md:px-10 md:py-9">
              <div className="flex flex-col gap-5 rounded-[1.6rem] border-2 border-[#081E6F] bg-white/90 p-6 text-[#1C1C1C] md:flex-row md:items-center md:justify-between md:p-8">
                <div className="max-w-2xl">
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#FF4200]">
                    Not sure where to start?
                  </p>
                  <h3
                    className="mt-2 text-[1.7rem] uppercase leading-[0.94] text-[#081E6F] md:text-[2.35rem]"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Start with the right blank
                  </h3>
                  <p className="mt-3 max-w-xl text-sm leading-6 text-[#1C1C1C]/72 md:text-base">
                    A quick quiz to help narrow the right tee, fleece, or sweatpant before we
                    quote the project.
                  </p>
                </div>
                <div className="flex items-start md:items-center">
                  <Link href="#blank-quiz" className="btn-og inline-flex">
                    TAKE THE QUIZ
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      <ServiceProjectCarousel
        eyebrow="Recent Projects"
        title="Built on better blanks"
        description="A few examples of the kinds of screen print projects this path is built for: graphic tees, totes, hats, fleece, softer branded apparel, and fast-turn campaign goods."
        items={projectCarouselItems}
        showCtaBadge={false}
      />

      <ServiceSnapCarousel
        eyebrow="Finishing Details"
        title="The details that matter"
        titleClassName="md:whitespace-nowrap"
        description="Need a few finishing touches? We can add sleeve prints, neck labels, trims, packaging, hang tags, and the small details that pull it together."
        items={finishingCarouselItems}
        ctaHref="#start-project"
        ctaLabel="Start a Project"
      />

      <Reveal className="bg-[#F3EFE7] px-4 py-14 md:px-8 md:py-18 lg:px-12">
        <section className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <SectionHeader
              eyebrow="How It Works"
              title="A simple path to quote"
              description="Send the basics, we help tighten the details, and the quote gets clearer fast. This is built to move from rough idea to real print run without a lot of back-and-forth."
            />
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {processSteps.map((step) => (
              <article
                key={step.number}
                className="rounded-[1.75rem] border border-[#0B32A0]/14 bg-white p-6 shadow-[5px_5px_0px_rgba(11,50,160,0.12)]"
              >
                <div className="inline-flex rounded-full border border-[#FF4200]/18 bg-[#FFF3EA] px-3 py-1 text-sm font-semibold uppercase tracking-[0.24em] text-[#FF4200]">
                  {step.number}
                </div>
                <h3
                  className="mt-4 text-[2rem] leading-none text-[var(--og-blue)]"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {step.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-[#676767]">{step.body}</p>
              </article>
            ))}
          </div>

          <div className="mt-6">
            <Link
              href="/pdfs/orangegoods-apparel-catalog-summer-26.pdf"
              target="_blank"
              rel="noreferrer"
              className="btn-og inline-flex"
            >
              View Apparel Catalog
            </Link>
          </div>

        </section>
      </Reveal>

      <Reveal className="bg-white px-4 py-14 md:px-8 md:py-18 lg:px-12">
        <section id="faq" className="mx-auto max-w-6xl">
          <SectionHeader eyebrow="FAQ" title="A few quick answers" />
          <div className="mt-8 grid gap-3">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="rounded-[1.5rem] border border-[#0B32A0]/14 bg-[#F7F4ED] p-5"
              >
                <summary className="cursor-pointer text-lg font-semibold text-[var(--og-blue)]">
                  {faq.question}
                </summary>
                <p className="mt-3 text-base leading-7 text-[#676767]">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal className="px-4 py-14 md:px-8 md:py-18 lg:px-12">
        <section
          id="start-project"
          className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-stretch"
        >
          <div className="relative min-h-[26rem] overflow-hidden rounded-[1.85rem] border border-[#0B32A0]/14 bg-[#CDBEAE] md:h-full md:min-h-0">
            <Image
              src="/images/gallery/apparel-blank-people-would-buy-dscf4886.jpg"
              alt="Stack of blank hoodies piled in the shop"
              fill
              sizes="(max-width: 768px) 100vw, 45vw"
              className="object-cover"
              style={{ objectPosition: "center 44%" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C]/50 via-[#1C1C1C]/10 to-transparent" />
          </div>

          <ServiceLeadForm
            title="Let's print it right"
            description="This goes straight into the same lead flow as the main project form, but keeps this page tighter for ad traffic and faster project starts."
            projectDefault=""
            hiddenFields={{
              source: "screen-printing-page",
              service: "screen-printing",
            }}
            submitLabel="Get a Quote"
            showScreenPrintFields
            showArtworkUpload
          />
        </section>
      </Reveal>

      <Reveal className="bg-white px-4 py-14 md:px-8 md:py-18 lg:px-12">
        <ServiceBlankQuiz />
      </Reveal>
    </main>
  );
}
