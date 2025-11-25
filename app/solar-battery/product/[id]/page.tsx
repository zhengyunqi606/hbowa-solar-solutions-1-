"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { QuoteModal } from "@/components/quote-modal"
import { ChevronRight, ChevronLeft } from "lucide-react"

export default function ProductDetailPage() {
  const params = useParams()
  const productId = params.id
  const [quoteOpen, setQuoteOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [relatedProductIndex, setRelatedProductIndex] = useState(0)
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0)

  const productData: Record<string, any> = {
    "1": {
      name: "LiFePo4 12V 200Ah Battery",
      mainImage: "/lifepo4-battery-main.jpg",
      carouselImages: [
        "/lifepo4-battery-variant-1.jpg",
        "/lifepo4-battery-variant-2.jpg",
        "/lifepo4-battery-variant-3.jpg",
        "/lifepo4-battery-variant-4.jpg",
        "/lifepo4-battery-variant-5.jpg",
        "/lifepo4-battery-variant-6.jpg",
      ],
      description: "High-performance lithium iron phosphate battery for solar systems",
      price: "$1,999",
      specs: {
        "Battery Unit": "LiFePo4 Cell 3.2V 100Ah",
        BMS: "Intelligent 4S BMS",
        Capacity: "12 pcs 200Ah Battery",
        Warranty: "5 years, 10 years (customizable)",
        "Maximum Starting Weight": "22kg",
        Dimensions: "582mm × 260mm × 275mm",
        "Customization Support":
          "Voltage, capacity, current, dimensions, external appearance, liquid crystal screen, Link Bluetooth",
      },
      features: [
        {
          title: "12V 200 Charge Management Structure",
          description:
            "Advanced charging management system designed for optimal battery performance. The integrated charge controller ensures safe and efficient charging from various power sources.",
          image: "/charge-management.jpg",
          position: "left",
        },
        {
          title: "Smart BMS",
          description:
            "Intelligent Battery Management System with real-time monitoring capabilities. Protects against over-charge, over-discharge, and over-temperature conditions with precision.",
          image: "/smart-bms.jpg",
          position: "right",
        },
        {
          title: "3 Ways To Charge LiFePo4 Batteries",
          description:
            "Multiple charging options including solar input, AC grid charging, and generator support. Maximum flexibility for different installation scenarios and use cases.",
          image: "/charging-methods.jpg",
          position: "left",
        },
        {
          title: "Charging Method",
          description:
            "Supports multiple charging protocols optimized for different power sources. Smart charging algorithm extends battery life and ensures safe operation in all conditions.",
          image: "/charging-details.jpg",
          position: "right",
        },
        {
          title: "Link Bluetooth Option",
          description:
            "Optional Bluetooth connectivity for wireless monitoring and control. Monitor battery status, charging rates, and system health from your smartphone or tablet anywhere.",
          image: "/bluetooth-symbol.png",
          position: "left",
        },
        {
          title: "LCD Screen Optional",
          description:
            "Real-time display of battery voltage, current, SOC, and temperature. Essential information at a glance for system monitoring and diagnostics.",
          image: "/lcd-screen.jpg",
          position: "right",
        },
        {
          title: "Broad Applications",
          description:
            "Suitable for residential solar systems, RVs, marine vessels, off-grid cabins, and commercial backup power systems. Versatile solution for any energy storage need.",
          image: "/applications.jpg",
          position: "left",
        },
      ],
      relatedProducts: [
        { id: "2", name: "LiFePo4 8S 200A", image: "/battery-8s.jpg" },
        { id: "3", name: "LiFePo4 12S 300A", image: "/battery-12s.jpg" },
        { id: "4", name: "LiFePo4 16S 400A", image: "/battery-16s.jpg" },
        { id: "5", name: "24V 50Ah Battery", image: "/placeholder.svg?height=250&width=300" },
        { id: "6", name: "48V 50Ah Battery", image: "/placeholder.svg?height=250&width=300" },
        { id: "7", name: "51.2V 100Ah Battery", image: "/placeholder.svg?height=250&width=300" },
      ],
    },
    "2": {
      name: "LiFePo4 8S 200A Battery",
      mainImage: "/placeholder.svg?height=500&width=400",
      carouselImages: [
        "/placeholder.svg?height=300&width=300",
        "/placeholder.svg?height=300&width=300",
        "/placeholder.svg?height=300&width=300",
        "/placeholder.svg?height=300&width=300",
      ],
      description: "Extended capacity battery for medium-scale installations",
      price: "$3,999",
      specs: {
        Voltage: "24V Nominal",
        Capacity: "200Ah",
        Energy: "4.8kWh",
        "Cycle Life": "10,000+ cycles",
        "Charging Current": "Max 200A",
        "Discharging Current": "Max 200A",
      },
      features: [],
      relatedProducts: [],
    },
    "3": {
      name: "LiFePo4 12S 300A Battery",
      mainImage: "/placeholder.svg?height=500&width=400",
      carouselImages: ["/placeholder.svg?height=300&width=300", "/placeholder.svg?height=300&width=300"],
      description: "Premium capacity battery for large residential systems",
      price: "$7,999",
      specs: { Voltage: "48V Nominal", Capacity: "300Ah" },
      features: [],
      relatedProducts: [],
    },
    "4": {
      name: "LiFePo4 16S 400A Battery",
      mainImage: "/placeholder.svg?height=500&width=400",
      carouselImages: ["/placeholder.svg?height=300&width=300"],
      description: "Industrial-grade battery for commercial applications",
      price: "$9,999",
      specs: { Voltage: "48V Nominal", Capacity: "400Ah" },
      features: [],
      relatedProducts: [],
    },
    "5": {
      name: "Lifepo4 24V 50Ah Battery",
      mainImage: "/placeholder.svg?height=500&width=400",
      carouselImages: ["/placeholder.svg?height=300&width=300"],
      description: "Compact battery suitable for off-grid power systems",
      price: "$999",
      specs: { Voltage: "24V Nominal", Capacity: "50Ah" },
      features: [],
      relatedProducts: [],
    },
    "6": {
      name: "LiFePo4 48V 50Ah Battery",
      mainImage: "/placeholder.svg?height=500&width=400",
      carouselImages: ["/placeholder.svg?height=300&width=300"],
      description: "Advanced battery for hybrid solar systems",
      price: "$1,499",
      specs: { Voltage: "48V Nominal", Capacity: "50Ah" },
      features: [],
      relatedProducts: [],
    },
    "7": {
      name: "LiFePo4 51.2V 100Ah Battery",
      mainImage: "/placeholder.svg?height=500&width=400",
      carouselImages: ["/placeholder.svg?height=300&width=300"],
      description: "High-capacity solution for demanding applications",
      price: "$2,999",
      specs: { Voltage: "51.2V Nominal", Capacity: "100Ah" },
      features: [],
      relatedProducts: [],
    },
    "8": {
      name: "LiFePo4 Modular System",
      mainImage: "/placeholder.svg?height=500&width=400",
      carouselImages: ["/placeholder.svg?height=300&width=300"],
      description: "Scalable battery solution for expandable installations",
      price: "Starting at $4,999",
      specs: { "Modular Design": "Stack up to 4 units" },
      features: [],
      relatedProducts: [],
    },
  }

  const product = productData[productId as string] || productData["1"]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev === product.carouselImages.length - 1 ? 0 : prev + 1))
    }, 5000)
    return () => clearInterval(interval)
  }, [product.carouselImages.length])

  const handlePrevCarousel = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? product.carouselImages.length - 1 : prev - 1))
  }

  const handleNextCarousel = () => {
    setCurrentImageIndex((prev) => (prev === product.carouselImages.length - 1 ? 0 : prev + 1))
  }

  const handlePrevRelated = () => {
    setRelatedProductIndex((prev) => (prev === 0 ? Math.max(product.relatedProducts.length - 3, 0) : prev - 1))
  }

  const handleNextRelated = () => {
    if (product.relatedProducts.length > 3) {
      setRelatedProductIndex((prev) => (prev === product.relatedProducts.length - 3 ? 0 : prev + 1))
    }
  }

  const faqItems = [
    {
      question: "What is the warranty period for LiFePo4 batteries?",
      answer:
        "Our LiFePo4 batteries come with a standard 5-year warranty, with options for extended 10-year coverage upon request.",
    },
    {
      question: "Can LiFePo4 batteries be used in RVs?",
      answer:
        "Yes, LiFePo4 batteries are excellent for RV applications due to their lightweight design and high energy density.",
    },
    {
      question: "What is the optimal charging temperature?",
      answer:
        "The optimal charging temperature range is 0°C to 45°C. Avoid charging in extreme temperatures for best performance.",
    },
    {
      question: "How do I monitor battery status?",
      answer:
        "Optional Bluetooth connectivity and LCD display features allow real-time monitoring of battery voltage, current, and state of charge.",
    },
  ]

  return (
    <main className="w-full">
      <Navigation />

      <section className="py-12 px-8 lg:px-16 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-md p-8 flex items-center justify-center h-96 relative overflow-hidden">
                <img
                  src={product.carouselImages[currentImageIndex] || product.mainImage || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-contain transition-opacity duration-500"
                />
                <div className="absolute bottom-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  ✓ In Stock
                </div>
              </div>

              <div className="relative">
                <div className="flex gap-4 overflow-x-auto pb-2">
                  {product.carouselImages.map((img: string, idx: number) => (
                    <div
                      key={idx}
                      className={`flex-shrink-0 w-20 h-20 rounded-lg cursor-pointer border-2 transition-all ${
                        idx === currentImageIndex ? "border-green-500 scale-105" : "border-gray-300"
                      }`}
                      onClick={() => setCurrentImageIndex(idx)}
                    >
                      <img
                        src={img || "/placeholder.svg"}
                        alt={`Thumbnail ${idx + 1}`}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                  ))}
                </div>
                <button
                  onClick={handlePrevCarousel}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-md hover:shadow-lg z-10"
                >
                  <ChevronLeft size={20} className="text-gray-600" />
                </button>
                <button
                  onClick={handleNextCarousel}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-md hover:shadow-lg z-10"
                >
                  <ChevronRight size={20} className="text-gray-600" />
                </button>
              </div>
            </div>

            <div>
              <h1 className="text-4xl font-bold mb-4 text-gray-900">{product.name}</h1>
              <p className="text-lg text-gray-600 mb-8">{product.description}</p>

              <div className="bg-white rounded-lg p-6 mb-8 space-y-3">
                {Object.entries(product.specs).map((spec: any, idx: number) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="text-green-500 text-2xl">✓</span>
                    <div>
                      <p className="font-bold text-gray-900">{spec[0]}</p>
                      <p className="text-gray-600 text-sm">{spec[1]}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex gap-4 mb-8">
                <button className="flex items-center gap-2 px-6 py-3 bg-red-500 text-white font-bold rounded-lg hover:bg-red-600 transition">
                  📄 User Manual
                </button>
                <button className="flex items-center gap-2 px-6 py-3 bg-red-500 text-white font-bold rounded-lg hover:bg-red-600 transition">
                  📊 Specifications
                </button>
              </div>

              <button
                onClick={() => setQuoteOpen(true)}
                className="w-full bg-green-500 hover:bg-green-600 text-white font-bold rounded-full px-8 py-4 text-lg transition-colors"
              >
                Send Your Inquiry Now →
              </button>
            </div>
          </div>
        </div>
      </section>

      {product.features.length > 0 && (
        <section className="py-16 px-8 lg:px-16">
          <div className="max-w-6xl mx-auto space-y-20">
            {product.features.map((feature: any, index: number) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center`}>
                {feature.position === "left" ? (
                  <>
                    <div className="flex justify-center">
                      <img
                        src={feature.image || "/placeholder.svg"}
                        alt={feature.title}
                        className="w-full rounded-lg shadow-md"
                      />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold mb-4 text-gray-900">{feature.title}</h3>
                      <p className="text-lg text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
                      <button
                        onClick={() => setQuoteOpen(true)}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 text-white font-bold rounded-full hover:bg-green-600 transition-colors"
                      >
                        Send Inquiry <ChevronRight size={20} />
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <h3 className="text-3xl font-bold mb-4 text-gray-900">{feature.title}</h3>
                      <p className="text-lg text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
                      <button
                        onClick={() => setQuoteOpen(true)}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 text-white font-bold rounded-full hover:bg-green-600 transition-colors"
                      >
                        Send Inquiry <ChevronRight size={20} />
                      </button>
                    </div>
                    <div className="flex justify-center">
                      <img
                        src={feature.image || "/placeholder.svg"}
                        alt={feature.title}
                        className="w-full rounded-lg shadow-md"
                      />
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="py-16 px-8 lg:px-16 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Technical Specifications</h2>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <table className="w-full">
              <tbody>
                {Object.entries(product.specs).map((spec: any, index: number) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-6 py-4 font-bold text-gray-900 w-1/3">{spec[0]}</td>
                    <td className="px-6 py-4 text-gray-600">{spec[1]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {product.relatedProducts.length > 0 && (
        <section className="py-16 px-8 lg:px-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Related Products</h2>
            <div className="relative">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 overflow-hidden">
                {product.relatedProducts
                  .slice(relatedProductIndex, relatedProductIndex + 3)
                  .map((prod: any, idx: number) => (
                    <div
                      key={idx}
                      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-500 transform"
                      style={{
                        animation: `slideIn 0.5s ease-out ${idx * 0.1}s`,
                      }}
                    >
                      <div className="bg-gray-200 h-48 flex items-center justify-center overflow-hidden">
                        <img
                          src={prod.image || "/placeholder.svg"}
                          alt={prod.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-6 text-center">
                        <h3 className="font-bold text-lg text-gray-900">{prod.name}</h3>
                      </div>
                    </div>
                  ))}
              </div>

              {product.relatedProducts.length > 3 && (
                <>
                  <button
                    onClick={handlePrevRelated}
                    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-md hover:shadow-lg z-10"
                  >
                    <ChevronLeft size={24} className="text-gray-600" />
                  </button>
                  <button
                    onClick={handleNextRelated}
                    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-md hover:shadow-lg z-10"
                  >
                    <ChevronRight size={24} className="text-gray-600" />
                  </button>
                </>
              )}
            </div>
          </div>

          <style jsx>{`
            @keyframes slideIn {
              from {
                opacity: 0;
                transform: translateX(20px);
              }
              to {
                opacity: 1;
                transform: translateX(0);
              }
            }
          `}</style>
        </section>
      )}

      <section className="py-16 px-8 lg:px-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-8 text-gray-900">
                Recommendations for Using LiFePo4 Lithium Batteries
              </h2>
              <div className="space-y-4">
                {faqItems.map((item, idx) => (
                  <div key={idx} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                    <button
                      onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                      className="w-full flex items-center justify-between p-6 hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-semibold text-gray-900 text-left">{item.question}</span>
                      <span
                        className={`ml-4 flex-shrink-0 text-gray-500 transition-transform ${expandedFaq === idx ? "rotate-180" : ""}`}
                      >
                        +
                      </span>
                    </button>
                    {expandedFaq === idx && (
                      <div className="px-6 pb-6 text-gray-600 border-t border-gray-200">{item.answer}</div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-8 text-gray-900">Send Your Inquiry</h2>
              <form className="bg-white rounded-lg shadow-md p-8 space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name*"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email*"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
                    required
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Phone* (e.g., +442012345)"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
                    required
                  />
                </div>
                <div>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500">
                    <option>Select Country</option>
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Australia</option>
                    <option>Germany</option>
                    <option>China</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <textarea
                    placeholder="Your Message*"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500 resize-none"
                    required
                  ></textarea>
                </div>
                <button
                  type="button"
                  className="flex items-center gap-2 px-6 py-2 border-2 border-blue-500 text-blue-500 rounded-full hover:bg-blue-50 transition"
                >
                  Upload ↑
                </button>
                <button
                  type="submit"
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-bold rounded-full px-8 py-4 text-lg transition-colors"
                >
                  Submit Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <QuoteModal open={quoteOpen} onOpenChange={setQuoteOpen} />
      <Footer />
    </main>
  )
}
