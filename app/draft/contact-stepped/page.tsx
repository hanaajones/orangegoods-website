"use client";

import { FormEvent, useRef, useState } from "react";
import Link from "next/link";
import { ParallaxHeroBackground } from "@/components/ParallaxHeroBackground";
import { Reveal } from "@/components/Reveal";

const inputClass =
  "min-h-12 rounded-2xl border border-[#0B32A0]/16 bg-white px-4 text-base font-normal normal-case tracking-normal text-[var(--og-ink)] outline-none transition focus:border-[var(--og-orange)]";

const labelClass =
  "grid gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--og-blue)]";

const selectArrowSvg = encodeURIComponent(`
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path d="M3 5.25L7 9.25L11 5.25" stroke="#0B32A0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`);

const selectOptions = {
  designHelp: ["Yes", "No", "I'm not sure"],
  quantity: ["100-250", "250-500", "500-1,000", "1,000-2,000", "2,000-5,000", "5,000+"],
  timeline: ["ASAP", "2-4 weeks", "1-2 months", "2+ months", "Not sure"],
  budget: ["< $2,500", "$5k", "$10k", "$50k", "$100k +"],
};

function RequiredLabel({
  label,
  required = false,
}: {
  label: string;
  required?: boolean;
}) {
  return (
    <span className="inline-flex items-center gap-1.5">
      <span>{label}</span>
      {required ? <span className="text-[var(--og-orange)]">*</span> : null}
    </span>
  );
}

function isValidStep(container: HTMLDivElement | null) {
  if (!container) return false;

  const controls = container.querySelectorAll("input, textarea, select");

  for (const control of controls) {
    if (
      control instanceof HTMLInputElement ||
      control instanceof HTMLTextAreaElement ||
      control instanceof HTMLSelectElement
    ) {
      if (!control.checkValidity()) {
        control.reportValidity();
        return false;
      }
    }
  }

  return true;
}

export default function DraftContactSteppedPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const stepRefs = useRef<Array<HTMLDivElement | null>>([]);

  const totalSteps = 3;
  const selectClass = `${inputClass} appearance-none bg-[length:14px_14px] bg-[right_1.25rem_center] bg-no-repeat pr-14`;

  const nextStep = () => {
    if (!isValidStep(stepRefs.current[currentStep])) return;
    setCurrentStep((step) => Math.min(step + 1, totalSteps - 1));
  };

  const prevStep = () => {
    setCurrentStep((step) => Math.max(step - 1, 0));
  };

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!isValidStep(stepRefs.current[currentStep])) return;

    setSubmitting(true);

    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(
      Array.from(formData.entries()).filter(([, value]) => typeof value === "string"),
    );

    await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    setSubmitting(false);
    setSubmitted(true);
    window.location.assign("/thank-you?source=draft-contact-stepped&intent=contact");
  }

  return (
    <main className="bg-[var(--og-warm-grey)] pb-24 md:pb-0">
      <section className="relative overflow-hidden bg-[#1C1C1C] px-4 py-16 text-white md:px-8 md:py-24 lg:px-12">
        <ParallaxHeroBackground
          image="/images/gallery/full-custom-materials-mg-9406.jpg"
          position="center 48%"
        />
        <div className="absolute inset-0 bg-[#1C1C1C]/34" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1C1C1C]/60 via-[#1C1C1C]/44 to-[#1C1C1C]/18" />
        <div className="relative mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white/75">
            Draft contact flow
          </p>
          <h1 className="mt-5 text-5xl uppercase leading-none text-[var(--og-orange)] md:text-6xl lg:text-7xl">
            Step By
            <br />
            Step
          </h1>
        </div>
      </section>

      <Reveal className="px-4 pb-16 md:px-8 md:pb-20 lg:px-12">
        <section className="mx-auto grid max-w-5xl gap-8 pt-12 md:pt-14 lg:pt-16">
          <div className="rounded-[2rem] border-[3px] border-[#0B32A0] bg-[#FFFDF8] p-6 shadow-[0_22px_60px_rgba(11,50,160,0.08)] md:p-8">
            <div className="flex flex-wrap items-center justify-between gap-4 rounded-[1.5rem] border border-[#FF4200]/18 bg-white/70 p-5">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-[#FF4200]">
                  Draft comparison
                </p>
                <h2 className="mt-2 text-3xl leading-none text-[var(--og-blue)] md:text-4xl">
                  Tell us what you&apos;re making.
                </h2>
                <p className="mt-2 text-xs uppercase tracking-[0.18em] text-[#1C1C1C]/52">
                  You&apos;ll hear back in 24 hours or less
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex min-h-11 items-center rounded-full border border-[#0B32A0]/18 px-5 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--og-blue)] transition hover:border-[var(--og-orange)] hover:text-[var(--og-orange)]"
              >
                View live form
              </Link>
            </div>

            <div className="mt-6 grid gap-3 md:grid-cols-3">
              {["Intro", "Project details", "Finish"].map((label, index) => {
                const isActive = currentStep === index;
                const isComplete = currentStep > index;

                return (
                  <div
                    key={label}
                    className={`rounded-2xl border px-4 py-3 text-sm uppercase tracking-[0.18em] ${
                      isActive
                        ? "border-[#FF4200] bg-[#FFF2E7] text-[#FF4200]"
                        : isComplete
                          ? "border-[#0B32A0]/18 bg-white text-[var(--og-blue)]"
                          : "border-[#0B32A0]/12 bg-white/60 text-[#1C1C1C]/45"
                    }`}
                  >
                    {label}
                  </div>
                );
              })}
            </div>

            <form onSubmit={handleSubmit} className="mt-6 grid gap-6">
              {submitted ? (
                <div className="rounded-2xl border border-[var(--og-orange)] bg-[var(--og-orange)] p-5 text-white">
                  <p className="text-sm font-semibold uppercase tracking-[0.22em]">Message Sent</p>
                  <p className="mt-2 text-lg leading-7">Thanks. We will be in touch within 1 business day</p>
                </div>
              ) : null}

              {currentStep === 0 ? (
                <div ref={(node) => { stepRefs.current[0] = node; }} className="grid gap-5">
                  <div className="grid gap-5 md:grid-cols-2">
                    <label className={labelClass}>
                      <RequiredLabel label="Name" required />
                      <input name="name" required className={inputClass} />
                    </label>
                    <label className={labelClass}>
                      <RequiredLabel label="Email" required />
                      <input name="email" type="email" required className={inputClass} />
                    </label>
                  </div>

                  <label className={labelClass}>
                    <RequiredLabel label="Company" required />
                    <input name="company" required className={inputClass} />
                  </label>
                </div>
              ) : null}

              {currentStep === 1 ? (
                <div ref={(node) => { stepRefs.current[1] = node; }} className="grid gap-5">
                  <div className="grid gap-5 md:grid-cols-2">
                    <label className={labelClass}>
                      <RequiredLabel label="Phone" />
                      <input name="phone" type="tel" className={inputClass} />
                    </label>
                    <label className={labelClass}>
                      <RequiredLabel label="Need design help?" required />
                      <select
                        name="designHelp"
                        required
                        defaultValue=""
                        className={selectClass}
                        style={{ backgroundImage: `url("data:image/svg+xml,${selectArrowSvg}")` }}
                      >
                        <option value="" disabled>
                          Select
                        </option>
                        {selectOptions.designHelp.map((option) => (
                          <option key={option}>{option}</option>
                        ))}
                      </select>
                    </label>
                  </div>

                  <div className="grid gap-5 md:grid-cols-3">
                    <label className={labelClass}>
                      <RequiredLabel label="Quantity" required />
                      <select
                        name="quantity"
                        required
                        defaultValue=""
                        className={selectClass}
                        style={{ backgroundImage: `url("data:image/svg+xml,${selectArrowSvg}")` }}
                      >
                        <option value="" disabled>
                          Select
                        </option>
                        {selectOptions.quantity.map((option) => (
                          <option key={option}>{option}</option>
                        ))}
                      </select>
                    </label>

                    <label className={labelClass}>
                      <RequiredLabel label="Timeline" required />
                      <select
                        name="timeline"
                        required
                        defaultValue=""
                        className={selectClass}
                        style={{ backgroundImage: `url("data:image/svg+xml,${selectArrowSvg}")` }}
                      >
                        <option value="" disabled>
                          Select
                        </option>
                        {selectOptions.timeline.map((option) => (
                          <option key={option}>{option}</option>
                        ))}
                      </select>
                    </label>

                    <label className={labelClass}>
                      <RequiredLabel label="Budget Range" />
                      <select
                        name="budget"
                        defaultValue=""
                        className={selectClass}
                        style={{ backgroundImage: `url("data:image/svg+xml,${selectArrowSvg}")` }}
                      >
                        <option value="" disabled>
                          Select
                        </option>
                        {selectOptions.budget.map((option) => (
                          <option key={option}>{option}</option>
                        ))}
                      </select>
                    </label>
                  </div>
                </div>
              ) : null}

              {currentStep === 2 ? (
                <div ref={(node) => { stepRefs.current[2] = node; }} className="grid gap-5">
                  <label className={labelClass}>
                    <RequiredLabel label="What are you making?" required />
                    <textarea
                      name="project"
                      rows={7}
                      required
                      placeholder="Please share as much information as possible about the style, design, and products you're looking for. Feel free to include any references."
                      className="rounded-2xl border border-[#0B32A0]/16 bg-white px-4 py-3 text-base font-normal normal-case tracking-normal text-[var(--og-ink)] placeholder:text-[#1C1C1C]/42 outline-none transition focus:border-[var(--og-orange)]"
                    />
                  </label>

                  <div className="space-y-2">
                    <label className="block">
                      <span className="text-sm font-medium text-[#1C1C1C]">
                        Upload artwork or files{" "}
                        <span className="font-normal text-[#1C1C1C]/50">(optional)</span>
                      </span>
                      <input
                        type="file"
                        name="artwork"
                        multiple
                        accept=".ai,.eps,.pdf,.svg,.png,.jpg,.jpeg,.zip"
                        className="og-file-input mt-2 block w-full cursor-pointer rounded-2xl border border-[#0B32A0]/16 bg-white px-4 py-3 text-sm text-[#1C1C1C] file:mr-4 file:rounded-xl file:border file:border-[#0B32A0]/18 file:bg-[var(--og-warm-grey)] file:px-4 file:py-2 file:text-xs file:font-bold file:uppercase file:text-[#0B32A0] file:transition hover:file:border-[var(--og-orange)] hover:file:text-[var(--og-orange)]"
                      />
                    </label>
                    <p className="text-xs text-[#1C1C1C]/45">
                      Vector files preferred — AI, EPS, PDF, SVG. Have larger files? Share a Dropbox or
                      WeTransfer link in your message.
                    </p>
                  </div>
                </div>
              ) : null}

              <div className="flex flex-wrap items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={prevStep}
                  className={`inline-flex min-h-11 items-center rounded-full border px-5 text-xs font-semibold uppercase tracking-[0.16em] transition ${
                    currentStep === 0
                      ? "pointer-events-none border-[#0B32A0]/10 text-[#1C1C1C]/28"
                      : "border-[#0B32A0]/18 text-[var(--og-blue)] hover:border-[var(--og-orange)] hover:text-[var(--og-orange)]"
                  }`}
                >
                  Back
                </button>

                <div className="flex items-center gap-3">
                  <p className="text-xs uppercase tracking-[0.18em] text-[#1C1C1C]/48">
                    Step {currentStep + 1} of {totalSteps}
                  </p>

                  {currentStep < totalSteps - 1 ? (
                    <button type="button" onClick={nextStep} className="btn-og rounded-full">
                      Next
                    </button>
                  ) : (
                    <button type="submit" disabled={submitting} className="btn-og rounded-full">
                      {submitting ? "Sending…" : "Get Started"}
                    </button>
                  )}
                </div>
              </div>
            </form>
          </div>
        </section>
      </Reveal>
    </main>
  );
}
