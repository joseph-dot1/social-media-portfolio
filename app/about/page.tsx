import type { Metadata } from "next";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { About } from "@/components/about/About";
import { Testimonials } from "@/components/social/Testimonials";
import { ClosingCta } from "@/components/cta/ClosingCta";

export const metadata: Metadata = {
  title: "About | Eshenake Joseph",
  description:
    "Social media manager and content strategist in Warri, Nigeria with 3+ years, 7 brands, and an AI-first workflow. Open to full-time roles and freelance engagements.",
};

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main className="bg-white pt-16 md:pt-20">
        <About />
        <Testimonials />
        <ClosingCta />
      </main>
      <Footer />
    </>
  );
}
