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
    <section className="min-h-screen flex items-center justify-center pt-24 pb-20 px-4 bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-6 leading-tight tracking-tight">
              Automate it.<br />
              Secure it.<br />
              <span className="tracking-wider">Dominate</span> it.
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              AI-powered automation that handles the{' '}
              <span className="text-rose-500 font-bold">routine noise</span>{' '}
              across your entire infrastructure, so you can focus on what matters most.
            </p>
            
            {/* Primary CTA */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-rose-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-rose-600 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
              >
                Get started
              </button>
            </div>
            
            {/* Trust indicators */}
            <div>
              <p className="text-sm text-gray-500 mb-6">
                Trusted by millions worldwide
              </p>
              <div className="flex flex-wrap gap-3 opacity-70">
                <div className="bg-gray-100 border border-gray-200 px-3 py-2 rounded-lg shadow-sm">
                  <span className="text-gray-700 font-medium text-sm">TechFlow</span>
                </div>
                <div className="bg-blue-50 border border-blue-100 px-3 py-2 rounded-lg shadow-sm">
                  <span className="text-blue-600 font-medium text-sm">Apex IT</span>
                </div>
                <div className="bg-gray-100 border border-gray-200 px-3 py-2 rounded-lg shadow-sm">
                  <span className="text-gray-700 font-medium text-sm">CyberGuard</span>
                </div>
                <div className="bg-slate-100 border border-slate-200 px-3 py-2 rounded-lg shadow-sm">
                  <span className="text-slate-700 font-medium text-sm">DataBridge</span>
                </div>
                <div className="bg-blue-50 border border-blue-100 px-3 py-2 rounded-lg shadow-sm">
                  <span className="text-blue-600 font-medium text-sm">SecureLink</span>
                </div>
                <div className="bg-gray-100 border border-gray-200 px-3 py-2 rounded-lg shadow-sm">
                  <span className="text-gray-700 font-medium text-sm">CloudFirst</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Visual Element */}
          <div className="hidden lg:block">
            <div className="relative mx-auto w-96 h-96">
              <div className="absolute inset-0 bg-white rounded-3xl shadow-xl border border-gray-200 flex items-center justify-center">
                <div className="grid grid-cols-3 gap-6 p-8">
                  <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                    <div className="w-4 h-4 bg-gray-300 rounded-sm"></div>
                  </div>
                  <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center">
                    <div className="w-4 h-4 bg-blue-300 rounded-sm"></div>
                  </div>
                  <div className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center">
                    <div className="w-4 h-4 bg-slate-300 rounded-sm"></div>
                  </div>
                  <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                    <div className="w-4 h-4 bg-gray-300 rounded-sm"></div>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-50 to-slate-50 rounded-xl flex items-center justify-center shadow-sm">
                    <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                    </svg>
                  </div>
                  <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center">
                    <div className="w-4 h-4 bg-blue-300 rounded-sm"></div>
                  </div>
                  <div className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center">
                    <div className="w-4 h-4 bg-slate-300 rounded-sm"></div>
                  </div>
                  <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                    <div className="w-4 h-4 bg-gray-300 rounded-sm"></div>
                  </div>
                  <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center">
                    <div className="w-4 h-4 bg-blue-300 rounded-sm"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
