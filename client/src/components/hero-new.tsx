import { useState, useEffect } from 'react';
import { useDynamicBackground } from '@/hooks/use-dynamic-background';

export default function Hero() {
  const { colors, mousePosition, isInteracting, timeOfDay } = useDynamicBackground();
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Dynamic Background */}
      <div 
        className="absolute inset-0 transition-all duration-1000 ease-in-out"
        style={{
          background: `linear-gradient(135deg, ${colors.from} 0%, ${colors.to} 50%, ${colors.accent} 100%)`,
          transform: `translate(${mousePosition.x * 10 - 5}px, ${mousePosition.y * 10 - 5}px)`,
          filter: isInteracting ? 'brightness(1.2) saturate(1.3)' : 'brightness(1) saturate(1)'
        }}
      />
      
      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-40" />
      
      {/* Company Logo */}
      <div className="absolute top-8 left-8 z-20">
        <div className="flex items-center space-x-3">
          <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none">
            <rect width="40" height="40" rx="10" fill="url(#gradient)"/>
            <path d="M20 12L12 18L20 24L28 18L20 12Z" fill="white"/>
            <path d="M12 24L20 30L28 24" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            <defs>
              <linearGradient id="gradient" x1="0" y1="0" x2="40" y2="40">
                <stop stopColor="#7C3AED"/>
                <stop offset="1" stopColor="#A855F7"/>
              </linearGradient>
            </defs>
          </svg>
          <span className="text-2xl font-bold text-white">ReactorIX</span>
        </div>
      </div>

      {/* Time of Day Indicator */}
      <div className="absolute top-4 right-4 z-20">
        <div className="bg-black bg-opacity-50 backdrop-blur-sm rounded-lg px-4 py-2">
          <p className="text-white text-sm font-medium capitalize">
            {timeOfDay} Mode
          </p>
          <div className="w-full h-1 bg-white bg-opacity-30 rounded-full mt-1">
            <div 
              className="h-full bg-white rounded-full transition-all duration-300"
              style={{ width: `${(mousePosition.x * 100)}%` }}
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <p className="text-xl md:text-2xl mb-4 text-gray-200 transition-all duration-300">
          Adaptive, Client-Focused Cybersecurity
        </p>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight transition-all duration-300">
          Cut through the noise —<br />
          get cybersecurity that works.
        </h1>
        
        <p className="text-lg md:text-xl mb-4 font-semibold transition-all duration-300">
          No bloat. No vendor agendas.
        </p>
        
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed transition-all duration-300">
          Custom cybersecurity solutions tailored to your size, budget, and security maturity—delivering the right protection at the right time.
        </p>

        <button 
          onClick={() => scrollToSection('about')}
          className="inline-flex items-center px-8 py-3 text-lg font-semibold text-white bg-purple-600 hover:bg-purple-700 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          style={{
            boxShadow: isInteracting 
              ? `0 20px 40px rgba(147, 51, 234, 0.4)` 
              : `0 10px 20px rgba(147, 51, 234, 0.2)`
          }}
        >
          Learn More
        </button>
      </div>
    </section>
  );
}