"use client";

import { motion } from "framer-motion";
import { site } from "@/content/site";
import { fadeUp, VIEWPORT } from "@/lib/motion";

/**
 * Pricing filter without a pricing table — signals seriousness, keeps
 * the actual pricing conversation on WhatsApp.
 */
export function PricingTeaser() {
  return (
    <section className="bg-white px-6 pb-24 md:px-10 md:pb-32">
      <motion.div
        className="mx-auto flex max-w-6xl flex-col items-start gap-6 rounded-2xl bg-navy p-8 md:flex-row md:items-center md:justify-between md:p-12"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
      >
        <div className="flex flex-col gap-2 px-0 md:max-w-xl">
          <h2 className="text-2xl font-bold tracking-tight text-white md:text-3xl">
            Management packages start at ₦120,000/month.
          </h2>
          <p className="text-blue-200">
            From $200/month for international clients. Full pricing is a
            5-minute WhatsApp conversation — scope first, numbers second, no
            surprises.
          </p>
        </div>
        <a
          href={site.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 rounded-full bg-orange px-7 py-3.5 font-semibold text-white transition-transform duration-200 hover:scale-[1.03]"
        >
          Ask about pricing
        </a>
      </motion.div>
    </section>
  );
}
