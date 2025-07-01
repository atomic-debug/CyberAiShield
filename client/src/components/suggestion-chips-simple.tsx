import { useState, useEffect } from 'react';

interface SimpleSuggestion {
  id: string;
  text: string;
  icon: string;
  action: () => void;
}

interface SimpleSuggestionChipsProps {
  context?: 'hero' | 'about' | 'contact' | 'general';
}

export default function SuggestionChips({ context = 'general' }: SimpleSuggestionChipsProps) {
  const getSuggestionsForContext = () => {
    const baseSuggestions = {
      hero: [
        {
          id: 'security-assessment',
          text: 'Get Security Assessment',
          icon: '🛡️',
          action: () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
        },
        {
          id: 'learn-more',
          text: 'Learn About ReactorIX',
          icon: '📖',
          action: () => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
        },
        {
          id: 'threat-demo',
          text: 'View Threat Protection',
          icon: '⚡',
          action: () => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
        }
      ],
      about: [
        {
          id: 'consultation',
          text: 'Schedule Consultation',
          icon: '📞',
          action: () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
        },
        {
          id: 'security-guide',
          text: 'Security Implementation',
          icon: '🔧',
          action: () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
        },
        {
          id: 'automation',
          text: 'Automation Solutions',
          icon: '🤖',
          action: () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
        }
      ],
      contact: [
        {
          id: 'emergency',
          text: 'Emergency Response',
          icon: '🚨',
          action: () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
        },
        {
          id: 'back-to-top',
          text: 'Back to Top',
          icon: '⬆️',
          action: () => window.scrollTo({ top: 0, behavior: 'smooth' })
        },
        {
          id: 'assessment',
          text: 'Free Assessment',
          icon: '💎',
          action: () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
        }
      ]
    };

    return baseSuggestions[context] || baseSuggestions.hero;
  };

  const [suggestions] = useState<SimpleSuggestion[]>(getSuggestionsForContext());

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className={`fixed bottom-20 right-6 z-40 transition-all duration-500 transform ${
      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
    }`}>
      <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-4 max-w-sm">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-semibold text-gray-800">AI Suggestions</h3>
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
        </div>
        
        <div className="space-y-2">
          {suggestions.map((suggestion, index) => (
            <button
              key={suggestion.id}
              onClick={suggestion.action}
              className="w-full text-left p-3 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-md transform bg-purple-50 hover:bg-purple-100 border border-purple-200"
            >
              <div className="flex items-center space-x-3">
                <span className="text-lg">{suggestion.icon}</span>
                <div className="flex-1">
                  <p className="text-sm font-medium text-purple-800">
                    {suggestion.text}
                  </p>
                </div>
                <div className="w-1 h-6 rounded-full bg-purple-400" />
              </div>
            </button>
          ))}
        </div>
        
        <div className="mt-3 pt-2 border-t border-gray-100">
          <p className="text-xs text-gray-400 text-center">
            Powered by ReactorIX AI
          </p>
        </div>
      </div>
    </div>
  );
}