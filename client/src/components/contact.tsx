import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Contact() {
  return (
    <section id="contact" className="py-4 sm:py-5 md:py-6 lg:py-7 xl:py-8 bg-gray-50">
      <div className="max-w-7xl mx-auto px-2 sm:px-3 md:px-4 lg:px-6 xl:px-8">
        <div className="bg-white rounded-2xl sm:rounded-3xl p-3 sm:p-4 md:p-5 lg:p-6 xl:p-8 shadow-lg border border-gray-200 text-center max-w-5xl mx-auto">
          <div className="mb-3 sm:mb-4 md:mb-5 lg:mb-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-2 sm:mb-2.5 md:mb-3 lg:mb-3.5 xl:mb-4 leading-tight">
              Deploy <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Atomic Solutions</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl text-gray-600 mb-2 sm:mb-3 md:mb-4 lg:mb-5 xl:mb-6 max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-5xl mx-auto">
              Transform your infrastructure with enterprise-grade cybersecurity and IT automation.
            </p>
            
          </div>
          
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 group"
          >
            Deploy Now
            <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </div>
      </div>
    </section>
  );
}