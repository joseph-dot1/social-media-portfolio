import type { Metadata } from "next";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/ui/PageHeader";
import { CaseStudyFeatured } from "@/components/work/CaseStudyFeatured";
import { CaseStudyCompactGrid } from "@/components/work/CaseStudyCompactGrid";
import { ClosingCta } from "@/components/cta/ClosingCta";
import { Marquee } from "@/components/ui/Marquee";
import { flagship, featured, caseStudies } from "@/content/case-studies";
import { formatMetric } from "@/content/metrics";

const tickerItems = caseStudies
  .filter((c) => c.tier !== "compact")
  .map((c) => `${c.client} · ${formatMetric(c.results[0])} ${c.results[0].label.split(",")[0]}`);

export const metadata: Metadata = {
  title: "Work | Eshenake Joseph",
  description:
    "Client case studies with real numbers: Chibest Autos, My Journey Inc., Winx Global, Richland Schools, and more, with 900,000+ organic views generated.",
};

export default function WorkPage() {
  return (
    <>
      <Nav />
      <main className="bg-white">
        <PageHeader
          eyebrow="Work"
          title="Every case study here has a number in it."
          intro="Problem, what I did, and the results, pulled straight from each client's own analytics. No vanity claims, no vibes."
        />
        <Marquee items={tickerItems} />
        <div className="flex flex-col gap-24 py-24 md:gap-32 md:py-32">
          <CaseStudyFeatured study={flagship} />
          {featured.map((study, i) => (
            <CaseStudyFeatured key={study.id} study={study} flip={i % 2 === 0} />
          ))}
          <CaseStudyCompactGrid />
        </div>
        <ClosingCta />
      </main>
      <Footer />
    </>
  );
}
