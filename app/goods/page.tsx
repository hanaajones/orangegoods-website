import Link from "next/link";
import { ServiceLeadForm } from "@/app/services/_components/ServiceLeadForm";
import { Reveal } from "@/components/Reveal";
import { GoodsUseCaseRotator } from "@/components/GoodsUseCaseRotator";

type CategoryCard = {
  name: string;
  description: string;
  href: string;
  image: string;
  className: string;
  imagePosition: string;
  imageClassName?: string;
  imageFitClassName?: string;
};

const categories: CategoryCard[] = [
  {
    name: "Headwear",
    description: "Quick-turn blanks, Full Custom hats, beanies, buckets, rope caps, and more.",
    href: "/goods/hats",
    image: "/images/product/hat-lifestyle-hero.jpg",
    className: "lg:col-span-2 lg:min-h-[22rem]",
    imagePosition: "center 52%",
  },
  {
    name: "Apparel",
    description: "Tees, hoodies, crews, polos, flannels, uniforms, and retail-style drops.",
    href: "/goods/apparel",
    image: "/images/product/apparel-tshirt-hero.jpg",
    className: "lg:col-span-2 lg:min-h-[22rem]",
    imagePosition: "center 12%",
    imageClassName: "group-hover:scale-105",
  },
  {
    name: "Drinkware",
    description: "Bottles, tumblers, mugs, camp cups, and daily-use desk pieces.",
    href: "/goods/drinkware",
    image: "/images/gallery/drinkware-verve-milk-glass-mug.jpg",
    className: "lg:min-h-[18rem]",
    imagePosition: "center 94%",
    imageClassName: "scale-[1.58] group-hover:scale-[1.66]",
  },
  {
    name: "Towels",
    description: "Beach towels, golf towels, gym towels, event towels, and summer drops.",
    href: "/contact",
    image: "/images/product/accessories-towel-hero.jpg",
    className: "lg:min-h-[20rem]",
    imagePosition: "center 54%",
  },
  {
    name: "Totes + Bags",
    description: "Canvas totes, boat totes, backpacks, duffels, market bags, and mailers.",
    href: "/goods/bags",
    image: "/images/gallery/totes-bags-boatsetter-dscf3148.jpg",
    className: "lg:col-span-2 lg:min-h-[18rem]",
    imagePosition: "center 50%",
  },
  {
    name: "Blankets",
    description: "Upcycled Mexican blankets, plush throws, jacquard blankets, and anything ready to get kept.",
    href: "/goods/blankets",
    image: "/images/gallery/blankets-sundream-jarritos-1013-2.jpg",
    className: "lg:col-span-2 lg:min-h-[20rem]",
    imagePosition: "center 50%",
  },
  {
    name: "Bandanas",
    description: "Print-forward bandanas for events, restaurants, pets, and retail moments.",
    href: "/contact",
    image: "/images/gallery/accessories-royal-wine-bandana-image-1.jpg",
    className: "lg:min-h-[24rem]",
    imagePosition: "center 52%",
  },
  {
    name: "Socks",
    description: "Easy-to-size knit socks for gifts, mailers, events, and retail add-ons.",
    href: "/goods/socks",
    image: "/images/product/socks-lifestyle.jpg",
    className: "lg:min-h-[17rem]",
    imagePosition: "center 56%",
  },
  {
    name: "Beanies",
    description: "Cuffed, ribbed, heavyweight, tonal, patch, and embroidered beanies.",
    href: "/goods/hats",
    image: "/images/gallery/headwear-fish-at-sea-beanie-img-4864.jpg",
    className: "lg:col-span-2 lg:min-h-[19rem]",
    imagePosition: "center 52%",
  },
  {
    name: "Patches",
    description: "Woven, embroidered, chenille, felt, PVC, leather, and printed patches.",
    href: "/contact",
    image: "/images/gallery/patches-og-oval-quality-logo-dscf2869.jpg",
    className: "lg:col-span-2 lg:min-h-[17rem]",
    imagePosition: "center 56%",
  },
  {
    name: "Board Shorts",
    description: "Resort, surf, beach, and event programs with a more lifestyle feel.",
    href: "/contact",
    image: "/images/gallery/board-shorts-high-st-deli-dsc01098-2.jpg",
    className: "lg:min-h-[19rem]",
    imagePosition: "45% 100%",
    imageClassName: "scale-[2.82] group-hover:scale-[2.9]",
  },
  {
    name: "Accessories",
    description: "Laptop sleeves, pouches, small goods, add-ons, and useful extras.",
    href: "/goods/accessories",
    image: "/images/gallery/accessories-stanford-medicine-laptop-sleeve.jpg",
    className: "lg:min-h-[19rem]",
    imagePosition: "center 52%",
    imageClassName: "group-hover:scale-105",
  },
  {
    name: "Outerwear",
    description: "Coaches jackets, windbreakers, chore coats, vests, and heavier layers.",
    href: "/goods/outerwear",
    image: "/images/gallery/outerwear-high-st-deli-puffer-mg-2257.jpg",
    className: "lg:col-span-2 lg:min-h-[21rem]",
    imagePosition: "left 46%",
    imageClassName: "scale-[1.84] group-hover:scale-[1.92]",
  },
];

const useCaseWords = [
  "events",
  "activations",
  "giveaways",
  "retail",
  "teams",
  "launches",
];

export default function GoodsPage() {
  return (
    <main className="bg-[#F7F4ED] pb-24 md:pb-0">
      <section className="relative overflow-hidden bg-[#1C1C1C] px-4 py-16 text-white md:px-8 md:py-24 lg:px-12">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/gallery/goods-hero-misc-dscf4876.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
          style={{ objectPosition: "center 48%" }}
        />
        <div className="absolute inset-0 bg-[#1C1C1C]/32" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1C1C1C]/58 via-[#1C1C1C]/42 to-[#1C1C1C]/14" />
        <div className="relative mx-auto grid max-w-6xl gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <div>
            <p className="hidden text-sm font-semibold uppercase tracking-[0.28em] text-white/75 md:block">
              We Make It All
            </p>
            <h1 className="mt-3 max-w-3xl font-display text-[2.8rem] uppercase leading-none text-[var(--og-orange)] md:mt-5 md:text-6xl lg:text-7xl">
              Quality Custom Goods
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-white/82 md:text-xl">
              Everything your brand wears, carries, drinks from, gifts, ships, and remembers, made with better taste and tighter guidance.
            </p>
            <p className="mt-4 text-sm font-semibold uppercase tracking-[0.12em] text-white/78">
              Most custom programs start at 100 pieces.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end lg:self-end">
            <Link href="/contact" className="btn-og-white inline-flex">
              Start a Project
            </Link>
          </div>
        </div>
      </section>

      <Reveal className="px-4 py-14 md:px-8 md:py-20 lg:px-12">
        <section className="mx-auto max-w-6xl">
          <div className="mb-7 max-w-3xl">
            <div>
              <h2 className="font-display text-4xl leading-none text-[var(--og-blue)] md:text-5xl">
                <span className="inline-flex flex-wrap items-center gap-x-1.5 gap-y-1 sm:flex-nowrap sm:whitespace-nowrap">
                  <span className="whitespace-nowrap">We create merch for</span>
                  <GoodsUseCaseRotator words={useCaseWords} />
                </span>
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-6 text-[#1C1C1C]/60">
                From concept to delivery. We&apos;ll source the highest quality product at the best price.
              </p>
            </div>
          </div>
          <div className="grid grid-flow-row-dense grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => (
              <Link
                key={category.name}
                href={category.href}
                className={`group relative min-h-[17rem] overflow-hidden rounded-[1.75rem] ${category.className}`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={category.image}
                  alt={category.name}
                  className={`absolute inset-0 h-full w-full ${category.imageFitClassName || "object-cover"} transition duration-500 ${
                    category.imageClassName || "group-hover:scale-105"
                  }`}
                  style={{ objectPosition: category.imagePosition }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C]/82 via-[#1C1C1C]/28 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h2 className="font-display text-2xl leading-tight text-white md:text-3xl">
                    {category.name}
                  </h2>
                  <p className="mt-2 max-w-sm text-sm leading-5 text-white/75">
                    {category.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-white transition group-hover:text-[#FF7F00]">
                    Customize
                    <span className="h-px w-7 bg-current transition-all duration-300 group-hover:w-10" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-8 flex flex-col gap-5 rounded-[1.5rem] border border-[#d4c5ae] bg-white px-5 py-5 md:px-6 md:py-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#FF4200]">
                This is just a taste
              </p>
              <p className="mt-2 text-xs leading-5 text-[#1C1C1C]/62 md:text-sm md:leading-6">
                We make far more than what you see here.
              </p>
            </div>
            <Link
              href="/contact"
              className="btn-og inline-flex min-h-12 w-fit shrink-0 items-center justify-center"
            >
              Start a custom project
            </Link>
          </div>
        </section>
      </Reveal>

      <section className="px-4 pb-14 md:px-8 md:pb-20 lg:px-12">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem]">
          <div className="relative min-h-[25rem] md:min-h-[29rem]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/gallery/bags-boatsetter-dscf3242.jpg"
              alt="Custom tote bags and branded goods laid out together"
              className="absolute inset-0 h-full w-full object-cover"
              style={{ objectPosition: "center 44%" }}
            />
            <div className="absolute inset-0 bg-[#1C1C1C]/38" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1C1C1C]/76 via-[#1C1C1C]/44 to-[#1C1C1C]/16" />
            <div className="relative flex min-h-[25rem] items-end p-6 md:min-h-[29rem] md:p-10 lg:p-12">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#FF4200]">
                  Why Orange Goods
                </p>
                <h2 className="mt-3 font-display text-4xl leading-none text-white md:text-5xl lg:text-6xl">
                  Better Guidance.
                  <br />
                  Better Goods.
                </h2>
                <p className="mt-4 max-w-xl text-sm leading-6 text-white/82 md:text-base md:leading-7">
                  We help you choose the right product, decoration, materials, and finish from the
                  start, so what you make feels intentional, holds up in real life, and actually
                  gets kept.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Reveal className="bg-[#F7F4ED] px-4 pb-16 md:px-8 md:pb-24 lg:px-12">
        <section
          id="start-project"
          className="mx-auto grid max-w-6xl gap-8 rounded-[2rem] border border-[#0B32A0]/14 bg-[linear-gradient(180deg,#FFF8F1_0%,#FFFDF8_100%)] p-4 shadow-[0_24px_80px_rgba(8,30,111,0.08)] md:grid-cols-[0.94fr_1.06fr] md:p-5"
        >
          <div className="relative min-h-[26rem] overflow-hidden rounded-[1.7rem] border border-[#0B32A0]/12 bg-[#1234A6]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/gallery/goods-hero-misc-dscf4876.jpg"
              alt="A mix of custom branded goods shown as the closing image for the goods page"
              className="absolute inset-0 h-full w-full object-cover"
              style={{ objectPosition: "center 48%" }}
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,30,111,0.12)_0%,rgba(8,30,111,0.26)_42%,rgba(8,30,111,0.86)_100%)]" />
            <div className="absolute inset-x-0 bottom-0 p-6 text-white md:p-7">
              <p className="font-body text-xs font-semibold uppercase tracking-[0.24em] text-[#FFB38E]">
                Get a Quote
              </p>
              <h2 className="mt-3 font-display text-4xl uppercase leading-none md:text-5xl">
                Ready to build the right goods program?
              </h2>
              <p className="mt-4 max-w-lg font-body text-sm leading-7 text-white/84 md:text-base">
                Share the product lane, quantity, timeline, and any logo or artwork context so we
                can point you toward the right category and next step faster.
              </p>
            </div>
          </div>

          <ServiceLeadForm
            title="Get a Quote"
            description="We will follow up with recommended product directions, decoration options, and a clear next step."
            projectDefault=""
            projectLabel="What kind of goods are you looking for?"
            projectPlaceholder="Tell us what you want to make: hats, apparel, bags, drinkware, blankets, accessories, mixed goods, quantity split, budget notes, artwork context, or anything else that helps us quote the right direction."
            hiddenFields={{
              source: "goods-page",
              product: "goods",
              intent: "landing-page-inquiry",
            }}
            captureAttributionFields
            submitLabel="Get a Quote"
            showPhone={false}
            showTimeline
            showProductTypeField
            productTypeLabel="What are you interested in?"
            productTypeOptions={[
              "Apparel",
              "Headwear",
              "Drinkware",
              "Bags / Totes",
              "Blankets",
              "Accessories",
              "Mixed merch run",
              "Not sure yet",
            ]}
            showDesignHelp={false}
            showArtworkUpload
          />
        </section>
      </Reveal>
    </main>
  );
}
