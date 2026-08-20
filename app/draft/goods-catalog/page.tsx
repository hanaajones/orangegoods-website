import type { Metadata } from "next";
import { GoodsCatalogGrid } from "@/components/GoodsCatalogGrid";
import {
  CATALOG_PRODUCTS,
  CATEGORY_LABELS,
  CATEGORY_ORDER,
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

export const metadata: Metadata = {
  title: "Draft Goods Catalog · Orange Goods",
  robots: {
    index: false,
    follow: false,
  },
};

function getCatalogProductImage(slug: string) {
  return catalogProductImages[slug] || catalogImageFallback;
}

export default function DraftGoodsCatalogPage() {
  const catalogFilters = [
    { key: "all", label: "All" },
    ...CATEGORY_ORDER.map((category) => ({
      key: category,
      label: CATEGORY_LABELS[category],
    })),
  ];

  const catalogItems = CATALOG_PRODUCTS.map((product) => ({
    slug: product.slug,
    href: `/catalog/${product.slug}`,
    category: product.category,
    categoryLabel: CATEGORY_LABELS[product.category],
    name: product.name,
    description: product.description,
    image: getCatalogProductImage(product.slug),
    fromPrice: calcPrice(product.blank, product.blankMarkup, product.printCat, 100),
  }));

  return (
    <main className="min-h-screen bg-[#F7F4ED] text-[#1C1C1C]">
      <section className="relative overflow-hidden bg-[#1C1C1C] text-white">
        <div className="relative min-h-[24rem] md:min-h-[29rem]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/gallery/goods-explore-catalog-high-street-deli-0477.jpg"
            alt="High Street Deli branded goods displayed together on shelves"
            className="absolute inset-0 h-full w-full object-cover"
            style={{ objectPosition: "center 48%" }}
          />
          <div className="absolute inset-0 bg-[#1C1C1C]/32" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1C1C1C]/58 via-[#1C1C1C]/42 to-[#1C1C1C]/14" />
          <div className="relative mx-auto max-w-6xl px-4 py-16 md:px-8 md:py-24 lg:px-12">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/72">
              Draft only
            </p>
            <h1 className="mt-5 max-w-3xl font-display text-5xl uppercase leading-none text-[var(--og-orange)] md:text-6xl lg:text-7xl">
              Explore the Catalog
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-white/82 md:text-xl">
              Parked from the public `/goods` page until the shoppable catalog direction is ready.
            </p>
          </div>
        </div>

        <div className="bg-white px-4 py-14 md:px-8 md:py-20 lg:px-12">
          <GoodsCatalogGrid
            filters={catalogFilters}
            items={catalogItems}
          />
        </div>
      </section>
    </main>
  );
}
