import { Zap, Settings, Package } from "lucide-react"

export default function ProductionLine() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">高效自动化生产线</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            采用业界先进的智能制造技术，确保每一件产品都符合最高质量标准
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-secondary to-secondary/50 flex items-center justify-center mb-4">
              <Zap className="text-white" size={32} />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">原料检测</h3>
            <p className="text-muted-foreground">严格把控原材料质量</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-primary/50 flex items-center justify-center mb-4">
              <Settings className="text-white" size={32} />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">智能装配</h3>
            <p className="text-muted-foreground">机器人精密组装</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-secondary to-secondary/50 flex items-center justify-center mb-4">
              <Package className="text-white" size={32} />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">出厂检验</h3>
            <p className="text-muted-foreground">完整质量体系保障</p>
          </div>
        </div>

        <div className="mt-12 h-48 rounded-lg overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10">
          <img src="/automated-manufacturing-production-line-factory-ro.jpg" alt="Production Line" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  )
}
