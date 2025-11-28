// app/solar-battery/smart/ClientProducts.tsx
"use client";

import { useRouter } from "next/navigation";

/* -------------  随机数据（已标注） ------------- */
const PRODUCTS = [
  {
    id: 1,
    img: "/280w-german-solar-panel.jpg", 
    title: "Smart LiFePO4 Battery",                 // ← 随机文案
    desc: "12V 200Ah, 2560Wh, built-in BMS, 4000+ cycles.", // ← 随机文案
    link: "/products/smart-lifepo4-battery",       // ← 跳转地址（示例）
  },
  {
    id: 2,
    img: "/280w-german-solar-panel.jpg",
    title: "Stackable Energy Hub",
    desc: "5kWh per module, max 30kWh, rack-mounted.",
    link: "/products/stackable-energy-hub",
  },
  {
    id: 3,
    img: "/280w-german-solar-panel.jpg",
    title: "Wall-Mounted ESS",
    desc: "Compact 10kWh, IP65, hybrid inverter inside.",
    link: "/products/wall-mounted-ess",
  },
  {
    id: 4,
    img: "/280w-german-solar-panel.jpg",
    title: "Outdoor Battery Cabinet",
    desc: "IP54 rated, 20ft container, 215kWh capacity.",
    link: "/products/outdoor-battery-cabinet",
  },
];

export default function ClientProducts() {
  const router = useRouter();

  return (
    <section className="mt-12">
      <p className="text-xl font-semibold mb-4">Related Smart Storage Products</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {PRODUCTS.map((p) => (
          <div
            key={p.id}
            onClick={() => router.push(p.link)} // 跳转到详情页
            className="flex items-center gap-4 p-4 border rounded cursor-pointer hover:shadow-lg transition-shadow"
          >
            {/* 左侧图片 */}
            <img
              src={p.img}
              alt={p.title}
              className="w-24 h-24 object-cover rounded"
            />
            {/* 右侧简介 */}
            <div className="flex-1">
              <h3 className="font-semibold text-base">{p.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{p.desc}</p>
              <span className="text-xs text-blue-600 mt-2 inline-block">
                Click to view details →
              </span>
            </div>
          </div>
        ))}
      </div>
      <p className="text-xs text-gray-400 mt-3">
        *app\solar-battery\smart\page.tsx在此替换
      </p>
    </section>
  );
}