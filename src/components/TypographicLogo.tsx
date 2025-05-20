"use client";
import clsx from "clsx";
import { motion } from "framer-motion";
import { Cinzel, Gilda_Display } from "next/font/google";

const gildaDisplay = Gilda_Display({ subsets: ["latin"], weight: "400" });
const cinzel = Cinzel({ subsets: ["latin"], weight: "400" });

const TypographicLogo = () => {
  return (
    <div className="relative flex items-center justify-start select-none">
      <motion.h1
        className={clsx(
          "absolute z-10 rounded-sm bg-gray-50/80 p-0.5 text-base font-bold tracking-[0.3rem] whitespace-nowrap sm:bg-gray-50 lg:text-4xl lg:tracking-[0.5rem]",
          cinzel.className,
        )}
        initial={{ opacity: 0, x: 150 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5, bounce: 0 }}
      >
        Terrence J Chan
      </motion.h1>
      <motion.div
        aria-hidden
        className={clsx(
          "-z-10 text-[8rem] font-bold lg:text-[16rem]",
          gildaDisplay.className,
        )}
        initial={{ opacity: 0, x: -150 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.25, bounce: 0 }}
      >
        TJC
      </motion.div>
    </div>
  );
};

export default TypographicLogo;
