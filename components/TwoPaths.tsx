import Link from "next/link";
import { Reveal } from "@/components/Reveal";

type PathItem = {
  title: string;
  eyebrow?: string;
  description: string;
  details: string[];
  href: string;
  label: string;
  image?: string;
};

export function TwoPaths({ items, title }: { items: PathItem[]; title: string }) {
  const startOptions = [
    {
      title: "Bring us an idea",
      copy: "You have a launch, event, team, or product direction. We help shape the right merch mix, source it, produce it, and get it delivered.",
    },
    {
      title: "Send us your logo",
      copy: "You know the product and need a clean quote fast. Pick the item, send the artwork, and we will confirm the best production route.",
    },
    {
      title: "Not sure yet",
      copy: "If you are still deciding what to make, we can narrow it down by use case, budget, timeline, quantity, and the kind of impression you want to leave.",
    },
  ];

  const configs = [
    {
      bg: "bg-[#FF4200]",
      text: "text-white",
      muted: "text-white/70",
      tagBg: "bg-white/20 text-white",
      btn: "btn-og-white",
      badge: "HUMAN-LED",
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
      badge: "SELF-SERVE",
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
        <div className="mb-6 overflow-hidden rounded-[2rem] border-[3px] border-[#081E6F] bg-white shadow-[5px_5px_0px_#0B32A0] md:mb-8">
          <div className="grid gap-0 md:grid-cols-[0.9fr_1.35fr]">
            <div className="flex min-h-[12rem] flex-col justify-center bg-[#081E6F] px-6 py-8 text-white md:px-8">
              <p className="font-noir-alt text-xs font-bold uppercase tracking-[0.24em] text-white/55">
                Full-service support
              </p>
              <h3 className="font-display mt-4 max-w-md text-[2.75rem] font-normal uppercase leading-none tracking-normal text-[#FF4200] md:text-[3.5rem]">
                From idea to finished merch
              </h3>
            </div>
            <div className="flex items-center px-6 py-8 md:px-8 lg:px-10">
              <p className="font-noir-alt max-w-3xl text-base font-medium leading-8 text-[#1C1C1C]/70 md:text-lg md:leading-9">
                We partner with teams and businesses of all sizes to turn early ideas into finished merch people actually want to keep. Whether you have polished artwork, a rough direction, or just a deadline and a goal, we can help shape the product, handle design and production, and keep the process clear while holding every piece to our quality standards.
              </p>
            </div>
          </div>
        </div>

        <h2
          className="mb-8 text-center text-3xl font-extrabold uppercase leading-tight text-[#FF4200] md:text-5xl"
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
                className={`flex flex-col rounded-[2rem] p-6 md:p-8 lg:p-10 ${cfg.bg}`}
              >
                {/* Photo */}
                {item.image && (
                  <div className="-mx-6 -mt-6 mb-6 h-56 overflow-hidden rounded-t-[2rem] md:-mx-8 md:-mt-8 md:h-64 lg:-mx-10 lg:-mt-10 lg:h-72">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                )}

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

        <div className="mt-5 rounded-[1.5rem] border-[3px] border-[#0B32A0] bg-white p-4 shadow-[5px_5px_0px_#0B32A0] md:p-6">
          <div className="grid gap-3 md:grid-cols-3">
            {startOptions.map((option) => (
              <article
                key={option.title}
                className="rounded-xl bg-[#F3EFE7] p-5 text-[#081E6F]"
              >
                <h3 className="font-display text-2xl font-normal uppercase leading-none tracking-normal text-[#0B32A0] md:text-[1.7rem]">
                  {option.title}
                </h3>
                <p className="font-noir-alt mt-3 text-sm font-medium leading-6 text-[#1C1C1C]/70">
                  {option.copy}
                </p>
              </article>
            ))}
          </div>
        </div>

        {/* Education note */}
        <p className="mt-6 text-center text-sm text-[#1C1C1C]/45">
          Not sure which is right? Either path works — we&apos;ll sort out the details together.
          {" "}
          <a href="/about" className="text-[#FF4200] hover:underline">Learn about OG Crafted vs Ready Made →</a>
        </p>
      </section>
    </Reveal>
  );
}
