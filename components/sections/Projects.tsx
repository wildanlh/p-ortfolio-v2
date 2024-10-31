import React from "react";
import { CardProject } from "../cards/CardProject";
import { motion } from "framer-motion";

export const Projects: React.FC = () => {
  return (
    <div
      id="projects"
      className="relative h-screen flex justify-center items-center font-montserrat text-black bg-white overflow-hidden"
    >
      {/* Moving Circles Background */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-blue-500 rounded-full"
          style={{
            width: `${Math.random() * 50 + 20}px`, // Random size between 20px and 70px
            height: `${Math.random() * 50 + 20}px`, // Random size between 20px and 70px
            left: `${Math.random() * 100}%`, // Random horizontal position
            top: `${Math.random() * 100}%`, // Random vertical position
          }}
          animate={{
            x: [0, 50, -50, 0], // Move right, then left, then reset
            y: [0, 30, -30, 0], // Move down, then up, then reset
          }}
          transition={{
            duration: 6 + Math.random() * 4, // Random duration between 6s and 10s
            ease: "easeInOut",
            repeat: Infinity,
          }}
        />
      ))}

      {/* Projects Content */}
      <div className="container mx-auto py-20 relative z-10">
        <motion.h3
          className="text-4xl font-bold mb-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Projects
        </motion.h3>

        <motion.div
          className="grid grid-cols-3 gap-y-28"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <CardProject />
        </motion.div>
      </div>
    </div>
  );
};
