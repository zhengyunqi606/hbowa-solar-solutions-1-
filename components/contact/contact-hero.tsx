export function ContactHero() {
  return (
    <div className="relative w-full h-96 bg-gradient-to-r from-blue-900 via-blue-700 to-blue-600 overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" viewBox="0 0 1200 300" preserveAspectRatio="none">
          <circle cx="100" cy="50" r="30" fill="white" opacity="0.3" />
          <circle cx="300" cy="80" r="40" fill="white" opacity="0.2" />
          <circle cx="500" cy="40" r="35" fill="white" opacity="0.25" />
          <circle cx="700" cy="100" r="45" fill="white" opacity="0.15" />
          <circle cx="900" cy="60" r="38" fill="white" opacity="0.2" />
          <circle cx="1100" cy="90" r="42" fill="white" opacity="0.18" />

          <line x1="100" y1="50" x2="300" y2="80" stroke="white" strokeWidth="1" opacity="0.2" />
          <line x1="300" y1="80" x2="500" y2="40" stroke="white" strokeWidth="1" opacity="0.2" />
          <line x1="500" y1="40" x2="700" y2="100" stroke="white" strokeWidth="1" opacity="0.2" />
          <line x1="700" y1="100" x2="900" y2="60" stroke="white" strokeWidth="1" opacity="0.2" />
          <line x1="900" y1="60" x2="1100" y2="90" stroke="white" strokeWidth="1" opacity="0.2" />
        </svg>
      </div>

      <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
        <h1 className="text-5xl font-bold text-center mb-4">Contact With Us</h1>
        <p className="text-lg text-center max-w-2xl text-blue-100">Get in touch with our team. We are here to help.</p>
      </div>
    </div>
  )
}
