import { useState, useEffect, useCallback, memo } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Shield, Zap, Target, FileCheck, Lock, Cpu } from 'lucide-react';
import { useParallax } from '@/hooks/use-scroll';

const Hero = memo(function Hero() {
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

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

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
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Reactor Solutions.
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Enterprise-grade cybersecurity and IT automation engineered for organizations that demand excellence.
          </p>

          {/* Key Features */}
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto mb-8">
            <div className="flex items-center bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-200/60 rounded-xl px-4 py-2.5 shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-300 group">
              <Shield className="w-4 h-4 text-purple-600 mr-2.5 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-semibold text-purple-800 tracking-wide">Fortress-Grade Security</span>
            </div>
            <div className="flex items-center bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-200/60 rounded-xl px-4 py-2.5 shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-300 group">
              <Cpu className="w-4 h-4 text-purple-600 mr-2.5 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-semibold text-purple-800 tracking-wide">Reactor Precision</span>
            </div>
            <div className="flex items-center bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-200/60 rounded-xl px-4 py-2.5 shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-300 group">
              <Target className="w-4 h-4 text-purple-600 mr-2.5 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-semibold text-purple-800 tracking-wide">Enterprise Scale</span>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
});

export default Hero;