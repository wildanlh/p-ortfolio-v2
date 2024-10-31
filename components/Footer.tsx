import { NavItem, NavbarProps } from "@/interfaces/navbar";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { BsGithub, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";

export const Footer: React.FC<NavbarProps> = ({ items }) => {
  const [scrollingUp, setScrollingUp] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const currentScrollPosition = window.pageYOffset;

    setScrollingUp(currentScrollPosition < scrollPosition);
    setScrollPosition(currentScrollPosition);
  };

  const smoothScroll = (event, href) => {
    event.preventDefault();
    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollPosition]);

  return (
    <footer className="h-screen bg-[#0e315d] flex justify-center items-center font-montserrat">
      <div className="container px-36 text-[#FFFFA6] ">
        <div className="divide-y divide-[#FFFFA6]">
          <div className="pb-36">
            <a href="#" className="inline-block">
              <svg
                id="Layer_1"
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 708.2 145.27"
                className="w-[150px]"
              >
                <polygon
                  points="144.82 145.07 144.67 145.27 108.65 145.27 108.5 145.07 0 0.01 36.31 0.01 126.66 120.8 144.82 145.07"
                  fill="#FFFFA6"
                  className="hover:fill-[#FFFFA6] hover:duration-300 "
                />
                <polygon
                  points="242.15 87.15 220.27 116.4 346.91 116.4 325.32 145.26 162.19 145.26 153.43 133.55 135.28 109.27 53.54 0.01 53.54 0 89.63 0 89.63 0.01 89.64 0.01 89.76 0.17 153.32 85.15 153.32 85.16 171.48 109.42 171.48 109.43 180.32 121.25 180.33 121.25 180.44 121.1 189.17 109.43 189.17 109.42 205.83 87.15 225.68 60.62 227.49 58.2 240.35 41.01 276.66 41.01 263.8 58.2 390.44 58.2 368.79 87.15 242.15 87.15"
                  fill="#FFFFA6"
                  className="hover:fill-[#FFFFA6] hover:duration-300 "
                />
                <polygon
                  points="422.79 87.15 400.92 116.4 527.56 116.4 505.97 145.27 343.01 145.27 364.6 116.4 374.16 103.62 378.65 97.62 386.48 87.15 408.13 58.2 420.99 41.01 457.31 41.01 444.45 58.2 571.09 58.2 549.43 87.15 422.79 87.15"
                  fill="#FFFFA6"
                  className="hover:fill-[#FFFFA6] hover:duration-300 "
                />
                <polygon
                  points="614.62 0.01 592.97 28.96 466.33 28.96 466.29 29.01 429.97 29.01 430.01 28.96 285.68 28.96 285.64 29.01 249.32 29.01 249.36 28.96 231.67 28.96 231.63 29.01 180.33 97.6 162.17 73.33 195.35 28.96 217.01 0.01 614.62 0.01"
                  fill="#FFFFA6"
                  className="hover:fill-[#FFFFA6] hover:duration-300 "
                />
                <polygon
                  points="708.2 116.4 686.61 145.27 523.65 145.27 545.24 116.4 545.25 116.4 555.86 102.22 567.13 87.15 588.78 58.2 599.69 43.62 601.64 41.01 610.62 29.01 610.66 28.96 632.31 0.01 668.63 0.01 668.5 0.18 646.97 28.96 646.93 29.01 638.25 40.62 637.96 41.01 625.1 58.2 603.44 87.15 581.56 116.4 708.2 116.4"
                  fill="#FFFFA6"
                  className="hover:fill-[#FFFFA6] hover:duration-300 "
                />
              </svg>
            </a>
            <div className="text-xl grid grid-cols-3 gap-8 mt-5">
              <div className="space-y-5">
                <div>
                  <a
                    href="mailto: wildanluqmanul@gmail.com"
                    className="py-2 relative hover:duration-300 hover:ease-in-out before:absolute before:left-0 before:bottom-0 before:z-0 before:h-0.5 before:w-full before:origin-top-left before:scale-x-0 before:bg-[#FFFFA6] before:transition-transform before:duration-300 before:content-['']  before:hover:scale-x-100"
                  >
                    wildanluqmanul@gmail.com
                  </a>
                </div>
              </div>
              <div className="space-y-5">
                {items.map((item: NavItem, index: number) => (
                  <div key={index}>
                    <a
                      href={item.href}
                      onClick={(event) => smoothScroll(event, item.href)}
                      className="py-2 relative hover:duration-300 hover:ease-in-out before:absolute before:left-0 before:bottom-0 before:z-0 before:h-0.5 before:w-full before:origin-top-left before:scale-x-0 before:bg-[#FFFFA6] before:transition-transform before:duration-300 before:content-['']  before:hover:scale-x-100"
                    >
                      {item.label}
                    </a>
                  </div>
                ))}
              </div>
              <div className="space-y-5 font-light text-opacity-50 ">
                Designed in{" "}
                <a href="https://www.figma.com" className="font-semibold">
                  Figma
                </a>{" "}
                and coded in{" "}
                <a
                  href="https://code.visualstudio.com"
                  className="font-semibold"
                >
                  Visual Studio Code
                </a>
                . Built with{" "}
                <a href="https://nextjs.org/" className="font-semibold">
                  Next.js
                </a>{" "}
                and{" "}
                <a href="https://tailwindcss.com" className="font-semibold">
                  Tailwind CSS
                </a>
                , deployed with{" "}
                <a href="https://vercel.com" className="font-semibold">
                  Vercel
                </a>
                .
              </div>
            </div>
          </div>

          <div className="flex justify-between w-full text-xl pt-10">
            <div>
              <h1>&copy; Wildan Luqmanul Hakim | 2024</h1>
            </div>
            <div className="flex items-center space-x-10">
              <motion.a
                href="https://github.com/wildanlh"
                className="py-2"
                whileHover={{ y: -5 }}
              >
                <BsGithub />
              </motion.a>
              <motion.a
                href="https://www.instagram.com/wildanlh__/"
                className="py-2"
                whileHover={{ y: -5 }}
              >
                <BsInstagram />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/wildanlh/"
                className="py-2"
                whileHover={{ y: -5 }}
              >
                <BsLinkedin />
              </motion.a>
              <motion.a
                href="https://twitter.com/wldnlh"
                className="py-2"
                whileHover={{ y: -5 }}
              >
                <BsTwitter />
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
