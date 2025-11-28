"use client"; 
// /pages/solar-battery/smart.tsx
import React, {useState} from 'react';
import { ChevronLeft as ChevronLeftIcon, ChevronRight as ChevronRightIcon } from 'lucide-react';
import ClientProducts from './ClientProducts';
import AboutSection from '../smart/AboutSection'; 

/* ----------  随机数据（明确标注） ---------- */
const IMAGES = [
  { id: 1, src: '/280w-german-solar-panel.jpg', alt: 'Random-1' },
  { id: 2, src: 'https://picsum.photos/600/400?random=2', alt: 'Random-2' },
  { id: 3, src: 'https://picsum.photos/600/400?random=3', alt: 'Random-3' },
  { id: 4, src: 'https://picsum.photos/600/400?random=4', alt: 'Random-4' },
];

const DESCRIPTION = `
  This is a <strong>randomly generated</strong> product description for the Smart Storage System.
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget diam dignissim,
  sollicitudin sapien et, varius nulla. Integer cursus, mi at dictum ultricies, lectus
  risus fermentum nulla, vel convallis tellus urna sit amet turpis.
`;

/* ----------  轮播组件 ---------- */
const ImageCarousel: React.FC = () => {
  const [idx, setIdx] = useState(0);

  const prev = () => setIdx((p) => (p - 1 + IMAGES.length) % IMAGES.length);
  const next = () => setIdx((p) => (p + 1) % IMAGES.length);

  return (
    <div className="w-full">
      {/* 主图 */}
      <div className="relative w-full h-[400px] rounded overflow-hidden">
        <img
          src={IMAGES[idx].src}
          alt={IMAGES[idx].alt}
          className="w-full h-full object-cover"
        />
        {/* 左右箭头 */}
        <button
          onClick={prev}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 p-2 rounded-full hover:bg-white"
        >
          <ChevronLeftIcon className="w-6 h-6" />
        </button>
        <button
          onClick={next}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 p-2 rounded-full hover:bg-white"
        >
          <ChevronRightIcon className="w-6 h-6" />
        </button>
      </div>

      {/* 缩略图 */}
      <div className="flex gap-2 mt-4">
        {IMAGES.map((img, i) => (
          <button
            key={img.id}
            onClick={() => setIdx(i)}
            className={`border-2 rounded overflow-hidden ${
              i === idx ? 'border-blue-600' : 'border-gray-300'
            }`}
          >
            <img src={img.src} alt={img.alt} className="w-20 h-14 object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
};

/* ----------  页面 ---------- */
const SmartStoragePage: React.FC = () => (
  <div className="max-w-6xl mx-auto px-6 py-10">
    {/* 小标题 */}
    <h1 className="text-2xl font-semibold mb-6">Smart Storage System</h1>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* 左侧轮播 */}
      <ImageCarousel />

      {/* 右侧简介 */}
      <div className="flex flex-col justify-center">
        <p className="text-xl font-semibold mb-3">Product Overview</p>
        <p
          className="text-gray-700 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: DESCRIPTION }}
        />
        <p className="text-sm text-gray-500 mt-4">
          (app\solar-battery\smart\page.tsx在此替换)
        </p>
      </div>
    </div>

    {/* 2×2 产品表格 */}
    <ClientProducts />
      <AboutSection />   {/* 公司简介，无 h2 */}
    </div>
  
);

export default SmartStoragePage;