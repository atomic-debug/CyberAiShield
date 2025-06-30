import { Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      content: "ReactorIX transformed our security posture from reactive to predictive. Their autonomous threat detection caught a sophisticated APT that our previous tools missed completely. The precision of their response eliminated the threat before it could establish persistence. In aerospace defense, this level of protection isn't optional—it's mission critical.",
      author: "CISO",
      company: "U.S. Aerospace Defense Contractor",
      role: ""
    },
    {
      content: "What sets ReactorIX apart is their refusal to oversell. They analyzed our infrastructure, identified exactly what we needed, and delivered a solution that integrates seamlessly with our existing investments. No vendor lock-in, no unnecessary complexity—just bulletproof security that adapts as we scale.",
      author: "VP of Engineering",
      company: "Series B SaaS Platform",
      role: "Infrastructure & Security"
    }
  ];

  return (
    <section id="testimonials" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Testimonials
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg p-8 shadow-sm border border-gray-200 relative"
            >
              <Quote className="w-8 h-8 text-purple-600 mb-4" />
              <blockquote className="text-gray-700 text-lg leading-relaxed mb-6">
                "{testimonial.content}"
              </blockquote>
              <div className="border-t border-gray-200 pt-4">
                <div className="font-semibold text-gray-900">
                  {testimonial.author}
                </div>
                <div className="text-gray-600">
                  {testimonial.role && `${testimonial.role}, `}{testimonial.company}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}