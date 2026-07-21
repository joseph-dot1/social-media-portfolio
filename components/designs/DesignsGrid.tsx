"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { designs } from "@/content/designs";
import { fadeUp, VIEWPORT } from "@/lib/motion";

/** Masonry-style gallery via CSS columns — mixed aspect ratios flow naturally. */
export function DesignsGrid() {
  return (
    <div className="mx-auto max-w-6xl columns-1 gap-6 px-6 pb-24 sm:columns-2 md:px-10 md:pb-32 lg:columns-3 [&>*]:mb-6">
      {designs.map((d) => (
        <motion.figure
          key={d.src}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="group break-inside-avoid overflow-hidden rounded-2xl border border-tint bg-white shadow-sm"
        >
          <div className="overflow-hidden">
            <Image
              src={d.src}
              width={d.width}
              height={d.height}
              alt={`${d.client} — ${d.title}`}
              className="w-full transition-transform duration-500 ease-out group-hover:scale-[1.03]"
            />
          </div>
          <figcaption className="flex flex-col gap-0.5 p-4">
            <span className="text-sm font-semibold">{d.title}</span>
            <span className="text-xs font-medium text-mute/70">{d.client}</span>
          </figcaption>
        </motion.figure>
      ))}
    </div>
  );
}
