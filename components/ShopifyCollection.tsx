"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ShopifyBuy: any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    __ogShopify: any;
  }
}

const SHOPIFY_DOMAIN = "man4me-1j.myshopify.com";
const STOREFRONT_TOKEN = "4a744c0fbf54ab21e21ca21bb24d0f7b";

// Map our card slugs to Shopify variant IDs
// Variant ID is the numeric part of gid://shopify/ProductVariant/XXXXX
const SHOPIFY_VARIANTS: Record<string, string> = {
  "og-classic-cap": "47954048123067", // OG Classic Hat — Flat Dark Earth
};

const products = [
  {
    slug: "og-classic-cap",
    name: "OG Classic Hat",
    price: 32,
    image: "https://cdn.shopify.com/s/files/1/0726/9780/7035/files/MG_6697.jpg?v=1781224312",
    description: "Unstructured dad hat. OG embroidered logo front.",
    tag: "Bestseller",
    href: "/shop/og-classic-cap",
  },
  {
    slug: "og-trucker",
    name: "OG Trucker",
    price: 30,
    image: "https://orangegoods.co/wp-content/uploads/2024/06/Hat-271x300.jpg",
    description: "Mesh back, structured front. Snapback closure.",
    tag: null,
    href: "/shop/og-trucker",
  },
  {
    slug: "og-crew-socks",
    name: "OG Crew Socks",
    price: 18,
    image: "https://orangegoods.co/wp-content/uploads/2025/03/OrangeGoods_Goods_20.avif",
    description: "Custom knit crew socks. One size fits most.",
    tag: null,
    href: "/shop/og-crew-socks",
  },
  {
    slug: "og-5-panel",
    name: "OG 5-Panel",
    price: 34,
    image: "https://orangegoods.co/wp-content/uploads/2025/03/OrangeGoods_Goods_5-1.avif",
    description: "Clean 5-panel silhouette. Coming soon.",
    tag: "Coming Soon",
    href: null,
  },
  {
    slug: "og-bucket-hat",
    name: "OG Bucket Hat",
    price: 36,
    image: "https://orangegoods.co/wp-content/uploads/2025/03/OrangeGoods_Goods_5-1.avif",
    description: "Wide brim, relaxed fit. Coming soon.",
    tag: "Coming Soon",
    href: null,
  },
  {
    slug: "og-beanie",
    name: "OG Beanie",
    price: 28,
    image: "https://orangegoods.co/wp-content/uploads/2025/03/OrangeGoods_Goods_20.avif",
    description: "Knit cuff beanie, woven label. Coming soon.",
    tag: "Coming Soon",
    href: null,
  },
];

export default function ShopifyCollection() {
  const cartToggleRef = useRef<HTMLDivElement>(null);
  const initialized = useRef(false);
  const [addingSlug, setAddingSlug] = useState<string | null>(null);
  const [addedSlug, setAddedSlug] = useState<string | null>(null);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    const SCRIPT_URL = "https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js";

    function init() {
      const client = window.ShopifyBuy.buildClient({
        domain: SHOPIFY_DOMAIN,
        storefrontAccessToken: STOREFRONT_TOKEN,
      });

      window.ShopifyBuy.UI.onReady(client).then((ui: unknown) => {
        // Mount the cart toggle (floating cart icon + drawer)
        (ui as { createComponent: (type: string, options: unknown) => void }).createComponent("cart", {
          node: cartToggleRef.current,
          options: {
            cart: {
              styles: {
                button: {
                  "background-color": "#FF4200",
                  "font-family": "inherit",
                  "border-radius": "12px",
                  ":hover": { "background-color": "#e03a00" },
                },
              },
              text: { total: "Subtotal", button: "Checkout" },
            },
            toggle: {
              styles: {
                toggle: { "background-color": "#FF4200" },
              },
            },
          },
        });

        window.__ogShopify = { client, ui };
      });
    }

    if (window.ShopifyBuy?.UI) {
      init();
    } else {
      const script = document.createElement("script");
      script.async = true;
      script.src = SCRIPT_URL;
      script.onload = init;
      document.head.appendChild(script);
    }
  }, []);

  async function handleAddToCart(slug: string) {
    const variantId = SHOPIFY_VARIANTS[slug];
    if (!variantId || !window.__ogShopify?.client) return;

    setAddingSlug(slug);
    try {
      const { client } = window.__ogShopify;
      const checkout = await client.checkout.create();
      await client.checkout.addLineItems(checkout.id, [
        { variantId: `gid://shopify/ProductVariant/${variantId}`, quantity: 1 },
      ]);
      // Redirect to Shopify checkout
      window.location.href = checkout.webUrl;
    } catch (e) {
      console.error("Shopify add to cart error", e);
    } finally {
      setAddingSlug(null);
      setAddedSlug(slug);
      setTimeout(() => setAddedSlug(null), 2000);
    }
  }

  return (
    <>
      {/* Shopify cart toggle (floating bottom-right) */}
      <div ref={cartToggleRef} className="fixed bottom-6 right-6 z-50" />

      {/* Product grid */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:gap-8">
        {products.map((product) => {
          const hasShopifyProduct = !!SHOPIFY_VARIANTS[product.slug];
          const isComingSoon = product.tag === "Coming Soon";
          const isAvailable = !isComingSoon;

          const cardInner = (
            <div
              className={`group relative flex flex-col overflow-hidden rounded-2xl border bg-white transition-all duration-200 ${isComingSoon ? "opacity-60 border-[#1C1C1C]/10" : "border-[#1C1C1C]/10 hover:border-[#0B32A0] hover:shadow-md"}`}
            >
              {/* Image — links to product page if available */}
              <Link href={product.href ?? "#"} className={`relative block aspect-square overflow-hidden bg-[#F5F0E8] ${!product.href ? "pointer-events-none" : ""}`}>
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {product.tag && (
                  <span
                    className={`absolute left-3 top-3 rounded-xl px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-white ${product.tag === "Bestseller" ? "bg-[#FF4200]" : "bg-[#1C1C1C]/60"}`}
                  >
                    {product.tag}
                  </span>
                )}
              </Link>

              {/* Info */}
              <div className="flex flex-1 flex-col gap-1 p-4">
                <h3 className="text-sm font-semibold text-[#1C1C1C]">{product.name}</h3>
                <p className="text-xs leading-5 text-[#1C1C1C]/50">{product.description}</p>
                <div className="mt-auto flex items-center justify-between pt-3">
                  <span className="text-base font-semibold text-[#1C1C1C]">${product.price}</span>
                  {isAvailable && hasShopifyProduct ? (
                    <button
                      onClick={(e) => { e.preventDefault(); handleAddToCart(product.slug); }}
                      disabled={addingSlug === product.slug}
                      className="rounded-xl bg-[#1C1C1C] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-[#FF4200] disabled:opacity-50"
                    >
                      {addingSlug === product.slug ? "Adding…" : addedSlug === product.slug ? "Added ✓" : "Add to Cart"}
                    </button>
                  ) : isAvailable ? (
                    <span className="text-[10px] uppercase tracking-[0.15em] text-[#1C1C1C]/30">Coming soon</span>
                  ) : (
                    <span className="text-[10px] uppercase tracking-[0.15em] text-[#1C1C1C]/30">Soon</span>
                  )}
                </div>
              </div>
            </div>
          );

          // Never wrap in Link — let the Add to Cart button handle the action
          return <div key={product.slug}>{cardInner}</div>;
        })}
      </div>
    </>
  );
}
