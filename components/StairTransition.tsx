"use client";

import { animate, AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function StairTransition() {
  const pathname = usePathname();
  return (
    <AnimatePresence mode="wait">
      <div key={pathname}>
        <div className="h-screen w-screen fixed top-0 right-0 left-0 pointer-events-none z-40 flex">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              variants={{
                initial: { top: "0%" },
                animate: { top: `100%` },
                exit: { top: ["100%", "0%"] },
              }}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{
                duration: 0.4,
                ease: "easeInOut",
                delay: 0.1 * (6 - i - 1),
              }}
              className="w-full h-full relative bg-white"
            />
          ))}
        </div>
      </div>
    </AnimatePresence>
  );
}
