"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { usePersona } from "@/lib/persona";
import { site } from "@/content/site";

const LINKS = [
  { href: "/work", label: "Work" },
  { href: "/websites", label: "Websites" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  const { persona } = usePersona();
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 40));

  // Transparent-over-navy only applies on the home hero; interior pages
  // are white, so the nav is always solid there.
  const solid = scrolled || open || pathname !== "/";

  const cta =
    persona === "brand" ? (
      <a
        href={site.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full bg-orange px-5 py-2.5 text-sm font-semibold text-white transition-transform duration-200 hover:scale-[1.03]"
      >
        WhatsApp me
      </a>
    ) : (
      <a
        href={site.resumePath}
        download
        className="rounded-full bg-orange px-5 py-2.5 text-sm font-semibold text-white transition-transform duration-200 hover:scale-[1.03]"
      >
        Download resume
      </a>
    );

  return (
    <motion.header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid ? "bg-white/90 shadow-sm shadow-navy/5 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
        <Link
          href="/"
          className={`text-base font-bold tracking-tight transition-colors duration-300 ${
            solid ? "text-navy" : "text-white"
          }`}
        >
          {site.name}
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => {
            const active = pathname === l.href || pathname.startsWith(l.href + "/");
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`text-sm font-semibold transition-colors duration-300 ${
                  solid
                    ? active
                      ? "text-navy underline decoration-orange decoration-2 underline-offset-8"
                      : "text-mute hover:text-navy"
                    : "text-blue-100 hover:text-white"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
          {cta}
        </div>

        <div className="flex items-center gap-3 md:hidden">
          {cta}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className={`flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-300 ${
              solid ? "text-navy" : "text-white"
            }`}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              {open ? (
                <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              ) : (
                <path d="M2 5h16M2 10h16M2 15h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <div className="flex flex-col gap-1 border-t border-tint bg-white px-6 pb-6 pt-3 md:hidden">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-2 py-3 text-base font-semibold text-ink hover:bg-tint"
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </motion.header>
  );
}
