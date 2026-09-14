"use client";

import { FormEvent, useState } from "react";
import { submitContactForm } from "@/lib/contact/client-submit";
import { useLeadAttributionHiddenFields } from "@/hooks/useLeadAttributionHiddenFields";

const labelClass =
  "grid gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--og-blue)]";

const inputClass =
  "min-h-12 rounded-2xl border border-[#0B32A0]/16 bg-white px-4 text-base font-normal normal-case tracking-normal text-[var(--og-ink)] outline-none transition focus:border-[var(--og-orange)]";

export function HatQuickLeadForm() {
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const attributionHiddenFields = useLeadAttributionHiddenFields();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setSubmitError("");

    const result = await submitContactForm(event.currentTarget);

    setSubmitting(false);
    if (!result.ok) {
      setSubmitError(result.error);
      return;
    }

    setSubmitted(true);
    event.currentTarget.reset();
  }

  return (
    <section className="rounded-[2rem] border-[3px] border-[#0B32A0] bg-[#FFFDF8] p-6 shadow-[0_22px_60px_rgba(11,50,160,0.08)] md:p-8">
      <div className="rounded-[1.5rem] border border-[#FF4200]/18 bg-white/72 p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--og-orange)]">
          Start a Project
        </p>
        <h3 className="mt-2 text-3xl leading-none text-[var(--og-blue)] md:text-4xl">
          Get your free hat mockups
        </h3>
        <p className="mt-3 text-sm leading-6 text-[var(--og-muted)]">
          Fill in your info and we&apos;ll send hat mockups your way.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="mt-5 grid gap-5">
        <input type="hidden" name="intent" value="custom-hats-quick-start" />
        <input type="hidden" name="product" value="Custom hats" />
        <input type="hidden" name="project" value="Custom hats quick-start inquiry from the hats landing page." />
        <input type="hidden" name="source" value="custom-hats-landing-page" />
        {Object.entries(attributionHiddenFields).map(([name, value]) => (
          <input key={name} type="hidden" name={name} value={value} />
        ))}

        {submitted ? (
          <div className="rounded-[1.5rem] border border-[var(--og-orange)] bg-[var(--og-orange)] p-5 text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.22em]">Message Sent</p>
            <p className="mt-2 text-lg leading-7">
              Thanks. We&apos;ll follow up within 1 business day.
            </p>
          </div>
        ) : null}

        {submitError ? (
          <div className="rounded-[1.5rem] border border-[#C44A2F]/20 bg-[#FFF2EE] p-5 text-[#8B2A17]">
            <p className="text-sm font-semibold uppercase tracking-[0.22em]">Submission issue</p>
            <p className="mt-2 text-base leading-7">{submitError}</p>
          </div>
        ) : null}

        <div className="grid gap-5 md:grid-cols-2">
          <label className={labelClass}>
            <span>Name</span>
            <input name="name" required className={inputClass} />
          </label>
          <label className={labelClass}>
            <span>Company</span>
            <input name="company" required className={inputClass} />
          </label>
        </div>

        <label className={labelClass}>
          <span>Email</span>
          <input name="email" type="email" required className={inputClass} />
        </label>

        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <p className="text-sm leading-6 text-[var(--og-muted)]">
            We&apos;ll send mockup ideas and the next best step.
          </p>
          <button
            type="submit"
            disabled={submitting}
            className="inline-flex min-h-11 items-center justify-center rounded-xl bg-[var(--og-orange)] px-5 text-sm font-semibold uppercase tracking-[0.12em] text-white transition hover:-translate-y-[3px] hover:bg-[#e43b00] disabled:cursor-not-allowed disabled:opacity-70"
          >
            {submitting ? "Sending..." : "Get Free Mockups"}
          </button>
        </div>
      </form>
    </section>
  );
}
