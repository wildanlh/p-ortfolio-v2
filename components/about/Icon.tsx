import React from "react";
import { motion, useScroll } from "framer-motion";

interface IconTimelineProps {
  reference: any;
}

export const Icon: React.FC<IconTimelineProps> = ({ reference }) => {
  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ["center end", "center center"],
  });
  return (
    <>
      <figure className="absolute left-0 stroke-blue-500">
        <svg
          className="-rotate- 90"
          width={75}
          height={75}
          viewBox="0 0 100 100"
        >
          <circle
            cx={75}
            cy={50}
            r={20}
            className="stroke-blue-500 stroke-1 fill-none"
          />
          <motion.circle
            cx={75}
            cy={50}
            r={20}
            className="stroke-[5px] fill-white"
            style={{ pathLength: scrollYProgress }}
          />
          <circle cx={75} cy={50} r={10} className="stroke-blue-500 stroke-1" />
        </svg>
      </figure>
    </>
  );
};
