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
      title: "Cybersecurity Fortress",
      description: "AI-powered threat detection and response that adapts in real-time to emerging security landscapes.",
      features: ["Zero-Day Protection", "Behavioral Analysis", "Quantum Encryption"],
      color: "trend-2025-block",
      stats: "99.9% Threat Prevention"
    },
    {
      icon: Bot,
      title: "Automation Command Center", 
      description: "Intelligent workflow automation that eliminates manual tasks and accelerates your operations.",
      features: ["Smart Orchestration", "Predictive Scaling", "Self-Healing Systems"],
      color: "trend-2025-block-warm",
      stats: "85% Time Reduction"
    },
    {
      icon: Activity,
      title: "Infrastructure Intelligence",
      description: "Comprehensive monitoring and optimization that keeps your systems running at peak performance.",
      features: ["Real-time Analytics", "Capacity Planning", "Performance Optimization"],
      color: "trend-2025-block-contrast",
      stats: "40% Cost Savings"
    }
  ];

  return (
    <section className="py-20 warm-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section header with 2025 typography */}
        <div className="text-center mb-16">
          <Badge className="warm-border warm-text mb-4">
            <Zap className="w-4 h-4 mr-2" />
            Complete Solution Suite
          </Badge>
          
          <h2 className="trend-2025-heading warm-text mb-6">
            Built for You
            <span className="block serif-sans-contrast">to Scale</span>
          </h2>
          
          <p className="trend-2025-variable-text warm-text text-xl max-w-3xl mx-auto">
            Three integrated pillars of digital transformation that work seamlessly together 
            to deliver unprecedented operational supremacy.
          </p>
        </div>

        {/* Big blocks layout with advanced 2025 trends */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 smart-reveal-container">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className={`${service.color} refined-motion group cursor-pointer trend-3d-card liquid-morphing energy-flow scroll-triggered-animation delayed-${index + 1} smart-reveal-item`}
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
              >
                {/* Enhanced anti-design element with depth */}
                <div className="flex items-center justify-between mb-6 interactive-depth">
                  <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center anti-design-element neomorphism-2025 depth-layer-2">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="achievement-badge depth-layer-1">
                    {service.stats}
                  </div>
                </div>

                {/* Bold typography with holographic effect */}
                <h3 className="trend-2025-subheading text-white mb-4 depth-layer-1">
                  <span className="holographic">{service.title.split(' ')[0]}</span>
                  <span className="text-white/90"> {service.title.split(' ').slice(1).join(' ')}</span>
                </h3>

                <p className="text-white/90 text-lg mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Feature list with advanced micro-interactions */}
                <div className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <div 
                      key={featureIndex}
                      className={`flex items-center space-x-3 micro-interaction p-2 rounded-lg neomorphism-2025 scroll-triggered-animation delayed-${featureIndex + 1} ${
                        hoveredService === index ? 'micro-bounce' : ''
                      }`}
                      style={{ animationDelay: `${featureIndex * 100}ms` }}
                    >
                      <div className="w-3 h-3 rounded-full bg-gradient-to-r from-white/80 to-white/40 achievement-badge" style={{ padding: '2px' }} />
                      <span className="text-white/80 font-medium trend-2025-variable-text">{feature}</span>
                      {hoveredService === index && (
                        <div className="ml-auto">
                          <Sparkles className="w-3 h-3 text-white/60" />
                        </div>
                      )}
                    </div>
                  ))}
                  
                  {/* Gamification progress for features */}
                  {hoveredService === index && (
                    <div className="mt-4 gamification-progress">
                      <div 
                        style={{ 
                          width: '100%',
                          height: '100%',
                          background: 'linear-gradient(90deg, hsl(var(--vibrant-purple)), hsl(var(--vibrant-blue)), hsl(var(--vibrant-orange)))',
                          borderRadius: '20px',
                          animation: 'progressGlow 2s ease-in-out infinite alternate'
                        }}
                      />
                    </div>
                  )}
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
          <div className="trend-2025-block-contrast text-center">
            <h3 className="trend-2025-subheading text-white mb-6">
              Ready for Atomic Dominance?
            </h3>
            
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Join 10,000+ organizations that have transformed their operations 
              with ReactorIX's enterprise-grade solutions.
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