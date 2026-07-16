import type { Metric } from "./metrics";

export type Tier = "flagship" | "featured" | "compact";

export interface CaseImage {
  src: string;
  width: number;
  height: number;
  alt: string;
}

export interface CaseStudy {
  id: string;
  client: string;
  sector: string;
  timeframe: string;
  tier: Tier;
  /** One-line hook shown in card headers and compact cards. */
  hook: string;
  problem: string;
  action: string;
  results: Metric[];
  /** Analytics screenshot proof — placeholder box renders when absent. */
  image?: CaseImage;
  /** Client logo — placeholder box renders when absent. */
  logo?: CaseImage;
}

// Numbers sourced from client analytics screenshots (TikTok Studio /
// Facebook Insights, captured 2026-07-15) — fresher than the resume.
export const caseStudies: CaseStudy[] = [
  {
    id: "chibest",
    client: "Chibest Autos",
    sector: "Automotive · Lagos",
    timeframe: "Apr 2026 – present",
    tier: "flagship",
    hook: "Repositioned a car dealer as an educational authority — 735,800+ views in under 4 months.",
    problem:
      "Every competitor was selling cars the same way: polished visuals, zero substance. Nobody in the space was building actual buyer trust — and car buyers do their research before they ever walk in.",
    action:
      "I repositioned the brand around an untapped “educational automotive authority” angle — rebuilt the content calendar, scripting, and editing from scratch, ran a structured community-management protocol across Facebook, Instagram, and TikTok, and co-managed paid campaigns with a media specialist on ₦300,000+ of Meta and TikTok spend. Nearly a third of all TikTok views now arrive through search — buyers looking for answers and finding Chibest.",
    results: [
      { value: 735_800, suffix: "+", label: "video views in under 4 months", compact: true },
      { value: 70, suffix: "%", label: "TikTok follower growth (3,000 → 5,100+)" },
      { value: 30, suffix: "+", label: "qualified leads from paid campaigns" },
      { value: 41_900, suffix: "+", label: "likes", compact: true },
    ],
    image: {
      src: "/images/case-studies/chibest.png",
      width: 1200,
      height: 492,
      alt: "Chibest Autos TikTok Studio analytics: 735.8K video views, up 509.2K (224.7%), Apr 1 – Jul 14",
    },
    logo: {
      src: "/images/clients/chibest.png",
      width: 400,
      height: 398,
      alt: "Chibest Autos logo",
    },
  },
  {
    id: "mji",
    client: "My Journey Inc.",
    sector: "Nonprofit",
    timeframe: "Apr 2023 – present · 3+ year retainer",
    tier: "featured",
    hook: "From zero digital presence to 173,400+ views — and still on retainer 3 years later.",
    problem:
      "A nonprofit with real work to show and no digital presence at all — zero followers, zero reach, no way for supporters to find them.",
    action:
      "I've led their entire digital presence on retainer for over three years: strategy, content, community, AI-generated campaign creatives — and I'm now building their website with AI-assisted development tools. Page visits are up 139.6% and follower growth is up 248.8% period over period.",
    results: [
      { value: 173_400, suffix: "+", label: "Facebook views, from zero", compact: true },
      { value: 729, label: "Facebook followers built from scratch" },
      { value: 181, suffix: "+", label: "YouTube watch hours" },
    ],
    image: {
      src: "/images/case-studies/mji.png",
      width: 1200,
      height: 365,
      alt: "My Journey Inc. Facebook insights: 173,485 views, interactions up 70%, net follows up 126%",
    },
    logo: {
      src: "/images/clients/mji.png",
      width: 400,
      height: 195,
      alt: "My Journey Inc. logo",
    },
  },
  {
    id: "winx",
    client: "Winx Global",
    sector: "LPG / Energy · Port Harcourt",
    timeframe: "Oct 2025 – present",
    tier: "featured",
    hook: "37,300+ organic views for a gas delivery brand — 78% straight from TikTok search.",
    problem:
      "An energy brand in a category nobody scrolls social media to see, needing consistent presence and engagement without a paid budget to lean on.",
    action:
      "I run end-to-end social operations — content creation, graphic design, strategy, and weekly performance reporting — on a disciplined 3-posts-per-week cadence, engineered for search-driven organic reach: people searching “gas vendor near me” find Winx.",
    results: [
      { value: 37_300, suffix: "+", label: "organic video views in year one", compact: true },
      { value: 77, suffix: ".9%", label: "of TikTok traffic from search" },
      { value: 0, prefix: "₦", label: "ad spend — fully organic" },
    ],
    image: {
      src: "/images/case-studies/winx.png",
      width: 1200,
      height: 569,
      alt: "Winx Global TikTok Studio key metrics: 37.3K video views, 1.9K likes, Jul 2025 – Jul 2026",
    },
    logo: {
      src: "/images/clients/winx.png",
      width: 400,
      height: 400,
      alt: "Winx Global logo",
    },
  },
  {
    id: "richland",
    client: "Richland Schools",
    sector: "Education",
    timeframe: "Jul 2025 – Mar 2026",
    tier: "featured",
    hook: "A school's Facebook built from a standing start: 23,800+ views.",
    problem:
      "A school with no social presence and no in-house capacity to create one — no content pipeline, no one to shoot, edit, or publish.",
    action:
      "I owned the full content pipeline personally — sourcing, shooting, editing, captioning, publishing — turning school life into a consistent content engine parents actually engaged with.",
    results: [
      { value: 23_800, suffix: "+", label: "views from a standing start", compact: true },
      { value: 225, label: "Facebook followers, from zero" },
      { value: 1_216, label: "post engagements" },
    ],
    logo: {
      src: "/images/clients/richland.png",
      width: 200,
      height: 200,
      alt: "Richland Schools logo",
    },
  },
  {
    id: "a-new-song",
    client: "A New Song",
    sector: "YouTube channel",
    timeframe: "Feb 2025 – Oct 2025",
    tier: "compact",
    hook: "Found the format that outperformed the channel average 5–10x.",
    problem: "Videos plateaued at 100–200 views.",
    action:
      "Identified and tested a content format built around clarity — one idea per video, framed for search.",
    results: [{ value: 1_000, suffix: "+", label: "views per video vs a 100–200 average" }],
  },
  {
    id: "datafluent",
    client: "DataFluent Academy",
    sector: "Online education",
    timeframe: "May 2025 – Apr 2026",
    tier: "compact",
    hook: "Brought structure to a growing education brand's content operation.",
    problem: "Content, social, and design assets with no unified system behind them.",
    action:
      "Managed content creation, social media presence, and design assets under one structured operation.",
    results: [{ value: 12, label: "months running the full content operation" }],
  },
  {
    id: "hanging-garden",
    client: "Hanging Garden",
    sector: "Business community",
    timeframe: "Jun 2025 – present",
    tier: "compact",
    hook: "Content strategy and paid advertising plans for a private mentorship community.",
    problem: "A private community that needed to reach serious founders, not casual scrollers.",
    action:
      "Develop the content strategy and paid advertising plans that position the community to a business audience.",
    results: [{ value: 1, label: "ongoing strategy engagement" }],
    logo: {
      src: "/images/clients/hanging-garden.png",
      width: 400,
      height: 400,
      alt: "Hanging Garden logo",
    },
  },
];

export const flagship = caseStudies.find((c) => c.tier === "flagship")!;
export const featured = caseStudies.filter((c) => c.tier === "featured");
export const compact = caseStudies.filter((c) => c.tier === "compact");
