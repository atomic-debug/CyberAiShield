import { memo } from 'react';
import { XCircle, CheckCircle } from 'lucide-react';

const ProblemSolution = memo(function ProblemSolution() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Problem */}
          <div className="text-center md:text-left">
            <XCircle className="w-12 h-12 text-red-500 mb-6 mx-auto md:mx-0" />
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Security is broken.</h2>
            <p className="text-lg text-gray-600">
              Tool-switching fragments operations, steals time, and leaves vulnerabilities exposed.
            </p>
          </div>
          
          {/* Solution */}
          <div className="text-center md:text-left">
            <CheckCircle className="w-12 h-12 text-purple-600 mb-6 mx-auto md:mx-0" />
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Let's fix it.</h2>
            <p className="text-lg text-gray-600">
              With all your security, automation, and infrastructure in one platform, everything just clicks.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
});

export default ProblemSolution;