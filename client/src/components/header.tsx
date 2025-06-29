import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Home, Shield, Building, Phone, Menu, X, Zap, Sparkles, Cpu, Target, Lock } from 'lucide-react';
import { useScrollDirection, useScrollPosition, useScrollProgress } from '@/hooks/use-scroll';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const scrollDirection = useScrollDirection();
  const scrollPosition = useScrollPosition();
  const scrollProgress = useScrollProgress();
  const isScrolled = scrollPosition > 50;

  // Hide immediately on scroll down, show only when scrolling up past 50%
  useEffect(() => {
    const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollPosition / documentHeight) * 100;
    
    if (scrollDirection === 'down' && scrollPosition > 100) {
      // Hide immediately when scrolling down
      setIsHeaderVisible(false);
    } else if (scrollDirection === 'up' && scrollPercent > 50) {
      // Only show when scrolling up and past 50% of page
      setIsHeaderVisible(true);
    } else if (scrollPosition <= 100) {
      // Always show at top of page
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

  const navItems = [
    { name: 'Blog', icon: Shield, action: () => scrollToSection('about') },
    { name: 'Services', icon: Building, action: () => scrollToSection('services') },
    { name: 'Contact', icon: Phone, action: () => scrollToSection('contact') },
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
      
      <header 
        className={`fixed top-1 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
          isHeaderVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div 
            className="rounded-3xl mx-4 mt-2 mb-1 border border-gray-200/50 shadow-lg relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgb(17, 24, 39) 0%, rgb(88, 28, 135) 50%, rgb(67, 56, 202) 100%)',
              backgroundAttachment: 'fixed'
            }}
          >
            {/* Background Pattern Effects */}
            <div 
              className="absolute inset-0"
              style={{
                background: 'radial-gradient(circle at 30% 40%, rgba(120,119,198,0.3) 0%, transparent 50%)',
                backgroundAttachment: 'fixed'
              }}
            ></div>
            <div 
              className="absolute inset-0"
              style={{
                background: 'radial-gradient(circle at 70% 60%, rgba(167,139,250,0.2) 0%, transparent 50%)',
                backgroundAttachment: 'fixed'
              }}
            ></div>
            <div className="flex items-center justify-between h-16 px-6">
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
                    <span className="text-xl font-bold text-white group-hover:text-purple-200 transition-colors">ReactorIX</span>
                    <Badge variant="secondary" className="hidden lg:flex text-xs bg-white/20 text-purple-200 border-purple-300/50 px-2 py-0">
                      <Zap className="w-3 h-3 mr-1" />
                      Reactor Solution
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
                    className="text-gray-200 hover:text-white hover:bg-white/20 font-medium px-4 py-2 rounded-lg transition-all duration-200 group"
                  >
                    <item.icon className="w-4 h-4 mr-2 group-hover:text-purple-200" />
                    {item.name}
                  </Button>
                ))}
              </nav>

              {/* Right side CTAs */}
              <div className="hidden md:flex items-center space-x-3">
                <Button 
                  variant="ghost"
                  className="text-white hover:text-purple-200 hover:bg-white/10 font-medium transition-all duration-200"
                >
                  Log In
                </Button>
                <Button 
                  onClick={() => scrollToSection('contact')}
                  className="bg-white/20 hover:bg-white/30 text-white font-medium px-6 py-2 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group backdrop-blur-md border border-white/30"
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
                  className="text-white"
                >
                  {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </Button>
              </div>
            </div>

            {/* Mobile Navigation Menu */}
            {isMenuOpen && (
              <div className="md:hidden border-t border-white/20 bg-black/20 backdrop-blur-md mx-4 mb-2 rounded-b-3xl">
                <div className="px-2 pt-2 pb-3 space-y-1">
                  {navItems.map((item, index) => (
                    <Button
                      key={index}
                      variant="ghost"
                      onClick={item.action}
                      className="w-full justify-start text-gray-200 hover:text-white hover:bg-white/20 font-medium py-3 transition-all duration-200"
                    >
                      <item.icon className="w-5 h-5 mr-3" />
                      {item.name}
                    </Button>
                  ))}
                  <div className="border-t border-white/20 pt-3 mt-3 space-y-2">
                    <Button 
                      variant="ghost"
                      className="w-full text-white hover:text-purple-200 hover:bg-white/10"
                    >
                      Log In
                    </Button>
                    <Button 
                      onClick={() => scrollToSection('contact')}
                      className="w-full bg-white/20 hover:bg-white/30 text-white backdrop-blur-md border border-white/30"
                    >
                      Get Started
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>
    </>
  );
}