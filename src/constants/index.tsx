import Arrow from "/public/assets/navbar/Arrow.svg";
import {
  NavLinks,
  FooterLinks,
  // Products,
  DropdownItem,
} from "@/types";

export const navLinks: NavLinks[] = [
  {
    label: "Products",
    icon: Arrow,
  },
  {
    label: "Community",
    icon: Arrow,
  },
  {
    label: "Resources",
    icon: Arrow,
  },
];

export const Learn: FooterLinks[] = [
  {
    title: "Vision",
    link: "",
  },
  {
    title: "FAQs",
    link: "",
  },
  {
    title: " Docs",
    link: "",
  },
  {
    title: "Blog",
    link: "",
  },
];

export const ZEE: FooterLinks[] = [
  {
    title: "About",
    link: "",
  },
  {
    title: "ZEE staking",
    link: "",
  },
  {
    title: " Governance",
    link: "",
  },
];

export const Community: FooterLinks[] = [
  {
    title: "Telegram",
    link: "",
    icon: "",
  },
  {
    title: "Twitter",
    link: "",
    icon: "",
  },
  {
    title: "LinkedIn",
    link: "",
    icon: "",
  },
  {
    title: "Community Forum",
    link: "",
    icon: "",
  },
];

export const Product: DropdownItem[] = [
  {
    title: "Exchange",
    description:
      "Bridge assets across chains with zero fee and gasless transactions",
    icon: "/assets/icons/exchange.svg",
    href: "https://app.zeroswap.io/swap",
  },
  {
    title: "Staking",
    description: "Stake to earn rewards and participate in ZeeDAO",
    icon: "/assets/icons/staking.svg",
    href: "https://app.zeroswap.io/staking",
  },
  {
    title: "Bridge",
    description: "Bi-Directional bridge between ZEE tokens on multi-chain",
    icon: "/assets/icons/bridge.svg",
    href: "https://bridge.zeroswap.io/",
  },
  {
    title: "ZeeDo",
    description: "Simple and Fair Dex Token Offering",
    icon: "/assets/icons/zeedo.svg",
    href: "https://zeedo.zeroswap.io/projects",
  },
  {
    title: "Predictions",
    description: "Predict future without losing money",
    icon: "/assets/icons/predictions.svg",
    href: "https://predictions.zeroswap.io/",
  },
  {
    title: "Test Drive",
    description: "Try out our incentivized testnets",
    icon: "/assets/icons/test-drive.svg",
    href: "https://testdrive.zeroswap.io/",
  },
];

export const Resources: DropdownItem[] = [
  {
    title: "Discord",
    description: "Join our community chat",
    icon: "/assets/navbar/discord.svg",
    href: "/discord",
  },
];

export const CommunitySocial: DropdownItem[] = [
  {
    title: "Discord",
    description: "Join our community chat",
    icon: "/assets/navbar/discord.svg",
    href: "/discord",
  },
  {
    title: "Twitter",
    description: "Follow us for updates",
    icon: "/assets/navbar/twitter.svg",
    href: "/twitter",
  },
  {
    title: "Blog",
    description: "Read our latest news",
    icon: "/assets/navbar/blog.svg",
    href: "/blog",
  },
  {
    title: "Forum",
    description: "Discuss with the community",
    icon: "/assets/navbar/forum.svg",
    href: "/forum",
  },
];
