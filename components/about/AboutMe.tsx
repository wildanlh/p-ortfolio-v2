import { useState } from "react";
import { motion } from "framer-motion";
import Skills from "../sections/Skills";

export const AboutMe: React.FC = () => {
  return (
    <div className="h-screen flex items-center justify-center text-white relative overflow-hidden">
      {/* Moving Circles Background */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-white rounded-full opacity-20"
          style={{
            width: `${100 + i * 20}px`,
            height: `${100 + i * 20}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [0, 50, -50, 0],
            y: [0, -50, 50, 0],
          }}
          transition={{
            duration: 10 + i * 2,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        />
      ))}

      {/* About Me Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h3 className="text-4xl font-bold mb-10">About Me</h3>
        <motion.div
          className="flex mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-xl text-white">
            I&apos;m <b>Wildan Luqmanul Hakim</b>, a software engineer. I
            specialize in creating dynamic and user-focused web applications,
            working proficiently as a frontend developer. My tech stack includes
            tools like React, Next.js, and Google Cloud Platform, though
            I&apos;m adaptable to various technologies to deliver effective
            solutions.
            <br />
            <br />I graduated with a Bachelor of Computer Science in Informatics
            Engineering from Bandung University of Technology in 2024. My
            passion for web development grew through practical experience,
            including the <b>Google Bangkit Academy</b> and hands-on projects in
            Indonesia and Singapore. These experiences honed my skills in
            front-end web development and cloud-based application deployment.
            <br />
            <br />
            Outside of coding, I enjoy exploring new skills, working out, and
            playing games. I&apos;m open to work opportunities where I can apply
            my technical expertise and creative problem-solving abilities. Feel
            free to connect with me through the links below if you&apos;d like
            to discuss potential collaborations!
          </p>
        </motion.div>
        <div>
          <h4 className="text-xl font-bold mb-5">Skills</h4>
          <motion.div
            className="flex flex-wrap items-center gap-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <Skills />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutMe;
