import { useState } from 'react';
import { useScrollDirection, useScrollPosition } from '@/hooks/use-scroll';
import { cn } from '@/lib/utils';

export default function Header() {
  const scrollDirection = useScrollDirection();
  const scrollPosition = useScrollPosition();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  
  const isHidden = scrollDirection === 'down' && scrollPosition > 50;

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        isHidden && "header-hidden"
      )}
    >
      <div className="mx-4 mt-4">
        <nav className="bg-white/95 backdrop-blur-lg rounded-2xl px-6 py-3 mx-auto max-w-7xl border border-gray-300 shadow-xl shadow-gray-500/10 border-b-2 border-b-gray-300">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-rose-200 to-pink-200 rounded-xl flex items-center justify-center shadow-sm">
                <svg className="w-6 h-6 text-rose-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <div>
                <div className="text-xl font-black text-gray-900">RactorIX</div>
                <div className="text-xs font-medium text-gray-500">Atomic Solution</div>
              </div>
            </div>
            
            {/* Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {/* Services Dropdown */}
              <div className="relative"
                   onMouseEnter={() => setActiveDropdown('services')}
                   onMouseLeave={() => setActiveDropdown(null)}>
                <button className="flex items-center space-x-1 px-4 py-2 text-gray-700 hover:text-gray-900 transition-colors font-medium rounded-xl hover:bg-gray-50">
                  <span>Solutions</span>
                  <svg className={`w-4 h-4 transition-transform ${activeDropdown === 'services' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
                  </svg>
                </button>
                
                {activeDropdown === 'services' && (
                  <div className="absolute top-full left-0 mt-1 w-80 bg-white rounded-2xl shadow-xl border border-gray-200/50 overflow-hidden z-50">
                    <div className="p-6">
                      <div className="grid gap-4">
                        <div className="group p-4 rounded-xl hover:bg-gray-50 transition-all cursor-pointer">
                          <div className="flex items-start space-x-3">
                            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"/>
                              </svg>
                            </div>
                            <div className="flex-1">
                              <h3 className="font-semibold text-gray-900">IT Automation</h3>
                              <p className="text-sm text-gray-500 mt-1">Streamline operations across environments</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="group p-4 rounded-xl hover:bg-gray-50 transition-all cursor-pointer">
                          <div className="flex items-start space-x-3">
                            <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                              <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                              </svg>
                            </div>
                            <div className="flex-1">
                              <h3 className="font-semibold text-gray-900">Cybersecurity</h3>
                              <p className="text-sm text-gray-500 mt-1">AI-powered security management</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="group p-4 rounded-xl hover:bg-gray-50 transition-all cursor-pointer">
                          <div className="flex items-start space-x-3">
                            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                              <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                              </svg>
                            </div>
                            <div className="flex-1">
                              <h3 className="font-semibold text-gray-900">Custom Development</h3>
                              <p className="text-sm text-gray-500 mt-1">Tailored automation workflows</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Company Dropdown */}
              <div className="relative"
                   onMouseEnter={() => setActiveDropdown('company')}
                   onMouseLeave={() => setActiveDropdown(null)}>
                <button className="flex items-center space-x-1 px-4 py-2 text-gray-700 hover:text-gray-900 transition-colors font-medium rounded-xl hover:bg-gray-50">
                  <span>Company</span>
                  <svg className={`w-4 h-4 transition-transform ${activeDropdown === 'company' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
                  </svg>
                </button>
                
                {activeDropdown === 'company' && (
                  <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-2xl shadow-xl border border-gray-200/50 overflow-hidden z-50">
                    <div className="p-4">
                      <div className="space-y-2">
                        <button 
                          onClick={() => scrollToSection('about')}
                          className="w-full text-left px-4 py-3 rounded-xl hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 text-gray-700 hover:text-indigo-600 transition-all"
                        >
                          About Us
                        </button>
                        <a href="#" className="block px-4 py-3 rounded-xl hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 text-gray-700 hover:text-indigo-600 transition-all">
                          Careers
                        </a>
                        <a href="#" className="block px-4 py-3 rounded-xl hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 text-gray-700 hover:text-indigo-600 transition-all">
                          Blog
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <button 
                onClick={() => scrollToSection('contact')}
                className="px-4 py-2 text-gray-700 hover:text-indigo-600 transition-colors font-medium rounded-xl hover:bg-indigo-50"
              >
                Contact
              </button>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex items-center space-x-3">
              <a 
                href="/api/login"
                className="bg-rose-500 text-white px-6 py-2.5 rounded-xl font-bold hover:bg-rose-600 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Log In
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
