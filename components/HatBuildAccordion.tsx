"use client";

import Image from "next/image";
import { useState } from "react";

type HatBuildItem = {
  title: string;
  description: string;
  image: string;
  imagePosition: string;
  badge?: string;
};

const hatBuildItems: HatBuildItem[] = [
  {
    title: "Full custom hat",
    description: "Choose the shape, fabric, color, and core brand details.",
    image: "/images/gallery/headwear-full-custom-verve-larrea-hat-038.jpg",
    imagePosition: "center 44%",
    badge: "Included",
  },
  {
    title: "Front decoration",
    description: "Pick the main hit up front, from embroidery to patches or labels.",
    image: "/images/gallery/headwear-front-decoration-feeling-shell-labbet.jpg",
    imagePosition: "center 56%",
    badge: "Included",
  },
  {
    title: "Fabric + color",
    description: "Pick the material, color direction, and overall feel.",
    image: "/images/gallery/headwear-fabric-color-mg-9423.jpg",
    imagePosition: "center 50%",
    badge: "Included",
  },
  {
    title: "Interior label",
    description: "Add the inside label and finishing details.",
    image: "/images/gallery/headwear-interior-woven-label-img-7684.jpg",
    imagePosition: "center 60%",
    badge: "Included",
  },
  {
    title: "Choose add-ons",
    description: "Optional paid upgrades like interior taping, back or side embroidery, rope, closure labels, or contrast fabric.",
    image: "/images/gallery/headwear-verve-roasters-dscf3088.jpg",
    imagePosition: "center 54%",
    badge: "Add-on charge",
  },
];

export function HatBuildAccordion() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = hatBuildItems[activeIndex];

  return (
    <div className="mt-8 grid gap-6 lg:h-[38rem] lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
      <div className="rounded-[1.9rem] border border-[#0B32A0]/15 bg-white px-5 py-5 md:px-6 md:py-6 lg:h-full">
        <h3 className="text-3xl font-semibold leading-none text-[var(--og-blue)]">
          Included in every hat
        </h3>

        <div className="mt-6 border-t border-[#0B32A0]/12">
          {hatBuildItems.map((item, index) => {
            const active = index === activeIndex;
            return (
              <button
                key={item.title}
                type="button"
                onClick={() => setActiveIndex(index)}
                className="w-full border-b border-[#0B32A0]/12 text-left transition last:border-b-0"
              >
                <div
                  className={`flex gap-4 transition-all ${
                    active ? "min-h-[7.5rem] items-start py-5" : "min-h-[6.15rem] items-center py-4"
                  }`}
                >
                  <span
                    className={`h-10 w-1 shrink-0 rounded-full transition ${
                      active ? "bg-[var(--og-orange)]" : "bg-transparent"
                    }`}
                  />

                  <div className="min-w-0 flex-1 self-center">
                    <div className="flex flex-wrap items-center gap-2">
                      <p
                        className={`text-lg font-semibold leading-tight transition md:text-xl ${
                          active ? "text-[var(--og-orange)]" : "text-[var(--og-blue)]"
                        }`}
                      >
                        {item.title}
                      </p>
                      {item.badge ? (
                        <span
                          className={`rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] ${
                            item.badge === "Included"
                              ? "border border-[#0B32A0]/18 bg-[#EEF3FF] text-[var(--og-blue)]"
                              : "border border-[#FF4200]/20 bg-[#FFF1E9] text-[var(--og-orange)]"
                          }`}
                        >
                          {item.badge}
                        </span>
                      ) : null}
                    </div>
                    {active ? (
                      <p className="mt-2 max-w-[34rem] text-sm leading-6 text-[var(--og-muted)] md:text-[15px]">
                        {item.description}
                      </p>
                    ) : null}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <article className="overflow-hidden rounded-[1.9rem] border border-[#0B32A0]/15 bg-white min-h-[22rem] lg:h-full">
        <div className="relative h-full min-h-[22rem] bg-[#d9c5ae]">
          <Image
            key={activeItem.image}
            src={activeItem.image}
            alt={activeItem.title}
            fill
            sizes="(min-width: 1024px) 48vw, 100vw"
            className="object-cover scale-[1.1]"
            style={{ objectPosition: activeItem.imagePosition }}
          />
        </div>
      </article>
    </div>
  );
}
