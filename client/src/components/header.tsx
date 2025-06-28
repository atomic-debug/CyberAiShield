import { useState } from 'react';
import { useScrollDirection, useScrollPosition } from '@/hooks/use-scroll';
import { cn } from '@/lib/utils';

export default function Header() {
  const scrollDirection = useScrollDirection();
  const scrollPosition = useScrollPosition();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const isHidden = scrollDirection === 'down' && scrollPosition > 50;

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out bg-white border-b border-gray-200",
        isHidden && "header-hidden"
      )}
    >
      <div className="max-w-7xl mx-auto px-4">
        <nav className="flex items-center justify-between h-16">
          {/* Logo - ClickUp style */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-rose-500 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
            </div>
            <div className="text-xl font-bold text-gray-900">RactorIX</div>
          </div>
          
          {/* Navigation Links - ClickUp style */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('services')}
              className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
            >
              Solutions
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
            >
              Pricing
            </button>
            <a href="#" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
              Resources
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
              Enterprise
            </a>
          </div>
          
          {/* CTA Buttons - ClickUp style */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
              Log in
            </a>
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-rose-500 hover:bg-rose-600 text-white px-4 py-2 rounded-lg font-medium transition-colors"
            >
              Sign up
            </button>
          </div>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </button>
        </nav>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="px-4 py-4 space-y-4">
              <button 
                onClick={() => scrollToSection('services')}
                className="block w-full text-left text-gray-600 hover:text-gray-900 font-medium"
              >
                Solutions
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left text-gray-600 hover:text-gray-900 font-medium"
              >
                Pricing
              </button>
              <a href="#" className="block text-gray-600 hover:text-gray-900 font-medium">
                Resources
              </a>
              <a href="#" className="block text-gray-600 hover:text-gray-900 font-medium">
                Enterprise
              </a>
              <div className="pt-4 border-t border-gray-200 space-y-2">
                <a href="#" className="block text-gray-600 hover:text-gray-900 font-medium">
                  Log in
                </a>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="block w-full bg-rose-500 hover:bg-rose-600 text-white px-4 py-2 rounded-lg font-medium transition-colors text-center"
                >
                  Sign up
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}