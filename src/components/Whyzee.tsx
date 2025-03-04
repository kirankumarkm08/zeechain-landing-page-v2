"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Left_ellipse from "/public/assets/background-assets/left_Ellipse.svg";
import Ellipse from "/public/assets/background-assets/Eclipse.svg";
import Rectangle from "/public/assets/background-assets/Rectangle.svg";

interface Zeechain {
  icon: string;
  label: string;
  description: string;
}

const zeechain: Zeechain[] = [
  {
    icon: "/assets/why_zee/Defi.svg",
    label: "DeFiAI will on-board billions on DeFi",
    description:
      "ZeeChain's AI-powered infrastructure is designed to break down barriers and make decentralized finance accessible to everyone. By integrating AI-driven automation, gasless transactions, and seamless cross-chain aggregation, DeFiAI will onboard the next billion users into Web3.",
  },
  {
    icon: "/assets/why_zee/build.svg",
    label: "Building since 2020",
    description:
      "From pioneering aggregation solutions to evolving into a Cosmos-based Layer-1, we've been relentlessly innovating since 2020. ZeeChain is the next step in our journey—scalable, AI-powered, and built for the future of decentralized finance.",
  },
  {
    icon: "/assets/why_zee/values.svg",
    label: "Values",
    description:
      "ZeeChain is built on the principles of scalability, interoperability, AI-driven innovation, and user empowerment. We believe in a frictionless, decentralized future, where seamless cross-chain aggregation, gasless transactions, and community governance redefine the Web3 experience.",
  },
  {
    icon: "/assets/why_zee/zee-tech.svg",
    label: "ZEE Chain Technology",
    description:
      "Powered by Cosmos SDK, ZeeChain combines AI-driven automation, cross-chain interoperability, and modular scalability to create a seamless Web3 experience. With gasless transactions, decentralized governance, and high-performance aggregation, ZeeChain is the next evolution of blockchain infrastructure",
  },
];

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

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
      },
    }),
  };

  return (
    <div className="relative">
      <Image src={Ellipse} alt="" className=" absolute  left-1/4 -top-10" />
      <Image
        src={Rectangle}
        alt=""
        className=" absolute blur-lg left-1/4 -top-10 "
      />
      <Image
        src={Left_ellipse}
        alt="bg"
        className="absolute  top-1/2 start-0 "
      />
      <div className=" py-20 px-4 mx-auto max-w-[1440px] relative">
        <h1 className="text-center mb-12 text-20 md:text-40 font-semibold bg-text-top-buttom-linear bg-clip-text text-transparent font-display leading-166 tracking-wide">
          Why ZEE Chain?
        </h1>
        <div
          className="grid md:grid-cols-1 lg:grid-cols-2 gap-14 place-items-center md:mx-20 -z-10 "
          ref={ref}
        >
          {zeechain.map((data, index) => (
            <motion.div
              key={data.label}
              className="w-full max-w-[580px] h-full bg-black border border-pink-400 rounded-3xl p-8 backdrop-blur-xl"
              variants={cardVariants}
              initial="hidden"
              animate={controls}
              custom={index}
            >
              <Image
                src={data.icon || "/placeholder.svg"}
                alt=""
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
      </div>{" "}
    </div>
  );
};

export default Whyzee;
