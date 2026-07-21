export type MotionProfile = "full" | "calm";

export const site = {
  name: "Eshenake Joseph",
  firstName: "Joseph",
  handle: "@socialmediajoe_",
  role: "Social Media Growth Specialist",
  location: "Warri, Nigeria",
  email: "ofudjejoseph@gmail.com",
  whatsappDisplay: "+234 913 484 5350",
  whatsappUrl:
    "https://wa.me/2349134845350?text=" +
    encodeURIComponent(
      "Hi Joseph, I found your portfolio and I'd like to talk about growing my brand."
    ),
  instagram: "https://www.instagram.com/socialmediajoe_/",
  tiktok: "https://www.tiktok.com/@socialmediajoe_",
  linkedin: "https://www.linkedin.com/in/eshenakejoseph",
  resumePath: "/resume.pdf",

  // Flip to "calm" to preview the reduced choreography site-wide.
  // Viewports under 1024px are always forced to "calm".
  motionProfile: "full" as MotionProfile,

  hero: {
    headline: "I turn attention into measurable growth.",
    sublineBrand:
      "Social media growth and AI-powered marketing for brands that want numbers, not noise.",
    sublineRecruiter:
      "Social media manager and content strategist with 7 brands grown and 900,000+ organic views, open to full-time roles.",
  },

  about: {
    body: "I'm a social media manager and content strategist based in Warri, Nigeria, working with automotive, education, energy, and nonprofit brands for over three years. My edge is systems: content calendars that actually ship, community protocols that turn viewers into buyers, and AI tooling such as Claude, Lovable, and Zapier that lets one person operate like a full digital department, from strategy through execution and reporting.",
    closingBrand:
      "Currently taking on new brand engagements. Most clients start with a WhatsApp conversation.",
    closingRecruiter:
      "Open to full-time remote roles, in Nigeria or internationally.",
    tools: [
      "Meta Ads Manager",
      "TikTok Studio & Ads",
      "YouTube Studio",
      "Metricool",
      "Canva",
      "CapCut",
      "Claude & Claude Code",
      "Lovable",
      "Zapier",
      "Vercel",
    ],
  },
};
