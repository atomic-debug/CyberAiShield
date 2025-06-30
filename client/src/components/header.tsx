import { useState, useEffect, useCallback, memo } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header = memo(function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { name: 'Product', hasDropdown: true },
    { name: 'Solutions', hasDropdown: true },
    { name: 'Resources', hasDropdown: true },
    { name: 'Pricing', action: () => scrollToSection('pricing') },
    { name: 'Enterprise', action: () => scrollToSection('enterprise') },
  ];

  return (
    <header className={`clickup-nav ${isScrolled ? 'shadow-md' : ''}`}>
      <div className="clickup-nav-inner">
        {/* Logo */}
        <a href="#" className="clickup-nav-logo" onClick={() => scrollToSection('hero')}>
          <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">R</span>
          </div>
          <span>ReactorIX</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="clickup-nav-menu hidden md:flex">
          {navItems.map((item, index) => (
            <div key={index} className="relative group">
              <button
                onClick={item.action}
                className="clickup-nav-link flex items-center gap-1"
              >
                {item.name}
                {item.hasDropdown && (
                  <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                )}
              </button>
            </div>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-4">
          <button className="clickup-btn clickup-btn-ghost">
            Log in
          </button>
          <button 
            className="clickup-btn clickup-btn-primary"
            onClick={() => scrollToSection('contact')}
          >
            Get Started
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-6 py-4 space-y-4">
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={item.action}
                className="w-full text-left py-2 text-gray-700 hover:text-purple-600 font-medium"
              >
                {item.name}
              </button>
            ))}
            <div className="border-t pt-4 space-y-3">
              <button className="w-full clickup-btn clickup-btn-secondary">
                Log in
              </button>
              <button 
                className="w-full clickup-btn clickup-btn-primary"
                onClick={() => scrollToSection('contact')}
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
});

export default Header;