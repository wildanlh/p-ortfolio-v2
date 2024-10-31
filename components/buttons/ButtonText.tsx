import { ButtonTextProps } from "@/interfaces/button";
import React from "react";

export const ButtonText: React.FC<ButtonTextProps> = ({
  children,
  href,
  className,
}) => {
  return (
    <>
      <a href={href} className="inline">
        <span
          className={`font-bold mb-2 text-xl md:text-2xl mt-10 lg:mt-0 ${className} relative bg-transparent transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-bottom-left before:scale-y-0 before:bg-[#007AFF] before:transition-transform before:duration-300 before:content-['']  before:hover:scale-y-50`}
        >
          {children}
        </span>
      </a>
    </>
  );
};
