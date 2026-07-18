import Link from "next/link";

type HatPageStickyNavProps = {
  mode: "og-crafted" | "ready-made";
  links?: Array<{ href: string; label: string }>;
};

export function HatPageStickyNav({
  mode,
  links = [],
}: HatPageStickyNavProps) {
  const toggleOptions = [
    { href: "/goods/hats", label: "OG Crafted", value: "og-crafted" as const },
    { href: "/goods/hats/ready-made", label: "Ready-Made", value: "ready-made" as const },
  ];

  return (
    <div className="sticky top-[5.75rem] z-30 border-y border-[#0B32A0]/20 bg-[rgba(251,247,241,0.92)] px-4 py-3 backdrop-blur md:px-8 lg:px-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-3">
        <div className="flex overflow-x-auto">
          <div className="inline-flex min-h-11 rounded-full border border-[#0B32A0]/18 bg-white/85 p-1">
            {toggleOptions.map((option) => {
              const active = option.value === mode;

              return (
                <Link
                  key={option.value}
                  href={option.href}
                  className={`inline-flex items-center rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] transition ${
                    active
                      ? "bg-[#0B32A0] text-white"
                      : "text-[var(--og-blue)] hover:text-[var(--og-orange)]"
                  }`}
                >
                  {option.label}
                </Link>
              );
            })}
          </div>
        </div>

        {links.length ? (
          <nav className="flex gap-2 overflow-x-auto">
            {links.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="inline-flex min-h-10 shrink-0 items-center rounded-xl border border-[#0B32A0]/20 px-4 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--og-blue)] transition hover:border-[var(--og-orange)] hover:text-[var(--og-orange)]"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        ) : null}
      </div>
    </div>
  );
}
