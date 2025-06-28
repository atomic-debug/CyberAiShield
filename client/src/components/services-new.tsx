import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function Services() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionHeight = rect.height;
      const viewportHeight = window.innerHeight;
      
      // Calculate progress based on how much of the section has been scrolled through
      let progress = 0;
      if (rect.top < viewportHeight && rect.bottom > 0) {
        const visibleTop = Math.max(0, viewportHeight - rect.top);
        const visibleHeight = Math.min(sectionHeight, visibleTop);
        progress = Math.min(1, visibleHeight / (sectionHeight * 0.7));
      }
      
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial calculation
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getItemStyle = (index: number) => {
    const baseTransform = scrollProgress * 60; // Max collapse distance
    const itemOffset = index * 20; // Stagger effect
    const transform = Math.max(0, baseTransform - itemOffset);
    
    const shadowIntensity = Math.min(scrollProgress * 3, 1);
    const shadow = `0 ${4 + transform/10}px ${12 + transform/5}px rgba(0,0,0,${0.1 + shadowIntensity * 0.2})`;
    
    return {
      transform: `translateY(-${transform}px)`,
      boxShadow: shadow,
      zIndex: 3 - index,
      transition: 'none' // Smooth real-time updates
    };
  };
  return (
    <section ref={sectionRef} id="services" className="py-12 px-4 scroll-offset relative">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Minimal Header */}
        <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-8 leading-[0.9] tracking-tight">
          Three Core <span className="text-purple-600">Pillars</span>
        </h2>
        
        {/* Clean Text-Based Services with Dynamic Shadows */}
        <div className="space-y-12 text-left relative">
          
          <div 
            className="border-l-4 border-purple-600 pl-8 py-4 rounded-l-xl bg-white/50 backdrop-blur-sm relative"
            style={getItemStyle(0)}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Fortress Security</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Military-grade protection that adapts, learns, and eliminates threats before they reach your infrastructure. 
              <span className="font-semibold text-purple-700"> Zero-compromise defense.</span>
            </p>
          </div>
          
          <div 
            className="border-l-4 border-purple-600 pl-8 py-4 rounded-l-xl bg-white/50 backdrop-blur-sm relative"
            style={getItemStyle(1)}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Infinite Scale</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Seamless expansion that grows with your ambitions. From startup to enterprise, 
              <span className="font-semibold text-purple-700"> scale without limits or compromise.</span>
            </p>
          </div>
          
          <div 
            className="border-l-4 border-purple-600 pl-8 py-4 rounded-l-xl bg-white/50 backdrop-blur-sm relative"
            style={getItemStyle(2)}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Total Automation</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              AI-powered systems that operate your infrastructure with precision and intelligence. 
              <span className="font-semibold text-purple-700"> Like having 1000 experts on your team.</span>
            </p>
          </div>
          
        </div>
        
        {/* Simple CTA */}
        <div className="mt-16">
          <Button 
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-12 py-6 text-xl font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            Deploy All Three
            <ArrowRight className="w-6 h-6 ml-3" />
          </Button>
        </div>
        
      </div>
    </section>
  );
}