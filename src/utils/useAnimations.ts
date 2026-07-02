import { useEffect, useRef } from "react";
import {
  slideInUp,
  slideInLeft,
  slideInRight,
  scaleIn,
  scrollFadeIn,
  staggerFadeIn,
  parallax,
  hoverScale,
  hoverGlow,
  clearScrollTriggers,
  refreshScrollTriggers,
} from "./animations";

/**
 * Hook for slide in up animation on mount
 */
export const useSlideInUp = (delay = 0, distance = 50) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      slideInUp(ref.current, 0.7, delay, distance);
    }
  }, [delay, distance]);

  return ref;
};

/**
 * Hook for slide in left animation on mount
 */
export const useSlideInLeft = (delay = 0, distance = 50) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      slideInLeft(ref.current, 0.7, delay, distance);
    }
  }, [delay, distance]);

  return ref;
};

/**
 * Hook for slide in right animation on mount
 */
export const useSlideInRight = (delay = 0, distance = 50) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      slideInRight(ref.current, 0.7, delay, distance);
    }
  }, [delay, distance]);

  return ref;
};

/**
 * Hook for scale in animation on mount
 */
export const useScaleIn = (delay = 0, from = 0.8) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      scaleIn(ref.current, 0.6, delay, from);
    }
  }, [delay, from]);

  return ref;
};

/**
 * Hook for scroll fade in animation
 */
export const useScrollFadeIn = (
  direction: "up" | "left" | "right" | "none" = "up",
  distance = 50
) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      scrollFadeIn(ref.current, {
        direction,
        distance,
      });
    }

    return () => {
      // Cleanup on unmount
      clearScrollTriggers();
    };
  }, [direction, distance]);

  return ref;
};

/**
 * Hook for stagger fade in animation on children
 */
export const useStaggerFadeIn = (delay = 0, stagger = 0.1) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      const children = ref.current.children as HTMLCollection;
      staggerFadeIn(Array.from(children) as HTMLElement[], {
        stagger,
        delay,
      });
    }
  }, [delay, stagger]);

  return ref;
};

/**
 * Hook for parallax effect
 */
export const useParallax = (speed = 0.5) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      parallax(ref.current, speed);
    }

    return () => {
      clearScrollTriggers();
    };
  }, [speed]);

  return ref;
};

/**
 * Hook for hover scale effect
 */
export const useHoverScale = (scale = 1.05) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      hoverScale(ref.current, scale);
    }
  }, [scale]);

  return ref;
};

/**
 * Hook for hover glow effect
 */
export const useHoverGlow = (color = "rgba(59,130,246,0.5)", intensity = 1) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      hoverGlow(ref.current, color, intensity);
    }
  }, [color, intensity]);

  return ref;
};

/**
 * Hook for combined hover effects (scale + glow)
 */
export const useHoverEffects = (
  scale = 1.05,
  glowColor = "rgba(59,130,246,0.5)",
  glowIntensity = 1
) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      hoverScale(ref.current, scale);
      hoverGlow(ref.current, glowColor, glowIntensity);
    }
  }, [scale, glowColor, glowIntensity]);

  return ref;
};

/**
 * Hook to refresh scroll triggers (useful after dynamic content changes)
 */
export const useRefreshScrollTriggers = (deps: unknown[] = []) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      refreshScrollTriggers();
    }, 100);

    return () => clearTimeout(timer);
  }, deps);
};

/**
 * Hook for cleanup on unmount
 */
export const useAnimationCleanup = () => {
  useEffect(() => {
    return () => {
      clearScrollTriggers();
    };
  }, []);
};
