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

type Faq = {
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
  title: string;
  description?: string;
  items: ContentItem[];
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
  photos: PhotoItem[];
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
  brands: BrandCard[];
};

type ProductCategoryPageProps = {
  title: string;
  subhead: string;
  image: string;
  imageAlt: string;
  heroImagePosition?: string;
  heroSubnote?: string | null;
  products: Array<string | ContentItem>;
  services?: Array<string | ContentItem>;
  faqs: Faq[];
  highlight?: string;
  heroEyebrow?: string;
  heroStats?: StatItem[];
  productSectionEyebrow?: string;
  productSectionTitle?: string;
  productSectionDescription?: string;
  productCarouselItems?: ServiceProjectCarouselItem[];
  productSnapCarouselItems?: ServiceSnapCarouselItem[];
  introSection?: ContentSection;
  brandSection?: BrandSection;
  photoSection?: PhotoSection;
  detailSection?: ContentSection;
  showBottomCta?: boolean;
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
      className={`overflow-hidden rounded-[1.5rem] border ${
        isDark
          ? "border-white/15 bg-white/[0.08] text-white shadow-[0_18px_50px_rgba(0,0,0,0.16)]"
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
  heroImagePosition = "center",
  heroSubnote = "100+ piece MOQ",
  products,
  services = [],
  faqs,
  highlight,
  heroEyebrow = "Custom Goods",
  heroStats,
  productSectionEyebrow = "Products",
  productSectionTitle = "What we make",
  productSectionDescription,
  productCarouselItems,
  productSnapCarouselItems,
  introSection,
  brandSection,
  photoSection,
  detailSection,
  showBottomCta = true,
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
        <div className="relative mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="font-body text-sm font-semibold uppercase tracking-[0.28em] text-white/75">
              {heroEyebrow}
            </p>
            <h1 className="mt-5 font-display text-5xl uppercase leading-none text-[#FF4200] md:text-6xl lg:text-7xl">
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
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href={contactHref} className="btn-og-white">
                Start a Project
              </Link>
            </div>
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
                {brandSection.brands.map((brand) => (
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
                ))}
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

      {productSnapCarouselItems?.length ? (
        <>
          <ServiceSnapCarousel
            eyebrow={productSectionEyebrow}
            title={productSectionTitle}
            description={productSectionDescription}
            items={productSnapCarouselItems}
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
            <Link href={contactHref} className="btn-og shrink-0">
              Start a Project
            </Link>
          </div>
        </section>
      ) : null}
    </main>
  );
}
