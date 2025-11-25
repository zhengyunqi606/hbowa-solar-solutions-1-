export function FactoryOverview() {
  const images = [
    "warehouse with yellow equipment and machinery",
    "modern office workspace with equipment",
    "industrial assembly line production",
    "equipment testing and assembly station",
    "product storage facility with organized inventory",
    "quality control inspection area",
  ]

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Factory Overview</h2>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((desc, i) => (
            <div
              key={i}
              className="aspect-square rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <img
                src={`/.jpg?height=300&width=300&query=${encodeURIComponent(desc)}`}
                alt={`Factory ${i + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
