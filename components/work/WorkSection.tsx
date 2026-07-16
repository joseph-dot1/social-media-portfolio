"use client";

import { motion } from "framer-motion";
import { featured } from "@/content/case-studies";
import { fadeUp, VIEWPORT } from "@/lib/motion";
import { CaseStudyFlagship } from "./CaseStudyFlagship";
import { CaseStudyFeatured } from "./CaseStudyFeatured";
import { CaseStudyCompactGrid } from "./CaseStudyCompactGrid";

export function WorkSection() {
  return (
    <>
      <CaseStudyFlagship />
      <section className="flex flex-col gap-24 bg-white pb-24 md:gap-32 md:pb-32">
        {featured.map((study, i) => (
          <CaseStudyFeatured key={study.id} study={study} flip={i % 2 === 1} />
        ))}
        <div className="flex flex-col gap-10">
          <motion.h2
            className="mx-auto w-full max-w-6xl px-6 text-3xl font-bold tracking-tight md:px-10 md:text-4xl"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
          >
            More client work
          </motion.h2>
          <CaseStudyCompactGrid />
        </div>
      </section>
    </>
  );
}
