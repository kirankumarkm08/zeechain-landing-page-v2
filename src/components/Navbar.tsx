"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { navLinks } from "@/constants";
import MobileNavbar from "./MobileView/MobileNavbar";
import CustomButton from "./Custom-Button";
import ZEE_logo from "/public/assets/ZEE_logo/Zeechain_logo.jpeg";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  // const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const handleMobileView = () => setMenu((prev) => !prev);

  // const toggleDropdown = (title: string) => {
  //   setActiveDropdown(activeDropdown === title ? null : title);
  // };

  // const getDropdownItems = (title: string) => {
  //   const navItem = Product.find((nav) => nav.title === title);
  //   return navItem ? navItem.items : [];
  // };

  return (
    <div className="bg-primary h-[60px] flex justify-between px-10 lg:px-20 items-center fixed w-full z-50 font-inter">
      <Link href="/" className="flex items-center gap-3">
        <Image
          src={ZEE_logo || "/placeholder.svg"}
          alt="logo"
          className="w-[200px] bg-transparent h-[100px]"
        />
        {/* <p className="font-inter leading-[17px] text-white-200">ZEE Chain</p> */}
      </Link>
      <nav className="hidden md:flex gap-[25px]">
        {navLinks.map((nav) => (
          <div key={nav.label} className="relative group">
            <button
              className="text-white-500 flex items-center gap-2"
              // onClick={() => toggleDropdown(nav.label)}
            >
              <h1>{nav.label}</h1>
              <Image src={nav.icon || "/placeholder.svg"} alt={nav.label} />
            </button>
            {/* <div className="absolute invisible group-hover:visible opacity-0 group-hover:opacity-100 top-[40px] left-0 bg-white shadow-lg rounded-xl py-4 min-w-[320px] transition-all duration-200 bg-card_background">
              {getDropdownItems(nav.title)?.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="flex items-start gap-3 px-4 py-3 hover:bg-gray-50"
                >
                  <div className="w-5 h-5 mt-1">
                    <Image
                      src={item.icon || "/placeholder.svg"}
                      alt={item.title}
                      width={20}
                      height={20}
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-gray-900 text-sm font-medium">
                      {item.title}
                    </span>
                    <span className="text-gray-500 text-sm">
                      {item.description}
                    </span>
                  </div>
                </Link>
              ))}
            </div> */}
          </div>
        ))}
      </nav>
      <div className="hidden md:flex">
        <CustomButton />
      </div>
      <div className="md:hidden">
        <Image
          src="/assets/navbar/Mobile_menu.svg"
          alt="menu"
          onClick={handleMobileView}
          width={30}
          height={30}
        />
        {menu && <MobileNavbar />}
      </div>
    </div>
  );
};

export default Navbar;
