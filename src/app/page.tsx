"use client";

import { Navigation } from "../components/landing/navigation";
import { HeroSection } from "../components/landing/hero-section";
import { FeaturesSection } from "../components/landing/features-section";
import { HowItWorksSection } from "../components/landing/how-it-works-section";
import { Footer } from "../components/layout/Footer";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflowY = isModalOpen ? "hidden" : "auto";
  }, [isModalOpen]);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
      <Navigation setIsModalOpen={setIsModalOpen} />
      <main className="relative">
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
      </main>
      <Footer />
    </div>
  );
}
