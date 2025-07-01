import { useState, useEffect, useCallback, lazy, Suspense, startTransition } from 'react';
import { ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Import 2025 design components directly for now to avoid suspension issues
import Header from '@/components/header';
import Hero2025 from '@/components/hero-2025';
import About from '@/components/about';
import Services2025 from '@/components/services-2025';
import Contact from '@/components/contact';
import Footer from '@/components/footer';
import AIChat from '@/components/ai-chat';
import ErrorBoundary from '@/components/error-boundary';

// Enhanced loading fallback with 2025 styling
const LoadingFallback = ({ className = '' }: { className?: string }) => (
  <div className={`flex items-center justify-center py-8 ${className}`}>
    <div className="sustainable-card">
      <div className="animate-pulse w-8 h-8 rounded-full gradient-mocha mx-auto"></div>
    </div>
  </div>
);

export default function Home2025() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrolled = window.scrollY;
          const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
          
          setShowScrollTop(scrolled > 400);
          setScrollProgress((scrolled / maxScroll) * 100);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = useCallback(() => {
    startTransition(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }, []);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    // Observe all scroll-reveal elements
    const elements = document.querySelectorAll('.scroll-reveal');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen relative">
      {/* Progress bar - 2025 trend */}
      <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-gray-200">
        <div 
          className="h-full gradient-mocha transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <ErrorBoundary>
        {/* Header with enhanced styling */}
        <Header />
        
        {/* Hero with 2025 design trends */}
        <Hero2025 />
        
        {/* About section with scroll reveal */}
        <div className="scroll-reveal">
          <About />
        </div>
        
        {/* Services with 2025 big blocks design */}
        <div className="scroll-reveal">
          <Services2025 />
        </div>
        
        {/* Contact section */}
        <div className="scroll-reveal">
          <Contact />
        </div>
        
        {/* Footer */}
        <Footer />
        
        {/* AI Chat with enhanced mobile support */}
        <AIChat />
      </ErrorBoundary>

      {/* Enhanced scroll to top button */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-40 btn-2025-primary w-12 h-12 rounded-full p-0 refined-motion"
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-5 h-5" />
        </Button>
      )}
    </div>
  );
}