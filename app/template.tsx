"use client";

import { motion } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={false}
      animate={{ opacity: 1 }}
      style={{ opacity: 1, minHeight: "100vh" }}
    >
      {children}
    </motion.div>
  );
}
