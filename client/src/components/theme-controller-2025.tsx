import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Sun, 
  Moon, 
  Palette, 
  Sparkles,
  Cpu,
  Eye,
  Zap
} from 'lucide-react';

const ThemeController2025 = () => {
  const [theme, setTheme] = useState<'light' | 'dark' | 'auto'>('auto');
  const [aiAdaptation, setAiAdaptation] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);

  const themes = [
    { id: 'light', icon: Sun, label: 'Solar Mode', color: 'from-yellow-400 to-orange-500' },
    { id: 'dark', icon: Moon, label: 'Lunar Mode', color: 'from-indigo-600 to-purple-700' },
    { id: 'auto', icon: Cpu, label: 'AI Adaptive', color: 'from-emerald-500 to-cyan-600' }
  ];

  const adaptiveFeatures = [
    { icon: Eye, label: 'Eye Strain Protection', active: true },
    { icon: Zap, label: 'Performance Mode', active: true },
    { icon: Palette, label: 'Color Harmony', active: aiAdaptation },
    { icon: Sparkles, label: 'Smart Contrast', active: aiAdaptation }
  ];

  useEffect(() => {
    // Simulate AI theme adaptation based on time of day
    if (theme === 'auto') {
      const hour = new Date().getHours();
      const isDayTime = hour >= 6 && hour < 18;
      
      // Apply adaptive theme to document
      if (isDayTime) {
        document.documentElement.style.setProperty('--adaptive-bg', 'hsl(28, 25%, 97%)');
        document.documentElement.style.setProperty('--adaptive-text', 'hsl(28, 8%, 45%)');
      } else {
        document.documentElement.style.setProperty('--adaptive-bg', 'hsl(222, 84%, 4.9%)');
        document.documentElement.style.setProperty('--adaptive-text', 'hsl(210, 40%, 98%)');
      }
    }
  }, [theme, aiAdaptation]);

  const handleThemeChange = (newTheme: 'light' | 'dark' | 'auto') => {
    setTheme(newTheme);
    
    // Add theme transition animation
    document.documentElement.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
    
    setTimeout(() => {
      document.documentElement.style.transition = '';
    }, 800);
  };

  return (
    <div className="fixed top-4 right-4 z-50">
      <div 
        className={`neomorphism-2025 trend-3d-card transition-all duration-500 ${
          isExpanded ? 'w-72' : 'w-16'
        }`}
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
      >
        {/* Header */}
        <div className="p-4">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center micro-bounce">
              <Palette className="w-4 h-4 text-white" />
            </div>
            {isExpanded && (
              <div className="overflow-hidden">
                <p className="text-sm font-semibold holographic whitespace-nowrap">Theme AI</p>
                <p className="text-xs text-gray-600 whitespace-nowrap">Adaptive Experience</p>
              </div>
            )}
          </div>
        </div>

        {isExpanded && (
          <>
            {/* Theme Selection */}
            <div className="px-4 pb-4">
              <div className="space-y-2">
                {themes.map((themeOption) => {
                  const Icon = themeOption.icon;
                  const isActive = theme === themeOption.id;
                  
                  return (
                    <button
                      key={themeOption.id}
                      onClick={() => handleThemeChange(themeOption.id as any)}
                      className={`w-full flex items-center space-x-3 p-3 rounded-xl transition-all duration-300 liquid-morphing ${
                        isActive 
                          ? `bg-gradient-to-r ${themeOption.color} text-white shadow-lg scale-105` 
                          : 'hover:bg-gray-100/50 text-gray-600'
                      }`}
                    >
                      <Icon className={`w-5 h-5 ${isActive ? 'micro-bounce' : ''}`} />
                      <span className="text-sm font-medium">{themeOption.label}</span>
                      {isActive && (
                        <div className="ml-auto achievement-badge" style={{ padding: '2px 6px', fontSize: '10px' }}>
                          <Sparkles className="w-2 h-2" />
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* AI Adaptation Toggle */}
            <div className="px-4 pb-4 border-t border-gray-200/20 pt-4">
              <button
                onClick={() => setAiAdaptation(!aiAdaptation)}
                className={`w-full flex items-center justify-between p-3 rounded-xl transition-all duration-300 ${
                  aiAdaptation 
                    ? 'bg-gradient-to-r from-emerald-500 to-cyan-600 text-white' 
                    : 'bg-gray-100/50 text-gray-600'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <Cpu className={`w-5 h-5 ${aiAdaptation ? 'micro-bounce' : ''}`} />
                  <span className="text-sm font-medium">AI Adaptation</span>
                </div>
                <div className={`w-12 h-6 rounded-full transition-all duration-300 ${
                  aiAdaptation ? 'bg-white/20' : 'bg-gray-300'
                }`}>
                  <div className={`w-5 h-5 rounded-full transition-all duration-300 mt-0.5 ${
                    aiAdaptation 
                      ? 'ml-6 bg-white' 
                      : 'ml-0.5 bg-white'
                  }`} />
                </div>
              </button>
            </div>

            {/* Adaptive Features Status */}
            <div className="px-4 pb-4">
              <p className="text-xs text-gray-500 mb-3 font-medium">ADAPTIVE FEATURES</p>
              <div className="space-y-2">
                {adaptiveFeatures.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div
                      key={index}
                      className={`flex items-center justify-between p-2 rounded-lg transition-all duration-300 ${
                        feature.active ? 'bg-emerald-50 text-emerald-700' : 'bg-gray-50 text-gray-400'
                      }`}
                    >
                      <div className="flex items-center space-x-2">
                        <Icon className="w-3 h-3" />
                        <span className="text-xs font-medium">{feature.label}</span>
                      </div>
                      <div className={`w-2 h-2 rounded-full ${
                        feature.active ? 'bg-emerald-500 animate-pulse' : 'bg-gray-300'
                      }`} />
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Performance Metrics */}
            <div className="px-4 pb-4 border-t border-gray-200/20 pt-4">
              <div className="achievement-badge w-full justify-center">
                <Zap className="w-3 h-3" />
                <span className="text-xs">98% Optimal Performance</span>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ThemeController2025;