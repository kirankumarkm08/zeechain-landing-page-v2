"use client";

import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import Image from "next/image";
import { features } from "@/constants";

function Features() {
  return (
    <div className="  relative   ">
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

      <h1 className="text-center  mb-12 text-24 sm:text-3xl md:text-24 lg:text-40  font-semibold bg-Section-title-gradient bg-clip-text text-transparent font-display leading-166  tracking-wide  relative">
        Features of ZEE Chain
      </h1>

      <BentoGrid className="grid md:grid-cols-1 lg:grid-cols-3 auto-rows-[120px] sm:auto-rows-[120px] md:auto-rows-[170px] gap-5 sm:gap-4 py-5 md:gap-6 max-w-[1400px] mx-auto px-5 ">
        {features.map((feature, index) => (
          <BentoCard key={feature.name} {...feature} index={index} />
        ))}
      </BentoGrid>
    </div>
  );
}

export default Features;
