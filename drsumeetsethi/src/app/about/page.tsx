import type { Metadata } from "next";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import CheckList from "@/components/CheckList";
import Tabs from "@/components/Tabs";
import { SITE } from "@/config/site";
import { aboutJourney, aboutResearch } from "@/config/content";

export const metadata: Metadata = {
  title: "About",
  description: `Learn about ${SITE.name} — qualifications, experience and approach to patient care.`,
};

export default function AboutPage() {
  return (
    <>
      <PageBanner title="About" />

      <section className="section about-page">
        <div className="container">
          <div className="media reveal">
            <img src="/img/doctor-about.svg" alt={SITE.name} width={800} height={600} />
          </div>
          <div className="reveal">
            <span className="eyebrow">Leading Specialist Care</span>
            <h2 className="doctor-name">{SITE.name}</h2>
            <p className="doctor-role">{SITE.title}</p>
            <p>Introduce yourself here: where you trained, how many years you have been in practice, and the hospitals or clinics where you consult.</p>
            <p>Describe the procedures you perform most often and any special interests — for example complex cases, preventive programmes, or research.</p>
            <p>Close with your philosophy of care: how you communicate with patients and families and what they can expect from their first visit.</p>
            <CheckList
              dark
              items={["XX+ years of clinical experience", "X,XXX+ procedures performed", "Consultant at Hospital Name, City"]}
            />
            <Link className="btn btn-red" href="/contact">Book Appointment</Link>
          </div>
        </div>
      </section>

      <section className="tabs-section">
        <div className="container">
          <h2 className="tabs-title">Academic &amp; Professional Journey</h2>
          <Tabs tabs={aboutJourney} />
        </div>
      </section>

      <section className="tabs-section" style={{ background: "#fff" }}>
        <div className="container">
          <h2 className="tabs-title">Research, Training &amp; Contributions</h2>
          <Tabs tabs={aboutResearch} />
        </div>
      </section>
    </>
  );
}
