import { useEffect } from 'react';

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-24 pb-20 px-4 purple-gradient-bg">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-gray-900 mb-6">
          The everything app, for IT.
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-2 max-w-3xl mx-auto">
          One platform for automation, security, monitoring, and more.
        </p>
        <p className="text-xl md:text-2xl text-gray-600 mb-8">
          Secure it. Automate it. Take Control—together.
        </p>
        
        {/* Primary CTA */}
        <div className="flex justify-center">
          <button 
            onClick={() => scrollToSection('contact')}
            className="bg-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-purple-500 hover:shadow-lg transition-all duration-300"
          >
            Get started. It's FREE!
          </button>
        </div>
        
        {/* Subtext */}
        <p className="text-sm text-gray-500 mt-4">
          Free Forever. No Credit Card.
        </p>
      </div>
    </section>
  );
}