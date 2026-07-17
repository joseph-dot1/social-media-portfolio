"use client";

import { motion } from "framer-motion";
import { videos } from "@/content/videos";
import { fadeUp, stagger, VIEWPORT } from "@/lib/motion";
import { Eyebrow } from "@/components/ui/Eyebrow";

const PLATFORM_STYLE: Record<string, string> = {
  TikTok: "bg-ink text-white",
  Instagram: "bg-blue text-white",
  Facebook: "bg-navy text-white",
};

/** Home strip linking out to top-performing client videos. */
export function TopContent() {
  return (
    <section className="bg-white pb-24 md:pb-32">
      <motion.div
        className="mx-auto flex max-w-6xl flex-col gap-10 px-6 md:px-10"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
      >
        <motion.div variants={fadeUp} className="flex flex-col gap-3">
          <Eyebrow>Top content</Eyebrow>
          <h2 className="max-w-xl text-3xl font-bold tracking-tight md:text-4xl">
            The content behind the numbers.
          </h2>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {videos.map((v) => (
            <motion.div key={v.id} variants={fadeUp}>
              <a
                href={v.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col gap-4 rounded-2xl border border-tint bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:border-blue/25 hover:shadow-lg hover:shadow-blue/5"
              >
                <span
                  className={`w-fit rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider ${PLATFORM_STYLE[v.platform]}`}
                >
                  {v.platform}
                </span>
                <div>
                  <h3 className="font-semibold transition-colors duration-200 group-hover:text-blue">
                    {v.client}
                  </h3>
                  {v.handle && (
                    <p className="text-xs font-medium text-mute/70">{v.handle}</p>
                  )}
                </div>
                <p className="text-sm leading-relaxed text-mute">{v.descriptor}</p>
                <span className="mt-auto pt-2 text-sm font-semibold text-orange transition-transform duration-200 group-hover:translate-x-1">
                  Watch →
                </span>
              </a>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
