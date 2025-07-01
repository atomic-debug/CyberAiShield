import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Contact() {
  return (
    <section id="contact" className="clickup-section bg-gray-50">
      <div className="clickup-container">
        <div className="clickup-card text-center max-w-4xl mx-auto">
          <div className="clickup-cta">
            <h2 className="clickup-heading-2 text-gray-900 mb-6">
              Deploy <span className="clickup-gradient-text">Atomic Solutions</span>
            </h2>
            <p className="clickup-subtitle max-w-3xl mx-auto mb-8">
              Transform your infrastructure with enterprise-grade cybersecurity and IT automation.
            </p>
            
            <Button
              size="lg"
              className="clickup-button-primary clickup-gradient-bg group"
            >
              Deploy Now
              <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <p className="clickup-cta-disclaimer">
              Free consultation. No credit card required.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}