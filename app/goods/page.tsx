import Link from "next/link";
import { Reveal } from "@/components/Reveal";

const categories = [
  {
    name: "Custom Headwear",
    href: "/goods/hats",
    image: "https://orangegoods.co/wp-content/uploads/2025/03/OrangeGoods_Goods_5-1.avif",
  },
  {
    name: "Custom Apparel",
    href: "/goods/apparel",
    image: "https://orangegoods.co/wp-content/uploads/2025/03/OrangeGoods_Goods_17.avif",
  },
  {
    name: "Drinkware",
    href: "/goods/drinkware",
    image: "https://orangegoods.co/wp-content/uploads/2025/03/OrangeGoods_Goods_18.avif",
  },
  {
    name: "Bags & Totes",
    href: "/goods/bags",
    image: "https://orangegoods.co/wp-content/uploads/2025/03/OrangeGoods_Goods_19.avif",
  },
  {
    name: "Accessories",
    href: "/goods/accessories",
    image: "https://orangegoods.co/wp-content/uploads/2025/03/OrangeGoods_Goods_20.avif",
  },
  {
    name: "Outerwear",
    href: "/goods/outerwear",
    image: "https://orangegoods.co/wp-content/uploads/2025/03/OrangeGoods_Goods_17.avif",
  },
  {
    name: "Socks",
    href: "/goods/socks",
    image: "https://orangegoods.co/wp-content/uploads/2025/03/OrangeGoods_Goods_20.avif",
  },
  {
    name: "Packaging & Kits",
    href: "/goods/packaging",
    image: "https://orangegoods.co/wp-content/uploads/2024/07/OrangeGoods_ABoutUs_5-1.jpg",
  },
];

export default function GoodsPage() {
  return (
    <main className="pb-24 md:pb-0">
      <section className="bg-[var(--og-blue)] px-4 py-16 text-white md:px-8 md:py-24 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white/70">
            Product Categories
          </p>
          <h1 className="mt-5 text-6xl leading-none text-[var(--og-orange)] md:text-8xl lg:text-9xl">
            CUSTOM GOODS
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-white/82 md:text-xl">
            Everything your brand wears, made right.
          </p>
        </div>
      </section>

      <Reveal className="px-4 py-14 md:px-8 md:py-20 lg:px-12">
        <section className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category, index) => (
              <Link
                key={category.name}
                href={category.href}
                className={`group relative min-h-[17rem] overflow-hidden rounded-[1.75rem] ${
                  index === 0 || index === 7 ? "lg:col-span-2" : ""
                }`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={category.image}
                  alt={category.name}
                  className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C]/82 via-[#1C1C1C]/28 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h2 className="text-2xl leading-tight text-white md:text-3xl">
                    {category.name}
                  </h2>
                  <span className="mt-4 inline-flex min-h-10 items-center rounded-full bg-[var(--og-orange)] px-4 text-xs font-semibold uppercase tracking-[0.14em] text-white transition group-hover:bg-white group-hover:text-[var(--og-orange)]">
                    Explore
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </Reveal>
    </main>
  );
}
