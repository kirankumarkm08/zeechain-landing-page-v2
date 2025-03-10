import React from "react";
import Hero from "@/components/Hero";
import Blockchains from "@/components/Blockchains";
import Features from "@/components/Feature";
import Whyzee from "@/components/Whyzee";
import Blog from "@/components/Blog";
import Newsletter from "@/components/Newsletter";

const page = () => {
  return (
    <div className=" ">
      <Hero />
      <Blockchains />
      <Features />
      {/* <Whyzee /> */}
      <Blog />
      <Newsletter />
    </div>
  );
};

export default page;
