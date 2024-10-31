import Image from "next/image";
import React from "react";
import { CardImageProps } from "@/interfaces/projects";
import { motion, useScroll } from "framer-motion";
import { cardProjectVariants } from "@/motions/motionCard";

export const CardImage: React.FC<CardImageProps> = ({
  image,
  title,
  variants,
}) => {
  return (
    <motion.div
      className="w-full h-full flex rounded-lg"
      initial="offscreen"
      whileInView="onscreen"
      variants={cardProjectVariants(variants)}
      viewport={{ once: true, amount: 1 }}
    >
      {/* <div className="relative w-10/12">
        <motion.div whileHover={{ x: -300 }}>
          <Image src={laptop} alt="" />
        </motion.div>
        <div className="absolute w-64 left-0 bottom-0">
          <Image src={tablet} alt="" />
        </div>
        <div className="absolute w-28 left-0 bottom-0">
          <Image src={phone} alt="" />
        </div>
      </div> */}
      <Image
        src={image}
        alt={title}
        width={1000}
        height={1000}
        className="w-full rounded-lg"
      />
    </motion.div>
  );
};
