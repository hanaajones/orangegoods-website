"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";

const inputClass =
  "min-h-12 border border-[#0B32A0]/20 bg-white px-4 text-base font-normal normal-case tracking-normal text-[var(--og-ink)] outline-none transition focus:border-[var(--og-orange)]";

const labelClass =
  "grid gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--og-blue)]";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);

    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    setSubmitting(false);
    setSubmitted(true);
    event.currentTarget.reset();
  }

  return (
    <main className="bg-[var(--og-warm-grey)] pb-24 md:pb-0">
      <section className="px-4 py-16 md:px-8 md:py-24 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <h1 className="text-4xl leading-none text-[var(--og-orange)] sm:text-6xl md:text-8xl lg:text-9xl">
            GET IN TOUCH
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--og-muted)] md:text-xl">
            Tell us what you are making. We respond within one business day
          </p>
          <p className="mt-4 text-sm text-[#1C1C1C]/50">
            Not sure what you need?{" "}
            <Link href="/quiz" className="font-semibold text-[#FF4200] hover:underline">
              Take the quiz →
            </Link>
          </p>
        </div>
      </section>

      <Reveal className="px-4 pb-16 md:px-8 md:pb-20 lg:px-12">
        <section className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.78fr_1.22fr]">
          <div className="space-y-8">
            {[
              ["Email", "hello@orangegoods.co", "mailto:hello@orangegoods.co"],
              ["Text", "(213) 376-4663", "sms:+12133764663"],
              ["Instagram", "@orangegoods", "https://www.instagram.com/orangegoods"],
            ].map(([label, value, href]) => (
              <div key={label}>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--og-orange)]">
                  {label}
                </p>
                <a
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="mt-2 block text-2xl font-semibold text-[var(--og-blue)] transition hover:text-[var(--og-orange)]"
                >
                  {value}
                </a>
              </div>
            ))}
            <p className="text-lg leading-8 text-[var(--og-muted)]">
              Based in South Bay, California
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="grid gap-5 border border-[#0B32A0]/20 bg-white/80 p-6 md:p-8"
          >
            {submitted ? (
              <div className="border border-[var(--og-orange)] bg-[var(--og-orange)] p-5 text-white">
                <p className="text-sm font-semibold uppercase tracking-[0.22em]">
                  Message Sent
                </p>
                <p className="mt-2 text-lg leading-7">
                  Thanks. We will be in touch within 1 business day
                </p>
              </div>
            ) : null}

            <div className="grid gap-5 md:grid-cols-2">
              <label className={labelClass}>
                Name
                <input name="name" required className={inputClass} />
              </label>
              <label className={labelClass}>
                Company
                <input name="company" className={inputClass} />
              </label>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <label className={labelClass}>
                Email
                <input name="email" type="email" required className={inputClass} />
              </label>
              <label className={labelClass}>
                Phone
                <input name="phone" type="tel" className={inputClass} />
              </label>
            </div>

            <label className={labelClass}>
              What are you making?
              <textarea
                name="project"
                rows={6}
                required
                className="border border-[#0B32A0]/20 bg-white px-4 py-3 text-base font-normal normal-case tracking-normal text-[var(--og-ink)] outline-none transition focus:border-[var(--og-orange)]"
              />
            </label>

            <div className="grid gap-5 md:grid-cols-3">
              <label className={labelClass}>
                Quantity
                <select name="quantity" required defaultValue="" className={inputClass}>
                  <option value="" disabled>Select</option>
                  {["100-250", "250-500", "500-1,000", "1,000+"].map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </label>
              <label className={labelClass}>
                Timeline
                <select name="timeline" required defaultValue="" className={inputClass}>
                  <option value="" disabled>Select</option>
                  {["ASAP", "2-4 weeks", "1-2 months", "2+ months", "Not sure"].map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </label>
              <label className={labelClass}>
                Budget Range
                <select name="budget" defaultValue="" className={inputClass}>
                  <option value="" disabled>Select</option>
                  {["<$2,500", "$2,500-$5,000", "$5,000-$10,000", "$10,000+", "Not sure"].map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </label>
            </div>

            {/* File upload */}
            <div className="space-y-2">
              <label className="block">
                <span className="text-sm font-medium text-[#1C1C1C]">Upload artwork or files <span className="font-normal text-[#1C1C1C]/50">(optional)</span></span>
                <input
                  type="file"
                  name="artwork"
                  multiple
                  accept=".ai,.eps,.pdf,.svg,.png,.jpg,.jpeg,.zip"
                  className="mt-2 block w-full cursor-pointer rounded-xl border border-[#0B32A0]/20 bg-[#F3EFE7] px-4 py-3 text-sm text-[#1C1C1C] file:mr-4 file:rounded-lg file:border-0 file:bg-[#0B32A0] file:px-4 file:py-2 file:text-xs file:font-bold file:uppercase file:text-white file:transition hover:file:bg-[#081E6F]"
                />
              </label>
              <p className="text-xs text-[#1C1C1C]/45">
                Vector files preferred — AI, EPS, PDF, SVG. PNG/JPG accepted at 300dpi+. Have larger files? Share a Dropbox or WeTransfer link in your message.
              </p>
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="btn-og inline-flex w-full justify-center md:w-fit"
            >
              {submitting ? "Sending" : "Send Message"}
            </button>
          </form>
        </section>
      </Reveal>
    </main>
  );
}
