import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"

export default function SolarPanelsPage() {
  const panelCategories = [
    {
      title: "Chinese Solar Panels Series",
      description: "High-efficiency solar panels made in China with advanced technology",
      products: [
        { id: 1, name: "300W Solar Panel", specs: "Monocrystalline, 60 cells", image: "/300w-solar-panel.jpg" },
        { id: 2, name: "350W Solar Panel", specs: "Monocrystalline, 72 cells", image: "/350w-solar-panel.jpg" },
        { id: 3, name: "400W Solar Panel", specs: "Monocrystalline, 72 cells", image: "/400w-solar-panel.jpg" },
        { id: 4, name: "450W Solar Panel", specs: "Monocrystalline, 60 cells", image: "/450w-solar-panel.jpg" },
        { id: 5, name: "500W Solar Panel", specs: "Monocrystalline, 72 cells", image: "/500w-solar-panel.jpg" },
        { id: 6, name: "550W Solar Panel", specs: "Monocrystalline, 108 cells", image: "/550w-solar-panel.jpg" },
        { id: 7, name: "600W Solar Panel", specs: "Monocrystalline, 108 cells", image: "/600w-solar-panel.jpg" },
        { id: 8, name: "650W Solar Panel", specs: "Monocrystalline, 108 cells", image: "/650w-solar-panel.jpg" },
      ],
    },
    {
      title: "German Solar Panels Series",
      description: "Premium German-engineered solar panels with superior quality",
      products: [
        { id: 9, name: "280W German Panel", specs: "Premium efficiency", image: "/280w-german-solar-panel.jpg" },
        { id: 10, name: "320W German Panel", specs: "High efficiency", image: "/320w-german-panel.jpg" },
        { id: 11, name: "370W German Panel", specs: "Premium grade", image: "/370w-german-solar.jpg" },
        { id: 12, name: "420W German Panel", specs: "Ultra high efficiency", image: "/420w-german-panel.jpg" },
        { id: 13, name: "470W German Panel", specs: "Top efficiency", image: "/470w-german-solar.jpg" },
        { id: 14, name: "520W German Panel", specs: "Premium performance", image: "/520w-german-premium.jpg" },
        { id: 15, name: "570W German Panel", specs: "Excellence grade", image: "/570w-german-panel.jpg" },
        { id: 16, name: "620W German Panel", specs: "Top performance", image: "/placeholder.svg?height=250&width=250" },
      ],
    },
    {
      title: "TOPCON Solar Panels Series",
      description: "Next-generation TOPCON technology panels for maximum efficiency",
      products: [
        {
          id: 17,
          name: "530W TOPCON Panel",
          specs: "Next-gen technology",
          image: "/placeholder.svg?height=250&width=250",
        },
        { id: 18, name: "600W TOPCON Panel", specs: "High efficiency", image: "/placeholder.svg?height=250&width=250" },
        { id: 19, name: "670W TOPCON Panel", specs: "Premium TOPCON", image: "/placeholder.svg?height=250&width=250" },
        {
          id: 20,
          name: "740W TOPCON Panel",
          specs: "Ultra high efficiency",
          image: "/placeholder.svg?height=250&width=250",
        },
      ],
    },
    {
      title: "New Type Solar Panels",
      description: "Latest innovation in solar panel technology",
      products: [
        {
          id: 21,
          name: "Perovskite Panel",
          specs: "Flexible technology",
          image: "/placeholder.svg?height=250&width=250",
        },
        {
          id: 22,
          name: "Bifacial Panel",
          specs: "Double-sided efficiency",
          image: "/placeholder.svg?height=250&width=250",
        },
        { id: 23, name: "Half-cell Panel", specs: "Advanced design", image: "/placeholder.svg?height=250&width=250" },
        { id: 24, name: "Smart Panel", specs: "IoT enabled", image: "/placeholder.svg?height=250&width=250" },
        { id: 25, name: "Flexible Panel", specs: "Portable design", image: "/placeholder.svg?height=250&width=250" },
        { id: 26, name: "Transparent Panel", specs: "Clear glass", image: "/placeholder.svg?height=250&width=250" },
        { id: 27, name: "Colored Panel", specs: "Aesthetic design", image: "/placeholder.svg?height=250&width=250" },
        {
          id: 28,
          name: "Integrated Panel",
          specs: "Building integrated",
          image: "/placeholder.svg?height=250&width=250",
        },
      ],
    },
  ]

  return (
    <main className="w-full">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Solar system</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              High-efficiency solar panels for residential and commercial energy solutions
            </p>
          </div>

          <div
            className="bg-cover bg-center rounded-lg overflow-hidden shadow-lg h-96"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1509391366360-2e938d440220?w=1200&h=400&fit=crop')",
            }}
          ></div>
        </div>
      </section>

      {/* Product Categories */}
      {panelCategories.map((category, idx) => (
        <section key={idx} className="py-16 bg-white border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-2">{category.title}</h2>
              <p className="text-muted-foreground">{category.description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {category.products.map((product) => (
                <div
                  key={product.id}
                  className="bg-white border border-border rounded-lg overflow-hidden hover:shadow-lg transition"
                >
                  <div className="relative h-48 bg-gray-200">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-foreground mb-1">{product.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{product.specs}</p>
                    <Button className="w-full bg-primary hover:bg-primary/90">Learn More</Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Related Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Related Products</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Solar Inverter", image: "/placeholder.svg?height=250&width=250" },
              { name: "Charge Controller", image: "/placeholder.svg?height=250&width=250" },
              { name: "Battery Storage", image: "/placeholder.svg?height=250&width=250" },
              { name: "Mounting System", image: "/placeholder.svg?height=250&width=250" },
            ].map((product, idx) => (
              <div key={idx} className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition">
                <div className="h-48 bg-gray-200">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-foreground text-center">{product.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Need a Custom Solar Solution?</h2>
          <p className="text-lg mb-8 opacity-90">Contact our experts for personalized recommendations</p>
          <Button size="lg" variant="secondary">
            Get in Touch
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
