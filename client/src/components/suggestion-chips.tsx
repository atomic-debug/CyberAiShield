import { useState, useEffect, useCallback } from 'react';
import { useDynamicBackground } from '@/hooks/use-dynamic-background';

interface Suggestion {
  id: string;
  text: string;
  category: 'security' | 'automation' | 'consultation' | 'learning';
  priority: number;
  icon: string;
  action: () => void;
}

interface SuggestionChipsProps {
  context?: 'hero' | 'about' | 'contact' | 'general';
  userBehavior?: {
    timeOnPage: number;
    scrollPosition: number;
    hasInteracted: boolean;
  };
}

export default function SuggestionChips({ context = 'general', userBehavior }: SuggestionChipsProps) {
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const { timeOfDay } = useDynamicBackground();

  // Generate contextual suggestions based on AI analysis
  const generateSuggestions = useCallback(() => {
    const baseSuggestions: Suggestion[] = [
      {
        id: 'security-assessment',
        text: 'Get Free Security Assessment',
        category: 'security',
        priority: 10,
        icon: '🛡️',
        action: () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
      },
      {
        id: 'threat-demo',
        text: 'See Threat Protection Demo',
        category: 'security',
        priority: 8,
        icon: '⚡',
        action: () => window.open('#demo', '_self')
      },
      {
        id: 'automation-guide',
        text: 'Automation Implementation Guide',
        category: 'automation',
        priority: 7,
        icon: '🤖',
        action: () => window.open('#automation', '_self')
      },
      {
        id: 'consultation',
        text: 'Schedule Expert Consultation',
        category: 'consultation',
        priority: 9,
        icon: '📞',
        action: () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
      },
      {
        id: 'learning-center',
        text: 'Cybersecurity Learning Center',
        category: 'learning',
        priority: 6,
        icon: '📚',
        action: () => window.open('#learning', '_self')
      }
    ];

    // Context-aware suggestions
    let contextualSuggestions = [...baseSuggestions];

    if (context === 'hero') {
      contextualSuggestions = contextualSuggestions.filter(s => 
        s.category === 'security' || s.category === 'consultation'
      );
    } else if (context === 'about') {
      contextualSuggestions = contextualSuggestions.filter(s => 
        s.category === 'learning' || s.category === 'automation'
      );
    } else if (context === 'contact') {
      contextualSuggestions = contextualSuggestions.filter(s => 
        s.category === 'consultation' || s.category === 'security'
      );
    }

    // Time-based prioritization
    if (timeOfDay === 'morning') {
      contextualSuggestions.forEach(s => {
        if (s.category === 'learning') s.priority += 2;
      });
    } else if (timeOfDay === 'afternoon') {
      contextualSuggestions.forEach(s => {
        if (s.category === 'consultation') s.priority += 2;
      });
    } else if (timeOfDay === 'evening' || timeOfDay === 'night') {
      contextualSuggestions.forEach(s => {
        if (s.category === 'security') s.priority += 2;
      });
    }

    // Behavior-based adjustments
    if (userBehavior) {
      if (userBehavior.timeOnPage > 30000) { // 30+ seconds
        contextualSuggestions.forEach(s => {
          if (s.category === 'consultation') s.priority += 3;
        });
      }
      
      if (userBehavior.scrollPosition > 0.5) { // Scrolled past 50%
        contextualSuggestions.forEach(s => {
          if (s.category === 'security') s.priority += 2;
        });
      }
      
      if (userBehavior.hasInteracted) {
        contextualSuggestions.forEach(s => {
          if (s.category === 'automation') s.priority += 1;
        });
      }
    }

    // Sort by priority and take top 3
    const topSuggestions = contextualSuggestions
      .sort((a, b) => b.priority - a.priority)
      .slice(0, 3);

    setSuggestions(topSuggestions);
  }, [context, timeOfDay, userBehavior]);

  // Update suggestions when context changes
  useEffect(() => {
    generateSuggestions();
  }, [generateSuggestions]);

  // Show suggestions after a brief delay
  useEffect(() => {
    if (suggestions.length > 0) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [suggestions]);

  if (suggestions.length === 0) return null;

  return (
    <div className={`fixed bottom-6 right-6 z-50 transition-all duration-500 transform ${
      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
    }`}>
      <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 p-4 max-w-sm">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-semibold text-gray-800">AI Suggestions</h3>
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
        </div>
        
        <div className="space-y-2">
          {suggestions.map((suggestion, index) => (
            <button
              key={suggestion.id}
              onClick={suggestion.action}
              className={`w-full text-left p-3 rounded-xl transition-all duration-300 hover:scale-102 hover:shadow-md transform ${
                suggestion.category === 'security' ? 'bg-purple-50 hover:bg-purple-100 border border-purple-200' :
                suggestion.category === 'automation' ? 'bg-blue-50 hover:bg-blue-100 border border-blue-200' :
                suggestion.category === 'consultation' ? 'bg-green-50 hover:bg-green-100 border border-green-200' :
                'bg-orange-50 hover:bg-orange-100 border border-orange-200'
              }`}
              style={{ 
                animationDelay: `${index * 150}ms`,
                animation: isVisible ? 'slideInRight 0.4s ease-out forwards' : 'none'
              }}
            >
              <div className="flex items-center space-x-3">
                <span className="text-xl">{suggestion.icon}</span>
                <div className="flex-1">
                  <p className={`text-sm font-medium ${
                    suggestion.category === 'security' ? 'text-purple-800' :
                    suggestion.category === 'automation' ? 'text-blue-800' :
                    suggestion.category === 'consultation' ? 'text-green-800' :
                    'text-orange-800'
                  }`}>
                    {suggestion.text}
                  </p>
                  <p className="text-xs text-gray-500 capitalize">
                    {suggestion.category} • Priority {suggestion.priority}
                  </p>
                </div>
                <div className={`w-1 h-8 rounded-full ${
                  suggestion.category === 'security' ? 'bg-purple-400' :
                  suggestion.category === 'automation' ? 'bg-blue-400' :
                  suggestion.category === 'consultation' ? 'bg-green-400' :
                  'bg-orange-400'
                }`} />
              </div>
            </button>
          ))}
        </div>
        
        <div className="mt-3 pt-2 border-t border-gray-100">
          <p className="text-xs text-gray-400 text-center">
            Powered by ReactorIX AI • {timeOfDay} mode
          </p>
        </div>
      </div>
    </div>
  );
}

// CSS animations are now in index.css