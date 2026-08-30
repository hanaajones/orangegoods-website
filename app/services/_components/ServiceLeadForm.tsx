"use client";

import { FormEvent, useEffect, useState } from "react";

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

const selectClass = `${inputClass} appearance-none bg-[length:14px_14px] bg-[right_1rem_center] bg-no-repeat pr-12`;

const attributionFieldNames = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "gclid",
  "fbclid",
] as const;

const selectOptions = {
  designHelp: ["Yes", "No", "I'm not sure"],
  quantity: ["100-250", "250-500", "500-1,000", "1,000-2,000", "2,000-5,000", "5,000+"],
  timeline: ["ASAP", "1-2 weeks", "2-4 weeks", "1-2 months", "Not sure"],
  goodsProductType: [
    "Apparel",
    "Headwear",
    "Drinkware",
    "Bags / Totes",
    "Blankets",
    "Accessories",
    "Mixed merch run",
    "Not sure yet",
  ],
  apparelProductType: [
    "Tees",
    "Hoodies / Fleece",
    "Sweatpants",
    "Polos / Work Shirts",
    "Outerwear",
    "Mixed apparel run",
    "Not sure yet",
  ],
  productType: ["Tees", "Hats", "Hoodies / Fleece", "Sweatpants", "Totes", "Mixed merch run", "Not sure yet"],
  embroideryProductType: [
    "Hats",
    "Beanies",
    "Hoodies / Fleece",
    "Jackets / Outerwear",
    "Totes / Bags",
    "Mixed merch run",
    "Not sure yet",
  ],
  blankDirection: [
    "Premium / retail feel",
    "Heavyweight / boxy",
    "Pigment dyed / washed",
    "Budget-conscious",
    "Recycled / sustainability-led",
    "Need guidance",
  ],
  printLocations: ["Front only", "Front + back", "Front + sleeve", "Multiple placements", "Not sure yet"],
  embroideryLocations: [
    "Front only",
    "Front + side",
    "Front + back",
    "Multiple placements",
    "Need help deciding",
  ],
  decorationMethod: ["Screen printing", "Embroidery", "Mixed decoration", "Not sure yet"],
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

export function ServiceLeadForm({
  title,
  description,
  projectDefault,
  hiddenFields = {},
  captureAttributionFields = false,
  submitLabel = "Start Project",
  projectLabel = "What are you making?",
  projectPlaceholder = "Share the concept, artwork notes, or anything else that will help us quote it right.",
  showPhone = true,
  showTimeline = true,
  showDesignHelp = true,
  showProductTypeField = false,
  productTypeLabel = "Product type",
  productTypeOptions,
  showBlankDirectionField = false,
  blankDirectionLabel = "Blank direction",
  showDecorationMethodField = false,
  decorationMethodLabel = "Decoration method",
  decorationMethodOptions = selectOptions.decorationMethod,
  showScreenPrintFields = false,
  showEmbroideryFields = false,
  showArtworkUpload = false,
}: ServiceLeadFormProps) {
  return (
    <ServiceLeadFormFields
      title={title}
      description={description}
      projectDefault={projectDefault}
      hiddenFields={hiddenFields}
      captureAttributionFields={captureAttributionFields}
      submitLabel={submitLabel}
      projectLabel={projectLabel}
      projectPlaceholder={projectPlaceholder}
      showPhone={showPhone}
      showTimeline={showTimeline}
      showDesignHelp={showDesignHelp}
      showProductTypeField={showProductTypeField}
      productTypeLabel={productTypeLabel}
      productTypeOptions={productTypeOptions}
      showBlankDirectionField={showBlankDirectionField}
      blankDirectionLabel={blankDirectionLabel}
      showDecorationMethodField={showDecorationMethodField}
      decorationMethodLabel={decorationMethodLabel}
      decorationMethodOptions={decorationMethodOptions}
      showScreenPrintFields={showScreenPrintFields}
      showEmbroideryFields={showEmbroideryFields}
      showArtworkUpload={showArtworkUpload}
    />
  );
}

type ServiceLeadFormProps = {
  title: string;
  description: string;
  projectDefault: string;
  hiddenFields?: Record<string, string>;
  captureAttributionFields?: boolean;
  submitLabel?: string;
  projectLabel?: string;
  projectPlaceholder?: string;
  showPhone?: boolean;
  showTimeline?: boolean;
  showDesignHelp?: boolean;
  showProductTypeField?: boolean;
  productTypeLabel?: string;
  productTypeOptions?: readonly string[];
  showBlankDirectionField?: boolean;
  blankDirectionLabel?: string;
  showDecorationMethodField?: boolean;
  decorationMethodLabel?: string;
  decorationMethodOptions?: readonly string[];
  showScreenPrintFields?: boolean;
  showEmbroideryFields?: boolean;
  showArtworkUpload?: boolean;
};

function ServiceLeadFormFields({
  title,
  description,
  projectDefault,
  hiddenFields = {},
  captureAttributionFields = false,
  submitLabel = "Start Project",
  projectLabel = "What are you making?",
  projectPlaceholder = "Share the concept, artwork notes, or anything else that will help us quote it right.",
  showPhone = true,
  showTimeline = true,
  showDesignHelp = true,
  showProductTypeField = false,
  productTypeLabel = "Product type",
  productTypeOptions,
  showBlankDirectionField = false,
  blankDirectionLabel = "Blank direction",
  showDecorationMethodField = false,
  decorationMethodLabel = "Decoration method",
  decorationMethodOptions = selectOptions.decorationMethod,
  showScreenPrintFields = false,
  showEmbroideryFields = false,
  showArtworkUpload = false,
}: ServiceLeadFormProps) {
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [attributionHiddenFields, setAttributionHiddenFields] = useState<Record<string, string>>({});
  const showServiceFields = showScreenPrintFields || showEmbroideryFields;
  const resolvedProductTypeOptions =
    productTypeOptions
    ?? (showEmbroideryFields ? selectOptions.embroideryProductType : selectOptions.productType);
  const placementsLabel = showEmbroideryFields ? "Embroidery placements" : "Print locations";
  const placementsName = showEmbroideryFields ? "embroideryLocations" : "printLocations";
  const placementOptions = showEmbroideryFields
    ? selectOptions.embroideryLocations
    : selectOptions.printLocations;
  const showQualificationFields =
    showServiceFields || showProductTypeField || showBlankDirectionField || showDecorationMethodField;

  useEffect(() => {
    if (!captureAttributionFields) {
      setAttributionHiddenFields({});
      return;
    }

    const searchParams = new URLSearchParams(window.location.search);
    const nextAttributionHiddenFields: Record<string, string> = {};

    for (const fieldName of attributionFieldNames) {
      const value = searchParams.get(fieldName)?.trim();

      if (value) {
        nextAttributionHiddenFields[fieldName] = value;
      }
    }

    setAttributionHiddenFields(nextAttributionHiddenFields);
  }, [captureAttributionFields]);

  const allHiddenFields = {
    ...attributionHiddenFields,
    ...hiddenFields,
  };

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
      const result = (await response.json().catch(() => null)) as { error?: string } | null;
      setSubmitting(false);
      setSubmitError(result?.error ?? "Something went wrong. Please try again.");
      return;
    }

    setSubmitting(false);
    setSubmitted(true);
    event.currentTarget.reset();
  }

  return (
    <section className="rounded-[2rem] border-[3px] border-[#0B32A0] bg-[#FFFDF8] p-6 shadow-[0_22px_60px_rgba(11,50,160,0.08)] md:p-8">
      <div className="rounded-[1.5rem] border border-[#FF4200]/18 bg-white/70 p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--og-orange)]">
          Start a Project
        </p>
        <h2 className="mt-2 text-3xl leading-none text-[var(--og-blue)] md:text-4xl">
          {title}
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-[#676767] md:text-base">
          {description}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="mt-5 grid gap-5">
        {Object.entries(allHiddenFields).map(([name, value]) => (
          <input key={name} type="hidden" name={name} value={value} />
        ))}

        {submitted ? (
          <div className="rounded-[1.5rem] border border-[var(--og-orange)] bg-[var(--og-orange)] p-5 text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.22em]">Message Sent</p>
            <p className="mt-2 text-lg leading-7">Thanks. We will be in touch within 1 business day.</p>
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
            <RequiredLabel label="Name" required />
            <input name="name" required className={inputClass} />
          </label>
          <label className={labelClass}>
            <RequiredLabel label="Company" required />
            <input name="company" required className={inputClass} />
          </label>
        </div>

        <div className={`grid gap-5 ${showPhone ? "md:grid-cols-2" : ""}`}>
          <label className={labelClass}>
            <RequiredLabel label="Email" required />
            <input name="email" type="email" required className={inputClass} />
          </label>
          {showPhone ? (
            <label className={labelClass}>
              <RequiredLabel label="Phone" />
              <input name="phone" type="tel" className={inputClass} />
            </label>
          ) : null}
        </div>

        <label className={labelClass}>
          <RequiredLabel label={projectLabel} required />
          <textarea
            name="project"
            rows={5}
            required
            defaultValue={projectDefault}
            placeholder={projectPlaceholder}
            className={textareaClass}
          />
        </label>

        <div
          className={`grid gap-5 ${
            showTimeline && showDesignHelp
              ? "md:grid-cols-3"
              : showTimeline || showDesignHelp
                ? "md:grid-cols-2"
                : ""
          }`}
        >
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

          {showTimeline ? (
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
          ) : null}

          {showDesignHelp ? (
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
          ) : null}
        </div>

        {showQualificationFields ? (
          <div className="grid gap-5 lg:grid-cols-2">
            {showServiceFields || showProductTypeField ? (
              <label className={labelClass}>
                <RequiredLabel label={productTypeLabel} required />
                <select
                  name="productType"
                  required
                  defaultValue=""
                  className={selectClass}
                  style={{ backgroundImage: `url("data:image/svg+xml,${selectArrowSvg}")` }}
                >
                  <option value="" disabled>
                    Select
                  </option>
                  {resolvedProductTypeOptions.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </label>
            ) : null}

            {showServiceFields || showBlankDirectionField ? (
              <label className={labelClass}>
                <RequiredLabel label={blankDirectionLabel} required />
                <select
                  name="blankDirection"
                  required
                  defaultValue=""
                  className={selectClass}
                  style={{ backgroundImage: `url("data:image/svg+xml,${selectArrowSvg}")` }}
                >
                  <option value="" disabled>
                    Select
                  </option>
                  {selectOptions.blankDirection.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </label>
            ) : null}

            {showDecorationMethodField ? (
              <label className={labelClass}>
                <RequiredLabel label={decorationMethodLabel} required />
                <select
                  name="decorationMethod"
                  required
                  defaultValue=""
                  className={selectClass}
                  style={{ backgroundImage: `url("data:image/svg+xml,${selectArrowSvg}")` }}
                >
                  <option value="" disabled>
                    Select
                  </option>
                  {decorationMethodOptions.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </label>
            ) : null}

            {showServiceFields ? (
              <label className={labelClass}>
                <RequiredLabel label={placementsLabel} required />
                <select
                  name={placementsName}
                  required
                  defaultValue=""
                  className={selectClass}
                  style={{ backgroundImage: `url("data:image/svg+xml,${selectArrowSvg}")` }}
                >
                  <option value="" disabled>
                    Select
                  </option>
                  {placementOptions.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </label>
            ) : null}
          </div>
        ) : null}

        {showArtworkUpload ? (
          <div className="space-y-2">
            <label className="block">
              <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--og-blue)]">
                Upload vector artwork{" "}
                <span className="font-normal normal-case tracking-normal text-[#1C1C1C]/52">
                  (optional)
                </span>
              </span>
              <input
                type="file"
                name="artwork"
                accept=".ai,.eps,.pdf,.svg,.zip"
                className="og-file-input mt-2 block w-full cursor-pointer rounded-2xl border border-[#0B32A0]/16 bg-white px-4 py-3 text-sm text-[#1C1C1C] file:mr-4 file:rounded-xl file:border file:border-[#0B32A0]/18 file:bg-[#F7F4ED] file:px-4 file:py-2 file:text-xs file:font-bold file:uppercase file:text-[#0B32A0] file:transition hover:file:border-[var(--og-orange)] hover:file:text-[var(--og-orange)]"
              />
            </label>
            <p className="text-xs leading-6 text-[#1C1C1C]/52">
              Preferred files: AI, EPS, PDF, SVG, or a zipped vector package.
            </p>
          </div>
        ) : null}

        <button type="submit" disabled={submitting} className="btn-og inline-flex w-full justify-center md:w-auto">
          {submitting ? "Sending…" : submitLabel}
        </button>

        <p className="text-xs uppercase tracking-[0.18em] text-[#1C1C1C]/48">
          <span className="text-[var(--og-orange)]">*</span> Required fields
        </p>
      </form>
    </section>
  );
}
