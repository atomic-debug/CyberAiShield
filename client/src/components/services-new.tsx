import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Rocket, Settings, CheckCircle, ArrowRight, BarChart, Users, Target } from 'lucide-react';

export default function Services() {
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const useCases = [
    {
      title: 'Launch any campaign',
      description: 'From idea to execution, effortlessly plan, organize, and track campaigns that deliver results.',
      icon: Rocket,
      image: '/api/placeholder/600/400',
    },
    {
      title: 'Triage product issues',
      description: 'Quickly identify, prioritize, and resolve product issues to maintain quality and customer satisfaction.',
      icon: Settings,
      image: '/api/placeholder/600/400',
    },
    {
      title: 'Maintain flawless operations',
      description: 'Keep your operations running smoothly with real-time visibility and automated workflows.',
      icon: CheckCircle,
      image: '/api/placeholder/600/400',
    },
  ];

  return (
    <section ref={ref} id="services" className="clickup-section bg-gray-50">
      <div className="clickup-container">
        {/* Header */}
        <div className={`text-center mb-16 ${isVisible ? 'clickup-animate-fade-in' : 'opacity-0'}`}>
          <h2 className="clickup-h2 mb-6">
            Do your most important work, faster
          </h2>
          <p className="clickup-body text-gray-700 max-w-3xl mx-auto">
            From campaigns to operations and more, this is just the tip of the iceberg.
          </p>
          <a href="#" className="inline-flex items-center gap-2 mt-4 text-purple-600 font-semibold hover:underline">
            See all use cases
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Tab Navigation */}
        <div className={`flex flex-wrap justify-center gap-4 mb-12 ${isVisible ? 'clickup-animate-fade-in' : 'opacity-0'}`}
          style={{ animationDelay: '0.1s' }}>
          {useCases.map((useCase, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`clickup-btn ${
                activeTab === index 
                  ? 'clickup-btn-primary' 
                  : 'clickup-btn-secondary'
              } flex items-center gap-2`}
            >
              <useCase.icon className="w-5 h-5" />
              {useCase.title}
            </button>
          ))}
        </div>

        {/* Content Display */}
        <div className={`max-w-5xl mx-auto ${isVisible ? 'clickup-animate-fade-in' : 'opacity-0'}`}
          style={{ animationDelay: '0.2s' }}>
          <div className="clickup-feature-card">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="clickup-h3 mb-4">
                  {useCases[activeTab].title}
                </h3>
                <p className="clickup-body text-gray-700 mb-6">
                  {useCases[activeTab].description}
                </p>
                <button className="clickup-btn clickup-btn-primary">
                  Learn more
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              </div>
              <div>
                <img 
                  src={useCases[activeTab].image} 
                  alt={useCases[activeTab].title}
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Additional Features */}
        <div className={`mt-20 ${isVisible ? 'clickup-animate-fade-in' : 'opacity-0'}`}
          style={{ animationDelay: '0.3s' }}>
          <h3 className="clickup-h3 text-center mb-12">
            10x your work with smarter tools
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-purple-600" />
              </div>
              <h4 className="clickup-h4 mb-2">Focused Work</h4>
              <p className="clickup-body-small text-gray-600">
                Eliminate distractions with purpose-built tools
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <BarChart className="w-8 h-8 text-purple-600" />
              </div>
              <h4 className="clickup-h4 mb-2">Data Insights</h4>
              <p className="clickup-body-small text-gray-600">
                Make informed decisions with real-time analytics
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h4 className="clickup-h4 mb-2">Team Alignment</h4>
              <p className="clickup-body-small text-gray-600">
                Keep everyone on the same page effortlessly
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}