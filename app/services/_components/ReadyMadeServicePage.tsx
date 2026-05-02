import Image from "next/image";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { Reveal } from "@/components/Reveal";

type AnchorLink = {
  label: string;
  href: string;
};

type Card = {
  title: string;
  body: string;
};

type Product = {
  name: string;
  description: string;
  image: string;
};

type GalleryItem = {
  title: string;
  image: string;
};

type Faq = {
  question: string;
  answer: string;
};

export type ReadyMadeServicePageContent = {
  eyebrow: string;
  hero: {
    title: string;
    description: string;
    image: string;
    alt: string;
    primaryHref: string;
  };
  overview: {
    title: string;
    cards: Card[];
  };
  process: {
    title: string;
    steps: Card[];
  };
  products: {
    title: string;
    items: Product[];
  };
  pricing: {
    title: string;
    description: string;
    cards: Card[];
    ctaHref: string;
  };
  gallery: {
    title: string;
    items: GalleryItem[];
  };
  faqs: Faq[];
  finalCta: {
    title: string;
    description: string;
    href: string;
  };
};

const anchorLinks: AnchorLink[] = [
  { label: "Overview", href: "#overview" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Products", href: "#products" },
  { label: "Pricing", href: "#pricing" },
  { label: "Gallery", href: "#gallery" },
  { label: "FAQ", href: "#faq" },
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
        <p className="mt-4 text-lg leading-8 text-[var(--og-muted)]">
          {description}
        </p>
      ) : null}
    </div>
  );
}

export function ReadyMadeServicePage({
  content,
}: {
  content: ReadyMadeServicePageContent;
}) {
  return (
    <main className="pb-24 md:pb-0">
      <section className="px-4 pb-8 pt-10 md:px-8 md:pt-16 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-8 overflow-hidden rounded-[2rem] border border-[var(--og-sand)] bg-[rgba(255,248,241,0.86)] p-6 shadow-[0_24px_80px_rgba(8,30,111,0.08)] backdrop-blur md:grid-cols-[1fr_0.9fr] md:p-8">
          <div className="flex flex-col justify-center">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--og-orange)]">
              {content.eyebrow}
            </p>
            <h1 className="mt-4 text-5xl font-semibold leading-none text-[var(--og-blue)] [font-family:var(--font-display)] md:text-7xl">
              {content.hero.title}
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-7 text-[var(--og-muted)] [font-family:var(--font-body)] md:text-xl">
              {content.hero.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={content.hero.primaryHref}
                className="inline-flex min-h-12 items-center rounded-xl bg-[var(--og-orange)] px-6 text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-[#d73b05]"
              >
                Start a Project
              </Link>
              <Link
                href="#pricing"
                className="inline-flex min-h-12 items-center rounded-xl bg-[var(--og-blue)] px-6 text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-[var(--og-dark-blue)]"
              >
                See Pricing
              </Link>
            </div>
          </div>
          <div className="relative min-h-[24rem] overflow-hidden rounded-[1.75rem] bg-[#d5bba2]">
            <Image
              src={content.hero.image}
              alt={content.hero.alt}
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
          {anchorLinks.map((item) => (
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
          <SectionHeader eyebrow="Overview" title={content.overview.title} />
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {content.overview.cards.map((card) => (
              <article
                key={card.title}
                className="rounded-[1.75rem] border border-[#0B32A0]/20 bg-[rgba(255,248,241,0.88)] p-6"
              >
                <h3 className="text-2xl font-semibold text-[var(--og-blue)]">
                  {card.title}
                </h3>
                <p className="mt-3 text-base leading-7 text-[var(--og-muted)]">
                  {card.body}
                </p>
              </article>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal className="px-4 py-8 md:px-8 lg:px-12">
        <section id="how-it-works" className="mx-auto max-w-6xl">
          <SectionHeader title={content.process.title} />
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {content.process.steps.map((step, index) => (
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
        <section id="products" className="mx-auto max-w-6xl">
          <SectionHeader title={content.products.title} />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {content.products.items.map((product) => (
              <article
                key={product.name}
                className="overflow-hidden rounded-[1.75rem] border border-[#0B32A0]/20 bg-[rgba(255,248,241,0.88)]"
              >
                <div className="relative aspect-[4/3] bg-[#d5bba2]">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-[var(--og-blue)]">
                    {product.name}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--og-muted)]">
                    {product.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal className="px-4 py-8 md:px-8 lg:px-12">
        <section id="pricing" className="mx-auto max-w-6xl">
          <SectionHeader
            title={content.pricing.title}
            description={content.pricing.description}
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {content.pricing.cards.map((card, index) => (
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
                <p className="mt-4 text-base leading-7 opacity-90">
                  {card.body}
                </p>
              </article>
            ))}
          </div>
          <Link
            href={content.pricing.ctaHref}
            className="mt-8 inline-flex min-h-12 items-center rounded-xl bg-[var(--og-orange)] px-6 text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-[#d73b05]"
          >
            Get a Quote
          </Link>
        </section>
      </Reveal>

      <Reveal className="px-4 py-8 md:px-8 lg:px-12">
        <section id="gallery" className="mx-auto max-w-6xl">
          <SectionHeader eyebrow="Gallery" title={content.gallery.title} />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {content.gallery.items.map((item) => (
              <article
                key={item.title}
                className="overflow-hidden rounded-[1.75rem] border border-[#0B32A0]/20 bg-[rgba(255,248,241,0.88)]"
              >
                <div className="relative aspect-[271/300] bg-[#d5bba2]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
              </article>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal className="px-4 py-8 md:px-8 lg:px-12">
        <section id="faq" className="mx-auto max-w-6xl">
          <SectionHeader title="FAQ" />
          <div className="mt-8 grid gap-3">
            {content.faqs.map((faq) => (
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
        title={content.finalCta.title}
        description={content.finalCta.description}
        buttonLabel="Start a Project"
        buttonHref={content.finalCta.href}
      />
    </main>
  );
}
