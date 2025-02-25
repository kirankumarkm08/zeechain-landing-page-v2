export interface NavLinks {
  label: string;
  icon: string;
}

export interface FooterLinks {
  title: string;
  link: string;
  icon?: string;
}

// export interface ZEELinks {
//   title: string;
//   link: string;
// }

// export interface CommunityLinks {
//   title: string;
//   link: string;
//   icon: string;
// }

export interface DropdownItem {
  title: string;
  description?: string;
  icon: string;
  href: string;
}

// Define the type for a navigation link
export interface Products {
  label?: string;
  title: string;
  href: string;
  icon: string;
  description: string;
  dropdownItems?: DropdownItem[];
}
