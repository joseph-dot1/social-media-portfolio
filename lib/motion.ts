import type { Variants } from "framer-motion";

/** One easing curve site-wide. */
export const EASE = [0.22, 1, 0.36, 1] as const;

export const DURATION = {
  reveal: 0.6,
  counter: 1.4,
  hover: 0.2,
} as const;

/** Standard in-view trigger: fire once, ~30% visible. */
export const VIEWPORT = { once: true, amount: 0.3 } as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.reveal, ease: EASE },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: DURATION.reveal, ease: EASE } },
};

/** Parent container that staggers its fadeUp children by 90ms. */
export const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};
