import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 text-sm text-blue-200 md:flex-row md:items-center md:px-10">
        <div>
          <span className="font-semibold text-white">{site.name}</span>
          <span className="block text-blue-200/70">
            {site.role} · {site.location}
          </span>
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
