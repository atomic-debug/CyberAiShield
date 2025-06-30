import { useState, useEffect, useCallback, memo } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Home, Shield, Building, Phone, Menu, X, Zap, LogIn, Cpu, Target, Lock } from 'lucide-react';
import { useScrollDirection, useScrollPosition, useScrollProgress } from '@/hooks/use-scroll';

const Header = memo(function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const scrollDirection = useScrollDirection();
  const scrollPosition = useScrollPosition();
  const scrollProgress = useScrollProgress();
  const isScrolled = scrollPosition > 50;

  // ClickUp-style header behavior
  useEffect(() => {
    if (scrollDirection === 'down' && scrollPosition > 100) {
      setIsHeaderVisible(false);
    } else if (scrollDirection === 'up' || scrollPosition <= 100) {
      setIsHeaderVisible(true);
    }
  }, [scrollDirection, scrollPosition]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleLogin = () => {
    console.log('Redirecting to secure login...');
  };

  const navItems = [
    { name: 'Product', action: () => scrollToSection('about') },
    { name: 'Solutions', action: () => scrollToSection('services') },
    { name: 'Resources', action: () => scrollToSection('contact') },
    { name: 'Pricing', action: () => scrollToSection('contact') },
  ];

  return (
    <>
      {/* ClickUp-style progress bar */}
      <div className="fixed top-0 left-0 right-0 h-0.5 bg-gray-100 z-[60]">
        <div 
          className="h-full bg-primary transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
      
      <header className={`fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 transition-transform duration-300 ${
        isScrolled ? 'shadow-sm' : ''
      } ${isHeaderVisible ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="clickup-container">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex items-center space-x-3 cursor-pointer group" onClick={() => scrollToSection('hero')}>
                <div className="relative">
                  <div className="w-10 h-10 clickup-gradient-bg rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <span className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors">
                    ReactorIX
                  </span>
                  <Badge variant="secondary" className="ml-2 text-xs">
                    Atomic Solutions
                  </Badge>
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <button
                  key={index}
                  onClick={item.action}
                  className="text-gray-700 hover:text-primary font-medium transition-colors"
                >
                  {item.name}
                </button>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center space-x-4">
              <Button
                variant="ghost"
                onClick={handleLogin}
                className="text-gray-700 hover:text-primary"
              >
                Log in
              </Button>
              <Button
                onClick={() => scrollToSection('contact')}
                className="clickup-button-primary"
              >
                Get started
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-gray-100 bg-white">
              <div className="px-4 py-4 space-y-2">
                {navItems.map((item, index) => (
                  <button
                    key={index}
                    onClick={item.action}
                    className="w-full text-left py-3 px-4 text-gray-700 hover:bg-gray-50 rounded-lg font-medium transition-colors"
                  >
                    {item.name}
                  </button>
                ))}
                <div className="border-t border-gray-100 pt-4 space-y-2">
                  <Button 
                    variant="ghost"
                    onClick={handleLogin}
                    className="w-full justify-center"
                  >
                    Log in
                  </Button>
                  <Button 
                    onClick={() => scrollToSection('contact')}
                    className="w-full clickup-button-primary"
                  >
                    Get started
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
});

export default Header;