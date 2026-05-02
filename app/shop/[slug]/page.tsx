import Link from "next/link";
import Image from "next/image";

const products: Record<string, {
  name: string; price: number; image: string; description: string;
  details: string; sizes?: string; tag?: string;
}> = {
  "og-classic-cap": {
    name: "OG Classic Cap",
    price: 32,
    image: "https://orangegoods.co/wp-content/uploads/2025/03/OrangeGoods_Goods_5-1.avif",
    description: "Unstructured dad hat with OG embroidered logo front. Low profile, adjustable strap, curved brim. The one people actually wear.",
    details: "100% cotton twill · Unstructured · Adjustable strap · One size fits most · OG embroidered logo front",
    tag: "Bestseller",
  },
  "og-trucker": {
    name: "OG Trucker",
    price: 30,
    image: "https://orangegoods.co/wp-content/uploads/2024/06/Hat-271x300.jpg",
    description: "Structured front panel with mesh back. Flat brim, snapback closure. Classic trucker silhouette with OG branding.",
    details: "Foam front · Mesh back · Snapback closure · One size fits most",
  },
  "og-crew-socks": {
    name: "OG Crew Socks",
    price: 18,
    image: "https://orangegoods.co/wp-content/uploads/2025/03/OrangeGoods_Goods_20.avif",
    description: "Custom knit crew socks with OG branding. Thick and comfortable. The most talked-about item in the lineup.",
    details: "Custom knit · Crew length · One size fits most (US 6–12) · 80% cotton, 15% polyester, 5% spandex",
    sizes: "One Size",
  },
};

export function generateStaticParams() {
  return Object.keys(products).map((slug) => ({ slug }));
}

export default function ShopProductPage({ params }: { params: { slug: string } }) {
  const product = products[params.slug];

  if (!product) {
    return (
      <main className="flex min-h-[60vh] items-center justify-center px-4 text-center">
        <div>
          <p className="text-[#1C1C1C]/40">Product not found.</p>
          <Link href="/shop" className="mt-4 inline-block text-[#FF4200] hover:underline">← Back to Shop</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="pb-24 md:pb-0">
      {/* Back */}
      <div className="px-4 py-6 md:px-8 lg:px-12">
        <Link href="/shop" className="text-sm text-[#1C1C1C]/40 transition hover:text-[#1C1C1C]">
          ← Back to Shop
        </Link>
      </div>

      {/* Product */}
      <section className="px-4 pb-14 md:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl grid gap-12 md:grid-cols-2 md:items-start">
          {/* Image */}
          <div className="relative aspect-square overflow-hidden rounded-[2rem] bg-[#E4DFCD]">
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
            {product.tag && (
              <span className="absolute left-4 top-4 rounded-xl bg-[#FF4200] px-3 py-1.5 text-xs font-bold uppercase text-white" style={{ fontFamily: "var(--font-display)" }}>
                {product.tag}
              </span>
            )}
          </div>

          {/* Info */}
          <div>
            <h1
              className="text-3xl uppercase leading-tight text-[#1C1C1C] md:text-5xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {product.name}
            </h1>
            <p className="mt-3 text-2xl font-bold text-[#FF4200]">${product.price}</p>

            <p className="mt-5 text-base leading-7 text-[#1C1C1C]/70">{product.description}</p>

            <div className="mt-6 rounded-[1.25rem] border border-[#1C1C1C]/10 bg-[#F3EFE7] px-5 py-4">
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#FF4200]">Details</p>
              <p className="mt-2 text-sm leading-6 text-[#1C1C1C]/70">{product.details}</p>
            </div>

            {/* CTA */}
            <div className="mt-8 flex flex-col gap-3">
              <button
                disabled
                className="btn-og w-full cursor-not-allowed justify-center opacity-60"
                title="Shop checkout coming soon"
              >
                Add to Cart (Coming Soon)
              </button>
              <Link href="/contact" className="btn-og-white w-full justify-center border border-[#0B32A0]/30 text-[#0B32A0]">
                Ask About This Item
              </Link>
            </div>

            <p className="mt-4 text-center text-xs text-[#1C1C1C]/30">
              Checkout powered by Shopify — coming soon.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
