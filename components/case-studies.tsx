import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function CaseStudies() {
  const cases = [
    {
      title: "山区旅游度假村",
      description: "通过 HDOWA 智能能源系统，年节能成本降低 45%",
      image: "/luxury-mountain-resort-solar-panels.jpg",
    },
    {
      title: "现代城市智能社区",
      description: "为 500+ 户家庭提供能源管理服务，获得用户高度认可",
      image: "/modern-smart-residential-community-houses.jpg",
    },
  ]

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
          {cases.map((caseStudy, index) => (
            <div key={index} className="group rounded-lg overflow-hidden hover:shadow-xl transition duration-300">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
