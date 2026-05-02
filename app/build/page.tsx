"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent, useState } from "react";

const productTiles = [
  {
    name: "Headwear",
    image: "https://orangegoods.co/wp-content/uploads/2025/03/OrangeGoods_Goods_5-1.avif",
  },
  {
    name: "Apparel",
    image: "https://orangegoods.co/wp-content/uploads/2025/03/OrangeGoods_Goods_17.avif",
  },
  {
    name: "Drinkware",
    image: "https://orangegoods.co/wp-content/uploads/2025/03/OrangeGoods_Goods_18.avif",
  },
  {
    name: "Bags + Totes",
    image: "https://orangegoods.co/wp-content/uploads/2025/03/OrangeGoods_Goods_19.avif",
  },
  {
    name: "Accessories",
    image: "https://orangegoods.co/wp-content/uploads/2025/03/OrangeGoods_Goods_20.avif",
  },
  {
    name: "Not Sure Yet",
    image: "https://orangegoods.co/wp-content/uploads/2024/07/OrangeGoods_ABoutUs_5-1.jpg",
  },
];

const quantities = ["100–250", "250–500", "500–1,000", "1,000+", "Not sure"];
const timelines = ["ASAP", "2-3 Weeks", "4-6 Weeks", "2+ Months", "Flexible"];
const budgets = ["Under $1K", "$1K-$5K", "$5K-$15K", "$15K+", "TBD"];

const fieldClass =
  "min-h-12 rounded-xl border border-[#0B32A0]/20 bg-white px-4 text-base text-[var(--og-ink)] outline-none transition focus:border-[var(--og-orange)] focus:ring-2 focus:ring-[var(--og-orange)]/15";

export default function BuildPage() {
  const [step, setStep] = useState(1);
  const [products, setProducts] = useState<string[]>([]);
  const [quantity, setQuantity] = useState("");
  const [timeline, setTimeline] = useState("");
  const [budget, setBudget] = useState("");
  const [success, setSuccess] = useState(false);

  const progress = success ? 100 : Math.round((step / 3) * 100);

  function toggleProduct(product: string) {
    setProducts((current) =>
      current.includes(product)
        ? current.filter((item) => item !== product)
        : [...current, product],
    );
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSuccess(true);
  }

  return (
    <main className="min-h-screen bg-[#F3EFE7] text-[var(--og-ink)]">
      <section className="bg-[#0B32A0] px-4 py-16 text-white sm:px-6 md:py-24 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h1 className="max-w-4xl text-6xl leading-[0.86] text-[#FF4200] sm:text-7xl md:text-8xl lg:text-9xl">
            LET&apos;S MAKE SOMETHING
          </h1>
          <p className="mt-6 max-w-2xl font-body text-lg leading-8 text-white/85 md:text-2xl">
            Tell us what you need. We&apos;ll handle the rest
          </p>
        </div>
      </section>

      <section className="px-4 py-8 sm:px-6 md:py-14 lg:px-8">
        <form
          onSubmit={handleSubmit}
          className="mx-auto max-w-3xl rounded-2xl bg-white p-4 shadow-[0_24px_70px_rgba(28,28,28,0.12)] sm:p-6 md:p-8"
        >
          {!success ? (
            <div className="mb-8 h-1 overflow-hidden rounded-full bg-[#E4DFCD]">
              <div
                className="h-full rounded-full bg-[#FF4200] transition-all duration-500 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
          ) : null}

          {step === 1 && !success ? (
            <section className="transition-opacity duration-300">
              <StepHeader
                title="WHAT ARE YOU MAKING?"
                subtext="Pick everything that applies"
              />

              <div className="mt-7 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
                {productTiles.map((tile) => {
                  const selected = products.includes(tile.name);

                  return (
                    <button
                      key={tile.name}
                      type="button"
                      onClick={() => toggleProduct(tile.name)}
                      aria-pressed={selected}
                      className={`group relative min-h-40 overflow-hidden rounded-2xl border-4 text-left transition duration-200 md:min-h-52 ${
                        selected
                          ? "border-[#FF4200] opacity-100 shadow-[0_16px_34px_rgba(255,66,0,0.2)]"
                          : "border-transparent opacity-75 hover:opacity-100"
                      }`}
                    >
                      <Image
                        src={tile.image}
                        alt=""
                        fill
                        sizes="(max-width: 768px) 50vw, 33vw"
                        className="object-cover transition duration-500 group-hover:scale-105"
                      />
                      <span className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C]/85 via-[#1C1C1C]/35 to-transparent" />
                      {selected ? (
                        <span className="absolute right-3 top-3 inline-flex size-9 items-center justify-center rounded-full bg-[#FF4200] text-white ring-2 ring-white">
                          <CheckIcon className="size-5" />
                        </span>
                      ) : null}
                      <span className="absolute inset-x-3 bottom-3 font-display text-2xl uppercase leading-none tracking-normal text-white md:text-3xl">
                        {tile.name}
                      </span>
                    </button>
                  );
                })}
              </div>

              {products.length > 0 ? (
                <div className="mt-8 flex justify-end">
                  <button type="button" onClick={() => setStep(2)} className="btn-og w-full sm:w-auto">
                    NEXT →
                  </button>
                </div>
              ) : null}
            </section>
          ) : null}

          {step === 2 && !success ? (
            <section className="transition-opacity duration-300">
              <StepHeader
                title="HOW MANY DO YOU NEED?"
                subtext="Give us a ballpark - we'll dial it in"
              />

              <div className="mt-7 grid gap-7">
                <PillGroup title="Quantity" options={quantities} value={quantity} onChange={setQuantity} />
                <PillGroup title="Timeline" options={timelines} value={timeline} onChange={setTimeline} />
                <PillGroup title="Budget" options={budgets} value={budget} onChange={setBudget} />

                <label className="grid gap-2 font-body text-sm font-semibold uppercase text-[#0B32A0]">
                  Tell us more (optional)
                  <textarea
                    name="description"
                    rows={5}
                    placeholder="What are we making, who is it for, and what should it feel like?"
                    className="rounded-xl border border-[#0B32A0]/20 bg-white px-4 py-3 font-body text-base normal-case text-[var(--og-ink)] outline-none transition placeholder:text-[#1C1C1C]/45 focus:border-[var(--og-orange)] focus:ring-2 focus:ring-[var(--og-orange)]/15"
                  />
                </label>
              </div>

              <StepActions onBack={() => setStep(1)} onNext={() => setStep(3)} />
            </section>
          ) : null}

          {step === 3 && !success ? (
            <section className="transition-opacity duration-300">
              <StepHeader title="WHO ARE YOU?" subtext="Last step - we promise" />

              <div className="mt-7 grid gap-5 md:grid-cols-2">
                <Field name="firstName" label="First Name" autoComplete="given-name" />
                <Field name="lastName" label="Last Name" autoComplete="family-name" />
                <Field name="company" label="Company" autoComplete="organization" />
                <Field name="email" label="Email" type="email" autoComplete="email" />
                <Field name="phone" label="Phone" type="tel" autoComplete="tel" />

                <label className="grid gap-2 font-body text-sm font-semibold uppercase text-[#0B32A0] md:col-span-2">
                  Upload your logo or assets (optional)
                  <input
                    name="assets"
                    type="file"
                    className="rounded-xl border border-dashed border-[#0B32A0]/30 bg-[#F3EFE7] px-4 py-4 font-body text-sm normal-case text-[var(--og-ink)] file:mr-4 file:rounded-lg file:border-0 file:bg-white file:px-4 file:py-2 file:font-display file:text-xs file:uppercase file:text-[#FF4200]"
                  />
                </label>
              </div>

              <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="inline-flex min-h-12 items-center justify-center rounded-xl border-2 border-[#0B32A0]/20 px-6 font-display text-sm uppercase text-[#0B32A0] transition hover:border-[#0B32A0]"
                >
                  Back
                </button>
                <button type="submit" className="btn-og">
                  SEND IT →
                </button>
              </div>
            </section>
          ) : null}

          {success ? (
            <section className="grid min-h-96 place-items-center rounded-xl bg-[#0B32A0] px-4 py-12 text-center text-white">
              <div>
                <div className="mx-auto mb-6 inline-flex size-20 items-center justify-center rounded-full bg-[#FF4200]">
                  <CheckIcon className="size-11" />
                </div>
                <h2 className="text-5xl leading-none text-[#FF4200] sm:text-6xl">
                  YOU&apos;RE ON THE LIST
                </h2>
                <p className="mx-auto mt-5 max-w-xl font-body text-lg leading-8 text-white/85">
                  We&apos;ll review your project and get back to you within 1 business day.
                  Real humans, real fast
                </p>
                <Link href="/" className="btn-og-white mt-8">
                  Back to Homepage
                </Link>
              </div>
            </section>
          ) : null}
        </form>
      </section>
    </main>
  );
}

function StepHeader({ title, subtext }: { title: string; subtext: string }) {
  return (
    <header>
      <h2 className="text-4xl leading-none text-[#FF4200] sm:text-5xl md:text-6xl">{title}</h2>
      <p className="mt-3 font-body text-base leading-7 text-[#1C1C1C]/70 sm:text-lg">{subtext}</p>
    </header>
  );
}

function PillGroup({
  title,
  options,
  value,
  onChange,
}: {
  title: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <fieldset>
      <legend className="mb-3 font-body text-sm font-semibold uppercase text-[#0B32A0]">
        {title}
      </legend>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => {
          const selected = value === option;

          return (
            <button
              key={option}
              type="button"
              onClick={() => onChange(option)}
              aria-pressed={selected}
              className={`min-h-12 rounded-full border-2 px-5 font-body text-sm font-semibold transition sm:text-base ${
                selected
                  ? "border-[#FF4200] bg-[#FF4200] text-white"
                  : "border-[#0B32A0]/15 bg-[#F3EFE7] text-[#1C1C1C] hover:border-[#FF4200]"
              }`}
            >
              {option}
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}

function Field({
  name,
  label,
  type = "text",
  autoComplete,
}: {
  name: string;
  label: string;
  type?: string;
  autoComplete?: string;
}) {
  return (
    <label className="grid gap-2 font-body text-sm font-semibold uppercase text-[#0B32A0]">
      {label}
      <input
        name={name}
        type={type}
        required
        autoComplete={autoComplete}
        className={fieldClass}
      />
    </label>
  );
}

function StepActions({ onBack, onNext }: { onBack: () => void; onNext: () => void }) {
  return (
    <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
      <button
        type="button"
        onClick={onBack}
        className="inline-flex min-h-12 items-center justify-center rounded-xl border-2 border-[#0B32A0]/20 px-6 font-display text-sm uppercase text-[#0B32A0] transition hover:border-[#0B32A0]"
      >
        Back
      </button>
      <button type="button" onClick={onNext} className="btn-og">
        NEXT →
      </button>
    </div>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="3"
    >
      <path d="m5 13 4 4L19 7" />
    </svg>
  );
}
