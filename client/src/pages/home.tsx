import { useState, useEffect } from 'react';
import Header from '@/components/header';
import Hero from '@/components/hero';
import Services from '@/components/services';
import Contact from '@/components/contact';
import Footer from '@/components/footer';
import AIChat from '@/components/ai-chat';
import { ChevronUp, MousePointer2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHoveringInteractive, setIsHoveringInteractive] = useState(false);
  
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
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  return (
    <div className="bg-white text-gray-900 overflow-x-hidden min-h-screen">
      {/* Custom Cursor Trail */}
      <div 
        className="fixed pointer-events-none z-[100] transition-all duration-150"
        style={{
          left: `${cursorPosition.x}px`,
          top: `${cursorPosition.y}px`,
          transform: 'translate(-50%, -50%)'
        }}
      >
        <div className={`w-6 h-6 rounded-full bg-purple-600/20 transition-all duration-300 ${
          isHoveringInteractive ? 'scale-150 bg-purple-600/30' : ''
        }`} />
      </div>
      
      <Header />
      <Hero />
      <Services />
      <Contact />
      <Footer />
      <AIChat />
      
      {/* Floating Action Buttons */}
      <div className="fixed bottom-24 left-6 z-40 flex flex-col gap-3">
        {/* Scroll Progress Indicator */}
        <div className={`bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-xl transition-all duration-500 ${
          showScrollTop ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
        }`}>
          <div className="w-12 h-12 relative">
            <svg className="w-12 h-12 transform -rotate-90">
              <circle
                cx="24"
                cy="24"
                r="20"
                stroke="currentColor"
                strokeWidth="3"
                fill="none"
                className="text-gray-200"
              />
              <circle
                cx="24"
                cy="24"
                r="20"
                stroke="currentColor"
                strokeWidth="3"
                fill="none"
                strokeDasharray={`${2 * Math.PI * 20}`}
                strokeDashoffset={`${2 * Math.PI * 20 * (1 - (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)))}`}
                className="text-purple-600 transition-all duration-150"
              />
            </svg>
          </div>
        </div>
        
        {/* Scroll to Top Button */}
        <Button
          onClick={scrollToTop}
          className={`rounded-full p-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-2xl transition-all duration-500 hover:scale-110 hover:rotate-12 ${
            showScrollTop ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0 pointer-events-none'
          }`}
        >
          <ChevronUp className="w-6 h-6" />
        </Button>
      </div>
    </div>
  );
}
