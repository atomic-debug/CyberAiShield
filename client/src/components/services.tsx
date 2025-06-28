export default function Services() {
  return (
    <section id="services" className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* ClickUp-style Problem Statement */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-12 leading-tight">
            IT is broken.
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Manual processes fragment work, steal time, and kill productivity.
          </p>
          <h3 className="text-4xl md:text-5xl font-black text-gray-900 mb-12">
            Let's fix it.
          </h3>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            With all your security, automation, and management in one platform, everything just works.
          </p>
        </div>

        {/* Visual showing consolidation */}
        <div className="text-center mb-20">
          <div className="bg-gray-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <p className="text-lg text-gray-600 mb-6">converge over 50+</p>
            <p className="text-2xl font-bold text-gray-900 mb-8">different security tools</p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {[
                "Antivirus", "Firewall", "SIEM", "Backup", "Monitoring", "Patching",
                "VPN", "Compliance", "Asset Mgmt", "Vulnerability", "Identity", "Endpoint"
              ].map((tool, index) => (
                <span key={index} className="bg-white px-3 py-2 rounded-lg text-sm font-medium text-gray-700 border">
                  {tool}
                </span>
              ))}
            </div>
            <p className="text-lg font-bold text-purple-600">The all-in-one cybersecurity workspace</p>
          </div>
        </div>

        {/* Use Cases Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-black text-gray-900 mb-6 text-center">
            Do your most important work, faster
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            From threat response to compliance and more, this is just the tip of the iceberg.
          </p>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                title: "Automate threat response",
                description: "From detection to remediation, seamlessly coordinate security responses that deliver results.",
                image: "🛡️"
              },
              {
                title: "Manage compliance",
                description: "Track, monitor, and maintain compliance across all frameworks with automated reporting.",
                image: "📋"
              },
              {
                title: "Monitor everything",
                description: "Real-time visibility into your entire security infrastructure from a single dashboard.",
                image: "📊"
              }
            ].map((useCase, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-6">{useCase.image}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{useCase.title}</h3>
                <p className="text-gray-600">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Smart Tools Section */}
        <div className="text-center">
          <h2 className="text-4xl font-black text-gray-900 mb-6">
            10x your work with smarter tools
          </h2>
          <h3 className="text-3xl font-bold text-gray-700 mb-12">
            Smart tools for smarter workflows
          </h3>
          <p className="text-xl text-gray-600 mb-16">Work smarter in every way.</p>
          
          {/* AI Section */}
          <div className="bg-purple-50 rounded-3xl p-12 max-w-4xl mx-auto">
            <h4 className="text-3xl font-black text-gray-900 mb-4">RactorIX Brain</h4>
            <h5 className="text-2xl font-bold text-gray-700 mb-6">One AI for all your security work</h5>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Instantly power up company-wide AI that connects every aspect of your security operations, across all your tools.
            </p>
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-bold transition-colors">
              Try for free
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}