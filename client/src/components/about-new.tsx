import { useState } from 'react';

export default function About() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section id="about" className="py-16 bg-gradient-to-br from-gray-50 to-gray-100 transition-all duration-1000">
      <div className="max-w-6xl mx-auto px-4">
        {/* Why ReactorIX Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 transition-all duration-300">
            Why ReactorIX?
          </h2>
        </div>

        {/* Features Grid - Interactive Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {[
            {
              title: "Tailored Protection",
              description: "Security solutions built around your business needs.",
              color: "from-purple-500 to-purple-600"
            },
            {
              title: "Rapid Response", 
              description: "Detect, contain, and neutralize cyber threats fast.",
              color: "from-blue-500 to-blue-600"
            },
            {
              title: "Unbiased Expertise",
              description: "No vendor lock-in, just solutions that work for you.",
              color: "from-green-500 to-green-600"
            },
            {
              title: "Scalable & Adaptive",
              description: "Security strategies that evolve with your organization.",
              color: "from-orange-500 to-orange-600"
            }
          ].map((feature, index) => (
            <div 
              key={index}
              className="text-center group cursor-pointer transition-all duration-300 transform hover:scale-105"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${feature.color} flex items-center justify-center transition-all duration-300 ${hoveredCard === index ? 'shadow-lg scale-110' : ''}`}>
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <div className={`w-4 h-4 bg-gradient-to-br ${feature.color} rounded-full`} />
                </div>
              </div>
              <h3 className={`text-2xl font-bold mb-4 transition-all duration-300 ${hoveredCard === index ? 'text-purple-600' : 'text-gray-900'}`}>
                {feature.title}
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed transition-all duration-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}