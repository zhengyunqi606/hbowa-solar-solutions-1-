"use client"

import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { QuoteModal } from "./quote-modal"

export default function Features() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false)

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-8">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground">Why Choose Us</h2>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Founded in 2016, Suzhou Preta Intelligence and Technology Co., Ltd. is a high-tech enterprise specializing
              in the design, research and development, production, sales and service of photovoltaic and energy storage
              integration and energy storage systems. We are committed to providing high-quality energy storage products
              and intelligent energy storage solutions to customers around the world.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="text-secondary flex-shrink-0" size={24} />
                <div>
                  <p className="font-semibold text-foreground">Company Establishment Year: 2016</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="text-secondary flex-shrink-0" size={24} />
                <div>
                  <p className="font-semibold text-foreground">Professional Team Members: 325</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="text-secondary flex-shrink-0" size={24} />
                <div>
                  <p className="font-semibold text-foreground">Factory Scale: 15,000 m²</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="text-secondary flex-shrink-0" size={24} />
                <div>
                  <p className="font-semibold text-foreground">Successful Cases: 1,880+</p>
                </div>
              </div>
            </div>

            <Button size="lg" className="bg-secondary hover:bg-secondary/90" onClick={() => setQuoteModalOpen(true)}>
              Get a Quote
            </Button>
          </div>

          <div className="relative h-96 sm:h-[500px] rounded-xl overflow-hidden bg-gradient-to-br from-slate-200 to-slate-300">
            <img
              src="/smart-energy-storage-system-factory.jpg"
              alt="HBOWA Factory"
              className="w-full h-full object-cover"
            />
            <button className="absolute inset-0 flex items-center justify-center group">
              <div className="w-20 h-20 bg-white/80 rounded-full flex items-center justify-center group-hover:bg-white transition-all">
                <div className="w-0 h-0 border-l-8 border-l-secondary border-t-5 border-t-transparent border-b-5 border-b-transparent ml-1"></div>
              </div>
            </button>
          </div>
        </div>
      </div>

      <QuoteModal open={quoteModalOpen} onOpenChange={setQuoteModalOpen} />
    </section>
  )
}
