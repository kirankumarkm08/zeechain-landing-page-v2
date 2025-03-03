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
