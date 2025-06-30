import { Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      content: "ReactorIX has been an exceptional partner over the past three years. In the high-stakes fintech industry, where we face constant threats, their dedication, technical expertise, and responsiveness have been critical to our success. From ransomware prevention to daily monitoring, they consistently go above and beyond to protect our business. We trust them completely and value their unwavering commitment to our mission.",
      author: "CTO",
      company: "Fortune 500 Financial Services",
      role: ""
    },
    {
      content: "As a fully remote organization providing consulting services, data security is critical to everything we do. The MDR, SOCaaS, and Incident Response team has been an incredible partner—proactive, responsive, and deeply knowledgeable. Their support gives us real peace of mind that our systems are secure and our client data is protected 24/7.",
      author: "Managing Director",
      company: "Global Technology Consulting Firm",
      role: "IT Operations and Security"
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