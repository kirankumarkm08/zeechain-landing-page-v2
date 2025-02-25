"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { IoIosArrowForward } from "react-icons/io";
import CustomButton from "./Custom-Button";
import Leftside_Bg from "/public/assets/background-assets/hero_left_bg.svg";
import Menora_1 from "/public/assets/background-assets/Hero_monera-1.svg";
import Menora_2 from "/public/assets/background-assets/Hero_monera-2.svg";
import Eth from "/public/assets/background-assets/Hero_Eth.svg";
import Bitcoin from "/public/assets/background-assets/Hero_bitcoin.svg";
import yellowish_sphere from "/public/assets/background-assets/Yellowish_sphere.svg";
import Purplish_Sphare from "/public/assets/background-assets/Purpleish_sphere.svg";
import Ellipse1 from "/public/assets/background-assets/Ellipse1.svg";
import Ellipse3 from "/public/assets/background-assets/Ellipse3.svg";
import Ellipse2 from "/public/assets/background-assets/Ellipse2.svg";
import Star8 from "/public/assets/background-assets/star8.svg";
import Star6 from "/public/assets/background-assets/star6.svg";
import Star4 from "/public/assets/background-assets/star4.svg";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const buttonVariants = {
    initial: {
      paddingRight: "1rem",
    },
    hover: {
      paddingRight: "2.5rem",
      transition: {
        duration: 0.3,
      },
    },
  };

  const iconContainerVariants = {
    initial: { opacity: 0 },
    hover: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const iconVariants = {
    initial: { opacity: 0, x: -10 },
    hover: { opacity: 1, x: 2 },
  };

  const floatAnimation = {
    y: [0, -20, 0],
    transition: {
      duration: 5,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut",
    },
  };

  const starAnimation = {
    scale: [1, 1.2, 1],
    opacity: [0.7, 1, 0.7],
    transition: {
      duration: 3,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut",
    },
  };

  const ellipseAnimation = {
    scale: [1, 1.05, 1],
    opacity: [0.8, 1, 0.8],
    transition: {
      duration: 10,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut",
    },
  };

  return (
    <section className="w-full font-display relative min-h-screen">
      <div className="absolute inset-0 pointer-events-none ">
        <Image
          src={"/assets/background-assets/hero_left_bg.svg"}
          alt="Decorative background element"
          className="top-0 start-0 blur-lg"
          width={500}
          height={100}
        />
        <motion.div
          animate={ellipseAnimation}
          className="absolute top-1/3 start-1/4 w-[10%] md:w-auto"
        >
          <Image
            src={Ellipse1 || "/placeholder.svg"}
            alt=""
            className="w-full h-auto"
          />
        </motion.div>
        <motion.div
          animate={ellipseAnimation}
          className="absolute top-32 start-32 w-[15%] md:w-auto"
        >
          <Image
            src={Ellipse2 || "/placeholder.svg"}
            alt=""
            className="w-full h-auto"
          />
        </motion.div>
        <motion.div
          animate={ellipseAnimation}
          className="absolute rotate-[14deg] shrink-0 top-10 w-[20%] md:w-auto"
        >
          <Image
            src={Ellipse3 || "/placeholder.svg"}
            alt=""
            className="w-full h-auto"
          />
        </motion.div>
        <motion.div
          animate={starAnimation}
          className="absolute top-32 start-44"
        >
          <Image src={Star8 || "/placeholder.svg"} alt="" />
        </motion.div>
        <motion.div
          animate={starAnimation}
          className="absolute end-1/4 top-1/2"
        >
          <Image src={Star6 || "/placeholder.svg"} alt="" />
        </motion.div>
        <motion.div animate={starAnimation} className="absolute end-1/4 top-20">
          <Image src={Star4 || "/placeholder.svg"} alt="" />
        </motion.div>
        <motion.div
          animate={starAnimation}
          className="absolute bottom-10 start-1/2"
        >
          <Image src={Star8 || "/placeholder.svg"} alt="" />
        </motion.div>
        <motion.div
          animate={floatAnimation}
          className="absolute top-1/4 start-0"
        >
          <Image
            src={Menora_1 || "/placeholder.svg"}
            alt="Decorative element"
            width={100}
            height={100}
          />
        </motion.div>
        <motion.div
          animate={floatAnimation}
          className="absolute bottom-0 start-32 hidden lg:flex"
        >
          <Image src={Eth || "/placeholder.svg"} alt="Ethereum logo" />
        </motion.div>
        <motion.div className="absolute end-0 top-20" animate={floatAnimation}>
          <Image src={Bitcoin || "/placeholder.svg"} alt="Bitcoin logo" />
        </motion.div>
        <motion.div
          animate={floatAnimation}
          className="absolute top-2/3 end-1/4 hidden lg:flex"
        >
          <Image
            src={Menora_2 || "/placeholder.svg"}
            alt="Decorative element"
          />
        </motion.div>
        <motion.div
          animate={floatAnimation}
          className="absolute top-1/2 end-20"
        >
          <Image
            src={yellowish_sphere || "/placeholder.svg"}
            alt="Yellow sphere"
          />
        </motion.div>
        <motion.div
          animate={floatAnimation}
          className="absolute top-2/3 end-32"
        >
          <Image
            src={Purplish_Sphare || "/placeholder.svg"}
            alt="Purple sphere"
          />
        </motion.div>
      </div>

      <motion.div
        className="text-white-200 flex flex-col items-center justify-center min-h-screen relative z-10 px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.button
          className="group relative bg-card_background border-lightgray rounded-full border px-4 py-2 text-white-100 transition-all duration-300 mb-10 font-inter"
          variants={buttonVariants}
          initial="initial"
          whileHover="hover"
          whileTap={{ scale: 0.95 }}
          aria-label="Building since 2020"
        >
          Building since 2020
          <motion.span
            className="absolute right-1  top-1/2 -translate-y-1/2 flex items-center space-x-1"
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
          className="font-semibold text-[24px] xl:text-[64px] capitalize text-center leading-tight"
          variants={itemVariants}
        >
          A DeFi and AI Fusion L1 Inter Chain{" "}
        </motion.h1>
        <motion.h2
          className="bg-linear-gradient bg-clip-text text-transparent font-semibold text-20 xl:text-64 leading-tight"
          variants={itemVariants}
        >
          built on Cosmos.
        </motion.h2>
        <motion.p
          className="max-w-[550px] flex items-center text-center leading-snug text-12  lg:text-18 text-white-700 font-light font-inter"
          variants={itemVariants}
        >
          ZeeChain is the First DeFiAI L1 BlockChain fulfilling all your
          On-Chain Aspirations. Experience AI enhanced Swapping, Lending,
          Staking and Intelligent Yield Management.
        </motion.p>
        <motion.div className="mt-10 font-inter " variants={itemVariants}>
          <CustomButton />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
