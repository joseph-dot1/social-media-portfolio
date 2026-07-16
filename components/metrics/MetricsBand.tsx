"use client";

import { motion } from "framer-motion";
import { heroMetrics } from "@/content/metrics";
import { fadeUp, stagger, VIEWPORT } from "@/lib/motion";
import { Counter } from "./Counter";

/**
 * The 3D scene's handoff target: the growth curve resolves into these
 * numbers. Navy continues from the hero so the transition reads as one scene.
 */
export function MetricsBand() {
  return (
    <section className="bg-navy pb-24 pt-8 md:pb-32">
      <motion.div
        className="mx-auto grid max-w-6xl grid-cols-2 gap-x-6 gap-y-12 px-6 md:px-10 lg:grid-cols-4"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
      >
        {heroMetrics.map((m) => (
          <motion.div key={m.label} variants={fadeUp} className="flex flex-col gap-2">
            <Counter
              value={m.value}
              prefix={m.prefix}
              suffix={m.suffix}
              compact={m.compact}
              className="text-5xl font-semibold tracking-tight text-orange md:text-7xl lg:text-[80px]"
            />
            <span className="max-w-[22ch] text-sm font-medium text-blue-200 md:text-base">
              {m.label}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
