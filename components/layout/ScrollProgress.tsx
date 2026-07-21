"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/** Thin page-progress bar under the nav — scroll-linked, spring-smoothed. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 28, mass: 0.6 });

  return (
    <motion.div
      className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-blue"
      style={{ scaleX }}
      aria-hidden="true"
    />
  );
}
