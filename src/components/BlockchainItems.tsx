import React from "react";
import Image from "next/image";
import { Blockchain } from "@/types";

const BlockchainItems = ({ chain }: { chain: Blockchain }) => (
  <div className="flex flex-row items-center  justify-center px-4 gap-2 group">
    <div className="relative w-8 h-8 flex-shrink-0">
      <Image
        src={chain.icon}
        alt={`${chain.label} logo`}
        className={`transition-transform hover:scale-110`}
        fill
      />
    </div>
    <p className="text-left text-18 sm:text-base font-semibold bg-text-top-buttom-linear text-transparent bg-clip-text whitespace-nowrap font-inter">
      {chain.label}
    </p>
  </div>
);

export default BlockchainItems;
