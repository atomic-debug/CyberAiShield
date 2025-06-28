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
    <footer className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white py-16 overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(#9333ea_1px,transparent_1px)] [background-size:32px_32px]"></div>
      </div>
      
      {/* Floating orb animation */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start mb-4 group cursor-pointer">
              <Shield className="w-10 h-10 mr-2 text-purple-400 group-hover:rotate-12 transition-transform duration-300" />
              <h3 className="text-3xl font-black bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                RactorIX
              </h3>
            </div>
            <p className="text-gray-300 mb-4">
              Security & scale as if you had 1000 of you at your back.
            </p>
            <p className="text-purple-400 font-bold">
              Atomic Solutions.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-xl font-bold mb-4 text-purple-300">Quick Links</h4>
            <div className="space-y-2">
              {['Services', 'About', 'Contact', 'Documentation'].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="block text-gray-400 hover:text-purple-400 transition-all duration-300 group"
                  onMouseEnter={() => setHoveredLink(link)}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  <span className="inline-flex items-center gap-1">
                    {link}
                    <ArrowUpRight className={`w-4 h-4 transition-all duration-300 ${
                      hoveredLink === link ? 'translate-x-1 -translate-y-1 opacity-100' : 'translate-x-0 translate-y-0 opacity-0'
                    }`} />
                  </span>
                </a>
              ))}
            </div>
          </div>
          
          {/* Connect Section */}
          <div className="text-center md:text-right">
            <h4 className="text-xl font-bold mb-4 text-purple-300">Connect</h4>
            <div className="flex justify-center md:justify-end gap-4 mb-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className={`text-gray-400 transition-all duration-300 ${social.color} transform hover:scale-125 relative group`}
                  aria-label={social.name}
                >
                  <social.icon className="w-6 h-6" />
                  <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-purple-400 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {social.name}
                  </span>
                </a>
              ))}
            </div>
            <p className="text-gray-400 text-sm">
              support@ractorix.com
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 RactorIX. All rights reserved. | 
            <span className="text-purple-400 ml-1 hover:text-purple-300 transition-colors duration-300 cursor-pointer">
              Powered by Atomic Precision
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
