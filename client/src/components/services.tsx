export default function Services() {
  return (
    <section id="services" className="py-20 px-4 scroll-offset">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            Comprehensive IT Solutions
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Three core pillars of excellence that differentiate RactorIX from traditional IT providers
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
            <h3 className="text-2xl font-bold mb-4 text-white">Managed IT Services</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Complete infrastructure management with 24/7 monitoring, proactive maintenance,{' '}
              and rapid issue resolution. Our AI-powered systems predict and prevent problems{' '}
              before they impact your business operations.
            </p>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center"><span className="text-green-400 mr-2">✓</span> 99.9% Uptime Guarantee</li>
              <li className="flex items-center"><span className="text-green-400 mr-2">✓</span> Predictive Maintenance</li>
              <li className="flex items-center"><span className="text-green-400 mr-2">✓</span> 24/7 Expert Support</li>
            </ul>
          </div>
          
          {/* Cybersecurity Solutions */}
          <div className="glassmorphism rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 group">
            <div className="w-16 h-16 aurora-gradient rounded-2xl flex items-center justify-center mb-6 aurora-glow group-hover:scale-110 transition-transform">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white">Cybersecurity Solutions</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Military-grade protection powered by advanced AI threat detection. Our multi-layered{' '}
              security approach creates an impenetrable digital fortress around your critical assets,{' '}
              stopping attacks before they reach your network.
            </p>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center"><span className="text-green-400 mr-2">✓</span> Zero-Day Threat Protection</li>
              <li className="flex items-center"><span className="text-green-400 mr-2">✓</span> Real-time Monitoring</li>
              <li className="flex items-center"><span className="text-green-400 mr-2">✓</span> Compliance Management</li>
            </ul>
          </div>
          
          {/* AI-Driven Automation */}
          <div className="glassmorphism rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 group">
            <div className="w-16 h-16 aurora-gradient rounded-2xl flex items-center justify-center mb-6 aurora-glow group-hover:scale-110 transition-transform">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white">AI-Driven Automation</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Revolutionize your workflows with intelligent automation that learns and adapts.{' '}
              Our proprietary AI optimizes processes, eliminates manual tasks, and delivers{' '}
              exponential efficiency gains across your entire organization.
            </p>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center"><span className="text-green-400 mr-2">✓</span> Intelligent Workflow Optimization</li>
              <li className="flex items-center"><span className="text-green-400 mr-2">✓</span> Automated Incident Response</li>
              <li className="flex items-center"><span className="text-green-400 mr-2">✓</span> Predictive Analytics</li>
            </ul>
          </div>
        </div>
        
        {/* Key Benefits Section */}
        <div className="glassmorphism rounded-3xl p-8 mb-16">
          <h3 className="text-3xl font-bold text-center mb-8 text-gradient">Why Choose RactorIX?</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-400 mb-2">95%</div>
              <div className="text-gray-300 font-semibold">Reduced Downtime</div>
              <div className="text-sm text-gray-400 mt-1">Proactive monitoring prevents issues</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">10x</div>
              <div className="text-gray-300 font-semibold">Enhanced Security</div>
              <div className="text-sm text-gray-400 mt-1">AI-powered threat detection</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">75%</div>
              <div className="text-gray-300 font-semibold">Efficiency Increase</div>
              <div className="text-sm text-gray-400 mt-1">Automated workflows save time</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-400 mb-2">40%</div>
              <div className="text-gray-300 font-semibold">Cost Savings</div>
              <div className="text-sm text-gray-400 mt-1">Optimized resource utilization</div>
            </div>
          </div>
        </div>
        
        {/* Competitive Differentiation */}
        <div id="about" className="text-center glassmorphism rounded-3xl p-8 scroll-offset">
          <h3 className="text-2xl font-bold mb-4 text-gradient">What Sets Us Apart</h3>
          <p className="text-lg text-gray-300 mb-6 leading-relaxed max-w-4xl mx-auto">
            Unlike traditional IT providers who react to problems, RactorIX leverages proprietary AI technology{' '}
            to deliver proactive, predictive solutions. Our atomic approach breaks down complex challenges into{' '}
            manageable components, solving them at the fundamental level before they impact your business.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="glassmorphism px-4 py-2 rounded-full text-sm font-medium">Proprietary AI Technology</span>
            <span className="glassmorphism px-4 py-2 rounded-full text-sm font-medium">Proactive Problem Prevention</span>
            <span className="glassmorphism px-4 py-2 rounded-full text-sm font-medium">Atomic Solution Methodology</span>
            <span className="glassmorphism px-4 py-2 rounded-full text-sm font-medium">Predictive Analytics</span>
          </div>
        </div>
      </div>
    </section>
  );
}
