import { useState, useEffect } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";
import { 
  User, 
  Building, 
  Target, 
  Shield, 
  Zap, 
  CheckCircle, 
  ArrowRight, 
  Sparkles,
  Clock,
  TrendingUp
} from "lucide-react";
import type { OnboardingProfile } from "@shared/schema";

interface OnboardingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onComplete: (sessionId: string) => void;
}

interface OnboardingFormData {
  userType: string;
  companySize: string;
  industry: string;
  primaryGoals: string[];
  experienceLevel: string;
}

interface PersonalizedContent {
  welcomeMessage: string;
  recommendedTutorials: string[];
  customTips: string[];
  relevantFeatures: string[];
  estimatedCompletionTime: string;
  personalizedGoals: string[];
}

const USER_TYPES = [
  { id: 'msp', label: 'MSP Owner/Manager', icon: Building },
  { id: 'it_admin', label: 'IT Administrator', icon: User },
  { id: 'security_manager', label: 'Security Manager', icon: Shield },
  { id: 'executive', label: 'Executive/Decision Maker', icon: TrendingUp }
];

const COMPANY_SIZES = [
  { id: 'startup', label: 'Startup (1-10 employees)' },
  { id: 'small', label: 'Small Business (11-50 employees)' },
  { id: 'medium', label: 'Medium Business (51-250 employees)' },
  { id: 'enterprise', label: 'Enterprise (250+ employees)' }
];

const INDUSTRIES = [
  { id: 'healthcare', label: 'Healthcare' },
  { id: 'finance', label: 'Finance & Banking' },
  { id: 'technology', label: 'Technology' },
  { id: 'manufacturing', label: 'Manufacturing' },
  { id: 'education', label: 'Education' },
  { id: 'retail', label: 'Retail' },
  { id: 'other', label: 'Other' }
];

const PRIMARY_GOALS = [
  { id: 'security', label: 'Enhanced Security', icon: Shield },
  { id: 'automation', label: 'IT Automation', icon: Zap },
  { id: 'compliance', label: 'Compliance Management', icon: CheckCircle },
  { id: 'efficiency', label: 'Operational Efficiency', icon: Target }
];

const EXPERIENCE_LEVELS = [
  { id: 'beginner', label: 'Beginner - New to cybersecurity/IT management' },
  { id: 'intermediate', label: 'Intermediate - Some experience' },
  { id: 'expert', label: 'Expert - Extensive experience' }
];

export default function OnboardingModal({ isOpen, onClose, onComplete }: OnboardingModalProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<OnboardingFormData>({
    userType: '',
    companySize: '',
    industry: '',
    primaryGoals: [],
    experienceLevel: ''
  });
  const [personalizedContent, setPersonalizedContent] = useState<PersonalizedContent | null>(null);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const totalSteps = 5;

  const createProfileMutation = useMutation({
    mutationFn: async (data: OnboardingFormData): Promise<{ profile: OnboardingProfile; sessionId: string }> => {
      const res = await apiRequest("POST", "/api/onboarding/profile", data);
      return res.json();
    },
    onSuccess: (data) => {
      if (data.profile.personalizedContent) {
        try {
          const content = JSON.parse(data.profile.personalizedContent);
          setPersonalizedContent(content);
        } catch (error) {
          console.error("Failed to parse personalized content:", error);
        }
      }
      setCurrentStep(totalSteps - 1); // Go to final step
      toast({
        title: "Profile Created!",
        description: "Your personalized onboarding experience is ready.",
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to create your profile. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleNext = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleGoalToggle = (goalId: string) => {
    setFormData(prev => ({
      ...prev,
      primaryGoals: prev.primaryGoals.includes(goalId)
        ? prev.primaryGoals.filter(id => id !== goalId)
        : [...prev.primaryGoals, goalId]
    }));
  };

  const handleSubmit = () => {
    if (isFormValid()) {
      createProfileMutation.mutate(formData);
    }
  };

  const handleComplete = () => {
    // Get the session ID from the mutation result
    const sessionId = createProfileMutation.data?.sessionId;
    if (sessionId) {
      onComplete(sessionId);
    }
    onClose();
  };

  const isFormValid = () => {
    return formData.userType && 
           formData.experienceLevel && 
           formData.primaryGoals.length > 0;
  };

  const isStepValid = (step: number) => {
    switch (step) {
      case 0: return formData.userType !== '';
      case 1: return formData.companySize !== '';
      case 2: return formData.industry !== '';
      case 3: return formData.primaryGoals.length > 0;
      case 4: return formData.experienceLevel !== '';
      default: return true;
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">What's your role?</h3>
              <p className="text-gray-600">Help us personalize your experience</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {USER_TYPES.map((type) => {
                const Icon = type.icon;
                return (
                  <Card
                    key={type.id}
                    className={`cursor-pointer transition-all hover:shadow-md ${
                      formData.userType === type.id 
                        ? 'ring-2 ring-purple-500 bg-purple-50' 
                        : 'hover:bg-gray-50'
                    }`}
                    onClick={() => setFormData(prev => ({ ...prev, userType: type.id }))}
                  >
                    <CardContent className="p-4 text-center">
                      <Icon className="w-8 h-8 mx-auto mb-2 text-purple-600" />
                      <p className="font-medium">{type.label}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        );

      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Company Size</h3>
              <p className="text-gray-600">This helps us recommend the right solutions</p>
            </div>
            
            <div className="space-y-3">
              {COMPANY_SIZES.map((size) => (
                <Card
                  key={size.id}
                  className={`cursor-pointer transition-all hover:shadow-md ${
                    formData.companySize === size.id 
                      ? 'ring-2 ring-purple-500 bg-purple-50' 
                      : 'hover:bg-gray-50'
                  }`}
                  onClick={() => setFormData(prev => ({ ...prev, companySize: size.id }))}
                >
                  <CardContent className="p-4">
                    <p className="font-medium">{size.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Industry</h3>
              <p className="text-gray-600">We'll customize security recommendations for your sector</p>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              {INDUSTRIES.map((industry) => (
                <Card
                  key={industry.id}
                  className={`cursor-pointer transition-all hover:shadow-md ${
                    formData.industry === industry.id 
                      ? 'ring-2 ring-purple-500 bg-purple-50' 
                      : 'hover:bg-gray-50'
                  }`}
                  onClick={() => setFormData(prev => ({ ...prev, industry: industry.id }))}
                >
                  <CardContent className="p-4 text-center">
                    <p className="font-medium">{industry.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Primary Goals</h3>
              <p className="text-gray-600">Select all that apply (you can choose multiple)</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {PRIMARY_GOALS.map((goal) => {
                const Icon = goal.icon;
                const isSelected = formData.primaryGoals.includes(goal.id);
                return (
                  <Card
                    key={goal.id}
                    className={`cursor-pointer transition-all hover:shadow-md ${
                      isSelected 
                        ? 'ring-2 ring-purple-500 bg-purple-50' 
                        : 'hover:bg-gray-50'
                    }`}
                    onClick={() => handleGoalToggle(goal.id)}
                  >
                    <CardContent className="p-4 text-center">
                      <Icon className={`w-8 h-8 mx-auto mb-2 ${isSelected ? 'text-purple-600' : 'text-gray-400'}`} />
                      <p className="font-medium">{goal.label}</p>
                      {isSelected && (
                        <CheckCircle className="w-5 h-5 text-purple-600 mx-auto mt-2" />
                      )}
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Experience Level</h3>
              <p className="text-gray-600">This helps us adjust the complexity of recommendations</p>
            </div>
            
            <div className="space-y-3">
              {EXPERIENCE_LEVELS.map((level) => (
                <Card
                  key={level.id}
                  className={`cursor-pointer transition-all hover:shadow-md ${
                    formData.experienceLevel === level.id 
                      ? 'ring-2 ring-purple-500 bg-purple-50' 
                      : 'hover:bg-gray-50'
                  }`}
                  onClick={() => setFormData(prev => ({ ...prev, experienceLevel: level.id }))}
                >
                  <CardContent className="p-4">
                    <p className="font-medium">{level.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );

      default:
        return (
          <div className="space-y-6 text-center">
            <Sparkles className="w-16 h-16 text-purple-600 mx-auto animate-pulse" />
            
            {personalizedContent ? (
              <>
                <h3 className="text-2xl font-bold text-gray-900">
                  Welcome to Your Personalized Experience!
                </h3>
                
                <div className="bg-purple-50 rounded-lg p-6 text-left">
                  <p className="text-lg text-gray-700 mb-4">{personalizedContent.welcomeMessage}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        Estimated Time
                      </h4>
                      <p className="text-gray-600">{personalizedContent.estimatedCompletionTime}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                        <Target className="w-4 h-4 mr-2" />
                        Your Goals
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {personalizedContent.personalizedGoals.map((goal, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {goal}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Recommended Tutorials</h4>
                    <div className="flex flex-wrap gap-2">
                      {personalizedContent.recommendedTutorials.map((tutorial, index) => (
                        <Badge key={index} className="bg-purple-100 text-purple-800">
                          {tutorial}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Custom Tips</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {personalizedContent.customTips.map((tip, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <Button
                  onClick={handleComplete}
                  className="clickup-button-primary"
                  size="lg"
                >
                  Start Your Journey
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </>
            ) : (
              <>
                <h3 className="text-2xl font-bold text-gray-900">
                  Creating Your Personalized Experience...
                </h3>
                <p className="text-gray-600">
                  Our AI is customizing the perfect onboarding journey for you.
                </p>
                {createProfileMutation.isPending && (
                  <div className="animate-spin w-8 h-8 border-4 border-purple-200 border-t-purple-600 rounded-full mx-auto"></div>
                )}
              </>
            )}
          </div>
        );
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-center">
            <div className="flex items-center justify-center space-x-2">
              <Sparkles className="w-6 h-6 text-purple-600" />
              <span>Personalized Onboarding</span>
            </div>
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Progress bar */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-600">
              <span>Step {currentStep + 1} of {totalSteps}</span>
              <span>{Math.round(((currentStep + 1) / totalSteps) * 100)}% Complete</span>
            </div>
            <Progress value={((currentStep + 1) / totalSteps) * 100} className="h-2" />
          </div>
          
          {/* Step content */}
          {renderStep()}
          
          {/* Navigation buttons */}
          {currentStep < totalSteps - 1 && (
            <div className="flex justify-between pt-4">
              <Button
                variant="outline"
                onClick={handleBack}
                disabled={currentStep === 0}
              >
                Back
              </Button>
              
              {currentStep === totalSteps - 2 ? (
                <Button
                  onClick={handleSubmit}
                  disabled={!isFormValid() || createProfileMutation.isPending}
                  className="clickup-button-primary"
                >
                  {createProfileMutation.isPending ? (
                    <>
                      <div className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2"></div>
                      Creating...
                    </>
                  ) : (
                    <>
                      Create Profile
                      <Sparkles className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>
              ) : (
                <Button
                  onClick={handleNext}
                  disabled={!isStepValid(currentStep)}
                  className="clickup-button-primary"
                >
                  Next
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              )}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}