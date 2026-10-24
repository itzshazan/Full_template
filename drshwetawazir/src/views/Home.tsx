import React from "react";
import HeroCarousel from "../components/home/HeroCarousel";
import FeatureStrip from "../components/home/FeatureStrip";
import Welcome from "../components/home/Welcome";
import Services from "../components/home/Services";
import Doctor from "../components/home/Doctor";
import WhyChooseUs from "../components/home/WhyChooseUs";
import HospitalCta from "../components/home/HospitalCta";
import Testimonials from "../components/home/Testimonials";
import AboutPregnancy from "../components/home/AboutPregnancy";
import News from "../components/home/News";
import Stats from "../components/home/Stats";
import MapSection from "../components/home/MapSection";

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <FeatureStrip />
      <Welcome />
      <Services />
      <Doctor />
      <WhyChooseUs />
      <HospitalCta />
      <Testimonials />
      <AboutPregnancy />
      <News />
      <Stats />
      <MapSection />
    </>
  );
}
