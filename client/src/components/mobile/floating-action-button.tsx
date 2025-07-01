import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { 
  MessageCircle, 
  Phone, 
  Plus, 
  X,
  Zap,
  Shield,
  Users
} from 'lucide-react';
import { useHapticFeedback } from '@/hooks/use-touch';

interface FABAction {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  action: () => void;
  color: string;
}

export default function FloatingActionButton() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const { lightImpact, mediumImpact } = useHapticFeedback();
  const [lastScrollY, setLastScrollY] = useState(0);

  // Hide/show FAB based on scroll direction
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down - hide FAB
        setIsVisible(false);
        setIsExpanded(false);
      } else {
        // Scrolling up - show FAB
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const actions: FABAction[] = [
    {
      icon: MessageCircle,
      label: 'AI Assistant',
      action: () => {
        lightImpact();
        // Trigger AI chat
        const chatButton = document.querySelector('[data-ai-chat-trigger]') as HTMLElement;
        chatButton?.click();
      },
      color: 'bg-purple-500 hover:bg-purple-600'
    },
    {
      icon: Shield,
      label: 'Security Scan',
      action: () => {
        lightImpact();
        // Quick security action
        alert('Security scan would be initiated here');
      },
      color: 'bg-blue-500 hover:bg-blue-600'
    },
    {
      icon: Users,
      label: 'Contact Sales',
      action: () => {
        lightImpact();
        // Scroll to contact section
        const contactSection = document.getElementById('contact');
        contactSection?.scrollIntoView({ behavior: 'smooth' });
      },
      color: 'bg-green-500 hover:bg-green-600'
    }
  ];

  const toggleExpanded = () => {
    mediumImpact();
    setIsExpanded(!isExpanded);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40 md:hidden">
      {/* Action Buttons */}
      {isExpanded && (
        <div className="absolute bottom-16 right-0 space-y-3">
          {actions.map((action, index) => (
            <div
              key={index}
              className="flex items-center space-x-3 animate-in slide-in-from-bottom-2 fade-in duration-200"
              style={{ 
                animationDelay: `${index * 50}ms`,
                animationFillMode: 'forwards'
              }}
            >
              {/* Label */}
              <div className="bg-gray-900 text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg whitespace-nowrap">
                {action.label}
              </div>
              
              {/* Action Button */}
              <Button
                onClick={action.action}
                className={`w-12 h-12 rounded-full shadow-lg ${action.color} text-white border-2 border-white`}
                size="sm"
              >
                <action.icon className="w-5 h-5" />
              </Button>
            </div>
          ))}
        </div>
      )}

      {/* Main FAB */}
      <Button
        onClick={toggleExpanded}
        className={`w-14 h-14 rounded-full shadow-xl bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white border-2 border-white transition-all duration-300 ${
          isExpanded ? 'rotate-45' : 'rotate-0'
        }`}
        size="sm"
      >
        {isExpanded ? (
          <X className="w-6 h-6" />
        ) : (
          <Zap className="w-6 h-6" />
        )}
      </Button>
      
      {/* Ripple Effect */}
      <div className={`absolute inset-0 rounded-full bg-purple-400 opacity-30 animate-ping ${isExpanded ? 'animate-none' : ''}`} />
    </div>
  );
}