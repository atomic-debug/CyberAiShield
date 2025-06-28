import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function Services() {
  return (
    <section id="services" className="py-12 px-4 scroll-offset relative">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Minimal Header */}
        <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-8 leading-[0.9] tracking-tight">
          Three Core <span className="text-purple-600">Pillars</span>
        </h2>
        
        {/* Clean Text-Based Services */}
        <div className="space-y-12 text-left">
          
          <div className="border-l-4 border-purple-600 pl-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Fortress Security</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Military-grade protection that adapts, learns, and eliminates threats before they reach your infrastructure. 
              <span className="font-semibold text-purple-700"> Zero-compromise defense.</span>
            </p>
          </div>
          
          <div className="border-l-4 border-purple-600 pl-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Infinite Scale</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Seamless expansion that grows with your ambitions. From startup to enterprise, 
              <span className="font-semibold text-purple-700"> scale without limits or compromise.</span>
            </p>
          </div>
          
          <div className="border-l-4 border-purple-600 pl-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Total Automation</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              AI-powered systems that operate your infrastructure with precision and intelligence. 
              <span className="font-semibold text-purple-700"> Like having 1000 experts on your team.</span>
            </p>
          </div>
          
        </div>
        
        {/* Simple CTA */}
        <div className="mt-16">
          <Button 
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-12 py-6 text-xl font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            Deploy All Three
            <ArrowRight className="w-6 h-6 ml-3" />
          </Button>
        </div>
        
      </div>
    </section>
  );
}