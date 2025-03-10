"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import LeftEllipse from "/public/assets/background-assets/left_Ellipse.svg";
import Ellipse from "/public/assets/background-assets/Eclipse.svg";
import Rectangle from "/public/assets/background-assets/Rectangle.svg";
import { zeechain } from "@/constants";
import { cardVariants } from "./Animations/Why_zee";

const Whyzee = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div className="relative">
      <Image
        src={Ellipse}
        alt="Background Ellipse"
        className="absolute left-1/4 -top-10"
      />
      <Image
        src={Rectangle}
        alt="Background Rectangle"
        className="absolute blur-lg left-1/4 -top-10"
      />
      <Image
        src={LeftEllipse}
        alt="Background Left Ellipse"
        className="absolute top-1/2 start-0"
      />
      <div className="  mx-auto max-w-[1440px] relative  my-20 ">
        <h1 className="text-center  text-24 md:text-40 my-5 font-semibold bg-Section-title-gradient bg-clip-text text-transparent font-display leading-166 tracking-wide">
          Why ZEE Chain?
        </h1>
        <div
          className="grid  lg:grid-cols-2  gap-10  mx-5 md:mx-32 -z-10 justify-center"
          ref={ref}
        >
          {zeechain.map((data, index) => (
            <motion.div
              key={data.label}
              className="w-full max-w-[580px] h-full bg-black border border-pink-400 rounded-3xl px-8 py-4 backdrop-blur-xl"
              variants={cardVariants}
              initial="hidden"
              animate={controls}
              custom={index}
            >
              <Image
                src={data.icon}
                alt={data.label}
                width={100}
                height={100}
                className="-ml-4"
              />
              <h2 className="leading-[41px] line-clamp-[-0.16px] text-32 text-white-500 font-semibold font-display">
                {data.label}
              </h2>
              <p className="text-14 leading-22 text-white-700 font-normal font-inter mt-2">
                {data.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Whyzee;
