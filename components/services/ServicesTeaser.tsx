"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { services } from "@/content/services";
import { fadeUp, stagger, VIEWPORT } from "@/lib/motion";
import { Eyebrow } from "@/components/ui/Eyebrow";

/** Home-page strip: the four services as compact cards routing to /services. */
export function ServicesTeaser() {
  return (
    <section className="bg-tint py-24 md:py-32">
      <motion.div
        className="mx-auto flex max-w-6xl flex-col gap-10 px-6 md:px-10"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
      >
        <motion.div variants={fadeUp} className="flex flex-wrap items-end justify-between gap-4">
          <div className="flex flex-col gap-3">
            <Eyebrow>What I do</Eyebrow>
            <h2 className="max-w-xl text-3xl font-bold tracking-tight md:text-4xl">
              Growth, content, ads, and AI-built websites.
            </h2>
          </div>
          <Link
            href="/services"
            className="rounded-full border border-blue/30 px-6 py-3 text-sm font-semibold text-blue transition-colors duration-200 hover:bg-white"
          >
            Services & process →
          </Link>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <motion.div key={s.title} variants={fadeUp}>
              <Link
                href="/services"
                className="group flex h-full flex-col gap-2 rounded-2xl bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue/5"
              >
                <h3 className="font-semibold transition-colors duration-200 group-hover:text-blue">
                  {s.title}
                </h3>
                <p className="text-sm leading-relaxed text-mute">{s.description}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
