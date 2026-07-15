import type { Metric } from "./metrics";

export type Tier = "flagship" | "featured" | "compact";

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
  /** True until the client's analytics screenshot is uploaded. */
  screenshotPending?: boolean;
}

export const caseStudies: CaseStudy[] = [
  {
    id: "chibest",
    client: "Chibest Autos",
    sector: "Automotive · Lagos",
    timeframe: "Apr 2026 – present",
    tier: "flagship",
    hook: "Repositioned a car dealer as an educational authority — 604,300+ views.",
    problem:
      "Every competitor was selling cars the same way: polished visuals, zero substance. Nobody in the space was building actual buyer trust — and car buyers do their research before they ever walk in.",
    action:
      "I repositioned the brand around an untapped “educational automotive authority” angle — rebuilt the content calendar, scripting, and editing from scratch, ran a structured community-management protocol across Facebook, Instagram, and TikTok, and co-managed paid campaigns with a media specialist on ₦300,000+ of Meta and TikTok spend.",
    results: [
      { value: 604_300, suffix: "+", label: "video views" },
      { value: 50, suffix: "%", label: "TikTok follower growth (3,000 → 4,500+)" },
      { value: 30, suffix: "+", label: "qualified leads from paid campaigns" },
      { value: 24_300, suffix: "+", label: "profile visits" },
    ],
    screenshotPending: true,
  },
  {
    id: "mji",
    client: "My Journey Inc.",
    sector: "Nonprofit",
    timeframe: "Apr 2023 – present · 3+ year retainer",
    tier: "featured",
    hook: "From zero digital presence to 165,600+ views — and still on retainer 3 years later.",
    problem:
      "A nonprofit with real work to show and no digital presence at all — zero followers, zero reach, no way for supporters to find them.",
    action:
      "I've led their entire digital presence on retainer for over three years: strategy, content, community, AI-generated campaign creatives — and I'm now building their website with AI-assisted development tools.",
    results: [
      { value: 165_600, suffix: "+", label: "Facebook views, from zero" },
      { value: 740, label: "Facebook followers built from scratch" },
      { value: 181, suffix: "+", label: "YouTube watch hours" },
    ],
    screenshotPending: true,
  },
  {
    id: "winx",
    client: "Winx Global",
    sector: "LPG / Energy",
    timeframe: "Oct 2025 – present",
    tier: "featured",
    hook: "Real organic traction in 60 days — on zero ad spend.",
    problem:
      "An energy brand in a category nobody scrolls social media to see, needing consistent presence and engagement without a paid budget to lean on.",
    action:
      "I run end-to-end social operations — content creation, graphic design, strategy, and weekly performance reporting — on a disciplined 3-posts-per-week cadence, engineered for organic reach.",
    results: [
      { value: 1_576, label: "TikTok likes in the first 2 months" },
      { value: 0, prefix: "₦", label: "ad spend — fully organic" },
      { value: 3, label: "posts per week, every week" },
    ],
    screenshotPending: true,
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
      { value: 23_800, suffix: "+", label: "views from a standing start" },
      { value: 225, label: "Facebook followers, from zero" },
      { value: 1_216, label: "post engagements" },
    ],
    screenshotPending: true,
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
  },
];

export const flagship = caseStudies.find((c) => c.tier === "flagship")!;
export const featured = caseStudies.filter((c) => c.tier === "featured");
export const compact = caseStudies.filter((c) => c.tier === "compact");
