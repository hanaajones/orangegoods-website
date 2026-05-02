import Link from "next/link";
import { Reveal } from "@/components/Reveal";

export function CTASection({
  title,
  description,
  buttonLabel,
  buttonHref,
}: {
  title: string;
  description: string;
  buttonLabel: string;
  buttonHref: string;
}) {
  return (
    <Reveal className="px-4 py-8 md:px-8 lg:px-12">
      <section className="mx-auto max-w-6xl rounded-[2rem] bg-[var(--og-dark-blue)] p-8 text-white shadow-[0_24px_80px_rgba(8,30,111,0.22)] md:p-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white/70">
              Start Here
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
              {title}
            </h2>
            <p className="mt-4 text-base leading-7 text-white/84 md:text-lg">
              {description}
            </p>
          </div>
          <Link
            href={buttonHref}
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-[var(--og-orange)] px-6 text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-[#d73b05]"
          >
            {buttonLabel}
          </Link>
        </div>
      </section>
    </Reveal>
  );
}
