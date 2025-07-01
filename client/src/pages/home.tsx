import { useState, useEffect, useCallback, useMemo, lazy, Suspense } from 'react';
import { ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useDynamicBackground } from '@/hooks/use-dynamic-background';

// Lazy load components for better performance
const Header = lazy(() => import('@/components/header'));
const Hero = lazy(() => import('@/components/hero-new'));
const About = lazy(() => import('@/components/about-new'));
const ThreatProtection = lazy(() => import('@/components/threat-protection'));
const Contact = lazy(() => import('@/components/contact-new'));
const Footer = lazy(() => import('@/components/footer'));
const AIChat = lazy(() => import('@/components/ai-chat'));
const ErrorBoundary = lazy(() => import('@/components/error-boundary'));

// Loading fallback component
const LoadingFallback = ({ className = '' }: { className?: string }) => (
  <div className={`flex items-center justify-center py-8 ${className}`}>
    <div className="animate-spin rounded-full h-8 w-8 border-2 border-purple-600 border-t-transparent"></div>
  </div>
);

export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHoveringInteractive, setIsHoveringInteractive] = useState(false);
  const [ripples, setRipples] = useState<Array<{ x: number; y: number; id: number }>>([]);
  const { colors, mousePosition } = useDynamicBackground();
  
  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setShowScrollTop(window.scrollY > 400);
          ticking = false;
        });
        ticking = true;
      }
    };
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setCursorPosition({ x: e.clientX, y: e.clientY });
          
          // Check if hovering over interactive elements
          const target = e.target as HTMLElement;
          const isInteractive = target.closest('button, a, input, textarea, [role="button"]');
          setIsHoveringInteractive(!!isInteractive);
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  // Memoize ripple effect handler
  const handlePageClick = useCallback((e: React.MouseEvent) => {
    const rippleId = Date.now();
    const newRipple = {
      x: e.clientX,
      y: e.clientY,
      id: rippleId
    };
    
    setRipples(prev => [...prev, newRipple]);
    
    // Use RAF for better performance
    const timeoutId = setTimeout(() => {
      setRipples(prev => prev.filter(r => r.id !== rippleId));
    }, 2000);
    
    return () => clearTimeout(timeoutId);
  }, []);
  
  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.dispatchEvent(new CustomEvent('jumpToTop'));
  }, []);

  // Memoize particles array to prevent re-renders
  const particles = useMemo(() => 
    Array.from({ length: 6 }, (_, i) => ({ // Reduced from 8 to 6
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100
    }))
  , []);

  // Memoize background styles
  const backgroundStyle = useMemo(() => ({
    background: `linear-gradient(135deg, ${colors.from} 0%, ${colors.to} 100%)`
  }), [colors.from, colors.to]);

  const overlayStyle = useMemo(() => ({
    background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, ${colors.accent}10 0%, transparent 70%)`,
    opacity: 0.15 // Reduced opacity for better performance
  }), [mousePosition.x, mousePosition.y, colors.accent]);
  
  return (
    <div 
      className="text-gray-900 overflow-x-hidden min-h-screen relative transition-all duration-1000"
      style={backgroundStyle}
      onClick={handlePageClick}
    >
      {/* Dynamic Background Overlay - Optimized */}
      <div 
        className="fixed inset-0 pointer-events-none transition-opacity duration-1000"
        style={overlayStyle}
      />
      
      {/* Interactive Particles - Optimized and Reduced */}
      <div className="fixed inset-0 pointer-events-none">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-1 h-1 bg-purple-600/8 rounded-full will-change-transform"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              transform: `translate(${(mousePosition.x - 0.5) * 15}px, ${(mousePosition.y - 0.5) * 15}px)`,
              transition: 'transform 1.5s ease-out'
            }}
          />
        ))}
      </div>
      
      {/* Click Ripples - Optimized */}
      {ripples.length > 0 && (
        <div className="fixed inset-0 pointer-events-none">
          {ripples.map((ripple) => (
            <div
              key={ripple.id}
              className="absolute rounded-full animate-ripple-expand-subtle will-change-transform"
              style={{
                left: ripple.x,
                top: ripple.y,
                width: '8px',
                height: '8px',
                transform: 'translate(-50%, -50%)',
                backgroundColor: colors.accent,
                opacity: 0.1
              }}
            />
          ))}
        </div>
      )}
      
      {/* Custom Cursor Trail - Optimized */}
      <div 
        className="fixed pointer-events-none z-[100] transition-all duration-200 will-change-transform"
        style={{
          left: `${cursorPosition.x}px`,
          top: `${cursorPosition.y}px`,
          transform: 'translate(-50%, -50%)'
        }}
      >
        <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
          isHoveringInteractive ? 'scale-150' : ''
        }`} 
        style={{ backgroundColor: `${colors.accent}12` }}
        />
      </div>
      
      {/* Lazy-loaded components with error boundaries */}
      <Suspense fallback={<LoadingFallback className="h-20" />}>
        <ErrorBoundary fallback={<div className="h-20 bg-gray-100 flex items-center justify-center">Header unavailable</div>}>
          <Header />
        </ErrorBoundary>
      </Suspense>
      
      <Suspense fallback={<LoadingFallback className="h-screen" />}>
        <ErrorBoundary fallback={<div className="h-screen bg-gray-100 flex items-center justify-center">Hero unavailable</div>}>
          <Hero />
        </ErrorBoundary>
      </Suspense>
      
      <Suspense fallback={<LoadingFallback className="h-96" />}>
        <ErrorBoundary fallback={<div className="h-96 bg-gray-100 flex items-center justify-center">About unavailable</div>}>
          <About />
        </ErrorBoundary>
      </Suspense>
      
      <Suspense fallback={<LoadingFallback className="h-96" />}>
        <ErrorBoundary fallback={<div className="h-96 bg-gray-100 flex items-center justify-center">Threat Protection unavailable</div>}>
          <ThreatProtection />
        </ErrorBoundary>
      </Suspense>
      
      <Suspense fallback={<LoadingFallback className="h-96" />}>
        <ErrorBoundary fallback={<div className="h-96 bg-gray-100 flex items-center justify-center">Contact unavailable</div>}>
          <Contact />
        </ErrorBoundary>
      </Suspense>
      
      <Suspense fallback={<LoadingFallback className="h-32" />}>
        <ErrorBoundary fallback={<div className="h-32 bg-gray-100 flex items-center justify-center">Footer unavailable</div>}>
          <Footer />
        </ErrorBoundary>
      </Suspense>
      
      <Suspense fallback={<LoadingFallback className="h-16" />}>
        <ErrorBoundary fallback={<div className="fixed bottom-6 right-6 w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">AI unavailable</div>}>
          <AIChat />
        </ErrorBoundary>
      </Suspense>
      
      {/* Optimized Scroll to Top Button */}
      {showScrollTop && (
        <div className="fixed bottom-8 left-6 z-40">
          <Button
            onClick={scrollToTop}
            className="rounded-full p-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg transition-all duration-500 hover:scale-105 will-change-transform"
          >
            <ChevronUp className="w-5 h-5" />
          </Button>
        </div>
      )}
    </div>
  );
}
