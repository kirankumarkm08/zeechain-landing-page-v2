"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import LeftEllipse from "/public/assets/background-assets/left_Ellipse.svg";
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
    <div className="relative  ">
      <div className="absolute inset-0  pointer-events-none">
        <div className="relative w-full h-full">
          <Image
            src="/assets/background-assets/bg-gradient-img.svg"
            alt="Background Ellipse"
            className="absolute  blur-lg w-full  hidden "
            width={100}
            height={100}
          />

          <Image
            src={LeftEllipse || "/placeholder.svg"}
            alt="Background Left Ellipse"
            className="absolute top-1/2 -translate-y-1/2 left-0 w-auto max-w-xs"
            style={{ height: "auto", width: "auto" }}
            priority
          />
        </div>
      </div>
      <div className="  mx-auto max-w-[1440px] relative  my-20 ">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center my-10 text-24 sm:text-3xl md:text-40 font-semibold bg-text-top-buttom-linear bg-clip-text text-transparent font-display leading-166 tracking-wide"
        >
          Why ZEE Chain?
        </motion.h1>
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
