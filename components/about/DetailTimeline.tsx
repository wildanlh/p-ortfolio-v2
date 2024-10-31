import React, { useRef } from "react";
import { TimelineData, TimelineProps } from "@/interfaces/education";
import { Icon } from "./Icon";
import { motion } from "framer-motion";

export const DetailTimeLine: React.FC<TimelineProps> = ({ items }) => {
  const ref = useRef(null);
  return (
    <>
      {items.map((item: TimelineData, index: number) => (
        <li
          ref={ref}
          className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between"
          key={index}
        >
          <Icon reference={ref} />
          <motion.div
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.5, type: "spring" }}
          >
            <h3 className="capitalize font-bold text-2xl">
              {item.start} - {item.end}
            </h3>
            <span className="capitalize font-medium">{item.school}</span>
            <p className="font-medium w-full ">
              {item.major} | {item.city}, {item.country}
            </p>
            <p className="text-xl font-normal text-black">
              {item.organization}
            </p>
          </motion.div>
        </li>
      ))}
    </>
  );
};
