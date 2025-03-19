import React from "react";
import Image from "next/image";
import { Blockchain } from "@/types";
import Link from "next/link";

const BlockchainItems = ({ chain }: { chain: Blockchain }) => (
  <div className="flex flex-row items-center  justify-center transition-transform hover:scale-110 px-4 gap-2 group">
    <Link href={chain.link} className="relative  flex-shrink-0">
      <Image
        src={chain.icon}
        alt={`${chain.label} logo`}
        className={`w-auto h-auto`}
        width={100}
        height={100}
        priority
      />
    </Link>
    {/* <p className="text-left text-18 sm:text-base font-semibold bg-text-top-buttom-linear text-transparent bg-clip-text whitespace-nowrap font-inter">
      {chain.label}
    </p> */}
  </div>
);

export default BlockchainItems;
