import PageBanner from "./PageBanner";
import CardGrid from "./CardGrid";
import { SITE } from "@/config/site";

export const TREATMENT_LIST_COPY = {
  services: {
    banner: "Services",
    crumb: "Services",
    eyebrow: "Our Specialities",
    heading: "Comprehensive Treatments Under One Roof",
  },
  conditions: {
    banner: "Conditions We Treat",
    crumb: "Conditions",
    eyebrow: "Spectrum of Conditions",
    heading: "Expert Care For Every Stage Of Your Condition",
  },
} as const;

/** Shared body for /services and /conditions — cards come from SITE.services / SITE.conditions. */
export default function TreatmentList({ kind }: { kind: keyof typeof TREATMENT_LIST_COPY }) {
  const copy = TREATMENT_LIST_COPY[kind];

  return (
    <>
      <PageBanner title={copy.banner} crumb={copy.crumb} />
      <section className="cards-section">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">{copy.eyebrow}</span>
            <h2 className="section-title">{copy.heading}</h2>
          </div>
          <CardGrid items={SITE[kind]} />
        </div>
      </section>
    </>
  );
}
