"use client";

import { useEffect, useState } from "react";
import { site } from "@/content/site";

/**
 * The 3D scene mounts only on capable desktop devices:
 * viewport ≥ 1024px, no reduced-motion preference, ≥4 cores,
 * and the site motion profile set to "full".
 * Everyone else gets the static poster — by design, not as a failure mode.
 */
export function useSceneGate(): boolean {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (site.motionProfile !== "full") return;
    const wide = window.matchMedia("(min-width: 1024px)").matches;
    const noReduce = window.matchMedia(
      "(prefers-reduced-motion: no-preference)"
    ).matches;
    const capable = (navigator.hardwareConcurrency ?? 0) >= 4;
    setEnabled(wide && noReduce && capable);
  }, []);

  return enabled;
}
