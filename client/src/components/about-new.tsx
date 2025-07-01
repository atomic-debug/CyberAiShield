export default function About() {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ClickUp-style Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Work is broken.
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Security tool sprawl fragments defenses, steals time, and kills productivity.
          </p>
        </div>

        {/* Problem/Solution Container - ClickUp style */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 md:p-12 mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Let's fix it.
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              With all your security, monitoring, and incident response in one platform, everything just clicks.
            </p>
          </div>

          {/* Features Grid - ClickUp container style */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-xl bg-purple-50 border border-purple-100">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Unified Defense
              </h3>
              <p className="text-gray-600 text-sm">
                All security tools in one platform
              </p>
            </div>

            <div className="text-center p-6 rounded-xl bg-green-50 border border-green-100">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                AI-Powered
              </h3>
              <p className="text-gray-600 text-sm">
                Automated threat detection and response
              </p>
            </div>

            <div className="text-center p-6 rounded-xl bg-blue-50 border border-blue-100">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                  <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Real-time Monitoring
              </h3>
              <p className="text-gray-600 text-sm">
                24/7 visibility across all systems
              </p>
            </div>

            <div className="text-center p-6 rounded-xl bg-orange-50 border border-orange-100">
              <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Zero Configuration
              </h3>
              <p className="text-gray-600 text-sm">
                Deploy and protect in minutes
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <button className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl">
            Get started
          </button>
        </div>
      </div>
    </section>
  );
}