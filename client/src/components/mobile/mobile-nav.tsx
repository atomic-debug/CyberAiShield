import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Home, 
  Shield, 
  MessageCircle, 
  User, 
  Menu, 
  X,
  ChevronRight,
  LogIn,
  LogOut,
  GraduationCap,
  Zap
} from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { useLocation } from 'wouter';
import { useSwipe, useHapticFeedback } from '@/hooks/use-touch';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const { user, isAuthenticated, logout } = useAuth();
  const [, navigate] = useLocation();
  const { lightImpact } = useHapticFeedback();

  const swipeHandlers = useSwipe({
    onSwipeLeft: onClose
  });

  const handleTouchStart = (e: React.TouchEvent) => {
    swipeHandlers.onTouchStart(e.nativeEvent);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    swipeHandlers.onTouchEnd(e.nativeEvent);
  };

  const handleNavigation = (path: string) => {
    lightImpact();
    navigate(path);
    onClose();
  };

  const handleLogout = () => {
    lightImpact();
    logout(undefined, {
      onSuccess: () => {
        navigate('/');
        onClose();
      },
    });
  };

  const scrollToSection = (sectionId: string) => {
    lightImpact();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    onClose();
  };

  const navItems = [
    { 
      name: 'Home', 
      icon: Home, 
      action: () => handleNavigation('/'),
      description: 'Back to homepage'
    },
    { 
      name: 'Product', 
      icon: Shield, 
      action: () => scrollToSection('about'),
      description: 'Learn about our platform'
    },
    { 
      name: 'Solutions', 
      icon: Zap, 
      action: () => scrollToSection('services'),
      description: 'Explore our services'
    },
    { 
      name: 'Tutorial', 
      icon: GraduationCap, 
      action: () => handleNavigation(isAuthenticated ? '/onboarding' : '/register'),
      description: 'Interactive learning'
    },
  ];

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden"
        onClick={onClose}
      />
      
      {/* Navigation Panel */}
      <div 
        className="fixed top-0 right-0 h-full w-80 max-w-full bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-out md:hidden"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-100 bg-gradient-to-r from-purple-50 to-blue-50">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
              <Zap className="w-4 h-4 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">ReactorIX</h3>
              <Badge variant="secondary" className="text-xs">
                Atomic Solutions
              </Badge>
            </div>
          </div>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="text-gray-500"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        {/* User Section */}
        {isAuthenticated && (
          <div className="p-4 bg-gray-50 border-b border-gray-100">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                <User className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <p className="font-medium text-gray-900">{user?.username}</p>
                <p className="text-sm text-gray-500 capitalize">{user?.role} Account</p>
              </div>
            </div>
            
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleNavigation('/dashboard')}
              className="w-full mt-3 justify-between"
            >
              <span>Go to Dashboard</span>
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        )}

        {/* Navigation Items */}
        <div className="flex-1 overflow-y-auto">
          <nav className="p-4 space-y-2">
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={item.action}
                className="w-full flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-50 transition-all duration-200 group text-left"
              >
                <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center group-hover:bg-purple-100 transition-colors">
                  <item.icon className="w-5 h-5 text-purple-600" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-900">{item.name}</p>
                  <p className="text-sm text-gray-500">{item.description}</p>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-colors" />
              </button>
            ))}
          </nav>
        </div>

        {/* Bottom Actions */}
        <div className="p-4 border-t border-gray-100 space-y-2">
          {isAuthenticated ? (
            <Button
              variant="ghost"
              onClick={handleLogout}
              className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50"
            >
              <LogOut className="w-4 h-4 mr-3" />
              Sign Out
            </Button>
          ) : (
            <>
              <Button
                variant="ghost"
                onClick={() => handleNavigation('/login')}
                className="w-full justify-start"
              >
                <LogIn className="w-4 h-4 mr-3" />
                Sign In
              </Button>
              <Button
                onClick={() => handleNavigation('/register')}
                className="w-full bg-purple-600 hover:bg-purple-700 text-white"
              >
                Get Started
              </Button>
            </>
          )}
        </div>
        
        {/* Swipe Indicator */}
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-12 bg-gray-200 rounded-r-full" />
      </div>
    </>
  );
}