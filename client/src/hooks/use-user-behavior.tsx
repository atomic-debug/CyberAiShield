import { useState, useEffect, useCallback } from 'react';

export interface UserBehavior {
  timeOnPage: number;
  scrollPosition: number;
  hasInteracted: boolean;
  mouseMovements: number;
  clickCount: number;
  currentSection: string;
  visitDuration: number;
  lastAction: string;
}

export function useUserBehavior() {
  const [behavior, setBehavior] = useState<UserBehavior>({
    timeOnPage: 0,
    scrollPosition: 0,
    hasInteracted: false,
    mouseMovements: 0,
    clickCount: 0,
    currentSection: 'hero',
    visitDuration: 0,
    lastAction: 'page_load'
  });

  const [startTime] = useState(Date.now());

  // Track time on page
  useEffect(() => {
    const interval = setInterval(() => {
      setBehavior(prev => ({
        ...prev,
        timeOnPage: Date.now() - startTime,
        visitDuration: Math.floor((Date.now() - startTime) / 1000)
      }));
    }, 1000);

    return () => clearInterval(interval);
  }, [startTime]);

  // Track scroll position and current section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPercent = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
      
      // Determine current section
      let currentSection = 'hero';
      const sections = ['hero', 'about', 'contact'];
      
      sections.forEach(sectionId => {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            currentSection = sectionId;
          }
        }
      });

      setBehavior(prev => ({
        ...prev,
        scrollPosition: Math.max(0, Math.min(1, scrollPercent)),
        currentSection,
        hasInteracted: true,
        lastAction: 'scroll'
      }));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track mouse movements
  useEffect(() => {
    let moveCount = 0;
    const handleMouseMove = () => {
      moveCount++;
      if (moveCount % 50 === 0) { // Update every 50 movements to avoid excessive updates
        setBehavior(prev => ({
          ...prev,
          mouseMovements: prev.mouseMovements + 50,
          hasInteracted: true,
          lastAction: 'mouse_move'
        }));
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Track clicks
  useEffect(() => {
    const handleClick = () => {
      setBehavior(prev => ({
        ...prev,
        clickCount: prev.clickCount + 1,
        hasInteracted: true,
        lastAction: 'click'
      }));
    };

    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, []);

  // Get engagement score (0-100)
  const getEngagementScore = useCallback(() => {
    const timeScore = Math.min(behavior.timeOnPage / 60000, 1) * 30; // 30 points for 1+ minutes
    const scrollScore = behavior.scrollPosition * 25; // 25 points for full scroll
    const interactionScore = Math.min(behavior.clickCount * 5, 20); // 20 points max for clicks
    const movementScore = Math.min(behavior.mouseMovements / 100, 25); // 25 points for movements
    
    return Math.round(timeScore + scrollScore + interactionScore + movementScore);
  }, [behavior]);

  // Get user intent based on behavior patterns
  const getUserIntent = useCallback(() => {
    const engagementScore = getEngagementScore();
    
    if (engagementScore > 70) return 'high_intent';
    if (engagementScore > 40) return 'medium_intent';
    if (behavior.timeOnPage < 10000) return 'browsing';
    if (behavior.scrollPosition > 0.8) return 'researching';
    return 'low_intent';
  }, [behavior, getEngagementScore]);

  // Get contextual suggestions based on current behavior
  const getContextualHints = useCallback(() => {
    const hints = [];
    
    if (behavior.timeOnPage > 30000 && behavior.clickCount === 0) {
      hints.push('user_needs_guidance');
    }
    
    if (behavior.scrollPosition > 0.7 && behavior.currentSection === 'contact') {
      hints.push('ready_to_convert');
    }
    
    if (behavior.mouseMovements > 200 && behavior.clickCount < 3) {
      hints.push('exploring_options');
    }
    
    if (behavior.visitDuration > 120 && behavior.scrollPosition < 0.3) {
      hints.push('reading_thoroughly');
    }
    
    return hints;
  }, [behavior]);

  return {
    behavior,
    engagementScore: getEngagementScore(),
    userIntent: getUserIntent(),
    contextualHints: getContextualHints(),
    isHighlyEngaged: getEngagementScore() > 60,
    isReadyToConvert: behavior.scrollPosition > 0.6 && behavior.timeOnPage > 20000
  };
}