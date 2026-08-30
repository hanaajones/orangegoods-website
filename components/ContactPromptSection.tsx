import Link from "next/link";
import { Reveal } from "@/components/Reveal";

export function ContactPromptSection({
  title = "Prefer to talk to our team?",
  description = "If you'd rather talk it through, we can help with styles, decoration, quantities, and timing.",
  buttonLabel = "Contact us",
  buttonHref = "/contact",
}: {
  title?: string;
  description?: string;
  buttonLabel?: string;
  buttonHref?: string;
}) {
  return (
    <Reveal className="px-4 pb-16 md:px-8 lg:px-12">
      <section className="mx-auto max-w-6xl rounded-[1.75rem] border border-[#0B32A0]/12 bg-white px-6 py-7 shadow-[0_18px_46px_rgba(8,30,111,0.06)] md:px-8">
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--og-orange)]">
              Contact
            </p>
            <h2 className="mt-3 text-2xl font-semibold leading-tight text-[var(--og-blue)] md:text-3xl">
              {title}
            </h2>
            <p className="mt-3 text-base leading-7 text-[var(--og-muted)]">
              {description}
            </p>
          </div>
          <Link
            href={buttonHref}
            className="inline-flex min-h-11 items-center justify-center rounded-xl border-2 border-[#0B32A0] px-5 text-sm font-semibold uppercase tracking-[0.12em] text-[#0B32A0] transition hover:-translate-y-[3px] hover:bg-[#0B32A0] hover:text-white"
          >
            {buttonLabel}
          </Link>
        </div>
      </section>
    </Reveal>
  );
}
