import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Download, X, Smartphone, Zap } from 'lucide-react';
import { usePWA } from '@/hooks/use-pwa';

export default function InstallPrompt() {
  const { isInstallable, isInstalled, installApp } = usePWA();
  const [showPrompt, setShowPrompt] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    // Show prompt after 30 seconds if installable and not dismissed
    const timer = setTimeout(() => {
      if (isInstallable && !dismissed && !isInstalled) {
        setShowPrompt(true);
      }
    }, 30000);

    return () => clearTimeout(timer);
  }, [isInstallable, dismissed, isInstalled]);

  const handleInstall = async () => {
    const success = await installApp();
    if (success) {
      setShowPrompt(false);
    }
  };

  const handleDismiss = () => {
    setShowPrompt(false);
    setDismissed(true);
    localStorage.setItem('pwa-prompt-dismissed', 'true');
  };

  // Check if previously dismissed
  useEffect(() => {
    const wasDismissed = localStorage.getItem('pwa-prompt-dismissed');
    if (wasDismissed) {
      setDismissed(true);
    }
  }, []);

  if (!showPrompt || !isInstallable || isInstalled) {
    return null;
  }

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 md:left-auto md:right-8 md:max-w-sm">
      <Card className="bg-white shadow-2xl border-purple-200">
        <CardContent className="p-4">
          <div className="flex items-start space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
              <Zap className="w-5 h-5 text-white" />
            </div>
            
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-gray-900 text-sm">
                Install ReactorIX
              </h3>
              <p className="text-xs text-gray-600 mt-1">
                Get faster access and work offline
              </p>
              
              <div className="flex items-center space-x-2 mt-3">
                <Button
                  onClick={handleInstall}
                  size="sm"
                  className="bg-purple-600 hover:bg-purple-700 text-white px-3 py-1 text-xs"
                >
                  <Download className="w-3 h-3 mr-1" />
                  Install
                </Button>
                
                <Button
                  onClick={handleDismiss}
                  variant="ghost"
                  size="sm"
                  className="text-gray-500 px-2 py-1 text-xs"
                >
                  <X className="w-3 h-3" />
                </Button>
              </div>
            </div>
          </div>
          
          <div className="flex items-center text-xs text-gray-500 mt-3 pt-3 border-t border-gray-100">
            <Smartphone className="w-3 h-3 mr-1" />
            <span>Works offline • Push notifications • Fast loading</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}