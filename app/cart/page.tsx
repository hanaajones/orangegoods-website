"use client";

import { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ParallaxHeroBackground } from "@/components/ParallaxHeroBackground";

function formatDecoration(value: string | null) {
  if (!value) return null;

  if (value === "patch") return "Patch";
  if (value === "embroidery") return "Embroidery";

  return value.charAt(0).toUpperCase() + value.slice(1);
}

function formatEmbStyle(value: string | null) {
  if (!value || value === "none") return null;

  return value
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function CartPageContent() {
  const searchParams = useSearchParams();
  const style = searchParams.get("style");
  const color = searchParams.get("color");
  const qty = searchParams.get("qty");
  const decoration = formatDecoration(searchParams.get("decoration"));
  const embStyle = formatEmbStyle(searchParams.get("embStyle"));
  const back = searchParams.get("back") === "true";
  const side = searchParams.get("side") === "true";

  const hasItem = Boolean(style || color || qty || decoration || embStyle || back || side);

  const details = [
    { label: "Style", value: style },
    { label: "Color", value: color },
    { label: "Quantity", value: qty ? `${Number(qty).toLocaleString()} units` : null },
    { label: "Front decoration", value: decoration },
    { label: "Embroidery style", value: embStyle },
    { label: "Back embroidery", value: back ? "Yes" : null },
    { label: "Side embroidery", value: side ? "Yes" : null },
  ].filter((item) => item.value);

  return (
    <main className="min-h-screen bg-[#F7F4ED] pb-20 text-[#1C1C1C]">
      <section className="relative overflow-hidden bg-[#1C1C1C] px-4 py-16 text-white md:px-8 md:py-24 lg:px-12">
        <ParallaxHeroBackground
          image="/images/gallery/goods-hero-misc-dscf4876.jpg"
          position="center 48%"
        />
        <div className="absolute inset-0 bg-[#1C1C1C]/32" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1C1C1C]/58 via-[#1C1C1C]/42 to-[#1C1C1C]/14" />
        <div className="relative mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white/75">
            Orange Goods Cart
          </p>
          <h1
            className="mt-5 max-w-3xl text-5xl uppercase leading-none text-[var(--og-orange)] md:text-6xl lg:text-7xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Your cart
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-white/82 md:text-xl">
            Review what you&apos;ve configured so far. Full checkout is still being wired, but this
            page now has a proper home instead of dropping into the build form.
          </p>
        </div>
      </section>

      <section className="px-4 py-10 md:px-8 md:py-12 lg:px-12">
        <div className="mx-auto max-w-6xl">
          {hasItem ? (
            <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
              <article className="rounded-[1.8rem] border border-[#0B32A0]/12 bg-white p-6 shadow-[0_16px_40px_rgba(8,30,111,0.06)] md:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#FF4200]">
                  Configured item
                </p>
                <h2
                  className="mt-3 text-[2.5rem] uppercase leading-[0.92] text-[#0B32A0] md:text-[3.4rem]"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {style ?? "Custom product"}
                </h2>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {details.map((detail) => (
                    <div
                      key={detail.label}
                      className="rounded-[1.2rem] border border-[#0B32A0]/10 bg-[#F7F4ED] p-4"
                    >
                      <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-[#0B32A0]/58">
                        {detail.label}
                      </p>
                      <p className="mt-2 text-base font-semibold text-[#1C1C1C]">{detail.value}</p>
                    </div>
                  ))}
                </div>
              </article>

              <aside className="rounded-[1.8rem] border border-[#0B32A0]/12 bg-white p-6 shadow-[0_16px_40px_rgba(8,30,111,0.06)] md:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#FF4200]">
                  Next step
                </p>
                <h2
                  className="mt-3 text-[2.2rem] uppercase leading-[0.92] text-[#0B32A0]"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Let&apos;s finish the order
                </h2>
                <p className="mt-4 text-base leading-7 text-[#1C1C1C]/68">
                  We&apos;re still wiring a full self-serve checkout, so the cart is currently a
                  clean review step. From here, you can keep building or send the project to our
                  team to finalize.
                </p>

                <div className="mt-8 grid gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex min-h-12 items-center justify-center rounded-xl bg-[#FF4200] px-5 text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-[#d73b05]"
                  >
                    Send to our team
                  </Link>
                  <Link
                    href="/goods/hats"
                    className="inline-flex min-h-12 items-center justify-center rounded-xl border border-[#0B32A0]/16 px-5 text-sm font-semibold uppercase tracking-[0.14em] text-[#0B32A0] transition hover:border-[#0B32A0] hover:bg-[#F7F4ED]"
                  >
                    Keep shopping
                  </Link>
                </div>
              </aside>
            </div>
          ) : (
            <div className="rounded-[1.9rem] border border-[#0B32A0]/12 bg-white p-8 text-center shadow-[0_16px_40px_rgba(8,30,111,0.06)] md:p-12">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#FF4200]">
                Nothing here yet
              </p>
              <h2
                className="mt-4 text-[2.6rem] uppercase leading-[0.92] text-[#0B32A0] md:text-[4rem]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Your cart is empty
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#1C1C1C]/68 md:text-lg">
                Add a product from the quick-turn styles or keep exploring goods. This page now
                gives the cart a real destination instead of sending people into the build flow.
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  href="/goods"
                  className="inline-flex min-h-12 items-center justify-center rounded-xl bg-[#FF4200] px-5 text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-[#d73b05]"
                >
                  Browse goods
                </Link>
                <Link
                  href="/build"
                  className="inline-flex min-h-12 items-center justify-center rounded-xl border border-[#0B32A0]/16 px-5 text-sm font-semibold uppercase tracking-[0.14em] text-[#0B32A0] transition hover:border-[#0B32A0] hover:bg-[#F7F4ED]"
                >
                  Build a project
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

export default function CartPage() {
  return (
    <Suspense>
      <CartPageContent />
    </Suspense>
  );
}
