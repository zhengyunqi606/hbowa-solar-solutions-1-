"use client"
import Link from "next/link"

export function PricingFooter() {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-r from-green-600 to-green-700">
      <div className="max-w-6xl mx-auto text-center text-white">
        <h2 className="text-4xl font-bold mb-4">Whole Site New Solar Panels</h2>
        <p className="text-xl mb-6 text-green-100">Price: USD 0.09-0.38/watt</p>
        <Link href="/contact">
        <button className="bg-white text-green-600 hover:bg-green-50 font-semibold py-3 px-8 rounded-full transition-colors">
          Get Quote Now
        </button>
          </Link>
      </div>
    </section>
  )
}
