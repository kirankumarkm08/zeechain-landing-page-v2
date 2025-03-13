"use client";

import type React from "react";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import type { NavDropdownProps } from "@/types";

const NavDropdown: React.FC<NavDropdownProps> = ({ items }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Set a small timeout to ensure the component is fully rendered before animating
    const timer = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(timer);
  }, []);

  if (!items || items.length === 0) {
    return null;
  }

  return (
    <div
      className={`absolute top-[40px]  bg-navar_bg shadow-lg rounded-xl py-4 w-max z-50 justify-between items-center transition-all duration-300 ease-out
        ${mounted ? "opacity-100 translate-x-0" : "opacity-0 -translate-y-4"}`}
    >
      {items.map((item, index) => (
        <Link
          key={item.title}
          href={item.href}
          target="_blank"
          className={`flex    gap-y-1 px-4 py-3 hover:bg-gray-500/20 justify-between max-w-[390px] transition-all duration-300 ease-out
            ${
              mounted ? "opacity-100 translate-y-0 " : "opacity-0 translate-y-4"
            }`}
          style={{
            transitionDelay: `${index * 50}ms`,
          }}
        >
          <div className="flex gap-5 items-center  ">
            {item.icon && (
              <Image
                src={item.icon}
                alt="icons"
                width={30}
                height={30}
                className="w-auto  h-auto  "
              />
            )}
            <div className="flex flex-col leading-tight font-inter text-base font-medium">
              <span className={`text-white-50 `}>{item.title}</span>
              <span className="text-white-800 ">{item.description}</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default NavDropdown;
