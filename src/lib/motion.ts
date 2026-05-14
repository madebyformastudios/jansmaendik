// Shared Framer Motion config used across all sections
export const ease = [0.22, 1, 0.36, 1] as const;

export const viewport = { once: true, margin: "-80px" } as const;

// Reusable variants
export const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

export const fadeLeft = {
  hidden: { opacity: 0, x: -32 },
  visible: { opacity: 1, x: 0 },
};

export const fadeRight = {
  hidden: { opacity: 0, x: 32 },
  visible: { opacity: 1, x: 0 },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.97 },
  visible: { opacity: 1, scale: 1 },
};

// Stagger container — children must use a "visible" variant
export const staggerContainer = (staggerDelay = 0.09) => ({
  hidden: {},
  visible: { transition: { staggerChildren: staggerDelay } },
});

export const defaultTransition = { duration: 0.65, ease };
export const slowTransition = { duration: 0.85, ease };
