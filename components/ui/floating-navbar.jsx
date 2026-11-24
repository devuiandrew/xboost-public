"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";

export const FloatingNav = ({ className, children }) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(true);
  const [fixed, setFixed] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current - scrollYProgress.getPrevious();
      if (scrollYProgress.get() > 0.05) {
        setFixed(false);
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      } else {
        setFixed(true);
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: 0,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "inset-x-0 top-0 z-[5000] mx-auto flex max-w-full items-center justify-center border border-transparent bg-white",
          !fixed && "fixed",
          className,
        )}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
