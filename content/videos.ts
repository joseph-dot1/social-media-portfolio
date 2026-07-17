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
    id: "chibest-tiktok-1",
    platform: "TikTok",
    client: "Chibest Autos",
    handle: "@chibestsautos",
    descriptor: "Educational auto content from the strategy that pulled 735K+ views in 4 months.",
    url: "https://www.tiktok.com/@chibestsautos/video/7634658882366770450",
  },
  {
    id: "chibest-tiktok-2",
    platform: "TikTok",
    client: "Chibest Autos",
    handle: "@chibestsautos",
    descriptor: "The “educational authority” angle in action — scripted, shot, and edited to convert.",
    url: "https://www.tiktok.com/@chibestsautos/video/7642070439153437959",
  },
  {
    id: "instagram-1",
    platform: "Instagram",
    client: "Client campaign",
    descriptor: "Campaign content produced end-to-end — scripting through publishing.",
    url: "https://www.instagram.com/p/DZ-WPjxNqif/",
  },
  {
    id: "facebook-1",
    platform: "Facebook",
    client: "Client campaign",
    descriptor: "Community-first content built for reach and engagement.",
    url: "https://web.facebook.com/share/r/17znWYmwf8/",
  },
];
