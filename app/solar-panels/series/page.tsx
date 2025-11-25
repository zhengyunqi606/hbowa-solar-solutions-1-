"use client"
import { useState } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { QuoteModal } from "@/components/quote-modal"
import { Button } from "@/components/ui/button"

export default function SeriesPage() {
  const [quoteOpen, setQuoteOpen] = useState(false)
  const [show, setShow] = useState<'first' | 'second' | null>('first')

  // 两组图片
  const firstImages = ['/ex1.jpg','/ex2jpg','/ex3.jpg','/ex4.jpg','/ex5.jpg','/ex6.jpg']
  const secondImages = ['/ex7.jpg','/ex8.jpg','/ex9.jpg','/ex10.jpg','/ex11.jpg','/ex12.jpg']

  return (
    <>
      <Navigation />

      {/* 1. 首图整行 */}
      <div className="w-full">
        <img src="/image.png" alt="N-Type TopCon Solar Panel" className="w-full h-auto block" />
      </div>

      {/* 2. 一行三栏：左文 | 中图 | 右文 */}
      <div className="flex items-center justify-between gap-6 px-6 py-10">
        {/* 左侧文字 */}
        <div className="flex-1 text-gray-800">
          <h3 className="font-semibold text-lg mb-2">SMBB Technology</h3>
          <p className="mb-4">Better light trapping and current collection to improve module power output and reliability.</p>
          <h3 className="font-semibold text-lg mb-2 mt-4">Durability Against Extreme Environmental Conditions</h3>
          <p>High salt mist and ammonia resistance. Certified to withstand wind load (2400 Pascal) and snow load (5400 Pascal).</p>
        </div>

        {/* 居中图 */}
        <div className="flex-shrink-0">
          <img src="/居中图.png" alt="Center" className="w-80 h-auto object-contain" />
        </div>

        {/* 右侧文字 */}
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

      {/* 3. 产品网格 */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-6 py-10">
        {[
          { img: '/产品图1.png', title: '喵喵喵', moq: 'MoQ: One Pallet' },
          { img: '/产品图2.png', title: '汪汪汪', moq: 'MoQ: One Pallet' },
          { img: '/产品图3.png', title: '咩咩咩', moq: 'MoQ: One Pallet' },
          { img: '/产品图4.png', title: '嘟嘟嘟', moq: 'MoQ: One Pallet' },
          { img: '/产品图5.png', title: '噗噗噗', moq: 'MoQ: One Pallet' },
          { img: '/产品图6.png', title: '啦啦啦', moq: 'MoQ: One Pallet' },
          { img: '/产品图7.png', title: '哗哗哗', moq: 'MoQ: One Pallet' },
          { img: '/产品图8.png', title: '吱吱吱', moq: 'MoQ: One Pallet' },
          { img: '/产品图9.png', title: '咚咚咚', moq: 'MoQ: One Pallet' },
          { img: '/产品图10.png', title: '嗡嗡嗡', moq: 'MoQ: One Pallet' },
          { img: '/产品图11.png', title: '哐哐哐', moq: 'MoQ: One Pallet' },
          { img: '/产品图12.png', title: '叮叮叮', moq: 'MoQ: One Pallet' },
        ].map((p, i) => (
          <div key={i} className="flex flex-col items-center bg-white rounded-lg shadow-md p-4">
            <img src={p.img} alt={p.title} className="w-full h-auto rounded mb-3" />
            <h3 className="text-base font-semibold mb-2 text-center">{p.title}</h3>
            <p className="text-sm text-gray-600 mb-3">{p.moq}</p>
            <Button onClick={() => setQuoteOpen(true)}>Get a BULK Quote</Button>
          </div>
        ))}
      </div>

      {/* 4. TOPCon Exhibition：一行按钮 */}
      <div className="flex flex-col items-center justify-center px-6 py-16 bg-white">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">TOPCon Solar Panel Exhibition</h2>

        {/* 一行两个按钮 */}
        <div className="flex gap-4 mb-6">
          <button
            onClick={() => setShow('first')}
            className={`px-4 py-2 rounded-full border ${
              show === 'first' ? 'bg-primary text-white border-primary' : 'bg-white text-primary border-primary'
            }`}>
            First
          </button>
          <button
            onClick={() => setShow('second')}
            className={`px-4 py-2 rounded-full border ${
              show === 'second' ? 'bg-primary text-white border-primary' : 'bg-white text-primary border-primary'
            }`}>
            Second
          </button>
        </div>

        {/* 6 张图横向一排（自动换行） */}
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