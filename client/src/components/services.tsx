import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Shield, Cpu, Zap, Check, TrendingUp, Target } from 'lucide-react';

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
    <section id="services" className="py-20 px-4 scroll-offset bg-gradient-to-br from-gray-50 via-white to-purple-50/30 relative overflow-hidden">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className={`text-center mb-20 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <Badge variant="outline" className="bg-gradient-to-r from-purple-50 to-indigo-50 backdrop-blur-sm border-purple-300 text-purple-800 px-6 py-3 font-bold text-sm tracking-wider mb-8">
            <TrendingUp className="w-4 h-4 mr-2" />
            ENTERPRISE ATOMIC SOLUTIONS
          </Badge>
          
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
              className={`relative bg-gradient-to-br from-white via-gray-50/50 to-purple-50/30 backdrop-blur-lg rounded-3xl p-8 border-2 border-gray-200/30 hover:border-purple-300/50 hover:shadow-2xl transition-all duration-700 hover:-translate-y-3 group transform overflow-hidden ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
              style={{ transitionDelay: `${index * 200}ms` }}
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
        
        {/* About Section */}
        <div 
          id="about" 
          className={`scroll-offset relative bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 py-24 px-8 rounded-4xl overflow-hidden transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
        >
          {/* Background Effects */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(120,119,198,0.3),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(167,139,250,0.2),transparent_50%)]"></div>
          
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <Badge variant="outline" className="bg-white/10 backdrop-blur-sm border-white/20 text-white px-6 py-3 font-bold text-sm tracking-wider mb-8">
              <Shield className="w-4 h-4 mr-2" />
              ATOMIC PRECISION ENGINEERING
            </Badge>
            
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 text-white leading-[0.9] tracking-tight">
              Built for Dominance.{' '}
              <span className="bg-gradient-to-r from-purple-300 via-indigo-300 to-blue-300 bg-clip-text text-transparent">
                Engineered for Victory.
              </span>
            </h3>
            
            <p className="text-xl md:text-2xl text-gray-200 mb-12 leading-relaxed max-w-4xl mx-auto font-medium">
              RactorIX doesn't just solve problems—we <span className="text-purple-300 font-bold">obliterate limitations</span>. 
              Every atomic solution is precision-engineered for organizations that refuse to accept anything less than total operational supremacy.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {[
                { label: 'Threat Prevention', value: '99.99%', icon: Shield },
                { label: 'Scale Multiplier', value: '1000x', icon: TrendingUp },
                { label: 'Efficiency Gain', value: '400%', icon: Zap },
                { label: 'Uptime Guarantee', value: '99.9%', icon: Target }
              ].map((stat, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                  <stat.icon className="w-8 h-8 text-purple-300 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <div className="text-3xl font-black text-white mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-300 font-semibold tracking-wide">{stat.label}</div>
                </div>
              ))}
            </div>
            
            <Button 
              size="lg"
              className="reactive-button glow-button bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-400 hover:to-indigo-400 text-white px-12 py-6 text-xl font-black rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 group border-0 relative"
              onMouseEnter={(e) => {
                const button = e.currentTarget;
                button.style.transform = 'translateY(-4px) scale(1.05)';
                button.style.filter = 'brightness(1.1)';
              }}
              onMouseLeave={(e) => {
                const button = e.currentTarget;
                button.style.transform = 'translateY(0) scale(1)';
                button.style.filter = 'brightness(1)';
              }}
              onClick={(e) => {
                // Lightning effect
                const button = e.currentTarget;
                const lightning = document.createElement('div');
                lightning.className = 'absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent';
                lightning.style.animation = 'slide-right 0.3s ease-out';
                button.appendChild(lightning);
                setTimeout(() => lightning.remove(), 300);
                
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Command Your Infrastructure
              <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-3 transition-transform duration-300" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
