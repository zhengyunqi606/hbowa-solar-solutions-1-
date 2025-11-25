"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { QuoteModal } from "../quote-modal"

export function Certifications() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false)

  const certifications = [
    "CE Certification",
    "ISO 9001",
    "ISO 14001",
    "UL Certification",
    "Test Report",
    "Transport Report",
    "MSDS Report",
    "Identification Report",
  ]

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">Qualification Certificate</h2>
        <p className="text-center text-gray-600 mb-12">
          Our products meet international quality standards and certifications
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {certifications.map((cert, i) => (
            <div
              key={i}
              className="bg-white rounded-lg shadow-md p-8 flex items-center justify-center text-center hover:shadow-lg transition-shadow"
            >
              <div className="space-y-4">
                <div className="h-24 bg-gray-200 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">Cert</span>
                </div>
                <p className="font-semibold text-gray-800 text-sm">{cert}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-secondary hover:bg-secondary/90" onClick={() => setQuoteModalOpen(true)}>
            Get a Quote
          </Button>
        </div>
      </div>

      <QuoteModal open={quoteModalOpen} onOpenChange={setQuoteModalOpen} />
    </section>
  )
}
