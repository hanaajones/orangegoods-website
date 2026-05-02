import Link from "next/link";
import { Reveal } from "@/components/Reveal";

type PathItem = {
  title: string;
  eyebrow?: string;
  description: string;
  details: string[];
  href: string;
  label: string;
};

export function TwoPaths({ items, title }: { items: PathItem[]; title: string }) {
  return (
    <Reveal className="px-4 py-8 md:px-8 lg:px-12">
      <section id="paths" className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--og-orange)]">
            Two Paths
          </p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight text-[var(--og-ink)] md:text-5xl">
            {title}
          </h2>
        </div>
        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          {items.map((item, index) => (
            <article
              key={item.title}
              className={`rounded-[2rem] border p-6 md:p-8 ${
                index === 0
                  ? "border-[var(--og-orange)] bg-[#1d1714] text-[#f7f1e8]"
                  : "border-black/10 bg-[rgba(255,248,241,0.86)] text-[var(--og-ink)]"
              }`}
            >
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--og-orange)]">
                {item.eyebrow ?? item.title}
              </p>
              <h3 className="mt-4 text-3xl font-semibold leading-tight">
                {item.title}
              </h3>
              <p className="mt-4 text-lg leading-7 opacity-90">{item.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {item.details.map((detail) => (
                  <span
                    key={detail}
                    className={`rounded-full px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] ${
                      index === 0
                        ? "bg-white/8 text-[#ffcfbf]"
                        : "bg-[#efe2d2] text-[var(--og-muted)]"
                    }`}
                  >
                    {detail}
                  </span>
                ))}
              </div>
              <Link
                href={item.href}
                className={`mt-8 inline-flex min-h-12 items-center rounded-full px-5 text-sm font-semibold uppercase tracking-[0.14em] transition ${
                  index === 0
                    ? "bg-[var(--og-orange)] text-white hover:bg-[#d73b05]"
                    : "border border-black/10 hover:border-[var(--og-orange)] hover:text-[var(--og-orange)]"
                }`}
              >
                {item.label}
              </Link>
            </article>
          ))}
        </div>
      </section>
    </Reveal>
  );
}
