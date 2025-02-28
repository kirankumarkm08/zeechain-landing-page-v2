import type { NavLink, FooterLinks } from "@/types";
import Arrow_down from "/public/assets/navbar/Arrow-down.svg";

export const navLinks: NavLink[] = [
  {
    label: "Products",
    icon: Arrow_down,
    dropdownItems: [
      {
        icon: "/assets/navbar/Icons/Exchange.svg",
        title: "Exchange ",
        href: "https://app.zeroswap.io/swap",
        description:
          "Bridge assets across chains with zero fee and gasless transactions",
      },
      {
        icon: "/assets/navbar/Icons/Stake.svg",
        title: "Stacking ",
        href: "https://app.zeroswap.io/staking",
        description: "Stake to earn rewards and participate in ZeeDO",
      },
      {
        icon: "/assets/navbar/Icons/Bridge.svg",
        title: "Bridge  ",
        href: "https://app.zeroswap.io/staking",
        description: "Bi-directional bridge between ZEE token on multichain",
      },
      {
        icon: "/assets/navbar/Icons/ZeeDO.svg",
        title: "ZeeDo ",
        href: "https://zeedo.zeroswap.io/",
        description: "Simple anad Fair Dex Token offering",
      },
      {
        icon: "/assets/navbar/Icons/Prediction.svg",
        title: "Predictions ",
        href: "https://predictions.zeroswap.io/",
        description: "Predict future without losing money ",
      },
      {
        icon: "/assets/navbar/Icons/Test_drive.svg",
        title: "test Drive ",
        href: "https://testdrive.zeroswap.io/",
        description: "Try out our Incentivizes testnets",
      },
    ],
  },
  {
    label: "Community",
    icon: Arrow_down,
    dropdownItems: [
      {
        icon: "",
        title: "Telegram",
        href: "https://t.me/zeroswap",
      },
      {
        icon: "",

        title: "Twitter",
        href: "https://twitter.com/ZeroSwapLabs",
      },
      {
        icon: "",
        title: "Discord",
        href: "https://discord.com/invite/nVW9sq9XSQ",
      },
      {
        icon: "",
        title: "Medium",
        href: "https://medium.com/zeroswaplabs",
      },
      {
        icon: "",
        title: "Reddit",
        href: "https://www.reddit.com/r/ZeroSwapLabs/",
      },
    ],
  },
  {
    label: "Recources",
    icon: Arrow_down,
    dropdownItems: [
      {
        title: "",
        href: "",
        description: "Learn about our company",
      },
      {
        title: "",
        href: "",
        description: "",
      },
    ],
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
    link: "https://t.me/zeroswap",
    icon: "",
  },
  {
    title: "Twitter",
    link: "https://twitter.com/ZeroSwapLabs",
    icon: "",
  },
  {
    title: "LinkedIn",
    link: "https://www.linkedin.com/company/zeroswap/",
    icon: "",
  },
  {
    title: "Community Forum",
    link: "",
    icon: "",
  },
];
