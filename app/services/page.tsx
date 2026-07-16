import type { Metadata } from "next";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/ui/PageHeader";
import { ServicesSection } from "@/components/services/ServicesSection";
import { ProcessSteps } from "@/components/process/ProcessSteps";
import { ClosingCta } from "@/components/cta/ClosingCta";

export const metadata: Metadata = {
  title: "Services — Eshenake Joseph",
  description:
    "Social media management, paid advertising, AI-powered content production, and AI web builds — run as systems, strategy through reporting.",
};

export default function ServicesPage() {
  return (
    <>
      <Nav />
      <main className="bg-white">
        <PageHeader
          eyebrow="Services"
          title="Systems, not just posting."
          intro="Whether you're a brand that needs growth or a team that needs a specialist, the work runs the same way: strategy, consistent execution, and reporting you can actually read."
        />
        <ServicesSection />
        <ProcessSteps />
        <ClosingCta />
      </main>
      <Footer />
    </>
  );
}
