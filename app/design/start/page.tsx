"use client";

import { FormEvent, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ParallaxHeroBackground } from "@/components/ParallaxHeroBackground";
import { submitContactForm } from "@/lib/contact/client-submit";
import { Reveal } from "@/components/Reveal";

const labelClass =
  "grid gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--og-blue)]";

const inputClass =
  "min-h-11 rounded-2xl border border-[#0B32A0]/16 bg-white px-3.5 text-sm font-normal normal-case tracking-normal text-[var(--og-ink)] outline-none transition focus:border-[var(--og-orange)]";

const textareaClass =
  "rounded-2xl border border-[#0B32A0]/16 bg-white px-3.5 py-2.5 text-sm font-normal normal-case tracking-normal text-[var(--og-ink)] placeholder:text-[#1C1C1C]/42 outline-none transition focus:border-[var(--og-orange)]";

const selectArrowSvg = encodeURIComponent(`
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path d="M3 5.25L7 9.25L11 5.25" stroke="#0B32A0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`);

const brandSystemOptions = ["Yes", "No", "Kind of / needs work"];
const scopeOptions = ["Merch only", "Merch + broader brand use", "Not sure yet"];
const timelineOptions = ["ASAP", "1-2 weeks", "2-4 weeks", "1-2 months", "Not sure"];
const budgetOptions = ["< $2,500", "$5k", "$10k"];

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

export default function DesignStartPage() {
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

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

    window.location.assign("/thank-you?source=design-form&intent=design&product=design");
  }

  return (
    <main className="bg-[var(--og-warm-grey)] pb-24 md:pb-0">
      <section className="relative overflow-hidden bg-[#1C1C1C] px-4 py-16 text-white md:px-8 md:py-24 lg:px-12">
        <ParallaxHeroBackground
          image="/images/gallery/design-hero-ocean-ocean-hoodie.jpg"
          position="center 38%"
        />
        <div className="absolute inset-0 bg-[#1C1C1C]/34" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1C1C1C]/60 via-[#1C1C1C]/44 to-[#1C1C1C]/18" />
        <div className="relative mx-auto grid max-w-6xl gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white/75">
              Design With Us
            </p>
            <h1 className="mt-5 max-w-4xl text-5xl uppercase leading-none text-[var(--og-orange)] md:text-6xl lg:text-7xl">
              Start your
              <br />
              design project
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/82 md:text-xl">
              A shorter intake for logos, merch graphics, packaging, illustration, and production-ready artwork.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end lg:self-end">
            <Link href="/design" className="btn-og-white inline-flex">
              Back to design
            </Link>
          </div>
        </div>
      </section>

      <Reveal className="px-4 pb-16 md:px-8 md:pb-20 lg:px-12">
        <section id="design-form" className="mx-auto grid max-w-5xl gap-8 pt-12 md:pt-14 lg:pt-16">
          <form
            onSubmit={handleSubmit}
            className="grid gap-5 rounded-[2rem] border-[3px] border-[#0B32A0] bg-[#FFFDF8] p-6 shadow-[0_22px_60px_rgba(11,50,160,0.08)] md:p-8"
          >
            <input type="hidden" name="source" value="design-form" />
            <input type="hidden" name="intent" value="design" />
            <input type="hidden" name="product" value="design" />
            <input type="hidden" name="program" value="design-services" />

            {submitError ? (
              <div className="rounded-[1.5rem] border border-[#C44A2F]/20 bg-[#FFF2EE] p-5 text-[#8B2A17]">
                <p className="text-sm font-semibold uppercase tracking-[0.22em]">Submission issue</p>
                <p className="mt-2 text-base leading-7">{submitError}</p>
              </div>
            ) : null}

            <div className="rounded-[1.5rem] border border-[#FF4200]/18 bg-white/70 p-5">
              <h2 className="mt-2 text-3xl leading-none text-[var(--og-blue)] md:text-4xl">
                Tell us what you need designed.
              </h2>
              <p className="mt-2 text-xs uppercase tracking-[0.18em] text-[#1C1C1C]/52">
                We&apos;ll follow up in 1 business day or less
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <label className={labelClass}>
                <RequiredLabel label="Name" required />
                <input name="name" required className={inputClass} />
              </label>
              <label className={labelClass}>
                <RequiredLabel label="Company" required />
                <input name="company" required className={inputClass} />
              </label>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <label className={labelClass}>
                <RequiredLabel label="Email" required />
                <input name="email" type="email" required className={inputClass} />
              </label>
              <label className={labelClass}>
                <RequiredLabel label="Phone" />
                <input name="phone" type="tel" className={inputClass} />
              </label>
            </div>

            <label className={labelClass}>
              <RequiredLabel label="What are you designing?" required />
              <textarea
                name="project"
                rows={6}
                required
                placeholder="Tell us what you need: merch graphics, a logo refresh, packaging, patches, illustration, or a broader design direction."
                className={textareaClass}
              />
            </label>

            <div className="grid gap-5 md:grid-cols-2">
              <label className={labelClass}>
                <RequiredLabel label="Do you already have a logo or brand system?" required />
                <select
                  name="brandSystem"
                  required
                  defaultValue=""
                  className={`${inputClass} appearance-none bg-[length:14px_14px] bg-[right_1.25rem_center] bg-no-repeat pr-14`}
                  style={{ backgroundImage: `url("data:image/svg+xml,${selectArrowSvg}")` }}
                >
                  <option value="" disabled>Select</option>
                  {brandSystemOptions.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </label>

              <label className={labelClass}>
                <RequiredLabel label="Where will this design live?" required />
                <select
                  name="designScope"
                  required
                  defaultValue=""
                  className={`${inputClass} appearance-none bg-[length:14px_14px] bg-[right_1.25rem_center] bg-no-repeat pr-14`}
                  style={{ backgroundImage: `url("data:image/svg+xml,${selectArrowSvg}")` }}
                >
                  <option value="" disabled>Select</option>
                  {scopeOptions.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </label>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <label className={labelClass}>
                <RequiredLabel label="Timeline" required />
                <select
                  name="timeline"
                  required
                  defaultValue=""
                  className={`${inputClass} appearance-none bg-[length:14px_14px] bg-[right_1.25rem_center] bg-no-repeat pr-14`}
                  style={{ backgroundImage: `url("data:image/svg+xml,${selectArrowSvg}")` }}
                >
                  <option value="" disabled>Select</option>
                  {timelineOptions.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </label>

              <label className={labelClass}>
                <RequiredLabel label="Budget Range" />
                <select
                  name="budget"
                  defaultValue=""
                  className={`${inputClass} appearance-none bg-[length:14px_14px] bg-[right_1.25rem_center] bg-no-repeat pr-14`}
                  style={{ backgroundImage: `url("data:image/svg+xml,${selectArrowSvg}")` }}
                >
                  <option value="" disabled>Select</option>
                  {budgetOptions.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </label>
            </div>

            <label className={labelClass}>
              <RequiredLabel label="What files or references do you already have?" />
              <textarea
                name="referenceFiles"
                rows={3}
                placeholder="Logo files, brand guidelines, sketches, moodboards, old artwork, Pinterest links, Dropbox folders, or anything else useful."
                className={textareaClass}
              />
            </label>

            <div className="space-y-2">
              <label className="block">
                <span className="text-sm font-medium text-[#1C1C1C]">
                  Upload files{" "}
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
                AI, EPS, PDF, SVG, ZIP, PNG, and JPG all work. If files are huge, drop the link in the field above.
              </p>
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="btn-og inline-flex w-full justify-center rounded-full md:min-w-[16rem] md:w-auto"
            >
              {submitting ? "Sending…" : "Start Design Project"}
            </button>

            <p className="text-xs uppercase tracking-[0.18em] text-[#1C1C1C]/48">
              <span className="text-[var(--og-orange)]">*</span> Required fields
            </p>
          </form>
        </section>
      </Reveal>

      <Reveal className="px-4 pb-16 md:px-8 md:pb-20 lg:px-12">
        <section className="mx-auto grid max-w-5xl gap-4 md:grid-cols-2">
          <div className="rounded-[2rem] border-[3px] border-[#0B32A0] bg-white px-6 py-6">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--og-orange)]">
              Best for
            </p>
            <h2 className="mt-3 text-3xl leading-none text-[var(--og-blue)] md:text-[2.15rem]">
              Graphics that need to become real products
            </h2>
            <p className="mt-4 max-w-md text-base leading-7 text-[var(--og-muted)]">
              Merch graphics, packaging, trims, patterns, logo support, and illustration built with production in mind from the start.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] border-[3px] border-[#FF4200] bg-[#FFF6EE] min-h-[18rem]">
            <Image
              src="/images/gallery/design-built-production-dscf1585.jpg"
              alt="Orange Goods design work in production"
              fill
              sizes="(min-width: 768px) 40vw, 100vw"
              className="object-cover"
              style={{ objectPosition: "center 48%" }}
            />
          </div>
        </section>
      </Reveal>
    </main>
  );
}
