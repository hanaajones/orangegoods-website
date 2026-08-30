import { ContactPromptSection } from "@/components/ContactPromptSection";
import { ParallaxHeroBackground } from "@/components/ParallaxHeroBackground";
import { AllGoodsBrowser } from "@/components/AllGoodsBrowser";
import { buildGoodsBrowserItems } from "@/lib/goods-browser";

export const metadata = {
  title: "All Goods — Orange Goods",
  description:
    "Browse hats, apparel, blankets, drinkware, bags, accessories, and more from one shared Orange Goods browser.",
};

export default function AllGoodsPage() {
  const items = buildGoodsBrowserItems();

  return (
    <main className="bg-[#F7F4ED] pb-24 md:pb-0">
      <section className="relative overflow-hidden bg-[#1C1C1C] px-4 py-14 text-white md:px-8 md:py-20 lg:px-12">
        <ParallaxHeroBackground
          image="/images/gallery/goods-hero-misc-dscf4876.jpg"
          inset="-0.75%"
          position="center 48%"
          speed={0.1}
        />
        <div className="absolute inset-0 bg-[#1C1C1C]/46" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1C1C1C]/78 via-[#1C1C1C]/58 to-[#1C1C1C]/28" />
        <div className="relative mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white/75">
            Goods browser
          </p>
          <h1 className="mt-4 max-w-5xl text-5xl uppercase leading-none text-[var(--og-orange)] md:text-6xl lg:text-7xl">
            Orange Goods
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/82 md:text-xl">
            This is the shared browser for hats, beanies, apparel, blankets, drinkware, bags,
            socks, and the rest of the goods system as it fills out.
          </p>
          <p className="mt-4 text-sm font-semibold uppercase tracking-[0.12em] text-white/78">
            Browse by path or category. Narrow by color, fit, cost, and product type.
          </p>
        </div>
      </section>

      <section id="styles-catalog" className="pt-8 md:pt-10">
        <AllGoodsBrowser
          items={items}
          showProductionPathToggle
          productionPathHelperText="Full Custom = built completely from scratch | Quick Turn = premium blanks decorated"
        />
      </section>

      <ContactPromptSection />
    </main>
  );
}
