"use client";

import { useState } from "react";

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="w-8 h-8 flex flex-col justify-center items-center group  rounded-md p-1"
      aria-label={isOpen ? "Close menu" : "Open menu"}
    >
      <span
        className={`block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm bg-gray-300 group-hover:bg-white ${
                      isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
                    }`}
      />
      <span
        className={`block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm my-0.5 bg-gray-300 group-hover:bg-white ${
                      isOpen ? "opacity-0" : "opacity-100"
                    }`}
      />
      <span
        className={`block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm bg-gray-300 group-hover:bg-white ${
                      isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
                    }`}
      />
    </button>
  );
}
