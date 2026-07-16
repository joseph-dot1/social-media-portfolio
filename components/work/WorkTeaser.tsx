"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { featured } from "@/content/case-studies";
import { formatMetric } from "@/content/metrics";
import { fadeUp, stagger, VIEWPORT } from "@/lib/motion";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { PlaceholderBox } from "@/components/ui/PlaceholderBox";

/** Home-page teaser: featured clients as cards that route to /work. */
export function WorkTeaser() {
  return (
    <section className="bg-white pb-24 md:pb-32">
      <motion.div
        className="mx-auto flex max-w-6xl flex-col gap-10 px-6 md:px-10"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
      >
        <motion.div variants={fadeUp} className="flex flex-wrap items-end justify-between gap-4">
          <div className="flex flex-col gap-3">
            <Eyebrow>More client results</Eyebrow>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Six more brands, same playbook.
            </h2>
          </div>
          <Link
            href="/work"
            className="rounded-full border border-blue/30 px-6 py-3 text-sm font-semibold text-blue transition-colors duration-200 hover:bg-tint"
          >
            All case studies →
          </Link>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3 md:gap-8">
          {featured.map((study) => (
            <motion.div key={study.id} variants={fadeUp}>
              <Link
                href="/work"
                className="group flex h-full flex-col gap-4 rounded-2xl border border-tint bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:border-blue/25 hover:shadow-lg hover:shadow-blue/5"
              >
                {study.logo ? (
                  <Image
                    src={study.logo.src}
                    width={48}
                    height={48}
                    alt={study.logo.alt}
                    className="h-12 w-12 rounded-xl border border-tint object-contain"
                  />
                ) : (
                  <PlaceholderBox label={`${study.client} logo`} className="h-12 w-12 rounded-xl" />
                )}
                <div>
                  <h3 className="font-semibold transition-colors duration-200 group-hover:text-blue">
                    {study.client}
                  </h3>
                  <p className="text-xs font-medium text-mute/70">{study.sector}</p>
                </div>
                <p className="text-sm leading-relaxed text-mute">{study.hook}</p>
                <p className="mt-auto pt-2 text-2xl font-semibold tracking-tight text-orange">
                  {formatMetric(study.results[0])}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
