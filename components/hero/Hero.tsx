"use client";

import { useRef, useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { usePersona } from "@/lib/persona";
import { site } from "@/content/site";
import { SPRING } from "@/lib/motion";
import { HeroPoster } from "./HeroPoster";
import { PersonaToggle } from "./PersonaToggle";
import { useSceneGate } from "./useSceneGate";

// The 3D bundle loads behind the meaningful HTML, never blocking first paint.
const HeroScene = dynamic(() => import("./HeroScene"), { ssr: false });

export function Hero() {
  const { persona } = usePersona();
  const sceneEnabled = useSceneGate();
  const ref = useRef<HTMLElement>(null);

  // Desktop: 170vh section; the inner viewport pins while the scene forms.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const textOpacity = useTransform(scrollYProgress, [0, 0.35], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.35], [0, -40]);
  const sceneOpacity = useTransform(scrollYProgress, [0.55, 0.8], [1, 0]);

  // Once the handoff to the metrics band completes, unmount the canvas —
  // GPU cost drops to zero for the rest of the session.
  const [sceneDone, setSceneDone] = useState(false);
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    if (v > 0.85 && !sceneDone) setSceneDone(true);
  });

  const subline =
    persona === "brand" ? site.hero.sublineBrand : site.hero.sublineRecruiter;

  return (
    <section ref={ref} className="relative bg-navy lg:h-[170vh]" id="top">
      <div className="relative flex min-h-svh flex-col overflow-hidden lg:sticky lg:top-0 lg:h-screen">
        <HeroPoster />
        {sceneEnabled && !sceneDone && (
          <motion.div
            className="absolute inset-0 hidden lg:block"
            style={{ opacity: sceneOpacity }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <HeroScene />
          </motion.div>
        )}

        <motion.div
          className="relative mx-auto flex w-full max-w-6xl flex-1 items-center px-6 pb-16 pt-28 md:px-10 md:pb-20 md:pt-32"
          style={{ opacity: textOpacity, y: textY }}
        >
          <div className="grid w-full items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(320px,420px)] lg:gap-16">
            <div className="flex flex-col items-start gap-8">
              <motion.div
                initial={{ opacity: 0, y: 24, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={SPRING}
              >
                <PersonaToggle />
              </motion.div>

              <motion.h1
                className="max-w-3xl text-4xl font-bold leading-[1.08] tracking-tight text-white md:text-6xl lg:text-[64px]"
                initial={{ opacity: 0, y: 32, scale: 1.04 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ ...SPRING, delay: 0.1 }}
              >
                {site.hero.headline}
              </motion.h1>

              <motion.p
                key={persona}
                className="max-w-xl text-lg leading-relaxed text-blue-100 md:text-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...SPRING, delay: 0.22 }}
              >
                {subline}
              </motion.p>

              <motion.div
                className="flex flex-wrap items-center gap-4"
                initial={{ opacity: 0, y: 20, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ ...SPRING, delay: 0.34 }}
              >
                {persona === "brand" ? (
                  <a
                    href={site.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-orange px-7 py-3.5 text-base font-semibold text-white transition-transform duration-200 hover:scale-[1.03]"
                  >
                    WhatsApp me
                  </a>
                ) : (
                  <a
                    href={site.resumePath}
                    download
                    className="rounded-full bg-orange px-7 py-3.5 text-base font-semibold text-white transition-transform duration-200 hover:scale-[1.03]"
                  >
                    Download resume
                  </a>
                )}
                <a
                  href="#work"
                  className="rounded-full border border-white/30 px-7 py-3.5 text-base font-semibold text-white transition-colors duration-200 hover:bg-white/10"
                >
                  See the results
                </a>
              </motion.div>
            </div>

            <motion.div
              className="relative mx-auto w-full max-w-[340px] lg:max-w-none"
              initial={{ opacity: 0, x: 32, scale: 0.96 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ ...SPRING, delay: 0.18 }}
            >
              <div className="absolute -inset-5 rounded-[2rem] bg-orange/30 blur-2xl" />
              <div className="absolute -right-3 -top-3 h-24 w-24 rounded-full border border-white/30 bg-blue/30" />
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/20 bg-blue/20 p-2 shadow-2xl shadow-black/30">
                <Image
                  src="/images/headshot.jpg"
                  alt="Eshenake Joseph, social media growth specialist"
                  fill
                  priority
                  sizes="(min-width: 1024px) 420px, (min-width: 768px) 340px, 85vw"
                  className="rounded-[1.5rem] object-cover object-center"
                />
                <div className="absolute inset-x-2 bottom-2 rounded-b-[1.5rem] bg-gradient-to-t from-navy/85 via-navy/15 to-transparent px-5 pb-5 pt-16" />
                <div className="absolute bottom-6 left-7 right-7 flex items-center justify-between text-xs font-semibold uppercase tracking-[0.16em] text-white/90">
                  <span>Warri, Nigeria</span>
                  <span>AI-first</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="pointer-events-none absolute bottom-8 left-1/2 hidden -translate-x-1/2 lg:block"
          style={{ opacity: textOpacity }}
          aria-hidden="true"
        >
          <motion.div
            className="flex h-10 w-6 items-start justify-center rounded-full border border-white/30 p-1.5"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="h-2 w-1 rounded-full bg-white/60" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
