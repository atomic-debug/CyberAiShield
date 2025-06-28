import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

import { ArrowRight, Sparkles, Shield, Zap, Target } from 'lucide-react';
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
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-gray-900 mb-6 leading-[0.9] tracking-tight">
            Security @ Scale.{' '}
            <span className="bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-600 bg-clip-text text-transparent">
              Reactor Solutions.
            </span>
          </h1>

          {/* Dynamic Subtitle */}
          <div className="text-2xl md:text-3xl text-gray-700 mb-3 max-w-4xl mx-auto font-medium">
            Built for{' '}
            <span className="font-bold text-purple-700 transition-all duration-500 relative">
              {roles[currentRole]}
              <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-600 to-indigo-600"></div>
            </span>
            {' '}who demand excellence
          </div>

          

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center bg-gradient-to-r from-white/90 to-gray-50/90 backdrop-blur-md border border-gray-300/50 rounded-2xl px-6 py-3 shadow-sm hover:shadow-md transition-all duration-300 group">
                <feature.icon className="w-5 h-5 text-purple-600 mr-3 group-hover:scale-105 transition-transform" />
                <span className="text-sm font-semibold text-gray-800 tracking-wide">{feature.text}</span>
              </div>
            ))}
          </div>
          
          
          
          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-500 font-medium">
            <div className="flex items-center">
              <Shield className="w-4 h-4 mr-2 text-purple-600" />
              SOC 2 Compliant
            </div>
            <div className="flex items-center">
              <Zap className="w-4 h-4 mr-2 text-purple-600" />
              99.9% Uptime SLA
            </div>
            <div className="flex items-center">
              <Target className="w-4 h-4 mr-2 text-purple-600" />
              Enterprise Ready
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}