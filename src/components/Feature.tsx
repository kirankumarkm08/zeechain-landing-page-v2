"use client";

import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import Image from "next/image";
import { features } from "@/constants";

function Features() {
  return (
    <div className="px-3 overflow-hidden sm:p-6 md:p-8  relative   ">
      <Image
        src={"/assets/background-assets/Features_left_bg.svg"}
        alt="background"
        className=" absolute start-0 blur-md"
        width={500}
        height={1000}
      />
      <Image
        src={"/assets/background-assets/hero_left_bg.svg"}
        alt="bg"
        width={500}
        height={1000}
        className="  absolute  rotate-180  top-32 end-0 blur-lg shrink-0"
      />

      <h1 className="text-center  mb-12 text-2xl sm:text-3xl md:text-24 lg:text-40  font-semibold bg-text-top-buttom-linear bg-clip-text text-transparent font-display leading-166  tracking-wide  relative">
        Features of ZEE Chain
      </h1>

      <BentoGrid className=" lg:grid-cols-3 auto-rows-[120px] sm:auto-rows-[120px] md:auto-rows-[170px] gap-3 sm:gap-4 md:gap-6 max-w-[1400px] mx-auto ">
        {features.map((feature, index) => (
          <BentoCard key={feature.name} {...feature} index={index} />
        ))}
      </BentoGrid>
    </div>
  );
}

export default Features;
