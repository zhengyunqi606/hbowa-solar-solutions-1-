import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function CTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-secondary">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">准备开启绿色家居之旅？</h2>
        <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
          加入数十万用户，体验 HDOWA 带来的智能能源管理体验
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-white text-primary hover:bg-slate-50">
            立即开始
            <ArrowRight className="ml-2" size={18} />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
          >
            咨询专家
          </Button>
        </div>
      </div>
    </section>
  )
}
