import Image from "next/image";
import ShopClient from "./ShopClient";

export const metadata = {
  title: "Shop OG — Orange Goods",
  description: "Shop OG branded goods — hats, socks, and more. Made by Orange Goods.",
};

export default function ShopPage() {
  return (
    <main className="pb-24 md:pb-0">
      {/* Hero — natural photo with text */}
      <section className="relative overflow-hidden h-64 md:h-80 lg:h-96">
        <Image
          src="/images/gallery/hat-og-big-bear-dscf7571.jpg"
          alt="Orange Goods hats photographed at Big Bear"
          fill
          sizes="100vw"
          className="object-cover object-[center_48%]"
          priority
        />
        {/* Text sits on top, no overlay */}
        <div className="relative flex h-full flex-col items-center justify-center px-4 md:px-8 lg:px-12">
          <p
            className="text-sm font-semibold uppercase tracking-[0.28em] text-white drop-shadow"
            style={{ fontFamily: "var(--font-accent)" }}
          >
            Shop OG
          </p>
          <h1
            className="mt-2 text-4xl uppercase leading-tight text-white drop-shadow md:text-6xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Shop Orange Goods
          </h1>
          <p className="mt-2 max-w-xl text-base leading-7 text-white drop-shadow">
            OG branded merch — hats, socks, and more. The same quality we make for brands, now for you.
          </p>
        </div>
      </section>

      {/* Shopify product collection */}
      <ShopClient />
    </main>
  );
}
