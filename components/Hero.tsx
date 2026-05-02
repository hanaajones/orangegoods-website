"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type Stat = {
  value: string;
  label: string;
};

type HeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  stats: Stat[];
  ctaLabel: string;
  ctaHref: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
};

export function Hero({
  eyebrow,
  title,
  description,
  stats,
  ctaLabel,
  ctaHref,
  secondaryCtaLabel,
  secondaryCtaHref,
}: HeroProps) {
  return (
    <section className="px-4 pb-8 pt-8 md:px-8 md:pt-14 lg:px-12">
      <div className="mx-auto grid max-w-6xl gap-10 rounded-[2rem] border border-[var(--og-sand)] bg-[rgba(255,248,241,0.84)] p-6 shadow-[0_24px_80px_rgba(8,30,111,0.08)] backdrop-blur md:grid-cols-[1.1fr_0.9fr] md:p-8">
        <div className="flex flex-col justify-between gap-10">
          <div>
            <motion.p
              initial={{ opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--og-orange)]"
            >
              {eyebrow}
            </motion.p>
            <motion.h1
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: {
                  transition: {
                    staggerChildren: 0.08,
                  },
                },
              }}
              className="mt-4 max-w-3xl text-5xl font-semibold leading-[0.94] tracking-[-0.06em] text-[var(--og-blue)] md:text-7xl"
            >
              {title.split(" ").map((word) => (
                <motion.span
                  key={word}
                  variants={{
                    hidden: { opacity: 1, y: 0 },
                    show: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
                  className="mr-[0.28em] inline-block"
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>
            <motion.p
              initial={{ opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.18 }}
              className="mt-6 max-w-2xl text-lg leading-7 text-[var(--og-muted)] md:text-xl"
            >
              {description}
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.26 }}
            className="flex flex-col gap-4"
          >
            <div className="grid gap-3 sm:grid-cols-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-[1.5rem] border border-[#0B32A0]/20 bg-[#fff8f1] p-4"
                >
                  <div className="text-3xl font-semibold text-[var(--og-blue)]">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--og-muted)]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href={ctaHref}
                className="inline-flex min-h-12 items-center rounded-full bg-[var(--og-orange)] px-6 text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-[#d73b05]"
              >
                {ctaLabel}
              </Link>
              {secondaryCtaLabel && secondaryCtaHref ? (
                <Link
                  href={secondaryCtaHref}
                  className="inline-flex min-h-12 items-center rounded-full bg-[var(--og-blue)] px-6 text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-[var(--og-dark-blue)]"
                >
                  {secondaryCtaLabel}
                </Link>
              ) : null}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 1, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative overflow-hidden rounded-[1.8rem] bg-[var(--og-dark-blue)] p-5 text-[#f5efe6]"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,66,0,0.34),transparent_38%)]" />
          <div className="relative flex h-full min-h-[26rem] flex-col justify-between rounded-[1.4rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#ff9e7a]">
                15+ Product Categories
              </p>
              <p className="mt-4 max-w-sm text-2xl font-semibold leading-tight">
                Shirts, hats, socks, drinkware, accessories, blankets, bags,
                beanies, polos, totes, towels, flannels, outerwear, and activewear.
              </p>
            </div>
            <div className="grid gap-3">
              <div className="rounded-[1.4rem] border border-white/10 bg-white/6 p-4">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#ffcfbf]">
                  California Team
                </p>
                <p className="mt-2 text-sm leading-6 text-[#e6d8ca]">
                  Quality goods for corporate gifting, retail, and events, built
                  without vendor juggling.
                </p>
              </div>
              <div className="rounded-[1.4rem] border border-white/10 bg-white/6 p-4">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#ffcfbf]">
                  Crafted To Be Kept
                </p>
                <p className="mt-2 text-sm leading-6 text-[#e6d8ca]">
                  The product, artwork, production, and delivery path stay inside
                  one system.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
