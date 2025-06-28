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
    <section className="min-h-screen flex items-center justify-center pt-32 pb-20 px-4 bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-6 leading-tight tracking-tight">
              Automate it. Secure it. Scale it.
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              AI-powered automation that handles the{' '}
              <span className="text-rose-500 font-semibold">routine work</span>{' '}
              across your entire infrastructure, so you can focus on what matters most.
            </p>
            
            {/* Primary CTA */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-rose-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-rose-600 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
              >
                Get started
              </button>
              <button 
                onClick={() => window.location.href = '/api/login'}
                className="border-2 border-gray-300 text-gray-700 bg-transparent px-8 py-4 rounded-xl font-semibold text-lg hover:border-rose-300 hover:text-rose-600 transition-all duration-300"
              >
                Log in
              </button>
            </div>
            
            {/* Trust indicators */}
            <div>
              <p className="text-sm text-gray-500 mb-6">
                Trusted by thousands worldwide — Ready to streamline your IT operations? Our team is currently onboarding new clients for 2025 implementation.
              </p>
              <div className="flex flex-wrap gap-3 opacity-70">
                <div className="bg-indigo-50 border border-indigo-200 px-3 py-2 rounded-lg shadow-sm">
                  <span className="text-indigo-700 font-medium text-sm">TechFlow</span>
                </div>
                <div className="bg-emerald-50 border border-emerald-200 px-3 py-2 rounded-lg shadow-sm">
                  <span className="text-emerald-700 font-medium text-sm">Apex IT</span>
                </div>
                <div className="bg-purple-50 border border-purple-200 px-3 py-2 rounded-lg shadow-sm">
                  <span className="text-purple-700 font-medium text-sm">CyberGuard</span>
                </div>
                <div className="bg-blue-50 border border-blue-200 px-3 py-2 rounded-lg shadow-sm">
                  <span className="text-blue-700 font-medium text-sm">DataBridge</span>
                </div>
                <div className="bg-cyan-50 border border-cyan-200 px-3 py-2 rounded-lg shadow-sm">
                  <span className="text-cyan-700 font-medium text-sm">NetCore</span>
                </div>
                <div className="bg-rose-50 border border-rose-200 px-3 py-2 rounded-lg shadow-sm">
                  <span className="text-rose-700 font-medium text-sm">SecureLink MSP</span>
                </div>
                <div className="bg-amber-50 border border-amber-200 px-3 py-2 rounded-lg shadow-sm">
                  <span className="text-amber-700 font-medium text-sm">CloudFirst</span>
                </div>
                <div className="bg-teal-50 border border-teal-200 px-3 py-2 rounded-lg shadow-sm">
                  <span className="text-teal-700 font-medium text-sm">ProTech</span>
                </div>
                <div className="bg-orange-50 border border-orange-200 px-3 py-2 rounded-lg shadow-sm">
                  <span className="text-orange-700 font-medium text-sm">InfoSys</span>
                </div>
                <div className="bg-pink-50 border border-pink-200 px-3 py-2 rounded-lg shadow-sm">
                  <span className="text-pink-700 font-medium text-sm">CoreNet</span>
                </div>
                <div className="bg-sky-50 border border-sky-200 px-3 py-2 rounded-lg shadow-sm">
                  <span className="text-sky-700 font-medium text-sm">SecureIT</span>
                </div>
                <div className="bg-violet-50 border border-violet-200 px-3 py-2 rounded-lg shadow-sm">
                  <span className="text-violet-700 font-medium text-sm">TechLink</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Visual Element */}
          <div className="hidden lg:block">
            <div className="relative mx-auto w-96 h-96">
              <div className="absolute inset-0 bg-white rounded-3xl shadow-xl border border-gray-200 flex items-center justify-center">
                <div className="grid grid-cols-3 gap-6 p-8">
                  <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center">
                    <div className="w-4 h-4 bg-indigo-600 rounded-sm"></div>
                  </div>
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <div className="w-4 h-4 bg-blue-600 rounded-sm"></div>
                  </div>
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                    <div className="w-4 h-4 bg-purple-600 rounded-sm"></div>
                  </div>
                  <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <div className="w-4 h-4 bg-emerald-600 rounded-sm"></div>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                    </svg>
                  </div>
                  <div className="w-8 h-8 bg-rose-100 rounded-lg flex items-center justify-center">
                    <div className="w-4 h-4 bg-rose-600 rounded-sm"></div>
                  </div>
                  <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center">
                    <div className="w-4 h-4 bg-amber-600 rounded-sm"></div>
                  </div>
                  <div className="w-8 h-8 bg-cyan-100 rounded-lg flex items-center justify-center">
                    <div className="w-4 h-4 bg-cyan-600 rounded-sm"></div>
                  </div>
                  <div className="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center">
                    <div className="w-4 h-4 bg-teal-600 rounded-sm"></div>
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
