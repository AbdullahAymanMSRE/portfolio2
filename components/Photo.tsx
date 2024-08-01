"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Photo() {
  return (
    <div className="relative size-full">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 1.2, duration: 0.4, eas: "easeIn" },
        }}
      >
        {/* image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1.4, duration: 0.4, eas: "easeInOut" },
          }}
          className="absolute size-[298px] mix-blend-lighten xl:size-[450px]"
        >
          <Image
            src="/assets/photo.png"
            alt="Abdullah Ayman"
            className="translate-x-2.5 rounded-full object-contain"
            priority
            quality={100}
            fill
          />
        </motion.div>

        {/* circle  */}
        <motion.svg
          className="size-[300px] xl:size-[470px]"
          fill="transparent"
          viewBox="0 0 440 460"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="220"
            cy="220"
            r="215"
            stroke="#00ff99"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
}
