import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';

export default function Services() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (ticking) return;
      
      ticking = true;
      requestAnimationFrame(() => {
        if (!sectionRef.current) {
          ticking = false;
          return;
        }
        
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
        ticking = false;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial calculation
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getItemStyle = (index: number) => {
    // Calculate how much each item should compress
    const compressionFactor = Math.min(scrollProgress, 0.8); // Max 80% compression
    const itemSpacing = 12; // Original spacing in rem (from space-y-12)
    const compressedSpacing = itemSpacing * (1 - compressionFactor * 0.8); // Reduce spacing as we scroll
    
    // Shadow gets more intense as items get closer
    const shadowIntensity = compressionFactor;
    const shadowBlur = 8 + shadowIntensity * 12;
    const shadowY = 2 + shadowIntensity * 4;
    const shadow = `0 ${shadowY}px ${shadowBlur}px rgba(0,0,0,${0.08 + shadowIntensity * 0.12})`;
    
    // Scale items slightly as they compress
    const scale = 1 - (compressionFactor * 0.05 * (2 - index)); // Later items scale less
    
    return {
      marginTop: index === 0 ? '0' : `${compressedSpacing}rem`,
      transform: `scale(${scale})`,
      transformOrigin: 'left center',
      boxShadow: shadow,
      opacity: 1 - (compressionFactor * 0.1), // Slight fade as they compress
      transition: 'none' // Smooth real-time updates
    };
  };
  return (
    <section ref={sectionRef} id="services" className="py-1 px-4 scroll-offset relative">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-5xl mx-auto">
          {/* Services section content removed */}
        </div>
      </div>
    </section>
  );
}