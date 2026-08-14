import Image from "next/image";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { ParallaxHeroBackground } from "@/components/ParallaxHeroBackground";
import { ProcessSteps } from "@/components/ProcessSteps";
import { Reveal } from "@/components/Reveal";

export const metadata = {
  title: "Design - Orange Goods",
  description:
    "Merch-first design support from Orange Goods. Graphics, packaging, trims, mockups, and production-ready artwork built to become real goods.",
};

const designProjectHref = "/contact?project=design";

const pricingPackages = [
  {
    name: "Citrus Classic",
    price: "$3,000",
    description: "A focused design package for brands that need a few strong merch directions.",
    features: ["5 graphics", "2 revisions included"],
    href: designProjectHref,
  },
  {
    name: "California Grove",
    price: "$4,000",
    description: "A broader package for launches, events, teams, or a tighter merch point of view.",
    features: ["10 graphics", "2 revisions included"],
    href: designProjectHref,
    featured: true,
  },
  {
    name: "Golden Orchard",
    price: "$5,500",
    description: "A full design set for larger programs, seasonal drops, or multi-product campaigns.",
    features: ["15 graphics", "3 revisions included"],
    href: designProjectHref,
  },
  {
    name: "Whole Damn Orchard",
    price: "$9,500",
    description: "The full design push for brands that need a deep bench of visuals across merch, packaging, and beyond.",
    features: ["30 graphics + 3 patterns", "5 revisions included"],
    href: designProjectHref,
  },
];

const designCategories = [
  {
    name: "Merch Graphics",
    href: designProjectHref,
    image: "/images/gallery/merch-graphics-verve-tokyo-tote-024.jpg",
    className: "lg:col-span-2 lg:min-h-[20rem]",
    imagePosition: "center 18%",
    imageClassName: "scale-[1.18] group-hover:scale-[1.24]",
  },
  {
    name: "Apparel Graphics",
    href: designProjectHref,
    image: "/images/gallery/apparel-verve-gd-tee-verve_grateful-dead_tshirt_101.jpg",
    className: "lg:col-span-2 lg:min-h-[20rem]",
    imagePosition: "50% 30%",
    imageClassName: "scale-[1.22] group-hover:scale-[1.28]",
  },
  {
    name: "Packaging + Trims",
    href: designProjectHref,
    image: "/images/gallery/socks-verve-gd-dscf4860.jpg",
    className: "lg:min-h-[18rem]",
    imagePosition: "center 42%",
  },
  {
    name: "Patterns",
    href: designProjectHref,
    image: "/images/gallery/blankets-sundream-jarritos-1013-2.jpg",
    className: "lg:min-h-[18rem]",
    imagePosition: "center 46%",
  },
  {
    name: "Illustration",
    href: designProjectHref,
    image: "/images/gallery/design-illustration-3a2a3346.jpg",
    className: "lg:min-h-[18rem]",
    imagePosition: "34% 44%",
    imageClassName: "scale-[1.62] group-hover:scale-[1.68]",
  },
  {
    name: "Full Line Design",
    href: designProjectHref,
    image: "/images/gallery/design-full-line-000068200009.jpg",
    className: "lg:min-h-[18rem]",
    imagePosition: "58% 42%",
  },
  {
    name: "Built with production in mind",
    href: designProjectHref,
    image: "/images/gallery/design-built-production-dscf1585.jpg",
    className: "lg:col-span-4 lg:min-h-[17rem]",
    imagePosition: "center 48%",
    description:
      "Artwork built with placement, trims, materials, and manufacturing in mind, so the design looks strong on screen and holds up when it becomes a real product.",
    cta: "Start a project",
  },
];

const designProcess = [
  {
    title: "Bring us the idea",
    body: "Send the idea, rough concept, or references. If the direction is still loose, we can help shape it.",
  },
  {
    title: "We build the artwork",
    body: "We design with the product, placement, materials, and production method in mind from the start.",
    numberClassName: "text-[var(--og-orange)]",
  },
  {
    title: "Make it real",
    body: "Once the direction is approved, we can move straight into mockups, sampling, and production support.",
  },
];

export default function DesignPage() {
  return (
    <main className="bg-[#F7F4ED] pb-24 md:pb-0">
      <section className="relative overflow-hidden bg-[#1C1C1C] px-4 py-16 text-white md:px-8 md:py-24 lg:px-12">
        <ParallaxHeroBackground
          image="/images/gallery/design-hero-ocean-ocean-hoodie.jpg"
          position="center 36%"
        />
        <div className="absolute inset-0 bg-[#1C1C1C]/32" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1C1C1C]/58 via-[#1C1C1C]/42 to-[#1C1C1C]/14" />
        <div className="relative mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white/75">
            In-House Design
          </p>
          <h1 className="mt-5 max-w-3xl text-5xl uppercase leading-none text-[var(--og-orange)] md:text-6xl lg:text-7xl">
            Merch-First
            <br />
            Design
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-white/82 md:text-xl">
            Merch graphics, packaging, patches, labels, and production-ready artwork built to
            become real goods.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={designProjectHref}
              className="btn-og inline-flex"
            >
              Start Design Project
            </Link>
            <Link
              href="/gallery"
              className="btn-og-white inline-flex"
            >
              View Gallery
            </Link>
          </div>
        </div>
      </section>

      <div className="border-y-[3px] border-[#1C1C1C] bg-[#081E6F] px-4 py-4 text-center md:px-6 md:py-5 lg:px-8">
        <p
          className="mx-auto max-w-[76rem] text-[1.55rem] uppercase leading-none tracking-[0.01em] text-[#FF4200] sm:text-[2rem] md:text-[2.8rem] lg:text-[3.8rem] xl:text-[4.45rem]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Design built for goods
        </p>
      </div>

      <Reveal className="relative overflow-hidden bg-white px-4 pb-8 pt-14 md:px-8 md:pb-12 md:pt-20 lg:px-12">
        <section className="mx-auto max-w-6xl">
          <div className="relative left-1/2 mb-6 flex w-screen -translate-x-1/2 items-center justify-center gap-4 md:mb-8 md:gap-6">
            <div
              className="h-9 flex-1 -translate-y-2 md:h-11"
              style={{
                backgroundImage: "url('/graphics/orange-checker-tile.svg')",
                backgroundRepeat: "repeat-x",
                backgroundPosition: "right center",
                backgroundSize: "44px 44px",
              }}
              aria-hidden="true"
            />
            <p className="font-accent shrink-0 bg-white px-3 text-center text-3xl font-normal leading-none text-[#081E6F] md:px-5 md:text-5xl">
              What we design
            </p>
            <div
              className="h-9 flex-1 -translate-y-2 md:h-11"
              style={{
                backgroundImage: "url('/graphics/orange-checker-tile.svg')",
                backgroundRepeat: "repeat-x",
                backgroundPosition: "left center",
                backgroundSize: "44px 44px",
              }}
              aria-hidden="true"
            />
          </div>
          <div className="grid grid-flow-row-dense grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {designCategories.map((category) => (
              <Link
                key={category.name}
                href={category.href}
                className={`group relative min-h-[17rem] overflow-hidden rounded-[1.75rem] border-[3px] border-transparent transition duration-200 hover:border-[#0B32A0] focus-visible:border-[#0B32A0] focus-visible:outline-none ${category.className}`}
              >
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  sizes="(min-width: 1024px) 20vw, (min-width: 640px) 50vw, 100vw"
                  className={`object-cover transition duration-500 group-hover:scale-105 ${
                    category.imageClassName ?? ""
                  }`}
                  style={{ objectPosition: category.imagePosition }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C]/82 via-[#1C1C1C]/24 to-transparent" />
                <div
                  className={`absolute p-5 ${
                    category.cta
                      ? "inset-0 flex flex-col items-start justify-center gap-4 text-left md:grid md:grid-cols-[minmax(0,1fr)_auto] md:items-center md:gap-8 md:p-6"
                      : "inset-x-0 bottom-0"
                  }`}
                >
                  <div className={category.cta ? "max-w-2xl md:justify-self-start" : ""}>
                    <h2 className="font-noir-alt text-2xl font-bold leading-tight text-white normal-case md:text-3xl">
                      {category.name}
                    </h2>
                    {category.description ? (
                      <p className="mt-3 max-w-xl text-sm leading-6 text-white/82 md:text-base">
                        {category.description}
                      </p>
                    ) : null}
                  </div>
                  {category.cta ? (
                    <span className="font-body inline-flex min-h-11 w-fit items-center justify-center self-end rounded-xl bg-[#FF4200] px-5 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-white outline outline-[3px] outline-transparent transition-[transform,outline-color] duration-150 hover:-translate-y-[3px] hover:outline-white focus-visible:outline-white active:-translate-y-px md:mr-[30px] md:self-center md:justify-self-end">
                      {category.cta}
                    </span>
                  ) : null}
                </div>
              </Link>
            ))}
          </div>
        </section>
      </Reveal>

      <ProcessSteps
        eyebrow="How it works"
        title="Real team. Simple process."
        description="Our West Coast team knows merch from the inside out — not just the design side, but the real production details too, from logo sizing and Pantone matching to trims, placement, and what actually works on the final product."
        steps={designProcess}
        buttonHref={designProjectHref}
        heroImage="/images/gallery/apparel-wearable-palette-bgxhj-23.jpg"
        heroImagePosition="center 50%"
        heroOverlayClassName="bg-[linear-gradient(135deg,rgba(11,50,160,0.54),rgba(28,28,28,0.46))]"
      />

      <Reveal className="px-4 py-14 md:px-8 md:py-20 lg:px-12">
        <section id="pricing" className="mx-auto max-w-6xl scroll-mt-28">
          <div className="max-w-3xl">
            <p className="font-accent text-sm font-normal uppercase tracking-[0.2em] text-[#FF4200]">
              Packages + Pricing
            </p>
            <h2 className="mt-3 text-4xl leading-none text-[var(--og-blue)] md:text-5xl">
              Start with a real scope.
            </h2>
            <p className="mt-3 text-sm leading-6 text-[#1C1C1C]/60 md:text-base">
              Get your designs in as little as one to two weeks. Packages + pricing below.
            </p>
          </div>
          <div className="mt-8 grid gap-4 lg:grid-cols-4">
            {pricingPackages.map((pkg) => (
              <article
                key={pkg.name}
                className={`flex min-h-[25rem] flex-col rounded-[1.5rem] border p-6 ${
                  pkg.featured
                    ? "border-[3px] border-[var(--og-blue)] bg-[var(--og-blue)] text-white shadow-[0_16px_34px_rgba(11,50,160,0.14)]"
                    : "border-[3px] border-[#081E6F]/12 bg-white text-[#1C1C1C]"
                }`}
              >
                <h3
                  className={`text-[1.8rem] leading-[0.95] ${
                    pkg.featured ? "text-white" : "text-[var(--og-blue)]"
                  }`}
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {pkg.name}
                </h3>
                <p
                  className="mt-5 text-[2.45rem] leading-none text-[#FF7F00]"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {pkg.price}
                </p>
                <p
                  className={`mt-4 text-sm leading-6 ${
                    pkg.featured ? "text-white/75" : "text-[#1C1C1C]/60"
                  }`}
                >
                  {pkg.description}
                </p>
                <ul className="mt-6 grid gap-0">
                  {pkg.features.map((feature) => (
                    <li
                      key={feature}
                      className={`border-t py-3 text-[11px] font-semibold uppercase tracking-[0.16em] ${
                        pkg.featured
                          ? "border-white/15 text-white"
                          : "border-[#081E6F]/12 text-[var(--og-blue)]"
                      }`}
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href={pkg.href}
                  className={`mt-auto inline-flex min-h-11 items-center justify-center rounded-xl border px-4 text-sm font-semibold uppercase tracking-[0.12em] transition ${
                    pkg.featured
                      ? "border-white text-white hover:bg-white hover:text-[var(--og-blue)]"
                      : "border-[var(--og-blue)] text-[var(--og-blue)] hover:bg-[var(--og-blue)] hover:text-white"
                  }`}
                >
                  Get started
                </Link>
              </article>
            ))}
          </div>
        </section>
      </Reveal>

      <CTASection
        title="Ready to create designs together?"
        description="Bring the idea, logo, or references. We&apos;ll shape it into merch artwork."
        buttonLabel="Start Design Project"
        buttonHref={designProjectHref}
        backgroundImage="/images/gallery/design-ready-to-create-mg-6305.jpg"
        backgroundImagePosition="center 42%"
        overlayClassName="bg-black/30"
        eyebrow=""
        wrapperClassName="pt-8 md:pt-10 lg:pt-12 pb-16 md:pb-20"
      />
    </main>
  );
}
