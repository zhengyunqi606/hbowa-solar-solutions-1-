export function TeamExperience() {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-8 text-gray-900">Team With Rich Experience</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our team comprises experienced engineers, technicians, and business professionals with deep expertise in
              renewable energy technologies. We collaborate with leading universities and research institutions to stay
              at the forefront of innovation.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Each team member brings years of industry experience and a shared passion for creating sustainable energy
              solutions. This combination of expertise and dedication ensures we deliver exceptional products and
              services to our global customers.
            </p>
            <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-full transition-colors">
              Learn more
            </button>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="aspect-video bg-gray-200 rounded-lg mb-6 flex items-center justify-center overflow-hidden">
              <img src="/professional-team-meeting.jpg" alt="Team Experience" className="w-full h-full object-cover" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              {["University A", "University B", "University C", "University D"].map((uni, i) => (
                <div key={i} className="flex items-center justify-center p-3 bg-gray-100 rounded">
                  <span className="text-sm font-semibold text-gray-700">{uni}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
