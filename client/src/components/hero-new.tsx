import { useState, useEffect } from 'react';

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Hero Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080"><rect width="1920" height="1080" fill="%23161b22"/><circle cx="400" cy="300" r="200" fill="%23321b47" opacity="0.3"/><circle cx="1200" cy="600" r="300" fill="%234c1d95" opacity="0.2"/><polygon points="600,200 800,400 600,600 400,400" fill="%236366f1" opacity="0.15"/></svg>')`
        }}
      />
      
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

      {/* Main Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <p className="text-xl md:text-2xl mb-4 text-purple-200">
          Adaptive, Client-Focused Cybersecurity
        </p>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Cut through the noise —<br />
          get cybersecurity that works.
        </h1>
        
        <p className="text-lg md:text-xl mb-4 font-semibold">
          No bloat. No vendor agendas.
        </p>
        
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
          Custom cybersecurity solutions tailored to your size, budget, and security maturity—delivering the right protection at the right time.
        </p>

        <button 
          onClick={() => scrollToSection('about')}
          className="inline-flex items-center px-8 py-3 text-lg font-semibold text-white bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
        >
          Learn More
        </button>
      </div>
    </section>
  );
}