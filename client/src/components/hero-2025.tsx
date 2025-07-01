import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Shield, 
  Zap, 
  Cpu, 
  ArrowRight, 
  Sparkles,
  Lock,
  Target,
  Atom
} from 'lucide-react';

const Hero2025 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    
    // Rotate features every 3 seconds
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 3);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  const features = [
    { icon: Shield, text: "Fortress-Grade Protection", color: "from-emerald-500 to-teal-600" },
    { icon: Atom, text: "Atomic Precision", color: "from-purple-500 to-violet-600" },
    { icon: Target, text: "Infinite Scale", color: "from-orange-500 to-red-500" }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with 2025 warm gradient */}
      <div className="absolute inset-0 gradient-mocha opacity-90" />
      
      {/* Organic shapes background - 2025 trend */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-white/10 blur-3xl anti-design-element" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-white/5 blur-3xl anti-design-element" />
        <div className="absolute top-1/2 left-1/4 w-64 h-64 rounded-full bg-white/5 blur-2xl anti-design-element" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Big block with vivid contrast - 2025 trend */}
        <div className={`trend-2025-block-warm micro-interaction ${isVisible ? 'scroll-reveal visible' : 'scroll-reveal'}`}>
          
          {/* Anti-design badge */}
          <div className="inline-flex items-center space-x-2 mb-6 anti-design-element">
            <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-sm">
              <Sparkles className="w-3 h-3 mr-1" />
              2025 AI Revolution
            </Badge>
            <Badge className="bg-white/10 text-white border-white/20 backdrop-blur-sm">
              Enterprise Ready
            </Badge>
          </div>

          {/* Bold expressive typography - 2025 trend */}
          <h1 className="trend-2025-heading text-white mb-6">
            Atomic
            <span className="block serif-sans-contrast text-white/90">Solutions</span>
          </h1>

          {/* Variable font subheading */}
          <p className="trend-2025-variable-text text-white/90 text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Security & scale as if you had <span className="font-bold">1000 of you</span> at your back. 
            Transform your infrastructure into an unbreachable digital fortress.
          </p>

          {/* Rotating feature showcase */}
          <div className="mb-8">
            <div className="flex justify-center items-center space-x-8 mb-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div 
                    key={index}
                    className={`sustainable-card ${activeFeature === index ? 'scale-110' : 'scale-100'} transition-all duration-500`}
                  >
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-2`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-sm font-medium text-white/80">{feature.text}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Modern CTA buttons with refined motion */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button className="btn-2025-primary refined-motion group px-8 py-4 text-lg">
              Deploy Now
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-4 text-lg refined-motion"
            >
              <Shield className="w-5 h-5 mr-2" />
              Security Demo
            </Button>
          </div>

          {/* Trust indicators with warm styling */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-white/70 text-sm mb-4">Trusted by 10,000+ organizations worldwide</p>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              {['Microsoft', 'AWS', 'Google Cloud', 'Cisco'].map((company, index) => (
                <div key={index} className="sustainable-card px-4 py-2">
                  <span className="text-white font-medium text-sm">{company}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Experimental scrolling indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero2025;