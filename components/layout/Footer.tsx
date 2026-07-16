import Link from "next/link";
import { site } from "@/content/site";

const PAGES = [
  { href: "/work", label: "Work" },
  { href: "/websites", label: "Websites" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 text-sm text-blue-200 md:flex-row md:items-center md:px-10">
        <div>
          <span className="font-semibold text-white">{site.name}</span>
          <span className="block text-blue-200/70">
            {site.role} · {site.location}
          </span>
          <nav className="mt-3 flex flex-wrap gap-4 font-medium">
            {PAGES.map((p) => (
              <Link key={p.href} href={p.href} className="hover:text-white">
                {p.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex flex-wrap gap-6 font-medium">
          <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-white">
            Instagram
          </a>
          <a href={site.tiktok} target="_blank" rel="noopener noreferrer" className="hover:text-white">
            TikTok
          </a>
          <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white">
            LinkedIn
          </a>
          <a href={`mailto:${site.email}`} className="hover:text-white">
            {site.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
