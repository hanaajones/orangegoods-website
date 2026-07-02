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
    name: "Drinkware",
    href: "/goods/drinkware",
    image: "/images/gallery/drinkware-verve-milk-glass-mug.jpg",
    className: "lg:min-h-[18rem]",
    imagePosition: "center 94%",
    imageClassName: "translate-y-[15px] scale-[1.58] group-hover:scale-[1.66]",
  },
  {
    name: "Towels",
    href: "/goods",
    image: "/images/product/accessories-towel-hero.jpg",
    className: "lg:min-h-[20rem]",
    imagePosition: "center 54%",
  },
  {
    name: "Tote bags",
    href: "/goods/bags",
    image: "/images/gallery/totes-bags-boatsetter-dscf3148.jpg",
    className: "lg:col-span-2 lg:min-h-[18rem]",
    imagePosition: "center 50%",
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

const fullCustomSlides = [
  {
    src: "/images/gallery/packaging-stanford-medicine-thinkhealth-craft-1.jpg",
    position: "center 46%",
  },
  {
    src: "/images/gallery/accessories-stanford-medicine-laptop-sleeve.jpg",
    position: "left 52%",
  },
  {
    src: "/images/gallery/houseware-oak-essentials-travertine-tray.jpg",
    position: "center 44%",
  },
  {
    src: "/images/gallery/outerwear-high-st-deli-puffer-mg-2257.jpg",
    position: "left 46%",
  },
  {
    src: "/images/gallery/blankets-sundream-jarritos-1013-2.jpg",
    position: "center 44%",
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
        <Image
          src="/graphics/stickers/orange-goods.svg"
          alt=""
          aria-hidden="true"
          width={136}
          height={136}
          className="pointer-events-none absolute right-5 top-10 z-10 hidden w-24 rotate-[8deg] select-none drop-shadow-[0_8px_18px_rgba(28,28,28,0.16)] md:block lg:right-10 lg:top-14 lg:w-28"
        />
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
                    <span className="font-noir-alt inline-flex min-h-11 w-fit items-center justify-center self-end rounded-xl bg-[#FF4200] px-5 py-3 text-sm font-bold uppercase tracking-[0.1em] text-white outline outline-[3px] outline-transparent transition-[transform,outline-color] duration-150 hover:-translate-y-[3px] hover:outline-white focus-visible:outline-white active:-translate-y-px md:mr-[30px] md:self-center md:justify-self-end">
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
                icon: (
                  <svg
                    aria-hidden="true"
                    className="h-9 w-9"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 7h10" />
                    <path d="m11 4 3 3-3 3" />
                    <path d="M20 17H10" />
                    <path d="m13 14-3 3 3 3" />
                  </svg>
                ),
              },
              {
                title: "True Design Support",
                copy: "We're designers by nature, not just logo placers. We can shape the concept, guide the design direction, and support the goods-making process through the whole project.",
                icon: (
                  <svg
                    aria-hidden="true"
                    className="h-9 w-9"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 20h4" />
                    <path d="M14.5 4.5 19.5 9.5" />
                    <path d="M12 7 5 14v5h5l7-7" />
                    <path d="M16 3l5 5" />
                  </svg>
                ),
              },
              {
                title: "Easy Communication",
                copy: "You can text, call, or email us directly, and we keep you posted from first mockup to final delivery so you always know what is moving and what is next.",
                icon: (
                  <svg
                    aria-hidden="true"
                    className="h-9 w-9"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 12a8 8 0 0 1-8 8H6l-4 3 1.5-5A8 8 0 1 1 21 12Z" />
                    <path d="M8 11h8" />
                    <path d="M8 15h5" />
                  </svg>
                ),
              },
            ].map((reason) => (
              <article
                key={reason.title}
                className="flex min-h-[17rem] flex-col items-center justify-start rounded-[2rem] border-[3px] border-[#B8AA8E] bg-[#F7F4ED] p-6 pt-8 text-center text-[#081E6F] shadow-[5px_5px_0px_#0B32A0] md:min-h-[18rem] md:p-8 md:pt-10"
              >
                <div className="flex h-12 w-12 items-center justify-center text-[#FF4200]">
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
              className="font-noir-alt inline-flex min-h-11 items-center justify-center rounded-xl bg-white px-5 text-sm font-bold uppercase tracking-[0.1em] text-[#0B32A0] shadow-[5px_5px_0px_#0B32A0] transition hover:-translate-y-0.5 hover:bg-[#F7F4ED]"
            >
              Connect with our team
            </Link>
          </div>
        </section>
      </Reveal>

      <div className="relative overflow-hidden">
        <FeaturedPhotoCarousel />
      </div>

      <Reveal className="px-4 py-16 md:px-8 md:py-20 lg:px-12">
        <section className="mx-auto grid max-w-6xl gap-6 rounded-[2rem] border-[3px] border-[#0B32A0] bg-[#F7F4ED] p-5 text-[#1C1C1C] md:p-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center">
          <div className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#FF7F00]">
              Full custom
            </p>
            <h2
              className="mt-3 text-[2.35rem] uppercase leading-[0.92] text-[#081E6F] md:text-[4.2rem]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Don&apos;t go stock.
              <br />
              Go full custom.
            </h2>
            <p className="mt-5 max-w-lg text-base leading-7 text-[#1C1C1C]/72 md:text-lg">
              Everybody uses the same blank. Let&apos;s build something completely unique with
              the right details in the right places, from materials and fit to labels,
              trims, packaging, and finishing touches that make it feel premium.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Custom labels", "Thoughtful details", "Premium materials", "Built to last"].map(
                (item) => (
                  <span
                    key={item}
                    className="inline-flex items-center rounded-full border border-[#0B32A0]/16 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-[#081E6F]/86"
                  >
                    {item}
                  </span>
                ),
              )}
            </div>
            <div className="mt-8">
              <Link href={startProjectHref} className="btn-og inline-flex">
                START A CUSTOM PROJECT
              </Link>
            </div>
          </div>

          <div className="relative min-h-[20rem] overflow-hidden rounded-[1.6rem] border-[3px] border-[#0B32A0] bg-white md:min-h-[24rem] lg:min-h-[28rem]">
            <HomepageGoodsSlideshow slides={fullCustomSlides} />
            <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-4">
              <div className="max-w-md">
                <div className="rounded-[1.25rem] bg-white/92 px-4 py-3 shadow-[0_10px_28px_rgba(28,28,28,0.12)] backdrop-blur-[2px]">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#FF7F00]">
                    Not off the shelf
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[#1C1C1C]/78 md:text-base">
                    Labels, patches, materials, trims, shape, packaging, and all the small
                    decisions that make it yours.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      {/* Full-width testimonial carousel */}
      <PhotoCarousel />

      <ProcessSteps
        eyebrow="How It Works"
        title="Simple process. Real people."
        steps={homeProcess}
      />

      <MerchTipsCarousel />

      {/* Quiz callout — bottom of page */}
      <section className="relative overflow-hidden bg-[#F3EFE7] px-4 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-6xl rounded-[2rem] border-2 border-[#081E6F] bg-white px-6 py-8 text-[#1C1C1C] md:px-10 md:py-9">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm uppercase tracking-[0.28em] text-[#FF4200]">
                Not sure where to start?
              </p>
              <h3
                className="mt-2 text-[1.7rem] uppercase leading-[0.94] text-[#081E6F] md:text-[2.35rem]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Take our 60-second quiz
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

      <CTASection
        title="Ready to make something worth keeping?"
        description="Tell us what you're making, how many you need, and when it has to land"
        buttonLabel="Start a Project"
        buttonHref={startProjectHref}
        backgroundImage="/images/gallery/goods-hero-misc-dscf4876.jpg"
        backgroundImagePosition="center 58%"
      />
    </main>
  );
}
