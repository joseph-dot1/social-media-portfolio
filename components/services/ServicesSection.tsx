"use client";

import { motion } from "framer-motion";
import { services, aiCapabilities } from "@/content/services";
import { fadeUp, stagger, VIEWPORT } from "@/lib/motion";
import { Eyebrow } from "@/components/ui/Eyebrow";

/**
 * Written once, read twice: brands see services, recruiters see skills —
 * the copy never has to hedge because results-language serves both.
 */
export function ServicesSection() {
  return (
    <section id="services" className="scroll-mt-24 bg-tint py-24 md:py-32">
      <div className="mx-auto flex max-w-6xl flex-col gap-14 px-6 md:px-10">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="flex flex-col gap-4"
        >
          <motion.div variants={fadeUp}>
            <Eyebrow>What I do</Eyebrow>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="max-w-2xl text-3xl font-bold tracking-tight md:text-[44px] md:leading-tight"
          >
            Every service runs as a system — strategy through reporting.
          </motion.h2>
        </motion.div>

        <motion.div
          className="grid gap-6 md:grid-cols-2 md:gap-8"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
        >
          {services.map((s) => (
            <motion.div
              key={s.title}
              variants={fadeUp}
              className="group flex flex-col gap-3 rounded-2xl bg-white p-8 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue/5"
            >
              <h3 className="text-xl font-semibold transition-colors duration-200 group-hover:text-blue">
                {s.title}
              </h3>
              <p className="leading-relaxed text-mute">{s.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="flex flex-col gap-8 rounded-2xl bg-navy p-8 md:p-12"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
        >
          <motion.h3 variants={fadeUp} className="text-xl font-semibold text-white">
            AI in my workflow
          </motion.h3>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {aiCapabilities.map((c) => (
              <motion.div key={c.title} variants={fadeUp} className="flex flex-col gap-2">
                <span className="font-semibold text-blue-200">{c.title}</span>
                <span className="text-sm leading-relaxed text-blue-100/70">
                  {c.description}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
