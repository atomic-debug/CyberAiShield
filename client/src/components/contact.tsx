import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200 text-center">
          <div className="mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Ready to Get <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Started?</span>
            </h2>
            
          </div>
          
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            Contact Us
            <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </div>
      </div>
    </section>
  );
}