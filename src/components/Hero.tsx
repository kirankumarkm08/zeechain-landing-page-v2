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

  // const DECORATIVE_ELEMENTS = [
  //   {
  //     src: "/assets/background-assets/star8.svg",
  //     alt: "Decorative star",
  //     className: "absolute top-32 left-44 hidden md:block",
  //     animation: "star",
  //     width: 61,
  //     height: 60,
  //   },
  //   {
  //     src: "/assets/background-assets/star6.svg",
  //     alt: "Decorative star",
  //     className: "absolute end-1/4 top-1/2 hidden lg:block",
  //     animation: "star",
  //     width: 54,
  //     height: 49,
  //   },
  //   {
  //     src: "/assets/background-assets/star4.svg",
  //     alt: "Decorative star",
  //     className: "absolute end-1/4 top-20 w-[18px] lg:w-auto",
  //     animation: "star",
  //     width: 74,
  //     height: 74,
  //   },
  //   {
  //     src: "/assets/background-assets/star8.svg",
  //     alt: "Decorative star",
  //     className: "absolute bottom-10 start-1/2 hidden md:block",
  //     animation: "star",
  //     width: 61,
  //     height: 60,
  //   },
  //   {
  //     src: "/assets/background-assets/Hero_monera-1.svg",
  //     alt: "Decorative monera",
  //     className: "absolute top-1/4 start-0 w-[44px] lg:w-auto",
  //     animation: "float",
  //     width: 206,
  //     height: 205,
  //   },
  //   {
  //     src: "/assets/background-assets/Hero_Eth.svg",
  //     alt: "Ethereum logo",
  //     className:
  //       "absolute  start-20 md:start-32 bottom-32 md:bottom-1/4 w-[46px] md:w-auto",
  //     animation: "float",
  //     width: 194,
  //     height: 194,
  //   },
  //   {
  //     src: "/assets/background-assets/Hero_bitcoin.svg",
  //     alt: "Bitcoin logo",
  //     className:
  //       "absolute end-0 top-20 w-[25px] h-[29px] mr-5 md:w-auto md:h-auto",
  //     animation: "float",
  //     width: 79,
  //     height: 107,
  //   },
  //   {
  //     src: "/assets/background-assets/Hero_monera-2.svg",
  //     alt: "Decorative monera",
  //     className: "absolute top-2/3 end-1/4 hidden lg:flex",
  //     animation: "float",
  //     width: 305,
  //     height: 306,
  //   },
  //   {
  //     src: "/assets/background-assets/Yellowish_sphere.svg",
  //     alt: "Yellow sphere",
  //     className:
  //       "absolute -start-5 md:start-auto top-1/2 end-20 w-[46px] md:w-auto",
  //     animation: "float",
  //     width: 108,
  //     height: 109,
  //   },
  //   {
  //     src: "/assets/background-assets/Purpleish_sphere.svg",
  //     alt: "Purple sphere",
  //     className: "absolute top-2/3 end-5 md:end-32 w-[46px] h-[45px] md:w-auto",
  //     animation: "float",
  //     width: 259,
  //     height: 259,
  //   },
  // ];

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
