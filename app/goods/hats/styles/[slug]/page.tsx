import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getHatStyleBySlug, hatStyles } from "../../style-data";

const orderQuantities = [
  { label: "100 hats", hrefValue: "100", note: "Best place to start" },
  { label: "250 hats", hrefValue: "250", note: "More room to refine the build" },
  { label: "500 hats", hrefValue: "500", note: "Great value for most programs" },
  { label: "1,000 hats", hrefValue: "1000", note: "Best public volume tier" },
];

type HatStyleDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return hatStyles.map((style) => ({ slug: style.slug }));
}

export default async function HatStyleDetailPage({
  params,
}: HatStyleDetailPageProps) {
  const { slug } = await params;
  const style = getHatStyleBySlug(slug);

  if (!style) {
    notFound();
  }

  const baseOrderHref = `/build/og-crafted-hats?hatStyle=${encodeURIComponent(style.slug)}`;

  return (
    <main className="bg-[#F7F4ED] pb-24 md:pb-0">
      <div className="px-6 pt-6 md:px-12">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-3">
          <Link
            href="/goods/hats/styles"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--og-blue)] hover:text-[var(--og-orange)]"
          >
            ← Back to all hat styles
          </Link>
          <Link
            href="/goods/hats"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1C1C1C]/70 hover:text-[var(--og-orange)]"
          >
            Back to custom hats
          </Link>
        </div>
      </div>

      <section className="px-6 pb-10 pt-8 md:px-12">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div className="overflow-hidden rounded-[2rem] border-[3px] border-[#0B32A0] bg-white">
            <div className="relative aspect-[4/3] bg-[#d9c5ae]">
              <Image
                src={style.image}
                alt={`${style.model} ${style.title}`}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
                style={{ objectPosition: style.imagePosition }}
                priority
              />
            </div>
          </div>

          <div className="rounded-[2rem] border border-[#0B32A0]/15 bg-white p-7 md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--og-orange)]">
              {style.model}
            </p>
            <h1 className="mt-4 text-5xl font-semibold leading-none tracking-[-0.03em] text-[var(--og-blue)] md:text-6xl">
              {style.title}
            </h1>
            <p className="mt-5 text-lg leading-8 text-[var(--og-muted)]">
              {style.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {[
                { label: "Profile", value: style.profile },
                { label: "Closure", value: style.closure },
                { label: "Best for", value: style.bestFor },
              ].map((item) => (
                <span
                  key={item.label}
                  className="inline-flex flex-wrap items-center gap-2 rounded-full border border-[#0B32A0]/12 bg-[rgba(255,248,241,0.88)] px-4 py-2 text-sm"
                >
                  <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--og-orange)]">
                    {item.label}
                  </span>
                  <span className="text-[#1C1C1C]">{item.value}</span>
                </span>
              ))}
            </div>

            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--og-orange)]">
              Order this style
            </p>
            <p className="mt-4 text-base leading-7 text-[var(--og-muted)]">
              Pick a quantity to start the order, then we will dial in decoration, fabric, closure, and finishing with you.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
            {orderQuantities.map((quantity) => (
              <article
                key={quantity.hrefValue}
                className="rounded-[1.5rem] border border-[#0B32A0]/15 bg-[rgba(255,248,241,0.9)] p-5 transition hover:-translate-y-[2px] hover:border-[#0B32A0]"
              >
                <div className="flex items-start justify-between gap-3">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--og-orange)]">
                    {style.model}
                  </p>
                  <span className="rounded-full border border-[#0B32A0]/12 bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#1C1C1C]">
                    {quantity.label}
                  </span>
                </div>
                <p className="mt-4 text-sm leading-6 text-[var(--og-muted)]">{quantity.note}</p>
                <Link
                  href={`${baseOrderHref}&qty=${quantity.hrefValue}`}
                  className="mt-5 inline-flex min-h-11 items-center rounded-xl bg-[#0B32A0] px-4 text-sm font-semibold uppercase tracking-[0.12em] text-white transition hover:-translate-y-[2px] hover:bg-[var(--og-orange)]"
                >
                  Start {quantity.hrefValue}
                </Link>
              </article>
            ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link href={baseOrderHref} className="btn-og inline-flex">
                Start this style
              </Link>
              <Link
                href="/goods/hats/styles"
                className="inline-flex min-h-11 items-center rounded-xl border-2 border-[#0B32A0] px-4 text-sm font-semibold uppercase tracking-[0.12em] text-[#1C1C1C] transition hover:-translate-y-[2px] hover:bg-[#0B32A0] hover:text-white"
              >
                See all styles
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-16 pt-4 md:px-12 md:pb-20">
        <div className="mx-auto max-w-6xl rounded-[1.8rem] border border-[#0B32A0]/15 bg-white px-6 py-6 md:px-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--og-orange)]">
                Customize the rest
              </p>
              <p className="mt-2 text-base leading-7 text-[var(--og-muted)]">
                After the shape, the next choices are decoration, fabric, closure, and finishing details.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/goods/hats/decoration" className="text-sm font-semibold uppercase tracking-[0.14em] text-[#0B32A0] transition hover:text-[var(--og-orange)]">
                Decoration →
              </Link>
              <Link href="/goods/hats/fabric" className="text-sm font-semibold uppercase tracking-[0.14em] text-[#0B32A0] transition hover:text-[var(--og-orange)]">
                Fabric →
              </Link>
              <Link href="/goods/hats/closure" className="text-sm font-semibold uppercase tracking-[0.14em] text-[#0B32A0] transition hover:text-[var(--og-orange)]">
                Closure →
              </Link>
              <Link href="/goods/hats/add-ons" className="text-sm font-semibold uppercase tracking-[0.14em] text-[#0B32A0] transition hover:text-[var(--og-orange)]">
                Add-ons →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
