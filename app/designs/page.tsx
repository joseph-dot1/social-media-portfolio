import type { Metadata } from "next";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/ui/PageHeader";
import { DesignsGrid } from "@/components/designs/DesignsGrid";
import { ClosingCta } from "@/components/cta/ClosingCta";

export const metadata: Metadata = {
  title: "Designs — Eshenake Joseph",
  description:
    "AI-generated brand creatives — campaign flyers, brand identity boards, and thumbnails produced for real client campaigns.",
};

export default function DesignsPage() {
  return (
    <>
      <Nav />
      <main className="bg-white">
        <PageHeader
          eyebrow="Designs"
          title="AI-generated creative, shipped to real campaigns."
          intro="Flyers, campaign visuals, brand boards, and thumbnails — produced with AI tools, refined by hand, and posted on real client accounts."
        />
        <DesignsGrid />
        <ClosingCta />
      </main>
      <Footer />
    </>
  );
}
