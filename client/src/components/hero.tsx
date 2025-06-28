export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-24 pb-32 px-4 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <div className="animate-fade-in">
          {/* Hero Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-8 leading-tight">
            The everything app,<br />
            <span className="text-rose-500">
              for cybersecurity
            </span>
          </h1>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            One platform to secure, automate, and manage. Designed to boost IT security and save teams a day every week.
          </p>
          
          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 shadow-lg"
            >
              Get started
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-600 hover:text-gray-900 px-8 py-4 font-medium text-lg transition-colors"
            >
              Request demo
            </button>
          </div>
          
          {/* ClickUp-style Feature Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-16 max-w-5xl mx-auto">
            {[
              { icon: "🛡️", name: "Security" },
              { icon: "🤖", name: "AI" },
              { icon: "📊", name: "Analytics" },
              { icon: "⚡", name: "Automation" },
              { icon: "📱", name: "Monitoring" },
              { icon: "🔐", name: "Compliance" }
            ].map((feature, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-xl text-center hover:bg-gray-100 transition-colors cursor-pointer">
                <div className="text-2xl mb-2">{feature.icon}</div>
                <div className="text-sm font-medium text-gray-700">{feature.name}</div>
              </div>
            ))}
          </div>
          
          <div className="text-center mb-12">
            <p className="text-gray-500 text-sm mb-2">Start with the basics,</p>
            <p className="text-gray-600 font-medium">100s of features available in app.</p>
          </div>
          
          {/* Secondary CTA */}
          <div className="flex justify-center mb-16">
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-bold transition-all duration-300"
            >
              Get started
            </button>
          </div>
          
          {/* Trust indicators - ClickUp style */}
          <div className="text-center">
            <p className="text-sm text-gray-500 mb-8 flex items-center justify-center gap-2">
              <span className="text-yellow-500">⭐</span>
              <span className="font-medium">4.6 stars</span>
              <span>25,000+ reviews from</span>
            </p>
            <div className="text-center">
              <h2 className="text-sm text-gray-500 mb-6">Trusted by the world's leading businesses</h2>
              <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
                {["Microsoft", "AWS", "Google Cloud", "Cisco", "Fortinet", "CrowdStrike", "Logitech"].map((company, index) => (
                  <div key={index} className="text-gray-400 font-medium text-sm">
                    {company}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}