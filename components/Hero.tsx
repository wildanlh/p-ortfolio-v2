import React from "react";
import { motion } from "framer-motion";
import { childVariants, parentVariants } from "@/motions/motionLink";
import { ButtonArrow } from "./buttons/ButtonArrow";
import { links } from "@/content";

const rectangleVariants = {
  animate: (i: number) => ({
    x: [0, 50, 0, -50, 0],
    y: [0, -50, 0, 50, 0],
    transition: {
      duration: 8 + i, // Each rectangle moves at a slightly different speed
      repeat: Infinity,
      ease: "easeInOut",
    },
  }),
};

export const Hero: React.FC = () => {
  return (
    <div className="h-screen flex justify-center items-center font-montserrat text-black text-center relative overflow-hidden">
      {/* Animated Rectangles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-[#007AFF] opacity-20"
          style={{
            width: `${100 + i * 40}px`,
            height: `${100 + i * 40}px`,
            top: `${20 * i}%`,
            left: `${20 * i}%`,
            borderRadius: "8px",
          }}
          custom={i}
          variants={rectangleVariants}
          animate="animate"
        />
      ))}

      {/* Main content */}
      <motion.div
        className="container mx-auto px-36 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        variants={parentVariants}
        initial="initial"
        animate="animate"
      >
        <motion.h3 className="text-4xl font-bold mb-2" variants={childVariants}>
          Hi there! I&apos;m
        </motion.h3>
        <motion.h2
          className="text-6xl text-[#007AFF] font-bold mb-2"
          variants={childVariants}
        >
          Wildan Luqmanul Hakim
        </motion.h2>
        <div className="flex justify-center">
          <motion.p className="text-xl w-3/4" variants={childVariants}>
            I&apos;m a <b>Software Engineer</b> specializing in building
            Front-end Website Development and managing Cloud Computing Systems.
          </motion.p>
        </div>

        <div className="mt-20 text-xl flex flex-row items-center justify-center space-x-10 font-bold">
          {links.map((link, index) => (
            <motion.div key={index} variants={childVariants}>
              <ButtonArrow href={link.link}>{link.name}</ButtonArrow>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};
