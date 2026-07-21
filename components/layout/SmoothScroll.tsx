"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/**
 * Lenis inertia scrolling — the single biggest contributor to the
 * "expensive" feel on reference portfolios. Desktop only, and never for
 * reduced-motion users; mobile keeps native scroll (calm-mobile rule).
 */
export function SmoothScroll() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const wide = window.matchMedia("(min-width: 1024px)").matches;
    if (reduced || !wide) return;

    const lenis = new Lenis({ lerp: 0.1 });
    let raf = requestAnimationFrame(function tick(time) {
      lenis.raf(time);
      raf = requestAnimationFrame(tick);
    });

    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);

  return null;
}
