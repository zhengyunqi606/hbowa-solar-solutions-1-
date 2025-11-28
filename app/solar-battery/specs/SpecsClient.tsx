'use client'

import { useState } from 'react'
import ReactMarkdown, { Components } from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { ChevronLeft, ChevronsRight } from 'lucide-react'

/* ====== 轮播素材 ====== */
const media = [
  { type: 'img', src: '/280w-german-solar-panel.jpg', alt: 'Compact Structure 1' },
  {
    type: 'video',
    src: 'https://www.youtube.com/embed/8xZn8heEqTo?autoplay=1&mute=1&loop=1&playlist=8xZn8heEqTo&controls=0&modestbranding=1&rel=0',
    alt: '太阳能电池宣传视频'
  },
  { type: 'img', src: '/280w-german-solar-panel.jpg', alt: 'Compact Structure 2' },
]

/* ====== 参数表格 Markdown ====== */
const tableMd = `
| Item | Specification |
|------|---------------|
| **Type** | Full Hydraulic Surface Core Drill Rig |
| **Model** | CR15 |
| **Engine** | Cummins QSB6.7 (EU Stage IIIA) 178 kW |
| **Drilling Capacity** | BQ 2050 m · NQ 1650 m · HQ 1350 m · PQ 950 m |
| **Transport Dimensions** | 5980 × 2240 × 2480 mm |
| **Weight** | 10 500 kg |
| **Highlight** | Full Hydraulic Surface / Compact Structure / Mining Exploration Borehole Rig |
`

/* ====== 正文 Markdown（PDF 文字） ====== */
const descMarkdown = `## Main Performance Parameters of CR-15

- Self-contained operator panel with **manually operated hydraulic control valves**
- **12 ton** capacity mainline hoist
- **25 ton pullback** with **6 m rod pull**, direct-coupled feed cylinder with **3.7 m stroke**
- **0–90°** mast angle capability
- **Hydraulic chuck** with **243 kN** holding capacity
- **Hydraulic-powered rod clamp** (BQ rod to HWT casing jaw sizes)
- **PQ foot clamp**, spring-close / hydraulic-open for failsafe operation
`

/* ====== Tailwind 表格渲染器（斑马纹） ====== */
const markdownComponents: Components = {
  table: ({ children }) => (
    <table className="min-w-full border-separate border-spacing-0 text-sm">{children}</table>
  ),
  thead: ({ children }) => <thead className="bg-gray-200">{children}</thead>,
  tr: ({ children }) => <tr className="even:bg-white odd:bg-gray-100">{children}</tr>,
  th: ({ children }) => <th className="px-4 py-2 text-left font-semibold border-b">{children}</th>,
  td: ({ children }) => <td className="px-4 py-2 border-b">{children}</td>,
}

export const metadata = {
  title: 'Compact Structure Core Drill Rig Mining Exploration Borehole Full Hydraulic Surface',
  }
  
export default function SpecsClient({
  mdContent,
  detailMd,
  specsTable,
}: {
  mdContent: string   // 简介
  detailMd: string    // 正文
  specsTable: string  // 大规格表
}) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const renderMedia = (item: any) =>
    item.type === 'img' ? (
      <img src={item.src} alt={item.alt} className="w-full h-full object-cover" />
    ) : (
      <iframe src={item.src} allowFullScreen className="w-full h-full" title={item.alt} />
    )

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* 大标题 */}
      <h1 className="text-3xl md:text-4xl lg:text-3xl font-extrabold text-center mb-8 lg:mb-12 leading-tight tracking-tight">
        Compact Structure Core Drill Rig Mining Exploration Borehole Full Hydraulic Surface
      </h1>

      {/* 上部分：轮播 + 简介 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
        {/* 左侧轮播 */}
        <div className="relative aspect-square lg:aspect-video overflow-hidden rounded-2xl shadow-2xl bg-muted group">
          {media.map((item, i) => (
            <div
              key={i}
              className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${
                i === currentIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {renderMedia(item)}
            </div>
          ))}

          {/* 左右箭头 */}
          <button
            onClick={() => setCurrentIndex((prev) => (prev - 1 + media.length) % media.length)}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 text-white hover:bg-black/70 opacity-0 group-hover:opacity-100 transition z-10"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          <button
            onClick={() => setCurrentIndex((prev) => (prev + 1) % media.length)}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 text-white hover:bg-black/70 opacity-0 group-hover:opacity-100 transition z-10"
          >
            <ChevronsRight className="w-8 h-8" />
          </button>

          {/* 小圆点 */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3 z-10">
            {media.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`transition-all rounded-full ${
                  i === currentIndex ? 'w-10 h-2.5 bg-white' : 'w-2.5 h-2.5 bg-white/60 hover:bg-white/90'
                }`}
              />
            ))}
          </div>
        </div>

        {/* 右侧简介 */}
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{mdContent}</ReactMarkdown>
        </div>
      </div>

      {/* 下部分：参数表 + PDF 正文 */}
      <div className="mt-16">
        <p className="text-2xl font-bold mb-4 text-center">Detailed Product Description</p>
        <div className="overflow-x-auto">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={markdownComponents}
          >
            {tableMd}
          </ReactMarkdown>
        </div>
 <div className="mt-10 prose prose-lg dark:prose-invert max-w-none">
    <ReactMarkdown remarkPlugins={[remarkGfm]}>{detailMd}</ReactMarkdown>
  </div>
<div className="mt-10 prose prose-lg dark:prose-invert max-w-none overflow-x-auto">
  <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
    {specsTable}
  </ReactMarkdown>
</div>
<h2 className="sr-only">关键词自填</h2>
<h2 className="sr-only">关键词自填</h2>
<h3>Tag: core drill rigs, diamond core drilling, Hydraulic drill rig</h3>
       
      </div>
      
    </div>
  )
}