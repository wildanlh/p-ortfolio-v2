import { BsArrowRight } from "react-icons/bs";
import { ButtonArrowProps } from "@/interfaces/button";

export const ButtonArrow: React.FC<ButtonArrowProps> = ({ children, href }) => {
  return (
    <>
      <a
        href={href}
        target="_blank"
        className="relative flex items-center btn hover:text-[#007AFF] hover:duration-300 hover:ease-in-out before:absolute before:left-0 before:bottom-0 before:-z-10 before:h-0.5 before:w-full before:origin-top-left before:scale-x-0 before:bg-[#007AFF] before:transition-transform before:duration-300 before:content-['']  before:hover:scale-x-100"
      >
        <p className="mr-2">{children}</p>
        <div className="icon-arrow-right">
          <BsArrowRight />
        </div>
      </a>
    </>
  );
};
