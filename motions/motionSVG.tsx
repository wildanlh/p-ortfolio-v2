export const polygonVariants = (
  delay: number,
  hiddenX: number,
  hiddenY: number
) => ({
  hidden: { x: hiddenX, y: hiddenY },
  visible: {
    x: 0,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 20,
      delay,
    },
  },
  exit: {
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      duration: 2,
      delay,
    },
  },
});

export const circleParentVariants = {
  initial: {},
  animate: {
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.3,
    },
  },
};

export const circleChildVariants = {
  initial: {},
  animate: {
    y: [0, 100, 50, 0],
    transition: {
      duration: 2,
      ease: "easeInOut",
      times: [0, 0.2, 0.5, 0.8, 1],
      repeat: Infinity,
      repeatDelay: 1,
    },
  },
};
