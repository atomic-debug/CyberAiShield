export default function About() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Why ReactorIX Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Why ReactorIX?
          </h2>
        </div>

        {/* Features Grid - Loki Labs Style */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Tailored Protection
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Security solutions built around your business needs.
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Rapid Response
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Detect, contain, and neutralize cyber threats fast.
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Unbiased Expertise
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              No vendor lock-in, just solutions that work for you.
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Scalable & Adaptive
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Security strategies that evolve with your organization.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}