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
          <h1 className="text-5xl md:text-7xl font-bold text-gradient mb-6 leading-tight">
            Revolutionizing IT Management
            <br />
            <span className="text-4xl md:text-6xl">Through AI-Driven Automation</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Experience the future of cybersecurity and IT management. RactorIX delivers{' '}
            <span className="text-indigo-400 font-semibold">proactive, predictive solutions</span>{' '}
            that transform your infrastructure into an unbreachable digital fortress.
          </p>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            Our proprietary AI technology doesn't just respond to threats—it prevents them entirely,{' '}
            delivering unprecedented operational efficiency and cost savings.
          </p>
          
          {/* Primary CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button 
              onClick={() => scrollToSection('contact')}
              className="aurora-gradient text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:shadow-2xl hover:shadow-indigo-500/25 transition-all duration-300 hover:-translate-y-1 aurora-glow"
            >
              Schedule a Hassle-Free Consultation
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="glassmorphism text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white/10 transition-all duration-300"
            >
              Explore Our Solutions
            </button>
          </div>
          
          {/* Floating illustration */}
          <div className="relative mx-auto w-80 h-80 animate-float">
            <div className="absolute inset-0 glassmorphism rounded-full flex items-center justify-center aurora-glow">
              <div className="grid grid-cols-3 gap-4 p-8">
                <div className="w-4 h-4 bg-indigo-400 rounded-full animate-pulse"></div>
                <div className="w-4 h-4 bg-cyan-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                <div className="w-4 h-4 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                <div className="w-4 h-4 bg-blue-400 rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
                <div className="w-6 h-6 aurora-gradient rounded-full animate-pulse-slow flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                  </svg>
                </div>
                <div className="w-4 h-4 bg-emerald-400 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
                <div className="w-4 h-4 bg-rose-400 rounded-full animate-pulse" style={{animationDelay: '2.5s'}}></div>
                <div className="w-4 h-4 bg-amber-400 rounded-full animate-pulse" style={{animationDelay: '3s'}}></div>
                <div className="w-4 h-4 bg-teal-400 rounded-full animate-pulse" style={{animationDelay: '3.5s'}}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
