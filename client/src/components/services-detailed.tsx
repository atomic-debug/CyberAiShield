export default function ServicesDetailed() {
  const services = [
    {
      title: "Security Assessments",
      description: "Comprehensive vulnerability assessments and penetration testing for IT networks, industrial control systems, and proprietary software/hardware.",
      features: [
        "Vulnerability Assessments & Penetration Testing", 
        "Red Team Exercises & Threat Emulation",
        "Coached Training for Defensive Teams",
        "IT Networks & Industrial Control Systems Testing"
      ],
      icon: "🛡️"
    },
    {
      title: "Incident Response", 
      description: "Emergency incident response services with 24x7x365 availability for post-attack investigation and recovery.",
      features: [
        "Emergency Incident Response Services",
        "Post-Attack Investigation & Reporting", 
        "24x7x365 Availability",
        "Threat Actor Analysis & Attribution"
      ],
      icon: "🚨"
    },
    {
      title: "Managed SOC",
      description: "Real-time threat detection and response with 24x7x365 monitoring by in-house analyst response teams.",
      features: [
        "Real-Time Threat Detection & Response",
        "24x7x365 Monitoring",
        "In-House Analyst Response Teams", 
        "Vulnerability Identification & Remediation"
      ],
      icon: "🖥️"
    },
    {
      title: "Training & Education",
      description: "Advanced cybersecurity training and active exercises for client teams to enhance skills with existing security tools.",
      features: [
        "Advanced Cybersecurity Training",
        "Active Training Exercises", 
        "Skills Development for Security Tools",
        "Custom Team-Based Scenarios"
      ],
      icon: "🎓"
    }
  ];

  return (
    <section id="services" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive cybersecurity solutions from security assessments to managed services, 
            delivered by experts with NSA and Department of Defense backgrounds.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-start space-x-4 mb-6">
                <div className="text-4xl">{service.icon}</div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
              
              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-700 leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Strengthen Your Security Posture?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Get a comprehensive security assessment tailored to your organization's needs.
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Schedule Assessment
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}