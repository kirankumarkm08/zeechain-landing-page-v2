"use client";

import { useState } from "react";
import { navLinks } from "@/constants";
import Link from "next/link";
import Image from "next/image";
import CustomButton from "../Register-Btn";

const MobileNavbar = () => {
  const [openDropdowns, setOpenDropdowns] = useState<{
    [key: string]: boolean;
  }>({});

  const toggleDropdown = (label: string) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  return (
    <div className="absolute w-full start-0 h-screen bg-primary overflow-y-auto">
      {navLinks.map((nav) => (
        <div key={nav.label} className="border-b border-lightgra">
          <button
            onClick={() => toggleDropdown(nav.label)}
            className="text-white-100 flex justify-between items-center w-full gap-4 my-5 py-2 px-2"
          >
            <p className="text-white-500">{nav.label}</p>

            <Image
              src={nav.icon || "/placeholder.svg"}
              alt={nav.label}
              width={20}
              height={20}
              className={
                openDropdowns[nav.label]
                  ? "rotate-180 duration-300"
                  : "duration-300"
              }
            />
          </button>
          {openDropdowns[nav.label] && nav.dropdownItems && (
            <div className="pl-4 pb-2">
              {nav.dropdownItems.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="text-white-300  justify-start gap-5 py-2 flex items-center"
                >
                  <Image
                    src={item.icon || "/placeholder.svg"}
                    alt={item.title}
                    width={24}
                    height={24}
                  />
                  {item.title}
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
