import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { AboutHero } from "@/components/about/about-hero"
import { CompanyProfile } from "@/components/about/company-profile"
import { WhoWeAre } from "@/components/about/who-we-are"
import { TeamExperience } from "@/components/about/team-experience"
import { ProductionLine } from "@/components/about/production-line"
import { Certifications } from "@/components/about/certifications"
import { FactoryOverview } from "@/components/about/factory-overview"
import { PricingFooter } from "@/components/about/pricing-footer"

export const metadata = {
  title: "About Us - HBOWA",
  description: "Learn about HBOWA, a professional manufacturer of photovoltaic and energy storage products.",
}

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <AboutHero />
      <CompanyProfile />
      <WhoWeAre />
      <TeamExperience />
      <ProductionLine />
      <Certifications />
      <FactoryOverview />
      <PricingFooter />
      <Footer />
    </div>
  )
}
