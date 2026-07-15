import Image from "next/image";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { Gallery } from "@/components/Gallery";
import { HatBuildAccordion } from "@/components/HatBuildAccordion";
import { ParallaxHeroBackground } from "@/components/ParallaxHeroBackground";
import { Reveal } from "@/components/Reveal";
import {
  hatAnchorLinks,
  hatFaqs,
  hatGallery,
  hatProcess,
} from "@/lib/content";

const startHatsHref = "/contact";

const pricingPlans = [
  {
    name: "Full custom hat",
    price: "From $13 / hat",
    description:
      "A clean starting package with the custom shape, fabric direction, and one strong front decoration already baked in.",
    features: [
      "Custom shape and structure",
      "Custom fabric and color",
      "One front decoration included",
      "Sweatband woven label",
      "Free mockups and shipping",
    ],
  },
  {
    name: "Add-ons",
    price: "+$1.75 each",
    description:
      "Once the base hat is set, use add-ons to build it out with the extra details that make it feel more retail and more finished.",
    features: [
      "Back or side embroidery",
      "Interior label or taping upgrades",
      "Rope, closure, or flag-label details",
      "Patch or texture-driven finishing moves",
      "We help guide which extras are actually worth it",
    ],
  },
];

const quantityTiers = [
  { label: "100 - 249", base: "$13.00" },
  { label: "250 - 499", base: "$12.50" },
  { label: "500 - 999", base: "$11.50" },
  { label: "1,000+", base: "$10.50" },
];

const styleCards = [
  {
    title: "Dad + coast caps",
    model: "OG100 / OG120",
    description:
      "Relaxed, lower-profile shapes for everyday wear, hospitality, retail, and brands that want the hat to feel easy.",
    image: "/images/product/hats/og100-dad-front.jpg",
    imagePosition: "center 44%",
  },
  {
    title: "Structured caps",
    model: "OG130 / OG190",
    description:
      "Cleaner, more statement-driven crowns that hold shape well and give patches or bigger front logos more presence.",
    image: "/images/product/hats/feb-highline-navy-front.jpg",
    imagePosition: "center 46%",
  },
  {
    title: "Truckers",
    model: "OG140 / OG150 / OG160",
    description:
      "Mesh-back silhouettes that work well for outdoor brands, event drops, beverage programs, and lifestyle merch.",
    image: "/images/gallery/hat-client-trucker-patch.jpg",
    imagePosition: "center 42%",
  },
  {
    title: "Buckets + specialty",
    model: "OG170 / OG180 / OG210",
    description:
      "Buckets, foam truckers, campers, and niche silhouettes for summer drops, surf, music, and stronger brand character.",
    image: "/images/gallery/hat-client-bucket-brown.jpg",
    imagePosition: "center 48%",
  },
];

const materialCards = [
  {
    title: "Soft + washed",
    description:
      "Cotton twill, washed denim, and broken-in finishes for hats that need to feel lived-in from day one.",
    image: "/images/gallery/headwear-leaver-her-wilder-img-7385-edit.jpg",
    imagePosition: "center 46%",
    details: ["Cotton twill", "Washed denim", "Canvas", "Corduroy"],
  },
  {
    title: "Outdoor + technical",
    description:
      "Nylon, ripstop, performance poly, and lighter builds for active brands, utility, and warmer-weather use.",
    image: "/images/gallery/hat-feb-img_7550.jpg",
    imagePosition: "center 42%",
    details: ["Nylon", "Ripstop", "Performance poly", "Mesh"],
  },
  {
    title: "Texture + personality",
    description:
      "Camo, suede-feel fabrics, heavier textures, and finish options that push the hat further into retail territory.",
    image: "/images/gallery/hat-og-patch-studio.jpg",
    imagePosition: "center 50%",
    details: ["Camo", "Faux suede", "Terry", "Fleece"],
  },
];

const decorationCards = [
  {
    title: "Embroidery",
    description:
      "The cleanest starting point for front logos, side hits, tonal builds, and everyday branded hats.",
    image: "/images/gallery/hat-feb-img_7549.jpg",
    imagePosition: "center 42%",
    details: ["Flat embroidery", "3D puff", "Chain stitch"],
  },
  {
    title: "Patches",
    description:
      "When the hat needs more texture, more contrast, or more retail character than direct embroidery alone.",
    image: "/images/gallery/hat-og-patch-lifestyle.jpg",
    imagePosition: "center 52%",
    details: ["Woven", "Embroidered", "Leather", "PVC", "Chenille"],
  },
  {
    title: "Finishing details",
    description:
      "The small branded touches that make the hat feel complete, not just decorated.",
    image: "/images/gallery/hat-og-patch-_mg_5840.jpg",
    imagePosition: "center 48%",
    details: ["Interior label", "Interior taping", "Back embroidery", "Side embroidery", "Rope", "Closure options"],
  },
];

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
      <section className="relative overflow-hidden bg-[#1C1C1C] px-4 py-16 text-white md:px-8 md:py-24 lg:px-12">
        <ParallaxHeroBackground
          image="/images/gallery/headwear-patch-layout-mg-9412.jpg"
          inset="-1.5%"
          position="center 42%"
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
            Fully custom headwear with better taste, better finishing, and one team guiding the
            whole thing from first direction to final delivery.
          </p>
          <p className="mt-4 text-sm font-semibold uppercase tracking-[0.12em] text-white/78">
            100+ hats per style. 6-8 week lead time.
          </p>
        </div>
      </section>

      <div className="sticky top-[5.75rem] z-30 border-y border-[#0B32A0]/20 bg-[rgba(251,247,241,0.92)] px-4 py-3 backdrop-blur md:px-8 lg:px-12">
        <nav className="mx-auto flex max-w-6xl gap-2 overflow-x-auto">
          {hatAnchorLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="inline-flex min-h-10 shrink-0 items-center rounded-xl border border-[#0B32A0]/20 px-4 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--og-blue)] transition hover:border-[var(--og-orange)] hover:text-[var(--og-orange)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      <Reveal className="px-4 py-10 md:px-8 lg:px-12">
        <section id="overview" className="mx-auto max-w-6xl">
          <article className="relative overflow-hidden rounded-[2rem] border-[3px] border-[#0B32A0] text-white shadow-[8px_8px_0px_#0B32A0]">
            <div className="absolute inset-0">
              <Image
                src="/images/gallery/headwear-reel-life-gear-boat-2.jpg"
                alt="Custom hats photographed on the water"
                fill
                sizes="100vw"
                className="object-cover"
                style={{ objectPosition: "center 42%" }}
              />
            </div>
            <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(11,50,160,0.72),rgba(28,28,28,0.48))]" />
            <div className="relative grid gap-8 p-8 md:grid-cols-[1.1fr_0.9fr] md:p-10">
              <div>
                <span className="inline-flex rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-white backdrop-blur-sm">
                  OG Crafted
                </span>
                <h3 className="mt-4 text-4xl font-semibold leading-none md:text-5xl">
                  Built from scratch, your way.
                </h3>
                <p className="mt-4 max-w-2xl text-lg leading-7 text-white/82">
                  This is where the hat gets specific. Shape, structure, fabric, decoration, and finishing details are all built around the brand instead of pulled from a blank shelf.
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

              <div className="grid gap-3 self-end sm:grid-cols-2">
                {[
                  "12 silhouettes to start from",
                  "Custom fabrics and color direction",
                  "Embroidery, patches, labels, and finishing",
                  "One team guiding art, production, and delivery",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-[1.25rem] border border-white/18 bg-white/10 p-4 text-sm leading-6 text-white/85 backdrop-blur-sm"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </article>

          <div className="mt-5 grid gap-5 lg:grid-cols-[0.72fr_1.28fr]">
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
              <h3 className="mt-3 text-3xl font-semibold leading-tight text-[var(--og-blue)]">
                Ready-made hats move faster.
              </h3>
              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                {[
                  "Premium blanks with your embroidery or patch",
                  "2-3 week turn for the right program",
                  "Less customization, less development time",
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
                className="mt-6 inline-flex min-h-11 items-center rounded-xl border-2 border-[#0B32A0] px-5 text-sm font-semibold uppercase tracking-[0.12em] text-[var(--og-blue)] transition hover:-translate-y-[3px] hover:bg-[#0B32A0] hover:text-white"
              >
                See ready-made hats
              </Link>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal className="px-4 py-8 md:px-8 lg:px-12">
        <section id="pricing" className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="Pricing"
            title="Clear pricing. Then build the details."
            description="Keep the pricing simple first: start with the full custom hat price, then layer on the extra details that matter instead of forcing every project into a complicated package system."
          />

          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {pricingPlans.map((plan, index) => (
              <article
                key={plan.name}
                className={`rounded-[1.9rem] border-[3px] p-6 md:p-7 ${
                  index === 0
                    ? "border-[#0B32A0] bg-white shadow-[8px_8px_0px_#0B32A0]"
                    : "border-[#FF4200] bg-[#0B32A0] text-white shadow-[8px_8px_0px_#FF4200]"
                }`}
              >
                <p
                  className={`text-xs font-semibold uppercase tracking-[0.22em] ${
                    index === 0 ? "text-[var(--og-orange)]" : "text-[#FFB07A]"
                  }`}
                >
                  {plan.name}
                </p>
                <h3 className="mt-3 text-4xl font-semibold leading-none">{plan.price}</h3>
                <p className={`mt-4 text-sm leading-7 ${index === 0 ? "text-[var(--og-muted)]" : "text-white/78"}`}>
                  {plan.description}
                </p>
                <ul className="mt-6 grid gap-2">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className={`flex items-start gap-2 text-sm ${
                        index === 0 ? "text-[var(--og-muted)]" : "text-white/84"
                      }`}
                    >
                      <span className={index === 0 ? "text-[var(--og-orange)]" : "text-[#FFB07A]"}>+</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="mt-8 rounded-[1.9rem] border border-[#0B32A0]/15 bg-[rgba(255,248,241,0.88)] p-6 md:p-7">
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--og-blue)]">
                  Quantity breaks
                </p>
                <h3 className="mt-2 text-3xl font-semibold leading-none text-[var(--og-blue)]">
                  Base pricing gets better with volume.
                </h3>
              </div>
              <p className="text-sm leading-6 text-[var(--og-muted)]">
                100 hats minimum per style. Most finishing details can be added for about $1.75 each once the base hat is locked.
              </p>
            </div>

            <div className="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
              {quantityTiers.map((tier) => (
                <div
                  key={tier.label}
                  className="rounded-[1.25rem] border border-[#0B32A0]/12 bg-white p-5"
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--og-blue)]">
                    {tier.label}
                  </p>
                  <div className="mt-4">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--og-orange)]">
                      Full custom hat
                    </p>
                    <p className="mt-1 text-2xl font-semibold text-[var(--og-blue)]">{tier.base}</p>
                    <p className="mt-3 text-xs leading-5 text-[var(--og-muted)]">
                      Add most extra details for about $1.75 each.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <HatBuildAccordion />
        </section>
      </Reveal>

      <Reveal className="px-4 py-8 md:px-8 lg:px-12">
        <section id="styles" className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="Styles"
            title="Start with the shape."
            description="Most hat projects get easier once the silhouette is right. These are the lanes most brands start in before we fine-tune fabric, brim, closure, and decoration."
          />

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {styleCards.map((card) => (
              <article
                key={card.title}
                className="overflow-hidden rounded-[1.9rem] border-[3px] border-transparent bg-white shadow-[0_18px_50px_rgba(8,30,111,0.07)] transition hover:border-[#0B32A0]"
              >
                <div className="relative aspect-[16/10] bg-[#d9c5ae]">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                    style={{ objectPosition: card.imagePosition }}
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--og-orange)]">
                    {card.model}
                  </p>
                  <h3 className="mt-2 text-3xl font-semibold leading-none text-[var(--og-blue)]">
                    {card.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[var(--og-muted)] md:text-base">
                    {card.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal className="px-4 py-8 md:px-8 lg:px-12">
        <section id="materials" className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="Materials"
            title="Then dial in the feel."
            description="This is the part that makes the hat feel coastal, premium, technical, washed-in, or retail-forward. The right fabric changes the whole read."
          />

          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {materialCards.map((card) => (
              <article
                key={card.title}
                className="overflow-hidden rounded-[1.9rem] border border-[#0B32A0]/15 bg-white"
              >
                <div className="relative aspect-[4/5] bg-[#d8c3aa]">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    sizes="(min-width: 1024px) 30vw, 100vw"
                    className="object-cover"
                    style={{ objectPosition: card.imagePosition }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-3xl font-semibold leading-none text-[var(--og-blue)]">
                    {card.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[var(--og-muted)] md:text-base">
                    {card.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {card.details.map((detail) => (
                      <span
                        key={detail}
                        className="rounded-full border border-[#0B32A0]/12 bg-[rgba(255,248,241,0.88)] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--og-blue)]"
                      >
                        {detail}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal className="px-4 py-8 md:px-8 lg:px-12">
        <section id="decoration" className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="Decoration"
            title="Brand it like it belongs there."
            description="This is where the hat stops feeling generic. Decoration and finishing details should make the piece feel intentional, not just logo-applied."
          />

          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {decorationCards.map((card) => (
              <article
                key={card.title}
                className="overflow-hidden rounded-[1.9rem] border border-[#0B32A0]/15 bg-white"
              >
                <div className="relative aspect-[4/5] bg-[#d8c3aa]">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    sizes="(min-width: 1024px) 30vw, 100vw"
                    className="object-cover"
                    style={{ objectPosition: card.imagePosition }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-3xl font-semibold leading-none text-[var(--og-blue)]">
                    {card.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[var(--og-muted)] md:text-base">
                    {card.description}
                  </p>
                  <ul className="mt-5 grid gap-2">
                    {card.details.map((detail) => (
                      <li
                        key={detail}
                        className="flex items-start gap-2 text-sm text-[var(--og-muted)]"
                      >
                        <span className="text-[var(--og-orange)]">+</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>
      </Reveal>

      <Gallery
        id="gallery"
        eyebrow="From the shop"
        title="How the work actually looks."
        description="Recent hat builds, branded details, finishing moments, and the kind of execution clients are really buying."
        items={hatGallery}
      />

      <Reveal className="px-4 py-8 md:px-8 lg:px-12">
        <section id="process" className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="Process"
            title="How OG Crafted moves."
            description="The process should feel guided the whole way through, not like you got dropped into factory details on your own."
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
                <h3 className="mt-4 text-2xl font-semibold text-[var(--og-blue)]">
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
                <summary className="cursor-pointer text-lg font-semibold text-[var(--og-blue)]">
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
        description="Send the style direction, quantity, timeline, and any artwork or references you have. We will shape the build from there."
        buttonLabel="Start a Project"
        buttonHref={startHatsHref}
      />
    </main>
  );
}
