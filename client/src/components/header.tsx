export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
                <rect width="32" height="32" rx="8" fill="url(#gradient)"/>
                <path d="M16 10L10 14L16 18L22 14L16 10Z" fill="white"/>
                <path d="M10 18L16 22L22 18" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                <defs>
                  <linearGradient id="gradient" x1="0" y1="0" x2="32" y2="32">
                    <stop stopColor="#7C3AED"/>
                    <stop offset="1" stopColor="#A855F7"/>
                  </linearGradient>
                </defs>
              </svg>
              <span className="text-lg font-semibold text-gray-900">RactorIX – Atomic Solution | AI-Driven IT Automation & Cybersecurity</span>
            </div>
          </div>
            
          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button className="text-gray-600 hover:text-gray-900 font-medium flex items-center space-x-1">
              <span>Product</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
              </svg>
            </button>
            <button className="text-gray-600 hover:text-gray-900 font-medium flex items-center space-x-1">
              <span>Solutions</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
              </svg>
            </button>
            <button className="text-gray-600 hover:text-gray-900 font-medium flex items-center space-x-1">
              <span>Resources</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
              </svg>
            </button>
            <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">Pricing</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">Enterprise</a>
          </nav>

          {/* Right side CTAs */}
          <div className="flex items-center space-x-4">
            <button className="text-gray-600 hover:text-gray-900 font-medium">Contact Sales</button>
            <button className="text-gray-600 hover:text-gray-900 font-medium">Log In</button>
            <button className="bg-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-purple-700 transition-colors">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}