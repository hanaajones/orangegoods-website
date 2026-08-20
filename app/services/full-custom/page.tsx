import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { ClientLogoMarquee } from "@/components/ClientLogoMarquee";
import { ParallaxHeroBackground } from "@/components/ParallaxHeroBackground";
import { Reveal } from "@/components/Reveal";
import { logos } from "@/lib/content";
import { ServiceLeadForm } from "../_components/ServiceLeadForm";
import {
  ServiceProjectCarousel,
  type ServiceProjectCarouselItem,
} from "../_components/ServiceProjectCarousel";
import {
  ServiceSnapCarousel,
  type ServiceSnapCarouselItem,
} from "../_components/ServiceSnapCarousel";

export const metadata = {
  title: "Full Custom - Orange Goods",
  description:
    "Built-from-scratch custom goods for brands that need original product, custom materials, trims, labels, and a tighter end result.",
};

const processSteps = [
  {
    number: "01",
    title: "Define the product",
    body: "Start with the category, quantity, budget, and deadline. We help narrow the right build path, materials, and level of customization.",
  },
  {
    number: "02",
    title: "Dial in the details",
    body: "Fabric, shape, sizing, trims, labels, packaging, and artwork all get aligned before production starts.",
  },
  {
    number: "03",
    title: "Sample, produce, deliver",
    body: "Once the details are approved, we move into production and finishing so the final goods show up feeling complete.",
  },
];

const faqs = [
  {
    question: "What is the minimum order?",
    answer:
      "Most full custom projects start at 100 pieces, but the real minimum depends on the product type, materials, and finish package. We will tell you early if a concept wants a higher quantity.",
  },
  {
    question: "How long does full custom usually take?",
    answer:
      "Most projects land in the 4-8 week range once the product direction and details are approved. More specialized materials, sampling, or packaging can push that longer.",
  },
  {
    question: "What kinds of products fit this path best?",
    answer:
      "Hats, bags, blankets, towels, bandanas, accessories, and other soft goods where the product itself is part of the brand story, not just the logo on top.",
  },
  {
    question: "Can you help if we do not know the exact materials yet?",
    answer:
      "Yes. That is a big part of the process. We can help narrow the right fabric weight, trims, finish level, and construction details based on the goal and budget.",
  },
  {
    question: "Do we need finished artwork to start?",
    answer:
      "Not always. If the concept is still taking shape, send what you have. We can review the direction and figure out what needs to be designed or production-ready next.",
  },
];

const projectCarouselItems: ServiceProjectCarouselItem[] = [
  {
    title: "Custom Hats",
    detail: "Feeling Swell",
    src: "/images/gallery/full-custom-feelingswell-hat-labbet-app.jpg",
    alt: "Feeling Swell custom hat shown in a product lifestyle photo",
    position: "center 58%",
    activePosition: "center 58%",
  },
  {
    title: "Retail Bags",
    detail: "Boatsetter",
    src: "/images/gallery/totes-bags-boatsetter-dscf3148.jpg",
    alt: "Boatsetter tote bags arranged together on a studio floor",
    position: "center 48%",
    activePosition: "center 48%",
  },
  {
    title: "Woven Towels",
    detail: "Apteka",
    src: "/images/gallery/accessories-apteka-towel-267A5261.jpg",
    alt: "Custom woven towel laid open to show the product pattern and finish",
    position: "center 52%",
    activePosition: "center 52%",
  },
  {
    title: "Pattern Blankets",
    detail: "Mineragua",
    src: "/images/gallery/blankets-mineragua-coastal-wrap-067.jpg",
    alt: "Mineragua patterned blanket shown outdoors in a lifestyle setting",
    position: "center 44%",
    activePosition: "center 44%",
  },
  {
    title: "Bandanas",
    detail: "Royal Wine",
    src: "/images/gallery/accessories-royal-wine-bandana-image-1.jpg",
    alt: "Royal Wine custom bandana shown tied and styled",
    position: "center 30%",
    activePosition: "center 30%",
  },
  {
    title: "Premium Headwear",
    detail: "Verve Coffee",
    src: "/images/gallery/headwear-full-custom-verve-larrea-hat-038.jpg",
    alt: "Premium custom Verve Coffee hat shown on model",
    position: "center 34%",
    activePosition: "center 34%",
  },
];

const detailsCarouselItems: ServiceSnapCarouselItem[] = [
  {
    title: "Material Direction",
    detail: "Fabric + handfeel",
    src: "/images/gallery/full-custom-materials-mg-9406.jpg",
    alt: "Material swatches and trims laid out for a full custom product build",
    position: "center 44%",
  },
  {
    title: "Woven Labels",
    detail: "Interior brand hit",
    src: "/images/gallery/headwear-interior-woven-label-img-7684.jpg",
    alt: "Interior woven label sewn into a custom hat",
    position: "center 46%",
  },
  {
    title: "Closure Details",
    detail: "Back-end trim",
    src: "/images/gallery/headwear-closure-label-mg-6920.jpg",
    alt: "Closure and label detail on the back of a custom hat",
    position: "center 44%",
  },
  {
    title: "Stripe Trim",
    detail: "Custom tape + trim",
    src: "/images/gallery/headwear-stripe-trim-img-7709.jpg",
    alt: "Interior stripe trim detail inside a custom cap",
    position: "center 48%",
  },
  {
    title: "Patch Layout",
    detail: "Front graphic build",
    src: "/images/gallery/headwear-patch-layout-mg-9412.jpg",
    alt: "Patch and trim components laid out for a custom hat build",
    position: "center 50%",
  },
  {
    title: "Packaging",
    detail: "Ready to hand off",
    src: "/images/gallery/packaging-stanford-medicine-thinkhealth-craft-1.jpg",
    alt: "Finished Stanford Medicine packaging and inserts arranged together",
    position: "center 52%",
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

export default function FullCustomPage() {
  return (
    <main className="bg-[#F7F4ED] pb-24 md:pb-0">
      <section className="relative overflow-hidden bg-[#1C1C1C] px-4 py-24 text-white md:px-8 md:py-32 lg:px-12 lg:py-36">
        <ParallaxHeroBackground
          image="/images/gallery/full-custom-materials-mg-9406.jpg"
          position="center 42%"
        />
        <div className="absolute inset-0 bg-[#1C1C1C]/44" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1C1C1C]/68 via-[#1C1C1C]/46 to-[#1C1C1C]/18" />
        <div className="relative mx-auto max-w-6xl">
          <p className="hidden text-sm font-semibold uppercase tracking-[0.28em] text-white/74 md:block">
            Full Custom Services
          </p>
          <h1
            className="mt-2 text-[2.9rem] uppercase leading-[0.92] text-[var(--og-orange)] md:mt-4 md:text-[5.1rem]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Full custom
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/82 md:text-xl">
            Built from scratch for brands that need the product itself to feel original, not just
            decorated. Fabric, shape, trims, labels, and packaging all stay in play.
          </p>
        </div>
      </section>

      <section className="px-4 pb-10 pt-8 md:px-8 md:pt-12 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-8 overflow-hidden rounded-[2rem] border border-[var(--og-sand)] bg-[rgba(255,248,241,0.92)] p-6 shadow-[0_24px_80px_rgba(8,30,111,0.08)] md:grid-cols-[1fr_0.9fr] md:p-8">
          <div className="flex flex-col justify-center">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--og-orange)]">
              Full Custom
            </p>
            <h2
              className="mt-4 text-5xl leading-none text-[var(--og-blue)] md:text-7xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Built from
              <br />
              the ground up
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-7 text-[var(--og-muted)] md:text-xl">
              Best for headwear, bags, blankets, towels, and accessories where material choice,
              trims, and product construction matter as much as the artwork.
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
              src="/images/gallery/headwear-full-custom-verve-larrea-hat-038.jpg"
              alt="Premium full custom hat shown on model"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              style={{ objectPosition: "center 34%" }}
              priority
            />
          </div>
        </div>
      </section>

      <Reveal className="relative isolate overflow-hidden px-4 pb-0 pt-16 md:px-8 md:pt-20 lg:px-12">
        <div className="absolute inset-0 -z-30">
          <Image
            src="/images/gallery/full-custom-feelingswell-hat-labbet-app.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: "center 58%" }}
            aria-hidden="true"
          />
        </div>
        <div className="absolute inset-0 -z-20 bg-[#1C1C1C]/82" />
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
            <span>for full custom</span>
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Built From Scratch",
                copy: "The product is not chosen off a shelf first. We shape the build around what the brand actually wants to make.",
                iconSrc: "/graphics/services/better-blanks-asset-54.svg",
                iconAlt: "Built from scratch icon",
              },
              {
                title: "Materials + Trims",
                copy: "Fabric direction, labels, closures, patching, and packaging all stay open so the result feels considered.",
                iconSrc: "/graphics/services/artwork-prints-well-asset-44.svg",
                iconAlt: "Materials and trims icon",
              },
              {
                title: "Real Guidance",
                copy: "We help balance product ambition, budget, and timeline so the custom work lands where it should.",
                iconSrc: "/graphics/services/fast-real-communication-asset-39.svg",
                iconAlt: "Real guidance icon",
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
        <section className="mx-auto grid max-w-6xl gap-6 md:grid-cols-[1.02fr_0.98fr] md:items-stretch">
          <article className="relative flex h-full overflow-hidden rounded-[1.75rem] border-[3px] border-white bg-[#E4DFCD]">
            <div className="relative min-h-[24rem] flex-1 md:min-h-[30rem]">
              <Image
                src="/images/gallery/bags-fabric-swatches-mg-9430.jpg"
                alt="Fabric swatches used to guide a custom bags build"
                fill
                sizes="(max-width: 768px) 100vw, 55vw"
                className="object-cover"
                style={{ objectPosition: "center 54%" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C]/72 via-[#1C1C1C]/14 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 text-white md:p-7">
                <p className="font-noir-alt text-xs font-bold uppercase tracking-[0.18em] text-[var(--og-tangerine)]">
                  Product first
                </p>
                <h3
                  className="mt-2 text-[2.2rem] uppercase leading-none md:text-[3.5rem]"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  The product
                  <br />
                  is the brand
                </h3>
                <p className="mt-3 max-w-lg text-sm leading-6 text-white/82 md:text-base">
                  Best when the goal is not just decoration, but a product with its own materials,
                  build, and finish language.
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
                    More control
                    <br />
                    over the final
                    <br />
                    product
                  </>
                }
                description="For teams that want to influence the feel, construction, and finishing details instead of picking a stock item and decorating it."
              />
            </article>

            <div className="grid gap-4 sm:grid-cols-3">
              <article className="rounded-[1.45rem] border-[2.5px] border-[#0B32A0] bg-white p-5 shadow-[4px_4px_0px_rgba(11,50,160,0.1)]">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--og-orange)]">
                  100+ piece minimums
                </p>
                <p className="mt-3 text-sm leading-6 text-[var(--og-muted)]">
                  Built for real programs, drops, and premium gifting runs rather than one-offs.
                </p>
              </article>
              <article className="rounded-[1.45rem] border-[2.5px] border-[#0B32A0] bg-white p-5 shadow-[4px_4px_0px_rgba(11,50,160,0.1)]">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--og-orange)]">
                  4-8 weeks+
                </p>
                <p className="mt-3 text-sm leading-6 text-[var(--og-muted)]">
                  Timelines vary by category, sample needs, materials, and how custom the finish package gets.
                </p>
              </article>
              <article className="rounded-[1.45rem] border-[2.5px] border-[#0B32A0] bg-white p-5 shadow-[4px_4px_0px_rgba(11,50,160,0.1)]">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--og-orange)]">
                  Best-fit categories
                </p>
                <p className="mt-3 text-sm leading-6 text-[var(--og-muted)]">
                  Hats, bags, towels, blankets, bandanas, and accessories with product-level brand details.
                </p>
              </article>
            </div>
          </div>
        </section>
      </Reveal>

      <ServiceProjectCarousel
        eyebrow="Recent Projects"
        title="Built for brands that want more than decoration"
        description="A few examples of the kinds of categories that make sense for full custom: premium hats, retail bags, blankets, bandanas, and other soft goods where the product itself carries the story."
        items={projectCarouselItems}
        showCtaBadge={false}
      />

      <ServiceSnapCarousel
        eyebrow="Details + Finishing"
        title="Where full custom gets interesting"
        description="Materials, labels, trim tape, patches, closures, and packaging are usually the difference between a decorated item and a product that feels fully built."
        items={detailsCarouselItems}
        ctaHref="#start-project"
        ctaLabel="Start a Project"
      />

      <Reveal className="bg-[#F3EFE7] px-4 py-14 md:px-8 md:py-18 lg:px-12">
        <section className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <SectionHeader
              eyebrow="How It Works"
              title="A simple path into custom development"
              description="The process starts broad, then gets more specific fast. We use the first conversation to narrow product type, materials, finish level, quantity, and timing before the build starts."
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
              src="/images/gallery/packaging-stanford-medicine-thinkhealth-craft-1.jpg"
              alt="Finished custom packaging and product inserts"
              fill
              sizes="(max-width: 768px) 100vw, 45vw"
              className="object-cover"
              style={{ objectPosition: "center 52%" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C]/50 via-[#1C1C1C]/10 to-transparent" />
          </div>

          <ServiceLeadForm
            title="Let's build it from scratch"
            description="Share the product type, rough quantity, budget, and timing. We will help figure out whether full custom is the right path and what level of build makes sense."
            projectDefault=""
            projectPlaceholder="Tell us what you want to make, how custom it needs to be, rough quantity, budget range, and any material or packaging ideas."
            hiddenFields={{
              source: "full-custom-page",
              service: "full-custom",
            }}
            submitLabel="Get a Quote"
            showArtworkUpload
          />
        </section>
      </Reveal>
    </main>
  );
}
