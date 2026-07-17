import { Nav } from "@/components/layout/Nav";
import { Hero } from "@/components/hero/Hero";
import { MetricsBand } from "@/components/metrics/MetricsBand";
import { CaseStudyFlagship } from "@/components/work/CaseStudyFlagship";
import { WorkTeaser } from "@/components/work/WorkTeaser";
import { TopContent } from "@/components/work/TopContent";
import { ServicesTeaser } from "@/components/services/ServicesTeaser";
import { ClosingCta } from "@/components/cta/ClosingCta";
import { Footer } from "@/components/layout/Footer";
import { Marquee } from "@/components/ui/Marquee";
import { caseStudies } from "@/content/case-studies";
import { formatMetric } from "@/content/metrics";

const tickerItems = caseStudies
  .filter((c) => c.tier !== "compact")
  .map((c) => `${c.client} · ${formatMetric(c.results[0])} ${c.results[0].label.split(",")[0]}`);

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <MetricsBand />
        <CaseStudyFlagship />
        <Marquee items={tickerItems} />
        <div className="pt-24 md:pt-32">
          <WorkTeaser />
        </div>
        <TopContent />
        <ServicesTeaser />
        <ClosingCta />
      </main>
      <Footer />
    </>
  );
}
