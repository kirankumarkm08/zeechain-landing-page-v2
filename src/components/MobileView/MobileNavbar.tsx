import React from "react";
import { navLinks } from "@/constants";
import Link from "next/link";
import Image from "next/image";
import CustomButton from "../Custom-Button";

const MobileNavbar = () => {
  return (
    <div className="absolute   justify-center items-center   w-full start-0 h-[7800px]   bg-primary">
      {navLinks.map((navs) => (
        <Link
          key={navs.label}
          href={""}
          className="text-white-100 flex  gap-4 border-b border-lightgra  my-5 py-2  px-2     "
        >
          <p className="text-white-500 ">{navs.label}</p>
          <Image src={navs.icon} alt={navs.label} />
        </Link>
      ))}
      <CustomButton />
    </div>
  );
};

export default MobileNavbar;
