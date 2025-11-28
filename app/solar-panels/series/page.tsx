"use client"
import { useState, useEffect } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { QuoteModal } from "@/components/quote-modal"
import { Button } from "@/components/ui/button"

export default function SeriesPage() {
  const [quoteOpen, setQuoteOpen] = useState(false)
  const [show, setShow] = useState<'first' | 'second' | null>('first')

  type Product = { title: string; link: string; img: string }
  const [products, setProducts] = useState<Product[]>([])

  const firstImages = ['/ex1.jpg', '/ex2.jpg', '/ex3.jpg', '/ex4.jpg', '/ex5.jpg', '/ex6.jpg']
  const secondImages = ['/ex7.jpg', '/ex8.jpg', '/ex9.jpg', '/ex10.jpg', '/ex11.jpg', '/ex12.jpg']

  // ❗ WordPress 数据拉取
  useEffect(() => {
    fetch("https://axiasolar.com/wp-json/wp/v2/solar_panel?_embed")
      .then(res => res.json())
      .then(data => {
        const formatted = data.map((post: { title: { rendered: any }; link: any; _embedded: { [x: string]: { source_url: any }[] } }) => ({
          title: post.title.rendered,
          link: post.link,
          img: post._embedded?.["wp:featuredmedia"]
            ? post._embedded["wp:featuredmedia"][0].source_url
            : "/fallback.jpg",
        }))
        setProducts(formatted)
      })
  }, [])

  return (
    <>
      <Navigation />

      <div className="w-full">
        <img src="/image.png" alt="N-Type TopCon Solar Panel" className="w-full h-auto block" />
      </div>

      <div className="flex items-center justify-between gap-6 px-6 py-10">
        <div className="flex-1 text-gray-800">
          <h3 className="font-semibold text-lg mb-2">SMBB Technology</h3>
          <p className="mb-4">Better light trapping and current collection to improve module power output and reliability.</p>
          <h3 className="font-semibold text-lg mb-2 mt-4">Durability Against Extreme Environmental Conditions</h3>
          <p>High salt mist and ammonia resistance. Certified to withstand wind load (2400 Pascal) and snow load (5400 Pascal).</p>
        </div>

        <div className="flex-shrink-0">
          <img src="/居中图.png" alt="Center" className="w-80 h-auto object-contain" />
        </div>

        <div className="flex-1 text-gray-800">
          <h3 className="font-semibold text-lg mb-2">Hot 2.0 Technology</h3>
          <p className="mb-4">The N-type module with Hot 2.0 technology has better reliability and lower LID/LETID.</p>
          <h3 className="font-semibold text-lg mb-2">PID Resistance & High Reliability</h3>
          <p>Excellent Anti-PID performance guarantee via optimized mass-production process and materials control.</p>
          <ul className="list-disc ml-6 mt-2">
            <li>12 years product warranty</li>
            <li>30 years linear power warranty</li>
          </ul>
        </div>
      </div>

      {/* 产品卡片 ——— 使用 WordPress 数据 */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-6 py-10">
        {products.map((p, i) => (
          <a
            key={i}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group block bg-white rounded-lg shadow-md p-4 hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer"
          >
            <img
              src={p.img}
              alt={p.title}
              className="w-full h-auto rounded mb-3 object-cover"
            />

            <h3 className="text-base font-semibold mb-2 text-center">
              {p.title}
            </h3>

            {/* 目前 WordPress 里没有 MOQ，就先写死 */}
            <p className="text-sm text-gray-600 mb-3 text-center">
              MoQ: One Pallet
            </p>

            <div className="flex justify-center">
              <span className="text-primary text-sm font-medium group-hover:underline">
                Learn More →
              </span>
            </div>
          </a>
        ))}
      </div>

      {/* 展览区 */}
      <div className="flex flex-col items-center justify-center px-6 py-16 bg-white">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">TOPCon Solar Panel Exhibition</h2>
        <div className="flex gap-4 mb-6">
          <button
            onClick={() => setShow('first')}
            className={`px-4 py-2 rounded-full border ${show === 'first' ? 'bg-primary text-white border-primary' : 'bg-white text-primary border-primary'}`}
          >
            First
          </button>
          <button
            onClick={() => setShow('second')}
            className={`px-4 py-2 rounded-full border ${show === 'second' ? 'bg-primary text-white border-primary' : 'bg-white text-primary border-primary'}`}
          >
            Second
          </button>
        </div>
        {show && (
          <div className="grid grid-cols-3 gap-4 w-full max-w-4xl">
            {(show === 'first' ? firstImages : secondImages).map((src, i) => (
              <img key={i} src={src} alt={`${show}-${i + 1}`} className="w-full h-auto rounded-lg shadow-md" />
            ))}
          </div>
        )}
      </div>

      <Footer />
      <QuoteModal open={quoteOpen} onOpenChange={setQuoteOpen} />
    </>
  )
}
