import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import Gallery from "@/components/Gallery";
import { SITE } from "@/config/site";
import { caseStudies } from "@/config/content";

export const metadata: Metadata = {
  title: "Case Studies",
  description: `Selected case studies from ${SITE.name}'s practice.`,
};

export default function CaseStudiesPage() {
  return (
    <>
      <PageBanner title="Case Studies" />
      <section className="gallery-section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Clinical Work</span>
            <h2 className="section-title">Selected Case Studies</h2>
            <p>Share anonymised case summaries or posters here. Always remove identifying details and get consent first.</p>
          </div>
          <Gallery images={caseStudies} className="cols-3 tall" />
        </div>
      </section>
    </>
  );
}
