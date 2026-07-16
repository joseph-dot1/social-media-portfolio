"use client";

import { motion } from "framer-motion";
import { approvedTestimonials } from "@/content/testimonials";
import { fadeUp, stagger, VIEWPORT } from "@/lib/motion";
import { Eyebrow } from "@/components/ui/Eyebrow";

/**
 * Renders nothing until at least one quote has written approval from the
 * named person (flip `approved: true` in content/testimonials.ts).
 */
export function Testimonials() {
  if (approvedTestimonials.length === 0) return null;

  return (
    <section className="bg-tint py-24 md:py-32">
      <div className="mx-auto flex max-w-6xl flex-col gap-14 px-6 md:px-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
        >
          <Eyebrow>What clients say</Eyebrow>
        </motion.div>
        <motion.div
          className="grid gap-6 md:grid-cols-3 md:gap-8"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
        >
          {approvedTestimonials.map((t) => (
            <motion.blockquote
              key={t.name}
              variants={fadeUp}
              className="flex flex-col gap-6 rounded-2xl bg-white p-8"
            >
              <p className="leading-relaxed text-ink">“{t.quote}”</p>
              <footer className="mt-auto text-sm">
                <span className="font-semibold">{t.name}</span>
                <span className="block text-mute">
                  {t.role}, {t.company}
                </span>
              </footer>
            </motion.blockquote>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
