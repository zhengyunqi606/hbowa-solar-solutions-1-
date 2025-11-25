"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { QuoteModal } from "@/components/quote-modal"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function SolarBatteryPage() {
  const [quoteOpen, setQuoteOpen] = useState(false)

  const products = [
    {
      id: 1,
      name: "LiFePo4 5S 100A Battery",
      image: "/lifepo4-battery-5s-100a.jpg",
      description: "High-performance lithium iron phosphate battery for solar systems",
    },
    {
      id: 2,
      name: "LiFePo4 8S 200A Battery",
      image: "/lifepo4-battery-8s-200a.jpg",
      description: "Extended capacity battery for medium-scale installations",
    },
    {
      id: 3,
      name: "LiFePo4 12S 300A Battery",
      image: "/lifepo4-battery-12s-300a.jpg",
      description: "Premium capacity battery for large residential systems",
    },
    {
      id: 4,
      name: "LiFePo4 16S 400A Battery",
      image: "/lifepo4-battery-16s-400a.jpg",
      description: "Industrial-grade battery for commercial applications",
    },
    {
      id: 5,
      name: "Lifepo4 24V 50Ah Battery",
      image: "/lifepo4-24v-50ah-battery.jpg",
      description: "Compact battery suitable for off-grid power systems",
    },
    {
      id: 6,
      name: "LiFePo4 48V 50Ah Battery",
      image: "/lifepo4-48v-50ah-battery.jpg",
      description: "Advanced battery for hybrid solar systems",
    },
    {
      id: 7,
      name: "LiFePo4 51.2V 100Ah Battery",
      image: "/lifepo4-51-2v-100ah-battery.jpg",
      description: "High-capacity solution for demanding applications",
    },
    {
      id: 8,
      name: "LiFePo4 Modular System",
      image: "/lifepo4-modular-battery-system.jpg",
      description: "Scalable battery solution for expandable installations",
    },
  ]

  return (
    <main className="w-full">
      <Navigation />

      {/* Hero Section */}
      <section
        className="relative h-96 bg-cover bg-center"
        style={{
          backgroundImage: "url(/placeholder.svg?height=400&width=1200&query=solar battery hero image)",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative h-full flex flex-col items-start justify-center px-8 lg:px-16">
          <h1 className="text-5xl font-bold text-white mb-4">Lead-Acid Replacement Batteries</h1>
          <p className="text-xl text-white/90 mb-4 max-w-2xl">
            HBOWA provides industry-leading LiFePo4 batteries for reliable energy storage
          </p>
          <ul className="text-white space-y-2 mb-6">
            <li className="flex items-center gap-2">• Switching to lead-acid alternatives available</li>
            <li className="flex items-center gap-2">• Mature and reliable battery technology</li>
            <li className="flex items-center gap-2">• 10-year battery warranty</li>
            <li className="flex items-center gap-2">• Support for 3-element customization service</li>
            <li className="flex items-center gap-2">• Battery certifications including CE, UN38.3, MSDS</li>
          </ul>
          <Button
            onClick={() => setQuoteOpen(true)}
            className="bg-secondary hover:bg-secondary/90 text-white rounded-full px-8 py-3"
          >
            Get a Quote
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-8 lg:px-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">HBOWA LiFePo4 Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Long Lifespan", desc: "10,000+ cycle life" },
              { title: "High Efficiency", desc: "Up to 98% efficiency" },
              { title: "Safety Certified", desc: "CE, UN38.3 certified" },
              { title: "Fast Charging", desc: "Quick recharge cycles" },
            ].map((feature, i) => (
              <div key={i} className="text-center p-6 rounded-lg border border-gray-200">
                <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Section */}
      <section className="py-16 px-8 lg:px-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">LiFePo4 Applications</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <img src="/battery-application-in-factory.jpg" alt="Application" className="rounded-lg" />
            <div>
              <h3 className="text-2xl font-bold mb-6">Wide Range of Applications</h3>
              <p className="text-gray-600 mb-4">
                Our LiFePo4 batteries are designed for diverse applications including residential solar systems,
                commercial energy storage, renewable energy integration, and backup power solutions.
              </p>
              <Button
                onClick={() => setQuoteOpen(true)}
                className="bg-secondary hover:bg-secondary/90 text-white rounded-full px-6 py-2"
              >
                Get a Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Control & Management Section */}
      <section className="py-16 px-8 lg:px-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Intelligent Management System</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">Smart Control Interface</h3>
              <p className="text-gray-600 mb-4">
                Our integrated management system provides real-time monitoring and control of battery performance,
                ensuring optimal efficiency and safety for your energy storage system.
              </p>
              <Button
                onClick={() => setQuoteOpen(true)}
                className="bg-secondary hover:bg-secondary/90 text-white rounded-full px-6 py-2"
              >
                Get a Quote
              </Button>
            </div>
            <img src="/battery-management-control-system.jpg" alt="Control System" className="rounded-lg" />
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 px-8 lg:px-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">HBOWA Battery Products</h2>
          <div className="space-y-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col md:flex-row gap-6 p-6">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full md:w-48 h-48 object-cover rounded-lg"
                  />
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                      <p className="text-gray-600 mb-4">{product.description}</p>
                    </div>
                    <div className="flex gap-4">
                      <Link href={`/solar-battery/product/${product.id}`}>
                        <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-6 py-2">
                          Learn More
                        </Button>
                      </Link>
                      <Button
                        onClick={() => setQuoteOpen(true)}
                        className="bg-secondary hover:bg-secondary/90 text-white rounded-full px-6 py-2"
                      >
                        Get Instant Quote
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Gallery */}
      <section className="py-16 px-8 lg:px-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">LiFePo4 Application Cases</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <img
                key={i}
                src={`/battery-application-case-.jpg?height=250&width=350&query=battery application case ${i}`}
                alt={`Application ${i}`}
                className="rounded-lg w-full h-64 object-cover"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-16 px-8 lg:px-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Related Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow">
                <img
                  src={`/solar-product-.jpg?height=200&width=250&query=solar product ${i}`}
                  alt={`Product ${i}`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2">Product {i}</h3>
                  <p className="text-sm text-gray-600 mb-4">Energy management solution</p>
                  <Button variant="outline" className="w-full bg-transparent">
                    View Details
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* User Testimonials */}
      <section className="py-16 px-8 lg:px-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "Reliable Performance", desc: "Industry-leading efficiency and reliability" },
              { title: "Expert Support", desc: "24/7 technical support and consultation" },
              { title: "Competitive Pricing", desc: "Best value for premium quality" },
              { title: "Fast Delivery", desc: "Quick turnaround on all orders" },
            ].map((item, i) => (
              <div key={i} className="p-6 border border-gray-200 rounded-lg">
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-8 lg:px-16 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Power Your Home?</h2>
          <p className="text-xl mb-8 opacity-90">
            Contact us today to get a customized quote for your solar energy storage needs
          </p>
          <Button
            onClick={() => setQuoteOpen(true)}
            className="bg-white text-primary hover:bg-gray-100 rounded-full px-8 py-3 text-lg font-bold"
          >
            Get Started Today
          </Button>
        </div>
      </section>

      <QuoteModal open={quoteOpen} onOpenChange={setQuoteOpen} />
      <Footer />
    </main>
  )
}
