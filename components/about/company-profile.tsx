export function CompanyProfile() {
  const stats = [
    { year: "2018", label: "Established Founded" },
    { year: "15000", label: "Factory Scale (m²)" },
    { year: "1880", label: "Success Cases" },
    { year: "325", label: "Professional Team" },
  ]

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Company Profile</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-8 text-center">
              <div className="text-4xl font-bold text-blue-600 mb-3">{stat.year}</div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
