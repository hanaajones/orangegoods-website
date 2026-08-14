import type { Metadata } from "next";
import Link from "next/link";

const draftGroups = [
  {
    title: "Parked from public view",
    items: [
      {
        label: "Build Online intake",
        href: "/build",
        note: "Removed from homepage. Keep here for review only.",
      },
      {
        label: "Shop OG",
        href: "/shop",
        note: "Removed from the main nav for now. Keep here for direct review only.",
      },
    ],
  },
  {
    title: "Active draft pages",
    items: [
      {
        label: "Unified product style preview",
        href: "/draft/product-style",
        note: "Shared builder and product detail preview.",
      },
      {
        label: "Apparel template",
        href: "/draft/apparel-template",
        note: "Draft goods category pattern.",
      },
      {
        label: "Contact stepped flow",
        href: "/draft/contact-stepped",
        note: "Alternate contact / inquiry flow.",
      },
      {
        label: "Unused homepage sections",
        href: "/draft/unused-sections",
        note: "Parked homepage modules and experiments.",
      },
      {
        label: "Trends draft",
        href: "/draft/trends",
        note: "Internal content / layout exploration.",
      },
      {
        label: "Button font options",
        href: "/draft/button-font-options",
        note: "UI typography test page.",
      },
    ],
  },
];

export const metadata: Metadata = {
  title: "OG Studio Vault · Orange Goods",
  robots: {
    index: false,
    follow: false,
  },
};

export default function OgStudioVaultPage() {
  return (
    <main className="min-h-screen bg-[#f7f4ed] px-4 py-10 text-[#1C1C1C] md:px-8">
      <div className="mx-auto max-w-4xl">
        <p className="font-noir-alt text-xs font-bold uppercase tracking-[0.18em] text-[#0B32A0]">
          Internal only
        </p>
        <h1 className="mt-3 text-4xl uppercase leading-none text-[#FF4200] md:text-6xl">
          Draft menu
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-[#1C1C1C]/70">
          Simple holding page for unreleased website work. Nothing here is linked
          publicly, and this route is kept off index.
        </p>

        <div className="mt-10 space-y-8">
          {draftGroups.map((group) => (
            <section
              key={group.title}
              className="rounded-[1.75rem] border border-[#0B32A0]/12 bg-white p-6 shadow-[0_20px_40px_rgba(28,28,28,0.06)]"
            >
              <h2 className="font-noir-alt text-sm font-bold uppercase tracking-[0.16em] text-[#0B32A0]">
                {group.title}
              </h2>
              <div className="mt-4 space-y-3">
                {group.items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block rounded-2xl border border-[#1C1C1C]/10 px-4 py-4 transition hover:border-[#0B32A0] hover:bg-[#F7F4ED]"
                  >
                    <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                      <span className="font-noir-alt text-lg font-bold text-[#1C1C1C]">
                        {item.label}
                      </span>
                      <span className="text-xs uppercase tracking-[0.16em] text-[#FF4200]">
                        {item.href}
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-6 text-[#1C1C1C]/65">
                      {item.note}
                    </p>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
