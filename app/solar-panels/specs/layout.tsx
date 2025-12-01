// app/solar-panels/specs/layout.tsx
//此内容为导航标签栏，页眉页脚等公共部分
import { ReactNode } from 'react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'

export const metadata = {
  title: 'Compact Structure',
  description: 'Compact Structure specifications and guidelines', // 可选
}

export default function SpecsLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navigation />
      
      {/* Compact Structure 标签栏 */}
      <div className="border-b border-gray-200 bg-white dark:bg-gray-900 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-14">
            <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
              Compact Structure
            </h1>
          </div>
        </div>
      </div>

      {/* 主要内容区域，增加顶部间距避开固定高度的标签栏 */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
      


      
      <Footer />
    </>
  )
}