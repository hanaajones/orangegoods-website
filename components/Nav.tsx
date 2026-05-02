"use client";

import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { useState } from "react";

const startProjectHref = "mailto:hello@orangegoods.co?subject=Start%20a%20Project";
const buildOnlineHref = "https://orangegoods.co/goods/";
const hatImage = "https://orangegoods.co/wp-content/uploads/2024/06/Hat-271x300.jpg";

const products = [
  { label: "Hats", href: "/goods/hats" },
  { label: "Apparel", href: "#" },
  { label: "Socks", href: "#" },
  { label: "Accessories", href: "#" },
  { label: "Drinkware", href: "#" },
  { label: "Blankets", href: "#" },
];

const serviceLinks = [
  { label: "Embroidery (Ready Made)", href: "/services/embroidery" },
  { label: "Screen Printing (Ready Made)", href: "/services/screen-printing" },
];

const customLinks = [
  { label: "Our Process", href: "#process" },
  { label: "Gallery", href: "#gallery" },
  { label: "FAQ", href: "#faq" },
];

const aboutLinks = [
  { label: "Our Story", href: "#about" },
  { label: "The OG Difference", href: "#about" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "mailto:hello@orangegoods.co" },
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
      <span className="flex min-h-10 items-center justify-between rounded-2xl px-3 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--og-muted)] opacity-45">
        {children}
        <span className="text-[0.65rem]">Soon</span>
      </span>
    );
  }

  return (
    <Link
      href={href}
      className="flex min-h-10 items-center rounded-2xl px-3 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--og-ink)] transition hover:bg-[#f1e5d8] hover:text-[var(--og-orange)]"
    >
      {children}
    </Link>
  );
}

export function Nav() {
  const [activeMenu, setActiveMenu] = useState<"custom" | "build" | "about" | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 px-3 pt-3 md:px-6 md:pt-5">
        <div
          className="relative mx-auto max-w-7xl"
          onMouseLeave={() => setActiveMenu(null)}
        >
          <div className="flex items-center justify-between rounded-full border border-black/10 bg-[rgba(251,247,241,0.82)] px-4 py-3 shadow-[0_12px_48px_rgba(22,17,15,0.08)] backdrop-blur md:px-6">
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              className="inline-flex min-h-10 min-w-10 items-center justify-center rounded-full border border-black/10 text-xl font-semibold text-[var(--og-ink)] md:hidden"
              aria-label="Open menu"
            >
              ☰
            </button>
            <Link href="/" className="flex items-center" aria-label="Orange Goods">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logos/OrangeGoods_Logo_Main_Horizontal_Orange.svg"
                alt="Orange Goods"
                className="h-7 w-auto md:h-8"
              />
            </Link>
            <nav className="hidden items-center gap-6 md:flex">
              <button
                type="button"
                onMouseEnter={() => setActiveMenu("custom")}
                onClick={() => setActiveMenu(activeMenu === "custom" ? null : "custom")}
                className="text-sm font-semibold tracking-[0.16em] text-[var(--og-ink)] transition hover:text-[var(--og-orange)]"
              >
                CUSTOM ▾
              </button>
              <button
                type="button"
                onMouseEnter={() => setActiveMenu("build")}
                onClick={() => setActiveMenu(activeMenu === "build" ? null : "build")}
                className="text-sm font-semibold tracking-[0.16em] text-[var(--og-ink)] transition hover:text-[var(--og-orange)]"
              >
                BUILD ONLINE ▾
              </button>
              <Link
                href="/#process"
                className="text-sm font-semibold tracking-[0.16em] text-[var(--og-ink)] transition hover:text-[var(--og-orange)]"
              >
                DESIGN
              </Link>
              <button
                type="button"
                onMouseEnter={() => setActiveMenu("about")}
                onClick={() => setActiveMenu(activeMenu === "about" ? null : "about")}
                className="text-sm font-semibold tracking-[0.16em] text-[var(--og-ink)] transition hover:text-[var(--og-orange)]"
              >
                ABOUT ▾
              </button>
            </nav>
            <Link
              href={startProjectHref}
              className="inline-flex min-h-10 items-center rounded-full bg-[var(--og-orange)] px-4 text-xs font-semibold uppercase tracking-[0.1em] text-white transition hover:bg-[#d73b05] md:min-h-11 md:px-5 md:text-sm"
            >
              <span className="md:hidden">Start</span>
              <span className="hidden md:inline">START A PROJECT</span>
            </Link>
          </div>

          {activeMenu ? (
            <div
              className="absolute left-0 right-0 top-[calc(100%+0.75rem)] hidden rounded-[2rem] border border-black/10 bg-[rgba(251,247,241,0.96)] p-5 shadow-[0_28px_90px_rgba(22,17,15,0.16)] backdrop-blur md:block"
              onMouseEnter={() => setActiveMenu(activeMenu)}
            >
              {activeMenu === "custom" ? (
                <div className="grid gap-5 md:grid-cols-[40fr_35fr_25fr]">
                  <div className="rounded-[1.5rem] bg-[#1d1714] p-6 text-[#f7f1e8]">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#ff9e7a]">
                      Start A Project
                    </p>
                    <p className="mt-3 text-3xl font-semibold leading-tight">
                      From concept to delivery, handled.
                    </p>
                    <div className="mt-6 flex flex-wrap gap-3">
                      <Link
                        href={startProjectHref}
                        className="inline-flex min-h-11 items-center rounded-full bg-[var(--og-orange)] px-5 text-sm font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-[#d73b05]"
                      >
                        Start a Project
                      </Link>
                      <Link
                        href={buildOnlineHref}
                        className="inline-flex min-h-11 items-center rounded-full border border-white/20 px-5 text-sm font-semibold uppercase tracking-[0.12em] text-white transition hover:border-[#ff9e7a] hover:text-[#ff9e7a]"
                      >
                        Build Online
                      </Link>
                    </div>
                  </div>
                  <div>
                    <p className="px-3 pb-2 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--og-orange)]">
                      Products
                    </p>
                    <div className="grid gap-1">
                      {products.map((item) => (
                        <MenuLink key={item.label} href={item.href}>
                          {item.label}
                        </MenuLink>
                      ))}
                    </div>
                    <div className="mt-4 border-t border-black/10 pt-4">
                      <p className="px-3 pb-2 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--og-orange)]">
                        Services
                      </p>
                      <div className="grid gap-1">
                        {serviceLinks.map((item) => (
                          <MenuLink key={item.label} href={item.href}>
                            {item.label}
                          </MenuLink>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="px-3 pb-2 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--og-orange)]">
                      Learn
                    </p>
                    <div className="grid gap-1">
                      {customLinks.map((item) => (
                        <MenuLink key={item.label} href={item.href}>
                          {item.label}
                        </MenuLink>
                      ))}
                      <MenuLink href="#" disabled>
                        Case Studies
                      </MenuLink>
                    </div>
                  </div>
                </div>
              ) : null}

              {activeMenu === "build" ? (
                <div className="grid gap-6 md:grid-cols-[0.85fr_1fr]">
                  <div className="relative min-h-[16rem] overflow-hidden rounded-[1.5rem] bg-[#e0c7ad]">
                    <Image
                      src={hatImage}
                      alt="Orange Goods hat"
                      fill
                      sizes="420px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="px-3 pb-2 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--og-orange)]">
                      Build Online
                    </p>
                    <div className="grid gap-1 sm:grid-cols-2">
                      {["All Products", "Hats", "Apparel", "Socks", "Accessories", "Drinkware", "Blankets"].map(
                        (label) => (
                          <MenuLink key={label} href={buildOnlineHref}>
                            {label}
                          </MenuLink>
                        ),
                      )}
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
              className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-black/10 text-2xl text-[var(--og-ink)]"
              aria-label="Close menu"
            >
              X
            </button>
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className="text-sm font-black tracking-[0.24em] text-[var(--og-ink)]"
            >
              ORANGE GOODS
            </Link>
            <Link
              href={startProjectHref}
              className="inline-flex min-h-10 items-center rounded-full bg-[var(--og-orange)] px-4 text-xs font-semibold uppercase tracking-[0.1em] text-white"
            >
              Start
            </Link>
          </div>
          <nav className="mt-12 grid gap-3">
            {[
              { label: "CUSTOM", href: "/#paths" },
              { label: "BUILD ONLINE", href: buildOnlineHref },
              { label: "DESIGN", href: "/#process" },
              { label: "ABOUT", href: "/#about" },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="flex min-h-16 items-center justify-between border-b border-black/10 text-3xl font-black tracking-[-0.02em] text-[var(--og-ink)]"
              >
                {item.label}
                <span className="text-[var(--og-orange)]">-&gt;</span>
              </Link>
            ))}
          </nav>
        </div>
      ) : null}

      <div className="fixed inset-x-0 bottom-0 z-30 grid grid-cols-2 gap-2 border-t border-black/10 bg-[rgba(251,247,241,0.92)] p-3 backdrop-blur md:hidden">
        <Link
          href={startProjectHref}
          className="inline-flex min-h-12 items-center justify-center rounded-full bg-[var(--og-orange)] px-4 text-xs font-semibold uppercase tracking-[0.12em] text-white"
        >
          Start a Project
        </Link>
        <Link
          href={buildOnlineHref}
          className="inline-flex min-h-12 items-center justify-center rounded-full border border-black/10 px-4 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--og-ink)]"
        >
          Build Online
        </Link>
      </div>
    </>
  );
}
