"use client";

import { motion } from "framer-motion";

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{
        delay: 2,
        duration: 1,
      }}
      className="fixed inset-0 bg-black z-[999] flex items-center justify-center pointer-events-none"
    >
      <h1 className="text-5xl md:text-7xl font-black text-lime-400">
        LIDO
      </h1>
    </motion.div>
  );
}