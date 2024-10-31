import Image from "next/image";
import React from "react";
import { Timeline } from "../about/Timeline";
import { aboutMe, education } from "@/content";
import { AboutMe } from "../about/AboutMe";

export const About: React.FC = () => {
  return (
    <div id="about">
      <div className="flex justify-center items-center font-montserrat text-black bg-[#007AFF]">
        <div className="container mx-auto px-80">
          <AboutMe />
          {/* <div className="flex justify-center items-center">
            <Timeline items={education} />
          </div> */}
        </div>
      </div>
    </div>
  );
};
