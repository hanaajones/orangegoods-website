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
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--og-orange)]">
            {eyebrow}
          </p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight text-[var(--og-ink)] md:text-5xl">
            {title}
          </h2>
          <p className="mt-4 text-base leading-7 text-[var(--og-muted)] md:text-lg">
            {description}
          </p>
        </div>
        <div className="mt-8 grid gap-4 lg:grid-cols-4">
          {steps.map((step, index) => (
            <article
              key={step.title}
              className="rounded-[1.75rem] border border-black/10 bg-[rgba(255,248,241,0.88)] p-6"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--og-orange)]">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-4 text-2xl font-semibold text-[var(--og-ink)]">
                {step.title}
              </h3>
              <p className="mt-4 text-base leading-7 text-[var(--og-muted)]">
                {step.body}
              </p>
            </article>
          ))}
        </div>
      </section>
    </Reveal>
  );
}
