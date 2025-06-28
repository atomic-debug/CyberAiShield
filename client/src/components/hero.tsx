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
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight tracking-tight">
              Automate it. Secure it. Scale it.
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              AI-powered automation that handles the{' '}
              <span className="text-indigo-400 font-semibold">routine work</span>{' '}
              across your entire infrastructure, so you can focus on what matters most.
            </p>
            
            {/* Primary CTA */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
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
            
            {/* Trust indicators */}
            <div>
              <p className="text-sm text-gray-400 mb-6">
                Trusted by thousands worldwide — Ready to streamline your IT operations? Our team is currently onboarding new clients for 2025 implementation.
              </p>
              <div className="flex flex-wrap gap-4 opacity-60">
                <div className="glassmorphism px-4 py-2 rounded-lg">
                  <span className="text-gray-300 font-medium text-sm">TechFlow Solutions</span>
                </div>
                <div className="glassmorphism px-4 py-2 rounded-lg">
                  <span className="text-gray-300 font-medium text-sm">Apex IT Services</span>
                </div>
                <div className="glassmorphism px-4 py-2 rounded-lg">
                  <span className="text-gray-300 font-medium text-sm">CyberGuard Systems</span>
                </div>
                <div className="glassmorphism px-4 py-2 rounded-lg">
                  <span className="text-gray-300 font-medium text-sm">DataBridge Partners</span>
                </div>
                <div className="glassmorphism px-4 py-2 rounded-lg">
                  <span className="text-gray-300 font-medium text-sm">NetCore Technologies</span>
                </div>
                <div className="glassmorphism px-4 py-2 rounded-lg">
                  <span className="text-gray-300 font-medium text-sm">SecureLink MSP</span>
                </div>
                <div className="glassmorphism px-4 py-2 rounded-lg">
                  <span className="text-gray-300 font-medium text-sm">CloudFirst IT</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Visual Element */}
          <div className="hidden lg:block">
            <div className="relative mx-auto w-96 h-96 animate-float">
              <div className="absolute inset-0 glassmorphism rounded-3xl flex items-center justify-center aurora-glow">
                <div className="grid grid-cols-3 gap-6 p-8">
                  <div className="w-6 h-6 bg-indigo-400 rounded-full animate-pulse"></div>
                  <div className="w-6 h-6 bg-cyan-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                  <div className="w-6 h-6 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                  <div className="w-6 h-6 bg-blue-400 rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
                  <div className="w-8 h-8 aurora-gradient rounded-full animate-pulse-slow flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                    </svg>
                  </div>
                  <div className="w-6 h-6 bg-emerald-400 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
                  <div className="w-6 h-6 bg-rose-400 rounded-full animate-pulse" style={{animationDelay: '2.5s'}}></div>
                  <div className="w-6 h-6 bg-amber-400 rounded-full animate-pulse" style={{animationDelay: '3s'}}></div>
                  <div className="w-6 h-6 bg-teal-400 rounded-full animate-pulse" style={{animationDelay: '3.5s'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
