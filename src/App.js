import React from "react";
import "./App.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import PersonalizedCareSection from "./components/PersonalizedCareSection";
import TestimonialSection from "./components/TestimonialSection";
import SmartAssistantSection from "./components/SmartAssistantSection";
import ResearchSection from "./components/ResearchSection";
import DataOwnershipSection from "./components/DataOwnershipSection";
import CareSimplifiedSection from "./components/CareSimplifiedSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <PersonalizedCareSection />
      <TestimonialSection />
      <SmartAssistantSection />
      <ResearchSection />
      <DataOwnershipSection />
      <CareSimplifiedSection />
      <Footer />
    </div>
  );
}

export default App;
