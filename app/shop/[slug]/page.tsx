"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useCallback, useEffect, useRef } from "react";
import { notFound, useParams } from "next/navigation";

const catalog: Record<string, {
  name: string; price: number; image: string; images?: string[];
  description: string; details: string[]; care?: string; tag?: string;
  colors?: { name: string; hex: string }[];
  sizes?: string[];
}> = {
  "og-classic-cap": {
    name: "OG Classic Hat",
    price: 32,
    image: "https://cdn.shopify.com/s/files/1/0726/9780/7035/files/MG_6697.jpg?v=1781224312",
    images: [
      "https://cdn.shopify.com/s/files/1/0726/9780/7035/files/MG_6697.jpg?v=1781224312",
      "https://orangegoods.co/wp-content/uploads/2025/03/OrangeGoods_Goods_5-1.avif",
      "https://orangegoods.co/wp-content/uploads/2025/03/OrangeGoods_Goods_17.avif",
      "https://orangegoods.co/wp-content/uploads/2025/03/OrangeGoods_Goods_20.avif",
    ],
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
  const [adding, setAdding] = useState(false);
  const [showFit, setShowFit] = useState(false);
  const [showStickyBar, setShowStickyBar] = useState(false);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setShowStickyBar(!entry.isIntersecting),
      { threshold: 0 }
    );
    if (ctaRef.current) observer.observe(ctaRef.current);
    return () => observer.disconnect();
  }, []);

  // Shopify variant IDs keyed by slug
  const SHOPIFY_VARIANTS: Record<string, string> = {
    "og-classic-cap": "47954048123067",
  };
  const variantId = SHOPIFY_VARIANTS[slug];
  const images = product.images?.length ? product.images : [product.image];
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (i: number) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () => setLightboxIndex(i => i !== null ? (i - 1 + images.length) % images.length : 0);
  const nextImage = () => setLightboxIndex(i => i !== null ? (i + 1) % images.length : 0);

  const handleAddToBag = useCallback(async () => {
    if (!variantId) return;
    setAdding(true);
    try {
      const SCRIPT_URL = "https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js";
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const w = window as any;
      const init = async () => {
        const client = w.ShopifyBuy.buildClient({
          domain: "man4me-1j.myshopify.com",
          storefrontAccessToken: "4a744c0fbf54ab21e21ca21bb24d0f7b",
        });
        const checkout = await client.checkout.create();
        await client.checkout.addLineItems(checkout.id, [
          { variantId: `gid://shopify/ProductVariant/${variantId}`, quantity: 1 },
        ]);
        window.location.href = checkout.webUrl;
      };
      if (w.ShopifyBuy?.buildClient) {
        await init();
      } else {
        const script = document.createElement("script");
        script.src = SCRIPT_URL;
        script.onload = init;
        document.head.appendChild(script);
      }
    } catch (e) {
      console.error(e);
      setAdding(false);
    }
  }, [variantId]);

  return (
    <main className="bg-white">
      <div className="md:flex md:items-start md:gap-0">
        {/* LEFT: 2-column photo grid, natural scroll — Alo style */}
        <div className="md:w-[58%] lg:w-[60%] self-start pl-[200px] md:pl-[400px] pt-8 md:pt-12">
          <div className="grid grid-cols-2 gap-[10px]">
            {images.map((src, i) => (
              <div
                key={i}
                className="group relative aspect-square overflow-hidden rounded-xl cursor-zoom-in"
                onClick={() => openLightbox(i)}
              >
                <Image
                  src={src}
                  alt={`${product.name} ${i + 1}`}
                  fill
                  sizes="30vw"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  priority={i === 0}
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />
                {i === 0 && product.tag && (
                  <span
                    className="absolute left-3 top-3 rounded-xl bg-[#FF4200] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-white"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {product.tag}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: Sticky info panel */}
        <div className="md:sticky md:top-[84px] md:w-[42%] lg:w-[40%] md:self-start md:max-h-[calc(100vh-84px)] md:overflow-y-auto">
        <div className="flex flex-col px-6 pt-12 pb-10 md:px-10 lg:px-12">
          {/* Breadcrumb */}
          <nav className="mb-6 flex items-center gap-1.5 text-xs text-[#1C1C1C]/40">
            <Link href="/shop" className="transition hover:text-[#0B32A0]">Shop OG</Link>
            <span>/</span>
            <Link href="/shop" className="transition hover:text-[#0B32A0]">Hats</Link>
            <span>/</span>
            <span className="text-[#1C1C1C]/70 font-medium">{product.name}</span>
          </nav>

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
              <div className="mb-3 flex items-center gap-3">
                <p className="text-xs uppercase tracking-[0.15em] text-[#1C1C1C]/50">Size</p>
                <button
                  onClick={() => setShowFit(!showFit)}
                  className="text-xs text-[#0B32A0] underline underline-offset-2 hover:text-[#FF4200] transition"
                >Fit guide</button>
              </div>
              {showFit && (
                <div className="mb-3 rounded-xl border border-[#1C1C1C]/10 bg-[#F5F0E8] px-4 py-3 text-xs leading-6 text-[#1C1C1C]/70">
                  Fits true to size · Unstructured, low profile · One size fits most (fits 6&#39;1 comfortably)
                </div>
              )}
              <div className="flex flex-wrap gap-2">
                {product.sizes.map(s => (
                  <button
                    key={s}
                    onClick={() => setActiveSize(s)}
                    className={`rounded-none border px-6 py-3 text-sm font-normal tracking-normal cursor-default ${
                      activeSize === s
                        ? "border-[#0B32A0] bg-[#0B32A0] text-white"
                        : "border-[#1C1C1C]/25 bg-transparent text-[#1C1C1C]"
                    }`}
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Description */}
          <p className="mt-8 max-w-md text-base leading-7 text-[#1C1C1C]/70" style={{ fontFamily: "var(--font-body)" }}>
            {product.description}
          </p>

          {/* CTA */}
          <div ref={ctaRef} className="mt-8 flex items-center gap-3">
            {variantId ? (
              <button
                onClick={handleAddToBag}
                disabled={adding}
                className="w-1/2 rounded-xl border-[3px] border-[#0B32A0] bg-transparent px-8 py-3 text-base uppercase tracking-[0.08em] text-[#0B32A0] transition hover:bg-[#0B32A0] hover:text-white disabled:opacity-60 disabled:cursor-not-allowed"
                style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
              >
                {adding ? "Adding…" : "Add to Cart"}
              </button>
            ) : (
              <button
                disabled
                className="w-1/2 rounded-xl border-2 border-[#1C1C1C]/30 bg-transparent px-8 py-3 text-xs font-bold uppercase tracking-[0.08em] text-[#1C1C1C]/30 cursor-not-allowed"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Coming Soon
              </button>
            )}

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
                    <li key={d} className="flex items-start gap-2 text-base leading-7 text-[#1C1C1C]/60">
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
                  <p className="pb-4 text-base leading-7 text-[#1C1C1C]/60">{product.care}</p>
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
                <div className="pb-4 text-base leading-7 text-[#1C1C1C]/60 space-y-1">
                  <p>Standard: 5–7 business days (free over $75)</p>
                  <p>Express: 2–3 business days</p>
                  <p>Ships from South Bay, California.</p>
                </div>
              )}
            </div>
          </div>
        </div>
        </div>
      </div>

      {/* Sticky Add to Cart bar — only shows after scrolling past the main button */}
      {variantId && showStickyBar && (
        <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-[#1C1C1C]/10 bg-white/95 backdrop-blur-sm">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3 md:px-12">
            <div>
              <p className="text-sm font-medium text-[#1C1C1C]">{product.name}</p>
              <p className="text-sm text-[#1C1C1C]/50">${product.price}</p>
            </div>
            <button
              onClick={handleAddToBag}
              disabled={adding}
              className="rounded-xl border-[3px] border-[#0B32A0] bg-transparent px-8 py-2.5 text-sm uppercase tracking-[0.08em] text-[#0B32A0] transition hover:bg-[#0B32A0] hover:text-white disabled:opacity-60"
              style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
            >
              {adding ? "Adding…" : "Add to Cart"}
            </button>
          </div>
        </div>
      )}

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
          onClick={closeLightbox}
        >
          {/* X button */}
          <button
            onClick={closeLightbox}
            className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-sm transition hover:bg-black/50"
            aria-label="Close"
          >
            ✕
          </button>
          {/* Left arrow */}
          <button
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="absolute left-5 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-sm transition hover:bg-black/50"
            aria-label="Previous photo"
          >
            ‹
          </button>
          {/* Image */}
          <div
            className="relative h-[80vmin] w-[80vmin] max-h-[90vh] max-w-[90vw]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[lightboxIndex]}
              alt={`${product.name} ${lightboxIndex + 1}`}
              fill
              className="object-contain"
              sizes="90vw"
            />
          </div>
          {/* Right arrow */}
          <button
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="absolute right-5 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-sm transition hover:bg-black/50"
            aria-label="Next photo"
          >
            ›
          </button>
          {/* Dot indicators */}
          <div className="absolute bottom-5 flex gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={(e) => { e.stopPropagation(); setLightboxIndex(i); }}
                className={`h-1.5 rounded-full transition-all ${
                  i === lightboxIndex ? "w-6 bg-white" : "w-1.5 bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>
      )}

      {/* Quality callout */}
      <section className="mt-20 border-t border-[#1C1C1C]/8 px-6 py-16 md:px-12 md:py-20 lg:px-16">
        <div className="flex flex-col gap-8 md:flex-row md:gap-0 md:divide-x md:divide-[#1C1C1C]/8">
          <div className="flex flex-col items-center text-center md:flex-1 md:px-8">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#1C1C1C]">Retail Quality</p>
            <p className="mt-1 text-sm leading-7 text-[#1C1C1C]/50">The same standard we hold for our brand clients.</p>
          </div>
          <div className="flex flex-col items-center text-center md:flex-1 md:px-8">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#1C1C1C]">Ships in 3–5 Days</p>
            <p className="mt-1 text-sm leading-7 text-[#1C1C1C]/50">Packed and shipped from South Bay, California.</p>
          </div>
          <div className="flex flex-col items-center text-center md:flex-1 md:px-8">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#1C1C1C]">Made to Last</p>
            <p className="mt-1 text-sm leading-7 text-[#1C1C1C]/50">Goods worth keeping — not cheap promo.</p>
          </div>
        </div>
      </section>

      {/* Related products */}
      <section className="border-t border-[#1C1C1C]/8 px-6 py-12 md:px-12 lg:px-16">
        <h2 className="mb-6 text-xs font-normal uppercase tracking-[0.2em] text-[#1C1C1C]/40">You may also like</h2>
        <div className="grid grid-cols-5 gap-3">
          {(() => {
            const others = Object.entries(catalog).filter(([s]) => s !== slug);
            const items: typeof others = [];
            while (items.length < 5) items.push(...others);
            return items.slice(0, 5);
          })().map(([s, p], i) => (
              <Link key={`${s}-${i}`} href={`/shop/${s}`} className="group flex flex-col gap-1.5">
                <div className="relative aspect-square overflow-hidden rounded-lg border border-[#1C1C1C]/8 bg-[#F5F0E8] transition group-hover:border-[#0B32A0]">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    sizes="20vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <p className="text-sm font-medium text-[#1C1C1C]">{p.name}</p>
                <p className="text-sm text-[#1C1C1C]/50">${p.price}</p>
              </Link>
            ))}
        </div>
      </section>
    </main>
  );
}
