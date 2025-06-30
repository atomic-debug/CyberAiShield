import { useState, useEffect, useCallback, memo } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = memo(function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  // Feature icons matching ClickUp's style
  const features = [
    { icon: '/api/placeholder/24/24', text: 'Tasks' },
    { icon: '/api/placeholder/24/24', text: 'Chat' },
    { icon: '/api/placeholder/24/24', text: 'Docs' },
    { icon: '/api/placeholder/24/24', text: 'Calendar' },
    { icon: '/api/placeholder/24/24', text: 'AI' },
    { icon: '/api/placeholder/24/24', text: 'Time Tracking' },
    { icon: '/api/placeholder/24/24', text: 'Gantt' },
    { icon: '/api/placeholder/24/24', text: 'Dashboards' },
    { icon: '/api/placeholder/24/24', text: 'Forms' },
    { icon: '/api/placeholder/24/24', text: 'Whiteboards' },
    { icon: '/api/placeholder/24/24', text: 'Sprints' },
    { icon: '/api/placeholder/24/24', text: 'Automations' },
  ];

  return (
    <section id="hero" className="clickup-hero">
      <div className="clickup-container">
        {/* Main Title */}
        <h1 className={`clickup-hero-title ${isVisible ? 'clickup-animate-fade-in' : 'opacity-0'}`}>
          The everything app, for work
        </h1>
        
        {/* Subtitle */}
        <p className={`clickup-hero-subtitle ${isVisible ? 'clickup-animate-fade-in' : 'opacity-0'}`}
          style={{ animationDelay: '0.1s' }}>
          One app to align, collaborate, and work. Designed to boost productivity 
          and save teams a day every week.
        </p>

        {/* CTA Button */}
        <div className={`mb-12 ${isVisible ? 'clickup-animate-fade-in' : 'opacity-0'}`}
          style={{ animationDelay: '0.2s' }}>
          <button 
            className="clickup-btn clickup-btn-primary"
            onClick={() => scrollToSection('contact')}
          >
            Get started. It's FREE
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
          <p className="clickup-body-small mt-4 text-gray-600">
            Free Forever. No credit card.
          </p>
        </div>

        {/* Feature Pills Grid */}
        <div className={`clickup-feature-grid ${isVisible ? 'clickup-animate-fade-in' : 'opacity-0'}`}
          style={{ animationDelay: '0.3s' }}>
          {features.map((feature, index) => (
            <div key={index} className="clickup-feature-pill">
              <img src={feature.icon} alt={feature.text} />
              <span>{feature.text}</span>
            </div>
          ))}
        </div>

        {/* And more text */}
        <p className={`clickup-body-small text-gray-600 mb-8 ${isVisible ? 'clickup-animate-fade-in' : 'opacity-0'}`}
          style={{ animationDelay: '0.4s' }}>
          and so much more...
        </p>

        {/* Get Started Button */}
        <button 
          className={`clickup-btn clickup-btn-secondary ${isVisible ? 'clickup-animate-fade-in' : 'opacity-0'}`}
          style={{ animationDelay: '0.5s' }}
          onClick={() => scrollToSection('services')}
        >
          Get started
        </button>

        {/* Star Rating */}
        <div className={`clickup-stars mt-8 justify-center ${isVisible ? 'clickup-animate-fade-in' : 'opacity-0'}`}
          style={{ animationDelay: '0.6s' }}>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="clickup-star" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="ml-2">4.6 stars</span>
          <span className="mx-2">•</span>
          <span>25,000+ reviews from</span>
          <img src="/api/placeholder/60/20" alt="G2" className="ml-2 h-5" />
          <img src="/api/placeholder/80/20" alt="Capterra" className="ml-2 h-5" />
        </div>
      </div>
    </section>
  );
});

export default Hero;