import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ChevronDown, Menu, X, Sparkles, Shield, Zap, BarChart3 } from 'lucide-react';
import { useScrollProgress } from '@/hooks/use-scroll';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const scrollProgress = useScrollProgress();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      // Determine active section
      const sections = ['hero', 'services', 'about', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom > 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    {
      name: 'Services',
      action: () => scrollToSection('services'),
      icon: Shield
    },
    {
      name: 'About',
      action: () => scrollToSection('about'),
      icon: BarChart3
    },
    {
      name: 'Contact',
      action: () => scrollToSection('contact'),
      icon: Sparkles
    }
  ];

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 z-[60] bg-gray-200/20">
        <div 
          className="h-full bg-gradient-to-r from-purple-600 to-indigo-600 transition-all duration-150 ease-out shadow-lg shadow-purple-500/30"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
      
      <header className={`fixed top-1 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/50' : 'bg-white/90 backdrop-blur-sm border-b border-gray-100'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-3 group cursor-pointer" onClick={() => scrollToSection('hero')}>
              <div className="relative">
                <svg className="w-8 h-8 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 32 32" fill="none">
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
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-gray-900 group-hover:text-purple-700 transition-colors">RactorIX</span>
                <Badge variant="secondary" className="hidden lg:flex text-xs bg-purple-50 text-purple-600 border-purple-200 px-2 py-0">
                  <Zap className="w-3 h-3 mr-1" />
                  Atomic Solution
                </Badge>
              </div>
            </div>
          </div>
            
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <Button
                key={index}
                variant="ghost"
                onClick={item.action}
                className="text-gray-600 hover:text-purple-700 hover:bg-purple-50 font-medium px-4 py-2 rounded-lg transition-all duration-200 group"
              >
                <item.icon className="w-4 h-4 mr-2 group-hover:text-purple-600" />
                {item.name}
              </Button>
            ))}
          </nav>

          {/* Right side CTAs */}
          <div className="hidden md:flex items-center space-x-3">
            <Button 
              variant="ghost"
              onClick={() => scrollToSection('contact')}
              className="text-gray-600 hover:text-purple-700 hover:bg-purple-50 font-medium transition-all duration-200"
            >
              Contact Sales
            </Button>
            <Button 
              variant="outline"
              className="border-purple-200 text-purple-700 hover:bg-purple-50 font-medium transition-all duration-200"
            >
              Log In
            </Button>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-purple-600 hover:bg-purple-700 text-white font-medium px-6 py-2 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              Get Started
              <Sparkles className="w-4 h-4 ml-2 group-hover:text-purple-200 transition-colors" />
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-100 bg-white/95 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  onClick={item.action}
                  className="w-full justify-start text-gray-600 hover:text-purple-700 hover:bg-purple-50 font-medium py-3 transition-all duration-200"
                >
                  <item.icon className="w-5 h-5 mr-3" />
                  {item.name}
                </Button>
              ))}
              <div className="border-t border-gray-100 pt-3 mt-3 space-y-2">
                <Button 
                  variant="outline"
                  className="w-full border-purple-200 text-purple-700 hover:bg-purple-50"
                >
                  Log In
                </Button>
                <Button 
                  onClick={() => scrollToSection('contact')}
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white"
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
    </>
  );
}