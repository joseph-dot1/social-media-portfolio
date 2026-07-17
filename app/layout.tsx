import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { PersonaProvider } from "@/lib/persona";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { site } from "@/content/site";
import { SITE_URL } from "@/lib/site-url";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: `${site.name} — Social Media Growth Specialist`,
  description:
    "Social media growth and AI-powered marketing. 900,000+ organic views generated across 7 brands — automotive, education, energy, and nonprofit.",
  openGraph: {
    title: `${site.name} — Social Media Growth Specialist`,
    description:
      "Client results with real numbers: 900,000+ organic views, 30+ qualified leads, 7 brands grown.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#1e3a8a",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body>
        <SmoothScroll />
        <ScrollProgress />
        <PersonaProvider>{children}</PersonaProvider>
        <Analytics />
      </body>
    </html>
  );
}
