export default function ThreatProtection() {
  return (
    <section className="relative py-24">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 620"><rect width="1920" height="620" fill="%23161b22"/><circle cx="1400" cy="200" r="300" fill="%234c1d95" opacity="0.2"/><circle cx="500" cy="400" r="200" fill="%23321b47" opacity="0.3"/><polygon points="800,100 1000,300 800,500 600,300" fill="%236366f1" opacity="0.15"/></svg>')`
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
          Global Threat Protection Delivered Daily
        </h2>
      </div>
    </section>
  );
}