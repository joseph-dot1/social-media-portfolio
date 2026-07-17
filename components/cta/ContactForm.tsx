"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { site } from "@/content/site";
import { fadeUp, stagger, VIEWPORT } from "@/lib/motion";

const inputClass =
  "w-full rounded-xl border border-blue/20 bg-white px-4 py-3 text-ink placeholder:text-mute/50 focus:border-blue focus:outline-none focus:ring-2 focus:ring-blue/20";

/**
 * No-backend intake form via formsubmit.co — plain HTML POST straight to
 * Eshenake's inbox. First-ever submission triggers a one-time activation
 * email from FormSubmit that he must click.
 */
export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [nextUrl, setNextUrl] = useState("");

  useEffect(() => {
    setSent(new URLSearchParams(window.location.search).get("sent") === "1");
    setNextUrl(`${window.location.origin}/contact?sent=1`);
  }, []);

  return (
    <motion.div
      className="mx-auto w-full max-w-6xl px-6 pb-24 md:px-10 md:pb-32"
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
    >
      <motion.div
        variants={fadeUp}
        className="rounded-2xl bg-tint p-8 md:p-12"
      >
        <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
          Or send the details now.
        </h2>
        <p className="mt-2 max-w-xl text-mute">
          Tell me what you're working with — I reply within a day.
        </p>

        {sent ? (
          <div className="mt-8 rounded-xl bg-white p-6 font-semibold text-blue">
            Message sent — I'll get back to you within a day. Talk soon. ✦
          </div>
        ) : (
          <form
            action={`https://formsubmit.co/${site.email}`}
            method="POST"
            className="mt-8 grid gap-5 md:grid-cols-2"
          >
            <input type="hidden" name="_subject" value="Portfolio contact form" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />
            <input type="hidden" name="_next" value={nextUrl} />

            <label className="flex flex-col gap-2">
              <span className="text-sm font-semibold">Your name</span>
              <input required name="name" placeholder="Full name" className={inputClass} />
            </label>
            <label className="flex flex-col gap-2">
              <span className="text-sm font-semibold">Email or WhatsApp</span>
              <input required name="contact" placeholder="How do I reach you?" className={inputClass} />
            </label>
            <label className="flex flex-col gap-2">
              <span className="text-sm font-semibold">I'm reaching out as</span>
              <select name="type" className={inputClass} defaultValue="A brand that needs growth">
                <option>A brand that needs growth</option>
                <option>A recruiter / hiring manager</option>
                <option>Something else</option>
              </select>
            </label>
            <label className="flex flex-col gap-2">
              <span className="text-sm font-semibold">Brand / company</span>
              <input name="company" placeholder="Optional" className={inputClass} />
            </label>
            <label className="flex flex-col gap-2 md:col-span-2">
              <span className="text-sm font-semibold">What do you need?</span>
              <textarea
                required
                name="message"
                rows={4}
                placeholder="A sentence or two is enough."
                className={inputClass}
              />
            </label>
            <div className="md:col-span-2">
              <button
                type="submit"
                className="rounded-full bg-orange px-8 py-3.5 font-semibold text-white transition-transform duration-200 hover:scale-[1.03]"
              >
                Send message
              </button>
            </div>
          </form>
        )}
      </motion.div>
    </motion.div>
  );
}
