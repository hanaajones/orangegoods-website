"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

const portalLinks = [
  { href: "/portal/dashboard", label: "Dashboard" },
  { href: "/portal/orders", label: "Orders" },
  { href: "/portal/account", label: "Account" },
];

export function PortalShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  if (pathname === "/portal") {
    return (
      <main className="min-h-screen bg-[#F3EFE7] px-6 py-10 text-[#1C1C1C]">
        <div className="mx-auto max-w-7xl">{children}</div>
      </main>
    );
  }

  return (
    <div className="min-h-screen bg-[#F3EFE7] text-[#1C1C1C] lg:grid lg:grid-cols-[19rem_1fr]">
      <aside className="bg-[#FF4200] px-6 py-5 text-white lg:sticky lg:top-0 lg:flex lg:h-screen lg:flex-col lg:px-7 lg:py-8">
        <div className="flex flex-wrap items-center justify-between gap-4 lg:block">
          <Link href="/portal/dashboard" className="inline-flex items-center rounded-md bg-white px-4 py-3">
            <Image
              src="/logos/OrangeGoods_Logo_Main_Horizontal_Orange.svg"
              alt="Orange Goods"
              width={220}
              height={58}
              className="h-9 w-auto object-contain"
              priority
            />
          </Link>
          <Link href="/" className="text-sm font-semibold text-white/85 transition hover:text-white lg:mt-7 lg:inline-flex">
            Back to site
          </Link>
        </div>

        <nav className="mt-6 flex gap-2 overflow-x-auto text-sm font-semibold lg:mt-10 lg:flex-col lg:overflow-visible">
          {portalLinks.map((link) => {
            const isActive = pathname === link.href || pathname.startsWith(`${link.href}/`);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`whitespace-nowrap rounded-xl px-4 py-2.5 transition ${
                  isActive ? "bg-white/90 text-[#FF7F00]" : "text-white hover:bg-white/15 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="mt-auto hidden border-t border-white/25 pt-6 text-sm leading-6 text-white/75 lg:block">
          <p
            className="text-2xl uppercase leading-none text-white"
            style={{ fontFamily: "var(--font-accent)" }}
          >
            Customer Portal
          </p>
          <p className="mt-3">Track custom goods, review order details, and keep account information current</p>
        </div>
      </aside>
      <main className="mx-auto w-full max-w-7xl px-6 py-10 lg:px-10 lg:py-12">{children}</main>
    </div>
  );
}
