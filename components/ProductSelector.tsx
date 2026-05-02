"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Reveal } from "@/components/Reveal";

type Style = {
  id: string;
  name: string;
  description: string;
  shape: string;
  fit: string;
};

type Option = {
  title: string;
  description: string;
};

export function ProductSelector({
  styles,
  options,
}: {
  styles: Style[];
  options: Option[];
}) {
  const [activeId, setActiveId] = useState(styles[0]?.id ?? "");
  const activeStyle = styles.find((style) => style.id === activeId) ?? styles[0];

  return (
    <Reveal className="px-4 py-8 md:px-8 lg:px-12">
      <section className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--og-orange)]">
            Product Selector
          </p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight text-[var(--og-ink)] md:text-5xl">
            Pick a shape, then build every detail from the ground up.
          </h2>
        </div>

        <div className="-mx-4 mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 md:mx-0 md:grid md:grid-cols-2 lg:grid-cols-4 md:overflow-visible md:px-0">
          {styles.map((style) => {
            const active = style.id === activeStyle.id;
            return (
              <motion.button
                key={style.id}
                whileHover={{ y: -4 }}
                type="button"
                onClick={() => setActiveId(style.id)}
                className={`min-h-[15rem] min-w-[16rem] snap-start rounded-[1.75rem] border p-5 text-left transition ${
                  active
                    ? "border-[var(--og-orange)] bg-[#1d1714] text-[#f5efe6]"
                    : "border-black/10 bg-[rgba(255,248,241,0.86)] text-[var(--og-ink)]"
                }`}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--og-orange)]">
                  {style.shape}
                </p>
                <h3 className="mt-4 text-2xl font-semibold">{style.name}</h3>
                <p className={`mt-4 text-sm leading-6 ${active ? "text-[#d7c7b8]" : "text-[var(--og-muted)]"}`}>
                  {style.description}
                </p>
                <p className={`mt-5 text-xs font-semibold uppercase tracking-[0.16em] ${active ? "text-[#ffcfbf]" : "text-[var(--og-muted)]"}`}>
                  {style.fit}
                </p>
              </motion.button>
            );
          })}
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
          <section className="rounded-[2rem] border border-black/10 bg-[rgba(255,248,241,0.88)] p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--og-orange)]">
              Active Style
            </p>
            <h3 className="mt-4 text-3xl font-semibold text-[var(--og-ink)]">
              {activeStyle.name}
            </h3>
            <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--og-muted)] md:text-lg">
              {activeStyle.description}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="rounded-full bg-[#efe2d2] px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--og-muted)]">
                {activeStyle.shape}
              </span>
              <span className="rounded-full bg-[#efe2d2] px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--og-muted)]">
                {activeStyle.fit}
              </span>
              <span className="rounded-full bg-[#efe2d2] px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--og-muted)]">
                100 Piece MOQ
              </span>
            </div>
          </section>

          <section className="rounded-[2rem] border border-black/10 bg-[#1d1714] p-6 text-[#f5efe6]">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#ff9e7a]">
              Customization Options
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {options.map((option) => (
                <div
                  key={option.title}
                  className="rounded-[1.4rem] border border-white/10 bg-white/6 p-4"
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#ffcfbf]">
                    {option.title}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-[#dccdbf]">
                    {option.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>
    </Reveal>
  );
}
