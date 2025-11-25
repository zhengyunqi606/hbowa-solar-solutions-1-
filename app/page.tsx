import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import Features from "@/components/features"
import ProductGrid from "@/components/product-grid"
import ProductionLine from "@/components/production-line"
import Certifications from "@/components/certifications"
import CaseStudies from "@/components/case-studies"
import Applications from "@/components/applications"
import CTA from "@/components/cta"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="w-full">
      <Navigation />
      <Hero />
      <Features />
      <ProductGrid />
      <ProductionLine />
      <Certifications />
      <CaseStudies />
      <Applications />
      <CTA />
      <Footer />
    </main>
  )
}
