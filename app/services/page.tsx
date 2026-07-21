import Link from "next/link";
import Image from "next/image";
import { startProjectHref } from "@/lib/content";

export const metadata = {
  title: "How We Work — Orange Goods",
  description: "OG Crafted, Ready Made, and Design — three ways Orange Goods builds the goods your brand deserves.",
};

const services = [
  {
    id: "og-crafted",
    eyebrow: "Full Custom",
    title: "OG Crafted",
    tagline: "Built from scratch. Nothing off the shelf.",
    description:
      "OG Crafted is our fully custom production path. Everything is designed and manufactured from the ground up — your fabric, your fit, your trims, your labels. The result is something nobody else has. It takes longer, but it lands as the lower-cost path here while giving you the most brand-specific result.",
    details: [
      "Custom fabric selection and development",
      "Cut + sew construction from scratch",
      "Fully custom trims, hardware, and labels",
      "Retail-quality finishes and packaging",
      "In-house design and tech packs",
    ],
    specs: [
      { label: "MOQ", value: "100+ pieces" },
      { label: "Timeline", value: "6–10 weeks" },
      { label: "Best for", value: "Brand lines, retail, premium gifts" },
    ],
    image: "https://orangegoods.co/wp-content/uploads/2025/03/OrangeGoods_Goods_17.avif",
    bg: "bg-[#FF4200]",
    cta: "Start a Custom Project",
  },
  {
    id: "ready-made",
    eyebrow: "Fast + Quality",
    title: "Ready Made",
    tagline: "Premium blanks. Decorated locally. Fast.",
    description:
      "Ready Made starts with premium blank garments and hard goods — brands like Richardson, Yupoong, S+S Activewear — and adds your decoration locally. Embroidery, screen print, patches, and heat transfers applied cleanly and quickly. You get excellent quality at a faster pace, with a higher cost than OG Crafted.",
    details: [
      "Premium blanks from top suppliers",
      "Embroidery, screen print, and patches",
      "Mix styles — same design applies across all",
      "2–4 week turnaround on most orders",
      "Higher cost per unit than OG Crafted",
    ],
    specs: [
      { label: "MOQ", value: "100+ pieces" },
      { label: "Timeline", value: "2–4 weeks" },
      { label: "Best for", value: "Events, staff kits, fast campaigns" },
    ],
    image: "https://orangegoods.co/wp-content/uploads/2025/03/OrangeGoods_Goods_5-1.avif",
    bg: "bg-[#0B32A0]",
    cta: "Start a Ready Made Order",
  },
  {
    id: "design",
    eyebrow: "In-House Creative",
    title: "Design",
    tagline: "Your brand, drawn by humans.",
    description:
      "Our in-house design team handles everything from logo development and illustration to full brand identity for merch. We don't use templates or AI-generated art — every project is designed by hand with your brand in mind. Whether you need a logo for a hat, a full merch identity, or artwork for a product line, we've got you.",
    details: [
      "Custom logo and wordmark design",
      "Illustration and emblem creation",
      "Full merch identity systems",
      "Artwork optimized for embroidery and print",
      "Tech packs and production-ready files",
    ],
    specs: [
      { label: "Turnaround", value: "5–10 business days" },
      { label: "Revisions", value: "Included" },
      { label: "Best for", value: "New brands, product launches, events" },
    ],
    image: "https://orangegoods.co/wp-content/uploads/2024/07/GraphicDesign-271x300.jpg",
    bg: "bg-[#081E6F]",
    cta: "Talk About Design",
  },
];

const comparisons = [
  { label: "Timeline", crafted: "6–10 weeks", readyMade: "2–4 weeks" },
  { label: "MOQ", crafted: "100+ pieces", readyMade: "100+ pieces" },
  { label: "Construction", crafted: "Built from scratch", readyMade: "Premium blanks" },
  { label: "Customization", crafted: "Everything", readyMade: "Logo + decoration" },
  { label: "Cost", crafted: "Lower", readyMade: "Higher" },
  { label: "Lead time", crafted: "Longer", readyMade: "Faster" },
];

const chooseCrafted = [
  "You need something nobody else makes",
  "Fit, fabric, and trims are part of the brand story",
  "You're building a retail product line",
  "It's a premium gift or collector piece",
  "You want the lower-cost path",
];

const chooseReadyMade = [
  "You need it in 2–4 weeks",
  "The design is the hero, not the construction",
  "You can spend more for faster turnaround",
  "It's for events, onboarding, or campaigns",
  "You want to mix styles across one order",
];

export default function ServicesPage() {
  return (
    <main>
      <section className="bg-[#0B32A0] px-4 py-16 text-white md:px-8 md:py-20 lg:px-12">
        <div className="mx-auto max-w-4xl text-center">
          <p
            className="text-sm font-semibold uppercase tracking-[0.28em] text-white/60"
            style={{ fontFamily: "var(--font-accent)" }}
          >
            How We Work
          </p>
          <h1
            className="mt-4 text-4xl uppercase leading-tight text-white md:text-6xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Three ways to make something great
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-7 text-white/70">
            Whether you need fully custom goods built from scratch, fast turnaround on premium blanks, or design help to get your artwork right — we handle it.
          </p>
        </div>
      </section>

      {services.map((service) => (
        <section key={service.id} id={service.id} className="px-4 py-16 md:px-8 md:py-20 lg:px-12">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-12 md:grid-cols-2 md:items-center">
              <div className="relative min-h-[280px] overflow-hidden rounded-[2rem] md:min-h-[400px]">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              <div>
                <p
                  className="text-sm font-semibold uppercase tracking-[0.28em] text-[#FF7F00]"
                  style={{ fontFamily: "var(--font-accent)" }}
                >
                  {service.eyebrow}
                </p>
                <h2
                  className="mt-3 text-3xl uppercase leading-tight text-[#FF4200] md:text-5xl"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {service.title}
                </h2>
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

                <Link href={startProjectHref} className="btn-og mt-8 inline-flex">
                  {service.cta}
                </Link>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="bg-[var(--og-warm-grey)] px-4 py-16 md:px-8 md:py-20 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-4xl leading-tight text-[#1C1C1C] md:text-5xl">
            Which is right for you?
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-[#1C1C1C]/70">
            Not sure? Pick the path that matches your situation. Either way,
            we&apos;ll make sure you end up with goods worth keeping.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="border border-[#FF4200]/30 bg-white p-6 md:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#FF4200]">
                Go with OG Crafted if…
              </p>
              <ul className="mt-5 space-y-3">
                {chooseCrafted.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-base text-[#1C1C1C]/70">
                    <span className="mt-1 text-[#FF4200]">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="border border-[#0B32A0]/30 bg-white p-6 md:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#0B32A0]">
                Go with Ready Made if…
              </p>
              <ul className="mt-5 space-y-3">
                {chooseReadyMade.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-base text-[#1C1C1C]/70">
                    <span className="mt-1 text-[#0B32A0]">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 md:px-8 md:py-20 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-4xl leading-tight text-[#1C1C1C] md:text-5xl">At a glance</h2>
          <div className="mt-8 overflow-hidden border border-[#0B32A0]/20">
            <div className="grid grid-cols-3 bg-[var(--og-blue)] px-6 py-4 text-xs font-semibold uppercase tracking-[0.22em] text-white">
              <span />
              <span>OG Crafted</span>
              <span>Ready Made</span>
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
            className="inline-flex items-center rounded-xl border-2 border-white bg-transparent px-6 py-3 text-sm font-bold uppercase text-white transition hover:-translate-y-[3px]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Take the Quiz
          </Link>
        </div>
      </section>
    </main>
  );
}
