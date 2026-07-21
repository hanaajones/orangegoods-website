import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";

type Faq = {
  question: string;
  answer: string;
};

type ContentItem = {
  title: string;
  description?: string;
  eyebrow?: string;
};

type StatItem = {
  value: string;
  label: string;
};

type PhotoItem = {
  src: string;
  alt: string;
  caption?: string;
  tall?: boolean;
};

type ContentSection = {
  eyebrow: string;
  title: string;
  description?: string;
  items: ContentItem[];
};

type PhotoSection = {
  eyebrow: string;
  title: string;
  description?: string;
  photos: PhotoItem[];
};

type ProductCategoryPageProps = {
  title: string;
  subhead: string;
  image: string;
  imageAlt: string;
  products: Array<string | ContentItem>;
  services: Array<string | ContentItem>;
  faqs: Faq[];
  highlight?: string;
  heroEyebrow?: string;
  heroStats?: StatItem[];
  heroNoteLabel?: string;
  heroNote?: string;
  introSection?: ContentSection;
  photoSection?: PhotoSection;
  detailSection?: ContentSection;
};

const contactHref = "/contact";

function normalizeItem(item: string | ContentItem): ContentItem {
  return typeof item === "string" ? { title: item } : item;
}

function SectionHeader({
  eyebrow,
  title,
  description,
  tone = "light",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  tone?: "light" | "dark";
}) {
  const isDark = tone === "dark";

  return (
    <div className="max-w-3xl">
      <p
        className={`font-body text-sm font-semibold uppercase tracking-[0.28em] ${
          isDark ? "text-[#FFB38E]" : "text-[var(--og-orange)]"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-3 font-display text-4xl uppercase leading-none md:text-6xl ${
          isDark ? "text-white" : "text-[var(--og-blue)]"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-5 max-w-2xl font-body text-base leading-7 md:text-lg ${
            isDark ? "text-white/76" : "text-[var(--og-muted)]"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}

function ContentCard({
  item,
  index,
  tone = "light",
}: {
  item: ContentItem;
  index?: number;
  tone?: "light" | "dark";
}) {
  const isDark = tone === "dark";

  return (
    <article
      className={`rounded-[1.5rem] border p-5 ${
        isDark
          ? "border-white/15 bg-white/[0.08] text-white shadow-[0_18px_50px_rgba(0,0,0,0.16)]"
          : "border-[#0B32A0]/20 bg-[rgba(255,248,241,0.88)] text-[var(--og-off-black)] shadow-[0_18px_50px_rgba(8,30,111,0.06)]"
      }`}
    >
      {item.eyebrow ? (
        <p
          className={`font-body text-xs font-semibold uppercase tracking-[0.2em] ${
            isDark ? "text-white/68" : "text-[var(--og-orange)]"
          }`}
        >
          {item.eyebrow}
        </p>
      ) : index !== undefined ? (
        <p
          className={`font-body text-sm font-semibold uppercase tracking-[0.22em] ${
            isDark ? "text-[#FFB38E]" : "text-[var(--og-orange)]"
          }`}
        >
          {String(index + 1).padStart(2, "0")}
        </p>
      ) : null}
      <h3
        className={`mt-4 font-display text-3xl uppercase leading-none ${
          isDark ? "text-white" : "text-[var(--og-blue)]"
        }`}
      >
        {item.title}
      </h3>
      {item.description ? (
        <p
          className={`mt-4 font-body text-sm leading-7 md:text-base ${
            isDark ? "text-white/76" : "text-[var(--og-muted)]"
          }`}
        >
          {item.description}
        </p>
      ) : null}
    </article>
  );
}

function ContentSectionBlock({
  section,
  tone = "light",
}: {
  section: ContentSection;
  tone?: "light" | "dark";
}) {
  return (
    <>
      <SectionHeader
        eyebrow={section.eyebrow}
        title={section.title}
        description={section.description}
        tone={tone}
      />
      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {section.items.map((item) => (
          <ContentCard key={item.title} item={item} tone={tone} />
        ))}
      </div>
    </>
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
  heroEyebrow = "Custom Goods",
  heroStats,
  heroNoteLabel = "Orange Goods",
  heroNote = "Built to feel like part of the program, not an afterthought add-on.",
  introSection,
  photoSection,
  detailSection,
}: ProductCategoryPageProps) {
  const normalizedProducts = products.map(normalizeItem);
  const normalizedServices = services.map(normalizeItem);

  return (
    <main className="bg-[var(--og-cream)] pb-24 text-[var(--og-off-black)] md:pb-0">
      <section className="overflow-hidden bg-[#0B32A0] px-4 py-12 text-white md:px-8 md:py-20 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[1fr_0.9fr] md:items-center">
          <div>
            <p className="font-body text-sm font-semibold uppercase tracking-[0.28em] text-white/70">
              {heroEyebrow}
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
            {heroStats?.length ? (
              <div className="mt-10 grid gap-3 sm:grid-cols-3">
                {heroStats.map((stat) => (
                  <div
                    key={`${stat.value}-${stat.label}`}
                    className="rounded-[1.4rem] border border-white/16 bg-white/10 px-4 py-4 backdrop-blur-sm"
                  >
                    <p className="font-display text-3xl uppercase leading-none text-white">
                      {stat.value}
                    </p>
                    <p className="mt-2 font-body text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            ) : null}
          </div>
          <div className="relative min-h-[22rem] overflow-hidden rounded-[1.75rem] bg-[#d8c3aa] md:min-h-[30rem]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.18),_transparent_40%)]" />
            <Image
              src={image}
              alt={imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, 46vw"
              className="object-cover"
              priority
            />
            <div className="absolute inset-x-4 bottom-4 rounded-[1.4rem] border border-white/24 bg-[#0B32A0]/78 p-4 text-white backdrop-blur-sm md:inset-x-6 md:bottom-6">
              <p className="font-body text-xs font-semibold uppercase tracking-[0.18em] text-white/66">
                {heroNoteLabel}
              </p>
              <p className="mt-2 font-noir-alt text-sm font-medium leading-6 text-white/88 md:text-base">
                {heroNote}
              </p>
            </div>
          </div>
        </div>
      </section>

      {introSection ? (
        <Reveal className="px-4 py-14 md:px-8 md:py-20 lg:px-12">
          <section className="mx-auto max-w-6xl">
            <ContentSectionBlock section={introSection} />
          </section>
        </Reveal>
      ) : null}

      {photoSection ? (
        <Reveal className="px-4 py-4 md:px-8 md:py-6 lg:px-12">
          <section className="mx-auto max-w-6xl">
            <SectionHeader
              eyebrow={photoSection.eyebrow}
              title={photoSection.title}
              description={photoSection.description}
            />
            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {photoSection.photos.map((photo) => (
                <figure
                  key={photo.src}
                  className={`overflow-hidden rounded-[1.5rem] border border-[#0B32A0]/16 bg-white/70 ${
                    photo.tall ? "xl:row-span-2" : ""
                  }`}
                >
                  <div className={`relative ${photo.tall ? "min-h-[28rem]" : "min-h-[18rem]"}`}>
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                      className="object-cover"
                    />
                  </div>
                  {photo.caption ? (
                    <figcaption className="px-4 py-3 font-body text-sm leading-6 text-[var(--og-muted)]">
                      {photo.caption}
                    </figcaption>
                  ) : null}
                </figure>
              ))}
            </div>
          </section>
        </Reveal>
      ) : null}

      <Reveal className="px-4 py-14 md:px-8 md:py-20 lg:px-12">
        <section className="mx-auto max-w-6xl">
          <SectionHeader eyebrow="Products" title="What we make" />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {normalizedProducts.map((product, index) => (
              <ContentCard
                key={product.title}
                item={product}
                index={index}
              />
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
            {normalizedServices.map((service) => (
              <article
                key={service.title}
                className="rounded-[1.5rem] border border-[#0B32A0]/20 bg-white/70 p-5"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FF4200] font-display text-xl uppercase text-white">
                  {service.title.slice(0, 1)}
                </div>
                {service.eyebrow ? (
                  <p className="mt-5 font-body text-xs font-semibold uppercase tracking-[0.2em] text-[var(--og-orange)]">
                    {service.eyebrow}
                  </p>
                ) : null}
                <h3 className="mt-3 font-display text-2xl uppercase leading-none text-[var(--og-blue)]">
                  {service.title}
                </h3>
                {service.description ? (
                  <p className="mt-4 font-body text-sm leading-7 text-[var(--og-muted)]">
                    {service.description}
                  </p>
                ) : null}
              </article>
            ))}
          </div>
        </section>
      </Reveal>

      {detailSection ? (
        <Reveal className="px-4 py-10 md:px-8 md:py-16 lg:px-12">
          <section className="mx-auto max-w-6xl rounded-[2rem] bg-[#1234A6] px-6 py-10 text-white md:px-10 md:py-12">
            <ContentSectionBlock section={detailSection} tone="dark" />
          </section>
        </Reveal>
      ) : null}

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
