import { useState, useEffect } from 'react';

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;
      const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = currentScrollY / pageHeight;
      
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY || scrollPercentage > 0.5) {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      {/* ClickUp-style minimal header */}
      <div className="bg-white/95 backdrop-blur-sm border-b border-gray-200 px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo - ClickUp style */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-purple-700 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2L3 7l7 5 7-5-7-5zM3 13l7 5 7-5M3 9l7 5 7-5"/>
              </svg>
            </div>
            <span className="text-xl font-semibold text-gray-900">ReactorIX</span>
          </div>
          
          {/* Navigation - minimal ClickUp style */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#blog" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">Blog</a>
            <a href="#services" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">Services</a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">Contact</a>
          </nav>
          
          {/* CTA Button - ClickUp style */}
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg font-medium transition-colors shadow-sm">
            Log In
          </button>
        </div>
      </div>
    </header>
  );
}