import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { polygonVariants } from "@/motions/motionSVG";

export const SplashScreen: React.FC = () => {
  const [animationState, setAnimationState] = useState<
    "hidden" | "visible" | "exit"
  >("hidden");

  useEffect(() => {
    const lastPolygonDelay = 1; // Sesuaikan dengan jumlah poligon dan delay terakhir
    const durationBeforeExit = 3000; // Durasi dalam ms sebelum animasi exit dimulai

    const timer = setTimeout(() => {
      setAnimationState("visible");
    }, lastPolygonDelay * 1000);

    const exitTimer = setTimeout(() => {
      setAnimationState("exit");
    }, lastPolygonDelay * 1000 + durationBeforeExit);

    return () => {
      clearTimeout(timer);
      clearTimeout(exitTimer);
    };
  }, []);

  return (
    <div className="h-screen flex items-center justify-center w-full ">
      <svg
        id="Layer_1"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 708.2 145.27"
        className="h-14 lg:h-24"
      >
        <motion.polygon
          points="144.82 145.07 144.67 145.27 108.65 145.27 108.5 145.07 0 0.01 36.31 0.01 126.66 120.8 144.82 145.07"
          fill="#007AFF"
          initial="hidden"
          animate={animationState}
          variants={polygonVariants(0, -300, 0)}
          className="hover:fill-[#FFFFA6] hover:duration-300 "
        />
        <motion.polygon
          points="242.15 87.15 220.27 116.4 346.91 116.4 325.32 145.26 162.19 145.26 153.43 133.55 135.28 109.27 53.54 0.01 53.54 0 89.63 0 89.63 0.01 89.64 0.01 89.76 0.17 153.32 85.15 153.32 85.16 171.48 109.42 171.48 109.43 180.32 121.25 180.33 121.25 180.44 121.1 189.17 109.43 189.17 109.42 205.83 87.15 225.68 60.62 227.49 58.2 240.35 41.01 276.66 41.01 263.8 58.2 390.44 58.2 368.79 87.15 242.15 87.15"
          fill="#007AFF"
          initial="hidden"
          animate={animationState}
          variants={polygonVariants(0.5, 0, -300)}
          className="hover:fill-[#FFFFA6] hover:duration-300 "
        />
        <motion.polygon
          points="422.79 87.15 400.92 116.4 527.56 116.4 505.97 145.27 343.01 145.27 364.6 116.4 374.16 103.62 378.65 97.62 386.48 87.15 408.13 58.2 420.99 41.01 457.31 41.01 444.45 58.2 571.09 58.2 549.43 87.15 422.79 87.15"
          fill="#007AFF"
          initial="hidden"
          animate={animationState}
          variants={polygonVariants(0.5, 0, 300)}
          className="hover:fill-[#FFFFA6] hover:duration-300 "
        />
        <motion.polygon
          points="614.62 0.01 592.97 28.96 466.33 28.96 466.29 29.01 429.97 29.01 430.01 28.96 285.68 28.96 285.64 29.01 249.32 29.01 249.36 28.96 231.67 28.96 231.63 29.01 180.33 97.6 162.17 73.33 195.35 28.96 217.01 0.01 614.62 0.01"
          fill="#007AFF"
          initial="hidden"
          animate={animationState}
          variants={polygonVariants(1, 0, -300)}
          className="hover:fill-[#FFFFA6] hover:duration-300 "
        />
        <motion.polygon
          points="708.2 116.4 686.61 145.27 523.65 145.27 545.24 116.4 545.25 116.4 555.86 102.22 567.13 87.15 588.78 58.2 599.69 43.62 601.64 41.01 610.62 29.01 610.66 28.96 632.31 0.01 668.63 0.01 668.5 0.18 646.97 28.96 646.93 29.01 638.25 40.62 637.96 41.01 625.1 58.2 603.44 87.15 581.56 116.4 708.2 116.4"
          fill="#007AFF"
          initial="hidden"
          animate={animationState}
          variants={polygonVariants(1, 300, 0)}
          className="hover:fill-[#FFFFA6] hover:duration-300 "
        />
      </svg>
    </div>
  );
};
