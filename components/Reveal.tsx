"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function Reveal({
  children,
  className,
  yOffset = 20,
}: {
  children: React.ReactNode;
  className?: string;
  yOffset?: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 1, y: yOffset }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 1, y: yOffset }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
