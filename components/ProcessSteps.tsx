import { Reveal } from "@/components/Reveal";

type Step = {
  title: string;
  body: string;
};

export function ProcessSteps({
  eyebrow,
  title,
  description,
  steps,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  steps: Step[];
}) {
  return (
    <Reveal className="px-4 pb-8 pt-[58px] md:px-8 md:pb-8 md:pt-[82px] lg:px-12">
      <section id="process" className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--og-orange)]">
            {eyebrow}
          </p>
          <h2 className="mt-[5px] text-balance text-[2.7rem] font-semibold leading-[0.92] text-[var(--og-blue)] md:text-[4.35rem] md:leading-[0.88]">
            {title}
          </h2>
          {description ? (
            <p className="mt-4 text-base leading-7 text-[var(--og-muted)] md:text-lg">
              {description}
            </p>
          ) : null}
        </div>
        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {steps.map((step, index) => (
            <article
              key={step.title}
              className="rounded-[1.75rem] border border-[#0B32A0]/20 bg-[rgba(255,248,241,0.88)] p-6"
            >
              <p
                className={`text-sm font-semibold uppercase tracking-[0.22em] ${
                  index % 2 === 0 ? "text-[var(--og-orange)]" : "text-[var(--og-blue)]"
                }`}
              >
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-4 text-2xl font-semibold text-[var(--og-blue)]">
                {step.title}
              </h3>
              <p className="mt-2.5 text-base leading-7 text-[var(--og-muted)]">
                {step.body}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="/contact"
            className="font-noir-alt inline-flex min-h-11 items-center justify-center rounded-full border-2 border-[#0B32A0] bg-white px-7 py-3 text-sm font-bold uppercase tracking-[0.08em] text-[#0B32A0] shadow-[4px_4px_0px_#0B32A0] transition hover:-translate-y-0.5 hover:bg-[#F7F4ED]"
          >
            START A PROJECT
          </a>
        </div>
      </section>
    </Reveal>
  );
}
