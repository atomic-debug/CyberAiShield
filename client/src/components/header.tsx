import { useState, useEffect, useCallback, memo } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Home, Shield, Building, Phone, Menu, X, Zap, LogIn, Cpu, Target, Lock, GraduationCap, User, LogOut } from 'lucide-react';
import { useScrollDirection, useScrollPosition, useScrollProgress } from '@/hooks/use-scroll';
import { useAuth } from '@/hooks/useAuth';
import { useLocation } from 'wouter';

const Header = memo(function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [, navigate] = useLocation();
  const { user, isAuthenticated, logout } = useAuth();
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
    navigate('/login');
  };

  const handleRegister = () => {
    navigate('/register');
  };

  const handleDashboard = () => {
    navigate('/dashboard');
  };

  const handleLogout = () => {
    logout(undefined, {
      onSuccess: () => {
        navigate('/');
      },
    });
  };

  const handleStartOnboarding = () => {
    if (isAuthenticated) {
      navigate('/onboarding');
    } else {
      navigate('/register');
    }
  };

  const navItems = [
    { name: 'Product', action: () => scrollToSection('about') },
    { name: 'Solutions', action: () => scrollToSection('services') },
    { name: 'Resources', action: () => scrollToSection('contact') },
    { name: 'Pricing', action: () => scrollToSection('contact') },
    { name: 'Tutorial', action: handleStartOnboarding, icon: GraduationCap },
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
                  className="text-gray-700 hover:text-primary font-medium transition-colors flex items-center space-x-2"
                >
                  {item.icon && <item.icon className="w-4 h-4" />}
                  <span>{item.name}</span>
                </button>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center space-x-4">
              {isAuthenticated ? (
                <>
                  <div className="flex items-center text-sm text-gray-700 mr-2">
                    <User className="h-4 w-4 mr-1" />
                    {user?.username}
                  </div>
                  <Button
                    variant="ghost"
                    onClick={handleDashboard}
                    className="text-gray-700 hover:text-primary"
                  >
                    Dashboard
                  </Button>
                  <Button
                    variant="ghost"
                    onClick={handleLogout}
                    className="text-gray-700 hover:text-primary"
                  >
                    <LogOut className="h-4 w-4 mr-2" />
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  <Button
                    variant="ghost"
                    onClick={handleLogin}
                    className="text-gray-700 hover:text-primary"
                  >
                    <LogIn className="h-4 w-4 mr-2" />
                    Log in
                  </Button>
                  <Button
                    onClick={handleRegister}
                    className="clickup-button-primary"
                  >
                    Get started
                  </Button>
                </>
              )}
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
                  {isAuthenticated ? (
                    <>
                      <div className="text-center text-sm text-gray-700 mb-2">
                        Welcome, {user?.username}
                      </div>
                      <Button 
                        variant="ghost"
                        onClick={handleDashboard}
                        className="w-full justify-center"
                      >
                        Dashboard
                      </Button>
                      <Button 
                        variant="ghost"
                        onClick={handleLogout}
                        className="w-full justify-center"
                      >
                        <LogOut className="h-4 w-4 mr-2" />
                        Logout
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button 
                        variant="ghost"
                        onClick={handleLogin}
                        className="w-full justify-center"
                      >
                        <LogIn className="h-4 w-4 mr-2" />
                        Log in
                      </Button>
                      <Button 
                        onClick={handleRegister}
                        className="w-full clickup-button-primary"
                      >
                        Get started
                      </Button>
                    </>
                  )}
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