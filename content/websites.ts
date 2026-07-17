import type { CaseImage } from "./case-studies";

export interface WebsiteProject {
  id: string;
  name: string;
  /** Live URL — omit while a build is unreleased. */
  url?: string;
  status: "live" | "in-progress";
  role: string;
  description: string;
  stack: string[];
  /** Site screenshot — placeholder box renders when absent. */
  image?: CaseImage;
}

// Web builds proving the "AI Web Builds" service. More entries land here
// as Eshenake supplies name + URL + role + screenshot for each.
export const websites: WebsiteProject[] = [
  {
    id: "portfolio",
    name: "This portfolio",
    url: "/",
    status: "live",
    role: "Designed & built end-to-end",
    description:
      "The site you're on — a performance-budgeted Next.js build with a scroll-driven 3D hero, built AI-first with Claude Code and shipped on Vercel. Under 1MB on mobile.",
    stack: ["Next.js", "Tailwind", "Framer Motion", "React Three Fiber", "Claude Code", "Vercel"],
    image: {
      src: "/images/websites/portfolio.jpg",
      width: 1200,
      height: 750,
      alt: "Eshenake Joseph portfolio homepage hero",
    },
  },
  {
    id: "mji-site",
    name: "My Journey Inc.",
    url: "https://mji-website-5mjy.vercel.app/",
    status: "live",
    role: "Led the build",
    description:
      "The nonprofit's first website — 650+ active readers across 5 chapters in Nigeria. Designed and developed AI-first as part of a 3+ year digital retainer.",
    stack: ["Next.js", "Claude Code", "Lovable", "Vercel"],
    image: {
      src: "/images/websites/mji-site.jpg",
      width: 1200,
      height: 750,
      alt: "My Journey Inc. homepage — Purpose isn't found. It's built.",
    },
  },
  {
    id: "bestpath",
    name: "BestPath",
    url: "https://bestpath-skill-app-gvwe.vercel.app/",
    status: "live",
    role: "Designed & built end-to-end",
    description:
      "A skill-learning web app: type any skill and get a personalized beginner-to-pro roadmap with verified resources, checkpoints, and insights from working professionals.",
    stack: ["Next.js", "Claude Code", "Vercel"],
    image: {
      src: "/images/websites/bestpath.jpg",
      width: 1200,
      height: 750,
      alt: "BestPath homepage — Every skill has a best path.",
    },
  },
];
