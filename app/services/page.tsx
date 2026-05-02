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
      "OG Crafted is our fully custom production path. Everything is designed and manufactured from the ground up — your fabric, your fit, your trims, your labels. The result is something nobody else has. It takes longer and costs more, but there's no other way to get goods this specific to your brand.",
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
      "Ready Made starts with premium blank garments and hard goods — brands like Richardson, Yupoong, S+S Activewear — and adds your decoration locally. Embroidery, screen print, patches, and heat transfers applied cleanly and quickly. You get excellent quality at a faster pace.",
    details: [
      "Premium blanks from top suppliers",
      "Embroidery, screen print, and patches",
      "Mix styles — same design applies across all",
      "2–4 week turnaround on most orders",
      "Lower cost per unit than OG Crafted",
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

export default function ServicesPage() {
  return (
    <main>
      {/* Hero */}
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

      {/* Service sections */}
      {services.map((service) => (
        <section key={service.id} id={service.id} className="px-4 py-16 md:px-8 md:py-20 lg:px-12">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-12 md:grid-cols-2 md:items-center">
              {/* Photo */}
              <div className="relative min-h-[280px] overflow-hidden rounded-[2rem] md:min-h-[400px]">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div>
                <p
                  className={`text-sm font-semibold uppercase tracking-[0.28em] text-[#FF7F00]`}
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

                {/* Detail list */}
                <ul className="mt-6 space-y-2">
                  {service.details.map((d) => (
                    <li key={d} className="flex items-start gap-2 text-sm text-[#1C1C1C]/70">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FF4200]" />
                      {d}
                    </li>
                  ))}
                </ul>

                {/* Specs pills */}
                <div className="mt-6 flex flex-wrap gap-3">
                  {service.specs.map((s) => (
                    <div key={s.label} className="rounded-xl border border-[#0B32A0]/20 bg-[#F3EFE7] px-4 py-2">
                      <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#FF4200]">{s.label}</p>
                      <p className="text-sm text-[#1C1C1C]/70">{s.value}</p>
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

      {/* Bottom CTA */}
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
          <Link href="/quiz" className="inline-flex items-center rounded-xl border-2 border-white bg-transparent px-6 py-3 text-sm font-bold uppercase text-white transition hover:-translate-y-[3px]" style={{ fontFamily: "var(--font-display)" }}>
            Take the Quiz
          </Link>
        </div>
      </section>
    </main>
  );
}
