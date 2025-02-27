"use client";

import type React from "react";
import Link from "next/link";

interface DropdownItem {
  title: string;
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
    <div className="absolute top-[40px] left-0 bg-black shadow-lg rounded-xl py-4 min-w-[320px] z-50">
      {items.map((item) => (
        <Link
          key={item.title}
          href={item.href}
          target="_blank"
          className="flex flex-col gap-1 px-4 py-3 hover:bg-gray-50"
        >
          <span className="text-gray-900 text-sm font-medium">
            {item.title}
          </span>
          <span className="text-gray-500 text-sm">{item.description}</span>
        </Link>
      ))}
    </div>
  );
};

export default NavDropdown;
