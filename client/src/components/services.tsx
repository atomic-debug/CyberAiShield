import { useState, useEffect } from 'react';

export default function Services() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const words = ['MSP', 'MSSP', 'IT', 'Admin'];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 2000); // Change word every 2 seconds
    
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <section id="services" className="py-20 px-4 scroll-offset">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            Next-Generation{' '}
            <span className="inline-block min-w-[120px] text-center transition-all duration-500 ease-in-out transform text-indigo-400 animate-pulse">
              {words[currentWordIndex]}
            </span>{' '}
            Automation
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Advanced AI workflows engineered to transform complex multi-client operations into streamlined, autonomous systems
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Managed IT Services */}
          <div className="glassmorphism rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 group">
            <div className="w-16 h-16 aurora-gradient rounded-2xl flex items-center justify-center mb-6 aurora-glow group-hover:scale-110 transition-transform">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white">Multi-Client Management Automation</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Custom-built solutions that automate user management across dozens of client environments.{' '}
              Add or remove users from multiple companies, manage permissions, and handle access control{' '}
              programmatically instead of clicking through endless admin panels.
            </p>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center"><span className="text-green-400 mr-2">✓</span> Cross-Client User Provisioning</li>
              <li className="flex items-center"><span className="text-green-400 mr-2">✓</span> Bulk Permission Management</li>
              <li className="flex items-center"><span className="text-green-400 mr-2">✓</span> Automated Access Control</li>
            </ul>
          </div>
          
          {/* Cybersecurity Solutions */}
          <div className="glassmorphism rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 group">
            <div className="w-16 h-16 aurora-gradient rounded-2xl flex items-center justify-center mb-6 aurora-glow group-hover:scale-110 transition-transform">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white">Endpoint & Software Management</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Automate software deployments, updates, and security patches across hundreds of client{' '}
              endpoints. Build intelligent workflows that handle compliance reporting, license management,{' '}
              and endpoint monitoring without manual intervention.
            </p>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center"><span className="text-green-400 mr-2">✓</span> Automated Software Deployment</li>
              <li className="flex items-center"><span className="text-green-400 mr-2">✓</span> Bulk Endpoint Management</li>
              <li className="flex items-center"><span className="text-green-400 mr-2">✓</span> Compliance Automation</li>
            </ul>
          </div>
          
          {/* AI-Driven Automation */}
          <div className="glassmorphism rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 group">
            <div className="w-16 h-16 aurora-gradient rounded-2xl flex items-center justify-center mb-6 aurora-glow group-hover:scale-110 transition-transform">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white">Custom Workflow Development</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              We analyze your MSP operations and build custom automation solutions tailored to your{' '}
              specific needs. From ticket routing to client onboarding workflows, we create intelligent{' '}
              systems that eliminate repetitive tasks and scale with your business growth.
            </p>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center"><span className="text-green-400 mr-2">✓</span> Custom Workflow Design</li>
              <li className="flex items-center"><span className="text-green-400 mr-2">✓</span> Process Automation Development</li>
              <li className="flex items-center"><span className="text-green-400 mr-2">✓</span> Scalable Solution Architecture</li>
            </ul>
          </div>
        </div>
        
        {/* Key Benefits Section */}
        <div className="glassmorphism rounded-3xl p-8 mb-16">
          <h3 className="text-3xl font-bold text-center mb-8 text-gradient">MSP Transformation Results</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-400 mb-2">80%</div>
              <div className="text-gray-300 font-semibold">Time Saved</div>
              <div className="text-sm text-gray-400 mt-1">On repetitive admin tasks</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">5x</div>
              <div className="text-gray-300 font-semibold">More Clients</div>
              <div className="text-sm text-gray-400 mt-1">Same team size, expanded capacity</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">90%</div>
              <div className="text-gray-300 font-semibold">Faster Deployment</div>
              <div className="text-sm text-gray-400 mt-1">Automated user provisioning</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-400 mb-2">60%</div>
              <div className="text-gray-300 font-semibold">Higher Margins</div>
              <div className="text-sm text-gray-400 mt-1">Reduced operational overhead</div>
            </div>
          </div>
        </div>
        
        {/* Competitive Differentiation */}
        <div id="about" className="text-center glassmorphism rounded-3xl p-8 scroll-offset">
          <h3 className="text-2xl font-bold mb-4 text-gradient">Built for MSP Scale</h3>
          <p className="text-lg text-gray-300 mb-6 leading-relaxed max-w-4xl mx-auto">
            Unlike generic automation tools, RactorIX specializes in building custom solutions specifically{' '}
            for MSPs managing multiple client environments. We understand the unique challenges of scaling{' '}
            IT operations across dozens of companies with different systems, requirements, and endpoints.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="glassmorphism px-4 py-2 rounded-full text-sm font-medium">MSP-Focused Solutions</span>
            <span className="glassmorphism px-4 py-2 rounded-full text-sm font-medium">Multi-Client Architecture</span>
            <span className="glassmorphism px-4 py-2 rounded-full text-sm font-medium">Scalable Automation</span>
            <span className="glassmorphism px-4 py-2 rounded-full text-sm font-medium">Custom Development</span>
          </div>
        </div>
      </div>
    </section>
  );
}
