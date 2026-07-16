"use client";

import { usePersona, type Persona } from "@/lib/persona";

const OPTIONS: { value: Persona; label: string }[] = [
  { value: "brand", label: "I need growth for my brand" },
  { value: "recruiter", label: "I'm hiring for a role" },
];

export function PersonaToggle() {
  const { persona, setPersona } = usePersona();

  return (
    <div
      className="inline-flex rounded-full border border-white/20 bg-white/10 p-1 backdrop-blur-sm"
      role="group"
      aria-label="Choose how you're evaluating me"
    >
      {OPTIONS.map((opt) => (
        <button
          key={opt.value}
          type="button"
          onClick={() => setPersona(opt.value)}
          aria-pressed={persona === opt.value}
          className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-200 ${
            persona === opt.value
              ? "bg-white text-navy"
              : "text-blue-100 hover:text-white"
          }`}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}
