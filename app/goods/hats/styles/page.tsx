import Image from "next/image";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { hatStyles } from "../style-data";

export default function HatStylesPage() {
  return (
    <main className="bg-[#F7F4ED] pb-24 md:pb-0">
      <div className="px-6 pt-6 md:px-12">
        <Link
          href="/goods/hats"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--og-blue)] hover:text-[var(--og-orange)]"
        >
          ← Back to custom hats
        </Link>
      </div>

      <section className="px-6 pb-8 pt-8 md:px-12">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--og-orange)]">
            Styles
          </p>
          <h1 className="mt-4 text-5xl font-semibold leading-none tracking-[-0.03em] text-[var(--og-blue)] md:text-7xl">
            See all hat styles
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-7 text-[var(--og-muted)]">
            Start with the shape, then click into a style to price it out and start the order.
          </p>
        </div>
      </section>

      <section className="px-6 py-4 md:px-12">
        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-2 xl:grid-cols-3">
          {hatStyles.map((style) => (
            <Link
              key={style.slug}
              href={`/goods/hats/styles/${style.slug}`}
              className="group block"
            >
              <article className="overflow-hidden rounded-[1.9rem] border-[3px] border-transparent bg-white shadow-[0_18px_50px_rgba(8,30,111,0.07)] transition group-hover:-translate-y-[2px] group-hover:border-[#0B32A0]">
                <div className="relative aspect-[16/10] bg-[#d9c5ae]">
                  <Image
                    src={style.image}
                    alt={style.title}
                    fill
                    sizes="(min-width: 1280px) 30vw, (min-width: 768px) 45vw, 100vw"
                    className="object-cover transition duration-300 group-hover:scale-[1.03]"
                    style={{ objectPosition: style.imagePosition }}
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--og-orange)]">
                    {style.model}
                  </p>
                  <h2 className="mt-2 text-3xl font-semibold leading-none text-[#1C1C1C]">
                    {style.title}
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-[var(--og-muted)] md:text-base">
                    {style.description}
                  </p>
                  <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-[#0B32A0] transition group-hover:text-[var(--og-orange)]">
                    Shop this style →
                  </p>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>

      <CTASection
        title="Ready to pick your hat style?"
        description="Choose the silhouette first, then we will help narrow the decoration, fabric, and finishing."
        buttonLabel="Start a Project"
        buttonHref="/contact?product=hats&program=og-crafted"
      />
    </main>
  );
}
