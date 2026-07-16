import { Nav } from "@/components/layout/Nav";
import { Hero } from "@/components/hero/Hero";
import { MetricsBand } from "@/components/metrics/MetricsBand";
import { CaseStudyFlagship } from "@/components/work/CaseStudyFlagship";
import { WorkTeaser } from "@/components/work/WorkTeaser";
import { ServicesTeaser } from "@/components/services/ServicesTeaser";
import { ClosingCta } from "@/components/cta/ClosingCta";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <MetricsBand />
        <CaseStudyFlagship />
        <WorkTeaser />
        <ServicesTeaser />
        <ClosingCta />
      </main>
      <Footer />
    </>
  );
}
