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
          <h2 className="mt-4 text-3xl font-semibold leading-tight text-[var(--og-blue)] md:text-5xl">
            {title}
          </h2>
        </div>
        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          {items.map((item, index) => (
            <article
              key={item.title}
              className="rounded-[2rem] border border-[#0B32A0]/20 bg-[rgba(255,248,241,0.86)] p-6 text-[var(--og-off-black)] md:p-8"
            >
              <p
                className={`text-sm font-semibold uppercase tracking-[0.28em] ${
                  index === 0 ? "text-[var(--og-orange)]" : "text-[var(--og-blue)]"
                }`}
              >
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
                        ? "bg-[#fff0e8] text-[var(--og-orange)]"
                        : "bg-[#e9edf8] text-[var(--og-blue)]"
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
                    : "bg-[var(--og-blue)] text-white hover:bg-[var(--og-dark-blue)]"
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
