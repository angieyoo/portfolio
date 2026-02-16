"use client";

import { motion } from "framer-motion";

export default function Page() {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Data Tables
      </motion.div>
    </main>
  );
}
