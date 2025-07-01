import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Home, 
  Shield, 
  Zap, 
  BarChart3, 
  MessageSquare,
  Settings,
  ChevronRight,
  Sparkles,
  Layers,
  Cpu
} from 'lucide-react';

const ExperimentalNav = () => {
  const [activeItem, setActiveItem] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  const navigationItems = [
    { icon: Home, label: "Overview", color: "from-purple-500 to-violet-600", progress: 100 },
    { icon: Shield, label: "Security", color: "from-emerald-500 to-teal-600", progress: 85 },
    { icon: Zap, label: "Automation", color: "from-orange-500 to-red-500", progress: 92 },
    { icon: BarChart3, label: "Analytics", color: "from-blue-500 to-cyan-600", progress: 78 },
    { icon: MessageSquare, label: "Support", color: "from-pink-500 to-rose-600", progress: 95 },
    { icon: Settings, label: "Settings", color: "from-gray-500 to-slate-600", progress: 67 }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveItem((prev) => (prev + 1) % navigationItems.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed left-4 top-1/2 transform -translate-y-1/2 z-50">
      {/* Main Navigation Container */}
      <div 
        className={`neomorphism-2025 trend-3d-card transition-all duration-500 ${
          isExpanded ? 'w-64' : 'w-16'
        }`}
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
      >
        {/* Header */}
        <div className="p-4 border-b border-gray-200/20">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center">
              <Layers className="w-4 h-4 text-white" />
            </div>
            {isExpanded && (
              <div className="overflow-hidden">
                <p className="text-sm font-semibold holographic whitespace-nowrap">ReactorIX</p>
                <p className="text-xs text-gray-600 whitespace-nowrap">Command Center</p>
              </div>
            )}
          </div>
        </div>

        {/* Navigation Items */}
        <div className="p-2 space-y-2">
          {navigationItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = activeItem === index;
            
            return (
              <div
                key={index}
                className={`relative liquid-morphing energy-flow micro-interaction rounded-xl transition-all duration-300 ${
                  isActive ? 'scale-105' : 'scale-100'
                }`}
              >
                <button 
                  className={`w-full flex items-center space-x-3 p-3 rounded-xl transition-all duration-300 ${
                    isActive 
                      ? 'bg-gradient-to-r ' + item.color + ' text-white shadow-lg' 
                      : 'hover:bg-gray-100/50 text-gray-600'
                  }`}
                  onClick={() => setActiveItem(index)}
                >
                  <div className={`w-6 h-6 flex items-center justify-center ${isActive ? 'micro-bounce' : ''}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  
                  {isExpanded && (
                    <div className="flex-1 text-left overflow-hidden">
                      <p className="text-sm font-medium whitespace-nowrap">{item.label}</p>
                      {isActive && (
                        <div className="mt-1">
                          <div className="flex items-center justify-between text-xs opacity-80">
                            <span>Progress</span>
                            <span>{item.progress}%</span>
                          </div>
                          <div className="gamification-progress mt-1" style={{ height: '3px' }}>
                            <div 
                              className="h-full bg-white/30 rounded-full transition-all duration-1000"
                              style={{ width: `${item.progress}%` }}
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                  
                  {isActive && (
                    <div className="achievement-badge" style={{ padding: '2px 6px', fontSize: '10px' }}>
                      <Sparkles className="w-2 h-2" />
                    </div>
                  )}
                </button>

                {/* Active indicator */}
                {isActive && (
                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-8 bg-white rounded-r-full"></div>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer */}
        {isExpanded && (
          <div className="p-4 border-t border-gray-200/20">
            <div className="achievement-badge w-full justify-center">
              <Cpu className="w-3 h-3" />
              <span className="text-xs">AI Powered</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExperimentalNav;