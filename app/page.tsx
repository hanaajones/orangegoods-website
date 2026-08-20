import Image from "next/image";
import Link from "next/link";
import { ClientLogoMarquee } from "@/components/ClientLogoMarquee";
import { PhotoCarousel } from "@/components/PhotoCarousel";
import { CTASection } from "@/components/CTASection";
import { FeaturedPhotoCarousel } from "@/components/FeaturedPhotoCarousel";
import { Hero } from "@/components/Hero";
import { HomepageGoodsSlideshow } from "@/components/HomepageGoodsSlideshow";
import { MerchTipsCarousel } from "@/components/MerchTipsCarousel";
import { ProcessSteps } from "@/components/ProcessSteps";
import { Reveal } from "@/components/Reveal";
import {
  homeProcess,
  logos,
  startProjectHref,
} from "@/lib/content";

const homepageGoodsCategories = [
  {
    name: "Headwear",
    href: "/goods/hats",
    image: "/images/product/hat-lifestyle-hero.jpg",
    poster: "/videos/homepage/headwear-c3749-selected-poster.jpg",
    video: "/videos/homepage/headwear-c3749-selected.mp4",
    className: "lg:col-span-2 lg:min-h-[20rem]",
    imagePosition: "center top",
  },
  {
    name: "Apparel",
    href: "/goods/apparel",
    image: "/images/homepage/merch-drop-2025-5.jpg",
    className: "lg:col-span-2 lg:min-h-[20rem]",
    imagePosition: "center 48%",
    imageClassName: "group-hover:scale-105",
    sticker: "/graphics/stickers/fresh-goods.svg",
  },
  {
    name: "Tote bags",
    href: "/goods/bags",
    image: "/images/gallery/totes-bags-boatsetter-dscf3148.jpg",
    className: "lg:col-span-2 lg:min-h-[18rem]",
    imagePosition: "center 50%",
  },
  {
    name: "Towels",
    href: "/goods",
    image: "/images/product/accessories-towel-hero.jpg",
    className: "lg:min-h-[20rem]",
    imagePosition: "center 54%",
  },
  {
    name: "Drinkware",
    href: "/goods/drinkware",
    image: "/images/homepage/drinkware-verve-cup-homepage-poster-2026-08-14.jpg",
    poster: "/images/homepage/drinkware-verve-cup-homepage-poster-2026-08-14.jpg",
    video: "/videos/homepage/drinkware-verve-cup-homepage-2026-08-14.mp4",
    className: "lg:min-h-[18rem]",
    imagePosition: "center 58%",
    imageClassName: "scale-[1.08] group-hover:scale-[1.12]",
  },
  {
    name: "We make it all",
    description:
      "From patches, packaging, and kits to outerwear, accessories, and custom pieces, we build the details that make a brand feel finished. If it needs sourcing, design, production, packing, or delivery, we can pull it together.",
    href: startProjectHref,
    image: "/images/gallery/packaging-stanford-medicine-thinkhealth-craft-1.jpg",
    className: "lg:col-span-4 lg:min-h-[17rem]",
    imagePosition: "center 46%",
    cta: "Start a project",
    slideshow: [
      {
        src: "/images/gallery/packaging-stanford-medicine-thinkhealth-craft-1.jpg",
        position: "center 46%",
      },
      {
        src: "/images/gallery/accessories-stanford-medicine-laptop-sleeve.jpg",
        position: "left 52%",
      },
      {
        src: "/images/gallery/blankets-sundream-jarritos-1013-2.jpg",
        position: "center 44%",
      },
      {
        src: "/images/gallery/houseware-oak-essentials-travertine-tray.jpg",
        position: "center 44%",
      },
      {
        src: "/images/gallery/outerwear-high-st-deli-puffer-mg-2257.jpg",
        position: "left 46%",
      },
    ],
  },
];

export default function HomePage() {
  return (
    <main className="pb-24 md:pb-0">
      <Hero />

      {/* Fat Frank divider */}
      <div className="border-b-[3px] border-[#1C1C1C] bg-[#081E6F] px-4 py-4 text-center md:px-6 md:py-5 lg:px-8">
        <p
          className="mx-auto flex max-w-[76rem] flex-wrap items-center justify-center gap-x-4 gap-y-1 text-[1.9rem] uppercase leading-none tracking-[0.01em] text-[#FF4200] sm:gap-x-5 sm:text-[2.5rem] md:flex-nowrap md:gap-x-6 md:text-[3.4rem] lg:gap-x-8 lg:text-[4.6rem] xl:text-[5.35rem]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          <span>BRANDED</span>
          <span>GOODS</span>
          <span>WORTH</span>
          <span>KEEPING</span>
        </p>
      </div>

      <Reveal className="relative overflow-hidden bg-white px-4 pb-0 pt-14 md:px-8 md:pb-[20px] md:pt-20 lg:px-12">
        <section className="mx-auto max-w-6xl">
          <div className="relative left-1/2 mb-6 flex w-screen -translate-x-1/2 items-center justify-center gap-4 md:mb-8 md:gap-6">
            <div
              className="h-9 flex-1 -translate-y-2 md:h-11"
              style={{
                backgroundImage: "url('/graphics/orange-checker-tile.svg')",
                backgroundRepeat: "repeat-x",
                backgroundPosition: "right center",
                backgroundSize: "44px 44px",
              }}
              aria-hidden="true"
            />
            <p className="font-accent shrink-0 bg-white px-3 text-center text-3xl font-normal leading-none text-[#081E6F] md:px-5 md:text-5xl">
              What we make
            </p>
            <div
              className="h-9 flex-1 -translate-y-2 md:h-11"
              style={{
                backgroundImage: "url('/graphics/orange-checker-tile.svg')",
                backgroundRepeat: "repeat-x",
                backgroundPosition: "left center",
                backgroundSize: "44px 44px",
              }}
              aria-hidden="true"
            />
          </div>
          <div className="grid grid-flow-row-dense grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {homepageGoodsCategories.map((category) => (
              <Link
                key={category.name}
                href={category.href}
                className={`group relative min-h-[17rem] overflow-hidden rounded-[1.75rem] border-[3px] border-transparent transition duration-200 hover:border-[#0B32A0] focus-visible:border-[#0B32A0] focus-visible:outline-none ${category.className}`}
              >
                {category.slideshow ? (
                  <HomepageGoodsSlideshow slides={category.slideshow} />
                ) : category.video ? (
                  <video
                    aria-hidden="true"
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster={category.poster || category.image}
                    preload="metadata"
                    className={`absolute inset-0 h-full w-full object-cover transition duration-500 ${
                      category.imageClassName || "group-hover:scale-105"
                    }`}
                    style={{ objectPosition: category.imagePosition }}
                  >
                    <source src={category.video} type="video/mp4" />
                  </video>
                ) : (
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    sizes="(min-width: 1024px) 20vw, (min-width: 640px) 50vw, 100vw"
                    className={`object-cover transition duration-500 ${
                      category.imageClassName || "group-hover:scale-105"
                    }`}
                    style={{ objectPosition: category.imagePosition }}
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C]/82 via-[#1C1C1C]/24 to-transparent" />
                {category.sticker ? (
                  <Image
                    src={category.sticker}
                    alt=""
                    aria-hidden="true"
                    width={136}
                    height={136}
                    className="pointer-events-none absolute bottom-4 right-4 z-20 w-24 rotate-[9deg] select-none drop-shadow-[0_8px_18px_rgba(28,28,28,0.22)] sm:w-28 md:bottom-5 md:right-5"
                  />
                ) : null}
                <div
                  className={`absolute p-5 ${
                    category.cta
                      ? "inset-0 flex flex-col items-start justify-center gap-4 text-left md:grid md:grid-cols-[minmax(0,1fr)_auto] md:items-center md:gap-8 md:p-6"
                      : "inset-x-0 bottom-0"
                  }`}
                >
                  <div className={category.cta ? "max-w-2xl md:justify-self-start" : ""}>
                    <h2 className="font-noir-alt text-2xl font-bold leading-tight text-white normal-case md:text-3xl">
                      {category.name}
                    </h2>
                    {category.description ? (
                      <p
                        className={`text-sm text-white/75 ${
                          category.cta
                            ? "mt-4 max-w-2xl leading-6 md:mt-5 md:text-base"
                            : "mt-2 max-w-sm leading-5"
                        }`}
                      >
                        {category.description}
                      </p>
                    ) : null}
                  </div>
                  {category.cta ? (
                    <span className="font-body inline-flex min-h-11 w-fit items-center justify-center self-end rounded-xl bg-[#FF4200] px-5 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-white outline outline-[3px] outline-transparent transition-[transform,outline-color] duration-150 hover:-translate-y-[3px] hover:outline-white focus-visible:outline-white active:-translate-y-px md:mr-[30px] md:self-center md:justify-self-end">
                      {category.cta}
                    </span>
                  ) : null}
                </div>
              </Link>
            ))}
          </div>
          <ClientLogoMarquee logos={logos} className="mt-8 pt-[9px] md:mt-10 md:pt-[9px]" />
        </section>
      </Reveal>

      <Reveal className="relative isolate overflow-hidden px-4 py-16 md:px-8 md:py-20 lg:px-12">
        <video
          className="absolute inset-0 -z-30 h-full w-full object-cover object-center"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/videos/homepage/why-brands-choose-us-mvi-7403-stabilized-6s-poster.jpg"
          aria-hidden="true"
        >
          <source src="/videos/homepage/why-brands-choose-us-mvi-7403-stabilized-6s.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 -z-20 bg-[#1C1C1C]/84" />
        <div
          className="absolute inset-0 -z-10 opacity-30 mix-blend-soft-light"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160' viewBox='0 0 160 160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='160' height='160' filter='url(%23n)' opacity='.62'/%3E%3C/svg%3E\")",
          }}
          aria-hidden="true"
        />
        <section id="why-orange-goods" className="relative z-10 mx-auto max-w-6xl scroll-mt-24">
          <h2
            className="mb-8 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-center text-4xl uppercase leading-none tracking-[0.01em] text-white md:mb-10 md:gap-x-4 md:text-6xl lg:text-7xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            <span>Why brands choose</span>
            <Image
              src="/graphics/stickers/og-mark.svg"
              alt="OG"
              width={136}
              height={136}
              className="h-[1.45em] w-[1.45em] object-contain"
            />
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Full Service Partner",
                copy: "No vendor juggling. We handle the goods, sourcing, decoration, packaging, kitting, and delivery in one place, so the whole project stays under one roof from start to finish.",
                iconWrapClassName: "h-12 w-12",
                icon: (
                  <Image
                    src="/graphics/homepage/full-service-partner.svg"
                    alt=""
                    aria-hidden="true"
                    width={183}
                    height={238}
                    className="h-14 w-auto"
                  />
                ),
              },
              {
                title: "True Design Support",
                copy: "We're designers by nature, not just logo placers. We can shape the concept, guide the design direction, and support the goods-making process through the whole project.",
                iconWrapClassName: "h-[4.4rem] w-[4.4rem]",
                icon: (
                  <Image
                    src="/graphics/homepage/true-design-support.svg"
                    alt=""
                    aria-hidden="true"
                    width={265}
                    height={159}
                    className="h-16 w-auto"
                  />
                ),
              },
              {
                title: "Priority Communication",
                copy: "You can text, call, or email us directly, and we keep you posted from first mockup to final delivery so you always know what is moving and what is next.",
                iconWrapClassName: "h-12 w-12",
                icon: (
                  <Image
                    src="/graphics/homepage/easy-communication.svg"
                    alt=""
                    aria-hidden="true"
                    width={217}
                    height={236}
                    className="h-[4.125rem] w-auto"
                  />
                ),
              },
            ].map((reason) => (
              <article
                key={reason.title}
                className="flex min-h-[17rem] flex-col items-center justify-start rounded-[2rem] border-[3px] border-[#B8AA8E] bg-[#F7F4ED] p-6 pt-8 text-center text-[#081E6F] shadow-[5px_5px_0px_#0B32A0] md:min-h-[18rem] md:p-8 md:pt-10"
              >
                <div
                  className={`flex items-center justify-center text-[#FF4200] ${
                    reason.iconWrapClassName ?? "h-12 w-12"
                  }`}
                >
                  {reason.icon}
                </div>
                <h3 className="font-display mt-6 flex min-h-[4.2rem] max-w-full items-center justify-center text-[1.75rem] font-normal normal-case leading-none tracking-normal text-[#0B32A0] md:min-h-[4.7rem] md:text-[1.9rem] lg:text-[2.1rem]">
                  {reason.title}
                </h3>
                <p className="font-noir-alt mt-4 max-w-sm text-base font-medium leading-7 text-[#1C1C1C]/70">
                  {reason.copy}
                </p>
              </article>
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <Link
              href={startProjectHref}
              className="font-body inline-flex min-h-11 items-center justify-center rounded-xl bg-white px-5 text-sm font-semibold uppercase tracking-[0.08em] text-[#0B32A0] shadow-[5px_5px_0px_#0B32A0] transition hover:-translate-y-0.5 hover:bg-[#F7F4ED]"
            >
              Connect with our team
            </Link>
          </div>
        </section>
      </Reveal>

      <div className="relative overflow-hidden">
        <FeaturedPhotoCarousel />
      </div>

      <div className="border-y-[3px] border-[#1C1C1C] bg-[#081E6F] px-4 py-4 text-center md:px-6 md:py-5 lg:px-8">
        <p
          className="mx-auto max-w-[76rem] text-[1.55rem] uppercase leading-none tracking-[0.01em] text-[#FF4200] sm:text-[2rem] md:text-[2.8rem] lg:text-[3.8rem] xl:text-[4.45rem]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          A true merch partner
        </p>
      </div>

      <Reveal className="px-4 py-16 md:px-8 md:py-20 lg:px-12">
        <section className="mx-auto grid max-w-6xl gap-6 rounded-[2rem] border-[3px] border-[#0B32A0] bg-[#F7F4ED] p-5 text-[#1C1C1C] md:p-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center">
          <div className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#FF7F00]">
              Fully custom. Fully yours.
            </p>
            <h2
              className="mt-3 text-[2.35rem] uppercase leading-[0.92] text-[#081E6F] md:text-[4.2rem]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Built custom
              <br />
              for your brand.
            </h2>
            <p className="mt-5 max-w-lg text-base leading-7 text-[#1C1C1C]/72 md:text-lg">
              Everybody uses the same blank. We&apos;d rather build the version that actually
              feels like your brand, from materials and fit to trims, labels, and packaging.
            </p>
            <div className="mt-8">
              <Link href={startProjectHref} className="btn-og inline-flex">
                START A CUSTOM PROJECT
              </Link>
            </div>
          </div>

          <div className="relative min-h-[20rem] overflow-hidden rounded-[1.6rem] border-[3px] border-[#0B32A0] bg-white md:min-h-[24rem] lg:min-h-[28rem]">
            <Image
              src="/images/gallery/full-custom-materials-mg-9406.jpg"
              alt="Custom branded patches and materials by Orange Goods"
              fill
              sizes="(min-width: 1024px) 62vw, 100vw"
              className="object-cover"
              style={{ objectPosition: "center 48%" }}
            />
          </div>
        </section>
      </Reveal>

      {/* Full-width testimonial carousel */}
      <PhotoCarousel />

      <ProcessSteps
        eyebrow="How It Works"
        title="Real team. Simple process."
        steps={homeProcess}
      />

      {/* Quiz callout — bottom of page */}
      <section className="relative isolate overflow-hidden px-4 py-16 md:px-8 md:py-20">
        <Image
          src="/images/gallery/apparel-upgrade-the-handfeel-img-1172.jpg"
          alt=""
          aria-hidden="true"
          fill
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "center 52%" }}
        />
        <div className="absolute inset-0 bg-[#1C1C1C]/28" aria-hidden="true" />
        <div className="relative z-10 mx-auto max-w-6xl rounded-[2rem] border-2 border-[#081E6F] bg-white/90 px-6 py-8 text-[#1C1C1C] md:px-10 md:py-9">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <p
                className="font-accent text-sm font-normal uppercase tracking-[0.2em] text-[#FF4200]"
              >
                Not sure where to start?
              </p>
              <h3
                className="mt-2 text-[1.7rem] uppercase leading-[0.94] text-[#081E6F] md:text-[2.35rem]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Take our 30-second quiz
              </h3>
            </div>
            <div className="flex items-start md:items-center">
              <Link href="/quiz" className="btn-og inline-flex">
                GET PRODUCT IDEAS
              </Link>
            </div>
          </div>
        </div>
      </section>

      <MerchTipsCarousel />

      <CTASection
        title="Ready to bring your idea to life?"
        buttonLabel="Start a Project"
        buttonHref={startProjectHref}
        backgroundImage="/images/gallery/goods-hero-misc-dscf4876.jpg"
        backgroundImagePosition="center 58%"
        showImageOverlay={false}
        eyebrow=""
        wrapperClassName="border-t border-[#0B32A0]/15"
      />
    </main>
  );
}
