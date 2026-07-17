import Image from "next/image";
import { Reveal } from "@/components/Reveal";

type Step = {
  title: string;
  body: string;
  numberClassName?: string;
};

export function ProcessSteps({
  eyebrow,
  title,
  description,
  steps,
  buttonHref = "/contact",
  heroImage,
  heroImagePosition,
  heroOverlayClassName,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  steps: Step[];
  buttonHref?: string;
  heroImage?: string;
  heroImagePosition?: string;
  heroOverlayClassName?: string;
}) {
  return (
    <Reveal className="bg-[#F7F4ED] px-4 pb-[52px] pt-[58px] md:px-8 md:pb-[52px] md:pt-[82px] lg:px-12">
      <section id="process" className="mx-auto max-w-6xl">
        {heroImage ? (
          <div className="relative overflow-hidden rounded-[2rem] border-[3px] border-[#0B32A0]/12">
            <div className="relative aspect-[16/8] min-h-[20rem]">
              <Image
                src={heroImage}
                alt=""
                aria-hidden="true"
                fill
                sizes="(min-width: 1024px) 80vw, 100vw"
                className="object-cover"
                style={{ objectPosition: heroImagePosition ?? "center" }}
              />
              <div
                className={`absolute inset-0 ${heroOverlayClassName ?? "bg-[linear-gradient(135deg,rgba(11,50,160,0.76),rgba(28,28,28,0.44))]"}`}
                aria-hidden="true"
              />
              <div className="relative flex h-full items-end p-6 md:p-8 lg:p-10">
                <div className="max-w-3xl">
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white/78">
                    {eyebrow}
                  </p>
                  <h2 className="mt-[5px] text-balance text-[2.7rem] font-semibold leading-[0.92] text-white md:text-[4.35rem] md:leading-[0.88]">
                    {title}
                  </h2>
                  {description ? (
                    <p className="mt-4 max-w-2xl text-base leading-7 text-white/82 md:text-lg">
                      {description}
                    </p>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        ) : (
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
        )}
        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {steps.map((step, index) => (
            <article
              key={step.title}
              className="rounded-[1.75rem] border border-[#D8CCB7] bg-white p-6 shadow-[0_16px_34px_rgba(11,50,160,0.06)]"
            >
              <p
                className={`text-sm font-semibold uppercase tracking-[0.22em] ${
                  step.numberClassName ??
                  (index % 2 === 0 ? "text-[var(--og-orange)]" : "text-[var(--og-blue)]")
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
            href={buttonHref}
            className="font-noir-alt inline-flex min-h-11 items-center justify-center rounded-full border-2 border-[#0B32A0] bg-white px-7 py-3 text-sm font-bold uppercase tracking-[0.08em] text-[#0B32A0] shadow-[4px_4px_0px_#0B32A0] transition hover:-translate-y-0.5 hover:bg-[#F7F4ED]"
          >
            START A PROJECT
          </a>
        </div>
      </section>
    </Reveal>
  );
}
