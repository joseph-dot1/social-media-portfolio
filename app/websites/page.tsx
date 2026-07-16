import type { Metadata } from "next";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/ui/PageHeader";
import { WebsitesGrid } from "@/components/websites/WebsitesGrid";
import { ClosingCta } from "@/components/cta/ClosingCta";

export const metadata: Metadata = {
  title: "Websites — Eshenake Joseph",
  description:
    "Websites built AI-first with Claude Code, Lovable, and Base44, shipped on Vercel — from landing pages to full sites.",
};

export default function WebsitesPage() {
  return (
    <>
      <Nav />
      <main className="bg-white">
        <PageHeader
          eyebrow="Websites"
          title="Sites I've designed and built."
          intro="I build websites AI-first — Claude Code, Lovable, Base44 — and ship them on Vercel. Fast to launch, fast to load, and built to the same performance discipline as this site."
        />
        <WebsitesGrid />
        <ClosingCta />
      </main>
      <Footer />
    </>
  );
}
