"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

export function GoodsUseCaseRotator({ words }: { words: string[] }) {
  const shouldReduceMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (shouldReduceMotion || words.length <= 1) return;

    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % words.length);
    }, 2100);

    return () => window.clearInterval(interval);
  }, [shouldReduceMotion, words.length]);

  if (!words.length) return null;

  return (
    <span className="relative inline-flex h-[1.05em] min-w-[8.2ch] items-center overflow-hidden text-[#FF7F00] md:translate-y-[0.04em]">
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={words[activeIndex]}
          initial={shouldReduceMotion ? false : { y: "85%", opacity: 0 }}
          animate={shouldReduceMotion ? { opacity: 1 } : { y: "0%", opacity: 1 }}
          exit={shouldReduceMotion ? { opacity: 0 } : { y: "-85%", opacity: 0 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.5,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="absolute inset-0 flex items-center whitespace-nowrap leading-none"
        >
          {words[activeIndex]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
