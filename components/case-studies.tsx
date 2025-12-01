"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

// 真实图片路径（已放在 public 根目录）
const RESORT_IMAGE = "/modern-smart-home-house-with-solar-panels-green-ga.jpg"
const COMMUNITY_IMAGE = "/modern-smart-residential-community-houses.jpg"  // 如果你有第二张图就放这里，没有就用同一张也行

export default function CaseStudies() {
  const cases = [
    {
      slug: "mountain-tourist-resort",
      title: "Mountain Tourist Resort",
      description: "高海拔旅游度假区 · 2.1MW 柔性光伏系统 · 年发电280万度",
      image: RESORT_IMAGE,
    },
    {
      slug: "modern-urban-intelligent-community",
      title: "Modern Urban Intelligent Community",
      description: "城市智慧社区分布式光伏 · 零碳建筑典范", 
      image: COMMUNITY_IMAGE || RESORT_IMAGE, // 没图就先用第一张
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            成功案例
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            通过真实的项目案例，展示 Hbowa 的解决方案效果
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cases.map((caseStudy) => (
            <Link
              key={caseStudy.slug}
              href={`/sucessfull-case/${caseStudy.slug}`}
              className="group rounded-xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-300 block border border-gray-100"
            >
              <div className="relative h-64 md:h-72 overflow-hidden bg-slate-100">
                <img
                  src={caseStudy.image}
                  alt={caseStudy.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-7">
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  {caseStudy.title}
                </h3>
                
                {/* 新增：描述文字（你要求的重点） */}
                <p className="text-base text-primary font-medium mb-4 leading-relaxed">
                  {caseStudy.description}
                </p>

                <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80 font-medium">
                  查看详细案例
                  <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition" />
                </Button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}