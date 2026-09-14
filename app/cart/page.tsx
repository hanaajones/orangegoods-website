"use client";

import { FormEvent, Suspense, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ParallaxHeroBackground } from "@/components/ParallaxHeroBackground";
import { useLeadAttributionHiddenFields } from "@/hooks/useLeadAttributionHiddenFields";
import { submitContactForm } from "@/lib/contact/client-submit";
import {
  buildProjectCartSummary,
  buildProjectCartTitles,
  clearProjectCart,
  collectProjectCartArtworkNames,
  projectCartUpdateEvent,
  readProjectCart,
  removeProjectCartItem,
  updateProjectCartItemQuantity,
  updateProjectCartItemSizeBreakdown,
  type ProjectCartItem,
} from "@/lib/project-cart";

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

const selectOptions = {
  designHelp: ["Yes", "No", "I'm not sure"],
  timeline: ["ASAP", "2-4 weeks", "1-2 months", "2+ months", "Not sure"],
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

function formatDecoration(value: string | null) {
  if (!value) return null;

  if (value === "patch") return "Patch";
  if (value === "embroidery") return "Embroidery";

  return value.charAt(0).toUpperCase() + value.slice(1);
}

function formatEmbStyle(value: string | null) {
  if (!value || value === "none") return null;

  return value
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function buildLegacyDetails(searchParams: URLSearchParams) {
  const style = searchParams.get("style");
  const color = searchParams.get("color");
  const qty = searchParams.get("qty");
  const decoration = formatDecoration(searchParams.get("decoration"));
  const embStyle = formatEmbStyle(searchParams.get("embStyle"));
  const back = searchParams.get("back") === "true";
  const side = searchParams.get("side") === "true";

  const details = [
    { label: "Style", value: style },
    { label: "Color", value: color },
    { label: "Quantity", value: qty ? `${Number(qty).toLocaleString()} units` : null },
    { label: "Front decoration", value: decoration },
    { label: "Embroidery style", value: embStyle },
    { label: "Back embroidery", value: back ? "Yes" : null },
    { label: "Side embroidery", value: side ? "Yes" : null },
  ].filter((item) => item.value);

  return {
    details,
    hasItem: details.length > 0,
    title: style ?? "Custom product",
  };
}

function splitProjectCartLabel(item: Pick<ProjectCartItem, "quantity" | "title">) {
  const quantity = item.quantity?.trim();

  return {
    quantityLabel: quantity ? `x${Number(quantity).toLocaleString()}` : null,
    title: item.title,
  };
}

function renderEditableQuantity(item: ProjectCartItem) {
  if (item.kind === "apparel" && item.sizeBreakdown) {
    return (
      <div className="grid gap-2">
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#0B32A0]/54">
          Total quantity
        </p>
        <div className="min-h-11 rounded-2xl border border-[#0B32A0]/12 bg-white px-4 py-3 text-base font-normal text-[#1C1C1C]/72">
          {item.quantity || "0"}
        </div>
      </div>
    );
  }

  return (
    <label className="grid gap-2">
      <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#0B32A0]/54">
        Quantity
      </span>
      <input
        type="text"
        inputMode="numeric"
        value={item.quantity ?? ""}
        onChange={(event) => updateProjectCartItemQuantity(item.id, event.target.value)}
        className="min-h-11 rounded-2xl border border-[#0B32A0]/16 bg-white px-4 py-3 text-base font-normal text-[#1C1C1C]/72 outline-none transition focus:border-[#FF4200]"
      />
    </label>
  );
}

function renderEditableSizes(item: ProjectCartItem) {
  if (item.kind !== "apparel" || !item.sizeBreakdown) return null;

  return (
    <div className="grid gap-3">
      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#0B32A0]/54">
        Sizes
      </p>
      <div className="grid gap-3 sm:grid-cols-3">
        {Object.entries(item.sizeBreakdown).map(([size, quantity]) => (
          <label key={`${item.id}-${size}`} className="grid gap-2">
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#1C1C1C]/62">
              {size}
            </span>
            <input
              type="text"
              inputMode="numeric"
              value={String(quantity)}
              onChange={(event) => {
                const nextValue = event.target.value.replace(/[^\d]/g, "");
                updateProjectCartItemSizeBreakdown(item.id, {
                  ...item.sizeBreakdown,
                  [size]: Number(nextValue || 0),
                });
              }}
              className="min-h-11 rounded-2xl border border-[#0B32A0]/16 bg-white px-4 py-3 text-base font-normal text-[#1C1C1C]/72 outline-none transition focus:border-[#FF4200]"
            />
          </label>
        ))}
      </div>
    </div>
  );
}

function ProjectInquiryForm({
  attributionHiddenFields,
  items,
  onSubmit,
  submitError,
  submitting,
}: {
  attributionHiddenFields: Record<string, string>;
  items: ProjectCartItem[];
  onSubmit: (event: FormEvent<HTMLFormElement>) => Promise<void>;
  submitError?: string;
  submitting: boolean;
}) {
  const summary = buildProjectCartSummary(items);
  const itemTitles = buildProjectCartTitles(items);
  const artworkNames = collectProjectCartArtworkNames(items);
  const needsArtworkHelp = items.some((item) => item.needsArtworkHelp);
  const selectClass = `${inputClass} appearance-none bg-[length:14px_14px] bg-[right_1.25rem_center] bg-no-repeat pr-14`;

  return (
    <form
      onSubmit={onSubmit}
      className="grid gap-6 rounded-[2rem] border-[3px] border-[#0B32A0] bg-[#FFFDF8] p-7 shadow-[0_22px_60px_rgba(11,50,160,0.08)] md:p-9"
    >
      {Object.entries(attributionHiddenFields).map(([name, value]) => (
        <input key={name} type="hidden" name={name} value={value} />
      ))}
      <input type="hidden" name="intent" value="contact" />
      <input type="hidden" name="pageName" value="Project Cart" />
      <input type="hidden" name="pagePath" value="/cart" />
      <input type="hidden" name="source" value="project-cart" />
      <input type="hidden" name="product" value={items.length > 1 ? "Multi-product project" : (items[0]?.product ?? "Project cart")} />
      <input type="hidden" name="projectCartItemCount" value={String(items.length)} />
      <input type="hidden" name="projectCartItems" value={itemTitles} />
      <input type="hidden" name="projectCartSummary" value={summary} />
      <input type="hidden" name="project" value={summary} />
      <input type="hidden" name="quantity" value={items.map((item) => item.quantity).filter(Boolean).join(", ")} />
      {artworkNames.length ? (
        <input type="hidden" name="projectCartArtwork" value={artworkNames.join(", ")} />
      ) : null}
      {needsArtworkHelp ? <input type="hidden" name="needsArtworkHelp" value="Yes" /> : null}

      {submitError ? (
        <div className="rounded-[1.5rem] border border-[#C44A2F]/20 bg-[#FFF2EE] p-5 text-[#8B2A17]">
          <p className="text-sm font-semibold uppercase tracking-[0.22em]">Submission issue</p>
          <p className="mt-2 text-base leading-7">{submitError}</p>
        </div>
      ) : null}

      <div className="rounded-[1.5rem] border border-[#FF4200]/18 bg-white/70 p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--og-orange)]">
          Review
        </p>
        <h2 className="mt-2 text-3xl leading-none text-[var(--og-blue)] md:text-4xl">
          Submit for review
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <label className={labelClass}>
          <RequiredLabel label="Name" required />
          <input name="name" required className={inputClass} />
        </label>
        <label className={labelClass}>
          <RequiredLabel label="Company" required />
          <input name="company" required className={inputClass} />
        </label>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <label className={labelClass}>
          <RequiredLabel label="Email" required />
          <input name="email" type="email" required className={inputClass} />
        </label>
        <label className={labelClass}>
          <RequiredLabel label="Phone" />
          <input name="phone" type="tel" className={inputClass} />
        </label>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
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
          <RequiredLabel label="Need design help?" required />
          <select
            name="designHelp"
            required
            defaultValue={needsArtworkHelp ? "Yes" : ""}
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

      <label className={labelClass}>
        <RequiredLabel label="Anything else we should know?" />
        <textarea
          name="notes"
          rows={4}
          placeholder="Share timeline details, shipping context, artwork links, or anything else that will help us quote this project."
          className={textareaClass}
        />
      </label>

      <div className="space-y-3 rounded-[1.5rem] border border-[#0B32A0]/10 bg-white/70 p-5">
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
          Vector files preferred - AI, EPS, PDF, SVG. Have larger files? Share a Dropbox or
          WeTransfer link in your notes.
        </p>
      </div>

      <div className="flex flex-col gap-3 pt-1 sm:flex-row">
        <button
          type="submit"
          disabled={submitting}
          className="btn-og inline-flex min-h-12 items-center justify-center rounded-full px-6 text-sm"
        >
          {submitting ? "Sending..." : "Submit for review"}
        </button>
        <Link
          href="/goods/all"
          className="inline-flex min-h-12 items-center justify-center rounded-full border-2 border-[#0B32A0] bg-white px-6 text-sm font-semibold uppercase tracking-[0.08em] text-[#0B32A0] transition hover:-translate-y-[3px] hover:bg-[#F7F4ED]"
        >
          Add another project
        </Link>
      </div>

      <p className="text-xs uppercase tracking-[0.18em] text-[#1C1C1C]/48">
        <span className="text-[var(--og-orange)]">*</span> Required fields
      </p>
    </form>
  );
}

function ProjectCartPageContent() {
  const searchParams = useSearchParams();
  const [items, setItems] = useState<ProjectCartItem[]>([]);
  const attributionHiddenFields = useLeadAttributionHiddenFields();
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const legacy = useMemo(() => buildLegacyDetails(searchParams), [searchParams]);

  useEffect(() => {
    function syncProjectCart() {
      setItems(readProjectCart());
    }

    syncProjectCart();
    window.addEventListener(projectCartUpdateEvent(), syncProjectCart);
    return () => window.removeEventListener(projectCartUpdateEvent(), syncProjectCart);
  }, []);

  const projectSummary = buildProjectCartSummary(items);
  const hasSavedProject = items.length > 0;

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

    clearProjectCart();
    window.location.assign("/thank-you?source=project-cart&intent=contact&product=Multi-product+project");
  }

  return (
    <main className="min-h-screen bg-[#F7F4ED] pb-20 text-[#1C1C1C]">
      <section className="relative overflow-hidden bg-[#1C1C1C] px-4 py-16 text-white md:px-8 md:py-24 lg:px-12">
        <ParallaxHeroBackground
          image="/images/gallery/goods-hero-misc-dscf4876.jpg"
          position="center 48%"
        />
        <div className="absolute inset-0 bg-[#1C1C1C]/32" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1C1C1C]/58 via-[#1C1C1C]/42 to-[#1C1C1C]/14" />
        <div className="relative mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white/75">
            Project Cart
          </p>
          <h1
            className="mt-5 max-w-3xl text-5xl uppercase leading-none text-[var(--og-orange)] md:text-6xl lg:text-7xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Your project
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-white/82 md:text-xl">
            Review your saved products and submit in one step.
          </p>
        </div>
      </section>

      <section className="px-4 py-10 md:px-8 md:py-12 lg:px-12">
        <div className="mx-auto max-w-6xl">
          {hasSavedProject ? (
            <div className="grid gap-10">
              <section className="grid gap-5">
                {items.map((item, index) => {
                  const label = splitProjectCartLabel(item);

                  return (
                  <details
                    key={item.id}
                    className="group overflow-hidden rounded-[1.8rem] border border-[#0B32A0]/12 bg-white shadow-[0_16px_40px_rgba(8,30,111,0.06)]"
                  >
                    <summary className="flex cursor-pointer list-none flex-wrap items-center justify-between gap-4 px-6 py-6 marker:content-none md:px-8">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#FF4200]">
                          Project {index + 1}
                        </p>
                        <div className="mt-1.5 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                          <h2
                            className="text-[1.55rem] uppercase leading-[0.96] text-[#0B32A0] md:text-[2.1rem]"
                            style={{ fontFamily: "var(--font-display)" }}
                          >
                            {label.title}
                          </h2>
                          {label.quantityLabel ? (
                            <p
                              className="text-[1.25rem] lowercase leading-[0.96] text-[#1C1C1C] md:text-[1.7rem]"
                              style={{ fontFamily: "var(--font-accent)", fontWeight: 400, textTransform: "lowercase" }}
                            >
                              {label.quantityLabel}
                            </p>
                          ) : null}
                        </div>
                        <p className="mt-1.5 text-sm leading-5 text-[#1C1C1C]/62">
                          {item.program ?? "Custom project"}
                        </p>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="rounded-full border border-[#0B32A0]/12 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#0B32A0] transition group-open:border-[#FF4200] group-open:text-[#FF4200]">
                          <span className="group-open:hidden">View details</span>
                          <span className="hidden group-open:inline">Hide details</span>
                        </span>
                      </div>
                    </summary>

                    <div className="border-t border-[#0B32A0]/10 bg-[#FFFDF8] px-6 py-7 md:px-8">
                      <div className="grid gap-5 md:grid-cols-2">
                        {renderEditableQuantity(item)}
                      </div>

                      {renderEditableSizes(item) ? (
                        <div className="mt-5 rounded-[1.25rem] border border-[#0B32A0]/10 bg-[#F7F4ED] p-5">
                          {renderEditableSizes(item)}
                        </div>
                      ) : null}

                      <div className="mt-5 rounded-[1.25rem] border border-[#0B32A0]/10 bg-[#F7F4ED] p-5">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#0B32A0]/54">
                          Saved configuration
                        </p>
                        <ul className="mt-3 grid gap-2.5">
                          {item.summaryLines.map((line) => (
                            <li key={`${item.id}-${line}`} className="text-sm leading-6 text-[#1C1C1C]">
                              {line}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-6 flex flex-wrap gap-3">
                        {item.editHref ? (
                          <Link
                            href={item.editHref}
                            className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#0B32A0] px-5 text-sm font-semibold uppercase tracking-[0.08em] text-white transition hover:-translate-y-[3px] hover:bg-[#081E6F]"
                          >
                            Edit project details
                          </Link>
                        ) : null}
                        <button
                          type="button"
                          onClick={() => removeProjectCartItem(item.id)}
                          className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#0B32A0]/12 bg-white px-5 text-sm font-semibold uppercase tracking-[0.08em] text-[#0B32A0]/74 transition hover:border-[#FF4200] hover:text-[#FF4200]"
                        >
                          Remove item
                        </button>
                      </div>
                    </div>
                  </details>
                  );
                })}
              </section>

              <section className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
                <aside className="rounded-[1.8rem] border border-[#0B32A0]/12 bg-white p-7 shadow-[0_16px_40px_rgba(8,30,111,0.06)] md:p-9">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#FF4200]">
                    Summary
                  </p>
                  <h2
                    className="mt-2 text-[2.2rem] uppercase leading-[0.92] text-[#0B32A0]"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    One submission
                  </h2>
                  <p className="mt-3 text-base leading-6 text-[#1C1C1C]/68">
                    Add more or send it through below.
                  </p>

                  <div className="mt-5 rounded-[1.25rem] border border-[#0B32A0]/10 bg-[#F7F4ED] p-5">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#0B32A0]/54">
                      Included
                    </p>
                    <p className="mt-2 text-sm leading-6 text-[#1C1C1C]">
                      {items.length} customized product{items.length === 1 ? "" : "s"} saved.
                    </p>
                    <p className="mt-2 text-xs leading-5 text-[#1C1C1C]/58">
                      Upload the actual artwork files with the inquiry so everything lands in one
                      submission.
                    </p>
                  </div>

                  <div className="mt-7 grid gap-3">
                    <Link
                      href="/goods/all"
                      className="inline-flex min-h-12 items-center justify-center rounded-full border-2 border-[#0B32A0] bg-white px-5 text-sm font-semibold uppercase tracking-[0.08em] text-[#0B32A0] transition hover:-translate-y-[3px] hover:bg-[#F7F4ED]"
                    >
                      Add another project
                    </Link>
                    <button
                      type="button"
                      onClick={() => clearProjectCart()}
                      className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#0B32A0]/12 bg-[#F7F4ED] px-5 text-sm font-semibold uppercase tracking-[0.08em] text-[#0B32A0]/70 transition hover:border-[#C44A2F] hover:bg-white hover:text-[#C44A2F]"
                    >
                      Clear project
                    </button>
                  </div>

                  <pre className="mt-5 overflow-hidden rounded-[1.2rem] border border-[#0B32A0]/8 bg-[#FFFDF8] p-5 whitespace-pre-wrap text-xs leading-6 text-[#1C1C1C]/54">
                    {projectSummary}
                  </pre>
                </aside>

                <ProjectInquiryForm
                  attributionHiddenFields={attributionHiddenFields}
                  items={items}
                  onSubmit={handleSubmit}
                  submitError={submitError}
                  submitting={submitting}
                />
              </section>
            </div>
          ) : legacy.hasItem ? (
            <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
              <article className="rounded-[1.8rem] border border-[#0B32A0]/12 bg-white p-7 shadow-[0_16px_40px_rgba(8,30,111,0.06)] md:p-9">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#FF4200]">
                  Configured item
                </p>
                <h2
                  className="mt-3 text-[2.5rem] uppercase leading-[0.92] text-[#0B32A0] md:text-[3.4rem]"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {legacy.title}
                </h2>

                <div className="mt-7 grid gap-4 sm:grid-cols-2">
                  {legacy.details.map((detail) => (
                    <div
                      key={detail.label}
                      className="rounded-[1.2rem] border border-[#0B32A0]/10 bg-[#F7F4ED] p-4"
                    >
                      <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-[#0B32A0]/58">
                        {detail.label}
                      </p>
                      <p className="mt-2 text-base font-semibold text-[#1C1C1C]">{detail.value}</p>
                    </div>
                  ))}
                </div>
              </article>

              <aside className="rounded-[1.8rem] border border-[#0B32A0]/12 bg-white p-7 shadow-[0_16px_40px_rgba(8,30,111,0.06)] md:p-9">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#FF4200]">
                  Next step
                </p>
                <h2
                  className="mt-3 text-[2.2rem] uppercase leading-[0.92] text-[#0B32A0]"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Let&apos;s finish the project
                </h2>
                <p className="mt-4 text-base leading-7 text-[#1C1C1C]/68">
                  This older single-item cart link still works, but new customizer saves now roll
                  into the multi-product project flow above.
                </p>

                <div className="mt-7 grid gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#FF4200] px-5 text-sm font-semibold uppercase tracking-[0.08em] text-white transition hover:bg-[#d73b05]"
                  >
                    Send to our team
                  </Link>
                  <Link
                    href="/goods/all"
                    className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#0B32A0]/16 px-5 text-sm font-semibold uppercase tracking-[0.08em] text-[#0B32A0] transition hover:border-[#0B32A0] hover:bg-[#F7F4ED]"
                  >
                    Keep browsing
                  </Link>
                </div>
              </aside>
            </div>
          ) : (
            <div className="rounded-[1.9rem] border border-[#0B32A0]/12 bg-white p-9 text-center shadow-[0_16px_40px_rgba(8,30,111,0.06)] md:p-14">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#FF4200]">
                Nothing here yet
              </p>
              <h2
                className="mt-4 text-[2.6rem] uppercase leading-[0.92] text-[#0B32A0] md:text-[4rem]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Your project is empty
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#1C1C1C]/68 md:text-lg">
                Add a product from one of the customization pages and it will land here so you can
                bundle multiple items into one inquiry.
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  href="/goods/all"
                  className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#FF4200] px-5 text-sm font-semibold uppercase tracking-[0.08em] text-white transition hover:bg-[#d73b05]"
                >
                  Browse goods
                </Link>
                <Link
                  href="/create"
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#0B32A0]/16 px-5 text-sm font-semibold uppercase tracking-[0.08em] text-[#0B32A0] transition hover:border-[#0B32A0] hover:bg-[#F7F4ED]"
                >
                  Build a product
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

export default function CartPage() {
  return (
    <Suspense>
      <ProjectCartPageContent />
    </Suspense>
  );
}
