import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { ClientLogoMarquee } from "@/components/ClientLogoMarquee";
import { ParallaxHeroBackground } from "@/components/ParallaxHeroBackground";
import { Reveal } from "@/components/Reveal";
import { logos } from "@/lib/content";
import { ServiceEmbroideryQuiz } from "../_components/ServiceEmbroideryQuiz";
import {
  ServiceLeadForm,
} from "../_components/ServiceLeadForm";
import {
  ServiceProjectCarousel,
  type ServiceProjectCarouselItem,
} from "../_components/ServiceProjectCarousel";
import { ServiceSnapCarousel } from "../_components/ServiceSnapCarousel";

export const metadata = {
  title: "Embroidery - Orange Goods",
  description:
    "Fast custom embroidery for brands that need premium goods, clean stitching, and a simple quote path.",
};

const processSteps = [
  {
    number: "01",
    title: "Pick the right product",
    body: "Tell us the product, logo, budget, and timeline. We help narrow the right base fast.",
  },
  {
    number: "02",
    title: "Approve the setup",
    body: "We review size, placement, thread colors, and stitch setup so the embroidery lands right.",
  },
  {
    number: "03",
    title: "Stitch and deliver",
    body: "Once the product, art, and quantities are locked, production moves fast.",
  },
];

const faqs = [
  {
    question: "What is the minimum order?",
    answer:
      "100 pieces total. That can be mixed across sizes and colors, and if the artwork stays the same we can usually split it across products too, like 50 hats and 50 crewnecks.",
  },
  {
    question: "How fast can we get started?",
    answer:
      "Once the artwork, quantities, and goods are approved, most quick-turn embroidery jobs move in about 2-3 weeks.",
  },
  {
    question: "Can you help us choose the right product?",
    answer:
      "Yes. If you know the vibe but not the exact hat, fleece, tote, or jacket yet, we can narrow it down for you.",
  },
  {
    question: "What files do you need?",
    answer:
      "Vector files are best: AI, EPS, SVG, or a clean PDF. If you do not have that yet, send what you have and we will tell you what is workable.",
  },
  {
    question: "When should we do embroidery instead of screen print?",
    answer:
      "Usually when the artwork wants a smaller premium placement, more texture, or a cleaner stitched finish. Embroidery is strongest for hats, beanies, fleece, jackets, and tighter logo moments.",
  },
];

const projectCarouselItems: ServiceProjectCarouselItem[] = [
  {
    title: "Oak Essentials",
    detail: "Influencer gifting",
    src: "/images/gallery/embroidery-oak-essentials-influencer-gifting.jpg",
    alt: "Oak Essentials branded gifting pieces arranged together for an influencer gifting drop",
    position: "center 52%",
    activePosition: "center 52%",
  },
  {
    title: "Flat Embroidery",
    detail: "Clean front hit",
    src: "/images/gallery/embroidery-flat-embroidery-mg-6796.jpg",
    alt: "Black cap with clean flat embroidery on the front",
    position: "center 74%",
    activePosition: "center 74%",
  },
  {
    title: "3D Embroidery",
    detail: "Raised thread",
    src: "/images/gallery/embroidery-3d-embroidery-img-7457.jpg",
    alt: "Brown and white trucker hat with raised Support Educate Advocate embroidery on the front panel",
    position: "center 50%",
    activePosition: "center 50%",
  },
  {
    title: "Esplanade Brand",
    detail: "Corduroy cap",
    src: "/images/gallery/embroidery-esplanade-brand-hat.jpg",
    alt: "Person wearing an Esplanade Brand embroidered corduroy cap at the beach",
    position: "center 28%",
    activePosition: "center 28%",
    activeScaleClass: "scale-[1.5]",
    activeHoverScaleClass: "group-hover:scale-[1.525]",
    thumbnailScaleClass: "scale-[1.5]",
  },
  {
    title: "Banner Coffee",
    detail: "Embroidered hats",
    src: "/images/gallery/embroidery-banner-coffee-hat.jpg",
    alt: "Hands holding a Banner Coffee embroidered navy cap and a box of coffee",
    position: "center 68%",
    activePosition: "center 68%",
  },
  {
    title: "Gymshark",
    detail: "Sweat towel",
    src: "/images/gallery/embroidery-gymshark-sweat-towel.jpg",
    alt: "Gymshark After Dark embroidered sweat towel draped over a spin bike",
    position: "center 56%",
    activePosition: "center 56%",
  },
  {
    title: "K1 x Porsche",
    detail: "Brand activation",
    src: "/images/gallery/embroidery-k1-porsche-brand-activation.jpg",
    alt: "Black K1 x Porsche branded jackets hanging on a rack at a brand activation event",
    position: "center 54%",
    activePosition: "center 54%",
  },
  {
    title: "K1",
    detail: "Apparel Embroidery",
    src: "/images/gallery/embroidery-k1-apparel-embroidery.jpg",
    alt: "Washed gray K1 crewneck with black chest embroidery laid flat on an embroidery machine table",
    position: "center 34%",
    activePosition: "center 34%",
  },
  {
    title: "Red Bull",
    detail: "Jacket",
    src: "/images/gallery/embroidery-red-bull-jacket.jpg",
    alt: "Black Red Bull embroidered jacket shown on-model in a studio",
    position: "center 38%",
    activePosition: "center 38%",
  },
  {
    title: "Trace3",
    detail: "Jacket",
    src: "/images/gallery/embroidery-trace3-jacket.jpg",
    alt: "White Trace3 Digital jacket hanging on a wooden hanger with chest embroidery and a sleeve patch",
    position: "58% 36%",
    activePosition: "58% 34%",
  },
  {
    title: "Stanford Medicine",
    detail: "Backpacks",
    src: "/images/gallery/embroidery-stanford-medicine-backpacks.jpg",
    alt: "Stanford Medicine embroidered Thule backpacks being finished in the embroidery shop",
    position: "center 50%",
    activePosition: "center 50%",
  },
  {
    title: "Fish At Sea",
    detail: "Beanies",
    src: "/images/gallery/embroidery-fish-at-sea-beanies.jpg",
    alt: "Fish At Sea branded knit beanies photographed on the coastline",
    position: "center 62%",
    activePosition: "center 62%",
  },
  {
    title: "Side Hits",
    detail: "Secondary logo",
    src: "/images/gallery/headwear-side-embroidery-img-7667.jpg",
    alt: "Hat with side embroidery detail",
    position: "center 42%",
    activePosition: "center 42%",
  },
  {
    title: "Back Hits",
    detail: "Rear detail",
    src: "/images/gallery/embroidery-verve-coffee-back-hits.jpg",
    alt: "Verve Coffee back embroidery detail on a cream cap",
    position: "center 62%",
    activePosition: "center 62%",
  },
  {
    title: "Microsoft",
    detail: "Woven label",
    src: "/images/gallery/embroidery-microsoft-woven-label.jpg",
    alt: "White Microsoft garment with a black woven label sewn near the hem",
    position: "center 76%",
    activePosition: "center 76%",
    activeScaleClass: "scale-[1.5]",
    activeHoverScaleClass: "group-hover:scale-[1.525]",
    thumbnailScaleClass: "scale-[1.5]",
  },
];

const finishingCarouselItems: ServiceProjectCarouselItem[] = [
  {
    title: "Flat Embroidery",
    detail: "Clean front logo",
    src: "/images/gallery/embroidery-flat-embroidery-mg-6796.jpg",
    alt: "Close flat embroidery detail on a black cap",
    position: "center 74%",
    activePosition: "center 74%",
    activeScaleClass: "scale-[1.08]",
    thumbnailScaleClass: "scale-[1.08]",
  },
  {
    title: "3D Embroidery",
    detail: "Raised thread hit",
    src: "/images/gallery/embroidery-3d-embroidery-img-7457.jpg",
    alt: "Raised Support Educate Advocate embroidery detail on a trucker hat",
    position: "center 50%",
    activePosition: "center 50%",
  },
  {
    title: "Side Embroidery",
    detail: "Secondary placement",
    src: "/images/gallery/headwear-side-embroidery-img-7667.jpg",
    alt: "Side embroidery detail on a cap",
    position: "center 42%",
    activePosition: "center 42%",
  },
  {
    title: "Back Embroidery",
    detail: "Rear detail",
    src: "/images/gallery/embroidery-verve-coffee-back-hits.jpg",
    alt: "Verve Coffee back embroidery detail on a cream cap",
    position: "center 62%",
    activePosition: "center 62%",
  },
  {
    title: "Woven Labels",
    detail: "Interior brand detail",
    src: "/images/gallery/headwear-woven-label-mg-6885.jpg",
    alt: "Woven label detail sewn into a hat",
    position: "center 50%",
    activePosition: "center 50%",
  },
  {
    title: "Felt Patch",
    detail: "Textured patch finish",
    src: "/images/gallery/headwear-felt-patch-dscf7913.jpg",
    alt: "Felt patch detail on a hat",
    position: "center 52%",
    activePosition: "center 52%",
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

export default function EmbroideryPage() {
  return (
    <main className="bg-[#F7F4ED] pb-24 md:pb-0">
      <section className="relative overflow-hidden bg-[#1C1C1C] px-4 py-24 text-white md:px-8 md:py-32 lg:px-12 lg:py-36">
        <ParallaxHeroBackground
          image="/images/gallery/design-built-production-dscf1585.jpg"
          position="center 44%"
        />
        <div className="absolute inset-0 bg-[#1C1C1C]/44" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1C1C1C]/68 via-[#1C1C1C]/44 to-[#1C1C1C]/18" />
        <div className="relative mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white/74">
            Quick Turn Services
          </p>
          <h1
            className="mt-4 text-[3.4rem] uppercase leading-[0.92] text-[var(--og-orange)] md:text-[5.25rem]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Embroidery
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/82 md:text-xl">
            Embroidered in Los Angeles by a team that cares enough to size the logo right, dial in
            stitch count, and build the setup properly before it ever hits the machine.
          </p>
        </div>
      </section>

      <section className="px-4 pb-10 pt-8 md:px-8 md:pt-12 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-8 overflow-hidden rounded-[2rem] border border-[var(--og-sand)] bg-[rgba(255,248,241,0.92)] p-6 shadow-[0_24px_80px_rgba(8,30,111,0.08)] md:grid-cols-[1fr_0.9fr] md:p-8">
          <div className="flex flex-col justify-center">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--og-orange)]">
              Embroidery
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
              Best for premium logo placements, clean stitch work, and teams that want a fast path
              without sacrificing the product.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="#start-project" className="btn-og inline-flex">
                Start a Project
              </Link>
              <Link href="#faq" className="btn-og-white inline-flex">
                View FAQ
              </Link>
            </div>
          </div>
          <div className="relative min-h-[24rem] overflow-hidden rounded-[1.75rem] bg-[#d5bba2]">
            <Image
              src="/images/gallery/headwear-side-embroidery-img-7667.jpg"
              alt="Side embroidery detail on a premium hat"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              style={{ objectPosition: "38% 42%" }}
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
          poster="/videos/embroidery/why-teams-use-us-img-8890-poster.jpg"
          aria-hidden="true"
        >
          <source src="/videos/embroidery/why-teams-use-us-img-8890.mp4" type="video/mp4" />
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
              className="h-[1.45em] w-[1.45em] object-contain"
            />
            <span>for embroidery</span>
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Better Product Guidance",
                copy: "We help choose goods worth stitching on, not just the easiest option.",
                iconSrc: "/graphics/services/better-blanks-asset-54.svg",
                iconAlt: "Better product guidance icon",
              },
              {
                title: "Embroidery Done Right",
                copy: "We build out the size, placement, and stitch approach so the final product turns out right.",
                iconSrc: "/graphics/services/artwork-prints-well-asset-44.svg",
                iconAlt: "Embroidery done right icon",
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
                <div className="relative h-14 w-12">
                  <Image
                    src={reason.iconSrc}
                    alt={reason.iconAlt}
                    fill
                    sizes="48px"
                    className="object-contain"
                  />
                </div>
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
                src="/images/gallery/headwear-full-custom-verve-larrea-hat-038.jpg"
                alt="Verve Coffee embroidered hat photographed on model"
                fill
                sizes="(max-width: 768px) 100vw, 55vw"
                className="object-cover"
                style={{ objectPosition: "center 32%" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C]/72 via-[#1C1C1C]/14 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 text-white md:p-7">
                <p className="font-noir-alt text-xs font-bold uppercase tracking-[0.18em] text-[var(--og-tangerine)]">
                  Not basic embroidery
                </p>
                <h3
                  className="mt-2 text-[2.2rem] uppercase leading-none md:text-[3.5rem]"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Built for
                  <br />
                  better merch
                </h3>
                <p className="mt-3 max-w-lg text-sm leading-6 text-white/82 md:text-base">
                  Best for hats, fleece, totes, and jackets where a clean stitched hit makes more
                  sense than a bigger print.
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
                    embroidery shop
                  </>
                }
                description="For teams that want fast communication, sharper decisions, and someone who helps dial in the details before anything gets stitched."
              />
            </article>

            <div className="grid gap-4 sm:grid-cols-3">
              <article className="rounded-[1.45rem] border-[2.5px] border-[#0B32A0] bg-white p-5 shadow-[4px_4px_0px_rgba(11,50,160,0.1)]">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--og-orange)]">
                  100 piece minimum
                </p>
                <p className="mt-3 text-sm leading-6 text-[var(--og-muted)]">
                  Meant for real company orders and merch drops, not one-off runs.
                </p>
              </article>
              <article className="rounded-[1.45rem] border-[2.5px] border-[#0B32A0] bg-white p-5 shadow-[4px_4px_0px_rgba(11,50,160,0.1)]">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--og-orange)]">
                  In hand in 2-3 weeks
                </p>
                <p className="mt-3 text-sm leading-6 text-[var(--og-muted)]">
                  Once the product, artwork, and quantity are approved, most jobs move fast.
                </p>
              </article>
              <article className="rounded-[1.45rem] border-[2.5px] border-[#0B32A0] bg-white p-5 shadow-[4px_4px_0px_rgba(11,50,160,0.1)]">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--og-orange)]">
                  Better goods
                </p>
                <p className="mt-3 text-sm leading-6 text-[var(--og-muted)]">
                  Hats, crewnecks, beanies, jackets, bags, and other products that are actually worth
                  embroidering.
                </p>
              </article>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal className="relative isolate overflow-hidden px-4 py-14 md:px-8 md:py-18 lg:px-12">
        <div className="absolute inset-0 -z-30">
          <Image
            src="/images/gallery/embroidery-verve-coffee-back-hits.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: "center 62%" }}
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
              eyebrow="Premium Goods"
              title="We stitch on the good stuff"
              description="We work with premium brands like AS Colour, Lane Seven, Richardson, Independent, and other better-quality goods so the embroidery starts with the right base and the right feel."
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
                  name: "Richardson",
                  src: "/logos/blank-brands/richardson-logo.png",
                  width: 900,
                  height: 500,
                  wrapClassName: "bg-white",
                  imageClassName: "h-[6.3rem] w-auto",
                },
              ].map((brand) => (
                <article
                  key={brand.name}
                  className={`flex min-h-[9.5rem] items-center justify-center rounded-[1.5rem] border border-[#0B32A0]/12 p-6 shadow-[4px_4px_0px_#0B32A0] ${brand.wrapClassName}`}
                >
                  <Image
                    src={brand.src}
                    alt={brand.name}
                    width={brand.width}
                    height={brand.height}
                    className={brand.imageClassName}
                  />
                </article>
              ))}
            </div>

            <p className="text-sm leading-6 text-[#676767]">
              Choose a product you like, or ask us for our opinion. We will help you find the best
              options for stitch, price, and timeline.
            </p>
          </div>
        </section>
      </Reveal>

      <Reveal className="relative isolate overflow-hidden px-4 py-14 md:px-8 md:py-18 lg:px-12">
        <section className="mx-auto max-w-6xl">
          <div className="relative overflow-hidden rounded-[2rem] border-[3px] border-[#0B32A0] bg-white">
            <Image
              src="/images/gallery/embroidery-start-right-product-img-8971.jpg"
              alt=""
              aria-hidden="true"
              fill
              sizes="100vw"
              className="object-cover"
              style={{ objectPosition: "center 44%" }}
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
                    Start with the right product
                  </h3>
                  <p className="mt-3 max-w-xl text-sm leading-6 text-[#1C1C1C]/72 md:text-base">
                    A quick way to narrow the right hat, fleece, tote, or jacket before we quote
                    the project.
                  </p>
                </div>
                <div className="flex items-start md:items-center">
                  <Link href="#embroidery-quiz" className="btn-og inline-flex">
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
        title="Built for clean embroidery"
        description="A few examples of the kinds of embroidery projects this path is built for: hats, beanies, fleece, patches, and premium logo goods that need a cleaner stitched finish."
        items={projectCarouselItems}
        showCtaBadge={false}
      />

      <ServiceSnapCarousel
        eyebrow="Embroidery Details"
        title="The details that matter"
        titleClassName="md:whitespace-nowrap"
        description="Need a few finishing touches? We can add side hits, back hits, patches, woven labels, and the small details that pull it together."
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
              description="Send the basics, we help tighten the details, and the quote gets clearer fast. This is built to move from rough idea to real stitched product without a lot of back-and-forth."
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
              src="/images/gallery/embroidery-stanford-medicine-backpacks.jpg"
              alt="Stanford Medicine embroidered Thule backpacks being finished in the embroidery shop"
              fill
              sizes="(max-width: 768px) 100vw, 45vw"
              className="object-cover"
              style={{ objectPosition: "center 50%" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C]/50 via-[#1C1C1C]/10 to-transparent" />
          </div>

          <ServiceLeadForm
            title="Let's stitch it right"
            description="This goes straight into the same lead flow as the main project form, but keeps this page tighter for ad traffic and faster embroidery starts."
            projectDefault=""
            hiddenFields={{
              source: "embroidery-page",
              service: "embroidery",
            }}
            submitLabel="Get a Quote"
            showEmbroideryFields
            showArtworkUpload
          />
        </section>
      </Reveal>

      <Reveal className="bg-white px-4 py-14 md:px-8 md:py-18 lg:px-12">
        <ServiceEmbroideryQuiz />
      </Reveal>
    </main>
  );
}
