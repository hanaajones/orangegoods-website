"use client";

import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { useState } from "react";

const startProjectHref = "/contact";
const buildOnlineHref = "/build";
const products = [
  { label: "Hats", href: "/goods/hats", image: "https://orangegoods.co/wp-content/uploads/2025/03/OrangeGoods_Goods_5-1.avif" },
  { label: "Apparel", href: "/goods/apparel", image: "https://orangegoods.co/wp-content/uploads/2025/03/OrangeGoods_Goods_17.avif" },
  { label: "Drinkware", href: "/goods/drinkware", image: "https://orangegoods.co/wp-content/uploads/2025/03/OrangeGoods_Goods_18.avif" },
  { label: "Bags + Totes", href: "/goods/bags", image: "https://orangegoods.co/wp-content/uploads/2025/03/OrangeGoods_Goods_19.avif" },
  { label: "Accessories", href: "/goods/accessories", image: "https://orangegoods.co/wp-content/uploads/2025/03/OrangeGoods_Goods_20.avif" },
  { label: "Socks", href: "/goods/socks", image: "https://orangegoods.co/wp-content/uploads/2025/03/OrangeGoods_Goods_20.avif" },
];

const serviceLinks = [
  { label: "Embroidery", href: "/services/embroidery", note: "" },
  { label: "Screen Printing", href: "/services/screen-printing", note: "Quick turnaround products, 2–3 weeks" },
];

const customLinks = [
  { label: "Our Process", href: "/#process" },
  { label: "Gallery", href: "/gallery" },
  { label: "FAQ", href: "/faq" },
];

const aboutLinks = [
  { label: "About", href: "/about" },
  { label: "OG Crafted vs Ready Made", href: "/services" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

function MenuLink({
  href,
  children,
  disabled = false,
}: {
  href: string;
  children: ReactNode;
  disabled?: boolean;
}) {
  if (disabled) {
    return (
      <span className="flex min-h-10 items-center justify-between rounded-2xl px-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#1C1C1C]/40">
        {children}
        <span className="text-[0.65rem]">Soon</span>
      </span>
    );
  }

  return (
    <Link
      href={href}
      className="flex min-h-10 items-center rounded-2xl px-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#1C1C1C] transition hover:bg-[#1C1C1C]/8 hover:text-[#FF4200]"
    >
      {children}
    </Link>
  );
}

export function Nav() {
  const [activeMenu, setActiveMenu] = useState<"custom" | "build" | "about" | null>(null);
  const [hoveredProduct, setHoveredProduct] = useState(products[0].image);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Backdrop overlay when mega menu is open */}
      {activeMenu && (
        <div
          className="fixed inset-0 z-30 bg-black/40 transition-opacity duration-200"
          onClick={() => setActiveMenu(null)}
          aria-hidden="true"
        />
      )}

      <header className="sticky top-0 z-40">
        <div
          className="relative"
          onMouseLeave={() => setActiveMenu(null)}
        >
          <div className="flex items-center bg-[#FF4200] px-4 py-[22px] shadow-[0_4px_24px_rgba(255,66,0,0.25)] md:px-8">
            {/* Mobile hamburger */}
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              className="inline-flex min-h-10 min-w-10 items-center justify-center rounded-xl text-xl font-semibold text-white md:hidden"
              aria-label="Open menu"
            >
              ☰
            </button>
            {/* Logo — left */}
            <Link href="/" className="flex shrink-0 items-center" aria-label="Orange Goods">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logos/OrangeGoods_Logo_Main_Horizontal_Orange.svg"
                alt="Orange Goods"
                className="h-9 w-auto md:h-10"
              />
            </Link>
            {/* Nav — centered */}
            <nav className="hidden flex-1 items-center justify-center gap-10 md:flex">
              <button
                type="button"
                onMouseEnter={() => setActiveMenu("custom")}
                onClick={() => setActiveMenu(activeMenu === "custom" ? null : "custom")}
                className="font-[family-name:var(--font-display)] text-xl tracking-[0.1em] text-white transition hover:text-[#FF7F00] active:text-[#FF7F00]"
              >
                CUSTOM ▾
              </button>
              <button
                type="button"
                onMouseEnter={() => setActiveMenu("build")}
                onClick={() => setActiveMenu(activeMenu === "build" ? null : "build")}
                className="font-[family-name:var(--font-display)] text-xl tracking-[0.1em] text-white transition hover:text-[#FF7F00] active:text-[#FF7F00]"
              >
                BUILD ONLINE ▾
              </button>
              <Link
                href="/design"
                className="font-[family-name:var(--font-display)] text-xl tracking-[0.1em] text-white transition hover:text-[#FF7F00] active:text-[#FF7F00]"
              >
                DESIGN
              </Link>
              <Link
                href="/shop"
                className="font-[family-name:var(--font-display)] text-xl tracking-[0.1em] text-white transition hover:text-[#FF7F00] active:text-[#FF7F00]"
              >
                SHOP
              </Link>
              <button
                type="button"
                onMouseEnter={() => setActiveMenu("about")}
                onClick={() => setActiveMenu(activeMenu === "about" ? null : "about")}
                className="font-[family-name:var(--font-display)] text-xl tracking-[0.1em] text-white transition hover:text-[#FF7F00] active:text-[#FF7F00]"
              >
                ABOUT ▾
              </button>
            </nav>
            {/* Right group: icons + CTA */}
            <div className="hidden shrink-0 items-center gap-1 md:flex">
              <Link
                href="/portal"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl text-white transition hover:bg-white/15"
                aria-label="My account"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </Link>
              <Link
                href="/build"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full text-white transition hover:bg-white/15"
                aria-label="Cart"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </Link>
              <Link
                href={startProjectHref}
                className="btn-og-white inline-flex items-center rounded-xl px-5 py-3 text-sm font-bold uppercase tracking-[0.1em] text-[#FF4200]"
              >
                <span className="md:hidden">Start</span>
                <span className="hidden md:inline">START A PROJECT</span>
              </Link>
            </div>
          </div>

          {activeMenu ? (
            <div
              className="absolute left-1/2 top-[calc(100%+0.75rem)] hidden min-h-[320px] w-[60vw] -translate-x-1/2 rounded-[2rem] border-[3px] border-[#0B32A0] bg-[#F3EFE7] p-5 text-[#1C1C1C] shadow-[0_28px_60px_rgba(0,0,0,0.12)] md:block"
              onMouseEnter={() => setActiveMenu(activeMenu)}
            >
              {activeMenu === "custom" ? (
                <div className="grid gap-3 md:grid-cols-[1.4fr_0.9fr_0.9fr_0.9fr]">
                  {/* Col 1: Photo */}
                  <div className="relative min-h-[14rem] overflow-hidden rounded-[1.5rem] bg-[#e0c7ad]">
                    <Image
                      src={hoveredProduct}
                      alt="Orange Goods product"
                      fill
                      sizes="260px"
                      className="object-cover transition-opacity duration-300"
                    />
                  </div>
                  {/* Col 2: Products */}
                  <div>
                    <p className="px-3 pb-2 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--og-orange)]">
                      Products
                    </p>
                    <div className="grid gap-1">
                      {products.map((item) => (
                        <div key={item.label} onMouseEnter={() => setHoveredProduct(item.image)}>
                          <MenuLink href={item.href}>{item.label}</MenuLink>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Col 2: Ready Made Services */}
                  <div>
                    <p className="px-3 pb-2 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--og-orange)]">
                      Ready Made Services
                    </p>
                    <div className="grid gap-1">
                      {serviceLinks.map((item) => (
                        <div key={item.label}>
                          <MenuLink href={item.href}>{item.label}</MenuLink>
                          {item.note && <p className="px-3 text-[10px] text-[#1C1C1C]/40">{item.note}</p>}
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Col 3: Explore */}
                  <div>
                    <p className="px-3 pb-2 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--og-orange)]">
                      Explore
                    </p>
                    <div className="grid gap-1">
                      {customLinks.map((item) => (
                        <MenuLink key={item.label} href={item.href}>{item.label}</MenuLink>
                      ))}
                      <MenuLink href="/case-studies">Case Studies</MenuLink>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <Link href="/quiz" className="btn-og-white border border-[#0B32A0]/30 text-[#0B32A0]">Find Your Goods</Link>
                      <Link href={startProjectHref} className="btn-og">Start a Project</Link>
                    </div>
                  </div>
                </div>
              ) : null}

              {activeMenu === "build" ? (
                <div className="grid gap-3 md:grid-cols-[1.4fr_0.9fr_0.9fr_0.9fr]">
                  {/* Col 1: Photo */}
                  <div className="relative min-h-[14rem] overflow-hidden rounded-[1.5rem] bg-[#e0c7ad]">
                    <Image
                      src={products[0].image}
                      alt="Orange Goods"
                      fill
                      sizes="300px"
                      className="object-cover"
                    />

                  </div>
                  {/* Col 2: Products */}
                  <div>
                    <p className="px-3 pb-2 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--og-orange)]">
                      Products
                    </p>
                    <div className="grid gap-1">
                      {["Hats", "Apparel", "Drinkware", "Bags + Totes", "Accessories", "Socks"].map((label) => (
                        <MenuLink key={label} href={buildOnlineHref}>{label}</MenuLink>
                      ))}
                    </div>
                  </div>
                  {/* Col 3: How It Works */}
                  <div>
                    <p className="px-3 pb-2 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--og-orange)]">
                      How It Works
                    </p>
                    <div className="grid gap-1">
                      <MenuLink href="/services#ready-made">Ready Made</MenuLink>
                      <MenuLink href="/services#og-crafted">OG Crafted</MenuLink>
                      <MenuLink href="/quiz">Find My Goods</MenuLink>
                    </div>
                  </div>
                  {/* Col 4: Explore */}
                  <div>
                    <p className="px-3 pb-2 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--og-orange)]">
                      Explore
                    </p>
                    <div className="grid gap-1">
                      <MenuLink href="/faq">FAQ</MenuLink>
                      <MenuLink href="/gallery">Gallery</MenuLink>
                      <MenuLink href="/case-studies">Case Studies</MenuLink>
                    </div>
                    <div className="mt-3">
                      <Link href={buildOnlineHref} className="btn-og">Start Building</Link>
                    </div>
                  </div>
                </div>
              ) : null}

              {activeMenu === "about" ? (
                <div className="ml-auto max-w-sm">
                  <p className="px-3 pb-2 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--og-orange)]">
                    About Orange Goods
                  </p>
                  <div className="grid gap-1">
                    {aboutLinks.map((item) => (
                      <MenuLink key={item.label} href={item.href}>
                        {item.label}
                      </MenuLink>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          ) : null}
        </div>
      </header>

      {mobileOpen ? (
        <div className="fixed inset-0 z-50 bg-[var(--og-cream)] p-4 md:hidden">
          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-[#0B32A0]/20 text-2xl text-[var(--og-blue)]"
              aria-label="Close menu"
            >
              X
            </button>
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className="text-sm font-black tracking-[0.24em] text-[var(--og-blue)]"
            >
              ORANGE GOODS
            </Link>
            <Link
              href={startProjectHref}
              className="inline-flex min-h-10 items-center rounded-xl bg-[var(--og-orange)] px-4 text-xs font-semibold uppercase tracking-[0.1em] text-white"
            >
              Start
            </Link>
          </div>
          <nav className="mt-12 grid gap-3">
            {[
              { label: "CUSTOM", href: "/#paths" },
              { label: "BUILD ONLINE", href: buildOnlineHref },
              { label: "DESIGN", href: "/design" },
              { label: "SHOP", href: "/shop" },
              { label: "ABOUT", href: "/about" },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="flex min-h-16 items-center justify-between border-b border-[#0B32A0]/20 text-3xl font-black tracking-[-0.02em] text-[var(--og-blue)]"
              >
                {item.label}
                <span className="text-[var(--og-orange)]">-&gt;</span>
              </Link>
            ))}
          </nav>
        </div>
      ) : null}

      <div className="fixed inset-x-0 bottom-0 z-30 grid grid-cols-2 gap-2 border-t border-[#0B32A0]/20 bg-[rgba(251,247,241,0.92)] p-3 backdrop-blur md:hidden">
        <Link
          href={startProjectHref}
          className="inline-flex min-h-12 items-center justify-center rounded-xl bg-[var(--og-orange)] px-4 text-xs font-semibold uppercase tracking-[0.12em] text-white"
        >
          Start a Project
        </Link>
        <Link
          href={buildOnlineHref}
          className="inline-flex min-h-12 items-center justify-center rounded-xl border border-[#0B32A0]/20 px-4 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--og-blue)]"
        >
          Build Online
        </Link>
      </div>
    </>
  );
}
