import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { ReadyMadeHatGrid } from "@/components/ReadyMadeHatGrid";
import { READY_MADE_HATS } from "@/lib/ready-made-hats";

export const metadata = {
  title: "Ready Made Hats — Orange Goods",
  description: "Premium AS Colour blank hats with your embroidery. 2–3 week turnaround from 100 units.",
};

export default function ReadyMadeHatsPage() {
  return (
    <main className="bg-[#F5F0E8] pb-24 md:pb-0">
      <div className="px-6 pt-6 md:px-12">
        <Link href="/goods/hats" className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--og-blue)] hover:text-[var(--og-orange)]">
          ← Custom Hats (OG Crafted)
        </Link>
      </div>

      <section className="px-6 pb-10 pt-8 md:px-12">
        <div className="mx-auto max-w-6xl">
          <span className="inline-block rounded-full border border-[#0B32A0]/20 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--og-blue)]">
            Ready Made
          </span>
          <h1
            className="mt-4 text-5xl font-semibold leading-none tracking-[-0.03em] text-[var(--og-blue)] md:text-7xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Hats in 2–3 weeks
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-7 text-[var(--og-muted)]">
            Premium AS Colour blanks with your embroidery. Pick your style, choose your color, upload your logo.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            {[
              { stat: "2–3 wks", label: "Production" },
              { stat: "100",     label: "Min. units" },
              { stat: "Free",    label: "Digitizing" },
              { stat: "Free",    label: "Shipping" },
            ].map(({ stat, label }) => (
              <div key={label} className="rounded-2xl border border-[#0B32A0]/15 bg-white px-5 py-3">
                <p className="text-xl font-bold text-[var(--og-orange)]">{stat}</p>
                <p className="text-xs text-[var(--og-muted)]">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-4">
        <ReadyMadeHatGrid styles={READY_MADE_HATS} />
      </section>

      <section className="px-6 py-6 md:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="overflow-hidden rounded-[1.5rem] border-2 border-[var(--og-orange)] bg-[var(--og-dark-blue)]">
            <div className="grid gap-px bg-white/10 md:grid-cols-3">
              {[
                {
                  src: "/images/product/hats/feb-snapback-nylon-interior.jpg",
                  alt: "Interior embroidery detail on a custom hat",
                },
                {
                  src: "/images/gallery/hat-feb-img_7603.jpg",
                  alt: "Custom patch and rope detail on a hat",
                },
                {
                  src: "/images/gallery/hat-og-yosemite-dscf4216.jpg",
                  alt: "Custom embroidered patch hat outdoors",
                },
              ].map((photo) => (
                <div key={photo.src} className="aspect-[4/3] overflow-hidden bg-white/5">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-4 px-7 py-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--og-orange)]">Want more?</p>
                <p className="mt-1 text-base font-semibold text-white">
                  OG Crafted hats are built from scratch — your fabric, shape, and every detail.
                </p>
              </div>
              <Link href="/goods/hats"
                className="shrink-0 rounded-xl bg-[var(--og-orange)] px-5 py-2.5 text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-[#d73b05]">
                See OG Crafted →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Questions before you order?"
        description="A product expert team member will get back to you within one business day."
        buttonLabel="Get in Touch"
        buttonHref="/contact"
      />
    </main>
  );
}
