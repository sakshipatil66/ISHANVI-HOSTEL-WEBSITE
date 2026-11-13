import type { Transition, Variants } from 'motion/react';

/**
 * Unified ISHANVI Motion Language
 * Smooth editorial deceleration curve with compositor-only properties (transform, opacity).
 */
export const LUXURY_EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export const VIEWPORT_CONFIG = {
  once: true,
  amount: 0.12 as const,
};

export const SECTION_TRANSITION: Transition = {
  duration: 0.6,
  ease: LUXURY_EASE,
};

export const FAST_TRANSITION: Transition = {
  duration: 0.22,
  ease: LUXURY_EASE,
};

export const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay,
      ease: LUXURY_EASE,
    },
  }),
};

export const fadeInVariant: Variants = {
  hidden: { opacity: 0 },
  visible: (delay = 0) => ({
    opacity: 1,
    transition: {
      duration: 0.5,
      delay,
      ease: LUXURY_EASE,
    },
  }),
};

export const slideInLeftVariant: Variants = {
  hidden: { opacity: 0, x: -24 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.65,
      delay,
      ease: LUXURY_EASE,
    },
  }),
};

export const slideInRightVariant: Variants = {
  hidden: { opacity: 0, x: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.65,
      delay,
      ease: LUXURY_EASE,
    },
  }),
};

export const staggerContainerVariant: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

export const staggerItemVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.52,
      ease: LUXURY_EASE,
    },
  },
};
