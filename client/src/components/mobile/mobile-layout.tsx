import { ReactNode } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import InstallPrompt from './install-prompt';
import FloatingActionButton from './floating-action-button';
import { usePWA } from '@/hooks/use-pwa';

interface MobileLayoutProps {
  children: ReactNode;
}

export default function MobileLayout({ children }: MobileLayoutProps) {
  const isMobile = useIsMobile();
  const { isInstalled } = usePWA();

  return (
    <div className="min-h-screen bg-white">
      {/* Mobile-specific viewport adjustments */}
      <div className={`${isMobile ? 'mobile-layout' : ''}`}>
        {children}
        
        {/* Mobile-specific components */}
        {isMobile && (
          <>
            {/* PWA Install Prompt */}
            <InstallPrompt />
            
            {/* Floating Action Button */}
            <FloatingActionButton />
            
            {/* Mobile safe area adjustments */}
            <div className="h-safe-bottom" />
          </>
        )}
      </div>
    </div>
  );
}