import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";

export const metadata = {
  title: "Design - Orange Goods",
  description:
    "In-house merch design, product graphics, packaging, patches, trims, and production-ready artwork from Orange Goods.",
};

const designProjectHref = "/contact?project=design";

const trustQuotes = [
  {
    quote: "Professional and on time",
    source: "Merchandise Manager, Hannah B.",
  },
  {
    quote: "A true extension of our team",
    source: "Field Marketing Manager, Joe K.",
  },
  {
    quote: "They just get it",
    source: "Owner, Doobie C.",
  },
];

const caseStudySteps = [
  {
    label: "Artwork",
    image: "/images/gallery/verve-gd-good-energy-tee-silo.png",
  },
  {
    label: "Mockup",
    image: "/images/gallery/verve-gd-good-energy-tee-hover.webp",
  },
  {
    label: "Finished goods",
    image: "/images/gallery/apparel-verve-gd-tee-verve_grateful-dead_tshirt_101.jpg",
  },
];

const deckCaseStudies = [
  {
    name: "Cali Squeeze",
    body: "A bold refresh with illustrations and playful copy built to feel bright, easy, and sip-worthy.",
  },
  {
    name: "Brew Bird",
    body: "Custom merch graphics with a cleaner modern read while staying true to the brand.",
  },
  {
    name: "Fox Mercantile",
    body: "Euro-chic coffee packaging and merch direction blended with South Florida warmth.",
  },
];

const fullServiceItems = [
  "Apparel designs",
  "Colorways",
  "Custom patterns",
  "Illustration",
  "Concept ideation",
  "Patches + labels",
  "Packaging",
  "Hang tags + trims",
  "Accessory design",
  "Character design",
];

const processSteps = [
  {
    title: "Questionnaire",
    body: "Share your vision, goals, brand references, product needs, timeline, and what you want the design to do.",
  },
  {
    title: "Development",
    body: "We create custom designs that scale across goods, packaging, apparel, web, print, and campaign needs.",
  },
  {
    title: "Delivery",
    body: "You review, we refine, then we send vector-ready files prepared for the products and vendors involved.",
  },
];

const finePrintItems = [
  {
    title: "Deposit",
    body: "60% deposit due to kick off the package, non-refundable.",
  },
  {
    title: "Final payment",
    body: "Remaining payment is due before vector file delivery.",
  },
  {
    title: "Revisions",
    body: "After included rounds, additional revisions are billed hourly with a two-hour minimum.",
  },
  {
    title: "Timeline",
    body: "Most design packages are built around a 1-2 week window once the questionnaire is complete.",
  },
];

const pricingPackages = [
  {
    name: "Citrus Classic",
    price: "$3,000",
    description: "A focused design package for brands that need a few strong merch directions.",
    features: ["5 graphics", "2 revisions included", "60% deposit to start"],
    href: designProjectHref,
  },
  {
    name: "California Grove",
    price: "$4,000",
    description: "A broader package for launches, events, teams, or a tighter merch point of view.",
    features: ["10 graphics", "2 revisions included", "60% deposit to start"],
    href: designProjectHref,
    featured: true,
  },
  {
    name: "Golden Orchard",
    price: "$5,500",
    description: "A full design set for larger programs, seasonal drops, or multi-product campaigns.",
    features: ["15 graphics", "3 revisions included", "60% deposit to start"],
    href: designProjectHref,
  },
  {
    name: "Whole Damn Orchard",
    price: "$9,500",
    description: "The full design push for brands that need a deep bench of visuals across merch, packaging, and beyond.",
    features: ["30 graphics + 3 patterns", "5 revisions included", "60% deposit to start"],
    href: designProjectHref,
  },
];

const galleryImages = [
  "/images/gallery/apparel-verve-gd-tee.jpg",
  "/images/gallery/hat-og-patch-_mg_5840.jpg",
  "/images/gallery/bags-boatsetter-dscf3148.jpg",
  "/images/gallery/apparel-gts-synergy.jpg",
  "/images/gallery/blankets-sundream-jarritos-1013-2.jpg",
  "/images/gallery/socks-verve-gd-dscf4863.jpg",
  "/images/gallery/drinkware-verve-milk-glass-mug.jpg",
  "/images/gallery/accessories-royal-wine-bandana-image-1.jpg",
];

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#FF7F00]">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-4xl leading-none text-[var(--og-blue)] md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 text-sm leading-6 text-[#1C1C1C]/60">
          {description}
        </p>
      ) : null}
    </div>
  );
}

export default function DesignPage() {
  return (
    <main className="bg-[#F7F4ED] pb-24 md:pb-0">
      <section className="border-t border-[#081E6F]/10 bg-white px-4 py-14 md:px-8 md:py-20 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#FF7F00]">
                Custom Designs For Your Brand
              </p>
              <h1 className="mt-3 max-w-4xl text-4xl leading-none text-[var(--og-blue)] md:text-5xl">
                Design made for merch, not just mockups.
              </h1>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-[#1C1C1C]/60">
                In-house artwork, product graphics, packaging, and production-ready files for goods that actually get made.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap md:justify-end">
              <Link
                href={designProjectHref}
                className="inline-flex min-h-11 w-fit items-center justify-center rounded-lg border border-[var(--og-blue)] px-4 text-sm font-semibold uppercase tracking-[0.12em] text-[var(--og-blue)] transition hover:bg-[var(--og-blue)] hover:text-white"
              >
                Start design project
              </Link>
              <Link
                href="#pricing"
                className="inline-flex min-h-11 w-fit items-center justify-center rounded-lg border border-[var(--og-blue)] px-4 text-sm font-semibold uppercase tracking-[0.12em] text-[var(--og-blue)] transition hover:bg-[var(--og-blue)] hover:text-white"
              >
                View pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Reveal className="bg-white px-4 pb-14 md:px-8 md:pb-16 lg:px-12">
        <section className="mx-auto max-w-6xl border-t border-[#081E6F]/10 pt-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#1C1C1C]/45">
            Trusted by the greats
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            {trustQuotes.map((item) => (
              <article key={item.quote} className="rounded-lg border border-[#081E6F]/12 bg-[#F7F4ED] p-4">
                <p className="text-xl leading-tight text-[var(--og-blue)]">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <p className="mt-3 text-xs font-semibold uppercase tracking-[0.12em] text-[#1C1C1C]/45">
                  {item.source}
                </p>
              </article>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal className="bg-[#F7F4ED] px-4 py-12 md:px-8 md:py-16 lg:px-12">
        <section className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <SectionHeader
            eyebrow="Full Service Design"
            title="Your brand's full design solution."
            description="The strongest design offer is not one logo file. It is a system that can stretch across apparel, packaging, accessories, digital, and the actual products you make."
          />
          <div className="grid grid-cols-2 gap-3 md:grid-cols-5">
            {fullServiceItems.map((item) => (
              <div key={item} className="flex min-h-24 items-end rounded-lg border border-[#081E6F]/12 bg-white p-3">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--og-blue)]">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal className="px-4 py-10 md:px-8 md:py-14 lg:px-12">
        <section className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div className="max-w-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FF7F00]">
              Verve Coffee
            </p>
            <h2 className="mt-3 text-3xl leading-none text-[var(--og-blue)] md:text-4xl">
              Design to finished merch.
            </h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {["Artwork", "Mockups", "Finished goods"].map((item) => (
                <div key={item} className="rounded-full border border-[#081E6F]/12 bg-white px-3 py-1.5">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--og-blue)]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {caseStudySteps.map((step, index) => (
              <div
                key={step.label}
                className={`relative overflow-hidden rounded-lg border border-[#081E6F]/12 bg-[#E7E0D2] ${
                  index === 0 ? "col-span-2 aspect-[16/10]" : "aspect-square"
                }`}
              >
                <Image
                  src={step.image}
                  alt={`Verve Coffee case study - ${step.label}`}
                  fill
                  loading="eager"
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className={index === 0 ? "object-contain p-6" : "object-cover"}
                />
                <div className="absolute left-3 top-3 rounded-full bg-white px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--og-blue)]">
                  {step.label}
                </div>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal className="px-4 pb-12 md:px-8 md:pb-16 lg:px-12">
        <section className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <SectionHeader
              eyebrow="Designs In Action"
              title="More ways design becomes useful."
              description="Brand refreshes, merch graphics, packaging direction, and copy that gives the products a point of view."
            />
            <Link
              href="/gallery"
              className="inline-flex min-h-11 w-fit items-center rounded-lg border border-[var(--og-blue)] px-4 text-sm font-semibold uppercase tracking-[0.12em] text-[var(--og-blue)] transition hover:bg-[var(--og-blue)] hover:text-white"
            >
              View gallery
            </Link>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {deckCaseStudies.map((item) => (
              <article key={item.name} className="rounded-lg border border-[#081E6F]/12 bg-white p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#FF7F00]">
                  Case study
                </p>
                <h3 className="mt-4 text-3xl leading-none text-[var(--og-blue)]">
                  {item.name}
                </h3>
                <p className="mt-4 text-sm leading-6 text-[#1C1C1C]/60">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal className="bg-white px-4 py-14 md:px-8 md:py-20 lg:px-12">
        <section className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="How It Works"
            title="A cleaner path from idea to final files."
            description="Choose a package, pay the deposit, then we send the questionnaire. Prefer talking it through first? We can start with a quick design consult."
          />
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {processSteps.map((step, index) => (
              <article key={step.title} className="rounded-lg border border-[#081E6F]/12 bg-[#F7F4ED] p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#FF7F00]">
                  0{index + 1}
                </p>
                <h3 className="mt-4 text-2xl leading-tight text-[var(--og-blue)]">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#1C1C1C]/60">
                  {step.body}
                </p>
              </article>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal className="px-4 py-14 md:px-8 md:py-20 lg:px-12">
        <section id="pricing" className="mx-auto max-w-6xl scroll-mt-28">
          <SectionHeader
            eyebrow="Packages + Pricing"
            title="Start with a real scope."
            description="These are starting points for design support. If the project is more complex, we will scope it clearly before work begins."
          />
          <div className="mt-8 grid gap-4 lg:grid-cols-4">
            {pricingPackages.map((pkg) => (
              <article
                key={pkg.name}
                className={`flex min-h-[25rem] flex-col rounded-lg border p-5 ${
                  pkg.featured
                    ? "border-[var(--og-blue)] bg-[var(--og-blue)] text-white"
                    : "border-[#081E6F]/12 bg-white text-[#1C1C1C]"
                }`}
              >
                <h3 className={`text-2xl leading-tight ${pkg.featured ? "text-white" : "text-[var(--og-blue)]"}`}>
                  {pkg.name}
                </h3>
                <p className="mt-4 text-4xl leading-none text-[#FF7F00]">
                  {pkg.price}
                </p>
                <p className={`mt-4 text-sm leading-6 ${pkg.featured ? "text-white/75" : "text-[#1C1C1C]/60"}`}>
                  {pkg.description}
                </p>
                <ul className="mt-6 grid gap-3">
                  {pkg.features.map((feature) => (
                    <li
                      key={feature}
                      className={`border-t pt-3 text-xs font-semibold uppercase tracking-[0.12em] ${
                        pkg.featured ? "border-white/15 text-white" : "border-[#081E6F]/12 text-[var(--og-blue)]"
                      }`}
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href={pkg.href}
                  className={`mt-auto inline-flex min-h-11 items-center justify-center rounded-lg border px-4 text-sm font-semibold uppercase tracking-[0.12em] transition ${
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
          <div className="mt-6 grid gap-3 rounded-lg border border-[#081E6F]/12 bg-white p-4 md:grid-cols-4">
            {finePrintItems.map((item) => (
              <div key={item.title}>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#FF7F00]">
                  {item.title}
                </p>
                <p className="mt-2 text-sm leading-6 text-[#1C1C1C]/60">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal className="bg-[var(--og-blue)] px-4 py-14 text-white md:px-8 md:py-16 lg:px-12">
        <section className="mx-auto flex max-w-6xl flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#FF7F00]">
              Goods + Design
            </p>
            <h2 className="mt-3 max-w-3xl text-4xl leading-none md:text-5xl">
              Get your goods and designs from one partner.
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-white/70">
              We can build the artwork, mock it up on the right products, produce the order, and keep the final pieces connected from concept to delivery.
            </p>
          </div>
          <Link
            href="/goods"
            className="inline-flex min-h-11 w-fit items-center rounded-lg border border-white px-4 text-sm font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-white hover:text-[var(--og-blue)]"
          >
            View goods
          </Link>
        </section>
      </Reveal>

      <Reveal className="bg-white px-4 py-14 md:px-8 md:py-20 lg:px-12">
        <section className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <SectionHeader
              eyebrow="Recent Work"
              title="Design that becomes goods."
            />
            <Link
              href="/gallery"
              className="inline-flex min-h-11 w-fit items-center rounded-lg border border-[var(--og-blue)] px-4 text-sm font-semibold uppercase tracking-[0.12em] text-[var(--og-blue)] transition hover:bg-[var(--og-blue)] hover:text-white"
            >
              View gallery
            </Link>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
            {galleryImages.map((src) => (
              <div key={src} className="relative aspect-square overflow-hidden rounded-lg bg-[#E7E0D2]">
                <Image
                  src={src}
                  alt="Orange Goods design project"
                  fill
                  sizes="(min-width: 768px) 25vw, 50vw"
                  className="object-cover transition duration-500 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal className="px-4 py-14 md:px-8 md:py-20 lg:px-12">
        <section className="mx-auto flex max-w-6xl flex-col gap-5 border-t border-[#081E6F]/15 pt-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#FF7F00]">
              Design Support
            </p>
            <h2 className="mt-3 max-w-2xl text-4xl leading-none text-[var(--og-blue)] md:text-5xl">
              Ready to bring your merch to life?
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-6 text-[#1C1C1C]/60">
              Bring us the idea, the logo, or the messy folder of references. We&apos;ll turn it into production-ready merch artwork.
            </p>
          </div>
          <Link
            href={designProjectHref}
            className="inline-flex min-h-11 w-fit items-center rounded-lg border border-[var(--og-blue)] px-4 text-sm font-semibold uppercase tracking-[0.12em] text-[var(--og-blue)] transition hover:bg-[var(--og-blue)] hover:text-white"
          >
            Design with us
          </Link>
        </section>
      </Reveal>
    </main>
  );
}
