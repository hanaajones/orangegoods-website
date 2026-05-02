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
  description: string;
  steps: Step[];
}) {
  return (
    <Reveal className="px-4 py-8 md:px-8 lg:px-12">
      <section id="process" className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--og-orange)]">
            {eyebrow}
          </p>
          <h2 className="text-3xl font-semibold leading-tight text-[var(--og-blue)] md:text-5xl">
            {title}
          </h2>
          <p className="mt-4 text-base leading-7 text-[var(--og-muted)] md:text-lg">
            {description}
          </p>
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
              <p className="mt-4 text-base leading-7 text-[var(--og-muted)]">
                {step.body}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a href="/contact" className="btn-og inline-flex">
            START A PROJECT
          </a>
        </div>
      </section>
    </Reveal>
  );
}
