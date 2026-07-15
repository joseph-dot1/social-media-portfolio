"use client";

import { motion } from "framer-motion";
import { processSteps } from "@/content/services";
import { EASE, fadeUp, stagger, VIEWPORT } from "@/lib/motion";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function ProcessSteps() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto flex max-w-6xl flex-col gap-14 px-6 md:px-10">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="flex flex-col gap-4"
        >
          <motion.div variants={fadeUp}>
            <Eyebrow>How working with me works</Eyebrow>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="max-w-2xl text-3xl font-bold tracking-tight md:text-[44px] md:leading-tight"
          >
            Four steps. No mystery.
          </motion.h2>
        </motion.div>

        <div className="relative">
          {/* Connector line draws in on desktop */}
          <motion.svg
            className="absolute left-0 right-0 top-5 hidden h-px w-full lg:block"
            viewBox="0 0 100 1"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <motion.line
              x1="0"
              y1="0.5"
              x2="100"
              y2="0.5"
              stroke="#1D4ED8"
              strokeOpacity="0.25"
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={VIEWPORT}
              transition={{ duration: 1.2, ease: EASE }}
            />
          </motion.svg>

          <motion.ol
            className="grid gap-10 lg:grid-cols-4"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
          >
            {processSteps.map((step, i) => (
              <motion.li key={step.title} variants={fadeUp} className="flex flex-col gap-3">
                <span className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-navy text-sm font-bold text-white">
                  {i + 1}
                </span>
                <h3 className="text-lg font-semibold">{step.title}</h3>
                <p className="text-sm leading-relaxed text-mute">{step.description}</p>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </div>
    </section>
  );
}
