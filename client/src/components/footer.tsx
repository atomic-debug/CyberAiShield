import { Shield, Twitter, Linkedin, Github, Mail, ArrowUpRight } from 'lucide-react';
import { useState } from 'react';

export default function Footer() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  
  const socialLinks = [
    { icon: Twitter, name: 'Twitter', href: '#' },
    { icon: Linkedin, name: 'LinkedIn', href: '#' },
    { icon: Github, name: 'GitHub', href: '#' },
    { icon: Mail, name: 'Email', href: '#' },
  ];

  const footerLinks = {
    Product: ['Features', 'Integrations', 'Pricing', 'Changelog'],
    Company: ['About', 'Blog', 'Careers', 'Press'],
    Resources: ['Docs', 'Support', 'Community', 'Partners'],
    Legal: ['Privacy', 'Terms', 'Security', 'Compliance'],
  };
  
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="clickup-container py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
          {/* Brand Section */}
          <div className="col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 clickup-gradient-bg rounded-xl flex items-center justify-center mr-3">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">ReactorIX</h3>
                <p className="text-sm text-gray-600">Atomic Solutions</p>
              </div>
            </div>
            
            <p className="text-gray-600 mb-6 max-w-xs">
              Enterprise-grade cybersecurity and IT automation for organizations that demand excellence.
            </p>
            
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-gray-400 hover:text-primary transition-colors"
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
              <h4 className="font-semibold text-gray-900 mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      onMouseEnter={() => setHoveredLink(link)}
                      onMouseLeave={() => setHoveredLink(null)}
                      className="text-gray-600 hover:text-primary transition-colors flex items-center group"
                    >
                      {link}
                      {hoveredLink === link && (
                        <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-100 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm">
              © 2025 ReactorIX. All rights reserved.
            </p>
            
            {/* Trust Badges */}
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">SOC 2 Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">ISO 27001</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">GDPR Ready</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}