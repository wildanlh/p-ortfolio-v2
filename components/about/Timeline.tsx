import React, { useRef } from "react";
import { TimelineData, TimelineProps } from "@/interfaces/education";
import { DetailTimeLine } from "./DetailTimeline";
import { education } from "@/content";
import { motion, useScroll } from "framer-motion";

export const Timeline: React.FC<TimelineProps> = ({ items }) => {
  return (
    <div>
      <h3 className="text-4xl font-bold mb-10 text-[#007AFF] text-center">
        Education
      </h3>
      <ol className="relative border-l border-gray-500">
        {items.map((item: TimelineData, index: number) => (
          <motion.li
            className="mb-20 ml-4"
            key={index}
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, type: "spring", duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="absolute w-3 h-3 bg-[#007AFF] rounded-full mt-1.5 -left-1.5 border border-[#007AFF]" />
            <time className="mb-1 text-xl font-bold leading-none text-[#007AFF]">
              {item.start} - {item.end}
            </time>
            <h3 className="text-2xl font-semibold text-black">{item.school}</h3>
            <div>
              <p className="text-lg text-gray-500">
                {item.major} | {item.city}, {item.country}
              </p>
              <p className="text-xl font-normal text-black">
                {item.organization}
              </p>
            </div>
          </motion.li>
        ))}
      </ol>
      {/* <div ref={ref} className="w-[75%] mx-auto relative">
        <motion.div
          className="absolute left-9 top-0 w-1 h-full bg-black origin-top"
          style={{ scaleY: scrollYProgress }}
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <DetailTimeLine items={education} />
        </ul>
      </div> */}
    </div>
  );
};
