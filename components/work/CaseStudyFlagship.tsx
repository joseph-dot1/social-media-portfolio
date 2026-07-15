"use client";

import { useRef, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { flagship } from "@/content/case-studies";
import { fadeUp, stagger, VIEWPORT } from "@/lib/motion";
import { Counter } from "@/components/metrics/Counter";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { PlaceholderBox } from "@/components/ui/PlaceholderBox";

const PHASES = ["The problem", "What I did", "The results"] as const;

function ResultsGrid() {
  return (
    <div className="grid grid-cols-2 gap-x-8 gap-y-8">
      {flagship.results.map((r) => (
        <div key={r.label} className="flex flex-col gap-1.5">
          <Counter
            value={r.value}
            prefix={r.prefix}
            suffix={r.suffix}
            className="text-4xl font-semibold tracking-tight text-orange md:text-5xl"
          />
          <span className="text-sm font-medium text-mute">{r.label}</span>
        </div>
      ))}
    </div>
  );
}

function PinnedPanel({
  progress,
  range,
  children,
}: {
  progress: MotionValue<number>;
  range: [number, number, number, number];
  children: React.ReactNode;
}) {
  const opacity = useTransform(progress, range, [0, 1, 1, 0]);
  const y = useTransform(progress, range, [32, 0, 0, -32]);
  return (
    <motion.div
      className="absolute inset-0 flex items-center"
      style={{ opacity, y }}
    >
      {children}
    </motion.div>
  );
}

/** Desktop: section pins while Problem → Action → Results sequence through. */
function PinnedNarrative() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const [active, setActive] = useState(0);
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setActive(v < 0.33 ? 0 : v < 0.66 ? 1 : 2);
  });

  const ranges: [number, number, number, number][] = [
    [0, 0.02, 0.26, 0.34],
    [0.32, 0.4, 0.6, 0.68],
    [0.66, 0.74, 1, 1],
  ];

  return (
    <div ref={ref} className="relative h-[280vh]">
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-[200px_1fr] gap-16 px-10">
          {/* Progress rail */}
          <div className="flex flex-col justify-center gap-8">
            <Eyebrow>Case study — {flagship.client}</Eyebrow>
            {PHASES.map((phase, i) => (
              <div key={phase} className="flex items-center gap-3">
                <div
                  className={`h-2 w-2 rounded-full transition-colors duration-300 ${
                    active === i ? "bg-orange" : "bg-blue/25"
                  }`}
                />
                <span
                  className={`text-sm font-semibold transition-colors duration-300 ${
                    active === i ? "text-ink" : "text-mute/60"
                  }`}
                >
                  {phase}
                </span>
              </div>
            ))}
            <p className="text-xs font-medium text-mute/70">
              {flagship.sector} · {flagship.timeframe}
            </p>
          </div>

          {/* Panels */}
          <div className="relative h-[420px]">
            <PinnedPanel progress={scrollYProgress} range={ranges[0]}>
              <div className="max-w-2xl">
                <h3 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">
                  Everyone was selling. Nobody was teaching.
                </h3>
                <p className="text-lg leading-relaxed text-mute">{flagship.problem}</p>
              </div>
            </PinnedPanel>
            <PinnedPanel progress={scrollYProgress} range={ranges[1]}>
              <div className="max-w-2xl">
                <h3 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">
                  Reposition as the educational authority.
                </h3>
                <p className="text-lg leading-relaxed text-mute">{flagship.action}</p>
              </div>
            </PinnedPanel>
            <PinnedPanel progress={scrollYProgress} range={ranges[2]}>
              <div className="grid w-full grid-cols-2 items-center gap-12">
                <ResultsGrid />
                <PlaceholderBox
                  label={`${flagship.client} analytics screenshot`}
                  className="aspect-[4/3]"
                />
              </div>
            </PinnedPanel>
          </div>
        </div>
      </div>
    </div>
  );
}

/** Mobile / reduced-motion: the same three phases, stacked, no pinning. */
function StackedNarrative() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-16 px-6 md:px-10">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
        className="flex flex-col gap-3"
      >
        <motion.div variants={fadeUp}>
          <Eyebrow>Case study — {flagship.client}</Eyebrow>
        </motion.div>
        <motion.p variants={fadeUp} className="text-xs font-medium text-mute/70">
          {flagship.sector} · {flagship.timeframe}
        </motion.p>
      </motion.div>

      {[
        {
          phase: PHASES[0],
          title: "Everyone was selling. Nobody was teaching.",
          body: flagship.problem,
        },
        {
          phase: PHASES[1],
          title: "Reposition as the educational authority.",
          body: flagship.action,
        },
      ].map((block) => (
        <motion.div
          key={block.phase}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="flex max-w-2xl flex-col gap-4"
        >
          <span className="text-sm font-semibold text-blue">{block.phase}</span>
          <h3 className="text-2xl font-bold tracking-tight">{block.title}</h3>
          <p className="leading-relaxed text-mute">{block.body}</p>
        </motion.div>
      ))}

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
        className="flex flex-col gap-8"
      >
        <span className="text-sm font-semibold text-blue">{PHASES[2]}</span>
        <ResultsGrid />
        <PlaceholderBox
          label={`${flagship.client} analytics screenshot`}
          className="aspect-[4/3]"
        />
      </motion.div>
    </div>
  );
}

export function CaseStudyFlagship() {
  const reduced = useReducedMotion();
  return (
    <div id="work" className="scroll-mt-24 bg-white py-24 md:py-32 lg:py-0">
      <div className={reduced ? "" : "hidden lg:block"}>
        {!reduced && <PinnedNarrative />}
      </div>
      <div className={reduced ? "" : "lg:hidden"}>
        <StackedNarrative />
      </div>
    </div>
  );
}
