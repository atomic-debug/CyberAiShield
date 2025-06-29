import { useState, useEffect, useCallback, memo } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Shield, Zap, Target, FileCheck, Lock, Cpu, Server } from 'lucide-react';
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
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 relative bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-8 text-center">
        {/* Main Headline - ClickUp style */}
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-[1.1]">
          <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Atomic Solutions.
          </span>
        </h1>
        
        {/* Subheading */}
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Enterprise-grade cybersecurity and IT automation engineered for organizations that demand excellence.
        </p>

        {/* CTA Button - ClickUp style */}
        <div className="mb-8">
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
          >
            Deploy Now
          </Button>
          <p className="text-sm text-gray-500 mt-3">Free consultation. No commitments.</p>
        </div>

        {/* Feature Pills - ClickUp style horizontal scroll */}
        <div className="mb-12 overflow-x-auto pb-4">
          <div className="flex gap-3 justify-center min-w-max">
            <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full">
              <Shield className="w-4 h-4 text-purple-600" />
              <span className="text-sm font-medium">Fortress-Grade Security</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full">
              <Cpu className="w-4 h-4 text-purple-600" />
              <span className="text-sm font-medium">Atomic Precision</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full">
              <Target className="w-4 h-4 text-purple-600" />
              <span className="text-sm font-medium">Enterprise Scale</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full">
              <Zap className="w-4 h-4 text-purple-600" />
              <span className="text-sm font-medium">AI Automation</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full">
              <Lock className="w-4 h-4 text-purple-600" />
              <span className="text-sm font-medium">Zero Trust</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full">
              <Server className="w-4 h-4 text-purple-600" />
              <span className="text-sm font-medium">Infrastructure</span>
            </div>
          </div>
        </div>

        {/* Trust indicator - ClickUp style */}
        <div className="flex items-center justify-center gap-2 text-gray-600">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Shield key={i} className="w-4 h-4 text-purple-500 fill-current" />
            ))}
          </div>
          <span className="text-sm">Trusted by 10,000+ organizations</span>
        </div>
      </div>
    </section>
  );
});

export default Hero;