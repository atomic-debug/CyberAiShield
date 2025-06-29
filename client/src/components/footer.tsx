import { Shield, Twitter, Linkedin, Github, Mail, ArrowUpRight } from 'lucide-react';
import { useState } from 'react';

export default function Footer() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  
  const socialLinks = [
    { icon: Twitter, name: 'Twitter', href: '#', color: 'hover:text-blue-400' },
    { icon: Linkedin, name: 'LinkedIn', href: '#', color: 'hover:text-blue-600' },
    { icon: Github, name: 'GitHub', href: '#', color: 'hover:text-gray-600' },
    { icon: Mail, name: 'Email', href: '#', color: 'hover:text-purple-600' },
  ];
  
  return (
    <footer className="bg-gray-50 px-4 py-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-4 gap-6 mb-6">
          {/* Brand Section */}
          <div className="col-span-2">
            <div className="flex items-center mb-4">
              <Shield className="w-8 h-8 mr-3 text-purple-600" />
              <div>
                <h3 className="text-2xl font-bold text-gray-900">ReactorIX</h3>
                <p className="text-sm text-purple-600 font-medium">Reactor Solutions</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-gray-400 hover:text-purple-600 transition-colors duration-200"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wide">Solutions</h4>
            <div className="space-y-2">
              {['AI Automation', 'Cybersecurity', 'Cloud Infrastructure', 'Managed Services'].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="block text-gray-600 hover:text-purple-600 transition-colors duration-200 text-sm"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
          
          {/* Support */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wide">Support</h4>
            <div className="space-y-2">
              {['Documentation', 'Contact', 'Status', 'Security'].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="block text-gray-600 hover:text-purple-600 transition-colors duration-200 text-sm"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
        
          {/* Bottom Bar */}
          <div className="border-t border-gray-200 pt-4 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © 2025 ReactorIX. All rights reserved.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-500 hover:text-purple-600 transition-colors duration-200 text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 hover:text-purple-600 transition-colors duration-200 text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-gray-500 hover:text-purple-600 transition-colors duration-200 text-sm">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
