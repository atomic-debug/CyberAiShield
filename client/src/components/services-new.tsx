import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Shield, Zap, Target, ChevronRight, Lock, Cloud, Brain } from 'lucide-react';

export default function Services() {
  const [activeService, setActiveService] = useState(0);
  
  const services = [
    {
      icon: Shield,
      title: 'Fortress Security',
      tagline: 'Zero-Trust Architecture',
      description: 'Military-grade encryption and real-time threat detection that evolves faster than attackers.',
      features: ['24/7 SOC Monitoring', 'AI Threat Detection', 'Instant Response'],
    },
    {
      icon: Brain,
      title: 'AI Automation',
      tagline: 'Intelligence at Scale',
      description: 'Autonomous systems that learn, adapt, and optimize your entire infrastructure.',
      features: ['Self-Healing Systems', 'Predictive Analytics', 'Smart Orchestration'],
    },
    {
      icon: Cloud,
      title: 'Infinite Scale',
      tagline: 'Limitless Infrastructure',
      description: 'Cloud architecture that scales instantly, costs less, and never fails.',
      features: ['Auto-Scaling', 'Multi-Region', 'Cost Optimization'],
    },
  ];

  return (
    <section id="services" className="clickup-section bg-white">
      <div className="clickup-container">
        <div className="text-center mb-16">
          <h2 className="clickup-heading-2 text-gray-900 mb-6">
            Three Core Pillars
          </h2>
          <p className="clickup-subtitle max-w-3xl mx-auto">
            Everything you need to dominate your industry, integrated in one powerful platform.
          </p>
        </div>

        {/* Services Grid - ClickUp style */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`clickup-card clickup-card-hover cursor-pointer ${
                activeService === index ? 'ring-2 ring-primary' : ''
              }`}
              onClick={() => setActiveService(index)}
            >
              <div className="w-16 h-16 clickup-gradient-bg rounded-2xl flex items-center justify-center mb-6">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="clickup-heading-3 text-gray-900 mb-2">
                {service.title}
              </h3>
              
              <p className="text-primary font-semibold mb-4">
                {service.tagline}
              </p>
              
              <p className="text-gray-600 mb-6">
                {service.description}
              </p>
              
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <ChevronRight className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button
                variant="ghost"
                className="mt-6 text-primary hover:text-purple-700 p-0 group"
              >
                Learn more
                <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Button
            size="lg"
            className="clickup-button-primary clickup-gradient-bg"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Deploy All Solutions
          </Button>
          <p className="clickup-cta-disclaimer">
            Start with one, scale to all. No lock-in.
          </p>
        </div>
      </div>
    </section>
  );
}