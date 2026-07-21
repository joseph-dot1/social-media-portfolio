export interface VideoLink {
  id: string;
  platform: "TikTok" | "Instagram" | "Facebook";
  client: string;
  handle?: string;
  descriptor: string;
  url: string;
}

// Top-performing client content — proof of craft, linked not embedded
// (third-party embed scripts would blow the performance budget).
export const videos: VideoLink[] = [
  {
    id: "chibest-celebrity",
    platform: "TikTok",
    client: "Chibest Autos",
    handle: "@chibestsautos",
    descriptor:
      "A celebrity buys his car from Chibest, and the video passed 300K+ views.",
    url: "https://www.tiktok.com/@chibestsautos/video/7634658882366770450",
  },
  {
    id: "chibest-premium",
    platform: "TikTok",
    client: "Chibest Autos",
    handle: "@chibestsautos",
    descriptor:
      "Premium car showcase, scripted, shot, and edited to sell, not just to trend.",
    url: "https://www.tiktok.com/@chibestsautos/video/7642070439153437959",
  },
  {
    id: "celebration-church",
    platform: "Instagram",
    client: "Celebration Church Warri",
    descriptor: "Sermon excerpts cut for social: long-form teaching, short-form attention.",
    url: "https://www.instagram.com/p/DZ-WPjxNqif/",
  },
  {
    id: "outreach-film",
    platform: "Facebook",
    client: "Outreach film",
    descriptor: "Cinematic outreach video, edited end-to-end for emotional impact.",
    url: "https://web.facebook.com/share/r/17znWYmwf8/",
  },
];
