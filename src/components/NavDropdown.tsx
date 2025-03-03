"use client";

import type React from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

interface DropdownItem {
  icon?: string | StaticImageData;
  title: string;
  label?: string;
  href: string;
  description?: string;
}

interface NavDropdownProps {
  items: DropdownItem[];
}

const NavDropdown: React.FC<NavDropdownProps> = ({ items }) => {
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <div className="absolute top-[40px] left-0 bg-[#141414] shadow-lg rounded-xl py-4 min-w-[320px] z-50 justify-between">
      {items.map((item) => (
        <Link
          key={item.title}
          href={item.href}
          target="_blank"
          className="flex flex-col gap-1 px-4 py-3 hover:bg-gray-500/20 justify-between"
        >
          <div className="flex gap-5 items-center justify-center">
            {item.icon ? (
              <Image src={item.icon} alt="" width={24} height={24} />
            ) : (
              <div className="w-6 h-6 bg-gray-500 rounded-full" />
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
