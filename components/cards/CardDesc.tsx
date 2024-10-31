import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { CardDescProps } from "@/interfaces/projects";
import { motion } from "framer-motion";
import { ButtonText } from "../buttons/ButtonText";

export const CardDesc: React.FC<CardDescProps> = ({
  title,
  description,
  tags,
  github,
  demo,
  className,
}) => {
  return (
    <motion.div className="w-full h-full flex p-5 rounded-lg flex-col bg-white drop-shadow-lg">
      <h2 className={`mb-2 text-base mt-10 lg:mt-0 ${className}`}>
        Featured Project
      </h2>
      <ButtonText href={demo}>{title}</ButtonText>
      <p className={`text-lg ${className}`}>{description}</p>

      <div className={`md:flex md:items-center md:space-x-4 my-5 ${className}`}>
        {tags.map((value, index) => (
          <a className="text-black hover:text-[#007AFF]" key={index}>
            {value}
          </a>
        ))}
      </div>
      <div className={`md:flex md:items-center md:space-x-4 ${className}`}>
        <a href={github} className="text-2xl text-black hover:text-[#007AFF]">
          <AiFillGithub />
        </a>
        <a href={demo} className="text-xl text-black hover:text-[#007AFF]">
          <BsBoxArrowUpRight />
        </a>
      </div>
    </motion.div>
  );
};
