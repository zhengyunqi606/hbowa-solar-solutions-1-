"use client"

import { useState, useEffect, SetStateAction } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import { QuoteModal } from "./quote-modal"

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)
  const [quoteModalOpen, setQuoteModalOpen] = useState(false)

  const slides = [
    {
      id: 1,
      image: "/modern-smart-home-house-with-solar-panels-green-ga.jpg",
      alt: "Smart Home with Solar Panels",
    },
    {
      id: 2,
      image: "/modern-smart-home-energy-management-system.jpg",
      alt: "Energy Management System",
    },
    {
      id: 3,
      image: "/smart-home-automation-control-center.jpg",
      alt: "Home Automation",
    },
  ]

  useEffect(() => {
    if (!autoPlay) return

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [autoPlay, slides.length])

  const goToSlide = (index: SetStateAction<number>) => {
    setCurrentSlide(index)
    setAutoPlay(false)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    setAutoPlay(false)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    setAutoPlay(false)
  }

  return (
    <section className="pt-0">
      <div className="relative w-full h-96 sm:h-[500px] lg:h-[600px] overflow-hidden bg-slate-100">
        {/* 轮播图幻灯片 */}
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img src={slide.image || "/placeholder.svg"} alt={slide.alt} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/30"></div>
          </div>
        ))}

        {/* 左右导航按钮 */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition-all"
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition-all"
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </button>

        {/* 底部指示器 */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentSlide ? "bg-white w-8" : "bg-white/50 w-2"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* 标题 */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            Build Smart Green Homes
          </h1>

          {/* 描述 */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            HBOWA provides a complete smart home energy management system to help your home save energy and reduce
            consumption, creating a comfortable and secure living environment.
          </p>

          {/* 按钮组 */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/hbowa/about-us">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 w-full sm:w-auto">
                Explore HBOWA
                <ArrowRight className="ml-2" size={18} />
              </Button>
            </Link>
            <Link href="/hbowa/contact-us">
              <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent">
                Contact Us Now
              </Button>
            </Link>
          </div>

        </div>
      </div>

      <QuoteModal open={quoteModalOpen} onOpenChange={setQuoteModalOpen} />
    </section>
  )
}
