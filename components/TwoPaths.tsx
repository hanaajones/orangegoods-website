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
  const configs = [
    {
      bg: "bg-[#FF4200]",
      text: "text-white",
      muted: "text-white/70",
      tagBg: "bg-white/20 text-white",
      btn: "btn-og-white",
      badge: "FULLY CUSTOM",
      badgeColor: "text-white/60",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    {
      bg: "bg-[#081E6F]",
      text: "text-white",
      muted: "text-white/70",
      tagBg: "bg-white/15 text-white",
      btn: "btn-og-white",
      badge: "READY MADE",
      badgeColor: "text-white/60",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
  ];

  return (
    <Reveal className="px-4 py-8 md:px-8 lg:px-12">
      <section id="paths" className="mx-auto max-w-6xl">
        <h2
          className="mb-8 text-3xl font-extrabold uppercase leading-tight text-[#FF4200] md:text-4xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {title}
        </h2>

        <div className="grid gap-4 lg:grid-cols-2">
          {items.map((item, index) => {
            const cfg = configs[index];
            return (
              <article
                key={item.title}
                className={`flex flex-col rounded-[2rem] p-8 md:p-10 ${cfg.bg}`}
              >
                {/* Icon + badge */}
                <div className="flex items-start justify-between">
                  {cfg.icon}
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/60">
                    {cfg.badge}
                  </span>
                </div>

                {/* Title */}
                <h3
                  className="mt-6 text-3xl uppercase leading-tight text-white md:text-4xl"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-4 text-base leading-7 text-white/70">
                  {item.description}
                </p>

                {/* Detail pills */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {item.details.map((detail) => (
                    <span
                      key={detail}
                      className="rounded-xl bg-white/20 px-3 py-2 text-xs font-bold uppercase tracking-[0.12em] text-white"
                    >
                      {detail}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div className="mt-8">
                  <Link href={item.href} className={cfg.btn}>
                    {item.label}
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </Reveal>
  );
}
