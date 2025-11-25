"use client"

export function AboutHero() {
  return (
    <div className="relative w-full h-96 bg-gradient-to-r from-blue-900 via-blue-700 to-blue-600 overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2760%27%20height%3D%2760%27%20viewBox%3D%270%200%2060%2060%27%20xmlns%3D%27http%3A//www.w3.org/2000/svg%27%3E%3Cg%20fill%3D%27none%27%20fill-rule%3D%27evenodd%27%3E%3Cg%20fill%3D%27%23ffffff%27%20fill-opacity%3D%270.1%27%3E%3Cpath%20d%3D%27M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%27/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
          <svg className="w-full h-full" viewBox="0 0 1200 300">
            <text x="50%" y="50%" textAnchor="middle" fontSize="120" fill="white" opacity="0.1" fontWeight="bold">
              ABOUT HBOWA
            </text>
          </svg>
        </div>

        <h1 className="relative text-5xl font-bold text-center mb-4 text-white drop-shadow-lg">About HBOWA</h1>
        <p className="relative text-lg text-center max-w-2xl text-blue-100">
          Discover how HBOWA is leading the renewable energy revolution
        </p>
      </div>
    </div>
  )
}
