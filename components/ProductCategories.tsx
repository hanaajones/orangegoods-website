import Link from "next/link";
import { Reveal } from "@/components/Reveal";

const categories = [
  {
    name: "Custom Headwear",
    description: "Structured caps, beanies, dad hats, bucket hats — fully custom from brim to button",
    href: "/goods/hats",
    image: "https://orangegoods.co/wp-content/uploads/2025/03/OrangeGoods_Goods_5-1.avif",
    span: "md:col-span-2",
  },
  {
    name: "Custom Apparel",
    description: "Tees, polos, hoodies, flannels, outerwear — built for your brand, not the clearance bin",
    href: "/goods",
    image: "https://orangegoods.co/wp-content/uploads/2025/03/OrangeGoods_Goods_17.avif",
    span: "",
  },
  {
    name: "Drinkware",
    description: "Bottles, mugs, tumblers — the merch people actually use every single day",
    href: "/goods",
    image: "https://orangegoods.co/wp-content/uploads/2025/03/OrangeGoods_Goods_18.avif",
    span: "",
  },
  {
    name: "Bags & Totes",
    description: "Totes, backpacks, duffels — branded carry that doesn't look like a trade-show giveaway",
    href: "/goods",
    image: "https://orangegoods.co/wp-content/uploads/2025/03/OrangeGoods_Goods_19.avif",
    span: "",
  },
  {
    name: "Accessories",
    description: "Socks, patches, keychains, lanyards, and more — the details that tie a brand kit together",
    href: "/goods",
    image: "https://orangegoods.co/wp-content/uploads/2025/03/OrangeGoods_Goods_20.avif",
    span: "",
  },
  {
    name: "Packaging & Kits",
    description: "Retail-ready boxes, tissue, tags, and full gift kits. The unbox moment, done right",
    href: "/goods",
    image: "https://orangegoods.co/wp-content/uploads/2024/07/OrangeGoods_ABoutUs_5-1.jpg",
    span: "md:col-span-2",
  },
];

export function ProductCategories() {
  return (
    <Reveal className="px-4 py-14 md:px-8 lg:px-12">
      <section className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-10">
          <p
            className="text-sm font-semibold uppercase tracking-[0.28em] text-[#FF7F00]"
            style={{ fontFamily: "var(--font-accent)" }}
          >
            Unlimited Capabilities
          </p>
          <h2
            className="mt-3 text-3xl font-extrabold uppercase tracking-tight text-[#FF4200] md:text-4xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            We handle it all
          </h2>
          <p className="mt-2 max-w-xl text-base leading-7 text-[#1C1C1C]/60">
            Hats to hoodies, drinkware to kits — every product category, made right, start to finish
          </p>
        </div>

        {/* Category grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {categories.map((cat) => (
            <Link
              key={cat.name}
              href={cat.href}
              className={`group relative overflow-hidden rounded-[2rem] ${cat.span}`}
              style={{ minHeight: "260px" }}
            >
              {/* Background photo */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={cat.image}
                alt={cat.name}
                className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C]/80 via-[#1C1C1C]/30 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3
                  className="text-xl font-extrabold uppercase tracking-tight text-white md:text-2xl"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {cat.name}
                </h3>
                <p className="mt-1.5 text-sm leading-5 text-white/70">{cat.description}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-[#FF4200] px-4 py-2 text-xs font-semibold text-white transition group-hover:bg-white group-hover:text-[#FF4200]"
                  style={{ fontFamily: "var(--font-display)" }}>
                  EXPLORE →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </Reveal>
  );
}
