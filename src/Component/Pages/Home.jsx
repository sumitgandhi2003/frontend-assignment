import React from "react";
import AboutUs from "../AboutUs";
import HowItWorks from "../HowItWorks";
import Testimonials from "../Testimonials";
import WhyChooseUs from "../WhyChooseUs";
import ServicePlans from "../ServicePlans";
import ResumeCoaching from "../ResumeCoaching";
import ContactUs from "../ContactUs";
import HeroSection from "../HeroSection";

const Home = () => {
  return (
    <div className="w-full h-full">
      <HeroSection />
      <HowItWorks />
      <AboutUs />
      <Testimonials />
      <WhyChooseUs />
      <ServicePlans />
      <ResumeCoaching />
      <ContactUs />
    </div>
  );
};

export default Home;
