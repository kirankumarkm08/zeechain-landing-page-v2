"use client";

import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import Image from "next/image";
// import { featuresData } from "@/constants";
import { motion, useInView } from "framer-motion";
import { featuresArray } from "@/types";
import { useRef } from "react";

function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const featuresData: featuresArray[] = [
    {
      name: "100% Gas-less Protocol",
      background: "/assets/Features/Card1.svg",
      className:
        "col-span-3 lg:col-span-3  row-span-3   col-start-1 lg:col-start-1 lg:col-end-1 lg:row-end-3",
      textPosition: "top-left",
    },
    {
      name: "AI powered personalised learning about DeFi",
      background: "/assets/Features/Card2.svg",
      className:
        " col-span-3 lg:col-span-2 lg:col-span-3  row-span-2 col-start-1  lg:col-start-2 lg:col-end-2 lg:-row-start-2 lg:row-end-2",
      textPosition: "bottom",
    },
    {
      name: "Smarter Yield Optimization",
      background: "/assets/Features/Card3.svg",
      className:
        "col-span-2 md:col-span-3  row-span-1 col-start-1 row-span-4 lg:col-start-3  lg:col-end-3 lg:-row-start-2 lg:row-end-3",
      textPosition: "top-left",
    },
    {
      name: "Predictive Market Analytics",
      background: "/assets/Features/Card6.svg",
      className:
        " col-span-2 md:col-span-3  row-span-3 lg:col-start-1 lg:col-end-2 lg:row-start-3",
      textPosition: "top-left",
    },
    {
      name: "AI Managed Interoperability",
      background: "/assets/Features/Card4.svg",
      className:
        "col-span-2 md:col-span-3 row-span-3 lg:col-start-2 lg:col-end-2 lg:row-start-4 lg:row-end-2",
      textPosition: "top-left",
    },
    {
      name: "AI Driven Trading Bots",
      background: "/assets/Features/Card5.svg",
      className:
        " col-span-2 md:col-span-3   row-span-2 lg:col-start-3 lg:col-end-4 lg:row-start-3 lg:row-end-3",
      textPosition: "middle",
    },
    {
      name: "AI Powered DAO Governance",
      background: "/assets/Features/Card7.svg",
      className:
        "col-span-2 md:col-span-3 row-span-3  lg:col-start-2 lg:col-end-3 lg:row-start-6 lg:row-end-4",
      textPosition: "top-left",
    },
    {
      name: "Cross Chain Liquidity Hub",
      background: "/assets/Features/Card8.svg",
      className:
        "col-span-2 md:col-span-3 row-span-3 lg:col-start-3 lg:col-end-4 lg:row-start-4 lg:row-end-6",
      textPosition: "bottom",
    },
  ];

  return (
    <div className="relative">
      <Image
        src={"/assets/background-assets/Features_left_bg.svg"}
        alt="background"
        className="absolute start-0 blur-md w-auto h-auto"
        width={100}
        height={100}
      />
      <Image
        src={"public/assets/background-assets/Hero_left_bg.svg"}
        alt="bg"
        width={100}
        height={100}
        className="absolute rotate-180 top-32 end-0 blur-lg shrink-0 w-auto h-auto"
      />

      {/* <h1 className="text-center mb-12 text-2xl md:text-2xl lg:text-4xl font-semibold bg-Section-title-gradient bg-clip-text text-transparent font-display leading-tight tracking-wide relative">
        Features of ZEE Chain
      </h1> */}

      <motion.h1
        ref={ref}
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-center my-10 text-24 sm:text-3xl md:text-40 font-semibold bg-text-top-buttom-linear bg-clip-text text-transparent font-display leading-166 tracking-wide"
      >
        Seamlessly access all Blockchains
      </motion.h1>

      <BentoGrid className="grid grid-cols-2 lg:grid-cols-3 auto-rows-[120px] sm:auto-rows-[120px] md:auto-rows-[170px] gap-5 sm:gap-4 py-5 md:gap-6 max-w-[1400px] mx-auto px-5">
        {featuresData.map((feature, index) => (
          <BentoCard key={feature.name} {...feature} index={index} />
        ))}
      </BentoGrid>
    </div>
  );
}

export default Features;
