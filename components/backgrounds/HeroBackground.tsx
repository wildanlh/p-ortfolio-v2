import React from "react";
import { motion } from "framer-motion";
import { circleChildVariants, circleParentVariants } from "@/motions/motionSVG";

export const HeroBackground: React.FC = () => {
  return (
    <>
      <motion.svg
        id="visual"
        viewBox="0 0 960 540"
        width="960"
        height="540"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-screen relative"
        version="1.1"
        initial="initial"
        animate="animate"
        variants={circleParentVariants}
      >
        <rect x="0" y="0" width="960" height="540" fill="#FCFFFF"></rect>
        <g fill="none" stroke="#007AFF" stroke-width="2">
          <motion.circle
            variants={circleChildVariants}
            r="214"
            cx="752"
            cy="190"
          ></motion.circle>
          <motion.circle
            variants={circleChildVariants}
            r="52"
            cx="179"
            cy="435"
          ></motion.circle>
          <motion.circle
            variants={circleChildVariants}
            r="125"
            cx="84"
            cy="5"
          ></motion.circle>
        </g>
      </motion.svg>
    </>
  );
};
