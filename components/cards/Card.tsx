import { ProjectsProps } from "@/interfaces/projects";
import { AiFillGithub } from "react-icons/ai";
import { BsBoxArrowUpRight } from "react-icons/bs";
import React from "react";
import { CardSkill } from "./CardSkill";

export const Card: React.FC<ProjectsProps> = ({
  title,
  description,
  image,
  tags,
  github,
  demo,
  className,
}) => {
  return (
    <div className="group flex flex-col justify-between items-start gap-2 w-96 h-56 duration-500 relative rounded-lg p-4 border border-l-8 border-black bg-white">
      <div
        className="absolute duration-700  group-hover:-translate-y-4 group-hover:-translate-x-4 -bottom-10 -right-10 w-1/2 h-1/2 rounded-lg bg-cover"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div>
        <h2 className="text-2xl font-bold mb-2 text-gray-800">{title}</h2>
        <p className="text-gray-700 line-clamp-3">{description}</p>
      </div>
      <div className="md:flex md:items-center md:space-x-4">
        <a href={github} className="text-2xl text-black hover:text-[#007AFF]">
          <AiFillGithub />
        </a>
        <a href={demo} className="text-xl text-black hover:text-[#007AFF]">
          <BsBoxArrowUpRight />
        </a>
      </div>
    </div>
  );
};
