"use client";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function AnimationPage({ children }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <div key={pathname}>
        <motion.div className="w-screen h-screen fixed top-0 left-0 bg-black z-40" initial={{ opacity: 1 }} animate={{ opacity: 0 }} exit={{ opacity: 1 }} transition={{ duration: 0.5, ease: "easeOut" }} style={{ pointerEvents: "none" }} />

        <motion.div key="content" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0, ease: "easeOut" }}>
          {children}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
