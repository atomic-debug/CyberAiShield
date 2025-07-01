import { useState, useEffect } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";
import { 
  CheckCircle, 
  Circle, 
  ArrowRight, 
  ArrowLeft,
  BookOpen,
  Target,
  Clock,
  Lightbulb,
  Trophy,
  Sparkles
} from "lucide-react";
import type { OnboardingProfile, TutorialStep } from "@shared/schema";

interface DynamicTutorialProps {
  sessionId: string;
  onComplete: () => void;
}

interface TutorialStepWithStatus extends TutorialStep {
  isCompleted: boolean;
  isCurrent: boolean;
}

export default function DynamicTutorial({ sessionId, onComplete }: DynamicTutorialProps) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<string[]>([]);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  // Get onboarding profile
  const { data: profileData } = useQuery({
    queryKey: ["/api/onboarding/profile", sessionId],
    enabled: !!sessionId,
  });

  const profile = (profileData as any)?.profile as OnboardingProfile;

  // Get tutorial steps based on user type
  const { data: stepsData } = useQuery({
    queryKey: ["/api/tutorial/steps", profile?.userType],
    enabled: !!profile?.userType,
  });

  const tutorialSteps = (stepsData as any)?.steps as TutorialStep[] || [];

  // Update progress mutation
  const updateProgressMutation = useMutation({
    mutationFn: async ({ currentStep, completedSteps, isCompleted }: { 
      currentStep: number; 
      completedSteps: string[]; 
      isCompleted?: boolean;
    }) => {
      const res = await apiRequest("PATCH", `/api/onboarding/progress/${sessionId}`, {
        currentStep,
        completedSteps,
        isCompleted
      });
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/onboarding/profile", sessionId] });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to update progress. Please try again.",
        variant: "destructive",
      });
    },
  });

  // Initialize state from profile
  useEffect(() => {
    if (profile) {
      setCurrentStepIndex(profile.currentStep || 0);
      setCompletedSteps(profile.completedSteps || []);
    }
  }, [profile]);

  // Get personalized content
  const personalizedContent = profile?.personalizedContent 
    ? JSON.parse(profile.personalizedContent) 
    : null;

  // Prepare steps with status
  const stepsWithStatus: TutorialStepWithStatus[] = tutorialSteps.map((step, index) => ({
    ...step,
    isCompleted: completedSteps.includes(step.stepKey),
    isCurrent: index === currentStepIndex
  }));

  const currentStep = stepsWithStatus[currentStepIndex];
  const isLastStep = currentStepIndex === stepsWithStatus.length - 1;
  const progress = stepsWithStatus.length > 0 
    ? ((completedSteps.length / stepsWithStatus.length) * 100) 
    : 0;

  const handleStepComplete = () => {
    if (!currentStep) return;

    const newCompletedSteps = [...completedSteps];
    if (!newCompletedSteps.includes(currentStep.stepKey)) {
      newCompletedSteps.push(currentStep.stepKey);
    }

    const nextStepIndex = Math.min(currentStepIndex + 1, stepsWithStatus.length - 1);
    const isCompleted = newCompletedSteps.length === stepsWithStatus.length;

    setCompletedSteps(newCompletedSteps);
    setCurrentStepIndex(nextStepIndex);

    updateProgressMutation.mutate({
      currentStep: nextStepIndex,
      completedSteps: newCompletedSteps,
      isCompleted
    });

    toast({
      title: "Step Completed!",
      description: `Great job completing: ${currentStep.title}`,
    });

    if (isCompleted) {
      setTimeout(() => {
        onComplete();
      }, 1500);
    }
  };

  const handlePreviousStep = () => {
    if (currentStepIndex > 0) {
      const prevStepIndex = currentStepIndex - 1;
      setCurrentStepIndex(prevStepIndex);
      
      updateProgressMutation.mutate({
        currentStep: prevStepIndex,
        completedSteps
      });
    }
  };

  const handleNextStep = () => {
    if (currentStepIndex < stepsWithStatus.length - 1) {
      const nextStepIndex = currentStepIndex + 1;
      setCurrentStepIndex(nextStepIndex);
      
      updateProgressMutation.mutate({
        currentStep: nextStepIndex,
        completedSteps
      });
    }
  };

  const handleStepClick = (stepIndex: number) => {
    setCurrentStepIndex(stepIndex);
    updateProgressMutation.mutate({
      currentStep: stepIndex,
      completedSteps
    });
  };

  if (!profile || !tutorialSteps.length) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="animate-spin w-8 h-8 border-4 border-purple-200 border-t-purple-600 rounded-full"></div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      {/* Header with personalized welcome */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center space-x-2">
          <BookOpen className="w-8 h-8 text-purple-600" />
          <h1 className="text-3xl font-bold text-gray-900">Your Personalized Tutorial</h1>
        </div>
        
        {personalizedContent && (
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {personalizedContent.welcomeMessage}
          </p>
        )}
        
        <div className="flex items-center justify-center space-x-6 text-sm text-gray-600">
          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4" />
            <span>{personalizedContent?.estimatedCompletionTime || "15 minutes"}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Target className="w-4 h-4" />
            <span>{completedSteps.length} of {stepsWithStatus.length} completed</span>
          </div>
        </div>
      </div>

      {/* Progress bar */}
      <Card>
        <CardContent className="p-6">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-gray-900">Overall Progress</h3>
              <Badge className="bg-purple-100 text-purple-800">
                {Math.round(progress)}% Complete
              </Badge>
            </div>
            <Progress value={progress} className="h-3" />
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Steps sidebar */}
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Tutorial Steps</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="space-y-0">
                {stepsWithStatus.map((step, index) => (
                  <div
                    key={step.id}
                    className={`p-4 border-b border-gray-100 cursor-pointer transition-colors ${
                      step.isCurrent
                        ? 'bg-purple-50 border-l-4 border-l-purple-500'
                        : step.isCompleted
                        ? 'bg-green-50'
                        : 'hover:bg-gray-50'
                    }`}
                    onClick={() => handleStepClick(index)}
                  >
                    <div className="flex items-center space-x-3">
                      {step.isCompleted ? (
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      ) : step.isCurrent ? (
                        <div className="w-5 h-5 rounded-full bg-purple-500 flex-shrink-0"></div>
                      ) : (
                        <Circle className="w-5 h-5 text-gray-400 flex-shrink-0" />
                      )}
                      <div className="min-w-0 flex-1">
                        <p className={`text-sm font-medium truncate ${
                          step.isCurrent ? 'text-purple-900' : 
                          step.isCompleted ? 'text-green-900' : 'text-gray-700'
                        }`}>
                          {step.title}
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          Step {index + 1}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Current step content */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Badge variant="outline">Step {currentStepIndex + 1}</Badge>
                  <CardTitle className="text-xl">{currentStep?.title}</CardTitle>
                </div>
                {currentStep?.isCompleted && (
                  <CheckCircle className="w-6 h-6 text-green-500" />
                )}
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="prose max-w-none">
                <p className="text-gray-700 leading-relaxed">
                  {currentStep?.description}
                </p>
              </div>

              {/* Personalized tips for current step */}
              {personalizedContent?.customTips && (
                <div className="bg-yellow-50 rounded-lg p-4">
                  <div className="flex items-start space-x-2">
                    <Lightbulb className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-yellow-900 mb-2">Personalized Tip</h4>
                      <p className="text-sm text-yellow-800">
                        {personalizedContent.customTips[currentStepIndex % personalizedContent.customTips.length]}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Interactive elements would go here - placeholder for now */}
              <div className="bg-gray-50 rounded-lg p-6 text-center">
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                    <Target className="w-8 h-8 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Interactive Content</h4>
                    <p className="text-gray-600 text-sm">
                      This is where interactive tutorials, demos, or hands-on exercises would be displayed
                      based on the specific step and user profile.
                    </p>
                  </div>
                </div>
              </div>

              {/* Navigation buttons */}
              <div className="flex justify-between pt-4">
                <Button
                  variant="outline"
                  onClick={handlePreviousStep}
                  disabled={currentStepIndex === 0}
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Previous
                </Button>

                <div className="space-x-2">
                  {!currentStep?.isCompleted && (
                    <Button
                      onClick={handleStepComplete}
                      className="clickup-button-primary"
                    >
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Mark Complete
                    </Button>
                  )}
                  
                  {!isLastStep && (
                    <Button
                      onClick={handleNextStep}
                      variant={currentStep?.isCompleted ? "default" : "outline"}
                    >
                      Next Step
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  )}
                  
                  {isLastStep && completedSteps.length === stepsWithStatus.length && (
                    <Button
                      onClick={onComplete}
                      className="clickup-button-primary"
                    >
                      <Trophy className="w-4 h-4 mr-2" />
                      Finish Tutorial
                    </Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Completion celebration */}
      {completedSteps.length === stepsWithStatus.length && (
        <Card className="bg-gradient-to-r from-purple-50 to-indigo-50 border-purple-200">
          <CardContent className="p-6 text-center">
            <div className="space-y-4">
              <div className="flex items-center justify-center space-x-2">
                <Trophy className="w-8 h-8 text-purple-600" />
                <Sparkles className="w-6 h-6 text-purple-400 animate-pulse" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-purple-900 mb-2">
                  Congratulations! 🎉
                </h3>
                <p className="text-purple-700">
                  You've completed your personalized onboarding tutorial. 
                  You're now ready to make the most of ReactorIX's powerful features!
                </p>
              </div>
              <Button
                onClick={onComplete}
                className="clickup-button-primary"
                size="lg"
              >
                Start Using ReactorIX
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}