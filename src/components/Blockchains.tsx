"use client";

import { useRef, useEffect, useState } from "react";
import Image, { type StaticImageData } from "next/image";
import Background from "/public/assets/background-assets/Blockchains_bg.svg";
import { motion, useInView } from "framer-motion";
import Colored_solana from "/public/assets/Blockchain-logos/solana_color_logo.png";
import { Marquee } from "@/components/magicui/marquee";

interface Blockchain {
  icon: string | StaticImageData;
  label: string;
  coloredIcon?: StaticImageData;
}

const blockchains: Blockchain[] = [
  {
    icon: "/assets/Blockchain-logos/solana.svg",
    label: "Solana",
    coloredIcon: Colored_solana,
  },
  { icon: "/assets/Blockchain-logos/Ethereum.svg", label: "Ethereum" },
  { icon: "assets/Blockchain-logos/polygon.svg", label: "Polygon" },
  { icon: "/assets/Blockchain-logos/BNB.svg", label: "BNB CHAIN" },
  { icon: "/assets/Blockchain-logos/base.svg", label: "Base" },
  { icon: "/assets/Blockchain-logos/mantle.svg", label: "Mantle" },
  { icon: "/assets/Blockchain-logos/mantle.svg", label: "Scroll" },
  { icon: "/assets/Blockchain-logos/arbitrum.svg", label: "Arbitrum" },
  { icon: "/assets/Blockchain-logos/optimism.svg", label: "Optimism" },
  { icon: "/assets/Blockchain-logos/linea.svg", label: "Linea" },
  { icon: "/assets/Blockchain-logos/bitcoin.svg", label: "Bitcoin" },
  { icon: "/assets/Blockchain-logos/Stacks.svg", label: "Stacks" },
  { icon: "/assets/Blockchain-logos/Citra.svg", label: "Citra" },
  {
    icon: "/assets/Blockchain-logos/Thorchain.svg",
    label: "Thor-chain",
  },
  { icon: "/assets/Blockchain-logos/avalanche.svg", label: "Avalanche" },
  { icon: "/assets/Blockchain-logos/Manta.svg", label: "Manta" },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
};

export default function Blockchains() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => setIsMobile(window.innerWidth < 768);
    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  const BlockchainItem = ({ chain }: { chain: Blockchain }) => (
    <div className="flex flex-row items-center justify-center px-4 gap-2 group">
      <div className="relative w-8 h-8 flex-shrink-0">
        <Image
          src={chain.icon || "/placeholder.svg"}
          alt={`${chain.label} logo`}
          className={`transition-transform group-hover:scale-110 ${
            !chain.coloredIcon && "group-hover:opacity-70"
          }`}
          fill
        />
      </div>
      <p className="text-left text-18 sm:text-base font-semibold bg-text-top-buttom-linear text-transparent bg-clip-text whitespace-nowrap font-inter">
        {chain.label}
      </p>
    </div>
  );

  return (
    <section
      ref={ref}
      className="relative py-20 px-4 sm:px-6 md:px-8 lg:px-20 "
    >
      <Image
        src={Background || "/placeholder.svg"}
        alt="bg"
        className="absolute blur-lg -top-2/3 start-32 opacity-95 shrink-0"
      />
      <div className="max-w-[1440px] mx-auto relative">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-lightgray to-transparent my-10" />

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-12 text-2xl sm:text-3xl md:text-40 font-semibold bg-text-top-buttom-linear bg-clip-text text-transparent font-display leading-166 tracking-wide"
        >
          Seamlessly access all Blockchains
        </motion.h1>

        {isMobile ? (
          <Marquee className="py-4">
            {blockchains.map((chain) => (
              <BlockchainItem key={chain.label} chain={chain} />
            ))}
          </Marquee>
        ) : (
          <motion.div
            variants={container}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-y-8 sm:gap-x-6 sm:gap-y-10 md:gap-8 lg:gap-[40px] max-w-[1440px] mx-auto"
          >
            {blockchains.map((chain) => (
              <motion.div
                key={chain.label}
                variants={item}
                whileHover={{ scale: 1.05 }}
              >
                <BlockchainItem chain={chain} />
              </motion.div>
            ))}
          </motion.div>
        )}

        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-lightgray to-transparent my-16" />
      </div>
    </section>
  );
}
