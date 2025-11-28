"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const SLUGS = ["mountain-tourist-resort", "modern-urban-intelligent-community"]

export default function CaseStudies() {
  const [cases, setCases] = useState([
    { title: "mountain tourist resort", description: "", image: "" },
    { title: "modern urban intelligent community", description: "", image: "" },
  ])

  useEffect(() => {
    const fetchCases = async () => {
      const res = await fetch(`https://axiasolar.com/wp-json/wp/v2/hhommee?slug=${SLUGS.join(',')}`)
      const pages = await res.json()

      const updated = await Promise.all(
        cases.map(async (c, idx) => {
          const page = pages.find((p: { slug: string }) => p.slug === SLUGS[idx])
          if (!page) return c

          // 1. 特色图片
          let image = "/placeholder.svg"
          if (page.featured_media) {
            const mediaRes = await fetch(`https://axiasolar.com/wp-json/wp/v2/media/${page.featured_media}`)
            const mediaData = await mediaRes.json()
            image = mediaData.source_url
          }

          // 2. 副标题（excerpt 或 title）
       const description = page.title
            ? page.excerpt.rendered.replace(/<[^>]*>/g, "")
            : page.title

          return { ...c, description, image }
        })
      )

      setCases(updated)
    }

    fetchCases()
  }, [])

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">成功案例</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            通过真实的项目案例，展示 HDOWA 的解决方案效果
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cases.map((caseStudy) => (
            <Link
              key={caseStudy.title}
              href={`/sucessfull-case/${caseStudy.title.replace(/ /g, '-')}`}
              className="group rounded-lg overflow-hidden hover:shadow-xl transition duration-300 block"
            >
              <div className="h-64 overflow-hidden bg-slate-100 relative">
                <img
                  src={caseStudy.image || "/placeholder.svg"}
                  alt={caseStudy.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition"></div>
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-xl font-bold text-foreground mb-2">{caseStudy.title}</h3>
                <p className="text-muted-foreground mb-4">{caseStudy.description}</p>
                <Button variant="ghost" className="text-primary hover:text-primary/90">
                  查看案例 <ArrowRight size={16} className="ml-2" />
                </Button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}