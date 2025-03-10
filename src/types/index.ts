import { StaticImageData } from "next/image";
export interface NavLinks {
  label: string;
  icon: string | StaticImageData;
}

export interface FooterLinks {
  title: string;
  link: string;
  icon?: string | StaticImageData;
}

export interface DropdownItem {
  title: string;
  label?: string;
  href: string;
  description?: string;
  icon?: string | StaticImageData;
}

export interface NavLink {
  label: string;
  icon: string | StaticImageData;
  dropdownItems: DropdownItem[];
}
export interface featuresArray {
  name: string;
  background: string;
  className: string;
  textPosition: "top-left" | "top-right" | "bottom" | "middle";
}

export interface Blockchain {
  icon: string | StaticImageData;
  label: string;
}

export interface Zeechain {
  icon: string;
  label: string;
  description: string;
}

export interface Blog {
  label: string;
  description: string;
  link: string;
  ReadMore: string;
  image: string | StaticImageData;
}

export type DECORATIVE_ELEMENT = {
  src: string;
  alt: string;
  className: string;
  animation: string;
  width: number;
  height: number;
};
