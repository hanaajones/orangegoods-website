import Link from "next/link";

type DiscoveryLinkItem = {
  eyebrow?: string;
  title: string;
  description: string;
  href: string;
  cta: string;
};

export function DiscoveryLinksSection({
  eyebrow,
  title,
  description,
  items,
}: {
  eyebrow: string;
  title: string;
  description: string;
  items: DiscoveryLinkItem[];
}) {
  return (
    <section className="mx-auto max-w-6xl">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--og-orange)]">
          {eyebrow}
        </p>
        <h2 className="mt-[5px] text-balance text-[2.5rem] font-semibold leading-[0.94] text-[var(--og-blue)] md:text-[3.8rem]">
          {title}
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--og-muted)] md:text-lg">
          {description}
        </p>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="group rounded-[1.6rem] border border-[#0B32A0]/14 bg-white p-6 shadow-[0_18px_40px_rgba(11,50,160,0.06)] transition hover:-translate-y-[3px] hover:border-[#0B32A0]/30"
          >
            {item.eyebrow ? (
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-[var(--og-orange)]">
                {item.eyebrow}
              </p>
            ) : null}
            <h3 className="mt-3 text-2xl leading-tight text-[var(--og-blue)]">
              {item.title}
            </h3>
            <p className="mt-3 text-sm leading-6 text-[#1C1C1C]/68 md:text-[15px]">
              {item.description}
            </p>
            <span className="mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--og-blue)] transition group-hover:text-[var(--og-orange)]">
              {item.cta}
              <span className="h-px w-7 bg-current transition-all duration-300 group-hover:w-10" />
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
