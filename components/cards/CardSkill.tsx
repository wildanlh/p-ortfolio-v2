import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SkillData, SkillsProps } from "@/interfaces/skills";
import {
  cardSkillHoverVariants,
  cardSkillVariants,
} from "@/motions/motionCard";

export const CardSkill: React.FC<SkillsProps> = ({ value }) => {
  return (
    // <>
    //   <motion.div className="grid grid-cols-4 gap-8">
    //     {value.map((value: SkillData, index: number) => (
    //       <motion.div
    //         className="flex justify-center items-center p-5"
    //         initial="offscreen"
    //         whileInView="onscreen"
    //         variants={cardSkillVariants}
    //         viewport={{ once: true, amount: 0.8 }}
    //         key={index}
    //       >
    //         <motion.a
    //           href={value.link}
    //           className="flex items-center justify-center opacity-75 hover:opacity-100 hover:ease-in-out"
    //           initial="initial"
    //           whileHover="animate"
    //           variants={cardSkillHoverVariants}
    //         >
    //           {/* <Image
    //             src={value.image}
    //             alt={value.name}
    //             width={1000}
    //             height={1000}
    //             className="rounded-lg w-24"
    //           /> */}
    //           <div
    //             className="flex justify-center py-4 my-4 px-4 w-full"
    //             style={{ color: `${value.color}` }}
    //           >
    //             <span className="font-semibold text-lg">{value.name}</span>
    //           </div>
    //         </motion.a>
    //       </motion.div>
    //     ))}
    //   </motion.div>
    // </>
    <>
      {value.map((value: SkillData, index: number) => (
        <span
          key={index}
          className="bg-white relative inline-flex items-center text-[#007AFF] justify-center gap-2 rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-[#F5F5F5] hover:text-[#06B6D4] h-9 px-3"
        >
          {value.name}
        </span>
      ))}
    </>
  );
};
