import Link from "next/link";
import { AllGoodsBrowser } from "@/components/AllGoodsBrowser";
import { ParallaxHeroBackground } from "@/components/ParallaxHeroBackground";
import {
  buildGoodsBrowserItems,
  type GoodsBrowserCategory,
  type GoodsBrowserProductionPath,
} from "@/lib/goods-browser";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Full Custom Hats — Orange Goods",
  description:
    "Browse full custom hat styles, compare silhouettes, and move into the create flow from one dedicated hats page.",
  path: "/goods/hats/full-custom",
  image: "/images/gallery/headwear-full-custom-verve-larrea-hat-038.jpg",
  imageAlt: "Full custom hat styles",
});

type FullCustomHatsPageProps = {
  searchParams?: Promise<{
    search?: string;
    type?: string;
    brand?: string;
    color?: string;
    fit?: string;
    price?: string;
    page?: string;
    perPage?: string;
  }>;
};

function parsePositiveInteger(value: string | undefined, fallback: number) {
  const parsed = Number.parseInt(value ?? "", 10);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback;
}

export default async function FullCustomHatsBrowserPage({
  searchParams,
}: FullCustomHatsPageProps) {
  const resolvedSearchParams = searchParams ? await searchParams : undefined;
  const items = buildGoodsBrowserItems();

  return (
    <main className="bg-[#F7F4ED] pb-24 md:pb-0">
      <section className="relative overflow-hidden bg-[#1C1C1C] px-4 py-14 text-white md:px-8 md:py-20 lg:px-12">
        <ParallaxHeroBackground
          image="/images/gallery/full-custom-feelingswell-hat-labbet-app.jpg"
          inset="-0.75%"
          position="center 48%"
          speed={0.1}
        />
        <div className="absolute inset-0 bg-[#1C1C1C]/46" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1C1C1C]/78 via-[#1C1C1C]/58 to-[#1C1C1C]/28" />
        <div className="relative mx-auto max-w-6xl">
          <Link
            href="/goods/hats"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-white/82 hover:text-[var(--og-orange)]"
          >
            ← Back to hats
          </Link>
          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.28em] text-white/75">
            Full custom hats
          </p>
          <h1 className="mt-4 max-w-4xl text-5xl uppercase leading-none text-[var(--og-orange)] md:text-6xl lg:text-7xl">
            Built from scratch
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/82 md:text-xl">
            Compare silhouettes, profiles, and build directions, then move into the create flow
            when the right hat shape is clear.
          </p>
        </div>
      </section>

      <section id="styles-catalog" className="pt-8 md:pt-10">
        <AllGoodsBrowser
          items={items}
          initialSearch={resolvedSearchParams?.search}
          initialCategory={"hats" as GoodsBrowserCategory}
          initialProductionPath={"full-custom" as GoodsBrowserProductionPath}
          initialType={resolvedSearchParams?.type}
          initialBrand={resolvedSearchParams?.brand}
          initialSelectedColor={resolvedSearchParams?.color}
          initialFit={resolvedSearchParams?.fit}
          initialPrice={resolvedSearchParams?.price}
          initialPage={parsePositiveInteger(resolvedSearchParams?.page, 1)}
          initialPageSize={parsePositiveInteger(resolvedSearchParams?.perPage, 48)}
          lockedCategory="hats"
          searchPlaceholder="Search full custom hat styles, fit, or silhouette"
        />
      </section>
    </main>
  );
}
