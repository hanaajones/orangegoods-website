import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import {
  CATALOG_PRODUCTS,
  CATEGORY_LABELS,
  calcPrice,
} from "@/data/catalog";

const catalogImageFallback =
  "https://orangegoods.co/wp-content/uploads/2025/03/OrangeGoods_Goods_17.avif";

const catalogProductImages: Record<string, string> = {
  "bella-canvas-3001": "/images/product/apparel-tshirt-secondary.jpg",
  "gildan-8000": "/images/gallery/apparel-gts-synergy.jpg",
  "comfort-colors-1717": "/images/product/apparel-tshirt-hero.jpg",
  "la-apparel-1801": "/images/gallery/apparel-verve-gd-tee2.jpg",
  "lane-seven-ls16005gd": "/images/gallery/apparel-verve-gd-tee-verve_grateful-dead_tshirt_072.jpg",
  "as-colour-5101": "/images/product/apparel-hoodie-front.jpg",
  "as-colour-5100": "/images/gallery/apparel-686-hoodie-front.jpg",
  "bella-canvas-3719": "/images/gallery/apparel-686-hoodie-back.jpg",
  "comfort-colors-1566": "/images/product/apparel-hoodie-front.jpg",
  "as-colour-5120": "/images/product/apparel-hoodie-front.jpg",
  "as-colour-5120-crew": "/images/gallery/apparel-686-hoodie-detail.jpg",
  "as-colour-5921": "/images/gallery/apparel-686-hoodie-front.jpg",
  "as-colour-5942": "/images/product/apparel-hoodie-front.jpg",
  "as-colour-5933": "/images/gallery/apparel-686-hoodie-back.jpg",
  "as-colour-5903": "/images/gallery/apparel-686-hoodie-detail.jpg",
  "as-colour-4001": "/images/product/apparel-tshirt-secondary.jpg",
  "as-colour-4030": "/images/product/apparel-tshirt-hero.jpg",
  "as-colour-4072": "/images/gallery/apparel-verve-gd-tee.jpg",
  "as-colour-4007": "/images/gallery/apparel-verve-gd-tee-verve_grateful-dead_tshirt_101.jpg",
  "as-colour-5026": "/images/product/apparel-tshirt-secondary.jpg",
  "as-colour-5520": "/images/gallery/apparel-686-hoodie-front.jpg",
  exp54lwp: "/images/gallery/apparel-686-hoodie-back.jpg",
  "as-colour-5522": "/images/gallery/apparel-686-hoodie-detail.jpg",
};

const categories = [
  {
    name: "Headwear",
    description: "Ready-made blanks, OG Crafted hats, beanies, buckets, rope caps, and more.",
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
    href: "#catalog",
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
    description: "Picnic blankets, fleece throws, camp blankets, and gifting pieces.",
    href: "#catalog",
    image: "/images/gallery/blankets-sundream-jarritos-1013-2.jpg",
    className: "lg:col-span-2 lg:min-h-[20rem]",
    imagePosition: "center 50%",
  },
  {
    name: "Bandanas",
    description: "Print-forward bandanas for events, restaurants, pets, and retail moments.",
    href: "#catalog",
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
    name: "Houseware",
    description: "Useful home goods: trays, candles, mugs, kitchen pieces, and custom gifts.",
    href: "#catalog",
    image: "/images/gallery/houseware-oak-essentials-travertine-tray.jpg",
    className: "lg:col-span-2 lg:min-h-[17rem]",
    imagePosition: "center 50%",
  },
  {
    name: "Board Shorts",
    description: "Resort, surf, beach, and event programs with a more lifestyle feel.",
    href: "#catalog",
    image: "/images/gallery/board-shorts-high-st-deli-dsc01098-2.jpg",
    className: "lg:min-h-[19rem]",
    imagePosition: "45% 100%",
    imageClassName: "scale-[2.82] group-hover:scale-[2.9]",
  },
  {
    name: "Accessories",
    description: "Laptop sleeves, pouches, small goods, add-ons, and useful extras.",
    href: "#catalog",
    image: "/images/gallery/accessories-stanford-medicine-laptop-sleeve.jpg",
    className: "lg:min-h-[19rem]",
    imagePosition: "left 52%",
    imageClassName: "-translate-x-[54px] scale-[1.16] group-hover:-translate-x-[60px] group-hover:scale-[1.22]",
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
  {
    name: "Patches",
    description: "Woven, embroidered, chenille, felt, PVC, leather, and printed patches.",
    href: "#catalog",
    image: "/images/gallery/patches-og-oval-quality-logo-dscf2869.jpg",
    className: "lg:col-span-2 lg:min-h-[17rem]",
    imagePosition: "center 56%",
  },
  {
    name: "Packaging + Kits",
    description: "Boxes, tissue, tags, mailers, inserts, kitting, and unboxing details.",
    href: "/goods/packaging",
    image: "/images/gallery/packaging-stanford-medicine-thinkhealth-craft-1.jpg",
    className: "lg:col-span-2 lg:min-h-[19rem]",
    imagePosition: "center 46%",
  },
];

const featuredCatalogProducts = CATALOG_PRODUCTS;

const useCaseWords = [
  "events",
  "activations",
  "giveaways",
  "retail",
  "teams",
  "launches",
];

function getCatalogProductImage(slug: string) {
  return catalogProductImages[slug] || catalogImageFallback;
}

export default function GoodsPage() {
  return (
    <main className="bg-[#F7F4ED] pb-24 md:pb-0">
      <style>
        {`
          @keyframes goodsUseCaseCycle {
            0%, 12% { transform: translateY(0); }
            16%, 28% { transform: translateY(-16.666%); }
            32%, 44% { transform: translateY(-33.333%); }
            48%, 60% { transform: translateY(-50%); }
            64%, 76% { transform: translateY(-66.666%); }
            80%, 92% { transform: translateY(-83.333%); }
            100% { transform: translateY(0); }
          }

          .goods-use-case-rotator {
            animation: goodsUseCaseCycle 12s cubic-bezier(0.83, 0, 0.17, 1) infinite;
          }

          @media (prefers-reduced-motion: reduce) {
            .goods-use-case-rotator {
              animation: none;
            }
          }
        `}
      </style>
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
        <div className="relative mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white/75">
            We Make It All
          </p>
          <h1 className="mt-5 max-w-3xl text-5xl uppercase leading-none text-[var(--og-orange)] md:text-6xl lg:text-7xl">
            Quality Custom Goods
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-white/82 md:text-xl">
            Everything your brand wears, carries, drinks from, gifts, ships, and remembers, made with better taste and tighter guidance.
          </p>
          <div className="mt-8">
            <Link
              href="#catalog"
              className="inline-flex min-h-12 items-center rounded-xl border border-white/30 bg-white px-5 text-sm font-semibold uppercase tracking-[0.12em] text-[var(--og-blue)] transition hover:-translate-y-0.5 hover:bg-[var(--og-orange)] hover:text-white"
            >
              View Entire Catalog
            </Link>
          </div>
        </div>
      </section>

      <Reveal className="px-4 py-14 md:px-8 md:py-20 lg:px-12">
        <section className="mx-auto max-w-6xl">
          <div className="mb-7 max-w-3xl">
            <div>
              <h2 className="flex flex-col text-4xl leading-none text-[var(--og-blue)] md:flex-row md:flex-nowrap md:items-baseline md:gap-3 md:text-5xl">
                We&apos;ll make it for you:
                <span className="block h-[1.05em] w-[12ch] overflow-hidden text-[#FF7F00] md:inline-flex">
                  <span className="goods-use-case-rotator flex flex-col">
                    {useCaseWords.map((word) => (
                      <span
                        key={word}
                        className="h-[1.05em] whitespace-nowrap leading-none"
                      >
                        {word}
                      </span>
                    ))}
                  </span>
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
                  className={`absolute inset-0 h-full w-full object-cover transition duration-500 ${
                    category.imageClassName || "group-hover:scale-105"
                  }`}
                  style={{ objectPosition: category.imagePosition }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C]/82 via-[#1C1C1C]/28 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h2 className="text-2xl leading-tight text-white md:text-3xl">
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
          <div className="mt-8 flex flex-col gap-3 border-t border-[#081E6F]/15 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-2xl text-xs leading-5 text-[#1C1C1C]/55 md:text-sm">
              Don&apos;t see what you&apos;re looking for or don&apos;t know where to start?
            </p>
            <Link
              href="/contact"
              className="inline-flex min-h-11 w-fit items-center rounded-lg border border-[var(--og-blue)] px-4 text-sm font-semibold uppercase tracking-[0.12em] text-[var(--og-blue)] transition hover:bg-[var(--og-blue)] hover:text-white"
            >
              Contact us
            </Link>
          </div>
        </section>
      </Reveal>

      <section id="catalog" className="scroll-mt-24 border-t border-[#081E6F]/10 bg-white px-4 py-14 md:scroll-mt-28 md:px-8 md:py-20 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#FF7F00]">
                Full catalog
              </p>
              <h2 className="mt-3 text-4xl leading-none text-[var(--og-blue)] md:text-5xl">
                Keep scrolling into the product library.
              </h2>
              <p className="mt-3 text-sm leading-6 text-[#1C1C1C]/60">
                {featuredCatalogProducts.length} starter blanks with live configured pricing paths.
              </p>
            </div>
            <Link
              href="/catalog"
              className="inline-flex min-h-11 w-fit items-center rounded-lg border border-[var(--og-blue)] px-4 text-sm font-semibold uppercase tracking-[0.12em] text-[var(--og-blue)] transition hover:bg-[var(--og-blue)] hover:text-white"
            >
              View catalog page
            </Link>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {featuredCatalogProducts.map((product) => {
              const fromPrice = calcPrice(
                product.blank,
                product.blankMarkup,
                product.printCat,
                100
              );

              return (
                <Link
                  key={product.slug}
                  href={`/catalog/${product.slug}`}
                  className="group flex min-h-full flex-col overflow-hidden rounded-lg border border-[#081E6F]/12 bg-[#F7F4ED] transition hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(8,30,111,0.12)]"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={getCatalogProductImage(product.slug)}
                    alt={product.name}
                    className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="flex flex-1 flex-col p-4">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#FF7F00]">
                      {CATEGORY_LABELS[product.category]}
                    </p>
                    <h3 className="mt-2 text-lg leading-none text-[var(--og-blue)]">
                      {product.name}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-xs leading-5 text-[#1C1C1C]/55">
                      {product.description}
                    </p>
                    <div className="mt-auto flex items-end justify-between gap-2 pt-4">
                      <p className="text-sm font-semibold text-[var(--og-orange)]">
                        ${fromPrice.toFixed(2)}
                        <span className="ml-1 text-[10px] font-normal text-[#1C1C1C]/45">
                          /ea at 100
                        </span>
                      </p>
                      <span className="rounded-full bg-white px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--og-blue)] transition group-hover:bg-[#FF7F00] group-hover:text-white">
                        Configure
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
