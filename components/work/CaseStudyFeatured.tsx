"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { CaseStudy } from "@/content/case-studies";
import { fadeUp, stagger, VIEWPORT } from "@/lib/motion";
import { Counter } from "@/components/metrics/Counter";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { PlaceholderBox } from "@/components/ui/PlaceholderBox";

/** Alternating two-column deep block for featured case studies. */
export function CaseStudyFeatured({
  study,
  flip = false,
}: {
  study: CaseStudy;
  flip?: boolean;
}) {
  return (
    <motion.article
      className="mx-auto grid max-w-6xl items-center gap-10 px-6 md:px-10 lg:grid-cols-2 lg:gap-16"
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
    >
      <motion.div
        variants={fadeUp}
        className={flip ? "lg:order-2" : undefined}
      >
        {study.image ? (
          <div className="group overflow-hidden rounded-2xl border border-tint shadow-lg shadow-navy/5">
            <Image
              src={study.image.src}
              width={study.image.width}
              height={study.image.height}
              alt={study.image.alt}
              className="w-full transition-transform duration-500 ease-out group-hover:scale-[1.03]"
            />
          </div>
        ) : (
          <PlaceholderBox
            label={`${study.client} analytics screenshot`}
            className="aspect-[4/3] w-full"
          />
        )}
      </motion.div>

      <div className={`flex flex-col gap-5 ${flip ? "lg:order-1" : ""}`}>
        <motion.div variants={fadeUp} className="flex items-center gap-3">
          {study.logo && (
            <Image
              src={study.logo.src}
              width={40}
              height={40}
              alt={study.logo.alt}
              className="h-10 w-10 rounded-lg border border-tint object-contain"
            />
          )}
          <Eyebrow>Case study — {study.client}</Eyebrow>
        </motion.div>
        <motion.h3
          variants={fadeUp}
          className="text-2xl font-bold tracking-tight md:text-[28px] md:leading-snug"
        >
          {study.hook}
        </motion.h3>
        <motion.p variants={fadeUp} className="text-xs font-medium text-mute/70">
          {study.sector} · {study.timeframe}
        </motion.p>
        <motion.p variants={fadeUp} className="leading-relaxed text-mute">
          <span className="font-semibold text-ink">Problem — </span>
          {study.problem}
        </motion.p>
        <motion.p variants={fadeUp} className="leading-relaxed text-mute">
          <span className="font-semibold text-ink">What I did — </span>
          {study.action}
        </motion.p>
        <motion.div
          variants={fadeUp}
          className="mt-2 flex flex-wrap gap-x-10 gap-y-6"
        >
          {study.results.map((r) => (
            <div key={r.label} className="flex flex-col gap-1">
              <Counter
                value={r.value}
                prefix={r.prefix}
                suffix={r.suffix}
                compact={r.compact}
                className="text-3xl font-semibold tracking-tight text-orange md:text-4xl"
              />
              <span className="max-w-[24ch] text-xs font-medium text-mute">
                {r.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.article>
  );
}
