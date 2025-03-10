// Animation variants for the Hero component
export const heroAnimations = {
  // Container animation for staggered children
  containerVariants: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  },

  // Text and content animation
  itemVariants: {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  },

  // Button hover animation
  buttonVariants: {
    initial: {
      paddingRight: "1rem",
    },
    hover: {
      paddingRight: "2.5rem",
      transition: {
        duration: 0.3,
      },
    },
  },

  // Icon container animation
  iconContainerVariants: {
    initial: { opacity: 0 },
    hover: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  },

  // Individual icon animation
  iconVariants: {
    initial: { opacity: 0, x: -5 },
    hover: { opacity: 1, x: 1 },
  },

  // Floating animation for decorative elements
  floatAnimation: {
    y: [0, -20, 0],
    transition: {
      duration: 5,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut",
    },
  },

  // Star animation for decorative elements
  starAnimation: {
    scale: [1, 1.2, 1],
    opacity: [0.7, 1, 0.7],
    transition: {
      duration: 3,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut",
    },
  },
};
