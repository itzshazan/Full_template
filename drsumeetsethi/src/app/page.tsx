import Link from "next/link";
import Icon from "@/components/Icon";
import CardGrid from "@/components/CardGrid";
import CheckList from "@/components/CheckList";
import Tabs from "@/components/Tabs";
import Gallery from "@/components/Gallery";
import TestimonialSlider from "@/components/TestimonialSlider";
import VideoEmbed from "@/components/VideoEmbed";
import { SITE, tel } from "@/config/site";
import { galleryImages, homeAchievements, homeVideo, testimonials } from "@/config/content";

export default function HomePage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="hero">
        <div className="container">
          <div className="hero-text">
            <span className="eyebrow">Trusted Specialist Care</span>
            <h1>Expert Treatment, Delivered With Skill &amp; Kindness</h1>
            <p>
              Replace this paragraph with a short introduction: who you are, what you treat, and why patients trust you
              with their care.
            </p>
            <div className="hero-actions">
              <Link className="btn btn-red" href="/contact">Book Appointment</Link>
              <a className="btn btn-white" href={tel(SITE.phone)}>Call Now</a>
            </div>
          </div>
          <div className="hero-img">
            <img src="/img/doctor-hero.svg" alt={SITE.name} width={600} height={760} />
          </div>
        </div>
      </section>

      {/* ===== CONTACT STRIP (overlaps hero) ===== */}
      <section className="contact-strip">
        <div className="container">
          <div className="box">
            <h2>Here For You, Whenever You Need Us</h2>
            <a className="phone" href={tel(SITE.phone)}><Icon name="phone" />{SITE.phone}</a>
            <p>Reach out any time for appointments, second opinions or urgent guidance — our team will respond promptly.</p>
          </div>
        </div>
      </section>

      {/* ===== ABOUT INTRO ===== */}
      <section className="about-intro">
        <div className="container">
          <div className="media reveal">
            <img src="/img/doctor-about.svg" alt={`${SITE.name} in clinic`} width={800} height={600} />
          </div>
          <div className="reveal">
            <span className="eyebrow">Meet Your Doctor</span>
            <h2 className="doctor-name">{SITE.name}</h2>
            <p className="doctor-role">{SITE.title}</p>
            <p>Write two or three sentences about your training, years of experience and the hospitals you are associated with.</p>
            <p>Add a second paragraph on your approach to care — how you explain options, involve families and follow up after treatment.</p>
            <Link className="btn btn-red" href="/about">Know More</Link>
          </div>
        </div>
      </section>

      {/* ===== SPECIALITIES ===== */}
      <section className="cards-section">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">Our Specialities</span>
            <h2 className="section-title">Comprehensive Treatments Under One Roof</h2>
          </div>
          <CardGrid items={SITE.services} limit={8} />
        </div>
      </section>

      {/* ===== FEATURE BAND ===== */}
      <section className="feature-band">
        <div className="container">
          <div className="media reveal">
            <img src="/img/feature.svg" alt="Clinic" width={800} height={640} />
          </div>
          <div className="body reveal">
            <h2>Your Health Comes First</h2>
            <CheckList
              items={[
                "Accurate diagnosis using modern equipment",
                "Treatment plans built around you",
                "Clear explanations at every step",
                "Round-the-clock emergency support",
              ]}
            />
            <p>
              Use this space to highlight what makes your practice different — technology, outcomes, or the experience
              patients have with your team.
            </p>
            <Link className="btn btn-red" href="/contact">Book a Consultation</Link>
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE ===== */}
      <section className="why">
        <div className="container">
          <div className="reveal">
            <span className="eyebrow">Why Choose Us</span>
            <h2>Focused, Modern Care Built Around Your Needs</h2>
            <p>Summarise the reasons patients choose your practice: experience, outcomes, availability and the personal attention they receive.</p>
          </div>
          <div className="why-items">
            <div className="why-item reveal">
              <img src="/img/why-1.svg" alt="" width={64} height={64} />
              <div>
                <h3>Dedicated &amp; Caring</h3>
                <p>Every patient is treated with patience and respect, from first visit to full recovery.</p>
              </div>
            </div>
            <div className="why-item reveal">
              <img src="/img/why-2.svg" alt="" width={64} height={64} />
              <div>
                <h3>Personalised Plans</h3>
                <p>Treatment is tailored to your history, lifestyle and goals — never one-size-fits-all.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ACADEMIC ACHIEVEMENTS ===== */}
      <section className="tabs-section">
        <div className="container">
          <h2 className="tabs-title">Academic Achievements</h2>
          <Tabs tabs={homeAchievements} />
        </div>
      </section>

      {/* ===== GALLERY ===== */}
      <section className="gallery-section">
        <div className="container">
          <h2>Gallery</h2>
          <Gallery images={galleryImages} />
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="testimonials">
        <div className="container">
          <div className="reveal">
            <span className="eyebrow">Testimonials</span>
            <h2>What Our Patients Say</h2>
            <p>Real stories from the people we have cared for. Replace these with genuine reviews (with the patients' permission).</p>
          </div>
          <TestimonialSlider items={testimonials} />
        </div>
      </section>

      {/* ===== VIDEO + HOSPITAL CARD ===== */}
      <section className="video-section">
        <div className="container">
          <VideoEmbed src={homeVideo} />
          <div className="hospital-card">
            <img src="/img/video-card.svg" alt="Hospital" width={600} height={420} />
            <p>Consulting at <strong>Hospital Name</strong>, City</p>
          </div>
        </div>
      </section>
    </>
  );
}
