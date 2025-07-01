import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Contact() {
  return (
    <section id="contact" className="clickup-section bg-gray-50">
      <div className="clickup-container">
        <div className="clickup-card text-center max-w-4xl mx-auto">
          <div className="clickup-stack-lg">
            <h2 className="clickup-heading-2 text-gray-900">
              Deploy <span className="clickup-gradient-text">Atomic Solutions</span>
            </h2>
            <p className="clickup-subtitle max-w-3xl mx-auto">
              Transform your infrastructure with enterprise-grade cybersecurity and IT automation.
            </p>
            
            <button className="clickup-button-primary group">
              Deploy Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <p className="clickup-cta-disclaimer">
              Free consultation. No credit card required.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}