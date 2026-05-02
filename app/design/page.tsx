import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { DesignCallout } from "@/components/DesignCallout";

const designProjectHref =
  "/contact";

const marqueeItems = [
  "FULL LINE DESIGN",
  "SCREEN PRINTING",
  "EMBROIDERY",
  "STREETWEAR",
  "PRODUCT GRAPHICS",
  "PATTERNS",
  "ILLUSTRATION",
  "HANG TAGS + TRIMS",
  "PACKAGING",
  "PATCHES + LABELS",
  "BRAND ALIGNMENT",
  "CONCEPT IDEATION",
];

const services = [
  {
    name: "Illustration",
    description: "Custom hand-crafted artwork for any product",
  },
  {
    name: "Wordmarks + Logos",
    description: "Brand marks built for merch and print",
  },
  {
    name: "Pattern Design",
    description: "Repeat patterns for all-over print and fabric",
  },
  {
    name: "Apparel Graphics",
    description: "Screen print and DTG-ready artwork",
  },
  {
    name: "Emblem Graphics",
    description: "Badge and crest-style designs for embroidery",
  },
  {
    name: "Tradeshow Design",
    description: "Booth graphics, banners, and signage",
  },
  {
    name: "Patch + Trim Graphics",
    description: "Woven, embroidered, and PVC patches",
  },
  {
    name: "Embroidery Graphics",
    description: "DST-ready digitized artwork",
  },
  {
    name: "Concept Ideation",
    description: "Mood boards and creative direction",
  },
  {
    name: "Design Curation",
    description: "Selecting the right aesthetic for your brand",
  },
  {
    name: "Tech Packs",
    description: "Production-ready spec sheets",
  },
  {
    name: "Full Line Design",
    description: "Seasonal or capsule collection design",
  },
  {
    name: "Brand Design",
    description: "Complete identity systems",
  },
  {
    name: "Packaging",
    description: "Boxes, bags, tags, and wraps",
  },
  {
    name: "Event Graphics",
    description: "Merch and signage for events",
  },
  {
    name: "Staff Apparel",
    description: "Uniforms and team kits",
  },
];

const processSteps = [
  {
    title: "GIVE US THE DEETS",
    body: "We start with a conversation about your brand, your goals, and what you need. Vision, values, audience, reference points",
  },
  {
    title: "DEVELOPMENT",
    body: "Our team gets to work. Concepts, drafts, revisions. You'll see work in progress and have input at every stage",
  },
  {
    title: "FINALIZATION",
    body: "Approved designs delivered as hi-res vector files, production-ready for any decoration method",
  },
];

const pricingPackages = [
  {
    name: "CITRUS CLASSIC",
    price: "$3,000",
    description:
      "A great way to explore new design ideas and find what resonates with your brand",
    features: ["5 designs", "2 revisions included", "60% deposit to start"],
    href: "/contact",
  },
  {
    name: "CALIFORNIA GROVE",
    price: "$4,000",
    description:
      "A step up to refine your brand's identity with designs that elevate your presence",
    features: ["10 designs", "2 revisions included", "60% deposit to start"],
    href: "/contact",
    featured: true,
  },
  {
    name: "GOLDEN ORCHARD",
    price: "$5,500",
    description:
      "A comprehensive set of designs that make a bold impact and set your brand apart",
    features: ["15 designs", "3 revisions included", "60% deposit to start"],
    href: "/contact",
  },
];

const galleryImages = [
  "https://orangegoods.co/wp-content/uploads/2024/07/HIGHSTDELIDec2020-11_1.jpg",
  "https://orangegoods.co/wp-content/uploads/2025/02/OrangeGoods_Designs_2.webp",
  "https://orangegoods.co/wp-content/uploads/2024/07/BGxHJ-16.jpg",
  "https://orangegoods.co/wp-content/uploads/2024/07/Clash-copy.jpg",
  "https://orangegoods.co/wp-content/uploads/2025/02/OrangeGoods_Designs_45.jpg",
  "https://orangegoods.co/wp-content/uploads/2024/07/Chevron.jpg",
  "https://orangegoods.co/wp-content/uploads/2025/02/OrangeGoods_Designs_22.jpg",
  "https://orangegoods.co/wp-content/uploads/2025/02/OrangeGoods_Designs_5.webp",
  "https://orangegoods.co/wp-content/uploads/2024/07/2021SundreamSoftOpening051.jpg",
  "https://orangegoods.co/wp-content/uploads/2025/02/OrangeGoods_Designs_19.jpg",
  "https://orangegoods.co/wp-content/uploads/2024/07/B-1.jpg",
  "https://orangegoods.co/wp-content/uploads/2024/07/mcalister-017-1.jpg",
];

function SectionHeading({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <h2 className="text-4xl leading-none text-[var(--og-blue)] md:text-6xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-lg leading-8 text-[var(--og-muted)]">
          {description}
        </p>
      ) : null}
    </div>
  );
}

export default function DesignPage() {
  return (
    <main className="pb-24 md:pb-0">
      <section className="bg-[var(--og-blue)] px-4 py-16 text-white md:px-8 md:py-24 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--og-orange)]">
            Graphic + Brand Design
          </p>
          <h1 className="mt-5 max-w-5xl text-6xl leading-none text-white md:text-8xl lg:text-9xl">
            FORGET AI — WE&apos;VE GOT HUMANS
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-white/80 md:text-xl">
            In-house designers who know merch. From apparel graphics to full
            brand systems — built by people who&apos;ve seen it printed
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href={designProjectHref}
              className="inline-flex min-h-12 items-center rounded-xl bg-[var(--og-orange)] px-6 text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-[#d73b05]"
            >
              DESIGN WITH US
            </Link>
            <Link
              href="#pricing"
              className="inline-flex min-h-12 items-center rounded-xl border border-white px-6 text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:border-[var(--og-orange)] hover:text-[#ff9e7a]"
            >
              VIEW PRICING
            </Link>
          </div>
        </div>
      </section>

      <div className="overflow-hidden border-y-4 border-[var(--og-orange)] bg-[var(--og-orange)]">
        <div className="animate-marquee flex h-14 w-max items-center gap-12 px-12">
          {Array.from({ length: 4 }).flatMap((_, index) =>
            marqueeItems.map((item) => (
              <span
                key={`${item}-${index}`}
                className="flex-none text-xs font-semibold uppercase tracking-[0.28em] text-white [font-family:var(--font-display)]"
              >
                {item} ·
              </span>
            )),
          )}
        </div>
      </div>

      <Reveal className="bg-[var(--og-warm-grey)] px-4 py-16 md:px-8 md:py-20 lg:px-12">
        <section className="mx-auto max-w-6xl">
          <SectionHeading title="WHAT WE DESIGN" />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <article
                key={service.name}
                className="min-h-44 border border-[#0B32A0]/20 bg-white/70 p-5"
              >
                <div
                  className={`h-10 w-10 ${
                    index % 3 === 0
                      ? "rounded-xl bg-[var(--og-orange)]"
                      : index % 3 === 1
                        ? "bg-[var(--og-blue)]"
                        : "rounded-xl bg-[var(--og-sand)]"
                  }`}
                />
                <h3 className="mt-5 text-2xl leading-tight text-[var(--og-blue)]">
                  {service.name}
                </h3>
                <p className="mt-2 text-sm leading-6 text-[var(--og-muted)]">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal className="px-4 py-16 md:px-8 md:py-20 lg:px-12">
        <section className="mx-auto max-w-6xl">
          <SectionHeading title="HOW IT WORKS" />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {processSteps.map((step, index) => (
              <article
                key={step.title}
                className="border border-[#0B32A0]/20 bg-[rgba(255,248,241,0.88)] p-6"
              >
                <p
                  className={`text-sm font-semibold uppercase tracking-[0.28em] ${
                    index % 2 === 0
                      ? "text-[var(--og-orange)]"
                      : "text-[var(--og-blue)]"
                  }`}
                >
                  0{index + 1}
                </p>
                <h3 className="mt-5 text-3xl leading-none text-[var(--og-blue)]">
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

      <Reveal className="bg-white/45 px-4 py-16 md:px-8 md:py-20 lg:px-12">
        <section id="pricing" className="mx-auto max-w-6xl scroll-mt-28">
          <SectionHeading
            title="PACKAGES + PRICING"
            description="Select a package that works for you. We'll reach out with next steps"
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {pricingPackages.map((pkg) => (
              <article
                key={pkg.name}
                className={`relative flex min-h-[28rem] flex-col border p-6 ${
                  pkg.featured
                    ? "border-[var(--og-orange)] bg-[var(--og-blue)] text-white shadow-[0_24px_70px_rgba(255,66,0,0.18)]"
                    : "border-[#0B32A0]/20 bg-[rgba(255,248,241,0.9)] text-[var(--og-off-black)]"
                }`}
              >
                {pkg.featured ? (
                  <p className="mb-4 w-fit bg-[var(--og-orange)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white">
                    BEST VALUE
                  </p>
                ) : null}
                <h3
                  className={`text-3xl leading-none ${
                    pkg.featured ? "text-white" : "text-[var(--og-blue)]"
                  }`}
                >
                  {pkg.name}
                </h3>
                <p
                  className={`mt-4 text-5xl [font-family:var(--font-display)] ${
                    pkg.featured ? "text-[var(--og-orange)]" : "text-[var(--og-orange)]"
                  }`}
                >
                  {pkg.price}
                </p>
                <p
                  className={`mt-4 text-base leading-7 ${
                    pkg.featured ? "text-white/80" : "text-[var(--og-muted)]"
                  }`}
                >
                  {pkg.description}
                </p>
                <ul className="mt-6 grid gap-3">
                  {pkg.features.map((feature) => (
                    <li
                      key={feature}
                      className={`border-t pt-3 text-sm font-semibold uppercase tracking-[0.12em] ${
                        pkg.featured
                          ? "border-white/15 text-white"
                          : "border-[#0B32A0]/15 text-[var(--og-blue)]"
                      }`}
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href={pkg.href}
                  className={`mt-auto inline-flex min-h-12 items-center justify-center rounded-xl px-5 text-sm font-semibold uppercase tracking-[0.14em] transition ${
                    pkg.featured
                      ? "bg-[var(--og-orange)] text-white hover:bg-[#d73b05]"
                      : "bg-[var(--og-blue)] text-white hover:bg-[var(--og-blue)]"
                  }`}
                >
                  GET STARTED
                </Link>
              </article>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal className="px-4 py-16 md:px-8 md:py-20 lg:px-12">
        <section className="mx-auto max-w-7xl">
          <SectionHeading title="RECENT PROJECTS" />
          <div className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3 xl:columns-4">
            {galleryImages.map((src, index) => (
              <div
                key={src}
                className="mb-4 break-inside-avoid overflow-hidden bg-[var(--og-sand)]"
              >
                <Image
                  src={src}
                  alt={`Orange Goods design project ${index + 1}`}
                  width={720}
                  height={900}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="h-auto w-full object-cover"
                />
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal className="bg-[var(--og-blue)] px-4 py-16 md:px-8 md:py-20 lg:px-12">
        <section className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <h2 className="max-w-3xl text-5xl leading-none text-white md:text-7xl">
            Ready for fresh squeezed designs?
          </h2>
          <Link
            href={designProjectHref}
            className="inline-flex min-h-12 shrink-0 items-center rounded-xl bg-[var(--og-orange)] px-6 text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-[#d73b05]"
          >
            DESIGN WITH US
          </Link>
        </section>
      </Reveal>

      <DesignCallout />
    </main>
  );
}
