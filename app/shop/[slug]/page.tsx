"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { notFound, useParams } from "next/navigation";

const catalog: Record<string, {
  name: string; price: number; image: string; images?: string[];
  description: string; details: string[]; care?: string; tag?: string;
  colors?: { name: string; hex: string }[];
  sizes?: string[];
}> = {
  "og-classic-cap": {
    name: "OG Classic Cap",
    price: 32,
    image: "https://orangegoods.co/wp-content/uploads/2025/03/OrangeGoods_Goods_5-1.avif",
    tag: "Bestseller",
    colors: [
      { name: "Natural", hex: "#F5F0E8" },
      { name: "Black", hex: "#1C1C1C" },
      { name: "Navy", hex: "#1B2A4A" },
      { name: "Stone", hex: "#8B8070" },
    ],
    sizes: ["One Size"],
    description: "Unstructured cotton twill. Low profile. OG embroidered logo front. The hat that goes with everything — the one people actually wear.",
    details: [
      "100% cotton twill",
      "Unstructured, low profile",
      "Adjustable strap closure",
      "OG embroidered logo front",
      "One size fits most",
    ],
    care: "Spot clean or hand wash cold. Air dry.",
  },
  "og-trucker": {
    name: "OG Trucker",
    price: 30,
    image: "https://orangegoods.co/wp-content/uploads/2024/06/Hat-271x300.jpg",
    colors: [
      { name: "White / Black", hex: "#F5F5F0" },
      { name: "Grey / Black", hex: "#9B9B9B" },
    ],
    sizes: ["One Size"],
    description: "Structured foam front panel with mesh back. Snapback closure. Clean OG branding. Built for the beach, the job site, or wherever the day takes you.",
    details: [
      "Foam structured front panel",
      "Mesh back for ventilation",
      "Snapback closure",
      "OG embroidered logo front",
      "One size fits most",
    ],
    care: "Spot clean only. Do not machine wash.",
  },
  "og-crew-socks": {
    name: "OG Crew Socks",
    price: 18,
    image: "https://orangegoods.co/wp-content/uploads/2025/03/OrangeGoods_Goods_20.avif",
    colors: [
      { name: "White / Orange", hex: "#F5F5F0" },
      { name: "Black / Orange", hex: "#1C1C1C" },
    ],
    sizes: ["One Size (US 6–12)"],
    description: "Custom knit crew socks with OG branding along the ankle. Thick, comfortable, built to last. People lose their minds over these.",
    details: [
      "Custom jacquard knit",
      "80% cotton, 15% polyester, 5% spandex",
      "Crew height",
      "One size fits most (US 6–12)",
      "OG branding woven in",
    ],
    care: "Machine wash cold, tumble dry low.",
  },
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const expandableSections = [
  { title: "Details", key: "details" },
  { title: "Care", key: "care" },
  { title: "Shipping", key: "shipping" },
];

export default function ShopProductPage() {
  const params = useParams();
  const slug = typeof params.slug === "string" ? params.slug : "";
  const product = catalog[slug];
  if (!product) notFound();

  const [activeColor, setActiveColor] = useState(product.colors?.[0]);
  const [activeSize, setActiveSize] = useState(product.sizes?.[0]);
  const [openSection, setOpenSection] = useState<string | null>("details");

  return (
    <main>
      <div className="min-h-screen md:flex">
        {/* LEFT: Full-bleed image */}
        <div className="relative md:sticky md:top-[84px] md:h-[calc(100vh-84px)] md:w-1/2 lg:w-[55%]">
          <div className="relative h-[70vw] md:h-full">
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(max-width: 768px) 100vw, 55vw"
              className="object-cover"
              priority
            />
            {product.tag && (
              <span
                className="absolute left-5 top-5 rounded-xl bg-[#FF4200] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-white"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {product.tag}
              </span>
            )}
          </div>
        </div>

        {/* RIGHT: Product info */}
        <div className="flex flex-col justify-center px-6 py-12 md:w-1/2 md:overflow-y-auto md:px-12 lg:w-[45%] lg:px-16">
          <Link href="/shop" className="mb-6 inline-flex items-center gap-1 text-xs text-[#1C1C1C]/40 transition hover:text-[#1C1C1C]">
            ← Shop
          </Link>

          {/* Name + price */}
          <h1 className="text-3xl leading-tight text-[#1C1C1C] md:text-4xl" style={{ fontFamily: "var(--font-body)" }}>
            {product.name}
          </h1>
          <p className="mt-2 text-xl text-[#1C1C1C]">${product.price}</p>

          {/* Color */}
          {product.colors && (
            <div className="mt-8">
              <p className="mb-3 text-xs uppercase tracking-[0.15em] text-[#1C1C1C]/50">
                Color — <span className="text-[#1C1C1C]">{activeColor?.name}</span>
              </p>
              <div className="flex gap-2">
                {product.colors.map(c => (
                  <button
                    key={c.name}
                    onClick={() => setActiveColor(c)}
                    title={c.name}
                    className={`h-8 w-8 rounded-full border-2 transition ${activeColor?.name === c.name ? "border-[#1C1C1C] scale-110" : "border-transparent"}`}
                    style={{ background: c.hex, boxShadow: "0 0 0 1px #1C1C1C20" }}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Size */}
          {product.sizes && (
            <div className="mt-6">
              <p className="mb-3 text-xs uppercase tracking-[0.15em] text-[#1C1C1C]/50">Size</p>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map(s => (
                  <button
                    key={s}
                    onClick={() => setActiveSize(s)}
                    className={`rounded-xl border px-4 py-2.5 text-xs uppercase tracking-[0.1em] transition ${activeSize === s ? "border-[#1C1C1C] bg-[#1C1C1C] text-white" : "border-[#1C1C1C]/20 text-[#1C1C1C]/70 hover:border-[#1C1C1C]"}`}
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Description */}
          <p className="mt-8 text-sm leading-7 text-[#1C1C1C]/70" style={{ fontFamily: "var(--font-body)" }}>
            {product.description}
          </p>

          {/* CTA */}
          <div className="mt-8 space-y-3">
            <button
              disabled
              className="w-full rounded-xl bg-[#1C1C1C] px-6 py-4 text-sm font-bold uppercase tracking-[0.08em] text-white opacity-50 cursor-not-allowed"
              style={{ fontFamily: "var(--font-display)" }}
              title="Checkout coming soon"
            >
              Add to Bag — Coming Soon
            </button>
            <Link
              href="/contact"
              className="block w-full rounded-xl border border-[#1C1C1C]/20 px-6 py-4 text-center text-sm font-bold uppercase tracking-[0.08em] text-[#1C1C1C] transition hover:border-[#1C1C1C]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Ask About This Item
            </Link>
          </div>

          {/* Expandable sections */}
          <div className="mt-10 divide-y divide-[#1C1C1C]/10 border-t border-[#1C1C1C]/10">
            {/* Details */}
            <div>
              <button
                onClick={() => setOpenSection(openSection === "details" ? null : "details")}
                className="flex w-full items-center justify-between py-4 text-xs uppercase tracking-[0.15em] text-[#1C1C1C]"
              >
                Details
                <span className="text-lg leading-none text-[#1C1C1C]/40">{openSection === "details" ? "−" : "+"}</span>
              </button>
              {openSection === "details" && (
                <ul className="pb-4 space-y-1">
                  {product.details.map(d => (
                    <li key={d} className="flex items-start gap-2 text-xs leading-6 text-[#1C1C1C]/60">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#FF4200]" />
                      {d}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Care */}
            {product.care && (
              <div>
                <button
                  onClick={() => setOpenSection(openSection === "care" ? null : "care")}
                  className="flex w-full items-center justify-between py-4 text-xs uppercase tracking-[0.15em] text-[#1C1C1C]"
                >
                  Care
                  <span className="text-lg leading-none text-[#1C1C1C]/40">{openSection === "care" ? "−" : "+"}</span>
                </button>
                {openSection === "care" && (
                  <p className="pb-4 text-xs leading-6 text-[#1C1C1C]/60">{product.care}</p>
                )}
              </div>
            )}

            {/* Shipping */}
            <div>
              <button
                onClick={() => setOpenSection(openSection === "shipping" ? null : "shipping")}
                className="flex w-full items-center justify-between py-4 text-xs uppercase tracking-[0.15em] text-[#1C1C1C]"
              >
                Shipping
                <span className="text-lg leading-none text-[#1C1C1C]/40">{openSection === "shipping" ? "−" : "+"}</span>
              </button>
              {openSection === "shipping" && (
                <div className="pb-4 text-xs leading-6 text-[#1C1C1C]/60 space-y-1">
                  <p>Standard: 5–7 business days (free over $75)</p>
                  <p>Express: 2–3 business days</p>
                  <p>Ships from South Bay, California.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
