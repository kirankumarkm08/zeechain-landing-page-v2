"use client";

import React from "react";
import { useState } from "react";

const CustomButton: React.FC<{ className?: string }> = ({ className }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div>
      <button
        className={`relative overflow-hidden   group rounded-full bg-button_bg   text-white font-semibold text-white-100 transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg  flex justify-center items-center ${className}`}
        onMouseEnter={() => isHovered && setIsHovered(true)}
        onMouseLeave={() => isHovered && setIsHovered(false)}
      >
        <span className="relative inline-block transition-all duration-300 ease-out group-hover:-translate-y-[120%] group-hover:opacity-0">
          Register for Testnet
        </span>
        <span className="absolute left-0 top-0 flex w-full h-full translate-y-[120%] items-center justify-center transition-all duration-500 ease-out group-hover:translate-y-0">
          Coming Soon 🚀
        </span>
      </button>
    </div>
  );
};

export default CustomButton;
