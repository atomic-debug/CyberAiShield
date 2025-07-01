export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-purple-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ClickUp-style Hero Container */}
        <div className="text-center max-w-4xl mx-auto">
          {/* Feature Pills - ClickUp style */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm border border-gray-200">
              <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
              <span className="text-sm font-medium text-gray-700">Adaptive Security</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm border border-gray-200">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm font-medium text-gray-700">AI-Powered</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm border border-gray-200">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-sm font-medium text-gray-700">Zero Vendor Lock-in</span>
            </div>
          </div>
          
          {/* Main Headline - ClickUp typography */}
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            The cybersecurity platform for work
          </h1>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            One platform to secure, monitor, and protect. Designed to eliminate uncertainty and deliver atomic precision.
          </p>

          {/* CTA Button - ClickUp style */}
          <button 
            onClick={() => scrollToSection('about')}
            className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            Get started. It's FREE
          </button>
          
          {/* Subtext */}
          <p className="text-sm text-gray-500 mt-4">
            Free Forever. No credit card.
          </p>

          {/* Feature Grid - ClickUp style */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-center">
            {[
              { name: 'Tasks', icon: '📋' },
              { name: 'Chat', icon: '💬' },
              { name: 'Docs', icon: '📄' },
              { name: 'AI', icon: '🤖' },
              { name: 'Forms', icon: '📝' },
              { name: 'Dashboards', icon: '📊' }
            ].map((feature) => (
              <div key={feature.name} className="flex flex-col items-center space-y-2 p-4 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="text-2xl">{feature.icon}</div>
                <span className="text-sm font-medium text-gray-700">{feature.name}</span>
              </div>
            ))}
          </div>
          
          <p className="text-center text-gray-500 mt-6">
            Start with the basics, 100s of features available in app.
          </p>
        </div>
      </div>
    </section>
  );
}