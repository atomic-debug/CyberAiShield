import { useScrollDirection, useScrollPosition } from '@/hooks/use-scroll';
import { cn } from '@/lib/utils';

export default function Header() {
  const scrollDirection = useScrollDirection();
  const scrollPosition = useScrollPosition();
  
  const isHidden = scrollDirection === 'down' && scrollPosition > 100;

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-200 ease-in-out",
        isHidden && "header-hidden"
      )}
    >
      <div className="mx-4 mt-4">
        <nav className="glassmorphism bg-gradient-to-r from-indigo-50/80 via-purple-50/80 to-pink-50/80 backdrop-blur-md rounded-2xl px-6 py-4 mx-auto max-w-7xl border border-white/20 shadow-2xl shadow-black/20">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 aurora-gradient rounded-lg flex items-center justify-center aurora-glow">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <div>
                <div className="text-xl font-bold text-gray-900">RactorIX</div>
                <div className="text-xs text-gray-600">Atomic Solution</div>
              </div>
            </div>
            
            {/* Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('services')}
                className="text-gray-700 hover:text-indigo-600 transition-colors font-medium"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-indigo-600 transition-colors font-medium"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 hover:text-indigo-600 transition-colors font-medium"
              >
                Contact
              </button>
              <a href="#" className="text-gray-700 hover:text-indigo-600 transition-colors font-medium">Blog</a>
              <a href="#" className="text-indigo-600 hover:text-indigo-700 transition-colors font-medium">Sign In</a>
            </div>
            
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
