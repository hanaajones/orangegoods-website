import { GalleryBoard } from "@/components/GalleryBoard";
import { ParallaxHeroBackground } from "@/components/ParallaxHeroBackground";
import Link from "next/link";
import { galleryItems } from "@/lib/gallery-data";

export const metadata = {
  title: "Gallery — Orange Goods",
  description: "A look at the custom goods we've made for brands across the country.",
};

export default function GalleryPage() {
  return (
    <main className="pb-24 md:pb-0">
      <section className="relative overflow-hidden bg-[#1C1C1C] px-4 py-16 text-white md:px-8 md:py-24 lg:px-12">
        <ParallaxHeroBackground
          image="/images/gallery/ideas-quality-goods-towel-500gsm.jpg"
          position="center 40%"
        />
        <div className="absolute inset-0 bg-[#1C1C1C]/32" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1C1C1C]/58 via-[#1C1C1C]/42 to-[#1C1C1C]/14" />
        <div className="relative mx-auto grid max-w-6xl gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white/75">
              Our Work
            </p>
            <h1 className="mt-5 max-w-3xl text-5xl uppercase leading-none text-[var(--og-orange)] md:text-6xl lg:text-7xl">
              Gallery
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-white/82 md:text-xl">
              Real Orange Goods projects across hats, apparel, drinkware, bags, gifting, and the pieces people actually keep.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end lg:self-end">
            <Link href="/contact" className="btn-og inline-flex">
              Start a project
            </Link>
            <Link href="/goods" className="btn-og-white inline-flex">
              View goods
            </Link>
          </div>
        </div>
      </section>

      <GalleryBoard items={galleryItems} />

      <section className="px-6 py-12 text-center">
        <p className="text-base text-[var(--og-muted)]">
          Like what you see?{" "}
          <a href="/contact" className="font-semibold text-[var(--og-orange)] hover:underline">
            Start a project →
          </a>
        </p>
      </section>
    </main>
  );
}
