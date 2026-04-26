import Link from "next/link";

const navItems = [
  { label: "CUSTOM", href: "/#paths" },
  { label: "BUILD ONLINE", href: "https://orangegoods.co/goods/" },
  { label: "DESIGN", href: "/#process" },
  { label: "ABOUT", href: "/#about" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-40 px-3 pt-3 md:px-6 md:pt-5">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-black/10 bg-[rgba(251,247,241,0.82)] px-4 py-3 shadow-[0_12px_48px_rgba(22,17,15,0.08)] backdrop-blur md:px-6">
        <Link href="/" className="text-sm font-black tracking-[0.28em] text-[var(--og-ink)]">
          ORANGE GOODS
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-semibold tracking-[0.16em] text-[var(--og-ink)] transition hover:text-[var(--og-orange)]"
            >
              {item.label}
              {item.label !== "DESIGN" ? " ▾" : ""}
            </Link>
          ))}
        </nav>
        <Link
          href="mailto:hello@orangegoods.co?subject=Start%20a%20Project"
          className="inline-flex min-h-11 items-center rounded-full bg-[var(--og-orange)] px-4 text-sm font-semibold text-white transition hover:bg-[#d73b05] md:px-5"
        >
          START A PROJECT
        </Link>
      </div>
    </header>
  );
}
