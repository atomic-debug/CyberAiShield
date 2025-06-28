import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Shield, Cpu, Zap, Check, TrendingUp } from 'lucide-react';

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
      title: 'Multi-Client Management Automation',
      description: 'Custom-built solutions that automate user management across dozens of client environments. Add or remove users from multiple companies, manage permissions, and handle access control programmatically.',
      features: ['Cross-Client User Provisioning', 'Bulk Permission Management', 'Automated Access Control'],
      gradient: 'from-purple-500 to-indigo-600'
    },
    {
      icon: Cpu,
      title: 'Endpoint & Software Management',
      description: 'Automate software deployments, updates, and security patches across hundreds of client endpoints. Build intelligent workflows that handle compliance reporting and license management.',
      features: ['Automated Software Deployment', 'Bulk Endpoint Management', 'Compliance Automation'],
      gradient: 'from-indigo-500 to-blue-600'
    },
    {
      icon: Zap,
      title: 'Custom Workflow Development',
      description: 'We analyze your operations and build custom automation solutions tailored to your specific needs. From ticket routing to client onboarding workflows.',
      features: ['Custom Workflow Design', 'Process Automation Development', 'Scalable Solution Architecture'],
      gradient: 'from-blue-500 to-purple-600'
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
          <Badge variant="outline" className="bg-white/80 backdrop-blur-sm border-purple-200 text-purple-700 px-4 py-2 font-medium mb-6">
            <TrendingUp className="w-4 h-4 mr-2" />
            Enterprise Solutions
          </Badge>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight">
            Next-Generation{' '}
            <span className="inline-block min-w-[140px] text-center transition-all duration-500 text-purple-600">
              {words[currentWordIndex]}
            </span>{' '}
            Automation
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Transform your IT operations with intelligent automation that scales with your business
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/80 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Icon with gradient background */}
              <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-purple-700 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-3 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-700">
                    <Check className="w-5 h-5 text-purple-600 mr-3 flex-shrink-0" />
                    <span className="text-sm font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                variant="outline" 
                className="w-full border-purple-200 text-purple-700 hover:bg-purple-600 hover:text-white hover:border-purple-600 transition-all duration-300 group/btn"
              >
                Learn More
                <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </div>
          ))}
        </div>
        
        {/* About Section */}
        <div 
          id="about" 
          className={`scroll-offset bg-gradient-to-br from-purple-50/50 to-white py-16 px-8 rounded-3xl border border-purple-100/50 backdrop-blur-sm transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
        >
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="bg-white/80 backdrop-blur-sm border-purple-200 text-purple-700 px-4 py-2 font-medium mb-6">
              <Shield className="w-4 h-4 mr-2" />
              Enterprise Ready
            </Badge>
            
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Built for <span className="text-purple-600">You</span> to Scale
            </h3>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              RactorIX specializes in building custom automation solutions specifically 
              for IT organizations managing complex multi-environment infrastructures. We understand 
              the unique challenges of scaling operations across diverse systems while maintaining security and efficiency.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge variant="secondary" className="bg-white border border-purple-100 px-6 py-3 text-sm font-medium text-gray-700 hover:bg-purple-50 transition-colors">
                Enterprise-Ready Solutions
              </Badge>
              <Badge variant="secondary" className="bg-purple-50 border border-purple-200 px-6 py-3 text-sm font-medium text-purple-700 hover:bg-purple-100 transition-colors">
                Multi-Environment Architecture
              </Badge>
              <Badge variant="secondary" className="bg-white border border-purple-100 px-6 py-3 text-sm font-medium text-gray-700 hover:bg-purple-50 transition-colors">
                Scalable Automation
              </Badge>
              <Badge variant="secondary" className="bg-purple-50 border border-purple-200 px-6 py-3 text-sm font-medium text-purple-700 hover:bg-purple-100 transition-colors">
                Custom Development
              </Badge>
            </div>
            
            <Button 
              size="lg"
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              Start Your Transformation
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
