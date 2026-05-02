"use client";

import Image from "next/image";
import { FormEvent, useMemo, useState } from "react";

const categories = ["Headwear", "Apparel", "Drinkware", "Accessories", "Bags", "Other"];

const styleOptions: Record<string, { name: string; image: string }[]> = {
  Headwear: [
    { name: "Structured Cap", image: "https://orangegoods.co/wp-content/uploads/2025/03/OrangeGoods_Goods_5-1.avif" },
    { name: "Dad Hat", image: "https://orangegoods.co/wp-content/uploads/2024/06/Hat-271x300.jpg" },
    { name: "Beanie", image: "https://orangegoods.co/wp-content/uploads/2025/03/OrangeGoods_Goods_20.avif" },
  ],
  Apparel: [
    { name: "Tee", image: "https://orangegoods.co/wp-content/uploads/2025/03/OrangeGoods_Goods_17.avif" },
    { name: "Hoodie", image: "https://orangegoods.co/wp-content/uploads/2025/03/OrangeGoods_Goods_17.avif" },
    { name: "Polo", image: "https://orangegoods.co/wp-content/uploads/2025/03/OrangeGoods_Goods_18.avif" },
  ],
  Drinkware: [
    { name: "Tumbler", image: "https://orangegoods.co/wp-content/uploads/2025/03/OrangeGoods_Goods_18.avif" },
    { name: "Bottle", image: "https://orangegoods.co/wp-content/uploads/2025/03/OrangeGoods_Goods_19.avif" },
    { name: "Mug", image: "https://orangegoods.co/wp-content/uploads/2025/03/OrangeGoods_Goods_20.avif" },
  ],
  Accessories: [
    { name: "Patches", image: "https://orangegoods.co/wp-content/uploads/2025/03/OrangeGoods_Goods_20.avif" },
    { name: "Keychains", image: "https://orangegoods.co/wp-content/uploads/2025/03/OrangeGoods_Goods_20.avif" },
    { name: "Socks", image: "https://orangegoods.co/wp-content/uploads/2025/03/OrangeGoods_Goods_17.avif" },
  ],
  Bags: [
    { name: "Tote", image: "https://orangegoods.co/wp-content/uploads/2025/03/OrangeGoods_Goods_19.avif" },
    { name: "Backpack", image: "https://orangegoods.co/wp-content/uploads/2024/07/OrangeGoods_ABoutUs_5-1.jpg" },
    { name: "Duffel", image: "https://orangegoods.co/wp-content/uploads/2025/03/OrangeGoods_Goods_19.avif" },
  ],
  Other: [
    { name: "Gift Kit", image: "https://orangegoods.co/wp-content/uploads/2024/07/OrangeGoods_ABoutUs_5-1.jpg" },
    { name: "Packaging", image: "https://orangegoods.co/wp-content/uploads/2025/03/OrangeGoods_Goods_19.avif" },
    { name: "Not Sure Yet", image: "https://orangegoods.co/wp-content/uploads/2025/03/OrangeGoods_Goods_5-1.avif" },
  ],
};

const fieldClass =
  "min-h-12 border border-[#0B32A0]/20 bg-white px-4 text-base text-[var(--og-ink)] outline-none transition focus:border-[var(--og-orange)]";

export default function BuildPage() {
  const [step, setStep] = useState(1);
  const [category, setCategory] = useState("");
  const [style, setStyle] = useState("");
  const [success, setSuccess] = useState(false);

  const styles = useMemo(() => styleOptions[category] ?? [], [category]);

  function pickCategory(nextCategory: string) {
    setCategory(nextCategory);
    setStyle("");
    setStep(2);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSuccess(true);
    setStep(5);
  }

  return (
    <main className="bg-[var(--og-warm-grey)] pb-24 md:pb-0">
      <section className="bg-[var(--og-blue)] px-4 py-14 text-white md:px-8 md:py-20 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white/70">
            Build Online
          </p>
          <h1 className="mt-5 text-6xl leading-none text-[var(--og-orange)] md:text-8xl lg:text-9xl">
            START YOUR PROJECT
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/82 md:text-xl">
            Pick a category, choose a starting style, and send us the details.
          </p>
        </div>
      </section>

      <section className="px-4 py-12 md:px-8 md:py-16 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 flex gap-2 overflow-x-auto">
            {[1, 2, 3, 4, 5].map((number) => (
              <span
                key={number}
                className={`inline-flex min-h-10 min-w-10 shrink-0 items-center justify-center rounded-full text-sm font-semibold ${
                  step >= number
                    ? "bg-[var(--og-orange)] text-white"
                    : "border border-[#0B32A0]/20 text-[var(--og-blue)]"
                }`}
              >
                {number}
              </span>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="border border-[#0B32A0]/20 bg-white/80 p-5 md:p-8">
            {step === 1 ? (
              <div>
                <h2 className="text-4xl leading-tight md:text-5xl">Pick a category</h2>
                <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {categories.map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => pickCategory(item)}
                      className="min-h-20 border border-[#0B32A0]/20 bg-white px-5 text-left text-xl font-semibold uppercase tracking-[0.08em] text-[var(--og-blue)] transition hover:border-[var(--og-orange)] hover:text-[var(--og-orange)]"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            ) : null}

            {step === 2 ? (
              <div>
                <h2 className="text-4xl leading-tight md:text-5xl">Pick a style</h2>
                <p className="mt-3 text-base text-[var(--og-muted)]">{category}</p>
                <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {styles.map((item) => (
                    <button
                      key={item.name}
                      type="button"
                      onClick={() => {
                        setStyle(item.name);
                        setStep(3);
                      }}
                      className="group overflow-hidden border border-[#0B32A0]/20 bg-white text-left transition hover:border-[var(--og-orange)]"
                    >
                      <div className="relative aspect-[4/3] bg-[var(--og-sand)]">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover transition duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-4 text-lg font-semibold uppercase tracking-[0.08em] text-[var(--og-blue)]">
                        {item.name}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            ) : null}

            {step === 3 ? (
              <div>
                <h2 className="text-4xl leading-tight md:text-5xl">Tell us about your project</h2>
                <p className="mt-3 text-base text-[var(--og-muted)]">
                  {category} / {style}
                </p>
                <div className="mt-7 grid gap-5 md:grid-cols-2">
                  <label className="grid gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--og-blue)]">
                    Quantity
                    <select name="quantity" required defaultValue="" className={fieldClass}>
                      <option value="" disabled>Select</option>
                      {["<50", "50-100", "100-250", "250-500", "500+"].map((option) => (
                        <option key={option}>{option}</option>
                      ))}
                    </select>
                  </label>
                  <label className="grid gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--og-blue)]">
                    Timeline
                    <select name="timeline" required defaultValue="" className={fieldClass}>
                      <option value="" disabled>Select</option>
                      {["ASAP", "2-4 weeks", "1-2 months", "2+ months", "Not sure"].map((option) => (
                        <option key={option}>{option}</option>
                      ))}
                    </select>
                  </label>
                  <label className="grid gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--og-blue)] md:col-span-2">
                    Description
                    <textarea
                      name="description"
                      required
                      rows={6}
                      className="border border-[#0B32A0]/20 bg-white px-4 py-3 text-base text-[var(--og-ink)] outline-none transition focus:border-[var(--og-orange)]"
                    />
                  </label>
                </div>
                <FlowActions onBack={() => setStep(2)} onNext={() => setStep(4)} />
              </div>
            ) : null}

            {step === 4 ? (
              <div>
                <h2 className="text-4xl leading-tight md:text-5xl">Your info</h2>
                <div className="mt-7 grid gap-5 md:grid-cols-2">
                  {[
                    ["name", "Name", "text"],
                    ["company", "Company", "text"],
                    ["email", "Email", "email"],
                    ["phone", "Phone", "tel"],
                  ].map(([name, label, type]) => (
                    <label key={name} className="grid gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--og-blue)]">
                      {label}
                      <input name={name} type={type} required={name !== "phone"} className={fieldClass} />
                    </label>
                  ))}
                </div>
                <div className="mt-8 flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    className="inline-flex min-h-12 items-center rounded-full border border-[#0B32A0]/20 px-6 text-sm font-semibold uppercase tracking-[0.14em] text-[var(--og-blue)]"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="inline-flex min-h-12 items-center rounded-full bg-[var(--og-orange)] px-6 text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-[#d73b05]"
                  >
                    Send Project
                  </button>
                </div>
              </div>
            ) : null}

            {step === 5 && success ? (
              <div className="bg-[var(--og-orange)] p-8 text-white">
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white/75">
                  Project Sent
                </p>
                <h2 className="mt-4 text-4xl leading-tight text-white md:text-6xl">
                  We&apos;ll be in touch within 1 business day
                </h2>
              </div>
            ) : null}
          </form>
        </div>
      </section>
    </main>
  );
}

function FlowActions({ onBack, onNext }: { onBack: () => void; onNext: () => void }) {
  return (
    <div className="mt-8 flex flex-wrap gap-3">
      <button
        type="button"
        onClick={onBack}
        className="inline-flex min-h-12 items-center rounded-full border border-[#0B32A0]/20 px-6 text-sm font-semibold uppercase tracking-[0.14em] text-[var(--og-blue)]"
      >
        Back
      </button>
      <button
        type="button"
        onClick={onNext}
        className="inline-flex min-h-12 items-center rounded-full bg-[var(--og-orange)] px-6 text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-[#d73b05]"
      >
        Next
      </button>
    </div>
  );
}
