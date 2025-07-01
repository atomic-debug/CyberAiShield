export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: "ReactorIX has been instrumental in strengthening our security posture. Their team seamlessly integrated with ours and provided solutions that actually work in our environment.",
      author: "Sarah Chen",
      title: "CISO",
      company: "Aerospace Defense Contractor",
      years: "5-year partnership"
    },
    {
      quote: "No vendor agenda, just practical cybersecurity solutions. ReactorIX helped us implement enterprise-grade security without the enterprise-level complexity.",
      author: "Michael Rodriguez", 
      title: "IT Director",
      company: "Healthcare Technology",
      years: "3-year client"
    },
    {
      quote: "Their incident response capabilities saved us during a critical security event. The team's government background and clearances gave us confidence in their approach.",
      author: "Jennifer Park",
      title: "Security Manager", 
      company: "Financial Services",
      years: "2-year partnership"
    }
  ];

  const industries = [
    { name: "Defense & Aerospace", icon: "🛡️" },
    { name: "Healthcare", icon: "🏥" },
    { name: "Financial Services", icon: "🏦" },
    { name: "Technology", icon: "💻" },
    { name: "Manufacturing", icon: "🏭" },
    { name: "Energy & Utilities", icon: "⚡" }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Testimonials */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Organizations across critical industries rely on ReactorIX for their cybersecurity needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-purple-600 text-4xl mb-4">"</div>
              <blockquote className="text-gray-700 leading-relaxed mb-6">
                {testimonial.quote}
              </blockquote>
              <div className="border-t pt-4">
                <div className="font-semibold text-gray-900">{testimonial.author}</div>
                <div className="text-gray-600">{testimonial.title}</div>
                <div className="text-purple-600 font-medium">{testimonial.company}</div>
                <div className="text-sm text-gray-500 mt-1">{testimonial.years}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Industries Served */}
        <div className="bg-white rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Industries We Protect
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="text-center group">
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {industry.icon}
                </div>
                <div className="text-sm font-medium text-gray-700">
                  {industry.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}