import { Award } from "lucide-react"

export default function Certifications() {
  const certs = [
    { name: "ISO 9001", category: "质量管理" },
    { name: "ISO 14001", category: "环境管理" },
    { name: "CE认证", category: "欧盟标准" },
    { name: "能源之星", category: "能效认证" },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">国际认证与资质</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            获得全球主要认证机构的认可，品质保证值得信赖
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {certs.map((cert, index) => (
            <div key={index} className="bg-white p-6 rounded-lg text-center hover:shadow-lg transition">
              <div className="flex justify-center mb-3">
                <Award className="text-secondary" size={32} />
              </div>
              <h3 className="font-bold text-foreground mb-2">{cert.name}</h3>
              <p className="text-sm text-muted-foreground">{cert.category}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
