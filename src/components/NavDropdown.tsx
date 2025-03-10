"use client";

import type React from "react";
import Link from "next/link";
import Image from "next/image";
import { NavDropdownProps } from "@/types";

const NavDropdown: React.FC<NavDropdownProps> = ({ items }) => {
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <div className="absolute top-[40px] left-0 bg-navar_bg shadow-lg rounded-xl py-4  w-max  z-50 justify-between items-center">
      {items.map((item) => (
        <Link
          key={item.title}
          href={item.href}
          target="_blank"
          className="flex gap-1 px-4 py-3 hover:bg-gray-500/20 justify-between  max-w-[390px]  "
        >
          <div className="flex gap-5 items-center">
            {item.icon && (
              <Image src={item.icon} alt="icons" width={20} height={20} />
            )}
            <div className="flex flex-col">
              <span className="text-white-50 leading-tight font-inter text-base font-medium">
                {item.title}
              </span>
              <span className="text-white-50/80 leading-tight font-inter text-sm font-light">
                {item.description}
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default NavDropdown;
