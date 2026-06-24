import Image from "next/image";
import Link from "next/link";
import { ClientLogoMarquee } from "@/components/ClientLogoMarquee";
import { PhotoCarousel } from "@/components/PhotoCarousel";
import { CTASection } from "@/components/CTASection";
import { Hero } from "@/components/Hero";
import { HomepageGoodsSlideshow } from "@/components/HomepageGoodsSlideshow";
import { MerchTipsCarousel } from "@/components/MerchTipsCarousel";
import { ProcessSteps } from "@/components/ProcessSteps";
import { Reveal } from "@/components/Reveal";
import { TwoPaths } from "@/components/TwoPaths";
import {
  homeProcess,
  logos,
  startProjectHref,
  twoPaths,
  twoPathsTitle,
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

      <Reveal className="bg-white px-4 py-14 md:px-8 md:py-20 lg:px-12">
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
          <ClientLogoMarquee logos={logos} className="mt-8 pt-[39px] md:mt-10 md:pt-[39px]" />
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
            className="mb-8 text-center text-4xl uppercase leading-none tracking-[0.01em] text-white md:mb-10 md:text-6xl lg:text-7xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Why brands choose OG
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                title: "All-in-One Merch House",
                copy: "No vendor juggling. We handle the goods, sourcing, decoration, packaging, kitting, and delivery in one place.",
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
                title: "California Team",
                copy: "A real California team you can text, call, or email. No hub, no call center, no getting passed around.",
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
                    <path d="M12 21s7-5.3 7-11a7 7 0 0 0-14 0c0 5.7 7 11 7 11Z" />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>
                ),
              },
              {
                title: "Easy Communication",
                copy: "We keep you posted from first mockup to final delivery, so you always know what is moving and what is next.",
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
                className="flex min-h-[17rem] flex-col items-center justify-center rounded-lg border-[3px] border-[#B8AA8E] bg-[var(--og-sand)] p-6 text-center text-[#081E6F] shadow-[5px_5px_0px_#0B32A0] md:min-h-[18rem] md:p-8"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full border-[3px] border-[#B8AA8E] bg-[#F3EFE7] text-[#FF4200]">
                  {reason.icon}
                </div>
                <h3 className="font-display mt-6 max-w-full text-[1.75rem] font-normal normal-case leading-none tracking-normal text-[#0B32A0] md:text-[1.9rem] lg:text-[2.1rem]">
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
              className="font-noir-alt inline-flex min-h-11 items-center justify-center rounded-xl bg-white px-5 text-sm font-bold uppercase tracking-[0.1em] text-[#0B32A0] shadow-[5px_5px_0px_#0B32A0] transition hover:-translate-y-0.5 hover:bg-[#F3EFE7]"
            >
              Get in touch
            </Link>
          </div>
        </section>
      </Reveal>

      {/* Two ways to start */}
      <TwoPaths items={twoPaths} title={twoPathsTitle} />

      {/* Full-width testimonial carousel */}
      <PhotoCarousel />

      <MerchTipsCarousel />

      <div style={{ height: "30px" }} />

      <ProcessSteps
        eyebrow="How It Works"
        title="Transparent process. No surprises."
        description="We tell you exactly what happens, when, and who's responsible. Unlike the big guys, you talk to one person from first email to final delivery."
        steps={homeProcess}
      />

      <Reveal className="px-4 py-8 md:px-8 lg:px-12">
        <section
          id="about"
          className="mx-auto grid max-w-6xl gap-8 rounded-[2rem] border border-[var(--og-sand)] bg-[rgba(255,248,241,0.88)] p-6 backdrop-blur md:grid-cols-[1fr_1.05fr] md:p-8"
        >
          <div className="relative min-h-[20rem] overflow-hidden rounded-[1.75rem] bg-[#d6bea7]">
            <Image
              src="/images/product/apparel-tshirt-hero.jpg"
              alt="Orange Goods founders"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--og-orange)]">
              Southern California
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-[var(--og-blue)] md:text-5xl">
              A real partner,<br />not a platform
            </h2>
            <p className="mt-5 text-base leading-7 text-[var(--og-muted)] md:text-lg">
              We&apos;re a small, focused team based in Southern California. Not a fulfillment warehouse, not an overseas call center. You get one person who knows your project, handles every step, and is reachable by text.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { label: "Free mockups", detail: "Every project includes mockups and revisions at no charge" },
                { label: "One contact", detail: "Same person from your first email to the box at your door" },
                { label: "Transparent pricing", detail: "No hidden setup fees, no surprise charges at the end" },
                { label: "Real lead times", detail: "We tell you exactly when it ships — and we hit it" },
              ].map(({ label, detail }) => (
                <div key={label} className="rounded-2xl border border-[var(--og-sand)] bg-white p-4">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF4200]" style={{ fontFamily: "var(--font-display)" }}>{label}</p>
                  <p className="mt-1 text-sm leading-5 text-[#1C1C1C]/60">{detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>
      {/* Quiz callout — bottom of page */}
      <div className="bg-[#F3EFE7] px-4 py-20 text-center md:px-8 md:py-24">
        <p className="text-base text-[#1C1C1C]/60">Not sure what to order?</p>
        <h3
          className="mt-1 text-2xl uppercase text-[#FF4200] md:text-3xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Take our 60-second quiz
        </h3>
        <p className="mx-auto mt-2 max-w-sm text-sm text-[#1C1C1C]/50">
          Answer a few questions and we&apos;ll recommend the right products for your brand
        </p>
        <Link href="/quiz" className="btn-og mt-6 inline-flex">
          FIND MY GOODS
        </Link>
      </div>

      <CTASection
        title="Ready to make something worth keeping?"
        description="Tell us what you're making, how many you need, and when it has to land"
        buttonLabel="Start a Project"
        buttonHref={startProjectHref}
      />
    </main>
  );
}
