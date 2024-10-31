import { ButtonProps } from "@/interfaces/button";
import React from "react";

export const Button: React.FC<ButtonProps> = ({
  children,
  type,
  className,
  disabled,
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`${className} text-[#007AFF] font-medium py-2 px-4 relative border border-[#007AFF] rounded bg-transparent transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-[#007AFF] before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100`}
    >
      {children}
    </button>
  );
};
