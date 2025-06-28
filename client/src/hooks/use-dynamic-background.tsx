import { useState, useEffect, useCallback } from 'react';

interface TimeOfDayColors {
  morning: { from: string; to: string; accent: string };
  afternoon: { from: string; to: string; accent: string };
  evening: { from: string; to: string; accent: string };
  night: { from: string; to: string; accent: string };
}

const timeColors: TimeOfDayColors = {
  morning: { 
    from: 'rgb(255, 253, 250)', // Very subtle warm
    to: 'rgb(254, 252, 251)',   // Almost white pink
    accent: 'rgb(254, 249, 243)'  // Pale cream
  },
  afternoon: { 
    from: 'rgb(250, 251, 254)', // Very subtle blue
    to: 'rgb(249, 250, 254)',   // Almost white lavender
    accent: 'rgb(248, 248, 253)'  // Pale blue
  },
  evening: { 
    from: 'rgb(254, 251, 252)', // Very subtle pink
    to: 'rgb(253, 251, 254)',   // Almost white purple
    accent: 'rgb(252, 250, 254)'  // Pale purple
  },
  night: { 
    from: 'rgb(248, 248, 252)',  // Very subtle blue
    to: 'rgb(249, 248, 252)',    // Almost white purple
    accent: 'rgb(250, 248, 254)'  // Pale lavender
  }
};

export function useDynamicBackground() {
  const [currentColors, setCurrentColors] = useState(timeColors.afternoon);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isInteracting, setIsInteracting] = useState(false);
  const [colorShift, setColorShift] = useState({ hue: 0, saturation: 0, lightness: 0 });
  const [manualTimeOverride, setManualTimeOverride] = useState<keyof TimeOfDayColors | null>(null);

  // Determine time of day
  const getTimeOfDay = useCallback(() => {
    const hour = new Date().getHours();
    
    if (hour >= 5 && hour < 12) return 'morning';
    if (hour >= 12 && hour < 17) return 'afternoon';
    if (hour >= 17 && hour < 21) return 'evening';
    return 'night';
  }, []);

  // Update colors based on time
  useEffect(() => {
    const updateTimeColors = () => {
      const timeOfDay = getTimeOfDay();
      setCurrentColors(timeColors[timeOfDay]);
    };

    updateTimeColors();
    const interval = setInterval(updateTimeColors, 60000); // Check every minute

    return () => clearInterval(interval);
  }, [getTimeOfDay]);

  // Handle mouse movement for interactive color shifts
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      
      setMousePosition({ x, y });
      
      // Calculate color shift based on mouse position
      const hueShift = (x - 0.5) * 20; // -10 to +10 degrees
      const saturationShift = (y - 0.5) * 10; // -5% to +5%
      const lightnessShift = Math.sqrt(Math.pow(x - 0.5, 2) + Math.pow(y - 0.5, 2)) * 5; // 0% to 5%
      
      setColorShift({
        hue: hueShift,
        saturation: saturationShift,
        lightness: lightnessShift
      });
    };

    const handleMouseDown = () => setIsInteracting(true);
    const handleMouseUp = () => setIsInteracting(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  // Apply color shifts to base colors
  const applyColorShift = useCallback((color: string) => {
    const rgb = color.match(/\d+/g);
    if (!rgb) return color;

    const [r, g, b] = rgb.map(Number);
    
    // Convert RGB to HSL
    const rNorm = r / 255;
    const gNorm = g / 255;
    const bNorm = b / 255;
    
    const max = Math.max(rNorm, gNorm, bNorm);
    const min = Math.min(rNorm, gNorm, bNorm);
    const diff = max - min;
    
    let h = 0;
    let s = 0;
    const l = (max + min) / 2;

    if (diff !== 0) {
      s = l > 0.5 ? diff / (2 - max - min) : diff / (max + min);
      
      switch (max) {
        case rNorm:
          h = ((gNorm - bNorm) / diff + (gNorm < bNorm ? 6 : 0)) / 6;
          break;
        case gNorm:
          h = ((bNorm - rNorm) / diff + 2) / 6;
          break;
        case bNorm:
          h = ((rNorm - gNorm) / diff + 4) / 6;
          break;
      }
    }

    // Apply shifts
    h = (h * 360 + colorShift.hue) % 360;
    s = Math.max(0, Math.min(1, s + colorShift.saturation / 100));
    const lAdjusted = Math.max(0, Math.min(1, l + colorShift.lightness / 100));

    // Convert back to RGB
    const hslToRgb = (h: number, s: number, l: number) => {
      const c = (1 - Math.abs(2 * l - 1)) * s;
      const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
      const m = l - c / 2;

      let r = 0, g = 0, b = 0;

      if (h >= 0 && h < 60) {
        r = c; g = x; b = 0;
      } else if (h >= 60 && h < 120) {
        r = x; g = c; b = 0;
      } else if (h >= 120 && h < 180) {
        r = 0; g = c; b = x;
      } else if (h >= 180 && h < 240) {
        r = 0; g = x; b = c;
      } else if (h >= 240 && h < 300) {
        r = x; g = 0; b = c;
      } else {
        r = c; g = 0; b = x;
      }

      return `rgb(${Math.round((r + m) * 255)}, ${Math.round((g + m) * 255)}, ${Math.round((b + m) * 255)})`;
    };

    return hslToRgb(h, s, lAdjusted);
  }, [colorShift]);

  return {
    colors: {
      from: applyColorShift(currentColors.from),
      to: applyColorShift(currentColors.to),
      accent: applyColorShift(currentColors.accent)
    },
    mousePosition,
    isInteracting,
    timeOfDay: getTimeOfDay()
  };
}