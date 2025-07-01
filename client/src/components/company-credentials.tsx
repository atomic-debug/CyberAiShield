export default function CompanyCredentials() {
  const credentials = [
    {
      title: "Expert Leadership",
      description: "Founded by cybersecurity specialists with extensive government and enterprise backgrounds",
      icon: "👥"
    },
    {
      title: "Advanced Clearances", 
      description: "Team members with Top Secret security clearances and specialized certifications",
      icon: "🔐"
    },
    {
      title: "Global Reach",
      description: "Teams deployed across multiple regions providing 24x7x365 coverage",
      icon: "🌍"
    },
    {
      title: "Proven Track Record",
      description: "Successfully protecting organizations from 10-person teams to multi-national enterprises",
      icon: "📈"
    }
  ];

  const stats = [
    { number: "99.9%", label: "Uptime SLA" },
    { number: "24x7x365", label: "Monitoring" },
    { number: "<15min", label: "Response Time" },
    { number: "Zero", label: "Vendor Lock-in" }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Company Overview */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Veteran-Owned Cybersecurity Excellence
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            ReactorIX is a service-disabled veteran-owned cybersecurity firm founded by specialists 
            from premier government agencies. We deliver atomic precision in cybersecurity solutions 
            with no bloat and no vendor agendas.
          </p>
        </div>

        {/* Credentials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {credentials.map((credential, index) => (
            <div key={index} className="text-center group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {credential.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-purple-300">
                {credential.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {credential.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-black bg-opacity-30 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-center mb-8 text-purple-300">
            Our Performance Standards
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm uppercase tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Value Proposition */}
        <div className="mt-16 text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-purple-300">
              "No bloat. No vendor agendas."
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              Custom cybersecurity solutions tailored to your size, budget, and security maturity—delivering 
              the right protection at the right time. We serve as a seamless extension of your team, 
              from 10-person startups to multi-national corporations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}