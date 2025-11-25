import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ProductGrid() {
  const products = [
    {
      name: "Energy Management Gateway",
      image: "/smart-energy-gateway-device.jpg",
      description: "Smart Energy Monitoring Hub",
      link: "/solar-battery",
    },
    {
      name: "Solar Power Optimizer",
      image: "/solar-power-optimizer-device.jpg",
      description: "Photovoltaic Power Management",
    },
    {
      name: "Smart Storage System",
      image: "/battery-storage-system-white.jpg",
      description: "Energy Storage Solution",
    },
    {
      name: "Power Manager",
      image: "/power-management-system.jpg",
      description: "Multi-Channel Power Control",
    },
    {
      name: "Charging Manager",
      image: "/ev-charging-management-system.jpg",
      description: "EV Charging Management",
    },
    {
      name: "Distribution Management System",
      image: "/distribution-management-system.png",
      description: "Whole House Energy Distribution",
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">HBOWA Complete Product Solutions</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From monitoring to storage to management, we provide comprehensive smart home energy solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="group bg-white rounded-lg overflow-hidden hover:shadow-xl transition duration-300"
            >
              <div className="h-48 overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg text-foreground mb-2">{product.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{product.description}</p>
                {product.link ? (
                  <Link href={product.link}>
                    <Button variant="ghost" className="text-primary hover:text-primary/90 w-full">
                      Learn More →
                    </Button>
                  </Link>
                ) : (
                  <Button variant="ghost" className="text-primary hover:text-primary/90 w-full">
                    Learn More →
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
