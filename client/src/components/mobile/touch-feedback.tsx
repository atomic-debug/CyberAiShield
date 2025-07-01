import { ReactNode, useRef, useEffect, useState } from 'react';
import { useHapticFeedback } from '@/hooks/use-touch';

interface TouchFeedbackProps {
  children: ReactNode;
  onTap?: () => void;
  haptic?: 'light' | 'medium' | 'heavy';
  ripple?: boolean;
  className?: string;
}

export default function TouchFeedback({ 
  children, 
  onTap, 
  haptic = 'light',
  ripple = true,
  className = '' 
}: TouchFeedbackProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [ripples, setRipples] = useState<Array<{ id: number; x: number; y: number }>>([]);
  const { lightImpact, mediumImpact, heavyImpact } = useHapticFeedback();

  const triggerHaptic = () => {
    switch (haptic) {
      case 'light':
        lightImpact();
        break;
      case 'medium':
        mediumImpact();
        break;
      case 'heavy':
        heavyImpact();
        break;
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!ripple || !elementRef.current) return;

    const rect = elementRef.current.getBoundingClientRect();
    const touch = e.touches[0];
    const x = touch.clientX - rect.left;
    const y = touch.clientY - rect.top;
    
    const newRipple = {
      id: Date.now(),
      x,
      y
    };
    
    setRipples(prev => [...prev, newRipple]);
    
    // Remove ripple after animation
    setTimeout(() => {
      setRipples(prev => prev.filter(r => r.id !== newRipple.id));
    }, 600);
  };

  const handleClick = () => {
    triggerHaptic();
    onTap?.();
  };

  return (
    <div
      ref={elementRef}
      className={`relative overflow-hidden cursor-pointer select-none ${className}`}
      onTouchStart={handleTouchStart}
      onClick={handleClick}
    >
      {children}
      
      {/* Ripple Effects */}
      {ripple && ripples.map(ripple => (
        <div
          key={ripple.id}
          className="absolute pointer-events-none"
          style={{
            left: ripple.x - 20,
            top: ripple.y - 20,
            width: 40,
            height: 40
          }}
        >
          <div className="w-full h-full bg-white opacity-30 rounded-full animate-ping" />
        </div>
      ))}
    </div>
  );
}

// Enhanced Button with Touch Feedback
interface TouchButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
}

export function TouchButton({ 
  children, 
  onClick, 
  className = '',
  variant = 'primary',
  size = 'md',
  disabled = false
}: TouchButtonProps) {
  const baseClasses = "inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variantClasses = {
    primary: "bg-purple-600 hover:bg-purple-700 text-white focus:ring-purple-500 active:bg-purple-800",
    secondary: "bg-gray-100 hover:bg-gray-200 text-gray-900 focus:ring-gray-500 active:bg-gray-300",
    ghost: "hover:bg-gray-100 text-gray-700 focus:ring-gray-500 active:bg-gray-200"
  };
  
  const sizeClasses = {
    sm: "px-3 py-2 text-sm rounded-lg min-h-[44px]",
    md: "px-4 py-3 text-base rounded-xl min-h-[48px]",
    lg: "px-6 py-4 text-lg rounded-2xl min-h-[52px]"
  };

  return (
    <TouchFeedback
      onTap={disabled ? undefined : onClick}
      haptic="medium"
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
    >
      {children}
    </TouchFeedback>
  );
}