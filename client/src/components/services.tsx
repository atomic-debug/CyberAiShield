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
    <section id="services" className="py-12 px-4 scroll-offset bg-gradient-to-br from-gray-50 to-blue-50/30 relative overflow-hidden">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-20">
          <div className="max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Next-Generation{' '}
              <span className="inline-block w-20 text-center transition-all duration-500 text-rose-500">
                {words[currentWordIndex]}
              </span>{' '}
              Automation
            </h2>
            
          </div>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Managed IT Services */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
            <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-sm">
              <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Multi-Client Management Automation</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Custom-built solutions that automate user management across dozens of client environments.{' '}
              Add or remove users from multiple companies, manage permissions, and handle access control{' '}
              programmatically instead of clicking through endless admin panels.
            </p>
            <ul className="space-y-2 text-gray-500">
              <li className="flex items-center"><span className="text-green-600 mr-2">✓</span> Cross-Client User Provisioning</li>
              <li className="flex items-center"><span className="text-green-600 mr-2">✓</span> Bulk Permission Management</li>
              <li className="flex items-center"><span className="text-green-600 mr-2">✓</span> Automated Access Control</li>
            </ul>
          </div>
          
          {/* Cybersecurity Solutions */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
            <div className="w-16 h-16 bg-cyan-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-sm">
              <svg className="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Endpoint & Software Management</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Automate software deployments, updates, and security patches across hundreds of client{' '}
              endpoints. Build intelligent workflows that handle compliance reporting, license management,{' '}
              and endpoint monitoring without manual intervention.
            </p>
            <ul className="space-y-2 text-gray-500">
              <li className="flex items-center"><span className="text-green-600 mr-2">✓</span> Automated Software Deployment</li>
              <li className="flex items-center"><span className="text-green-600 mr-2">✓</span> Bulk Endpoint Management</li>
              <li className="flex items-center"><span className="text-green-600 mr-2">✓</span> Compliance Automation</li>
            </ul>
          </div>
          
          {/* AI-Driven Automation */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
            <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-sm">
              <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Custom Workflow Development</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We analyze your MSP operations and build custom automation solutions tailored to your{' '}
              specific needs. From ticket routing to client onboarding workflows, we create intelligent{' '}
              systems that eliminate repetitive tasks and scale with your business growth.
            </p>
            <ul className="space-y-2 text-gray-500">
              <li className="flex items-center"><span className="text-green-600 mr-2">✓</span> Custom Workflow Design</li>
              <li className="flex items-center"><span className="text-green-600 mr-2">✓</span> Process Automation Development</li>
              <li className="flex items-center"><span className="text-green-600 mr-2">✓</span> Scalable Solution Architecture</li>
            </ul>
          </div>
        </div>
        
        
        
        {/* About Section */}
        <div id="about" className="scroll-offset bg-rose-50/50 py-12 px-8 rounded-3xl border border-rose-100">
          <div className="max-w-4xl">
            <h3 className="text-3xl font-bold mb-6 text-gray-900">Built for You to Scale</h3>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              RactorIX specializes in building custom automation solutions specifically{' '}
              for IT organizations managing complex multi-environment infrastructures. We understand the unique challenges of scaling{' '}
              operations across diverse systems, requirements, and endpoints while maintaining security and efficiency.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="bg-indigo-50 border border-indigo-200 px-6 py-3 rounded-xl text-sm font-medium text-indigo-700">Enterprise-Ready Solutions</span>
              <span className="bg-emerald-50 border border-emerald-200 px-6 py-3 rounded-xl text-sm font-medium text-emerald-700">Multi-Environment Architecture</span>
              <span className="bg-blue-50 border border-blue-200 px-6 py-3 rounded-xl text-sm font-medium text-blue-700">Scalable Automation</span>
              <span className="bg-purple-50 border border-purple-200 px-6 py-3 rounded-xl text-sm font-medium text-purple-700">Custom Development</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
