import { ArrowRight } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="clickup-section bg-purple-600 text-white">
      <div className="clickup-container text-center">
        <h2 className="clickup-hero-title text-white mb-8">
          Ready to unlock productivity?
        </h2>
        <p className="clickup-hero-subtitle text-white/90 max-w-3xl mx-auto mb-12">
          Join millions of teams who trust ClickUp to get more done.
        </p>
        
        <button className="clickup-btn bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
          Get Started. It's FREE
          <ArrowRight className="w-5 h-5 ml-2" />
        </button>
        
        <p className="clickup-body-small text-white/80 mt-6">
          Free Forever. No credit card required.
        </p>
      </div>
    </section>
  );
}