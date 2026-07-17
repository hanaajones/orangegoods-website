"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import { GoodsUseCaseRotator } from "@/components/GoodsUseCaseRotator";

type GoodsCategory = {
  name: string;
  description: string;
  href: string;
  image: string;
  className?: string;
  imagePosition?: string;
  imageClassName?: string;
};

function getCardHeightClass(category: GoodsCategory) {
  const size = category.className ?? "";

  if (size.includes("24rem")) return "min-h-[15.5rem]";
  if (size.includes("22rem") || size.includes("21rem")) return "min-h-[15rem]";
  if (size.includes("20rem") || size.includes("19rem")) return "min-h-[14rem]";
  return "min-h-[13rem]";
}

export function GoodsHorizontalScroller({
  categories,
  useCaseWords,
}: {
  categories: GoodsCategory[];
  useCaseWords: string[];
}) {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [scrollDistance, setScrollDistance] = useState(0);
  const [viewportHeight, setViewportHeight] = useState(900);

  const columns = useMemo(() => {
    const grouped: GoodsCategory[][] = [];

    for (let i = 0; i < categories.length; i += 2) {
      grouped.push(categories.slice(i, i + 2));
    }

    return grouped;
  }, [categories]);

  useEffect(() => {
    const measure = () => {
      const viewportWidth = viewportRef.current?.clientWidth ?? 0;
      const trackWidth = trackRef.current?.scrollWidth ?? 0;
      setScrollDistance(Math.max(0, trackWidth - viewportWidth));
      setViewportHeight(window.innerHeight);
    };

    measure();

    const resizeObserver = new ResizeObserver(measure);
    if (viewportRef.current) resizeObserver.observe(viewportRef.current);
    if (trackRef.current) resizeObserver.observe(trackRef.current);

    window.addEventListener("resize", measure);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [columns]);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, (value) => -value * scrollDistance);
  const sectionHeight = Math.max(viewportHeight + scrollDistance + 96, viewportHeight * 1.75);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#F7F4ED]"
      style={{ height: `${sectionHeight}px` }}
    >
      <div className="sticky top-0 h-screen overflow-hidden px-4 py-14 md:px-8 md:py-20 lg:px-12">
        <div className="mx-auto flex h-full max-w-6xl flex-col">
          <div className="mb-7 max-w-3xl shrink-0">
            <h2 className="flex flex-col text-4xl leading-none text-[var(--og-blue)] md:flex-row md:flex-nowrap md:items-baseline md:gap-3 md:text-5xl">
              We&apos;ll make it for you:
              <GoodsUseCaseRotator words={useCaseWords} />
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-6 text-[#1C1C1C]/60">
              From concept to delivery. We&apos;ll source the highest quality product at the best
              price.
            </p>
          </div>

          <div ref={viewportRef} className="min-h-0 flex-1 overflow-hidden">
            <motion.div ref={trackRef} style={{ x }} className="flex h-full gap-4 pr-4 md:gap-5 md:pr-8">
              {columns.map((column, columnIndex) => (
                <div
                  key={`goods-column-${columnIndex}`}
                  className="flex w-[18rem] shrink-0 flex-col gap-4 sm:w-[20rem] lg:w-[22rem]"
                >
                  {column.map((category) => (
                    <Link
                      key={category.name}
                      href={category.href}
                      className={`group relative overflow-hidden rounded-[1.75rem] ${getCardHeightClass(
                        category
                      )}`}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={category.image}
                        alt={category.name}
                        className={`absolute inset-0 h-full w-full object-cover transition duration-500 ${
                          category.imageClassName || "group-hover:scale-105"
                        }`}
                        style={{ objectPosition: category.imagePosition }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C]/82 via-[#1C1C1C]/28 to-transparent" />
                      <div className="absolute inset-x-0 bottom-0 p-5">
                        <h3 className="text-2xl leading-tight text-white md:text-[2rem]">
                          {category.name}
                        </h3>
                        <p className="mt-2 line-clamp-2 max-w-sm text-sm leading-5 text-white/75">
                          {category.description}
                        </p>
                        <span className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-white transition group-hover:text-[#FF7F00]">
                          Customize
                          <span className="h-px w-7 bg-current transition-all duration-300 group-hover:w-10" />
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              ))}
            </motion.div>
          </div>

          <div className="mt-8 flex shrink-0 flex-col gap-3 border-t border-[#081E6F]/15 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-2xl text-xs leading-5 text-[#1C1C1C]/55 md:text-sm">
              Don&apos;t see what you&apos;re looking for or don&apos;t know where to start?
            </p>
            <Link
              href="/contact"
              className="inline-flex min-h-11 w-fit items-center rounded-lg border border-[var(--og-blue)] px-4 text-sm font-semibold uppercase tracking-[0.12em] text-[var(--og-blue)] transition hover:bg-[var(--og-blue)] hover:text-white"
            >
              Contact us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
