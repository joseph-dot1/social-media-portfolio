"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger, VIEWPORT } from "@/lib/motion";
import { Eyebrow } from "./Eyebrow";

/** Standard header for interior pages — white, eyebrow + title + intro. */
export function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <motion.header
      className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 pb-16 pt-36 md:px-10 md:pb-20 md:pt-44"
      variants={stagger}
      initial="hidden"
      animate="visible"
      viewport={VIEWPORT}
    >
      <motion.div variants={fadeUp}>
        <Eyebrow>{eyebrow}</Eyebrow>
      </motion.div>
      <motion.h1
        variants={fadeUp}
        className="max-w-3xl text-4xl font-bold leading-tight tracking-tight md:text-[52px]"
      >
        {title}
      </motion.h1>
      {intro && (
        <motion.p variants={fadeUp} className="max-w-2xl text-lg leading-relaxed text-mute">
          {intro}
        </motion.p>
      )}
    </motion.header>
  );
}
