"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { navLinks } from "@/constants";
import MobileNavbar from "./MobileView/MobileNavbar";
import CustomButton from "./Register-Btn";
import NavDropdown from "./NavDropdown";
import HamburgerMenu from "./MobileView/Hamburger_menu";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleMobileView = () => setMenu((prev) => !prev);

  const toggleDropdown = (title: string) => {
    setActiveDropdown(activeDropdown === title ? null : title);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setActiveDropdown(null);
      }
    };

    if (activeDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [activeDropdown]);

  return (
    <div className=" fixed w-full  z-50 font-inter bg-card_background">
      <div className="max-w-[1440px] mx-auto flex justify-between  items-center  h-[60px] px-5 ">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/assets/zeechain-logo.svg"
            alt="logo"
            width={200}
            height={100}
            className="bg-transparent"
          />
        </Link>
        <nav className="hidden md:flex gap-[25px]" ref={dropdownRef}>
          {navLinks.map((nav) => (
            <div key={nav.label} className="relative group">
              <button
                className="text-white-500 flex items-center justify-center gap-2 text-14 font-inter font-medium leading-loose transition-all duration-300"
                onClick={() => toggleDropdown(nav.label)}
              >
                {nav.label}
                <Image
                  src={nav.icon || "/placeholder.svg"}
                  alt={nav.label}
                  width={7}
                  height={4}
                  className={
                    activeDropdown === nav.label
                      ? "rotate-180 duration-200"
                      : "duration-200"
                  }
                />
              </button>
              {activeDropdown === nav.label && nav.dropdownItems && (
                <NavDropdown items={nav.dropdownItems} />
              )}
            </div>
          ))}
        </nav>
        <div className="hidden md:flex">
          <CustomButton className="min-w-[130px] p-[14px] text-12 gap-8 font-semibold leading-none tracking-[0.24px]" />
        </div>
        <div className="md:hidden" onClick={handleMobileView}>
          <HamburgerMenu />
        </div>{" "}
        {menu && <MobileNavbar />}
      </div>
    </div>
  );
};

export default Navbar;
