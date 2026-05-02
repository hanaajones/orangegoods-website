import Image from "next/image";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { Gallery } from "@/components/Gallery";
import { Reveal } from "@/components/Reveal";
import {
  buildOnlineHref,
  hatAnchorLinks,
  hatCallouts,
  hatDecoration,
  hatFaqs,
  hatGallery,
  hatHero,
  hatMaterials,
  hatPricing,
  hatProcess,
  hatStyles,
} from "@/lib/content";

const startHatsHref = "mailto:hello@orangegoods.co?subject=Custom%20Hats";

function SectionHeader({
  eyebrow,
  title,
}: {
  eyebrow?: string;
  title: string;
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
    </div>
  );
}

export default function HatsPage() {
  return (
    <main className="pb-24 md:pb-0">
      <section className="px-4 pb-8 pt-10 md:px-8 md:pt-16 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-8 overflow-hidden rounded-[2rem] border border-[var(--og-sand)] bg-[rgba(255,248,241,0.86)] p-6 shadow-[0_24px_80px_rgba(8,30,111,0.08)] backdrop-blur md:grid-cols-[1fr_0.9fr] md:p-8">
          <div className="flex flex-col justify-center">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--og-orange)]">
              Custom Hats
            </p>
            <h1 className="mt-4 text-5xl font-semibold leading-none tracking-[-0.04em] text-[var(--og-blue)] md:text-7xl">
              {hatHero.title}
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-7 text-[var(--og-muted)] md:text-xl">
              {hatHero.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={startHatsHref}
                className="inline-flex min-h-12 items-center rounded-full bg-[var(--og-orange)] px-6 text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-[#d73b05]"
              >
                Start a Project
              </Link>
              <Link
                href={`${buildOnlineHref}hats`}
                className="inline-flex min-h-12 items-center rounded-full bg-[var(--og-blue)] px-6 text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-[var(--og-dark-blue)]"
              >
                Build Online
              </Link>
            </div>
          </div>
          <div className="relative min-h-[24rem] overflow-hidden rounded-[1.75rem] bg-[#d5bba2]">
            <Image
              src={hatHero.image}
              alt="Orange Goods custom hat"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <div className="sticky top-[5.75rem] z-30 border-y border-[#0B32A0]/20 bg-[rgba(251,247,241,0.9)] px-4 py-3 backdrop-blur md:px-8 lg:px-12">
        <nav className="mx-auto flex max-w-6xl gap-2 overflow-x-auto">
          {hatAnchorLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="inline-flex min-h-10 shrink-0 items-center rounded-full border border-[#0B32A0]/20 px-4 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--og-blue)] transition hover:border-[var(--og-orange)] hover:text-[var(--og-orange)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      <Reveal className="px-4 py-10 md:px-8 lg:px-12">
        <section id="overview" className="mx-auto max-w-6xl">
          <SectionHeader eyebrow="Overview" title="Built to spec." />
          <p className="mt-5 max-w-3xl text-lg leading-8 text-[var(--og-muted)]">
            Orange Goods custom hats are built to spec - your fabric, your
            shape, your finish. We handle design, production, and delivery from
            a single point of contact.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {hatCallouts.map((callout) => (
              <article
                key={callout.title}
                className="rounded-[1.75rem] border border-[#0B32A0]/20 bg-[rgba(255,248,241,0.88)] p-6"
              >
                <h3 className="text-2xl font-semibold text-[var(--og-blue)]">
                  {callout.title}
                </h3>
                <p className="mt-3 text-base leading-7 text-[var(--og-muted)]">
                  {callout.body}
                </p>
              </article>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal className="px-4 py-8 md:px-8 lg:px-12">
        <section id="pricing" className="mx-auto max-w-6xl">
          <SectionHeader title="Transparent pricing. No surprises." />
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {hatPricing.map((card, index) => (
              <article
                key={card.title}
                className={`rounded-[2rem] border p-6 md:p-8 ${
                  index === 0
                    ? "border-[var(--og-orange)] bg-[var(--og-dark-blue)] text-[#f7f1e8]"
                    : "border-[var(--og-blue)] bg-[rgba(255,248,241,0.88)] text-[var(--og-off-black)]"
                }`}
              >
                <p
                  className={`text-sm font-semibold uppercase tracking-[0.24em] ${
                    index === 0 ? "text-[var(--og-orange)]" : "text-[var(--og-blue)]"
                  }`}
                >
                  {card.title}
                </p>
                <p className="mt-4 text-4xl font-semibold">{card.price}</p>
                <p className="mt-1 text-sm uppercase tracking-[0.16em] opacity-70">
                  {card.note}
                </p>
                <ul className="mt-6 grid gap-3">
                  {card.features.map((feature) => (
                    <li key={feature} className="text-base leading-7 opacity-90">
                      {feature}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal className="px-4 py-8 md:px-8 lg:px-12">
        <section id="styles" className="mx-auto max-w-6xl">
          <SectionHeader title="Hat styles." />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {hatStyles.map((style) => (
              <article
                key={style.name}
                className="overflow-hidden rounded-[1.75rem] border border-[#0B32A0]/20 bg-[rgba(255,248,241,0.88)]"
              >
                <div className="relative aspect-[4/3] bg-[#d5bba2]">
                  <Image
                    src={style.image}
                    alt={style.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <h3 className="p-5 text-xl font-semibold text-[var(--og-blue)]">
                  {style.name}
                </h3>
              </article>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal className="px-4 py-8 md:px-8 lg:px-12">
        <section id="materials" className="mx-auto max-w-6xl">
          <SectionHeader title="Materials." />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {hatMaterials.map((material) => (
              <article
                key={material.name}
                className="rounded-[1.5rem] border border-[#0B32A0]/20 bg-[rgba(255,248,241,0.88)] p-5"
              >
                <div className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full bg-[var(--og-orange)] text-sm font-black text-white">
                  {material.name.slice(0, 1)}
                </div>
                <h3 className="mt-4 text-xl font-semibold text-[var(--og-blue)]">
                  {material.name}
                </h3>
                <p className="mt-2 text-sm leading-6 text-[var(--og-muted)]">
                  {material.description}
                </p>
              </article>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal className="px-4 py-8 md:px-8 lg:px-12">
        <section id="decoration" className="mx-auto max-w-6xl">
          <SectionHeader title="Decoration options." />
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {hatDecoration.map((group) => (
              <article
                key={group.title}
                className="rounded-[1.75rem] border border-[#0B32A0]/20 bg-[rgba(255,248,241,0.88)] p-6"
              >
                <h3 className="text-2xl font-semibold text-[var(--og-blue)]">
                  {group.title}
                </h3>
                <ul className="mt-5 grid gap-3">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full bg-[#efe2d2] px-4 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-[var(--og-muted)]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>
      </Reveal>

      <Gallery
        id="gallery"
        eyebrow="From the shop"
        title="From the shop."
        description="Recent product, decoration, packaging, and finishing work."
        items={hatGallery}
      />

      <Reveal className="px-4 py-8 md:px-8 lg:px-12">
        <section id="process" className="mx-auto max-w-6xl">
          <SectionHeader title="How it works." />
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
          <SectionHeader title="FAQ." />
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
        description="Share your style, quantity, timeline, and artwork. We'll shape the plan from there."
        buttonLabel="Start a Project"
        buttonHref={startHatsHref}
      />
    </main>
  );
}
