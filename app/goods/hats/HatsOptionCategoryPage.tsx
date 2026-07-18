import Image from "next/image";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import type { HatsOptionCard } from "./options-data";

type HatsOptionCategoryPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  cards: HatsOptionCard[];
  compactCards?: boolean;
};

export function HatsOptionCategoryPage({
  eyebrow,
  title,
  description,
  cards,
  compactCards = false,
}: HatsOptionCategoryPageProps) {
  return (
    <main className="bg-[#F7F4ED] pb-24 md:pb-0">
      <div className="px-6 pt-6 md:px-12">
        <Link
          href="/goods/hats"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--og-blue)] hover:text-[var(--og-orange)]"
        >
          ← Back to custom hats
        </Link>
      </div>

      <section className="px-6 pb-8 pt-8 md:px-12">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--og-orange)]">
            {eyebrow}
          </p>
          <h1 className="mt-4 text-5xl font-semibold leading-none tracking-[-0.03em] text-[var(--og-blue)] md:text-7xl">
            {title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-7 text-[var(--og-muted)]">
            {description}
          </p>
        </div>
      </section>

      <section className="px-6 py-4 md:px-12">
        <div className="mx-auto grid max-w-6xl gap-5 lg:grid-cols-3">
          {cards.map((card) => (
            <a
              key={card.title}
              href={card.href ?? undefined}
              target={card.openInNewTab ? "_blank" : undefined}
              rel={card.openInNewTab ? "noreferrer" : undefined}
              className={`group block overflow-hidden rounded-[1.9rem] border-[3px] border-[#0B32A0] bg-white shadow-[8px_8px_0px_#0B32A0] transition ${
                card.href ? "hover:-translate-y-1" : ""
              }`}
            >
              <div className={`relative bg-[#d8c3aa] ${compactCards ? "aspect-[4/3]" : "aspect-[4/5]"}`}>
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  sizes="(min-width: 1024px) 30vw, 100vw"
                  className="object-cover scale-[1.08]"
                  style={{ objectPosition: card.imagePosition }}
                />
              </div>
              <div className={compactCards ? "p-5" : "p-6"}>
                <h2 className="text-3xl font-semibold leading-none text-[var(--og-blue)]">
                  {card.title}
                </h2>
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
                {card.href ? (
                  <p className="mt-5 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--og-blue)] transition group-hover:text-[var(--og-orange)]">
                    Open swatch deck
                  </p>
                ) : null}
              </div>
            </a>
          ))}
        </div>
      </section>

      <CTASection
        title="Ready to start your hat project?"
        description="Send the direction, quantity, and timeline. We will help narrow the rest."
        buttonLabel="Start a Project"
        buttonHref="/contact?product=hats&program=og-crafted"
      />
    </main>
  );
}
