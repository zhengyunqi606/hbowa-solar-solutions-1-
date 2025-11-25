import { Home, Building2, Factory } from "lucide-react"

export default function Applications() {
  const apps = [
    {
      icon: Home,
      title: "家庭应用",
      description: "智能家居能源管理，为家庭节能降耗",
    },
    {
      icon: Building2,
      title: "商业建筑",
      description: "办公楼、酒店的全面能源解决方案",
    },
    {
      icon: Factory,
      title: "工业应用",
      description: "工厂、厂房的能源监测与优化",
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">应用场景</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">HDOWA 解决方案适用于多种场景，满足不同需求</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {apps.map((app, index) => {
            const Icon = app.icon
            return (
              <div key={index} className="bg-white p-8 rounded-lg text-center hover:shadow-lg transition">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-secondary/20 to-primary/20 flex items-center justify-center">
                    <Icon className="text-primary" size={32} />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{app.title}</h3>
                <p className="text-muted-foreground">{app.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
