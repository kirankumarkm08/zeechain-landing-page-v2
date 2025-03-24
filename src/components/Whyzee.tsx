"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation, type AnimationControls } from "framer-motion";
import { useInView } from "react-intersection-observer";
import LeftEllipse from "/public/assets/background-assets/left_Ellipse.svg";
import { zeechain } from "@/constants";
import { cardVariants } from "./Animations/Why_zee";
import { Zeechain } from "@/types";

// Constants
const ANIMATION_CONFIG = {
  title: {
    initial: { opacity: 0, y: -20 },
    transition: { duration: 0.6, delay: 0.2 },
  },
  inView: {
    triggerOnce: true,
    threshold: 0.1,
  },
} as const;

interface CardProps {
  data: Zeechain;
  index: number;
  controls: AnimationControls;
}

const BackgroundDecorations = () => (
  <div className="absolute inset-0 pointer-events-none">
    <div className="relative w-full h-full">
      <Image
        src={LeftEllipse}
        alt="Decorative ellipse"
        className="absolute top-1/2 left-0 w-auto h-auto max-w-xs"
        priority
      />
      <Image
        src={"/assets/background-assets/bg-gradient-img.svg"}
        alt="bg"
        width={100}
        height={100}
        className="w-auto h-auto absolute left-1/2 top-1/2 transform -translate-x-1/2 -z-10 -translate-y-1/2 blur-lg"
      />
    </div>
  </div>
);

const ZeeChainCard = ({ data, index, controls }: CardProps) => (
  <motion.div
    key={data.label}
    className="w-full max-w-[580px] h-full bg-black border border-pink-400 rounded-3xl p-8 backdrop-blur-xl transition-transform hover:scale-[1.02]"
    variants={cardVariants}
    initial="hidden"
    animate={controls}
    custom={index}
  >
    <Image
      src={data.icon}
      alt={`${data.label} icon`}
      width={100}
      height={100}
      className="-ml-4"
    />
    <h2 className="text-[32px] text-white-500 font-semibold font-display leading-[41px] tracking-tight">
      {data.label}
    </h2>
    <p className="mt-2 text-[14px] text-white-700 font-normal font-inter leading-[22px]">
      {data.description}
    </p>
  </motion.div>
);

const WhyZeeChain = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView(ANIMATION_CONFIG.inView);

  useEffect(() => {
    if (inView) {
      controls.start("visible").catch(console.error);
    }
  }, [controls, inView]);

  return (
    <section className="relative my-5" aria-labelledby="why-zeechain-title">
      <BackgroundDecorations />

      <div className="mx-auto max-w-[1440px]  my-20 py-10">
        <motion.h1
          id="why-zeechain-title"
          initial={ANIMATION_CONFIG.title.initial}
          animate={
            inView ? { opacity: 1, y: 0 } : ANIMATION_CONFIG.title.initial
          }
          transition={ANIMATION_CONFIG.title.transition}
          className="text-center my-10 text-[24px] sm:text-3xl md:text-[40px] font-semibold bg-text-top-buttom-linear bg-clip-text text-transparent font-display leading-[1.66] tracking-wide"
        >
          Why ZEE Chain?
        </motion.h1>

        <div
          ref={ref}
          className="grid lg:grid-cols-2 gap-10 mx-5 md:mx-32 justify-center relative"
        >
          {zeechain.map((item, index) => (
            <ZeeChainCard
              key={item.label}
              data={item}
              index={index}
              controls={controls}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyZeeChain;
