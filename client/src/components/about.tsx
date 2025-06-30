import { useEffect, useState, useRef } from "react";
import { Shield, TrendingUp, Zap, Target, Users, Globe, Award, Clock } from "lucide-react";

export default function About() {
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

  // Trust logos
  const trustLogos = [
    { name: "Shipt", src: "/api/placeholder/100/40" },
    { name: "Cartoon Network", src: "/api/placeholder/120/40" },
    { name: "T-Mobile", src: "/api/placeholder/100/40" },
    { name: "Sephora", src: "/api/placeholder/100/40" },
    { name: "Logitech", src: "/api/placeholder/100/40" },
    { name: "Padres", src: "/api/placeholder/80/40" },
  ];

  return (
    <section ref={ref} id="about" className="clickup-section bg-white">
      <div className="clickup-container">
        {/* Trust section */}
        <div className={`text-center mb-20 ${isVisible ? 'clickup-animate-fade-in' : 'opacity-0'}`}>
          <p className="clickup-body-small text-gray-600 mb-8">
            Trusted by the world's leading businesses
          </p>
          <div className="clickup-trust-logos">
            {trustLogos.map((logo, index) => (
              <img 
                key={index}
                src={logo.src} 
                alt={logo.name}
                className="clickup-trust-logo"
              />
            ))}
          </div>
        </div>

        {/* Work is broken section */}
        <div className={`max-w-4xl mx-auto text-center mb-20 ${isVisible ? 'clickup-animate-fade-in' : 'opacity-0'}`}
          style={{ animationDelay: '0.2s' }}>
          <h2 className="clickup-h2 mb-6">
            Work is broken.
          </h2>
          <p className="clickup-body text-gray-700 mb-12">
            App-switching fragments work, steals time, and kills productivity.
          </p>
          
          <h2 className="clickup-h2 mb-6 text-purple-600">
            Let's fix it.
          </h2>
          <p className="clickup-body text-gray-700 mb-8">
            With all your projects, knowledge, and conversations in one app, everything just clicks.
          </p>
          
          <button className="clickup-btn clickup-btn-primary">
            Get started
            <Zap className="w-5 h-5 ml-2" />
          </button>
        </div>

        {/* Converge section */}
        <div className={`text-center mb-20 ${isVisible ? 'clickup-animate-fade-in' : 'opacity-0'}`}
          style={{ animationDelay: '0.4s' }}>
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="text-6xl font-bold text-purple-600">50+</span>
            <span className="clickup-body text-gray-600">different apps</span>
          </div>
          <p className="clickup-h4 text-gray-800">
            converge into
          </p>
          <p className="clickup-h3 text-purple-600 mt-2">
            The all-in-one workspace
          </p>
        </div>
      </div>
    </section>
  );
}