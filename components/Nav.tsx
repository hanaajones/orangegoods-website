"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { useState } from "react";

const startProjectHref = "/contact";
const buildOnlineHref = "/build";
const showBuildOnlineNav = false;
const goodsMenuPreviewScale = 1.04;

type GoodsMenuPreview = {
  image: string;
  position: string;
  scale?: number;
};

type PreviewMenuLink = {
  href: string;
  image?: string;
  label: string;
  note?: string;
  position?: string;
  scale?: number;
};

function getGoodsMenuPreview({ image, position, scale }: GoodsMenuPreview) {
  return { image, position, scale: scale ?? goodsMenuPreviewScale };
}

const products = [
  { label: "Hats", href: "/goods/hats", image: "/images/gallery/hat-bread-head-tezza-3828.jpg", position: "center bottom" },
  { label: "Apparel", href: "/goods/apparel/styles", image: "/images/gallery/apparel-verve-gd-tee-verve_grateful-dead_tshirt_101.jpg", position: "center 50%" },
  { label: "Drinkware", href: "/goods/drinkware", image: "/images/gallery/drinkware-layla-stacked-mugs-img-7776-2026-08-20.jpg", position: "center 64%" },
  { label: "Bags + Totes", href: "/goods/bags", image: "/images/gallery/totes-bags-boatsetter-dscf3148.jpg", position: "center 50%" },
  { label: "Accessories", href: "/goods/accessories", image: "/images/gallery/accessories-bandana-lalo-trio.png", position: "center 32%" },
  { label: "Blankets", href: "/goods/blankets", image: "/images/gallery/blankets-sundream-jarritos-1013-2.jpg", position: "center 50%" },
  { label: "Socks", href: "/goods/socks", image: "/images/product/socks-lifestyle.jpg", position: "center 56%" },
];

const goodsMenuDefaultPreview = getGoodsMenuPreview({
  image: "/images/gallery/goods-explore-catalog-high-street-deli-0477.jpg",
  position: "center 50%",
});

const serviceLinks = [
  {
    label: "Embroidery",
    href: "/services/embroidery",
    note: "",
    image: "/images/gallery/embroidery-mega-menu-machine-dscf1583.jpg",
    position: "center 50%",
  },
  {
    label: "Screen Printing",
    href: "/services/screen-printing",
    note: "Quick turn decoration • 2-3 weeks",
    image: "/images/gallery/screen-printing-mega-menu-synergy.jpg",
    position: "center 44%",
  },
  {
    label: "Gallery",
    href: "/gallery",
    image: "/images/gallery/case-studies-small-waves-boat-2s5a1947.jpg",
    position: "center 72%",
  },
];

const customizeLinks: PreviewMenuLink[] = [
  {
    label: "Customize All",
    href: "/goods/all",
    note: "Browse every customizable product in one place",
    image: "/images/gallery/goods-explore-catalog-high-street-deli-0477.jpg",
    position: "center 50%",
  },
];

const goodsStartLinks: PreviewMenuLink[] = [
  { label: "Full Custom", href: "/services/full-custom" },
  { label: "Embroidery", href: "/services/embroidery" },
  { label: "Screen Printing", href: "/services/screen-printing" },
  { label: "Gallery", href: "/gallery" },
];

const fullCustomLinks: PreviewMenuLink[] = [
  {
    label: "Full Custom",
    href: "/services/full-custom",
    note: "Built from scratch • 4-8+ weeks",
    image: "/images/gallery/full-custom-materials-mg-9406.jpg",
    position: "center 44%",
  },
];

const customLinks: PreviewMenuLink[] = [
  {
    label: "FAQ",
    href: "/faq",
    image: "/images/gallery/faq-infinity-house-totes-img6732-r01-019a.jpg",
    position: "center 44%",
  },
];

const exploreLinks: PreviewMenuLink[] = [
  {
    label: "Case Studies",
    href: "/case-studies",
    image: "/images/gallery/case-studies-small-waves-boat-2s5a1947.jpg",
    position: "center 72%",
  },
  {
    label: "Insights",
    href: "/insights",
    image: "/images/gallery/design-built-production-dscf1585.jpg",
    position: "center 42%",
  },
];

const startProjectPreview = getGoodsMenuPreview({
  image: "/images/gallery/full-custom-materials-mg-9406.jpg",
  position: "center 48%",
});

const aboutLinks = [
  { label: "About", href: "/about" },
  { label: "Our Process", href: "/our-process" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

const aboutFeatureCards = [
  {
    title: "Who We Are",
    detail: "Southern California team, product-first thinking",
    href: "/about",
    image: "/images/gallery/full-custom-materials-mg-9406.jpg",
    position: "center 48%",
  },
  {
    title: "Common Questions",
    detail: "How we work, minimums, timing, and what to expect",
    href: "/faq",
    image: "/images/gallery/hat-og-patch-lifestyle.jpg",
    position: "center 38%",
  },
];

function MenuLink({
  href,
  children,
  disabled = false,
  onMouseEnter,
  onMouseMove,
  onPointerEnter,
  onPointerMove,
  onFocus,
}: {
  href: string;
  children: ReactNode;
  disabled?: boolean;
  onMouseEnter?: () => void;
  onMouseMove?: () => void;
  onPointerEnter?: () => void;
  onPointerMove?: () => void;
  onFocus?: () => void;
}) {
  if (disabled) {
    return (
      <span
        className="flex min-h-10 w-full items-center justify-between rounded-2xl px-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#1C1C1C]/40"
        onMouseEnter={onMouseEnter}
        onMouseMove={onMouseMove}
        onPointerEnter={onPointerEnter}
        onPointerMove={onPointerMove}
      >
        {children}
        <span className="text-[0.65rem]">Soon</span>
      </span>
    );
  }

  return (
    <Link
      href={href}
      onMouseEnter={onMouseEnter}
      onMouseMove={onMouseMove}
      onPointerEnter={onPointerEnter}
      onPointerMove={onPointerMove}
      onFocus={onFocus}
      className="flex min-h-10 w-full items-center rounded-2xl px-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#1C1C1C] transition hover:bg-[#1C1C1C]/8 hover:text-[#FF4200]"
    >
      {children}
    </Link>
  );
}

function MobileMenuArrow({
  expanded = false,
}: {
  expanded?: boolean;
}) {
  return (
    <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border-[3px] border-[#0B32A0] bg-white text-[#0B32A0] shadow-[3px_3px_0px_#0B32A0] transition">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`h-4 w-4 ${expanded ? "rotate-90" : ""}`}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M9 6l6 6-6 6" />
      </svg>
    </span>
  );
}

function MobileMenuPlusButton({
  expanded = false,
}: {
  expanded?: boolean;
}) {
  return (
    <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border-[3px] border-[#0B32A0] bg-white text-[#0B32A0] shadow-[3px_3px_0px_#0B32A0] transition">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M6 12h12" />
        {expanded ? null : <path d="M12 6v12" />}
      </svg>
    </span>
  );
}

function MobileMenuCloseButton() {
  return (
    <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border-[3px] border-[#0B32A0] bg-white text-[#0B32A0] shadow-[3px_3px_0px_#0B32A0] transition">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M6 6l12 12" />
        <path d="M18 6L6 18" />
      </svg>
    </span>
  );
}

export function Nav() {
  const pathname = usePathname();
  const [activeMenu, setActiveMenu] = useState<"custom" | "build" | "about" | null>(null);
  const [hoveredProduct, setHoveredProduct] = useState(goodsMenuDefaultPreview);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpandedMenu, setMobileExpandedMenu] = useState<"goods" | "about" | null>(null);
  const closeTimer = useState<ReturnType<typeof setTimeout> | null>(null);
  const hideMobileBottomCtas = pathname === "/quiz" || pathname.startsWith("/quiz/");

  const scheduleClose = () => {
    if (closeTimer[0]) clearTimeout(closeTimer[0]);
    closeTimer[1](setTimeout(() => setActiveMenu(null), 150));
  };

  const cancelClose = () => {
    if (closeTimer[0]) clearTimeout(closeTimer[0]);
  };

  const openCustomMenu = () => {
    setHoveredProduct(goodsMenuDefaultPreview);
    setActiveMenu("custom");
  };

  const showPreview = (preview?: GoodsMenuPreview) => {
    setHoveredProduct(preview ? getGoodsMenuPreview(preview) : goodsMenuDefaultPreview);
  };

  const getPreviewHandlers = (preview?: GoodsMenuPreview) => {
    const activatePreview = () => showPreview(preview);
    return {
      onMouseEnter: activatePreview,
      onMouseMove: activatePreview,
      onPointerEnter: activatePreview,
      onPointerMove: activatePreview,
      onFocus: activatePreview,
    };
  };

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

      <div className="flex min-h-8 items-center justify-center bg-[var(--og-dark-blue)] px-4 pb-2 pt-[12px] text-center md:px-8">
        <p
          className="text-[12px] leading-none text-white md:text-[1rem]"
          style={{ fontFamily: "var(--font-accent)" }}
        >
          Guaranteed Fresh
        </p>
      </div>

      <header className="sticky top-0 z-40 -mb-px bg-[#FF4200] pb-px">
        <div
          className="relative"
          onMouseLeave={scheduleClose}
          onMouseEnter={cancelClose}
        >
          <div className="relative flex items-center justify-center bg-[#FF4200] px-4 py-[22px] shadow-[0_4px_24px_rgba(255,66,0,0.25)] md:justify-between md:px-8">
            {/* Mobile hamburger */}
            <button
              type="button"
              onClick={() => {
                setMobileExpandedMenu(null);
                setMobileOpen(true);
              }}
              className="absolute left-4 inline-flex min-h-10 min-w-10 items-center justify-center rounded-xl text-[1.625rem] font-semibold text-white md:hidden"
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
                className="h-10 w-auto md:h-10"
              />
            </Link>
            {/* Nav — centered */}
            <nav className="hidden flex-1 items-center justify-center gap-10 md:flex">
              <button
                type="button"
                onMouseEnter={openCustomMenu}
                onClick={() => {
                  if (activeMenu === "custom") {
                    setActiveMenu(null);
                    return;
                  }

                  openCustomMenu();
                }}
                className="font-[family-name:var(--font-display)] text-xl tracking-[0.1em] text-white transition hover:text-[#FF7F00] active:text-[#FF7F00]"
              >
                GOODS <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 inline h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg>
              </button>
              <Link
                href="/goods/all"
                className="font-[family-name:var(--font-display)] text-xl tracking-[0.1em] text-white transition hover:text-[#FF7F00] active:text-[#FF7F00]"
              >
                CUSTOMIZE
              </Link>
              <Link
                href="/design"
                className="font-[family-name:var(--font-display)] text-xl tracking-[0.1em] text-white transition hover:text-[#FF7F00] active:text-[#FF7F00]"
              >
                DESIGN
              </Link>
              <Link
                href="/fresh-picks"
                className="font-[family-name:var(--font-display)] text-xl tracking-[0.1em] text-white transition hover:text-[#FF7F00] active:text-[#FF7F00]"
              >
                FRESH PICKS
              </Link>
              <button
                type="button"
                onMouseEnter={() => setActiveMenu("about")}
                onClick={() => setActiveMenu(activeMenu === "about" ? null : "about")}
                className="font-[family-name:var(--font-display)] text-xl tracking-[0.1em] text-white transition hover:text-[#FF7F00] active:text-[#FF7F00]"
              >
                ABOUT <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 inline h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg>
              </button>
            </nav>
            {/* Right group: icons + CTA */}
            <div className="hidden shrink-0 items-center gap-1 md:flex">
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
            <>
            {/* Invisible hover bridge fills the gap between nav bar and mega menu so the cursor doesn't lose hover */}
            <div
              className="absolute left-0 top-full hidden h-4 w-full md:block"
              onMouseEnter={cancelClose}
            />
            <div
              className="absolute left-1/2 top-[calc(100%+0.75rem)] hidden w-[calc(100vw-3rem)] max-w-[68rem] -translate-x-1/2 rounded-[2rem] border-[3px] border-[#0B32A0] bg-[#F3EFE7] p-5 text-[#1C1C1C] shadow-[0_28px_60px_rgba(0,0,0,0.12)] md:block"
              onMouseEnter={cancelClose}
            >
              {activeMenu === "custom" ? (
                <div className="flex flex-col gap-4">
                  <div className="grid gap-3 md:grid-cols-[1.15fr_0.8fr_0.95fr_0.8fr]">
                    <div className="relative h-full min-h-[15rem] overflow-hidden rounded-[1.5rem] border-[3px] border-[#0B32A0] bg-[#d9c5ae]">
                      <Image
                        key={hoveredProduct.image}
                        src={hoveredProduct.image}
                        alt="Orange Goods product preview"
                        fill
                        sizes="(min-width: 768px) 18vw, 100vw"
                        className="object-cover transition-[opacity,transform] duration-300"
                        style={{ objectPosition: hoveredProduct.position, transform: `scale(${hoveredProduct.scale ?? 1})` }}
                      />
                    </div>
                    <div className="rounded-[1.5rem] border border-[#0B32A0]/12 bg-white/70 px-4 pb-4 pt-5">
                      <p className="px-3 pb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--og-orange)]">
                        Products
                      </p>
                      <div className="grid gap-1">
                        <MenuLink href="/goods" {...getPreviewHandlers()}>
                          View all
                        </MenuLink>
                        {products.map((item) => (
                          <MenuLink
                            key={item.label}
                            href={item.href}
                            {...getPreviewHandlers({ image: item.image, position: item.position, scale: item.scale ?? 1 })}
                          >
                            {item.label}
                          </MenuLink>
                        ))}
                      </div>
                    </div>
                    <div className="rounded-[1.5rem] border border-[#0B32A0]/12 bg-white/70 px-4 pb-4 pt-5">
                      <p className="px-3 pb-2 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--og-orange)]">
                        Customize
                      </p>
                      <div className="grid gap-1">
                        {customizeLinks.map((item) => (
                          <div key={item.label}>
                            <MenuLink
                              href={item.href}
                              {...getPreviewHandlers(
                                item.image
                                  ? { image: item.image, position: item.position ?? "center 50%", scale: item.scale ?? 1 }
                                  : undefined,
                              )}
                            >
                              {item.label}
                            </MenuLink>
                            {item.note ? <p className="px-3 text-[10px] text-[#1C1C1C]/40">{item.note}</p> : null}
                          </div>
                        ))}
                      </div>
                      <div className="mt-4 border-t border-[#0B32A0]/10 pt-4">
                        <p className="px-3 pb-2 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--og-orange)]">
                          Services
                        </p>
                        <div className="grid gap-1">
                          {fullCustomLinks.map((item) => (
                            <div key={item.label}>
                              <MenuLink
                                href={item.href}
                                {...getPreviewHandlers(
                                  item.image
                                    ? { image: item.image, position: item.position ?? "center 50%", scale: 1 }
                                    : undefined,
                                )}
                              >
                                {item.label}
                              </MenuLink>
                              {item.note ? <p className="px-3 text-[10px] text-[#1C1C1C]/40">{item.note}</p> : null}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="mt-4 border-t border-[#0B32A0]/10 pt-4">
                        <p className="px-3 pb-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#1C1C1C]/46">
                          Quick Turn
                        </p>
                        <div className="grid gap-1">
                          {serviceLinks.map((item) => (
                            <div key={item.label}>
                              <MenuLink
                                href={item.href}
                                {...getPreviewHandlers(
                                  item.image
                                    ? { image: item.image, position: item.position ?? "center 50%", scale: 1 }
                                    : undefined,
                                )}
                              >
                                {item.label}
                              </MenuLink>
                              {item.note ? <p className="px-3 text-[10px] text-[#1C1C1C]/40">{item.note}</p> : null}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="flex min-h-full flex-col rounded-[1.5rem] border border-[#0B32A0]/12 bg-white/70 px-4 pb-4 pt-5">
                      <p className="px-3 pb-2 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--og-orange)]">
                        Explore
                      </p>
                      <div className="grid gap-1">
                        {customLinks.map((item) => (
                          <MenuLink
                            key={item.label}
                            href={item.href}
                            {...getPreviewHandlers(
                              item.image
                                ? { image: item.image, position: item.position ?? "center 50%", scale: item.scale ?? 1 }
                                : undefined,
                            )}
                          >
                            {item.label}
                          </MenuLink>
                        ))}
                        {exploreLinks.map((item) => (
                          <MenuLink
                            key={item.label}
                            href={item.href}
                            {...getPreviewHandlers(
                              item.image
                                ? { image: item.image, position: item.position ?? "center 50%", scale: item.scale ?? 1 }
                                : undefined,
                            )}
                          >
                            {item.label}
                          </MenuLink>
                        ))}
                      </div>
                      <div className="mt-auto flex flex-col gap-3 px-3 pt-8">
                        <Link
                          href={startProjectHref}
                          {...getPreviewHandlers(startProjectPreview)}
                          className="btn-og justify-center"
                        >
                          Start a Project
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ) : null}

              {activeMenu === "about" ? (
                <div className="grid gap-4 md:grid-cols-[1fr_1fr_0.9fr]">
                  {aboutFeatureCards.map((card) => (
                    <Link
                      key={card.title}
                      href={card.href}
                      className="group relative block h-full min-h-[15rem] overflow-hidden rounded-[1.5rem] border-[3px] border-[#0B32A0] bg-[#d9c5ae] transition hover:-translate-y-0.5 hover:border-[#FF4200]"
                    >
                      <Image
                        src={card.image}
                        alt={card.title}
                        fill
                        sizes="(min-width: 768px) 22vw, 100vw"
                        className="object-cover transition duration-500 group-hover:scale-105"
                        style={{ objectPosition: card.position }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C]/82 via-[#1C1C1C]/24 to-transparent" />
                      <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-[var(--og-tangerine)]">
                          About
                        </p>
                        <h3
                          className="mt-2 text-[2rem] uppercase leading-[0.92]"
                          style={{ fontFamily: "var(--font-display)" }}
                        >
                          {card.title}
                        </h3>
                        <p className="mt-2 max-w-xs text-sm leading-5 text-white/80">
                          {card.detail}
                        </p>
                      </div>
                    </Link>
                  ))}

                  <div className="h-full rounded-[1.5rem] border border-[#0B32A0]/12 bg-white/70 p-4">
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
                    <p className="px-3 pt-4 text-sm leading-6 text-[#1C1C1C]/58">
                      Learn how we think about product, design, process, and the kind of goods
                      people actually keep.
                    </p>
                  </div>
                </div>
              ) : null}
            </div>
            </>
          ) : null}
        </div>
      </header>

      {mobileOpen ? (
        <div className="fixed inset-0 z-50 bg-[var(--og-blue)] p-4 md:hidden">
          <div className="flex items-center">
            <button
              type="button"
              onClick={() => {
                setMobileExpandedMenu(null);
                setMobileOpen(false);
              }}
              className="inline-flex items-center justify-center"
              aria-label="Close menu"
            >
              <MobileMenuCloseButton />
            </button>
          </div>
          <nav className="mt-12 grid gap-3">
            <div className="border-b border-white/25 pb-3">
              <button
                type="button"
                onClick={() => setMobileExpandedMenu(mobileExpandedMenu === "goods" ? null : "goods")}
                className="flex min-h-16 w-full items-center justify-between text-3xl font-black tracking-[-0.02em] text-white"
              >
                <span>GOODS</span>
                <MobileMenuPlusButton expanded={mobileExpandedMenu === "goods"} />
              </button>
              {mobileExpandedMenu === "goods" ? (
                <div className="grid gap-2 pb-2">
                  <Link
                    href="/goods"
                    onClick={() => setMobileOpen(false)}
                    className="text-base font-semibold uppercase tracking-[0.14em] text-white/85"
                  >
                    View all goods
                  </Link>
                  {products.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="text-base font-semibold uppercase tracking-[0.14em] text-white/85"
                    >
                      {item.label}
                    </Link>
                  ))}
                  <div className="mt-2 border-t border-white/15 pt-2">
                    <div className="grid gap-2">
                      {goodsStartLinks.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          onClick={() => setMobileOpen(false)}
                          className="text-base font-semibold uppercase tracking-[0.14em] text-white/70"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : null}
            </div>

            <Link
              href="/goods/all"
              onClick={() => setMobileOpen(false)}
              className="flex min-h-16 items-center justify-between border-b border-white/25 text-3xl font-black tracking-[-0.02em] text-white"
            >
              CUSTOMIZE
              <MobileMenuArrow />
            </Link>

            {[
              { label: "DESIGN", href: "/design" },
              { label: "FRESH PICKS", href: "/fresh-picks" },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="flex min-h-16 items-center justify-between border-b border-white/25 text-3xl font-black tracking-[-0.02em] text-white"
              >
                {item.label}
                <MobileMenuArrow />
              </Link>
            ))}

            <div className="border-b border-white/25 pb-3">
              <button
                type="button"
                onClick={() => setMobileExpandedMenu(mobileExpandedMenu === "about" ? null : "about")}
                className="flex min-h-16 w-full items-center justify-between text-3xl font-black tracking-[-0.02em] text-white"
              >
                <span>ABOUT</span>
                <MobileMenuPlusButton expanded={mobileExpandedMenu === "about"} />
              </button>
              {mobileExpandedMenu === "about" ? (
                <div className="grid gap-2 pb-2">
                  {aboutLinks.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="text-base font-semibold uppercase tracking-[0.14em] text-white/85"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          </nav>
        </div>
      ) : null}

      {!hideMobileBottomCtas ? (
        <div className={`fixed inset-x-0 bottom-0 z-30 grid ${showBuildOnlineNav ? "grid-cols-2" : "grid-cols-1"} gap-2 border-t border-[#0B32A0]/20 bg-[rgba(251,247,241,0.92)] p-3 backdrop-blur md:hidden`}>
          <Link
            href={startProjectHref}
            className="inline-flex min-h-12 items-center justify-center rounded-xl bg-[var(--og-orange)] px-4 text-xs font-semibold uppercase tracking-[0.12em] text-white"
          >
            Start a Project
          </Link>
          {showBuildOnlineNav ? (
            <Link
              href={buildOnlineHref}
              className="inline-flex min-h-12 items-center justify-center rounded-xl border border-[#0B32A0]/20 px-4 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--og-blue)]"
            >
              Build Online
            </Link>
          ) : null}
        </div>
      ) : null}
    </>
  );
}
