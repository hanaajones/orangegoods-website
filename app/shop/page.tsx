import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Shop — Orange Goods",
  description: "Shop OG branded goods — hats, socks, and more. Made by Orange Goods.",
};

const products = [
  {
    name: "OG Classic Cap",
    price: 32,
    image: "https://orangegoods.co/wp-content/uploads/2025/03/OrangeGoods_Goods_5-1.avif",
    status: "available",
    description: "Unstructured dad hat. OG embroidered logo front.",
    tag: "Bestseller",
  },
  {
    name: "OG Trucker",
    price: 30,
    image: "https://orangegoods.co/wp-content/uploads/2024/06/Hat-271x300.jpg",
    status: "available",
    description: "Mesh back, structured front. Snapback closure.",
    tag: null,
  },
  {
    name: "OG Crew Socks",
    price: 18,
    image: "https://orangegoods.co/wp-content/uploads/2025/03/OrangeGoods_Goods_20.avif",
    status: "available",
    description: "Custom knit crew socks. One size fits most.",
    tag: null,
  },
  {
    name: "OG 5-Panel",
    price: 34,
    image: "https://orangegoods.co/wp-content/uploads/2025/03/OrangeGoods_Goods_5-1.avif",
    status: "coming-soon",
    description: "Clean 5-panel silhouette. Coming soon.",
    tag: "Coming Soon",
  },
  {
    name: "OG Bucket Hat",
    price: 36,
    image: "https://orangegoods.co/wp-content/uploads/2025/03/OrangeGoods_Goods_5-1.avif",
    status: "coming-soon",
    description: "Wide brim, relaxed fit. Coming soon.",
    tag: "Coming Soon",
  },
  {
    name: "OG Snapback",
    price: 32,
    image: "https://orangegoods.co/wp-content/uploads/2025/03/OrangeGoods_Goods_5-1.avif",
    status: "coming-soon",
    description: "Flat brim, bold front. Coming soon.",
    tag: "Coming Soon",
  },
  {
    name: "OG Beanie",
    price: 28,
    image: "https://orangegoods.co/wp-content/uploads/2025/03/OrangeGoods_Goods_5-1.avif",
    status: "coming-soon",
    description: "Knit cuff beanie, woven label. Coming soon.",
    tag: "Coming Soon",
  },
];

export default function ShopPage() {
  return (
    <main className="pb-24 md:pb-0">
      {/* Hero */}
      <section className="bg-[#1C1C1C] px-4 py-14 text-white md:px-8 md:py-16 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <p
            className="text-sm font-semibold uppercase tracking-[0.28em] text-[#FF7F00]"
            style={{ fontFamily: "var(--font-accent)" }}
          >
            Orange Goods Shop
          </p>
          <h1
            className="mt-3 text-4xl uppercase leading-tight text-white md:text-6xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Goods worth keeping
          </h1>
          <p className="mt-4 max-w-xl text-base leading-7 text-white/60">
            OG branded merch — hats, socks, and more. The same quality we make for brands, now for you.
          </p>
        </div>
      </section>

      {/* Product grid */}
      <section className="px-4 py-12 md:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <article
              key={product.name}
              className={`group flex flex-col overflow-hidden rounded-[1.5rem] border border-[#1C1C1C]/10 bg-white ${product.status === "coming-soon" ? "opacity-60" : ""}`}
            >
              {/* Photo */}
              <div className="relative aspect-square overflow-hidden bg-[#E4DFCD]">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                {product.tag && (
                  <span
                    className={`absolute left-3 top-3 rounded-xl px-2 py-1 text-[10px] font-bold uppercase ${
                      product.status === "coming-soon"
                        ? "bg-[#1C1C1C]/70 text-white"
                        : "bg-[#FF4200] text-white"
                    }`}
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {product.tag}
                  </span>
                )}
              </div>

              {/* Info */}
              <div className="flex flex-1 flex-col p-4">
                <h2
                  className="text-sm uppercase leading-tight text-[#1C1C1C]"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {product.name}
                </h2>
                <p className="mt-1 text-xs leading-5 text-[#1C1C1C]/50">{product.description}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-base font-bold text-[#FF4200]">${product.price}</span>
                  {product.status === "available" ? (
                    <button
                      className="rounded-xl bg-[#FF4200] px-3 py-1.5 text-[10px] font-bold uppercase text-white transition hover:-translate-y-[2px]"
                      style={{ fontFamily: "var(--font-display)" }}
                      disabled
                      title="Shop coming soon — we're wiring up checkout"
                    >
                      Add to Cart
                    </button>
                  ) : (
                    <span className="text-[10px] uppercase tracking-[0.15em] text-[#1C1C1C]/30">Soon</span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Coming soon note */}
      <section className="border-t border-[#1C1C1C]/10 px-4 py-10 text-center md:px-8">
        <p className="text-sm text-[#1C1C1C]/50">
          Shop checkout coming soon — we&apos;re setting up the store now.
        </p>
        <p className="mt-2 text-sm text-[#1C1C1C]/40">
          Want something now?{" "}
          <Link href="/contact" className="font-semibold text-[#FF4200] hover:underline">
            Reach out →
          </Link>
        </p>
      </section>
    </main>
  );
}
