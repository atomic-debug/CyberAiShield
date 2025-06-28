import { useEffect, useRef } from 'react';

export default function Hero() {
  const particlesRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const createParticle = () => {
      if (!particlesRef.current) return;
      
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.animationDuration = (Math.random() * 6 + 4) + 's';
      particle.style.animationDelay = Math.random() * 2 + 's';
      
      particlesRef.current.appendChild(particle);
      
      setTimeout(() => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle);
        }
      }, 10000);
    };

    const interval = setInterval(createParticle, 300);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center pt-32 pb-20 px-4 relative">
      {/* Animated Background Particles */}
      <div 
        ref={particlesRef}
        className="fixed inset-0 z-0 pointer-events-none overflow-hidden"
      />
      
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-black text-gradient mb-8 leading-tight tracking-tight">
            Automate it. Secure it. Scale it.
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            AI-powered automation that handles the{' '}
            <span className="text-indigo-400 font-semibold">routine work</span>{' '}
            across your entire infrastructure, so you can focus on what matters most.
          </p>
          
          {/* Primary CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20">
            <button 
              onClick={() => scrollToSection('contact')}
              className="aurora-gradient text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-indigo-500/25 transition-all duration-300 hover:-translate-y-1"
            >
              Get started
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="border-2 border-indigo-400/30 text-indigo-400 bg-transparent px-8 py-4 rounded-xl font-semibold text-lg hover:bg-indigo-400/10 transition-all duration-300"
            >
              Request demo
            </button>
          </div>
          
          {/* Trust indicators - MSP/MSSP partners */}
          <div className="text-center">
            <p className="text-sm text-gray-400 mb-8">Trusted by leading IT organizations and service providers</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-50">
              <div className="glassmorphism px-6 py-3 rounded-lg">
                <span className="text-gray-300 font-semibold">ConnectWise</span>
              </div>
              <div className="glassmorphism px-6 py-3 rounded-lg">
                <span className="text-gray-300 font-semibold">Kaseya</span>
              </div>
              <div className="glassmorphism px-6 py-3 rounded-lg">
                <span className="text-gray-300 font-semibold">SolarWinds</span>
              </div>
              <div className="glassmorphism px-6 py-3 rounded-lg">
                <span className="text-gray-300 font-semibold">Datto</span>
              </div>
              <div className="glassmorphism px-6 py-3 rounded-lg">
                <span className="text-gray-300 font-semibold">Microsoft</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
