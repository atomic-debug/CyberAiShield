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
    <section id="hero" className="clickup-section bg-gray-50 min-h-screen flex items-center">
      <div className="clickup-container text-center">
        {/* Main Headline - ClickUp style */}
        <h1 className="clickup-heading-1 text-gray-900 mb-6">
          <span className="clickup-gradient-text">
            Atomic Solutions.
          </span>
        </h1>
        
        {/* Subheading with role rotation */}
        <p className="clickup-subtitle mb-8 max-w-3xl mx-auto">
          Enterprise-grade cybersecurity and IT automation engineered for{' '}
          <span className="text-primary font-semibold">
            {roles[currentRole]}
          </span>{' '}
          that demand excellence.
        </p>

        {/* CTA Buttons - ClickUp style */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button
            size="lg"
            className="clickup-button-primary clickup-gradient-bg group"
            onClick={() => scrollToSection('contact')}
          >
            Get Started Free
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="clickup-button-secondary"
            onClick={() => scrollToSection('services')}
          >
            View Demo
          </Button>
        </div>

        {/* Feature Pills - ClickUp style grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 max-w-4xl mx-auto">
          <div className="clickup-pill">
            <Shield className="clickup-pill-icon" />
            <span>Security</span>
          </div>
          <div className="clickup-pill">
            <Cpu className="clickup-pill-icon" />
            <span>AI-Powered</span>
          </div>
          <div className="clickup-pill">
            <Target className="clickup-pill-icon" />
            <span>Scalable</span>
          </div>
          <div className="clickup-pill">
            <Zap className="clickup-pill-icon" />
            <span>Fast</span>
          </div>
          <div className="clickup-pill">
            <Lock className="clickup-pill-icon" />
            <span>Compliant</span>
          </div>
          <div className="clickup-pill">
            <Server className="clickup-pill-icon" />
            <span>Reliable</span>
          </div>
        </div>

        {/* Trust indicator - ClickUp style */}
        <div className="mt-12 text-center">
          <div className="flex items-center justify-center gap-2 text-gray-500">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-sm">Trusted by 10,000+ organizations</span>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Hero;