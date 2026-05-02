import Link from "next/link";
import { Reveal } from "@/components/Reveal";

const tiers = [
  {
    title: "OG Crafted",
    badge: "Full Custom",
    description:
      "Built from scratch. Custom fabric, fit, trims, and labels. For brands that want something nobody else has.",
    detail: "6–10 weeks · 100+ pieces",
    href: "/services#og-crafted",
    bg: "bg-[#FF4200]",
  },
  {
    title: "Ready Made",
    badge: "Fast + Quality",
    description:
      "Premium blanks, decorated locally. Embroidery, screen print, patches — applied cleanly and quickly.",
    detail: "2–4 weeks · 100+ pieces",
    href: "/services#ready-made",
    bg: "bg-[#0B32A0]",
  },
];

export function ServicesPreview() {
  return (
    <Reveal className="px-4 py-14 md:px-8 lg:px-12">
      <section className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <h2
            className="text-3xl uppercase leading-tight text-[#FF4200] md:text-5xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Two production paths
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base leading-7 text-[#1C1C1C]/60">
            OG Crafted is fully custom from scratch. Ready Made starts with premium blanks and decorates locally. Both are 100+ pieces, both are retail quality.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {tiers.map((tier) => (
            <Link
              key={tier.title}
              href={tier.href}
              className={`group flex flex-col rounded-[2rem] p-8 text-white transition hover:opacity-95 ${tier.bg}`}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
                {tier.badge}
              </p>
              <h3
                className="mt-3 text-2xl uppercase leading-tight text-white md:text-3xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {tier.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-6 text-white/70">
                {tier.description}
              </p>
              <div className="mt-6 flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-[0.12em] text-white/50">
                  {tier.detail}
                </span>
                <span className="text-white/60 transition group-hover:translate-x-1 group-hover:text-white">
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>

        <p className="mt-6 text-center text-sm text-[#1C1C1C]/40">
          Not sure which is right?{" "}
          <Link href="/quiz" className="text-[#FF4200] hover:underline">
            Take the quiz →
          </Link>
        </p>
      </section>
    </Reveal>
  );
}
