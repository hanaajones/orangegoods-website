import Image from "next/image";
import Link from "next/link";
import { ParallaxHeroBackground } from "@/components/ParallaxHeroBackground";
import { Reveal } from "@/components/Reveal";
import {
  ServiceProjectCarousel,
  type ServiceProjectCarouselItem,
} from "@/app/services/_components/ServiceProjectCarousel";
import {
  ServiceSnapCarousel,
  type ServiceSnapCarouselItem,
} from "@/app/services/_components/ServiceSnapCarousel";

export type Faq = {
  question: string;
  answer: string;
};

type ContentItem = {
  title: string;
  description?: string;
  eyebrow?: string;
  imageSrc?: string;
  imageAlt?: string;
  imagePosition?: string;
  imageScaleClass?: string;
  mediaType?: "image" | "video";
  videoPoster?: string;
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
  mediaType?: "image" | "video";
  poster?: string;
  position?: string;
};

type ContentSection = {
  eyebrow: string;
  eyebrowClassName?: string;
  title: string;
  description?: string;
  items: readonly ContentItem[];
  itemTone?: "light" | "dark";
  featurePhoto?: PhotoItem;
  backgroundImage?: string;
  backgroundImageAlt?: string;
  backgroundPosition?: string;
  backgroundMediaType?: "image" | "video";
  backgroundVideoPoster?: string;
};

type PhotoSection = {
  eyebrow: string;
  title: string;
  description?: string;
  photos: readonly PhotoItem[];
};

type BrandCard = {
  name: string;
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
  wrapClassName?: string;
  imageClassName?: string;
  textClassName?: string;
};

type BrandSection = {
  eyebrow: string;
  title: string;
  description?: string;
  footer?: string;
  backgroundImage: string;
  backgroundPosition?: string;
  brands: readonly BrandCard[];
};

type BuildPathCard = {
  title: string;
  description?: string;
  bullets: readonly string[];
  detail?: string;
  href?: string;
  ctaLabel?: string;
  imageSrc: string;
  imageAlt: string;
  imagePosition?: string;
  logoSrc: string;
  logoAlt: string;
  logoWidth: number;
  logoHeight: number;
  logoClassName?: string;
  accent: "orange" | "blue";
};

type BuildPathSection = {
  eyebrow: string;
  title: string;
  description?: string;
  cards: readonly BuildPathCard[];
};

type ProductCategoryPageProps = {
  title: string;
  subhead: string;
  image: string;
  imageAlt: string;
  startProjectHref?: string;
  heroImagePosition?: string;
  heroSubnote?: string | null;
  products: Array<string | ContentItem>;
  services?: Array<string | ContentItem>;
  servicesSectionEyebrow?: string;
  servicesSectionTitle?: string;
  servicesSectionTitleClassName?: string;
  faqs: Faq[];
  highlight?: string;
  heroEyebrow?: string;
  heroStats?: StatItem[];
  productSectionEyebrow?: string;
  productSectionTitle?: string;
  productSectionTitleClassName?: string;
  productSectionDescription?: string;
  productCarouselItems?: ServiceProjectCarouselItem[];
  productSnapCarouselItems?: ServiceSnapCarouselItem[];
  introSection?: ContentSection;
  brandSection?: BrandSection;
  buildPathSection?: BuildPathSection;
  photoSection?: PhotoSection;
  detailSection?: ContentSection;
  showBottomCta?: boolean;
  showFaqSection?: boolean;
};

const defaultStartProjectHref = "/create";
const customizeHref = "/goods/all";

function normalizeItem(item: string | ContentItem): ContentItem {
  return typeof item === "string" ? { title: item } : item;
}

function SectionHeader({
  eyebrow,
  eyebrowClassName,
  title,
  titleClassName,
  description,
  tone = "light",
}: {
  eyebrow: string;
  eyebrowClassName?: string;
  title: string;
  titleClassName?: string;
  description?: string;
  tone?: "light" | "dark";
}) {
  const isDark = tone === "dark";

  return (
    <div className="max-w-3xl">
      <p
        className={`font-body text-sm font-semibold uppercase tracking-[0.28em] ${
          eyebrowClassName ?? (isDark ? "text-[#FFB38E]" : "text-[var(--og-orange)]")
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-3 font-display text-4xl uppercase leading-none md:text-6xl ${titleClassName ?? ""} ${
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

export function ProductCategoryFaqSection({
  faqs,
  className = "px-4 py-10 md:px-8 md:py-16 lg:px-12",
}: {
  faqs: Faq[];
  className?: string;
}) {
  return (
    <Reveal className={className}>
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
      className={`overflow-hidden rounded-[1.5rem] border ${
        isDark
          ? "border-white/22 bg-[rgba(8,30,111,0.74)] text-white shadow-[0_24px_60px_rgba(0,0,0,0.24)] backdrop-blur-md"
          : "border-[#0B32A0]/20 bg-[rgba(255,248,241,0.88)] text-[var(--og-off-black)] shadow-[0_18px_50px_rgba(8,30,111,0.06)]"
      }`}
    >
      {item.imageSrc ? (
        <div className="relative min-h-[13rem] border-b border-[#0B32A0]/12">
          {item.mediaType === "video" ? (
            <video
              autoPlay
              className={`absolute inset-0 h-full w-full object-cover ${item.imageScaleClass ?? ""}`}
              loop
              muted
              playsInline
              poster={item.videoPoster}
              preload="metadata"
              style={{ objectPosition: item.imagePosition ?? "center" }}
              aria-label={item.imageAlt ?? item.title}
            >
              <source src={item.imageSrc} type="video/mp4" />
            </video>
          ) : (
            <Image
              src={item.imageSrc}
              alt={item.imageAlt ?? item.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
              className={`object-cover ${item.imageScaleClass ?? ""}`}
              style={{ objectPosition: item.imagePosition ?? "center" }}
            />
          )}
        </div>
      ) : null}
      <div className="p-5">
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
      </div>
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
        eyebrowClassName={section.eyebrowClassName}
        title={section.title}
        description={section.description}
        tone={tone}
      />
      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {section.items.map((item) => (
          <ContentCard
            key={item.title}
            item={item}
            tone={section.itemTone ?? tone}
          />
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
  startProjectHref = defaultStartProjectHref,
  heroImagePosition = "center",
  heroSubnote = "100+ piece MOQ",
  products,
  services = [],
  servicesSectionEyebrow = "Decoration",
  servicesSectionTitle = "How we decorate this",
  servicesSectionTitleClassName,
  faqs,
  highlight,
  heroEyebrow = "Custom Goods",
  heroStats,
  productSectionEyebrow = "Products",
  productSectionTitle = "What we make",
  productSectionTitleClassName,
  productSectionDescription,
  productCarouselItems,
  productSnapCarouselItems,
  introSection,
  brandSection,
  buildPathSection,
  photoSection,
  detailSection,
  showBottomCta = true,
  showFaqSection = true,
}: ProductCategoryPageProps) {
  const normalizedProducts = products.map(normalizeItem);
  const normalizedServices = services.map(normalizeItem);

  return (
    <main className="bg-[var(--og-cream)] pb-24 text-[var(--og-off-black)] md:pb-0">
      <section
        className="relative overflow-hidden bg-[#1C1C1C] px-4 py-16 text-white md:px-8 md:py-24 lg:px-12"
        aria-label={imageAlt}
      >
        <ParallaxHeroBackground image={image} position={heroImagePosition} />
        <div className="absolute inset-0 bg-[#1C1C1C]/34" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1C1C1C]/62 via-[#1C1C1C]/44 to-[#1C1C1C]/16" />
        <div className="relative mx-auto grid max-w-6xl gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <div className="max-w-3xl">
            <p className="hidden font-body text-sm font-semibold uppercase tracking-[0.28em] text-white/75 md:block">
              {heroEyebrow}
            </p>
            <h1 className="mt-3 font-display text-[2.8rem] uppercase leading-none text-[#FF4200] md:mt-5 md:text-6xl lg:text-7xl">
              {title}
            </h1>
            <p className="mt-6 max-w-xl font-body text-lg leading-8 text-white/82 md:text-xl">
              {subhead}
            </p>
            {heroSubnote ? (
              <p className="mt-4 font-body text-sm font-semibold uppercase tracking-[0.12em] text-white/78">
                {heroSubnote}
              </p>
            ) : null}
            {heroStats?.length ? (
              <div className="mt-10 grid max-w-3xl gap-3 sm:grid-cols-3">
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
          <div className="flex flex-wrap gap-3 lg:justify-end lg:self-end">
            <Link href={startProjectHref} className="btn-og-white">
              Start a Project
            </Link>
            <Link
              href={customizeHref}
              className="inline-flex items-center justify-center rounded-xl border-2 border-white/72 bg-white/10 px-6 py-3 text-sm font-semibold uppercase tracking-[0.1em] text-white transition hover:-translate-y-[2px] hover:border-white hover:bg-white hover:text-[var(--og-blue)]"
            >
              Customize
            </Link>
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
                    {photo.mediaType === "video" ? (
                      <video
                        autoPlay
                        className="absolute inset-0 h-full w-full object-cover"
                        loop
                        muted
                        playsInline
                        poster={photo.poster}
                        preload="metadata"
                        style={{ objectPosition: photo.position ?? "center" }}
                      >
                        <source src={photo.src} type="video/mp4" />
                      </video>
                    ) : (
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                        className="object-cover"
                        style={{ objectPosition: photo.position ?? "center" }}
                      />
                    )}
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

      {brandSection ? (
        <Reveal className="relative isolate overflow-hidden px-4 py-14 md:px-8 md:py-18 lg:px-12">
          <div className="absolute inset-0 -z-30">
            <Image
              src={brandSection.backgroundImage}
              alt=""
              fill
              sizes="100vw"
              className="object-cover"
              style={{ objectPosition: brandSection.backgroundPosition ?? "center" }}
              aria-hidden="true"
            />
          </div>
          <div className="absolute inset-0 -z-20 bg-[#3D312C]/46" aria-hidden="true" />
          <div
            className="absolute inset-0 -z-10"
            style={{
              background:
                "radial-gradient(circle at top left, rgba(255,255,255,0.12), transparent 34%), linear-gradient(180deg, rgba(28,28,28,0.04), rgba(28,28,28,0.18))",
            }}
            aria-hidden="true"
          />
          <section className="mx-auto max-w-6xl">
            <div className="grid gap-8 rounded-[2rem] border border-white/30 bg-[rgba(255,249,243,0.93)] p-6 shadow-[0_24px_80px_rgba(8,30,111,0.16)] backdrop-blur-[2px] md:p-8">
              <SectionHeader
                eyebrow={brandSection.eyebrow}
                title={brandSection.title}
                description={brandSection.description}
              />

              <div className="grid gap-4 md:grid-cols-3">
                {brandSection.brands.map((brand) => {
                  const isSvg = brand.src?.endsWith(".svg") ?? false;

                  return (
                    <article
                      key={brand.name}
                      className={`flex min-h-[9.5rem] items-center justify-center rounded-[1.5rem] border border-[#0B32A0]/12 p-6 shadow-[4px_4px_0px_#0B32A0] ${
                        brand.wrapClassName ?? "bg-white"
                      }`}
                    >
                      {brand.src ? (
                        <Image
                          src={brand.src}
                          alt={brand.alt ?? brand.name}
                          width={brand.width ?? 220}
                          height={brand.height ?? 44}
                          loading={isSvg ? "eager" : undefined}
                          unoptimized={isSvg}
                          className={brand.imageClassName ?? "h-10 w-auto"}
                        />
                      ) : (
                        <span
                          className={
                            brand.textClassName ??
                            "font-display text-4xl uppercase tracking-[0.08em] text-[var(--og-blue)] md:text-5xl"
                          }
                        >
                          {brand.name}
                        </span>
                      )}
                    </article>
                  );
                })}
              </div>

              {brandSection.footer ? (
                <p className="text-sm leading-6 text-[#676767]">
                  {brandSection.footer}
                </p>
              ) : null}
            </div>
          </section>
        </Reveal>
      ) : null}

      {buildPathSection ? (
        <Reveal className="px-4 pb-10 pt-4 md:px-8 md:pb-16 md:pt-6 lg:px-12">
          <section className="mx-auto max-w-6xl">
            <SectionHeader
              eyebrow={buildPathSection.eyebrow}
              title={buildPathSection.title}
              description={buildPathSection.description}
            />
            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              {buildPathSection.cards.map((card) => {
                const accentClasses =
                  card.accent === "orange"
                    ? {
                        border: "border-[#FF4200]/24",
                        dot: "bg-[#FF4200]",
                        detail: "text-[#FF4200]",
                        title: "text-[#FF4200]",
                      }
                    : {
                        border: "border-[#0B32A0]/24",
                        dot: "bg-[#0B32A0]",
                        detail: "text-[#0B32A0]",
                        title: "text-[var(--og-blue)]",
                      };

                return (
                  <article
                    key={card.title}
                    className={`overflow-hidden rounded-[1.75rem] border bg-white shadow-[0_24px_60px_rgba(8,30,111,0.06)] ${accentClasses.border}`}
                  >
                    <div className="relative min-h-[18rem] border-b border-[#0B32A0]/12">
                      <Image
                        src={card.imageSrc}
                        alt={card.imageAlt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover"
                        style={{ objectPosition: card.imagePosition ?? "center" }}
                      />
                    </div>
                    <div className="p-6 md:p-7">
                      <div className="flex flex-wrap items-center justify-between gap-4">
                        <Image
                          src={card.logoSrc}
                          alt={card.logoAlt}
                          width={card.logoWidth}
                          height={card.logoHeight}
                          className={card.logoClassName ?? "h-8 w-auto md:h-10"}
                        />
                        {card.detail ? (
                          <p className={`font-body text-xs font-semibold uppercase tracking-[0.16em] ${accentClasses.detail}`}>
                            {card.detail}
                          </p>
                        ) : null}
                      </div>
                      <h3 className={`mt-5 font-display text-3xl uppercase leading-none ${accentClasses.title}`}>
                        {card.title}
                      </h3>
                      {card.description ? (
                        <p className="mt-4 font-body text-sm leading-7 text-[var(--og-muted)] md:text-base">
                          {card.description}
                        </p>
                      ) : null}
                      <ul className="mt-5 space-y-3">
                        {card.bullets.map((bullet) => (
                          <li
                            key={bullet}
                            className="flex items-start gap-3 font-body text-sm leading-7 text-[var(--og-muted)] md:text-base"
                          >
                            <span className={`mt-[0.72rem] h-1.5 w-1.5 shrink-0 rounded-full ${accentClasses.dot}`} />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                      {card.href && card.ctaLabel ? (
                        <div className="mt-6">
                          <Link
                            href={card.href}
                            className={`inline-flex min-h-11 items-center rounded-full border px-5 text-xs font-semibold uppercase tracking-[0.14em] transition ${
                              card.accent === "orange"
                                ? "border-[#FF4200]/28 text-[#FF4200] hover:border-[#FF4200] hover:bg-[#FF4200] hover:text-white"
                                : "border-[#0B32A0]/24 text-[var(--og-blue)] hover:border-[var(--og-blue)] hover:bg-[var(--og-blue)] hover:text-white"
                            }`}
                          >
                            {card.ctaLabel}
                          </Link>
                        </div>
                      ) : null}
                    </div>
                  </article>
                );
              })}
            </div>
          </section>
        </Reveal>
      ) : null}

      {productSnapCarouselItems?.length ? (
        <>
          <ServiceSnapCarousel
            eyebrow={productSectionEyebrow}
            title={productSectionTitle}
            description={productSectionDescription}
            items={productSnapCarouselItems}
            titleClassName={productSectionTitleClassName}
          />
          {highlight ? (
            <Reveal className="px-4 py-2 md:px-8 md:py-4 lg:px-12">
              <section className="mx-auto max-w-6xl">
                <div className="rounded-[1.5rem] border border-[#FF4200] bg-[#0B32A0] p-6 text-white">
                  <p className="font-body text-lg font-semibold leading-8">
                    {highlight}
                  </p>
                </div>
              </section>
            </Reveal>
          ) : null}
        </>
      ) : productCarouselItems?.length ? (
        <>
          <ServiceProjectCarousel
            eyebrow={productSectionEyebrow}
            title={productSectionTitle}
            description={productSectionDescription}
            items={productCarouselItems}
            showCtaBadge={false}
          />
          {highlight ? (
            <Reveal className="px-4 py-2 md:px-8 md:py-4 lg:px-12">
              <section className="mx-auto max-w-6xl">
                <div className="rounded-[1.5rem] border border-[#FF4200] bg-[#0B32A0] p-6 text-white">
                  <p className="font-body text-lg font-semibold leading-8">
                    {highlight}
                  </p>
                </div>
              </section>
            </Reveal>
          ) : null}
        </>
      ) : (
        <Reveal className="px-4 py-14 md:px-8 md:py-20 lg:px-12">
          <section className="mx-auto max-w-6xl">
            <SectionHeader
              eyebrow={productSectionEyebrow}
              title={productSectionTitle}
              titleClassName={productSectionTitleClassName}
              description={productSectionDescription}
            />
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
      )}

      {normalizedServices.length ? (
        <Reveal className="px-4 py-10 md:px-8 md:py-16 lg:px-12">
          <section className="mx-auto max-w-6xl">
            <SectionHeader
              eyebrow={servicesSectionEyebrow}
              title={servicesSectionTitle}
              titleClassName={servicesSectionTitleClassName}
            />
            <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {normalizedServices.map((service) => (
                <article
                  key={service.title}
                  className="overflow-hidden rounded-[1.5rem] border border-[#0B32A0]/20 bg-white/70"
                >
                  {service.imageSrc ? (
                    <div className="relative min-h-[13rem] border-b border-[#0B32A0]/12">
                      <Image
                        src={service.imageSrc}
                        alt={service.imageAlt ?? service.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                        className={`object-cover ${service.imageScaleClass ?? ""}`}
                        style={{ objectPosition: service.imagePosition ?? "center" }}
                      />
                    </div>
                  ) : null}
                  <div className="p-5">
                    {!service.imageSrc ? (
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FF4200] font-display text-xl uppercase text-white">
                        {service.title.slice(0, 1)}
                      </div>
                    ) : null}
                    {service.eyebrow ? (
                      <p className="mt-5 font-body text-xs font-semibold uppercase tracking-[0.2em] text-[var(--og-orange)]">
                        {service.eyebrow}
                      </p>
                    ) : null}
                    <h3 className={`${service.imageSrc ? "mt-0" : "mt-3"} font-display text-2xl uppercase leading-none text-[var(--og-blue)]`}>
                      {service.title}
                    </h3>
                    {service.description ? (
                      <p className="mt-4 font-body text-sm leading-7 text-[var(--og-muted)]">
                        {service.description}
                      </p>
                    ) : null}
                  </div>
                </article>
              ))}
            </div>
          </section>
        </Reveal>
      ) : null}

      {detailSection ? (
        <Reveal className="px-4 py-10 md:px-8 md:py-16 lg:px-12">
          <section
            className={`relative isolate mx-auto max-w-6xl overflow-hidden rounded-[2rem] px-6 py-10 text-white md:px-10 md:py-12 ${
              detailSection.backgroundImage ? "bg-[#16336F]" : "bg-[#1234A6]"
            }`}
          >
            {detailSection.backgroundImage ? (
              <>
                <div className="absolute inset-0 -z-30">
                  {detailSection.backgroundMediaType === "video" ? (
                    <video
                      autoPlay
                      className="h-full w-full object-cover"
                      loop
                      muted
                      playsInline
                      poster={detailSection.backgroundVideoPoster}
                      preload="metadata"
                      style={{
                        objectPosition: detailSection.backgroundPosition ?? "center",
                      }}
                      aria-hidden="true"
                    >
                      <source src={detailSection.backgroundImage} type="video/mp4" />
                    </video>
                  ) : (
                    <Image
                      src={detailSection.backgroundImage}
                      alt={detailSection.backgroundImageAlt ?? ""}
                      fill
                      sizes="(max-width: 768px) 100vw, 1200px"
                      className="object-cover"
                      style={{
                        objectPosition: detailSection.backgroundPosition ?? "center",
                      }}
                      aria-hidden={detailSection.backgroundImageAlt ? undefined : "true"}
                    />
                  )}
                </div>
              </>
            ) : null}
            <ContentSectionBlock section={detailSection} tone="dark" />
            {detailSection.featurePhoto ? (
              <div className="relative mt-8 min-h-[18rem] overflow-hidden rounded-[1.75rem] border border-white/15 shadow-[0_24px_60px_rgba(0,0,0,0.2)] md:min-h-[24rem]">
                <Image
                  src={detailSection.featurePhoto.src}
                  alt={detailSection.featurePhoto.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 1200px"
                  className="object-cover"
                  style={{
                    objectPosition:
                      detailSection.featurePhoto.position ?? "center",
                  }}
                />
              </div>
            ) : null}
          </section>
        </Reveal>
      ) : null}

      {showFaqSection ? <ProductCategoryFaqSection faqs={faqs} /> : null}

      {showBottomCta ? (
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
            <Link href={startProjectHref} className="btn-og shrink-0">
              Start a Project
            </Link>
            <Link
              href={customizeHref}
              className="inline-flex shrink-0 items-center justify-center rounded-xl border-2 border-white/72 bg-transparent px-6 py-3 text-sm font-semibold uppercase tracking-[0.1em] text-white transition hover:-translate-y-[2px] hover:border-white hover:bg-white hover:text-[#1C1C1C]"
            >
              Customize
            </Link>
          </div>
        </section>
      ) : null}
    </main>
  );
}
