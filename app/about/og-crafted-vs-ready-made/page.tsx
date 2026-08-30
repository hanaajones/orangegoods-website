import Link from "next/link";
import Image from "next/image";
import { CTASection } from "@/components/CTASection";
import { ParallaxHeroBackground } from "@/components/ParallaxHeroBackground";
import { Reveal } from "@/components/Reveal";
import { startProjectHref } from "@/lib/content";

export const metadata = {
  title: "Our Process — Orange Goods",
  description:
    "Our process starts with the right path. Compare Quick Turn and Full Custom to see which approach fits your timeline, budget, and level of customization.",
};

const paths = [
  {
    id: "og-crafted",
    eyebrow: "Full Custom",
    title: "Full Custom",
    tagline: "Built from scratch. Nothing off the shelf.",
    description:
      "Full Custom is our fully custom production path. Everything is designed and manufactured from the ground up — your fabric, your fit, your trims, your labels. The result is something nobody else has.",
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
    image:
      "https://orangegoods.co/wp-content/uploads/2025/03/OrangeGoods_Goods_17.avif",
    bg: "bg-[#FF4200]",
    cta: "Start a Custom Project",
  },
  {
    id: "quick-turn",
    eyebrow: "Fast + Quality",
    title: "Quick Turn",
    tagline: "Premium blanks. Decorated locally. Fast.",
    description:
      "Quick Turn starts with premium blank garments and hard goods — brands like Richardson, Yupoong, S+S Activewear — and adds your decoration locally. Embroidery, screen print, patches, and heat transfers applied cleanly and quickly.",
    details: [
      "Premium blanks from top suppliers",
      "Embroidery, screen print, and patches",
      "Mix styles — same design applies across all",
      "2–4 week turnaround on most orders",
      "Lower cost per unit than Full Custom",
    ],
    specs: [
      { label: "MOQ", value: "100+ pieces" },
      { label: "Timeline", value: "2–4 weeks" },
      { label: "Best for", value: "Events, staff kits, fast campaigns" },
    ],
    image:
      "https://orangegoods.co/wp-content/uploads/2025/03/OrangeGoods_Goods_5-1.avif",
    bg: "bg-[#0B32A0]",
    cta: "Start a Quick Turn Order",
  },
];

const comparisons = [
  { label: "Timeline", crafted: "6–10 weeks", readyMade: "2–4 weeks" },
  { label: "MOQ", crafted: "100+ pieces", readyMade: "100+ pieces" },
  { label: "Construction", crafted: "Built from scratch", readyMade: "Premium blanks" },
  { label: "Customization", crafted: "Everything", readyMade: "Logo + decoration" },
  { label: "Cost", crafted: "Higher", readyMade: "Lower" },
  { label: "Lead time", crafted: "Longer", readyMade: "Faster" },
];

const chooseCrafted = [
  "You need something nobody else makes",
  "Fit, fabric, and trims are part of the brand story",
  "You're building a retail product line",
  "It's a premium gift or collector piece",
  "Timeline isn't the top priority",
];

const chooseReadyMade = [
  "You need it in 2–4 weeks",
  "The design is the hero, not the construction",
  "You want a lower per-unit cost",
  "It's for events, onboarding, or campaigns",
  "You want to mix styles across one order",
];

export default function OGCraftedVsReadyMadePage() {
  return (
    <main className="bg-[#F7F4ED] pb-24 md:pb-0">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#1C1C1C] px-4 py-16 text-white md:px-8 md:py-24 lg:px-12">
        <ParallaxHeroBackground
          image="/images/gallery/design-built-production-dscf1585.jpg"
          position="center 36%"
        />
        <div className="absolute inset-0 bg-[#1C1C1C]/32" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1C1C1C]/58 via-[#1C1C1C]/42 to-[#1C1C1C]/14" />
        <div className="relative mx-auto grid max-w-6xl gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white/75">
              Our Process
            </p>
            <h1 className="mt-5 max-w-3xl text-5xl uppercase leading-none text-[var(--og-orange)] md:text-6xl lg:text-7xl">
              Quick Turn
              <br />
              or Full Custom
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-white/82 md:text-xl">
              Start with the right lane. Quick Turn uses premium blanks and moves
              fast. Full Custom is built from scratch for projects that need a
              more custom end result. Both lead to goods worth keeping.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end lg:self-end">
            <Link href={startProjectHref} className="btn-og inline-flex">
              Start a Project
            </Link>
            <Link href="/goods" className="btn-og-white inline-flex">
              Explore Goods
            </Link>
          </div>
        </div>
      </section>

      <div className="border-y-[3px] border-[#1C1C1C] bg-[#081E6F] px-4 py-4 text-center md:px-6 md:py-5 lg:px-8">
        <p
          className="mx-auto max-w-[76rem] text-[1.55rem] uppercase leading-none tracking-[0.01em] text-[#FF4200] sm:text-[2rem] md:text-[2.8rem] lg:text-[3.8rem] xl:text-[4.45rem]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Start with the right lane
        </p>
      </div>

      {/* Path cards */}
      <section className="px-4 py-16 md:px-8 md:py-20 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
          {paths.map((path) => (
            <Reveal key={path.id}>
              <article className="flex flex-col overflow-hidden border border-[#0B32A0]/20 bg-white">
                {/* Image */}
                <div className="relative h-64 bg-[#e0c7ad]">
                  <Image
                    src={path.image}
                    alt={path.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className={`absolute inset-0 ${path.bg} opacity-60`} />
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/70">
                      {path.eyebrow}
                    </p>
                    <h2 className="mt-2 text-4xl uppercase leading-none text-white md:text-5xl">
                      {path.title}
                    </h2>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-6 md:p-8">
                  <p className="text-base font-semibold text-[var(--og-ink)]">
                    {path.tagline}
                  </p>
                  <p className="mt-3 text-base leading-7 text-[var(--og-muted)]">
                    {path.description}
                  </p>

                  {/* Details */}
                  <ul className="mt-6 space-y-2">
                    {path.details.map((d) => (
                      <li key={d} className="flex items-start gap-2 text-sm text-[var(--og-muted)]">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FF4200]" />
                        {d}
                      </li>
                    ))}
                  </ul>

                  {/* Specs */}
                  <div className="mt-6 flex flex-wrap gap-3">
                    {path.specs.map((s) => (
                      <div
                        key={s.label}
                        className="rounded-xl border border-[#0B32A0]/20 bg-[#F3EFE7] px-4 py-2"
                      >
                        <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#FF4200]">
                          {s.label}
                        </p>
                        <p className="text-sm text-[var(--og-muted)]">{s.value}</p>
                      </div>
                    ))}
                  </div>

                  <Link
                    href={startProjectHref}
                    className="btn-og mt-8 inline-flex w-fit"
                  >
                    {path.cta}
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Which is right for you */}
      <Reveal className="bg-[var(--og-warm-grey)] px-4 py-16 md:px-8 md:py-20 lg:px-12">
        <section className="mx-auto max-w-6xl">
          <h2 className="text-4xl leading-tight md:text-5xl">
            Which is right for you?
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-[var(--og-muted)]">
            Not sure? Pick the path that matches your situation. Either way,
            we&apos;ll make sure you end up with goods worth keeping.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {/* Full Custom */}
            <div className="border border-[#FF4200]/30 bg-white p-6 md:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#FF4200]">
                Go with Full Custom if…
              </p>
              <ul className="mt-5 space-y-3">
                {chooseCrafted.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-base text-[var(--og-muted)]">
                    <span className="mt-1 text-[#FF4200]">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Turn */}
            <div className="border border-[#0B32A0]/30 bg-white p-6 md:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#0B32A0]">
                Go with Quick Turn if…
              </p>
              <ul className="mt-5 space-y-3">
                {chooseReadyMade.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-base text-[var(--og-muted)]">
                    <span className="mt-1 text-[#0B32A0]">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </Reveal>

      {/* Comparison table */}
      <Reveal className="px-4 py-16 md:px-8 md:py-20 lg:px-12">
        <section className="mx-auto max-w-4xl">
          <h2 className="text-4xl leading-tight md:text-5xl">At a glance</h2>
          <div className="mt-8 overflow-hidden border border-[#0B32A0]/20">
            <div className="grid grid-cols-3 bg-[var(--og-blue)] px-6 py-4 text-xs font-semibold uppercase tracking-[0.22em] text-white">
              <span />
              <span>Full Custom</span>
              <span>Quick Turn</span>
            </div>
            {comparisons.map((row, i) => (
              <div
                key={row.label}
                className={`grid grid-cols-3 px-6 py-4 text-sm ${
                  i % 2 === 0 ? "bg-white" : "bg-[#F3EFE7]"
                }`}
              >
                <span className="font-semibold text-[var(--og-ink)]">{row.label}</span>
                <span className="text-[var(--og-muted)]">{row.crafted}</span>
                <span className="text-[var(--og-muted)]">{row.readyMade}</span>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      <CTASection
        title="Still not sure? Just tell us what you're making."
        description="We'll sort out the right path together. Takes 2 minutes."
        buttonLabel="Get Started"
        buttonHref={startProjectHref}
      />
    </main>
  );
}
