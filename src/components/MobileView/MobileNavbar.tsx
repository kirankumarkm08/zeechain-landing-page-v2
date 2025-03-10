"use client";

import React, { useState } from "react";
import { navLinks } from "@/constants";
import Link from "next/link";
import Image from "next/image";
import CustomButton from "../Register-Btn";

const MobileNavbar = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  return (
    <div className="absolute w-full start-0 h-screen bg-primary overflow-y-auto ">
      {navLinks.map((nav) => (
        <div key={nav.label} className="border-b border-lightgray px-10 ">
          <button
            onClick={() => toggleDropdown(nav.label)}
            className="text-white-100 flex justify-between items-center  w-full gap-4 my-5 py-2 px-2"
          >
            <p className="text-white-500">{nav.label}</p>

            <Image
              src={nav.icon || "/placeholder.svg"}
              alt={nav.label}
              width={20}
              height={20}
              className={
                openDropdown === nav.label
                  ? "rotate-180 duration-300"
                  : "duration-300"
              }
            />
          </button>
          {openDropdown === nav.label && nav.dropdownItems && (
            <div className="px-4 py-2 my-2">
              {nav.dropdownItems.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="text-white-300  justify-start gap-5 py-2 flex items-center"
                >
                  <Image
                    src={item.icon || "/placeholder.svg"}
                    alt={item.title}
                    className="w-6 h-6"
                    width={30}
                    height={30}
                  />
                  <div className="">
                    <p>{item.title}</p>
                    <span className="text-white-50/80 leading-tight font-inter text-sm font-light">
                      {item.description}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
      <div className="flex justify-center px-2 py-4">
        <CustomButton className=" min-w-[130px] p-[14px] text-12 gap-8 font-semibold leading-none tracking-[0.24px]" />
      </div>
    </div>
  );
};

export default MobileNavbar;
