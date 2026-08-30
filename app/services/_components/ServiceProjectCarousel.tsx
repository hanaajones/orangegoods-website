"use client";

import Image from "next/image";
import { useState } from "react";
import { Reveal } from "@/components/Reveal";

export type ServiceProjectCarouselItem = {
  title: string;
  detail: string;
  src: string;
  alt: string;
  position?: string;
  activePosition?: string;
  scaleClass?: string;
  activeScaleClass?: string;
  activeHoverScaleClass?: string;
  thumbnailScaleClass?: string;
};

function getOrderedItems(items: ServiceProjectCarouselItem[], activeIndex: number) {
  return items.map((_, offset) => {
    const index = (activeIndex + offset) % items.length;
    return { index, item: items[index] };
  });
}

export function ServiceProjectCarousel({
  eyebrow = "Recent Projects",
  title,
  description,
  items,
  showCtaBadge = true,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  items: ServiceProjectCarouselItem[];
  showCtaBadge?: boolean;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const orderedItems = getOrderedItems(items, activeIndex);
  const activeItem = items[activeIndex];

  function goToNext() {
    setActiveIndex((current) => (current + 1) % items.length);
  }

  function goToPrevious() {
    setActiveIndex((current) => (current - 1 + items.length) % items.length);
  }

  return (
    <Reveal className="bg-white px-4 py-14 md:px-8 md:py-18 lg:px-12">
      <section className="mx-auto max-w-6xl" aria-label={title}>
        <div className="mb-8 flex flex-col gap-6 md:mb-10 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--og-orange)]">
              {eyebrow}
            </p>
            <h2
              className="mt-3 text-[2.45rem] uppercase leading-[0.94] text-[var(--og-blue)] md:text-[4rem]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {title}
            </h2>
            {description ? (
              <p className="mt-4 max-w-2xl text-base leading-7 text-[#676767] md:text-lg">
                {description}
              </p>
            ) : null}
          </div>
          <div className="flex shrink-0 gap-2">
            <button
              type="button"
              onClick={goToPrevious}
              className="flex h-11 w-11 items-center justify-center rounded-full border-[3px] border-[#0B32A0] bg-white text-2xl leading-none text-[#0B32A0] shadow-[3px_3px_0px_#0B32A0] transition hover:-translate-y-0.5 hover:bg-[#F7F4ED] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0B32A0]"
              aria-label="Previous project"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={goToNext}
              className="flex h-11 w-11 items-center justify-center rounded-full border-[3px] border-[#0B32A0] bg-white text-2xl leading-none text-[#0B32A0] shadow-[3px_3px_0px_#0B32A0] transition hover:-translate-y-0.5 hover:bg-[#F7F4ED] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0B32A0]"
              aria-label="Next project"
            >
              ›
            </button>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-[minmax(0,1.18fr)_minmax(0,1fr)] md:items-stretch md:gap-6">
          <article
            className="group relative block aspect-[16/9] overflow-hidden rounded-[1.25rem] border-[3px] border-white bg-[#E4DFCD] shadow-[7px_7px_0px_#0B32A0] transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FF4200] md:rounded-[1.6rem]"
            aria-label={`Highlighted ${activeItem.title} project`}
          >
            <Image
              key={activeItem.src}
              src={activeItem.src}
              alt={activeItem.alt}
              fill
              sizes="(min-width: 1024px) 62vw, 100vw"
              className={`object-cover transition duration-500 ${
                activeItem.activeScaleClass ?? ""
              } ${activeItem.activeHoverScaleClass ?? "group-hover:scale-[1.025]"}`}
              style={{
                objectPosition: activeItem.activePosition ?? activeItem.position ?? "center",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C]/78 via-[#1C1C1C]/14 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 text-white md:p-7">
              <div>
                <p className="font-noir-alt text-xs font-bold uppercase tracking-[0.18em] text-[var(--og-tangerine)] md:text-sm">
                  {activeItem.detail}
                </p>
                <h3
                  className="mt-1 text-4xl uppercase leading-none tracking-[0.01em] md:text-6xl"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {activeItem.title}
                </h3>
              </div>
              {showCtaBadge ? (
                <span className="pointer-events-auto inline-flex shrink-0 translate-y-2 items-center self-end rounded-full border-[3px] border-[#0B32A0] bg-white px-5 py-2 text-sm font-bold uppercase tracking-[0.14em] text-[#0B32A0] opacity-0 shadow-[3px_3px_0px_#0B32A0] transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100 hover:bg-[#F3EFE7]">
                  View All Goods
                </span>
              ) : null}
            </div>
          </article>

          <div className="grid grid-cols-2 gap-2 md:h-full md:gap-3">
            {orderedItems.slice(1, 3).map(({ index, item }) => (
              <button
                key={item.src}
                type="button"
                onClick={() => setActiveIndex(index)}
                className="group relative aspect-[4/5] overflow-hidden rounded-[0.75rem] border-[3px] border-[#B8AA8E] bg-[#E4DFCD] text-left transition hover:border-[#0B32A0] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FF4200] md:aspect-auto md:h-full md:rounded-[1rem]"
                aria-label={`Feature ${item.title}`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 1024px) 18vw, (min-width: 640px) 25vw, 50vw"
                  className={`object-cover transition duration-500 ${
                    item.thumbnailScaleClass ?? ""
                  } ${
                    item.activeHoverScaleClass ?? "group-hover:scale-105"
                  }`}
                  style={{ objectPosition: item.position ?? "center" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C]/76 via-[#1C1C1C]/8 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-2 text-white md:p-3">
                  <p className="font-noir-alt text-[0.52rem] font-bold uppercase tracking-[0.08em] text-[var(--og-tangerine)] md:text-[0.62rem] md:tracking-[0.1em]">
                    {item.detail}
                  </p>
                  <p className="font-noir-alt mt-1 text-[0.72rem] font-bold leading-tight md:text-sm">
                    {item.title}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>
    </Reveal>
  );
}
