import React from "react";
import AboutUs from "../Component/AboutUs";
import HowItWorks from "../Component/HowItWorks";
import Testimonials from "../Component/Testimonials";
import WhyChooseUs from "../Component/WhyChooseUs";
import ServicePlans from "../Component/ServicePlans";
import ResumeCoaching from "../Component/ResumeCoaching";
import ContactUs from "../Component/ContactUs";
import HeroSection from "../Component/HeroSection";

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
