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
    <section className="min-h-screen flex items-center justify-center pt-24 pb-8 px-4 relative bg-white">
      <div className="max-w-7xl mx-auto relative z-10 px-4">
        <div 
          className="text-center max-w-4xl mx-auto rounded-3xl p-12 border border-gray-200/50 shadow-xl relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgb(249, 250, 251) 0%, rgb(243, 244, 246) 30%, rgb(209, 213, 219) 100%)',
            backgroundAttachment: 'fixed'
          }}
        >
          {/* Background Pattern Effects */}
          <div 
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(circle at 20% 80%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)',
              backgroundAttachment: 'fixed'
            }}
          ></div>
          <div 
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(circle at 80% 20%, rgba(99, 102, 241, 0.08) 0%, transparent 50%)',
              backgroundAttachment: 'fixed'
            }}
          ></div>
          {/* Glass morphism overlay */}
          <div className="absolute inset-0 bg-white/30 backdrop-blur-sm" />
          
          <div className="relative z-10">
          

          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
            Cut through complexity —<br />
            <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              get atomic precision that works.
            </span>
          </h1>
          <p className="text-lg text-gray-600 mb-2 max-w-2xl mx-auto font-medium">
            No bloat. No vendor agendas.
          </p>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Custom IT automation and cybersecurity solutions tailored to your size, budget, and maturity—delivering the right protection at the right time.
          </p>

          {/* Key Features - Loki Labs Style */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
            <div className="text-center">
              <Shield className="w-8 h-8 text-purple-600 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Tailored Protection</h3>
              <p className="text-gray-600 text-sm">Security solutions built around your business needs.</p>
            </div>
            <div className="text-center">
              <Zap className="w-8 h-8 text-purple-600 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Rapid Response</h3>
              <p className="text-gray-600 text-sm">Detect, contain, and neutralize threats fast.</p>
            </div>
            <div className="text-center">
              <Target className="w-8 h-8 text-purple-600 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Unbiased Expertise</h3>
              <p className="text-gray-600 text-sm">No vendor lock-in, just solutions that work for you.</p>
            </div>
          </div>

          {/* CTA Button - Loki Labs Style */}
          <div className="text-center">
            <button 
              onClick={() => scrollToSection('contact')}
              className="inline-flex items-center px-8 py-3 text-lg font-semibold text-white bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Learn More
            </button>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}