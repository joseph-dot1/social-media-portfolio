"use client";

import { motion } from "framer-motion";
import { compact } from "@/content/case-studies";
import { fadeUp, stagger, VIEWPORT } from "@/lib/motion";
import { PlaceholderBox } from "@/components/ui/PlaceholderBox";

export function CaseStudyCompactGrid() {
  return (
    <motion.div
      className="mx-auto grid max-w-6xl gap-6 px-6 md:grid-cols-3 md:gap-8 md:px-10"
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
    >
      {compact.map((study) => (
        <motion.article
          key={study.id}
          variants={fadeUp}
          className="group flex flex-col gap-4 rounded-2xl border border-tint bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:border-blue/25 hover:shadow-lg hover:shadow-blue/5"
        >
          <PlaceholderBox label={`${study.client} logo`} className="h-12 w-12 rounded-xl" />
          <div>
            <h3 className="font-semibold">{study.client}</h3>
            <p className="text-xs font-medium text-mute/70">
              {study.sector} · {study.timeframe}
            </p>
          </div>
          <p className="text-sm leading-relaxed text-mute">{study.hook}</p>
          <p className="mt-auto pt-2 text-sm">
            <span className="text-2xl font-semibold tracking-tight text-orange">
              {study.results[0].prefix}
              {study.results[0].value.toLocaleString("en-US")}
              {study.results[0].suffix}
            </span>
            <span className="block text-xs font-medium text-mute">
              {study.results[0].label}
            </span>
          </p>
        </motion.article>
      ))}
    </motion.div>
  );
}
