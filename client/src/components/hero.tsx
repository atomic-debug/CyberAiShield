import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

import { ArrowRight, Sparkles, Shield, Zap, Target, FileCheck, Lock, Cpu } from 'lucide-react';
import { useParallax } from '@/hooks/use-scroll';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentRole, setCurrentRole] = useState(0);
  const parallaxOffset = useParallax(0.1); // Reduced parallax effect
  
  const roles = ['MSPs', 'MSSPs', 'IT Teams', 'Admins'];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // All 6 available features - choose 3 most impactful
  const allFeatures = [
    { icon: Shield, text: 'Enterprise Security' },
    { icon: Zap, text: 'AI Automation' },
    { icon: Target, text: 'Precision Monitoring' },
    { icon: Lock, text: 'Zero-Trust Architecture' },
    { icon: Cpu, text: 'Real-Time Intelligence' },
    { icon: FileCheck, text: 'Compliance Ready' }
  ];
  
  // Select the 3 most impactful features
  const features = [
    { icon: Shield, text: 'Enterprise Security' },
    { icon: Zap, text: 'AI Automation' },
    { icon: Target, text: 'Precision Monitoring' }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center pt-24 pb-8 px-4 relative">
      {/* Glass morphism background */}
      <div className="absolute inset-0 bg-white/20 backdrop-blur-sm" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          

          {/* Main Headline */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-gray-900 mb-4 leading-[0.9] tracking-tight">
            Security <span className="sm:inline block"><span className="text-5xl md:text-6xl lg:text-7xl text-purple-600">@</span><br className="sm:hidden" /> Scale</span>{' '}
            <span className="bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-600 bg-clip-text text-transparent">
              Reactor Solutions.
            </span>
          </h1>

          {/* Key Value Propositions - Top 3 Most Impactful */}
          <div className="flex justify-center gap-6 max-w-2xl mx-auto mb-2">
            <div className="flex items-center bg-gradient-to-r from-white/90 to-gray-50/90 backdrop-blur-md border border-gray-300/50 rounded-2xl px-4 py-3 shadow-sm hover:shadow-md transition-all duration-300 group">
              <Shield className="w-5 h-5 text-purple-600 mr-3 group-hover:scale-105 transition-transform" />
              <span className="text-sm font-semibold text-gray-800 tracking-wide">Enterprise Security</span>
            </div>
            <div className="flex items-center bg-gradient-to-r from-white/90 to-gray-50/90 backdrop-blur-md border border-gray-300/50 rounded-2xl px-4 py-3 shadow-sm hover:shadow-md transition-all duration-300 group">
              <Zap className="w-5 h-5 text-purple-600 mr-3 group-hover:scale-105 transition-transform" />
              <span className="text-sm font-semibold text-gray-800 tracking-wide">AI Automation</span>
            </div>
            <div className="flex items-center bg-gradient-to-r from-white/90 to-gray-50/90 backdrop-blur-md border border-gray-300/50 rounded-2xl px-4 py-3 shadow-sm hover:shadow-md transition-all duration-300 group">
              <Target className="w-5 h-5 text-purple-600 mr-3 group-hover:scale-105 transition-transform" />
              <span className="text-sm font-semibold text-gray-800 tracking-wide">99.9% Uptime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}