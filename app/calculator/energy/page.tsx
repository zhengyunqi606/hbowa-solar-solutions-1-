export default function SeriesPage() {
  return (
    <div className="max-w-4xl mx-auto p-8 text-gray-800">
      <h1 className="text-4xl font-bold mb-4 text-gray-900">Energy Calculator</h1>
      <p className="text-lg mb-6">
        Discover our high-efficiency photovoltaic modules designed for residential,
        commercial and utility-scale installations.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-semibold mb-2">HB-400M</h2>
          <p className="text-sm text-gray-600">400 W Mono | 21.2 % Efficiency</p>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-semibold mb-2">HB-450B</h2>
          <p className="text-sm text-gray-600">450 W Bifacial | 22.1 % Efficiency</p>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-semibold mb-2">HB-500M</h2>
          <p className="text-sm text-gray-600">500 W Mono | 22.8 % Efficiency</p>
        </div>
      </div>

      <blockquote className="mt-8 border-l-4 border-blue-500 bg-blue-50 italic p-4 rounded">
        “Reliable, renewable, ready for the future.”
      </blockquote>
    </div>
  );
}