import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Shield, 
  Zap, 
  Cpu, 
  ArrowRight, 
  Lock,
  Radar,
  Bot,
  Server,
  Cloud,
  Activity,
  Sparkles
} from 'lucide-react';

const Services2025 = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  const services = [
    {
      icon: Shield,
      title: "Galaxy Security Fortress",
      description: "AI-powered threat detection and response that adapts in real-time to emerging security landscapes across infinite scale.",
      features: ["Zero-Day Protection", "Behavioral Analysis", "Quantum Encryption"],
      color: "trend-2025-block",
      stats: "99.9% Threat Prevention"
    },
    {
      icon: Bot,
      title: "Cosmic Automation Hub", 
      description: "Intelligent workflow automation that eliminates manual tasks and accelerates your operations at light speed.",
      features: ["Smart Orchestration", "Predictive Scaling", "Self-Healing Systems"],
      color: "trend-2025-block-galaxy",
      stats: "85% Time Reduction"
    },
    {
      icon: Activity,
      title: "Stellar Infrastructure",
      description: "Comprehensive monitoring and optimization that keeps your systems running at peak performance across the galaxy.",
      features: ["Real-time Analytics", "Capacity Planning", "Performance Optimization"],
      color: "trend-2025-block-midnight",
      stats: "40% Cost Savings"
    }
  ];

  return (
    <section className="clickup-section galaxy-bg-light">
      <div className="clickup-container">
        
        {/* Section header with galaxy typography */}
        <div className="clickup-stack-xl text-center">
          <div className="clickup-stack-lg">
            <Badge className="galaxy-border galaxy-text">
              <Zap className="w-4 h-4 mr-2" />
              Complete Galaxy Suite
            </Badge>
            
            <h2 className="clickup-heading-2 galaxy-text">
              Built for You
              <span className="block serif-sans-contrast">to Scale</span>
            </h2>
            
            <p className="clickup-subtitle galaxy-text max-w-3xl mx-auto">
              Three integrated pillars of digital transformation that work seamlessly together 
              to deliver unprecedented operational supremacy across the cosmos.
            </p>
          </div>
        </div>

        {/* Big blocks layout - 2025 trend */}
        <div className="clickup-grid clickup-grid-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className={`${service.color} refined-motion group cursor-pointer`}
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
              >
                {/* Anti-design element */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center anti-design-element">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <Badge className="bg-white/20 text-white border-white/30">
                    {service.stats}
                  </Badge>
                </div>

                {/* Bold typography */}
                <h3 className="trend-2025-subheading text-white mb-4">
                  {service.title}
                </h3>

                <p className="text-white/90 text-lg mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Feature list with micro-interactions */}
                <div className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <div 
                      key={featureIndex}
                      className="flex items-center space-x-3 micro-interaction p-2 rounded-lg"
                    >
                      <div className="w-2 h-2 rounded-full bg-white/60" />
                      <span className="text-white/80 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Action button */}
                <Button 
                  className={`w-full bg-white/20 hover:bg-white/30 text-white border-white/30 backdrop-blur-sm transition-all duration-300 ${
                    hoveredService === index ? 'transform translate-y-[-2px]' : ''
                  }`}
                >
                  Deploy Solution
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            );
          })}
        </div>

        {/* Enhanced CTA section */}
        <div className="mt-20">
          <div className="trend-2025-block-midnight text-center">
            <h3 className="trend-2025-subheading text-white mb-6">
              Ready for Galaxy Dominance?
            </h3>
            
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Join 10,000+ organizations that have transformed their operations 
              with ReactorIX's galaxy-grade solutions spanning infinite scale.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-2025-primary px-8 py-4 text-lg">
                <Zap className="w-5 h-5 mr-2" />
                Start Free Trial
              </Button>
              
              <Button 
                variant="outline" 
                className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-4 text-lg"
              >
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services2025;