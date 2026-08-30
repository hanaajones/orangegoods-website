"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Reveal } from "@/components/Reveal";

type Step = {
  stepLabel?: string;
  title: string;
  body: string;
  iconSrc?: string;
  iconWidth?: number;
  iconHeight?: number;
  iconClassName?: string;
};

export function ProcessSteps({
  eyebrow,
  title,
  description,
  steps,
  buttonHref,
  heroImage,
  heroImagePosition,
  heroOverlayClassName,
  wrapperClassName = "bg-[#F7F4ED]",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  steps: Step[];
  buttonHref?: string;
  heroImage?: string;
  heroImagePosition?: string;
  heroOverlayClassName?: string;
  wrapperClassName?: string;
}) {
  const stepsRef = useRef<HTMLDivElement | null>(null);
  const stepsInView = useInView(stepsRef, { once: true, amount: 0.3 });

  return (
    <Reveal className={`${wrapperClassName} px-4 py-12 md:px-8 md:py-16 lg:px-12`.trim()}>
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
        <div ref={stepsRef} className="mt-8 grid gap-4 lg:grid-cols-3">
          {steps.map((step, index) => (
            <article
              key={step.title}
              className="rounded-[1.75rem] border border-[#D8CCB7] bg-white p-6 shadow-[0_16px_34px_rgba(11,50,160,0.06)]"
            >
              {step.iconSrc ? (
                <motion.div
                  className="mb-4 flex h-14 items-center justify-center"
                  initial={{ opacity: 0, y: 18, scale: 0.86 }}
                  animate={
                    stepsInView
                      ? { opacity: 1, y: 0, scale: 1 }
                      : { opacity: 0, y: 18, scale: 0.86 }
                  }
                  transition={{
                    duration: 0.45,
                    delay: index * 0.14,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <Image
                    src={step.iconSrc}
                    alt=""
                    aria-hidden="true"
                    width={step.iconWidth ?? 120}
                    height={step.iconHeight ?? 120}
                    className={step.iconClassName ?? "h-10 w-auto"}
                  />
                </motion.div>
              ) : null}
              {step.stepLabel ? (
                <p className="text-center text-sm font-semibold uppercase tracking-[0.28em] text-[var(--og-orange)]">
                  {step.stepLabel}
                </p>
              ) : null}
              <h3 className="mt-4 text-center text-2xl font-semibold text-[var(--og-blue)]">
                {step.title}
              </h3>
              <p className="mt-2.5 text-center text-base leading-7 text-[var(--og-muted)]">
                {step.body}
              </p>
            </article>
          ))}
        </div>

        {buttonHref ? (
          <div className="mt-12 text-center">
            <a
              href={buttonHref}
              className="font-body inline-flex min-h-11 items-center justify-center rounded-full border-2 border-[#0B32A0] bg-white px-7 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-[#0B32A0] shadow-[4px_4px_0px_#0B32A0] transition hover:-translate-y-0.5 hover:bg-[#F7F4ED]"
            >
              START A PROJECT
            </a>
          </div>
        ) : null}
      </section>
    </Reveal>
  );
}
