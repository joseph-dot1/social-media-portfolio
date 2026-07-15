"use client";

import { motion } from "framer-motion";
import { usePersona } from "@/lib/persona";
import { site } from "@/content/site";
import { fadeUp, stagger, VIEWPORT } from "@/lib/motion";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { PlaceholderBox } from "@/components/ui/PlaceholderBox";

export function About() {
  const { persona } = usePersona();
  const closing =
    persona === "brand" ? site.about.closingBrand : site.about.closingRecruiter;

  return (
    <section id="about" className="scroll-mt-24 bg-white py-24 md:py-32">
      <motion.div
        className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:px-10 lg:grid-cols-[380px_1fr] lg:gap-20"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
      >
        <motion.div variants={fadeUp}>
          <PlaceholderBox label="Headshot" className="aspect-[4/5] w-full max-w-sm" />
        </motion.div>
        <div className="flex flex-col gap-5">
          <motion.div variants={fadeUp}>
            <Eyebrow>About</Eyebrow>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="text-3xl font-bold tracking-tight md:text-[44px] md:leading-tight"
          >
            {site.name}
          </motion.h2>
          <motion.p variants={fadeUp} className="max-w-2xl leading-relaxed text-mute">
            {site.about.body}
          </motion.p>
          <motion.p variants={fadeUp} className="font-medium text-ink">
            {closing}
          </motion.p>
          <motion.ul variants={fadeUp} className="mt-2 flex flex-wrap gap-2">
            {site.about.tools.map((tool) => (
              <li
                key={tool}
                className="rounded-full bg-tint px-3.5 py-1.5 text-xs font-semibold text-blue"
              >
                {tool}
              </li>
            ))}
          </motion.ul>
        </div>
      </motion.div>
    </section>
  );
}
