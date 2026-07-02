import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

/**
 * Fade in animation
 */
export const fadeIn = (
  element: HTMLElement | HTMLElement[],
  duration = 0.6,
  delay = 0
) => {
  return gsap.to(element, {
    opacity: 1,
    duration,
    delay,
    ease: "power2.out",
  });
};

/**
 * Slide in from left animation
 */
export const slideInLeft = (
  element: HTMLElement | HTMLElement[],
  duration = 0.7,
  delay = 0,
  distance = 50
) => {
  gsap.set(element, { x: -distance, opacity: 0 });
  return gsap.to(element, {
    x: 0,
    opacity: 1,
    duration,
    delay,
    ease: "power2.out",
  });
};

/**
 * Slide in from right animation
 */
export const slideInRight = (
  element: HTMLElement | HTMLElement[],
  duration = 0.7,
  delay = 0,
  distance = 50
) => {
  gsap.set(element, { x: distance, opacity: 0 });
  return gsap.to(element, {
    x: 0,
    opacity: 1,
    duration,
    delay,
    ease: "power2.out",
  });
};

/**
 * Slide in from top animation
 */
export const slideInUp = (
  element: HTMLElement | HTMLElement[],
  duration = 0.7,
  delay = 0,
  distance = 50
) => {
  gsap.set(element, { y: distance, opacity: 0 });
  return gsap.to(element, {
    y: 0,
    opacity: 1,
    duration,
    delay,
    ease: "power2.out",
  });
};

/**
 * Slide in from bottom animation
 */
export const slideInDown = (
  element: HTMLElement | HTMLElement[],
  duration = 0.7,
  delay = 0,
  distance = 50
) => {
  gsap.set(element, { y: -distance, opacity: 0 });
  return gsap.to(element, {
    y: 0,
    opacity: 1,
    duration,
    delay,
    ease: "power2.out",
  });
};

/**
 * Scale animation
 */
export const scaleIn = (
  element: HTMLElement | HTMLElement[],
  duration = 0.6,
  delay = 0,
  from = 0.8
) => {
  gsap.set(element, { scale: from, opacity: 0 });
  return gsap.to(element, {
    scale: 1,
    opacity: 1,
    duration,
    delay,
    ease: "back.out",
  });
};

/**
 * Scroll trigger fade in animation
 */
export const scrollFadeIn = (
  element: HTMLElement | HTMLElement[],
  options: {
    trigger?: HTMLElement | string;
    distance?: number;
    duration?: number;
    delay?: number;
    direction?: "up" | "left" | "right" | "none";
  } = {}
) => {
  const {
    distance = 50,
    duration = 0.7,
    direction = "up",
    delay = 0,
  } = options;

  const fromVars: gsap.TweenVars = { opacity: 0 };

  if (direction === "up") {
    fromVars.y = distance;
  } else if (direction === "left") {
    fromVars.x = -distance;
  } else if (direction === "right") {
    fromVars.x = distance;
  }

  gsap.set(element, fromVars);

  return gsap.to(element, {
    scrollTrigger: {
      trigger: options.trigger || element,
      start: "top 80%",
      end: "top 50%",
      toggleActions: "play none none reverse",
    },
    opacity: 1,
    y: direction === "up" ? 0 : fromVars.y,
    x: fromVars.x || 0,
    duration,
    delay,
    ease: "power2.out",
  });
};

/**
 * Stagger animation for multiple elements
 */
export const staggerFadeIn = (
  elements: HTMLElement[] | string,
  options: {
    duration?: number;
    stagger?: number;
    delay?: number;
    distance?: number;
    direction?: "up" | "left" | "right" | "none";
  } = {}
) => {
  const {
    duration = 0.6,
    stagger = 0.1,
    delay = 0,
    distance = 30,
    direction = "up",
  } = options;

  const fromVars: gsap.TweenVars = { opacity: 0 };

  if (direction === "up") {
    fromVars.y = distance;
  } else if (direction === "left") {
    fromVars.x = -distance;
  } else if (direction === "right") {
    fromVars.x = distance;
  }

  gsap.set(elements, fromVars);

  return gsap.to(elements, {
    opacity: 1,
    y: direction === "up" ? 0 : fromVars.y,
    x: fromVars.x || 0,
    duration,
    stagger,
    delay,
    ease: "power2.out",
  });
};

/**
 * Parallax effect
 */
export const parallax = (
  element: HTMLElement | string,
  speed = 0.5
) => {
  gsap.to(element, {
    scrollTrigger: {
      trigger: element,
      start: "top center",
      end: "bottom center",
      scrub: 1,
      markers: false,
    },
    y: `${-100 * speed}`,
    ease: "none",
  });
};

/**
 * Hover scale effect with GSAP
 */
export const hoverScale = (
  element: HTMLElement,
  scale = 1.05,
  duration = 0.3
) => {
  element.addEventListener("mouseenter", () => {
    gsap.to(element, {
      scale,
      duration,
      ease: "power2.out",
    });
  });

  element.addEventListener("mouseleave", () => {
    gsap.to(element, {
      scale: 1,
      duration,
      ease: "power2.out",
    });
  });
};

/**
 * Glow effect on hover
 */
export const hoverGlow = (
  element: HTMLElement,
  color = "rgba(59,130,246,0.5)",
  intensity = 1
) => {
  const originalBoxShadow = window.getComputedStyle(element).boxShadow;

  element.addEventListener("mouseenter", () => {
    gsap.to(element, {
      boxShadow: `0 0 ${20 * intensity}px ${10 * intensity}px ${color}`,
      duration: 0.3,
      ease: "power2.out",
    });
  });

  element.addEventListener("mouseleave", () => {
    gsap.to(element, {
      boxShadow: originalBoxShadow,
      duration: 0.3,
      ease: "power2.out",
    });
  });
};

/**
 * Pulse effect
 */
export const pulse = (
  element: HTMLElement | HTMLElement[],
  duration = 1.5,
  scale = 1.05
) => {
  return gsap.to(element, {
    scale,
    opacity: 0.8,
    duration: duration / 2,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
  });
};

/**
 * Bounce effect
 */
export const bounce = (
  element: HTMLElement | HTMLElement[],
  duration = 0.8,
  distance = 20
) => {
  return gsap.to(element, {
    y: -distance,
    duration: duration / 2,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut",
  });
};

/**
 * Rotate effect
 */
export const rotate = (
  element: HTMLElement | HTMLElement[],
  degrees = 360,
  duration = 2
) => {
  return gsap.to(element, {
    rotation: degrees,
    duration,
    repeat: -1,
    ease: "none",
  });
};

/**
 * Counter animation (for numbers)
 */
export const animateCounter = (
  element: HTMLElement,
  target: number,
  duration = 2,
  prefix = "",
  suffix = ""
) => {
  const obj = { value: 0 };
  return gsap.to(obj, {
    value: target,
    duration,
    ease: "power2.out",
    onUpdate: () => {
      element.textContent = `${prefix}${Math.floor(obj.value)}${suffix}`;
    },
  });
};

/**
 * Text reveal effect
 */
export const textReveal = (
  element: HTMLElement,
  duration = 1
) => {
  const text = element.textContent || "";
  element.textContent = "";

  const chars = text.split("").map((char) => {
    const span = document.createElement("span");
    span.textContent = char;
    span.style.opacity = "0";
    element.appendChild(span);
    return span;
  });

  return gsap.to(chars, {
    opacity: 1,
    duration: duration / chars.length,
    stagger: 0.05,
    ease: "power2.out",
  });
};

/**
 * Page transition animation
 */
export const pageTransitionOut = () => {
  return gsap.to("main", {
    opacity: 0,
    y: 20,
    duration: 0.3,
    ease: "power2.in",
  });
};

export const pageTransitionIn = () => {
  gsap.set("main", { opacity: 0, y: 20 });
  return gsap.to("main", {
    opacity: 1,
    y: 0,
    duration: 0.5,
    ease: "power2.out",
  });
};

/**
 * Clear all ScrollTrigger instances
 */
export const clearScrollTriggers = () => {
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
};

/**
 * Refresh ScrollTrigger (after DOM changes)
 */
export const refreshScrollTriggers = () => {
  ScrollTrigger.refresh();
};
