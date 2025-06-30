import { Twitter, Linkedin, Github, Youtube, Facebook } from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    { icon: Twitter, name: 'Twitter', href: '#' },
    { icon: Linkedin, name: 'LinkedIn', href: '#' },
    { icon: Github, name: 'GitHub', href: '#' },
    { icon: Youtube, name: 'YouTube', href: '#' },
    { icon: Facebook, name: 'Facebook', href: '#' },
  ];

  const footerLinks = {
    Product: ['Features', 'Integrations', 'Pricing', 'What\'s new'],
    Solutions: ['Project Management', 'Product Development', 'Marketing', 'Sales', 'Operations', 'HR'],
    Resources: ['Blog', 'Help Center', 'Community', 'Templates', 'Import', 'API docs'],
    Company: ['About', 'Careers', 'Customers', 'Security', 'Contact us'],
  };
  
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="clickup-container py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
          {/* Brand Section */}
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">R</span>
              </div>
              <span className="text-white font-bold text-xl">ReactorIX</span>
            </div>
            
            <p className="mb-6 text-sm">
              The everything app for work. One app to replace them all.
            </p>
            
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          
          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-white mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap items-center gap-6 text-sm">
              <p>© 2025 ReactorIX</p>
              <a href="#" className="hover:text-white">Privacy</a>
              <a href="#" className="hover:text-white">Terms</a>
              <a href="#" className="hover:text-white">Security</a>
              <a href="#" className="hover:text-white">Your Privacy Choices</a>
            </div>
            
            {/* App Download */}
            <div className="flex items-center gap-4">
              <img src="/api/placeholder/120/40" alt="Download on App Store" className="h-10" />
              <img src="/api/placeholder/120/40" alt="Get it on Google Play" className="h-10" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}