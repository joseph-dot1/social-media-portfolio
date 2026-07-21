"use client";

import { usePersona, type Persona } from "@/lib/persona";
import { motion } from "framer-motion";

const OPTIONS: { value: Persona; label: string }[] = [
  { value: "brand", label: "I need growth for my brand" },
  { value: "recruiter", label: "I'm hiring for a role" },
];

export function PersonaToggle() {
  const { persona, setPersona } = usePersona();

  return (
    <div
      className="inline-flex relative rounded-full border border-white/20 bg-white/5 p-1.5 backdrop-blur-md shadow-xl shadow-black/10"
      role="group"
      aria-label="Choose how you're evaluating me"
    >
      {OPTIONS.map((opt) => {
        const isActive = persona === opt.value;
        return (
          <button
            key={opt.value}
            type="button"
            onClick={() => setPersona(opt.value)}
            aria-pressed={isActive}
            className={`relative rounded-full px-5 py-2.5 text-sm font-semibold transition-colors duration-300 ${
              isActive
                ? "text-navy"
                : "text-blue-100/80 hover:text-white"
            }`}
          >
            {isActive && (
              <motion.div
                layoutId="persona-active-pill"
                className="absolute inset-0 rounded-full bg-white shadow-sm"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <span className="relative z-10">{opt.label}</span>
          </button>
        );
      })}
    </div>
  );
}
