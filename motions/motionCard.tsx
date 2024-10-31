export const cardSkillVariants = {
  offscreen: { y: 100, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.3,
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

export const cardSkillHoverVariants = {
  initial: {},
  animate: {
    y: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

// export const cardProjectVariants = {
//   offscreen: { x: 100 },
//   onscreen: {
//     x: 0,
//     transition: {
//       delay: 0.3,
//       type: "spring",
//       bounce: 0.4,
//       duration: 0.8,
//     },
//   },
// };

export const cardProjectVariants = (valueY: number) => ({
  offscreen: { y: valueY },
  onscreen: {
    y: 0,
    transition: {
      delay: 0.3,
      type: "spring",
      bounce: 0.4,
      duration: 0.5,
    },
  },
});

export const cardParentVariants = {
  offscreen: {},
  onscreen: {
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.3,
    },
  },
};

export const cardChildVariants = {
  offscreen: {
    x: 300,
  },
  onscreen: {
    x: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};
