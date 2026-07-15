import { Nav } from "@/components/layout/Nav";
import { Hero } from "@/components/hero/Hero";
import { MetricsBand } from "@/components/metrics/MetricsBand";
import { WorkSection } from "@/components/work/WorkSection";
import { ServicesSection } from "@/components/services/ServicesSection";
import { ProcessSteps } from "@/components/process/ProcessSteps";
import { Testimonials } from "@/components/social/Testimonials";
import { About } from "@/components/about/About";
import { ClosingCta } from "@/components/cta/ClosingCta";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <MetricsBand />
        <WorkSection />
        <ServicesSection />
        <ProcessSteps />
        <Testimonials />
        <About />
        <ClosingCta />
      </main>
      <Footer />
    </>
  );
}
