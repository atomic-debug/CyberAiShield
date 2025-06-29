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
    <section className="min-h-screen flex items-center justify-center py-2 sm:py-3 md:py-4 lg:py-6 px-2 sm:px-3 md:px-4 lg:px-6 xl:px-8 relative bg-white">
      <div className="max-w-7xl mx-auto relative z-10">
        <div 
          className="text-center max-w-5xl mx-auto rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 border border-gray-200/50 shadow-xl relative overflow-hidden"
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
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4 lg:mb-5 xl:mb-6 leading-tight">
            <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Atomic Solutions.
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-2xl text-gray-600 mb-2 sm:mb-3 md:mb-4 lg:mb-5 xl:mb-6 max-w-4xl mx-auto">
            Enterprise-grade cybersecurity and IT automation engineered for organizations that demand excellence.
          </p>

          {/* Key Features */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 max-w-4xl mx-auto mb-4 sm:mb-5 md:mb-6 lg:mb-7 xl:mb-8">
            <div className="flex items-center bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-200/60 rounded-lg sm:rounded-xl px-2 sm:px-3 md:px-4 lg:px-5 py-1.5 sm:py-2 md:py-2.5 lg:py-3 shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-300 group">
              <Shield className="w-3 sm:w-4 md:w-4 lg:w-5 h-3 sm:h-4 md:h-4 lg:h-5 text-purple-600 mr-1.5 sm:mr-2 md:mr-2.5 lg:mr-3 group-hover:scale-110 transition-transform" />
              <span className="text-xs sm:text-sm md:text-sm lg:text-base font-semibold text-purple-800 tracking-wide">Fortress-Grade Security</span>
            </div>
            <div className="flex items-center bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-200/60 rounded-lg sm:rounded-xl px-2 sm:px-3 md:px-4 lg:px-5 py-1.5 sm:py-2 md:py-2.5 lg:py-3 shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-300 group">
              <Cpu className="w-3 sm:w-4 md:w-4 lg:w-5 h-3 sm:h-4 md:h-4 lg:h-5 text-purple-600 mr-1.5 sm:mr-2 md:mr-2.5 lg:mr-3 group-hover:scale-110 transition-transform" />
              <span className="text-xs sm:text-sm md:text-sm lg:text-base font-semibold text-purple-800 tracking-wide">Atomic Precision</span>
            </div>
            <div className="flex items-center bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-200/60 rounded-lg sm:rounded-xl px-2 sm:px-3 md:px-4 lg:px-5 py-1.5 sm:py-2 md:py-2.5 lg:py-3 shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-300 group">
              <Target className="w-3 sm:w-4 md:w-4 lg:w-5 h-3 sm:h-4 md:h-4 lg:h-5 text-purple-600 mr-1.5 sm:mr-2 md:mr-2.5 lg:mr-3 group-hover:scale-110 transition-transform" />
              <span className="text-xs sm:text-sm md:text-sm lg:text-base font-semibold text-purple-800 tracking-wide">Enterprise Scale</span>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
});

export default Hero;