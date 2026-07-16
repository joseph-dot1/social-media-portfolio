"use client";

import { motion } from "framer-motion";
import { site } from "@/content/site";
import { fadeUp, stagger, VIEWPORT } from "@/lib/motion";

const DETAILS = [
  { label: "WhatsApp", value: site.whatsappDisplay, href: site.whatsappUrl },
  { label: "Email", value: site.email, href: `mailto:${site.email}` },
  { label: "Instagram", value: site.handle, href: site.instagram },
  { label: "TikTok", value: site.handle, href: site.tiktok },
  { label: "LinkedIn", value: "in/eshenakejoseph", href: site.linkedin },
  { label: "Based in", value: `${site.location} · works remote worldwide` },
];

export function ContactDetails() {
  return (
    <motion.div
      className="mx-auto grid max-w-6xl gap-x-12 gap-y-8 px-6 pb-24 sm:grid-cols-2 md:px-10 md:pb-32 lg:grid-cols-3"
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
    >
      {DETAILS.map((d) => (
        <motion.div key={d.label} variants={fadeUp} className="flex flex-col gap-1">
          <span className="text-[13px] font-semibold uppercase tracking-[0.08em] text-blue">
            {d.label}
          </span>
          {d.href ? (
            <a
              href={d.href}
              target={d.href.startsWith("http") ? "_blank" : undefined}
              rel={d.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="text-lg font-semibold text-ink transition-colors duration-200 hover:text-blue"
            >
              {d.value}
            </a>
          ) : (
            <span className="text-lg font-semibold text-ink">{d.value}</span>
          )}
        </motion.div>
      ))}
    </motion.div>
  );
}
