"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";
import { DURATION } from "@/lib/motion";

/**
 * Animated count-up rendered as crisp HTML (never WebGL — numbers must be
 * sharp, selectable, and accessible). Fires once at ~40% in view.
 */
const compactFormat = new Intl.NumberFormat("en-US", {
  notation: "compact",
  maximumFractionDigits: 1,
});

export function Counter({
  value,
  prefix = "",
  suffix = "",
  compact = false,
  className = "",
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  compact?: boolean;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const reduced = useReducedMotion();
  const [display, setDisplay] = useState(reduced ? value : 0);

  useEffect(() => {
    if (!inView) return;
    if (reduced) {
      setDisplay(value);
      return;
    }
    const controls = animate(0, value, {
      duration: DURATION.counter,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, reduced, value]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {compact ? compactFormat.format(display) : display.toLocaleString("en-US")}
      {suffix}
    </span>
  );
}
