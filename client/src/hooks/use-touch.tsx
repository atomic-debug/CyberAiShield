import { useState, useRef, useCallback, useEffect } from 'react';

interface TouchPosition {
  x: number;
  y: number;
}

interface SwipeHandlers {
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
  onSwipeUp?: () => void;
  onSwipeDown?: () => void;
}

export function useSwipe(handlers: SwipeHandlers, minSwipeDistance = 50) {
  const startTouch = useRef<TouchPosition | null>(null);
  const [isSwiping, setIsSwiping] = useState(false);

  const onTouchStart = useCallback((e: TouchEvent) => {
    const touch = e.touches[0];
    startTouch.current = { x: touch.clientX, y: touch.clientY };
    setIsSwiping(true);
  }, []);

  const onTouchEnd = useCallback((e: TouchEvent) => {
    if (!startTouch.current) return;

    const touch = e.changedTouches[0];
    const deltaX = touch.clientX - startTouch.current.x;
    const deltaY = touch.clientY - startTouch.current.y;
    
    const absDeltaX = Math.abs(deltaX);
    const absDeltaY = Math.abs(deltaY);

    if (Math.max(absDeltaX, absDeltaY) > minSwipeDistance) {
      if (absDeltaX > absDeltaY) {
        // Horizontal swipe
        if (deltaX > 0) {
          handlers.onSwipeRight?.();
        } else {
          handlers.onSwipeLeft?.();
        }
      } else {
        // Vertical swipe
        if (deltaY > 0) {
          handlers.onSwipeDown?.();
        } else {
          handlers.onSwipeUp?.();
        }
      }
    }

    startTouch.current = null;
    setIsSwiping(false);
  }, [handlers, minSwipeDistance]);

  return {
    onTouchStart,
    onTouchEnd,
    isSwiping
  };
}

export function usePullToRefresh(onRefresh: () => Promise<void>) {
  const [isPulling, setIsPulling] = useState(false);
  const [pullDistance, setPullDistance] = useState(0);
  const startY = useRef<number>(0);
  const currentY = useRef<number>(0);
  const isRefreshing = useRef(false);

  const maxPullDistance = 80;
  const triggerDistance = 60;

  const handleTouchStart = useCallback((e: TouchEvent) => {
    if (window.scrollY !== 0) return;
    startY.current = e.touches[0].clientY;
  }, []);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (window.scrollY !== 0 || isRefreshing.current) return;
    
    currentY.current = e.touches[0].clientY;
    const distance = currentY.current - startY.current;
    
    if (distance > 0) {
      e.preventDefault();
      const pullDist = Math.min(distance * 0.4, maxPullDistance);
      setPullDistance(pullDist);
      setIsPulling(pullDist > 10);
    }
  }, [maxPullDistance]);

  const handleTouchEnd = useCallback(async () => {
    if (pullDistance > triggerDistance && !isRefreshing.current) {
      isRefreshing.current = true;
      try {
        await onRefresh();
      } catch (error) {
        console.error('Refresh failed:', error);
      } finally {
        isRefreshing.current = false;
      }
    }
    
    setIsPulling(false);
    setPullDistance(0);
    startY.current = 0;
    currentY.current = 0;
  }, [pullDistance, triggerDistance, onRefresh]);

  useEffect(() => {
    const preventDefault = (e: TouchEvent) => e.preventDefault();
    
    document.addEventListener('touchstart', handleTouchStart, { passive: false });
    document.addEventListener('touchmove', handleTouchMove, { passive: false });
    document.addEventListener('touchend', handleTouchEnd);
    
    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [handleTouchStart, handleTouchMove, handleTouchEnd]);

  return {
    isPulling,
    pullDistance,
    isRefreshing: isRefreshing.current
  };
}

export function useHapticFeedback() {
  const vibrate = useCallback((pattern: number | number[] = 100) => {
    if ('vibrate' in navigator) {
      navigator.vibrate(pattern);
    }
  }, []);

  const lightImpact = useCallback(() => vibrate(50), [vibrate]);
  const mediumImpact = useCallback(() => vibrate(100), [vibrate]);
  const heavyImpact = useCallback(() => vibrate(200), [vibrate]);
  const success = useCallback(() => vibrate([100, 50, 100]), [vibrate]);
  const error = useCallback(() => vibrate([200, 100, 200, 100, 200]), [vibrate]);

  return {
    vibrate,
    lightImpact,
    mediumImpact,
    heavyImpact,
    success,
    error
  };
}