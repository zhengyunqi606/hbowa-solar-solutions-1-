export function ProductionLine() {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <img
              src="/advanced-automation-production-line.jpg"
              alt="Automation Production Line"
              className="w-full rounded-lg shadow-lg"
            />
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">Automation Production Line</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our state-of-the-art production facility is equipped with advanced automation systems and precision
              machinery. This enables us to maintain the highest quality standards while efficiently scaling production
              to meet global demand.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We employ cutting-edge manufacturing processes, quality control systems, and environmental management
              practices to ensure every product meets our rigorous standards.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
