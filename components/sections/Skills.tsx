import React from "react";
import { CardSkill } from "../cards/CardSkill";
import { skills } from "@/content";

export default function Skills() {
  return (
    // <div id="skills">
    //   <div className="flex justify-center items-center font-montserrat text-black h-screen bg-[#F9F9F9]">
    //     <div className="container mx-auto px-56">
    //       <h3 className="text-4xl font-bold mb-10 text-center text-[#007AFF]">
    //         Skills
    //       </h3>
    //       <CardSkill value={skills} />
    //     </div>
    //   </div>
    // </div>
    <CardSkill value={skills} />
  );
}
