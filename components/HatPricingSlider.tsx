"use client";

import Link from "next/link";

type QuantityTier = {
  label: string;
  base: string;
  href: string;
  note?: string;
  badge?: string;
};

export function HatPricingSlider({ tiers }: { tiers: QuantityTier[] }) {
  const highlightPills = [
    "All-in delivered pricing",
    "Free shipping on every order",
  ];

  return (
    <div className="mt-8">
      <div className="mt-2 flex flex-wrap items-center gap-2">
        {highlightPills.map((item) => (
          <span
            key={item}
            className="inline-flex rounded-full border border-[#0B32A0]/18 bg-[#EDF3FF] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#0B32A0]"
          >
            {item}
          </span>
        ))}
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {tiers.map((tier) => (
          <article
            key={tier.label}
            className="flex h-full flex-col rounded-[1.55rem] border-2 border-[#0B32A0]/18 bg-white p-5 transition hover:-translate-y-[2px] hover:border-[#0B32A0]"
          >
            <div className="flex items-start justify-between gap-3">
              <span className="inline-flex rounded-full border border-[#FF4200]/18 bg-[#FFF1E9] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--og-orange)]">
                {tier.label}
              </span>
              {tier.badge ? (
                <span className="inline-flex rounded-full border border-[#0B32A0]/12 bg-[#F5F7FC] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#1C1C1C]">
                  {tier.badge}
                </span>
              ) : null}
            </div>

            <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--og-muted)]">
              Starting at
            </p>
            <p className="mt-2 text-4xl font-semibold leading-none text-[var(--og-blue)]">{tier.base}</p>
            <p className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--og-muted)]">
              Per style / per hat
            </p>

            <p className="mt-5 text-sm leading-6 text-[var(--og-muted)]">
              Front decoration, fabric choice, and interior label included.
            </p>

            <Link
              href={tier.href}
              className="mt-auto inline-flex min-h-12 w-full items-center justify-center rounded-[1rem] border-2 border-[#0B32A0] bg-[#0B32A0] px-5 text-center text-sm font-semibold text-white transition hover:-translate-y-[2px] hover:border-[var(--og-orange)] hover:bg-[var(--og-orange)]"
            >
              Start this order
            </Link>
          </article>
        ))}
      </div>

      <div className="mt-4 px-1 text-left">
        <p className="text-xs leading-5 text-[var(--og-muted)]">
          Core pricing shown. Add-ons and upgraded decoration can change the total.
        </p>
      </div>
    </div>
  );
}
