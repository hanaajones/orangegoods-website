import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";

type Faq = {
  question: string;
  answer: string;
};

type ProductCategoryPageProps = {
  title: string;
  subhead: string;
  image: string;
  imageAlt: string;
  products: string[];
  services: string[];
  faqs: Faq[];
  highlight?: string;
};

const contactHref = "/contact";

function SectionHeader({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="font-body text-sm font-semibold uppercase tracking-[0.28em] text-[var(--og-orange)]">
        {eyebrow}
      </p>
      <h2 className="mt-3 font-display text-4xl uppercase leading-none text-[var(--og-blue)] md:text-6xl">
        {title}
      </h2>
    </div>
  );
}

export function ProductCategoryPage({
  title,
  subhead,
  image,
  imageAlt,
  products,
  services,
  faqs,
  highlight,
}: ProductCategoryPageProps) {
  return (
    <main className="bg-[var(--og-cream)] pb-24 text-[var(--og-off-black)] md:pb-0">
      <section className="bg-[#0B32A0] px-4 py-12 text-white md:px-8 md:py-20 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[1fr_0.9fr] md:items-center">
          <div>
            <p className="font-body text-sm font-semibold uppercase tracking-[0.28em] text-white/70">
              Custom Goods
            </p>
            <h1 className="mt-5 font-display text-5xl uppercase leading-none text-[#FF4200] md:text-6xl lg:text-7xl">
              {title}
            </h1>
            <p className="mt-6 max-w-2xl font-body text-lg leading-8 text-white/85 md:text-xl">
              {subhead}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link href={contactHref} className="btn-og-white">
                Start a Project
              </Link>
              <p className="font-body text-sm font-semibold uppercase tracking-[0.18em] text-white/65">
                100+ piece MOQ
              </p>
            </div>
          </div>
          <div className="relative min-h-[22rem] overflow-hidden rounded-[1.75rem] bg-[#d8c3aa] md:min-h-[30rem]">
            <Image
              src={image}
              alt={imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, 46vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <Reveal className="px-4 py-14 md:px-8 md:py-20 lg:px-12">
        <section className="mx-auto max-w-6xl">
          <SectionHeader eyebrow="Products" title="What we make" />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product, index) => (
              <article
                key={product}
                className="min-h-36 rounded-[1.5rem] border border-[#0B32A0]/20 bg-[rgba(255,248,241,0.88)] p-5 shadow-[0_18px_50px_rgba(8,30,111,0.06)]"
              >
                <p className="font-body text-sm font-semibold uppercase tracking-[0.22em] text-[var(--og-orange)]">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-5 font-display text-3xl uppercase leading-none text-[var(--og-blue)]">
                  {product}
                </h3>
              </article>
            ))}
          </div>
          {highlight ? (
            <div className="mt-6 rounded-[1.5rem] border border-[#FF4200] bg-[#0B32A0] p-6 text-white">
              <p className="font-body text-lg font-semibold leading-8">
                {highlight}
              </p>
            </div>
          ) : null}
        </section>
      </Reveal>

      <Reveal className="px-4 py-10 md:px-8 md:py-16 lg:px-12">
        <section className="mx-auto max-w-6xl">
          <SectionHeader eyebrow="Decoration" title="How we decorate this" />
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <article
                key={service}
                className="rounded-[1.5rem] border border-[#0B32A0]/20 bg-white/70 p-5"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FF4200] font-display text-xl uppercase text-white">
                  {service.slice(0, 1)}
                </div>
                <h3 className="mt-5 font-display text-2xl uppercase leading-none text-[var(--og-blue)]">
                  {service}
                </h3>
              </article>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal className="px-4 py-10 md:px-8 md:py-16 lg:px-12">
        <section className="mx-auto max-w-6xl">
          <SectionHeader eyebrow="FAQ" title="Good to know" />
          <div className="mt-8 grid gap-3">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="rounded-[1.5rem] border border-[#0B32A0]/20 bg-[rgba(255,248,241,0.88)] p-5"
              >
                <summary className="cursor-pointer font-body text-lg font-semibold text-[var(--og-blue)]">
                  {faq.question}
                </summary>
                <p className="mt-3 font-body text-base leading-7 text-[var(--og-muted)]">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </section>
      </Reveal>

      <section className="bg-[#1C1C1C] px-4 py-16 text-white md:px-8 md:py-20 lg:px-12">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-body text-sm font-semibold uppercase tracking-[0.28em] text-[#FF4200]">
              Start with the goal
            </p>
            <h2 className="mt-4 max-w-3xl font-display text-5xl uppercase leading-none md:text-7xl">
              Ready to build {title.toLowerCase()}?
            </h2>
          </div>
          <Link href={contactHref} className="btn-og shrink-0">
            Start a Project
          </Link>
        </div>
      </section>
    </main>
  );
}
