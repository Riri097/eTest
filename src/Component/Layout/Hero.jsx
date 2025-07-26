import React from "react";
import HeroSection from "./HeroSections/Hero";
import StatsSection from "./HeroSections/StatsSection";
import LearningPathSection from "./HeroSections/LearningPathSection";
import TestimonialsSection from "./HeroSections/TestimonialsSection";
import CategoriesSection from "./HeroSections/CategoriesSection";
import FeaturePage from "../../Pages/FeaturePage";
import AboutPage from "../../Pages/AboutPage";
import TutorialPage from "../../Pages/TutorialPage";
import ContactPage from "../../Pages/ContactPage";

const Hero = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <StatsSection />
      <FeaturePage/>
      <LearningPathSection />
      <AboutPage/>
      <TestimonialsSection />
      <TutorialPage/>
      <CategoriesSection />
      <ContactPage/>
    </div>
  );
};

export default Hero;
