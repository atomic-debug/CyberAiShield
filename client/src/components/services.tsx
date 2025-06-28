import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Shield, Cpu, Zap, Check, TrendingUp, Target } from 'lucide-react';
import { useCounter } from '@/hooks/use-counter';

// Animated Stat Component
const AnimatedStat = ({ value, label, icon: Icon }: { value: string; label: string; icon: any }) => {
  const numericValue = parseFloat(value.replace(/[^0-9.]/g, ''));
  const suffix = value.replace(/[0-9.]/g, '');
  const { count, ref } = useCounter(numericValue, 2000, true);
  
  return (
    <div 
      ref={ref as any}
      className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-500 group hover:scale-[1.02]"
    >
      <Icon className="w-8 h-8 text-purple-300 mx-auto mb-3 group-hover:scale-105 group-hover:rotate-3 transition-transform duration-500" />
      <div className="text-3xl font-black text-white mb-2">
        {count}
        {suffix}
      </div>
      <div className="text-sm text-gray-300 font-semibold tracking-wide">{label}</div>
    </div>
  );
};

export default function Services() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const words = ['MSPs', 'MSSPs', 'IT Teams', 'Admins'];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('services');
    if (element) observer.observe(element);
    
    return () => {
      clearInterval(interval);
      observer.disconnect();
    };
  }, []);

  const services = [
    {
      icon: Shield,
      title: 'Fortress-Grade Security Architecture',
      description: 'Deploy unbreachable defense systems across infinite client environments. Every user, every permission, every access point secured with atomic precision and military-grade automation.',
      features: ['Zero-Trust Architecture', 'Quantum-Ready Encryption', 'Real-Time Threat Neutralization'],
      gradient: 'from-purple-600 to-indigo-700',
      powerMetric: '99.99% Attack Prevention'
    },
    {
      icon: Cpu,
      title: 'Infinite Scale Deployment Engine',
      description: 'Command thousands of endpoints simultaneously. Deploy, patch, and manage at enterprise scale with the confidence of having 1000 system administrators working in perfect harmony.',
      features: ['Instant Global Deployment', 'Predictive Maintenance AI', 'Self-Healing Infrastructure'],
      gradient: 'from-indigo-600 to-blue-700',
      powerMetric: '10,000+ Endpoints Managed'
    },
    {
      icon: Zap,
      title: 'Atomic Solution Engineering',
      description: 'Custom-forged automation that transforms your operations into unstoppable competitive advantages. Every workflow optimized, every process perfected, every outcome guaranteed.',
      features: ['Bespoke Automation Forge', 'Performance Optimization Engine', 'Strategic Excellence Framework'],
      gradient: 'from-blue-600 to-purple-700',
      powerMetric: '400% Efficiency Gains'
    }
  ];

  return (
    <section id="services" className="py-20 px-4 scroll-offset relative overflow-hidden">
      {/* Glass morphism background for readability */}
      <div className="absolute inset-0 bg-white/40 backdrop-blur-sm" />
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-8 leading-[0.9] tracking-tight">
            Security & Scale for{' '}
            <span className="inline-block min-w-[180px] text-center transition-all duration-500 bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-600 bg-clip-text text-transparent relative">
              {words[currentWordIndex]}
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full"></div>
            </span>
          </h2>
          
          <p className="text-2xl md:text-3xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium">
            Deploy with the power of <span className="text-purple-700 font-bold">1000 experts</span> behind every decision.
            <br />
            <span className="text-xl text-gray-600 font-normal">Atomic precision. Infinite scale. Absolute security.</span>
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div 
              key={index}
              className="interactive-card relative bg-gradient-to-br from-white via-gray-50/50 to-purple-50/30 backdrop-blur-lg rounded-3xl p-8 border-2 border-gray-200/30 hover:border-purple-300/50 hover:shadow-lg transition-all duration-500 hover:-translate-y-1 group transform overflow-hidden"
              style={{ 
                transformStyle: 'preserve-3d' 
              }}
              onMouseMove={(e) => {
                const card = e.currentTarget;
                const rect = card.getBoundingClientRect();
                const x = (e.clientX - rect.left) / rect.width;
                const y = (e.clientY - rect.top) / rect.height;
                
                card.style.transform = `perspective(1000px) rotateY(${(x - 0.5) * 2}deg) rotateX(${(0.5 - y) * 2}deg) translateY(-3px) scale(1.01)`;
              }}
              onMouseLeave={(e) => {
                const card = e.currentTarget;
                card.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg) translateY(0px) scale(1)';
              }}
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-purple-50/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Power Metric Badge */}
              <div className="absolute -top-3 -right-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-2 rounded-2xl text-xs font-bold tracking-wide shadow-lg transform rotate-3 group-hover:rotate-0 transition-transform duration-300">
                {service.powerMetric}
              </div>
              
              {/* Icon with enhanced gradient background */}
              <div className={`relative w-20 h-20 bg-gradient-to-br ${service.gradient} rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-xl`}>
                <service.icon className="w-10 h-10 text-white drop-shadow-lg" />
                <div className="absolute inset-0 bg-white/20 rounded-3xl group-hover:bg-white/10 transition-colors duration-300"></div>
              </div>
              
              <h3 className="text-2xl font-black mb-6 text-gray-900 group-hover:text-purple-800 transition-colors duration-300 leading-tight">
                {service.title}
              </h3>
              
              <p className="text-gray-700 mb-8 leading-relaxed font-medium text-base">
                {service.description}
              </p>
              
              <ul className="space-y-4 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-800 group/feature">
                    <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full flex items-center justify-center mr-4 group-hover/feature:scale-110 transition-transform duration-300">
                      <Check className="w-4 h-4 text-white font-bold" />
                    </div>
                    <span className="font-semibold tracking-wide">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                className="reactive-button w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold py-5 text-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 group/btn border-0 relative overflow-hidden"
                onMouseMove={(e) => {
                  const button = e.currentTarget;
                  const rect = button.getBoundingClientRect();
                  const x = ((e.clientX - rect.left) / rect.width) * 100;
                  const y = ((e.clientY - rect.top) / rect.height) * 100;
                  button.style.background = `radial-gradient(circle at ${x}% ${y}%, rgba(255,255,255,0.2) 0%, transparent 70%), linear-gradient(to right, #9333ea, #6366f1)`;
                }}
                onMouseLeave={(e) => {
                  const button = e.currentTarget;
                  button.style.background = '';
                }}
              >
                Deploy Solution
                <ArrowRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-2 transition-transform duration-300" />
              </Button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
