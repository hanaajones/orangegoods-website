"use client";

import Image from "next/image";
import { useState } from "react";

type HatBuildItem = {
  title: string;
  description: string;
  image: string;
  imagePosition: string;
  details: string[];
  optional?: boolean;
};

const hatBuildItems: HatBuildItem[] = [
  {
    title: "Full custom hat",
    description:
      "Start with the silhouette, crown shape, brim, closure, and overall feel. This is the base that makes the hat yours.",
    image: "/images/gallery/headwear-reel-life-gear-boat-2.jpg",
    imagePosition: "center 42%",
    details: ["Choose the shape", "Choose the structure", "Choose the closure"],
  },
  {
    title: "Choose your front decoration",
    description:
      "Front branding sets the tone. Keep it clean with embroidery or add more texture with a patch.",
    image: "/images/gallery/hat-feb-img_7549.jpg",
    imagePosition: "center 42%",
    details: ["Flat embroidery", "3D puff", "Woven or leather patch"],
  },
  {
    title: "Choose your fabric",
    description:
      "Fabric changes the whole read of the hat, from washed and broken-in to cleaner and more technical.",
    image: "/images/gallery/headwear-leaver-her-wilder-img-7385-edit.jpg",
    imagePosition: "center 46%",
    details: ["Cotton twill", "Washed denim", "Nylon or ripstop"],
  },
  {
    title: "Interior label + finishing",
    description:
      "These are the details that make the hat feel finished once someone picks it up.",
    image: "/images/gallery/hat-og-patch-_mg_5840.jpg",
    imagePosition: "center 48%",
    details: ["Interior label", "Interior taping", "Side or back hit"],
  },
  {
    title: "Choose your add-ons",
    description:
      "Optional extras that push the hat further once the base, fabric, and front hit are locked.",
    image: "/images/gallery/hat-og-patch-lifestyle.jpg",
    imagePosition: "center 52%",
    details: ["Rope detail", "Side embroidery", "Back hit", "Flag label"],
    optional: true,
  },
];

export function HatBuildAccordion() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = hatBuildItems[activeIndex];

  return (
    <div className="mt-8 grid gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
      <div className="rounded-[1.9rem] border-[3px] border-[#0B32A0] bg-white p-5 shadow-[8px_8px_0px_#0B32A0] md:p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--og-orange)]">
          What&apos;s included
        </p>
        <div className="mt-5 grid gap-2.5">
          {hatBuildItems.map((item, index) => {
            const active = index === activeIndex;
            return (
              <button
                key={item.title}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`rounded-[1.35rem] border px-4 py-4 text-left transition md:px-5 ${
                  active
                    ? "border-[#0B32A0] bg-[rgba(255,248,241,0.88)] text-[var(--og-blue)]"
                    : "border-[#0B32A0]/12 bg-white text-[var(--og-blue)] hover:border-[#FF4200]"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <p className="text-lg font-semibold leading-tight md:text-xl">{item.title}</p>
                      {item.optional ? (
                        <span className="rounded-full border border-[#FF4200]/20 bg-[#FFF1E9] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--og-orange)]">
                          Optional
                        </span>
                      ) : null}
                    </div>
                    <p
                      className="mt-3 text-sm leading-6 text-[var(--og-muted)]"
                    >
                      {item.description}
                    </p>
                  </div>
                  <span
                    className={`mt-1 text-xl font-semibold ${active ? "text-[var(--og-blue)]" : "text-[var(--og-orange)]"}`}
                  >
                    {active ? "−" : "+"}
                  </span>
                </div>

                {active ? (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.details.map((detail) => (
                      <span
                        key={detail}
                        className="rounded-full border border-[#0B32A0]/10 bg-white px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--og-blue)]"
                      >
                        {detail}
                      </span>
                    ))}
                  </div>
                ) : null}
              </button>
            );
          })}
        </div>
      </div>

      <article className="overflow-hidden rounded-[1.9rem] border-[3px] border-[#0B32A0] bg-white shadow-[8px_8px_0px_#0B32A0]">
        <div className="relative aspect-[4/3] bg-[#d9c5ae]">
          <Image
            key={activeItem.image}
            src={activeItem.image}
            alt={activeItem.title}
            fill
            sizes="(min-width: 1024px) 48vw, 100vw"
            className="object-cover"
            style={{ objectPosition: activeItem.imagePosition }}
          />
        </div>
      </article>
    </div>
  );
}
