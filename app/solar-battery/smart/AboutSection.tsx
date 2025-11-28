// app/solar-battery/smart/AboutSection.tsx
import Image from "next/image";

/* 随机配图（已标注） */
const ABOUT_IMG = "https://picsum.photos/600/360?random=21";

export default function AboutSection() {
  return (
    <section className="mt-12 text-gray-700">
      {/* 不用 h2，仅段落 */}
     <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
  <div className="md:col-span-2 space-y-4 text-sm leading-relaxed">
          <p>
            Established in 2006, Jiangsu Sinocoredrill Exploration Equipment Co., Ltd is one
            of the leading manufacturers of drilling services, drilling equipment and performance
            tools for mining, HDD, Oil and gas, Water well...etc in Wuxi, China.
          </p>
          <p>
            We has passed the quality system certification of GB/T19001-2016/ISO9001:2015 and
            CE certificate. The company collection product division design, manufactures, sales
            and services with formidable design, development ability. Our company is mainly
            engaged in the production of exploration drilling rigs, HDD machines and water well
            rigs with its' tools and accessories, including various of standard geological core
            drill rods & drill pipes, core barrels, recovery tools, a variety of standard
            impregnated diamond core bits, surface set diamond core bits, surface set natural
            diamond reaming shells, impregnated diamond reaming shells, PDC core bits, shoe
            bits, core trays, mud pump ... etc.
          </p>
          <p>
            We always operate with a primary focus on customer satisfaction and thanks to our
            on-site construction experience, we are able to suggest technologies of different
            kinds and customize our drilling rigs to better meet customer's needs. By choosing
            Sinocoredrill / one-stop supplier of drilling rigs and tools, our customers make a
            lifetime investment and, thanks to high performances of the rig, this investment
            will be soon repaid, by a fast and problem-free everyday drilling work.
          </p>
          <p>
            Quality is life, customer first! Through the close cooperation with customers and
            business partners, Sinocoredrill is making continuous innovation for achieving its
            goal of superior productivity. Owing to our products' excellent performance and
            very competitive pricing, we successfully minimized our every customer's drilling
            cost per meter. we have profuse designs with series quality grade and expressly,
            our price is very competitive cause we're manufactory.
          </p>
          <p>
            Quality bits, innovative equipment and a comprehensive array of drilling products
            to help you improve your performance - that is what we do best.
          </p>
        </div>

        
      </div>
    </section>
  );
}