import { useState } from "react";
import OnboardingModal from "@/components/onboarding-modal";
import DynamicTutorial from "@/components/dynamic-tutorial";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, GraduationCap, Sparkles, Target, Clock } from "lucide-react";

export default function OnboardingPage() {
  const [currentState, setCurrentState] = useState<'welcome' | 'profile' | 'tutorial' | 'completed'>('welcome');
  const [onboardingSessionId, setOnboardingSessionId] = useState<string | null>(null);

  const handleStartOnboarding = () => {
    setCurrentState('profile');
  };

  const handleProfileComplete = (sessionId: string) => {
    setOnboardingSessionId(sessionId);
    setCurrentState('tutorial');
  };

  const handleTutorialComplete = () => {
    setCurrentState('completed');
  };

  const handleBackHome = () => {
    window.location.href = '/';
  };

  const renderContent = () => {
    switch (currentState) {
      case 'welcome':
        return (
          <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="max-w-2xl mx-auto p-6 text-center">
              <Card className="border-purple-200 bg-white shadow-xl">
                <CardHeader className="space-y-4">
                  <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto">
                    <GraduationCap className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="text-3xl font-bold text-gray-900">
                    Welcome to ReactorIX Onboarding
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Get the most out of ReactorIX with a personalized onboarding experience. 
                    Our AI will create a custom tutorial path based on your role, goals, and experience level.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
                    <div className="text-center p-4">
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                        <Sparkles className="w-6 h-6 text-purple-600" />
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">AI-Powered</h3>
                      <p className="text-sm text-gray-600">Personalized content based on your profile</p>
                    </div>
                    
                    <div className="text-center p-4">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                        <Target className="w-6 h-6 text-green-600" />
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">Goal-Focused</h3>
                      <p className="text-sm text-gray-600">Learn what matters most to your role</p>
                    </div>
                    
                    <div className="text-center p-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                        <Clock className="w-6 h-6 text-blue-600" />
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">Quick Setup</h3>
                      <p className="text-sm text-gray-600">Get started in just 15-20 minutes</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-center space-x-4">
                    <Button
                      variant="outline"
                      onClick={handleBackHome}
                      className="flex items-center space-x-2"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>Back to Home</span>
                    </Button>
                    <Button
                      onClick={handleStartOnboarding}
                      className="clickup-button-primary"
                      size="lg"
                    >
                      <GraduationCap className="w-5 h-5 mr-2" />
                      Start Personalized Tutorial
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        );

      case 'profile':
        return (
          <div className="min-h-screen bg-gray-50">
            <OnboardingModal
              isOpen={true}
              onClose={() => setCurrentState('welcome')}
              onComplete={handleProfileComplete}
            />
          </div>
        );

      case 'tutorial':
        return (
          <div className="min-h-screen bg-gray-50 py-6">
            {onboardingSessionId && (
              <DynamicTutorial
                sessionId={onboardingSessionId}
                onComplete={handleTutorialComplete}
              />
            )}
          </div>
        );

      case 'completed':
        return (
          <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="max-w-2xl mx-auto p-6 text-center">
              <Card className="border-green-200 bg-white shadow-xl">
                <CardContent className="p-8 space-y-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto">
                    <GraduationCap className="w-10 h-10 text-white" />
                  </div>
                  
                  <div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">
                      Congratulations! 🎉
                    </h1>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      You've successfully completed your personalized ReactorIX onboarding. 
                      You're now ready to leverage the full power of our cybersecurity and automation platform.
                    </p>
                  </div>
                  
                  <div className="bg-green-50 rounded-lg p-6">
                    <h3 className="font-semibold text-green-900 mb-3">What's Next?</h3>
                    <ul className="text-left text-green-800 space-y-2">
                      <li className="flex items-start space-x-2">
                        <span className="text-green-600 mt-1">•</span>
                        <span>Access your personalized dashboard</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-green-600 mt-1">•</span>
                        <span>Start implementing security and automation workflows</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-green-600 mt-1">•</span>
                        <span>Explore advanced features based on your goals</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="flex justify-center space-x-4">
                    <Button
                      variant="outline"
                      onClick={handleBackHome}
                      className="flex items-center space-x-2"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>Back to Home</span>
                    </Button>
                    <Button
                      onClick={() => window.location.href = '/dashboard'}
                      className="clickup-button-primary"
                      size="lg"
                    >
                      Go to Dashboard
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return renderContent();
}