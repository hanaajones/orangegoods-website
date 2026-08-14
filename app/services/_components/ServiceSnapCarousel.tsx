"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef } from "react";
import { Reveal } from "@/components/Reveal";

export type ServiceSnapCarouselItem = {
  title: string;
  detail: string;
  src: string;
  alt: string;
  position?: string;
  activePosition?: string;
  scaleClass?: string;
  activeScaleClass?: string;
  thumbnailScaleClass?: string;
  activeHoverScaleClass?: string;
};

const CARD_WIDTH = 352;
const AUTO_INTERVAL = 2800;

export function ServiceSnapCarousel({
  eyebrow,
  title,
  description,
  items,
  ctaHref,
  ctaLabel,
  titleClassName,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  items: ServiceSnapCarouselItem[];
  ctaHref?: string;
  ctaLabel?: string;
  titleClassName?: string;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isPaused = useRef(false);
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const advance = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTo({ left: el.scrollLeft + CARD_WIDTH, behavior: "smooth" });
  }, []);

  const handleScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const third = el.scrollWidth / 3;
    if (el.scrollLeft < third * 0.05) {
      el.scrollLeft += third;
    } else if (el.scrollLeft > third * 1.95) {
      el.scrollLeft -= third;
    }
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollLeft = el.scrollWidth / 3;
    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      if (!isPaused.current) advance();
    }, AUTO_INTERVAL);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [advance]);

  function onMouseDown(e: React.MouseEvent<HTMLDivElement>) {
    if (!scrollRef.current) return;
    isDown.current = true;
    isPaused.current = true;
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft.current = scrollRef.current.scrollLeft;
  }

  function onMouseLeave() {
    isDown.current = false;
    isPaused.current = false;
  }

  function onMouseUp() {
    isDown.current = false;
    isPaused.current = false;
  }

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!isDown.current || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
  }

  return (
    <Reveal className="bg-[#F7F4ED] px-4 py-14 md:px-8 md:py-18 lg:px-12">
      <section className="relative left-1/2 w-screen max-w-none -translate-x-1/2">
        <div className="mx-auto mb-8 max-w-6xl px-4 md:mb-10 md:px-8 lg:px-12">
          <div className="max-w-3xl">
            {eyebrow ? (
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--og-orange)]">
                {eyebrow}
              </p>
            ) : null}
            <h2
              className={`mt-3 text-[2.45rem] uppercase leading-[0.94] text-[var(--og-blue)] md:text-[4rem] ${titleClassName ?? ""}`}
              style={{ fontFamily: "var(--font-display)" }}
            >
              {title}
            </h2>
            {description ? (
              <p className="mt-4 max-w-2xl text-base leading-7 text-[#676767] md:text-lg">
                {description}
              </p>
            ) : null}
            {ctaHref && ctaLabel ? (
              <div className="mt-6">
                <Link href={ctaHref} className="btn-og inline-flex">
                  {ctaLabel}
                </Link>
              </div>
            ) : null}
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto pb-6 pl-4 pr-4 select-none [scrollbar-width:none] md:pl-8 md:pr-8 lg:pl-12 lg:pr-12 [&::-webkit-scrollbar]:hidden"
          style={{ cursor: isDown.current ? "grabbing" : "grab", scrollSnapType: "x mandatory" }}
          onMouseDown={onMouseDown}
          onMouseLeave={onMouseLeave}
          onMouseUp={onMouseUp}
          onMouseMove={onMouseMove}
          onMouseEnter={() => {
            isPaused.current = true;
          }}
          onMouseOut={() => {
            if (!isDown.current) isPaused.current = false;
          }}
        >
          {[...items, ...items, ...items].map((item, idx) => {
            const staticScaleClass =
              item.scaleClass ?? item.activeScaleClass ?? item.thumbnailScaleClass ?? "";
            const hoverScaleClass = staticScaleClass
              ? item.activeHoverScaleClass ?? ""
              : item.activeHoverScaleClass ?? "group-hover:scale-105";

            return (
              <article
                key={`${item.src}-${idx}`}
                className="group relative shrink-0 overflow-hidden rounded-[1.9rem] border-[3px] border-[#0B32A0] bg-[#E4DFCD]"
                style={{
                  width: "clamp(280px, 34vw, 360px)",
                  height: "430px",
                  boxShadow: "8px 8px 0px #081E6F",
                  scrollSnapAlign: "start",
                }}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 1024px) 28vw, (min-width: 640px) 40vw, 78vw"
                  className={`object-cover transition duration-500 ${staticScaleClass} ${hoverScaleClass}`}
                  style={{ objectPosition: item.position ?? "center" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C]/82 via-[#1C1C1C]/28 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-white md:p-6">
                  <p className="font-noir-alt text-xs font-bold uppercase tracking-[0.18em] text-[var(--og-tangerine)]">
                    {item.detail}
                  </p>
                  <h3
                    className="mt-2 text-[2rem] uppercase leading-none tracking-[0.01em]"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {item.title}
                  </h3>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </Reveal>
  );
}
