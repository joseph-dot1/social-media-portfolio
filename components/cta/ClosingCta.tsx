"use client";

import { motion } from "framer-motion";
import { usePersona } from "@/lib/persona";
import { site } from "@/content/site";
import { fadeUp, stagger, VIEWPORT } from "@/lib/motion";

/**
 * Navy bookend. The persona's CTA pair is emphasized, but BOTH audiences'
 * options are always present here — nobody hits the end of the page without
 * their action one click away.
 */
export function ClosingCta() {
  const { persona } = usePersona();

  const brandPair = (emphasized: boolean) => (
    <div className="flex flex-col gap-3">
      <span className="text-sm font-semibold uppercase tracking-[0.08em] text-blue-200">
        For brands
      </span>
      <div className="flex flex-wrap gap-3">
        <a
          href={site.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`rounded-full px-7 py-3.5 font-semibold transition-transform duration-200 hover:scale-[1.03] ${
            emphasized
              ? "bg-orange text-white"
              : "border border-white/30 text-white hover:bg-white/10"
          }`}
        >
          WhatsApp me — {site.whatsappDisplay}
        </a>
      </div>
    </div>
  );

  const recruiterPair = (emphasized: boolean) => (
    <div className="flex flex-col gap-3">
      <span className="text-sm font-semibold uppercase tracking-[0.08em] text-blue-200">
        For recruiters
      </span>
      <div className="flex flex-wrap gap-3">
        <a
          href={site.resumePath}
          download
          className={`rounded-full px-7 py-3.5 font-semibold transition-transform duration-200 hover:scale-[1.03] ${
            emphasized
              ? "bg-orange text-white"
              : "border border-white/30 text-white hover:bg-white/10"
          }`}
        >
          Download resume
        </a>
        <a
          href={`mailto:${site.email}`}
          className="rounded-full border border-white/30 px-7 py-3.5 font-semibold text-white transition-colors duration-200 hover:bg-white/10"
        >
          Email me
        </a>
      </div>
    </div>
  );

  return (
    <section id="contact" className="scroll-mt-24 bg-navy py-24 md:py-32">
      <motion.div
        className="mx-auto flex max-w-6xl flex-col gap-12 px-6 md:px-10"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
      >
        <motion.h2
          variants={fadeUp}
          className="max-w-2xl text-3xl font-bold tracking-tight text-white md:text-5xl"
        >
          {persona === "brand"
            ? "Let's grow your brand."
            : "Let's talk about your team."}
        </motion.h2>
        <motion.div variants={fadeUp} className="flex flex-col gap-10 md:flex-row md:gap-20">
          {persona === "brand" ? (
            <>
              {brandPair(true)}
              {recruiterPair(false)}
            </>
          ) : (
            <>
              {recruiterPair(true)}
              {brandPair(false)}
            </>
          )}
        </motion.div>
      </motion.div>
    </section>
  );
}
