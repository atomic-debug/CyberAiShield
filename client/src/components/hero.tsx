import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Sparkles, Shield, Zap, Target } from 'lucide-react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentRole, setCurrentRole] = useState(0);
  
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
    <section className="min-h-screen flex items-center justify-center pt-24 pb-20 px-4 bg-gradient-to-br from-white via-purple-50/30 to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto">
          {/* Announcement Badge */}
          <div className={`mb-8 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <Badge variant="outline" className="bg-white/80 backdrop-blur-sm border-purple-200 text-purple-700 px-4 py-2 font-medium">
              <Sparkles className="w-4 h-4 mr-2" />
              Now with AI Assistant Integration
            </Badge>
          </div>

          {/* Main Headline */}
          <h1 className={`text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-6 leading-tight transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            The everything app,{' '}
            <span className="text-purple-600">for IT.</span>
          </h1>

          {/* Dynamic Subtitle */}
          <div className={`text-xl md:text-2xl text-gray-600 mb-2 max-w-3xl mx-auto transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            Built for{' '}
            <span className="font-semibold text-purple-600 transition-all duration-500">
              {roles[currentRole]}
            </span>
            {' '}to scale securely
          </div>

          <p className={`text-lg md:text-xl text-gray-500 mb-12 max-w-2xl mx-auto transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            One platform for automation, security, monitoring, and more. 
            Secure it. Automate it. Take Control—together.
          </p>

          {/* Feature Pills */}
          <div className={`flex flex-wrap justify-center gap-4 mb-12 transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            {features.map((feature, index) => (
              <div key={index} className="flex items-center bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full px-4 py-2">
                <feature.icon className="w-4 h-4 text-purple-600 mr-2" />
                <span className="text-sm font-medium text-gray-700">{feature.text}</span>
              </div>
            ))}
          </div>
          
          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center mb-8 transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <Button 
              onClick={() => scrollToSection('contact')}
              size="lg"
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              Get started for FREE
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              onClick={() => scrollToSection('services')}
              variant="outline"
              size="lg"
              className="border-purple-200 text-purple-700 hover:bg-purple-50 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300"
            >
              See how it works
            </Button>
          </div>
          
          {/* Trust Indicators */}
          <p className={`text-sm text-gray-400 transform transition-all duration-1000 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            Free Forever • No Credit Card Required • Enterprise Grade Security
          </p>
        </div>
      </div>
    </section>
  );
}