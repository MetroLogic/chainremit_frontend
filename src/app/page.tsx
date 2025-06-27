import { Navigation } from "../components/landing/navigation"
import { HeroSection } from "../components/landing/hero-section"
import { FeaturesSection } from "../components/landing/features-section"
import { HowItWorksSection } from "../components/landing/how-it-works-section"
import { Footer } from "../components/layout/Footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation />
      <main>
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
      </main>
      <Footer />
    </div>
  )
}
