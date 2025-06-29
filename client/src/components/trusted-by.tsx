import { memo } from 'react';

const TrustedBy = memo(function TrustedBy() {
  const companies = [
    'Fortune 500',
    'Government',
    'Healthcare',
    'Finance',
    'Technology',
    'Manufacturing'
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <p className="text-center text-sm text-gray-500 mb-8">Trusted by the world's leading enterprises</p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-50">
          {companies.map((company) => (
            <div key={company} className="text-gray-600 font-medium">
              {company}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default TrustedBy;