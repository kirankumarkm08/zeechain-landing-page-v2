"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Background from "/public/assets/background-assets/Blockchains_bg.svg";
import { motion, useInView } from "framer-motion";
import { Marquee } from "@/components/magicui/marquee";
import { blockchains, lastRowBlockchains } from "@/constants";
import { container, item } from "./Animations/Blockchain_animation";
import BlockchainItems from "./BlockchainItems";

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

  const allBlockchains = [...blockchains, null, ...lastRowBlockchains, null];

  return (
    <section
      ref={ref}
      className="relative py-10 px-4 sm:px-6 md:px-8 lg:px-20  "
    >
      <div className="max-w-[1440px] mx-auto relative  ">
        {" "}
        <Image
          src={Background}
          alt="bg"
          className="absolute blur-lg -top-2/3 start-32 opacity-95 shrink-0 "
        />
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-lightgray to-transparent my-10" />
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center my-10 text-24 sm:text-3xl md:text-40 font-semibold bg-text-top-buttom-linear bg-clip-text text-transparent font-display leading-166 tracking-wide"
        >
          Seamlessly access all Blockchains
        </motion.h1>
        {isMobile ? (
          <Marquee className="py-4">
            {blockchains.map((chain) => (
              <BlockchainItems key={chain.label} chain={chain} />
            ))}
          </Marquee>
        ) : (
          // <div className=""></div>
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="max-w-[1440px] mx-auto"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-8 gap-y-16">
              {allBlockchains.map((chain, index) => {
                // Skip rendering for null items (empty columns in last row)
                if (chain === null) {
                  return (
                    <div
                      key={`empty-${index}`}
                      className="lg:block hidden"
                    ></div>
                  );
                }

                return (
                  <motion.div
                    key={chain.label || `item-${index}`}
                    variants={item}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center space-x-3"
                  >
                    <BlockchainItems chain={chain} />
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-lightgray to-transparent my-16" />
      </div>
    </section>
  );
}
