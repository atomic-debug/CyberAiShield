import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ClickUp-style section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Do your most important work, faster
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From security incidents to compliance operations and more, this is just the tip of the iceberg.
          </p>
        </div>

        {/* Use Cases Grid - ClickUp style */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="h-48 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl mb-6 flex items-center justify-center">
              <svg className="w-16 h-16 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Secure any environment
            </h3>
            <p className="text-gray-600 mb-6">
              From cloud to on-premise, effortlessly plan, organize, and track security implementations that deliver results.
            </p>
            <button className="text-purple-600 font-medium hover:text-purple-700 transition-colors">
              Learn more →
            </button>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="h-48 bg-gradient-to-br from-green-100 to-green-200 rounded-xl mb-6 flex items-center justify-center">
              <svg className="w-16 h-16 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Triage security incidents
            </h3>
            <p className="text-gray-600 mb-6">
              Detect, analyze, and respond to threats with precision workflows that eliminate uncertainty.
            </p>
            <button className="text-purple-600 font-medium hover:text-purple-700 transition-colors">
              Learn more →
            </button>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl mb-6 flex items-center justify-center">
              <svg className="w-16 h-16 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Maintain flawless operations
            </h3>
            <p className="text-gray-600 mb-6">
              Keep your infrastructure running smoothly with automated monitoring and rapid response protocols.
            </p>
            <button className="text-purple-600 font-medium hover:text-purple-700 transition-colors">
              Learn more →
            </button>
          </div>
        </div>

        {/* Contact Form - ClickUp style */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Contact us
            </h3>
            <p className="text-gray-600">
              Ready to transform your security operations?
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                  First name*
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 bg-white"
                />
              </div>
              
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                  Last name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 bg-white"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email*
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 bg-white"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Write a message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 resize-none bg-white"
                placeholder="Tell us about your security challenges..."
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}