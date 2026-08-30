"use client";

import { FormEvent, Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ParallaxHeroBackground } from "@/components/ParallaxHeroBackground";
import { Reveal } from "@/components/Reveal";

const inputClass =
  "min-h-12 border border-[#0B32A0]/20 bg-white px-4 text-base font-normal normal-case tracking-normal text-[var(--og-ink)] outline-none transition focus:border-[var(--og-orange)]";

const labelClass =
  "grid gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--og-blue)]";

const roundedInputClass =
  "min-h-11 rounded-2xl border border-[#0B32A0]/16 bg-white px-3.5 text-sm font-normal normal-case tracking-normal text-[var(--og-ink)] outline-none transition focus:border-[var(--og-orange)]";

const roundedTextareaClass =
  "rounded-2xl border border-[#0B32A0]/16 bg-white px-3.5 py-2.5 text-sm font-normal normal-case tracking-normal text-[var(--og-ink)] placeholder:text-[#1C1C1C]/42 outline-none transition focus:border-[var(--og-orange)]";

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

const contactTestimonials = [
  {
    company: "Red Bull",
    quote: "They turned a loose idea into gear our team was excited to wear.",
    person: "Joe K.",
    role: "Field Marketing Manager, Red Bull",
    src: "/images/testimonials/red-bull-girl-widescreen.jpg",
    alt: "Red Bull branded jacket by Orange Goods",
  },
  {
    company: "High Street Deli",
    quote: "The OG team just gets it.",
    person: "Doobie C.",
    role: "Founder, High Street Deli",
    src: "/images/testimonials/high-street-deli-rotated-fullwidth.jpg",
    alt: "High Street Deli branded merch spread by Orange Goods",
  },
  {
    company: "Stanford Medicine",
    quote: "Our go-to for curated event giveaways and team swag.",
    person: "Robin D.",
    role: "Director, Strategic Initiatives, Stanford Medicine",
    src: "/images/gallery/accessories-stanford-medicine-laptop-sleeve.jpg",
    alt: "Stanford Medicine branded laptop sleeves by Orange Goods",
  },
];

const contactFaqs = [
  [
    "What's the minimum order?",
    "Most custom programs start at 100 pieces.",
  ],
  [
    "How does the process work?",
    "You send the basics, we guide the next steps, and then we build the right path from there.",
  ],
  [
    "Can you help us choose the right product?",
    "Yes. If you're not sure what makes the most sense yet, we can help narrow it down.",
  ],
];

const builderFieldNames = new Set([
  "name",
  "company",
  "email",
  "phone",
  "shippingAddress",
  "needBy",
  "notes",
]);

const contactFieldNames = new Set([
  "name",
  "company",
  "email",
  "phone",
  "project",
  "quantity",
  "timeline",
  "budget",
  "designHelp",
  "artwork",
]);
function ContactForm({
  submitted,
  submitting,
  submitError,
  onSubmit,
  variant = "standard",
  projectDefault = "",
  designHelpDefault = "",
  hiddenFields = {},
  hideQuantityField = false,
  hideBudgetField = false,
}: {
  submitted: boolean;
  submitting: boolean;
  submitError?: string;
  onSubmit: (event: FormEvent<HTMLFormElement>) => Promise<void>;
  variant?: "standard" | "rounded";
  projectDefault?: string;
  designHelpDefault?: string;
  hiddenFields?: Record<string, string>;
  hideQuantityField?: boolean;
  hideBudgetField?: boolean;
}) {
  const isRounded = variant === "rounded";
  const formClass = isRounded
    ? "grid gap-5 rounded-[2rem] border-[3px] border-[#0B32A0] bg-[#FFFDF8] p-6 shadow-[0_22px_60px_rgba(11,50,160,0.08)] md:p-8"
    : "grid gap-5 border border-[#0B32A0]/20 bg-white/80 p-6 md:p-8";
  const variantInputClass = isRounded
    ? roundedInputClass
    : inputClass;
  const selectClass = `${variantInputClass} appearance-none bg-[length:14px_14px] bg-[right_1.25rem_center] bg-no-repeat pr-14`;
  const textareaClass = isRounded
    ? roundedTextareaClass
    : "border border-[#0B32A0]/20 bg-white px-4 py-3 text-base font-normal normal-case tracking-normal text-[var(--og-ink)] placeholder:text-[#1C1C1C]/42 outline-none transition focus:border-[var(--og-orange)]";
  const showQuantityField = !hideQuantityField;
  const showBudgetField = !hideBudgetField;
  const detailsGridClass = showQuantityField && showBudgetField
    ? "grid gap-5 md:grid-cols-3"
    : showQuantityField || showBudgetField
      ? "grid gap-5 md:grid-cols-2"
      : "grid gap-5";

  return (
    <form onSubmit={onSubmit} className={formClass}>
      {Object.entries(hiddenFields).map(([name, value]) => (
        <input key={name} type="hidden" name={name} value={value} />
      ))}

      {submitted ? (
        <div className="border border-[var(--og-orange)] bg-[var(--og-orange)] p-5 text-white">
          <p className="text-sm font-semibold uppercase tracking-[0.22em]">Message Sent</p>
          <p className="mt-2 text-lg leading-7">Thanks. We will be in touch within 1 business day</p>
        </div>
      ) : null}

      {submitError ? (
        <div className="border border-[#C44A2F]/20 bg-[#FFF2EE] p-5 text-[#8B2A17]">
          <p className="text-sm font-semibold uppercase tracking-[0.22em]">Submission issue</p>
          <p className="mt-2 text-base leading-7">{submitError}</p>
        </div>
      ) : null}

      {isRounded ? (
        <div className="rounded-[1.5rem] border border-[#FF4200]/18 bg-white/70 p-5">
          <h2 className="mt-2 text-3xl leading-none text-[var(--og-blue)] md:text-4xl">
            Tell us what you&apos;re making.
          </h2>
          <p className="mt-2 text-xs uppercase tracking-[0.18em] text-[#1C1C1C]/52">
            You&apos;ll hear back in 24 hours or less
          </p>
        </div>
      ) : null}

      <div className="grid gap-5 md:grid-cols-2">
        <label className={labelClass}>
          <RequiredLabel label="Name" required />
          <input name="name" required className={variantInputClass} />
        </label>
        <label className={labelClass}>
          <RequiredLabel label="Company" required />
          <input name="company" required className={variantInputClass} />
        </label>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <label className={labelClass}>
          <RequiredLabel label="Email" required />
          <input name="email" type="email" required className={variantInputClass} />
        </label>
        <label className={labelClass}>
          <RequiredLabel label="Phone" />
          <input name="phone" type="tel" className={variantInputClass} />
        </label>
      </div>

      <label className={labelClass}>
        <RequiredLabel label="What are you making?" required />
        <textarea
          name="project"
          rows={6}
          required
          defaultValue={projectDefault}
          placeholder="Please share as much information as possible about the style, design, and products you're looking for. Feel free to include any references."
          className={textareaClass}
        />
      </label>

      <div className={detailsGridClass}>
        {showQuantityField ? (
          <label className={labelClass}>
            <span className="flex min-h-[2.9rem] flex-col justify-end gap-1">
              <RequiredLabel label="Quantity" required />
              <span className="text-[10px] font-medium uppercase tracking-[0.16em] text-[#1C1C1C]/52">
                Minimum order 100 pieces
              </span>
            </span>
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
        ) : null}
        <label className={labelClass}>
          <span className="flex min-h-[2.9rem] flex-col justify-end gap-1">
            <RequiredLabel label="Timeline" required />
            <span className="text-[10px] font-medium uppercase tracking-[0.16em] text-transparent">
              Minimum order 100 pieces
            </span>
          </span>
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
        {showBudgetField ? (
          <label className={labelClass}>
            <span className="flex min-h-[2.9rem] flex-col justify-end gap-1">
              <RequiredLabel label="Budget Range" />
              <span className="text-[10px] font-medium uppercase tracking-[0.16em] text-transparent">
                Minimum order 100 pieces
              </span>
            </span>
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
        ) : null}
      </div>

      <label className={labelClass}>
        <RequiredLabel label="Need design help?" required />
        <select
          name="designHelp"
          required
          defaultValue={designHelpDefault}
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
            className={`og-file-input mt-2 block w-full cursor-pointer px-4 py-3 text-sm text-[#1C1C1C] file:mr-4 file:border file:border-[#0B32A0]/18 file:bg-[var(--og-warm-grey)] file:px-4 file:py-2 file:text-xs file:font-bold file:uppercase file:text-[#0B32A0] file:transition hover:file:border-[var(--og-orange)] hover:file:text-[var(--og-orange)] ${
              isRounded
                ? "rounded-2xl border border-[#0B32A0]/16 bg-white file:rounded-xl"
                : "rounded-xl border border-[#0B32A0]/20 bg-[#F3EFE7] file:rounded-lg"
            }`}
          />
        </label>
        <p className="text-xs text-[#1C1C1C]/45">
          Vector files preferred — AI, EPS, PDF, SVG. Have larger files? Share a Dropbox or
          WeTransfer link in your message.
        </p>
      </div>

      <button
        type="submit"
        disabled={submitting}
        className={`inline-flex w-full justify-center ${
          isRounded ? "btn-og rounded-full md:min-w-[16rem] md:w-auto" : "btn-og md:min-w-[16rem] md:w-auto"
        }`}
      >
        {submitting ? "Sending…" : "Get Started"}
      </button>

      <p className="text-xs uppercase tracking-[0.18em] text-[#1C1C1C]/48">
        <span className="text-[var(--og-orange)]">*</span> Required fields
      </p>
    </form>
  );
}

function BuilderCheckoutForm({
  submitted,
  submitting,
  submitError,
  onSubmit,
  hiddenFields = {},
  summaryLines,
}: {
  submitted: boolean;
  submitting: boolean;
  submitError?: string;
  onSubmit: (event: FormEvent<HTMLFormElement>) => Promise<void>;
  hiddenFields?: Record<string, string>;
  summaryLines: string[];
}) {
  const builderInputClass = roundedInputClass;
  const builderTextareaClass = roundedTextareaClass;

  return (
    <form
      onSubmit={onSubmit}
      className="grid gap-5 rounded-[2rem] border-[3px] border-[#0B32A0] bg-[#FFFDF8] p-6 shadow-[0_22px_60px_rgba(11,50,160,0.08)] md:p-8"
    >
      {Object.entries(hiddenFields).map(([name, value]) => (
        <input key={name} type="hidden" name={name} value={value} />
      ))}

      {submitted ? (
        <div className="rounded-[1.5rem] border border-[var(--og-orange)] bg-[var(--og-orange)] p-5 text-white">
          <p className="text-sm font-semibold uppercase tracking-[0.22em]">Build Sent</p>
          <p className="mt-2 text-lg leading-7">Thanks. We will review it and follow up within 1 business day.</p>
        </div>
      ) : null}

      {submitError ? (
        <div className="rounded-[1.5rem] border border-[#C44A2F]/20 bg-[#FFF2EE] p-5 text-[#8B2A17]">
          <p className="text-sm font-semibold uppercase tracking-[0.22em]">Submission issue</p>
          <p className="mt-2 text-base leading-7">{submitError}</p>
        </div>
      ) : null}

      <div className="grid gap-5 lg:grid-cols-[0.92fr_1.08fr]">
        <div className="rounded-[1.5rem] border border-[#FF4200]/18 bg-white/80 p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--og-orange)]">
            Build summary
          </p>
          <h2 className="mt-3 text-3xl leading-none text-[var(--og-blue)] md:text-4xl">
            Contact details
          </h2>

          <div className="mt-5 rounded-[1.25rem] border border-[#0B32A0]/10 bg-[var(--og-warm-grey)] p-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#1C1C1C]/46">
              Included with this submission
            </p>
            <ul className="mt-3 grid gap-2">
              {summaryLines.map((line) => {
                const separatorIndex = line.indexOf(":");

                if (separatorIndex === -1) {
                  return (
                    <li key={line} className="text-sm leading-6 text-[#1C1C1C]">
                      {line}
                    </li>
                  );
                }

                const label = line.slice(0, separatorIndex).trim();
                const value = line.slice(separatorIndex + 1).trim();

                return (
                  <li key={line} className="text-sm leading-6 text-[#1C1C1C]">
                    <span className="font-semibold">{label}:</span>{" "}
                    <span>{value}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="grid gap-5">
          <div className="grid gap-5 md:grid-cols-2">
            <label className={labelClass}>
              <RequiredLabel label="Full name" required />
              <input name="name" required className={builderInputClass} />
            </label>
            <label className={labelClass}>
              <RequiredLabel label="Company name" required />
              <input name="company" required className={builderInputClass} />
            </label>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <label className={labelClass}>
              <RequiredLabel label="Email" required />
              <input name="email" type="email" required className={builderInputClass} />
            </label>
            <label className={labelClass}>
              <RequiredLabel label="Phone" required />
              <input name="phone" type="tel" required className={builderInputClass} />
            </label>
          </div>

          <label className={labelClass}>
            <RequiredLabel label="Shipping address" required />
            <textarea
              name="shippingAddress"
              rows={2}
              required
              placeholder="Street address, city, state, ZIP, country"
              className={builderTextareaClass}
            />
          </label>

          <div className="grid gap-5">
            <label className={labelClass}>
              <RequiredLabel label="Anything else we should know?" />
              <textarea
                name="notes"
                rows={2}
                placeholder="Special delivery notes, timeline context, logo details, links to references, or anything else helpful."
                className={builderTextareaClass}
              />
            </label>
            <div className="grid gap-2">
              <label htmlFor="builder-need-by" className={labelClass}>
                <RequiredLabel label="Requested in-hand date" />
                <input
                  id="builder-need-by"
                  name="needBy"
                  type="date"
                  className={builderInputClass}
                />
              </label>
              <span className="pl-1 text-[11px] leading-5 text-[#1C1C1C]/52">
                Final timing confirmed after review.
              </span>
            </div>
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="btn-og w-fit self-start rounded-full px-6 py-3 text-sm"
          >
            {submitting ? "Sending…" : "Submit build"}
          </button>

          <p className="text-xs uppercase tracking-[0.18em] text-[#1C1C1C]/48">
            <span className="text-[var(--og-orange)]">*</span> Required fields
          </p>
        </div>
      </div>
    </form>
  );
}

function ContactPageContent() {
  const submitted = false;
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const searchParams = useSearchParams();

  const product = searchParams.get("product") ?? "";
  const program = searchParams.get("program") ?? "";
  const style = searchParams.get("style") ?? "";
  const styleName = searchParams.get("styleName") ?? "";
  const quantity = searchParams.get("quantity") ?? searchParams.get("qty") ?? "";
  const projectSummary = searchParams.get("projectSummary") ?? "";
  const needsArtworkHelp = searchParams.get("needsArtworkHelp") ?? "";
  const source = searchParams.get("source") ?? "";
  const mode = searchParams.get("mode") ?? "";
  const isOgCraftedHatBuilder = source === "og-crafted-hat-builder";
  const isOgCraftedApparelBuilder = source === "og-crafted-apparel-builder";
  const isBuilderCheckout = isOgCraftedHatBuilder || isOgCraftedApparelBuilder;
  const isQuickTurnBuilderHandoff = source === "quick-turn-hat-builder";
  const builderSummaryLines = projectSummary.split("\n").map((line) => line.trim()).filter(Boolean);
  const builderHiddenFields = Object.fromEntries(
    Array.from(searchParams.entries()).filter(([key]) => !builderFieldNames.has(key)),
  );
  const builderBackHref = isOgCraftedApparelBuilder
    ? "/build/og-crafted-apparel"
    : `/draft/product-style?${new URLSearchParams(builderHiddenFields).toString()}`;
  const builderBackLabel = isOgCraftedApparelBuilder ? "Back to Apparel Builder" : "Back to Hat Builder";
  const quickTurnBuilderHiddenFields = Object.fromEntries(
    Array.from(searchParams.entries()).filter(([key]) => !contactFieldNames.has(key)),
  );
  const standardHiddenFields = {
    ...(isQuickTurnBuilderHandoff ? quickTurnBuilderHiddenFields : {}),
    intent: "contact",
    pageName: "Contact Page",
    pagePath: "/contact",
    source: source || "contact-page",
    ...(mode ? { mode } : {}),
    ...(needsArtworkHelp ? { needsArtworkHelp } : {}),
    ...(product ? { product } : {}),
    ...(program ? { program } : {}),
    ...(style ? { style } : {}),
    ...(styleName ? { styleName } : {}),
    ...(quantity ? { quantity } : {}),
  };

  const projectDefault = projectSummary || [
    product ? `Product: ${product}` : "",
    (program || mode) ? `Program: ${program || mode}` : "",
    style ? `Style: ${style}${styleName ? ` - ${styleName}` : ""}` : "",
    quantity ? `Quantity: ${quantity}` : "",
    "",
  ]
    .filter(Boolean)
    .join("\n");

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((current) => (current + 1) % contactTestimonials.length);
    }, 4200);

    return () => clearInterval(timer);
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setSubmitError("");

    const formData = new FormData(event.currentTarget);

    const response = await fetch("/api/contact", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      const result = await response.json().catch(() => null) as { error?: string } | null;
      setSubmitting(false);
      setSubmitError(result?.error ?? "Something went wrong. Please try again.");
      return;
    }

    setSubmitting(false);
    const thankYouParams = new URLSearchParams({
      source: source || "contact",
      intent: isBuilderCheckout ? "submit-build" : "contact",
      ...(product ? { product } : {}),
      ...(program ? { program } : {}),
      ...(mode ? { mode } : {}),
      ...(style ? { style } : {}),
      ...(quantity ? { quantity } : {}),
    });

    window.location.assign(`/thank-you?${thankYouParams.toString()}`);
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
            {isBuilderCheckout ? "Final step" : "Start a project"}
          </p>
          <h1 className="mt-5 text-5xl uppercase leading-none text-[var(--og-orange)] md:text-6xl lg:text-7xl">
            {isBuilderCheckout ? (
              <>
                Submit
                <br />
                Your Build
              </>
            ) : (
              <>
                Get in
                <br />
                Touch
              </>
            )}
          </h1>
          {isBuilderCheckout ? (
            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/78 md:text-base">
              This is the checkout-style handoff for your build. We already have the selections. Add the final delivery and contact details here.
            </p>
          ) : null}
        </div>
      </section>

      <Reveal className="px-4 pb-16 md:px-8 md:pb-20 lg:px-12">
      <section
          id="contact-form"
          className="mx-auto grid max-w-5xl gap-8 pt-12 md:pt-14 lg:pt-16"
        >
          {isBuilderCheckout ? (
            <>
              <Link
                href={builderBackHref}
                className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--og-blue)] transition hover:text-[var(--og-orange)]"
              >
                <span aria-hidden="true">←</span>
                <span>{builderBackLabel}</span>
              </Link>
              <BuilderCheckoutForm
                submitted={submitted}
                submitting={submitting}
                submitError={submitError}
                onSubmit={handleSubmit}
                summaryLines={builderSummaryLines}
                hiddenFields={builderHiddenFields}
              />
            </>
          ) : (
            <ContactForm
              submitted={submitted}
              submitting={submitting}
              submitError={submitError}
              onSubmit={handleSubmit}
              variant="rounded"
              projectDefault={projectDefault}
              designHelpDefault={needsArtworkHelp}
              hiddenFields={standardHiddenFields}
              hideQuantityField={isQuickTurnBuilderHandoff}
              hideBudgetField={isQuickTurnBuilderHandoff}
            />
          )}
        </section>
      </Reveal>

      <Reveal className="pb-16 md:pb-20">
        <section className="relative isolate overflow-hidden px-4 py-16 md:px-8 md:py-20">
          <Image
            src="/images/gallery/contact-socks-mg-2443.jpg"
            alt=""
            aria-hidden="true"
            fill
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: "center 44%" }}
          />
          <div className="absolute inset-0 bg-[#1C1C1C]/28" aria-hidden="true" />
          <div className="relative z-10 mx-auto max-w-6xl rounded-[2rem] border-[3px] border-[#081E6F] bg-white/90 px-6 py-8 text-[#1C1C1C] md:px-10 md:py-9">
            <div className="grid gap-5 md:grid-cols-[1.15fr_0.85fr_1fr] md:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--og-orange)]">
                  Email
                </p>
                <a
                  href="mailto:hello@orangegoods.co"
                  className="mt-2 block text-lg font-semibold text-[var(--og-blue)] transition hover:text-[var(--og-orange)] md:text-xl"
                >
                  hello@orangegoods.co
                </a>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--og-orange)]">
                  Phone
                </p>
                <a
                  href="sms:+12133764663"
                  className="font-body mt-2 inline-flex min-h-[42px] items-center justify-center rounded-xl border-2 border-[#0B32A0] bg-white px-5 py-[0.68rem] text-sm font-semibold uppercase tracking-[0.08em] text-[#0B32A0] transition hover:-translate-y-[3px] md:w-fit"
                >
                  Text us
                </a>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--og-orange)]">
                  Instagram
                </p>
                <a
                  href="https://www.instagram.com/orangegoods"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 block text-lg font-semibold text-[var(--og-blue)] transition hover:text-[var(--og-orange)] md:text-xl"
                >
                  @orangegoods
                </a>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal className="px-4 pb-16 md:px-8 md:pb-20 lg:px-12">
        <section className="mx-auto grid max-w-5xl gap-8">
          <div className="flex flex-1 flex-col rounded-[2rem] border border-[#0B32A0]/10 bg-white/92 p-6 md:p-8">
              <div className="grid gap-6 rounded-[1.75rem] border border-[#0B32A0]/12 bg-[linear-gradient(135deg,#0B2A73_0%,#163E8F_52%,#1C4AA3_100%)] p-5 text-white md:grid-cols-[1.08fr_0.92fr] md:items-center md:p-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#FF9A63]">
                    Based in South Bay, California
                  </p>
                  <h2 className="mt-3 text-3xl leading-none text-white md:text-4xl">
                    Hands-on process.
                  </h2>
                  <p className="mt-4 text-base leading-7 text-white/78 md:text-lg">
                    Orange Goods is a Southern California merch studio that likes being close to
                    the build. Smaller-batch thinking, sharper product taste, and real involvement
                    in the process are still a big part of how the team works.
                  </p>
                </div>

                <div className="relative min-h-[14rem] overflow-hidden rounded-[1.5rem] border-[3px] border-white/18 bg-[#D9D0C1] md:min-h-[17rem]">
                  <Image
                    src="/images/gallery/design-hero-ocean-ocean-hoodie.jpg"
                    alt="Orange Goods coastal California product photo"
                    fill
                    sizes="(min-width: 768px) 32vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="mt-6 rounded-[1.5rem] border border-[#0B32A0]/10 bg-[var(--og-warm-grey)] p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--og-orange)]">
                  Why Orange Goods
                </p>
                <h3 className="mt-3 text-2xl leading-none text-[var(--og-blue)] md:text-[2rem]">
                  One team. Less vendor juggling.
                </h3>
                <p className="mt-4 max-w-2xl text-base leading-7 text-[#1C1C1C] md:text-lg">
                  Product guidance, decoration, and clear follow-through all stay in one place.
                </p>
              </div>

          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <Link
              href="/goods"
              className="group rounded-[2rem] border-[3px] border-[#0B32A0] bg-white px-6 py-6 transition hover:-translate-y-[3px]"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--og-orange)]">
                Browse first
              </p>
              <h2 className="mt-3 text-3xl leading-none text-[var(--og-blue)] md:text-[2.15rem]">
                View the goods
              </h2>
              <p className="mt-4 max-w-md text-base leading-7 text-[var(--og-muted)]">
                See the categories, materials, and product directions before you fill anything out.
              </p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-[var(--og-orange)] transition group-hover:text-[var(--og-blue)]">
                Browse goods
                <span aria-hidden="true">+</span>
              </span>
            </Link>

            <Link
              href="/design"
              className="group rounded-[2rem] border-[3px] border-[#FF4200] bg-[#FFF6EE] px-6 py-6 transition hover:-translate-y-[3px]"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--og-blue)]">
                Need creative?
              </p>
              <h2 className="mt-3 text-3xl leading-none text-[var(--og-orange)] md:text-[2.15rem]">
                Need design help?
              </h2>
              <p className="mt-4 max-w-md text-base leading-7 text-[var(--og-muted)]">
                If you need help with graphics, product direction, or mockups, start there first.
              </p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-[var(--og-blue)] transition group-hover:text-[var(--og-orange)]">
                Explore design
                <span aria-hidden="true">+</span>
              </span>
            </Link>
          </div>
        </section>
      </Reveal>

      <Reveal className="px-4 pb-20 md:px-8 md:pb-24 lg:px-12">
        <section className="mx-auto max-w-4xl">
          <div>
            <h2 className="text-4xl uppercase leading-none text-[var(--og-orange)] md:text-5xl">
              FAQ
            </h2>
            <div className="mt-5 grid gap-3">
              {contactFaqs.map(([question, answer]) => (
                <details
                  key={question}
                  className="group rounded-[1.25rem] border border-[#0B32A0]/14 bg-white px-5 py-5 transition open:border-[#FF4200]/45"
                >
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-base font-semibold leading-7 text-[#0B32A0] marker:hidden md:text-[1.05rem]">
                    <span>{question}</span>
                    <span className="mt-0.5 text-2xl leading-none text-[var(--og-orange)] transition group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-4 border-t border-[#0B32A0]/10 pt-4 text-[0.98rem] leading-7 text-[var(--og-muted)]">
                    {answer}
                  </p>
                </details>
              ))}
            </div>
            <div className="mt-5 flex justify-end">
              <Link
                href="/faq"
                className="inline-flex text-sm font-semibold uppercase tracking-[0.14em] text-[var(--og-tangerine)] transition hover:text-[var(--og-orange)]"
              >
                View full FAQ
              </Link>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal className="px-4 pb-20 md:px-8 md:pb-24 lg:px-12">
        <section className="mx-auto max-w-6xl">
          <div className="overflow-hidden rounded-[2rem] border-[3px] border-[#0B32A0] bg-white shadow-[0_18px_40px_rgba(11,50,160,0.06)]">
            <div className="grid gap-0 lg:min-h-[30rem] lg:grid-cols-[0.74fr_1.26fr]">
              <div className="flex flex-col justify-between border-b border-[#0B32A0]/10 bg-[var(--og-warm-grey)] p-7 lg:border-b-0 lg:border-r lg:p-10">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--og-orange)]">
                    Client Feedback
                  </p>
                  <h2 className="mt-3 text-3xl leading-none text-[var(--og-blue)] md:text-4xl">
                    What it&apos;s like to work with us.
                  </h2>
                  <p className="mt-3 max-w-md text-sm leading-6 text-[#1C1C1C]/68 md:text-base">
                    Real notes from clients on the product, the communication, and how the whole
                    process feels from start to finish.
                  </p>
                </div>

                <div className="mt-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#1C1C1C]/48">
                    What our clients say
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {contactTestimonials.map((item, index) => (
                      <button
                        key={item.company}
                        type="button"
                        onClick={() => setActiveTestimonial(index)}
                        className={`rounded-full border px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] transition ${
                          index === activeTestimonial
                            ? "border-[#0B32A0] bg-[#0B32A0] text-white"
                            : "border-[#0B32A0]/12 bg-white text-[#0B32A0] hover:border-[#0B32A0]/28 hover:bg-white/70"
                        }`}
                      >
                        {item.company}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="relative min-h-[20rem] overflow-hidden bg-[#E8E1D2] md:min-h-[24rem] lg:min-h-[30rem]">
                {contactTestimonials.map((item, index) => (
                  <div
                    key={item.company}
                    className="absolute inset-0 transition-opacity duration-700"
                    style={{ opacity: index === activeTestimonial ? 1 : 0 }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-[#1C1C1C]/26" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C]/72 via-[#1C1C1C]/18 to-transparent" />
                  </div>
                ))}

                <div className="absolute inset-0 z-10 flex flex-col justify-end p-7 text-white md:p-9 lg:p-10">
                  <p className="text-xs font-semibold uppercase tracking-[0.26em] text-white/72">
                    {contactTestimonials[activeTestimonial].company}
                  </p>
                  <blockquote className="font-display mt-4 min-h-[7.5rem] max-w-4xl text-[2rem] font-normal uppercase leading-none tracking-normal text-white md:min-h-[9.5rem] md:text-[3rem] lg:min-h-[10.75rem] lg:text-[3.6rem]">
                    &ldquo;{contactTestimonials[activeTestimonial].quote}&rdquo;
                  </blockquote>
                  <div className="mt-5">
                    <p className="font-noir-alt text-sm font-bold uppercase tracking-[0.14em] text-white md:text-base">
                      {contactTestimonials[activeTestimonial].person}
                    </p>
                    <p className="mt-1 text-sm text-white/72 md:text-base">
                      {contactTestimonials[activeTestimonial].role}
                    </p>
                  </div>

                  <div className="mt-6 flex gap-2">
                    {contactTestimonials.map((item, index) => (
                      <button
                        key={`${item.person}-dot`}
                        type="button"
                        onClick={() => setActiveTestimonial(index)}
                        aria-label={`Show testimonial ${index + 1}`}
                        className={`h-2.5 rounded-full transition-all ${
                          index === activeTestimonial
                            ? "w-8 bg-white"
                            : "w-2.5 bg-white/35 hover:bg-white/55"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Reveal>
    </main>
  );
}

export default function ContactPage() {
  return (
    <Suspense>
      <ContactPageContent />
    </Suspense>
  );
}
