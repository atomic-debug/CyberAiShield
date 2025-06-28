import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="mb-8">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 leading-tight">
            Ready to Command Your Infrastructure?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join elite organizations that scale without limits and secure without compromise.
          </p>
        </div>
        
        <Button
          size="lg"
          className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-8 py-4 text-lg font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
        >
          Contact Us
          <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
        </Button>
      </div>
    </section>
  );
}