import { useState, useEffect } from 'react';
import Header from '@/components/header';
import Hero from '@/components/hero';
import Services from '@/components/services';
import Contact from '@/components/contact';
import Footer from '@/components/footer';
import AIChat from '@/components/ai-chat';
import { ChevronUp, MousePointer2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useDynamicBackground } from '@/hooks/use-dynamic-background';

export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHoveringInteractive, setIsHoveringInteractive] = useState(false);
  const [ripples, setRipples] = useState<Array<{ x: number; y: number; id: number }>>([]);
  const { colors, mousePosition, isInteracting, timeOfDay } = useDynamicBackground();
  
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
      
      // Check if hovering over interactive elements
      const target = e.target as HTMLElement;
      const isInteractive = target.closest('button, a, input, textarea, [role="button"]');
      setIsHoveringInteractive(!!isInteractive);
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  // Handle click for ripple effect
  const handlePageClick = (e: React.MouseEvent) => {
    const rippleId = Date.now();
    const newRipple = {
      x: e.clientX,
      y: e.clientY,
      id: rippleId
    };
    
    setRipples(prev => [...prev, newRipple]);
    
    // Remove ripple after animation
    setTimeout(() => {
      setRipples(prev => prev.filter(r => r.id !== rippleId));
    }, 2000);
  };
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // Dispatch custom event to show AI assistant
    window.dispatchEvent(new CustomEvent('jumpToTop'));
  };
  
  return (
    <div 
      className="text-gray-900 overflow-x-hidden min-h-screen relative transition-all duration-1000"
      style={{
        background: `linear-gradient(135deg, ${colors.from} 0%, ${colors.to} 100%)`
      }}
      onClick={handlePageClick}
    >
      {/* Dynamic Background Overlay - Subtle */}
      <div 
        className="fixed inset-0 pointer-events-none transition-opacity duration-3000"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, ${colors.accent}10 0%, transparent 70%)`,
          opacity: 0.2
        }}
      />
      
      
      
      {/* Interactive Particles - Reduced */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-600/10 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `translate(${(mousePosition.x - 0.5) * 20}px, ${(mousePosition.y - 0.5) * 20}px)`,
              transition: 'transform 2s ease-out'
            }}
          />
        ))}
      </div>
      
      {/* Click Ripples - Subtle */}
      <div className="fixed inset-0 pointer-events-none">
        {ripples.map((ripple) => (
          <div
            key={ripple.id}
            className="absolute rounded-full animate-ripple-expand-subtle"
            style={{
              left: ripple.x,
              top: ripple.y,
              width: '10px',
              height: '10px',
              transform: 'translate(-50%, -50%)',
              backgroundColor: colors.accent,
              opacity: 0.15
            }}
          />
        ))}
      </div>
      
      {/* Custom Cursor Trail - Subtle */}
      <div 
        className="fixed pointer-events-none z-[100] transition-all duration-300"
        style={{
          left: `${cursorPosition.x}px`,
          top: `${cursorPosition.y}px`,
          transform: 'translate(-50%, -50%)'
        }}
      >
        <div className={`w-3 h-3 rounded-full transition-all duration-500 ${
          isHoveringInteractive ? 'scale-125' : ''
        }`} 
        style={{ backgroundColor: `${colors.accent}15` }}
        />
      </div>
      
      <Header />
      <Hero />
      <Services />
      <Contact />
      <Footer />
      <AIChat />
      
      {/* Floating Action Buttons */}
      <div className="fixed bottom-24 left-6 z-40 flex flex-col gap-3">
        
        
        {/* Scroll to Top Button */}
        <Button
          onClick={scrollToTop}
          className={`rounded-full p-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg transition-all duration-700 hover:scale-105 hover:rotate-3 ${
            showScrollTop ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0 pointer-events-none'
          }`}
        >
          <ChevronUp className="w-6 h-6" />
        </Button>
      </div>
    </div>
  );
}
