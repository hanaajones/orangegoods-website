import Link from "next/link";
import { Reveal } from "@/components/Reveal";

const teasers = [
  {
    title: "PICK YOUR STYLE",
    description:
      "Choose from our full lineup of hats, tees, hoodies, bags, and more.",
  },
  {
    title: "CHOOSE YOUR COLORS",
    description:
      "Full Pantone library. See your product come to life before you order.",
  },
  {
    title: "GET A REAL QUOTE",
    description:
      "No surprises. Transparent per-unit pricing based on your selections.",
  },
];

export default function BuildPage() {
  return (
    <main className="pb-24 md:pb-0">
      <section className="flex min-h-[calc(100vh-84px)] items-center bg-[var(--og-blue)] px-4 py-16 text-white md:px-8 md:py-24 lg:px-12">
        <div className="mx-auto w-full max-w-6xl">
          <p className="font-[family-name:var(--font-accent)] text-4xl leading-none text-[var(--og-tangerine)] md:text-5xl">
            Coming Soon
          </p>
          <h1 className="mt-5 text-6xl leading-none text-[var(--og-orange)] md:text-8xl lg:text-9xl">
            BUILD ONLINE
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-8 text-white/80 md:text-xl">
            Our online product configurator is coming soon. Pick your style,
            choose your colors, upload your logo - and get a real quote in
            minutes.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href="mailto:hello@orangegoods.co?subject=Build%20Online"
              className="inline-flex min-h-12 items-center rounded-full bg-[var(--og-orange)] px-6 text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-[#d73b05]"
            >
              START A PROJECT
            </Link>
            <Link
              href="/goods/hats"
              className="inline-flex min-h-12 items-center rounded-full border border-white px-6 text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:border-[var(--og-orange)] hover:text-[#ff9e7a]"
            >
              EXPLORE CUSTOM HATS
            </Link>
          </div>
        </div>
      </section>

      <Reveal className="bg-[var(--og-warm-grey)] px-4 py-16 md:px-8 md:py-20 lg:px-12">
        <section className="mx-auto grid max-w-6xl gap-5 md:grid-cols-3">
          {teasers.map((teaser) => (
            <article
              key={teaser.title}
              className="border border-[#0B32A0]/20 bg-white/75 p-6"
            >
              <h2 className="text-3xl leading-tight text-[var(--og-orange)]">
                {teaser.title}
              </h2>
              <p className="mt-4 text-base leading-7 text-[var(--og-muted)]">
                {teaser.description}
              </p>
            </article>
          ))}
        </section>
      </Reveal>
    </main>
  );
}
