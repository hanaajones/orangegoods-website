"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";

type AboutTimelineCard = {
  year: string;
  title: string;
  body: string;
};

export function AboutTimelineCards({ items }: { items: AboutTimelineCard[] }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.32 });
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      className="space-y-4"
      initial={false}
      animate={inView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: {
          transition: reduceMotion
            ? undefined
            : {
                delayChildren: 0.08,
                staggerChildren: 0.22,
              },
        },
      }}
    >
      {items.map((item) => (
        <motion.article
          key={item.title}
          className="relative overflow-hidden rounded-[1.75rem] border border-[#D8CCB7] bg-white p-5 pl-14 shadow-[4px_4px_0px_rgba(11,50,160,0.08)] md:p-6 md:pl-16"
          variants={{
            hidden: reduceMotion ? { opacity: 1 } : { opacity: 0, y: 56, scale: 0.94 },
            visible: {
              opacity: 1,
              y: 0,
              scale: 1,
              transition: {
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              },
            },
          }}
        >
          <div className="absolute left-5 top-[3.35rem] h-4 w-4 rounded-full border-2 border-[#0B32A0] bg-[#FF7F00] md:left-6 md:top-[3.7rem]" />
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#FF4200]">
            {item.year}
          </p>
          <h3
            className="mt-3 text-[1.65rem] uppercase leading-none text-[#0B32A0] md:text-[1.8rem]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {item.title}
          </h3>
          <p className="mt-3 max-w-xl text-base leading-7 text-[var(--og-muted)]">
            {item.body}
          </p>
        </motion.article>
      ))}
    </motion.div>
  );
}
