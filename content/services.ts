export interface Service {
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    title: "Social Media Management & Growth",
    description:
      "Strategy, content calendars, and community management across TikTok, Instagram, Facebook, and YouTube — run as a system, not a posting schedule.",
  },
  {
    title: "Paid Social Advertising",
    description:
      "Meta and TikTok campaign setup and management, built around conversion goals — 30+ qualified leads generated on co-managed budgets.",
  },
  {
    title: "Content Production & AI-Powered Creative",
    description:
      "Scripting, video editing, captions, and AI-generated branded graphics — a content pipeline that ships consistently without a production team.",
  },
  {
    title: "AI Web Builds",
    description:
      "Landing pages and full websites built with AI-assisted development (Claude Code, Lovable, Base44) and shipped live on Vercel.",
  },
];

export const aiCapabilities = [
  {
    title: "AI content pipelines",
    description: "Claude-powered scripting, captioning, and repurposing that cuts production time in half.",
  },
  {
    title: "AI graphics at scale",
    description: "Branded flyers, thumbnails, and campaign creatives generated and refined with AI tools.",
  },
  {
    title: "AI-assisted web builds",
    description: "Websites and landing pages built with Claude Code and Lovable, live on Vercel.",
  },
  {
    title: "Workflow automation",
    description: "Zapier automations that connect content, reporting, and client communication.",
  },
];

export const processSteps = [
  {
    title: "Audit",
    description: "Where your brand stands today — content, competitors, and the gap nobody's filling.",
  },
  {
    title: "Strategy",
    description: "A positioning angle and content system built around your actual buyers.",
  },
  {
    title: "Execution",
    description: "Consistent production, publishing, community management, and paid campaigns.",
  },
  {
    title: "Reporting",
    description: "Numbers you can read in two minutes — what worked, what's next.",
  },
];
