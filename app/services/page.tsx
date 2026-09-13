import Link from "next/link";
import Image from "next/image";
import { DiscoveryLinksSection } from "@/components/DiscoveryLinksSection";
import { ParallaxHeroBackground } from "@/components/ParallaxHeroBackground";
import { startProjectHref } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

const designProjectHref = "/design/start";

export const metadata = buildMetadata({
  title: "How We Work — Orange Goods",
  description:
    "Full Custom, Quick Turn, and In-House Design — three ways Orange Goods builds the goods your brand deserves.",
  path: "/services",
  image: "/images/gallery/full-custom-materials-mg-9406.jpg",
  imageAlt: "Orange Goods production process",
});

const services = [
  {
    id: "og-crafted",
    title: "Full Custom",
    icon: "/graphics/services/full-custom.svg",
    sectionClassName: "bg-white",
    tagline: "Built from scratch. Nothing off the shelf.",
    description:
      "Full Custom is the path for goods built from the ground up. Fabric, fit, trims, labels, and finishing are all tailored to the project, so the end result feels fully your own.",
    details: [
      "Custom fabric and fit direction",
      "Built from scratch with custom trims",
      "Retail-level finishing and packaging",
    ],
    specs: [
      { label: "MOQ", value: "100+ pieces" },
      { label: "Timeline", value: "4-8 weeks+" },
      { label: "Best for", value: "Retail, premium gifts, brand lines" },
    ],
    image: "/images/gallery/full-custom-feelingswell-hat-labbet-app.jpg",
    imagePosition: "center 62%",
    bg: "bg-[#FF4200]",
    cta: "Start a Custom Project",
  },
  {
    id: "quick-turn",
    title: "Quick Turn",
    icon: "/graphics/services/quick-turn.svg",
    sectionClassName: "bg-white",
    reverse: true,
    tagline: "Premium blanks. Decorated locally. Fast.",
    description:
      "Quick Turn starts with premium blanks and finishes them locally with your decoration. It is the faster option when timing matters more than fully custom construction.",
    details: [
      "Premium blanks from proven suppliers",
      "Embroidery, print, patches, and transfers",
      "Fast turnaround across mixed styles",
    ],
    specs: [
      { label: "MOQ", value: "100+ pieces" },
      { label: "Timeline", value: "2-3 weeks" },
      { label: "Best for", value: "Events, kits, quick campaigns" },
    ],
    image: "/images/gallery/quick-turn-fish-at-sea-mg-6362.jpg",
    imagePosition: "46% 52%",
    bg: "bg-[#0B32A0]",
    cta: "Start a Quick Turn Order",
  },
  {
    id: "design",
    title: "In-House Design",
    icon: "/graphics/services/in-house-design-asset-55.svg",
    iconClassName: "h-16 w-16 shrink-0 -ml-2 md:h-20 md:w-20 md:-ml-3",
    sectionClassName: "bg-white",
    tagline: "Your brand, drawn by humans.",
    description:
      "Our in-house team handles merch graphics, logos, illustration, and production-ready artwork. Everything is built by hand with the product and decoration method in mind.",
    details: [
      "Logos, graphics, and illustration",
      "Artwork built for print and embroidery",
      "Production-ready files and direction",
    ],
    specs: [
      { label: "Turnaround", value: "5–10 business days" },
      { label: "Revisions", value: "Included" },
      { label: "Best for", value: "Launches, events, new brand work" },
    ],
    image: "/images/gallery/apparel-verve-gd-tee-verve_grateful-dead_tshirt_101.jpg",
    imagePosition: "46% 40%",
    bg: "bg-[#081E6F]",
    cta: "Design With Us",
  },
];

const comparisons = [
  { label: "Timeline", crafted: "4-8 weeks+", readyMade: "2-3 weeks" },
  { label: "MOQ", crafted: "100+ pieces", readyMade: "100+ pieces" },
  { label: "Starting point", crafted: "Built from scratch", readyMade: "Premium blanks" },
  { label: "What changes", crafted: "Fabric, fit, trims, and labels", readyMade: "Decoration, artwork, and application" },
  { label: "Cost", crafted: "Lower at scale", readyMade: "Higher per unit" },
];
const serviceDiscoveryLinks = [
  {
    eyebrow: "Guide",
    title: "Start with the production-path comparison",
    description:
      "This guide is the easiest way to understand how speed, customization, and timing change the right call.",
    href: "/insights/full-custom-hats-vs-quick-turn-hats",
    cta: "Read guide",
  },
  {
    eyebrow: "Case Study",
    title: "See a quick-turn program with real shelf appeal",
    description:
      "Verve's apparel, socks, and drinkware mix is a good example of how a tighter product edit beats a generic merch pile.",
    href: "/case-studies/verve-coffee-retail-merch-program",
    cta: "View case study",
  },
  {
    eyebrow: "Browse",
    title: "Want to compare products before you contact us?",
    description:
      "The shared goods browser lets you sort by category, production path, fit, color, and price before you reach out.",
    href: "/goods/all",
    cta: "Browse goods",
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-[#F7F4ED] pb-24 md:pb-0">
      <section className="relative overflow-hidden bg-[#1C1C1C] px-4 py-16 text-white md:px-8 md:py-24 lg:px-12">
        <ParallaxHeroBackground
          image="/images/gallery/full-custom-materials-mg-9406.jpg"
          position="center 42%"
        />
        <div className="absolute inset-0 bg-[#1C1C1C]/32" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1C1C1C]/58 via-[#1C1C1C]/42 to-[#1C1C1C]/14" />
        <div className="relative mx-auto grid max-w-6xl gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white/75">
              How We Work
            </p>
            <h1 className="mt-5 max-w-3xl text-5xl uppercase leading-none text-[var(--og-orange)] md:text-6xl lg:text-7xl">
              Choose your approach
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-white/82 md:text-xl">
              Custom hats, apparel, bags, drinkware, and other branded goods handled through the right mix of premium blanks, full custom development, and merch-first design support.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end lg:self-end">
            <Link href="#og-crafted" className="btn-og-white inline-flex">
              Compare the options
            </Link>
          </div>
        </div>
      </section>

      {services.map((service) => (
        <section key={service.id} id={service.id} className="px-4 py-10 md:px-8 md:py-12 lg:px-12">
          <div
            className={`mx-auto max-w-6xl rounded-[2rem] px-6 py-10 md:px-10 md:py-12 lg:px-12 ${
              service.sectionClassName ?? "bg-transparent"
            }`}
          >
            <div
              className={`grid gap-12 md:grid-cols-2 md:items-center ${
                service.reverse ? "md:[&>*:first-child]:order-2 md:[&>*:last-child]:order-1" : ""
              }`}
            >
              <div className="relative min-h-[360px] overflow-hidden rounded-[2rem] md:min-h-[520px]">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  style={{ objectPosition: service.imagePosition ?? "center" }}
                />
              </div>

              <div className={service.reverse ? "md:pr-6" : "md:pl-2"}>
                <div
                  className={`mb-5 flex items-center ${
                    service.id === "design" ? "gap-2 md:gap-3" : "gap-4 md:gap-5"
                  }`}
                >
                  {service.icon ? (
                    <Image
                      src={service.icon}
                      alt=""
                      width={88}
                      height={88}
                      loading={service.icon.endsWith(".svg") ? "eager" : undefined}
                      unoptimized={service.icon.endsWith(".svg")}
                      className={service.iconClassName ?? "h-16 w-16 shrink-0 md:h-20 md:w-20"}
                      aria-hidden="true"
                    />
                  ) : null}
                  <h2
                    className="text-3xl uppercase leading-tight text-[#FF4200] md:text-5xl"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {service.title}
                  </h2>
                </div>
                <p className="mt-2 text-lg font-semibold text-[#1C1C1C]">{service.tagline}</p>
                <p className="mt-4 text-base leading-7 text-[#1C1C1C]/70">{service.description}</p>

                <ul className="mt-6 space-y-2">
                  {service.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-2 text-sm text-[#1C1C1C]/70">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FF4200]" />
                      {detail}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-3">
                  {service.specs.map((spec) => (
                    <div key={spec.label} className="rounded-xl border border-[#0B32A0]/20 bg-[#F3EFE7] px-4 py-2">
                      <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#FF4200]">{spec.label}</p>
                      <p className="text-sm text-[#1C1C1C]/70">{spec.value}</p>
                    </div>
                  ))}
                </div>

                <Link href={service.id === "design" ? designProjectHref : startProjectHref} className="btn-og mt-8 inline-flex">
                  {service.cta}
                </Link>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="bg-[var(--og-warm-grey)] px-4 py-16 md:px-8 md:py-20 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-4xl leading-tight text-[#0B32A0] md:text-5xl">
            Which is right for you?
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-[#1C1C1C]/70">
            Not sure? Pick the path that matches your situation. Either way,
            we&apos;ll make sure you end up with goods worth keeping.
          </p>

          <div className="mt-10 overflow-hidden border border-[#0B32A0]/20 bg-white">
            <div className="grid grid-cols-3 bg-[var(--og-blue)] px-6 py-4 text-xs font-semibold uppercase tracking-[0.22em] text-white">
              <span />
              <span>Full Custom</span>
              <span>Quick Turn</span>
            </div>
            {comparisons.map((row, index) => (
              <div
                key={row.label}
                className={`grid grid-cols-3 px-6 py-4 text-sm ${
                  index % 2 === 0 ? "bg-white" : "bg-[#F3EFE7]"
                }`}
              >
                <span className="font-semibold text-[#1C1C1C]">{row.label}</span>
                <span className="text-[#1C1C1C]/70">{row.crafted}</span>
                <span className="text-[#1C1C1C]/70">{row.readyMade}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-10 md:px-8 md:py-12 lg:px-12">
        <DiscoveryLinksSection
          eyebrow="Keep Exploring"
          title="A few pages that clarify the decision faster"
          description="These are the strongest follow-on pages if you are still deciding how custom the product needs to be, which goods make sense, or what good execution actually looks like."
          items={serviceDiscoveryLinks}
        />
      </section>

      <section className="bg-[#0B32A0] px-4 py-16 text-center text-white md:px-8">
        <h2
          className="text-3xl uppercase text-white md:text-4xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Not sure which is right for you?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-white/70">
          Tell us what you&apos;re trying to make and we&apos;ll recommend the right path. Takes 2 minutes.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href={startProjectHref} className="btn-og-white">
            Talk to Us
          </Link>
          <Link
            href="/quiz"
            className="inline-flex items-center rounded-xl border-2 border-white bg-transparent px-6 py-3 font-body text-sm font-semibold uppercase tracking-[0.08em] text-white transition hover:-translate-y-[3px]"
          >
            Take the Quiz
          </Link>
        </div>
      </section>
    </main>
  );
}
