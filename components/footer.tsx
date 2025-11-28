import { Leaf } from "lucide-react"


export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-secondary rounded-md flex items-center justify-center">
                <Leaf className="text-white" size={20} />
              </div>
              <span className="font-bold text-lg">HDOWA</span>
            </div>
            <p className="text-slate-400">致力于为全球家庭提供智能能源管理解决方案</p>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-bold mb-4">产品</h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a href="#" className="hover:text-white transition">
                  能源网关
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  储能系统
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  优化器
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  配电管理
                </a>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-bold mb-4">方案</h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a href="#" className="hover:text-white transition">
                  家庭应用
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  商业建筑
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  工业应用
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  云平台
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold mb-4">公司</h4>
            <ul className="space-y-2 text-slate-400">
              <li>
         <a href="/hbowa/about-us" className="hover:text-white transition">
         关于我们
         </a>
         </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  新闻中心
                </a>
              </li>
              <li>
                <a href="/hbowa/contact-us" className="hover:text-white transition">
                  联系我们
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  加入团队
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="text-slate-400 text-sm">© 2025 HDOWA. All rights reserved.</div>
            <div className="flex gap-6 justify-end text-slate-400 text-sm">
              <a href="#" className="hover:text-white transition">
                隐私政策
              </a>
              <a href="#" className="hover:text-white transition">
                服务条款
              </a>
              <a href="#" className="hover:text-white transition">
                联系我们
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
