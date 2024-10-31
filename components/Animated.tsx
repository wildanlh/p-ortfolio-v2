import { motion } from "framer-motion";

const parentVariants = {
  initial: {},
  animate: {
    transition: {
      delayChildren: 0.5,
      staggerChildren: 1,
    },
  },
};

const childVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export const AnimatedComponent: React.FC = () => {
  return (
    <motion.div
      className="parent"
      variants={parentVariants}
      initial="initial"
      animate="animate"
    >
      <motion.div className="child" variants={childVariants}>
        Child 1
      </motion.div>
      <motion.div className="child" variants={childVariants}>
        Child 2
      </motion.div>
      <motion.div className="child" variants={childVariants}>
        Child 3
      </motion.div>
    </motion.div>
  );
};
