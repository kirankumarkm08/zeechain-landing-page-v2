"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { IoIosArrowForward } from "react-icons/io";
import CustomButton from "./Register-Btn";
import { heroAnimations } from "@/components/Animations/Hero_Animation";
import { DECORATIVE_ELEMENTS } from "@/constants";

const Hero = () => {
  const {
    containerVariants,
    itemVariants,
    buttonVariants,
    iconContainerVariants,
    iconVariants,
    floatAnimation,
    starAnimation,
  } = heroAnimations;

  return (
    <section className="w-full font-display relative bg-hero_background bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 top-0 pointer-events-none">
        <Image
          src="/assets/background-assets/hero_left_bg.svg"
          alt="Decorative background element"
          className="top-0 start-0 blur-lg"
          width={500}
          height={100}
        />
        {DECORATIVE_ELEMENTS.map((element, index) => (
          <motion.div
            key={index}
            animate={
              element.animation === "star" ? starAnimation : floatAnimation
            }
            className={element.className}
          >
            <Image
              src={element.src}
              alt={element.alt}
              width={element.width}
              height={element.height}
            />
          </motion.div>
        ))}
      </div>

      <motion.div
        className="text-white-200 flex flex-col items-center justify-center min-h-screen relative  z-10 px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.button
          className="group  bg-background_card border-lightgray rounded-full border px-4 py-2 text-white-100 transition-all duration-300 mb-10 font-inter"
          variants={buttonVariants}
          initial="initial"
          whileHover="hover"
          whileTap={{ scale: 0.95 }}
          aria-label="Building since 2020"
        >
          Building since 2020
          <motion.span
            className="absolute right-1 top-1/2 -translate-y-1/2 flex items-center"
            variants={iconContainerVariants}
          >
            <motion.span variants={iconVariants}>
              <IoIosArrowForward />
            </motion.span>
            <motion.span variants={iconVariants}>
              <IoIosArrowForward />
            </motion.span>
          </motion.span>
        </motion.button>

        <motion.h1
          className="font-semibold text-24 md:text-40 xl:text-64 capitalize text-center leading-tight"
          variants={itemVariants}
        >
          A DeFi and AI Fusion L1 Inter Chain{" "}
        </motion.h1>

        <motion.h2
          className="bg-linear-gradient bg-clip-text text-transparent font-semibold text-24 md:text-40 xl:text-64 leading-tight"
          variants={itemVariants}
        >
          built on Cosmos.
        </motion.h2>

        <motion.p
          className="max-w-[648px] flex items-center text-center leading-snug text-14s lg:text-18 text-white-700 font-normal font-inter"
          variants={itemVariants}
        >
          ZeeChain is the First DeFiAI L1 BlockChain fulfilling all your
          On-Chain Aspirations. Experience AI enhanced Swapping, Lending,
          Staking and Intelligent Yield Management.
        </motion.p>

        <motion.div className="mt-10 font-inter" variants={itemVariants}>
          <CustomButton className="px-[24px] py-[16px]" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
