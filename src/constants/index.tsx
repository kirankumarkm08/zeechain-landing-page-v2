import type {
  NavLink,
  FooterLinks,
  Blockchain,
  featuresArray,
  Zeechain,
  Blog,
} from "@/types";
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

export const blockchains: Blockchain[] = [
  {
    icon: "/assets/Blockchain-logos/solana.svg",
    label: "Solana",
  },
  { icon: "/assets/Blockchain-logos/Ethereum.svg", label: "Ethereum" },
  { icon: "assets/Blockchain-logos/polygon.svg", label: "Polygon" },
  { icon: "/assets/Blockchain-logos/BNB.svg", label: "BNB CHAIN" },
  { icon: "/assets/Blockchain-logos/base.svg", label: "Base" },
  { icon: "/assets/Blockchain-logos/mantle.svg", label: "Mantle" },
  { icon: "/assets/Blockchain-logos/mantle.svg", label: "Scroll" },
  { icon: "/assets/Blockchain-logos/arbitrum.svg", label: "Arbitrum" },
  { icon: "/assets/Blockchain-logos/optimism.svg", label: "Optimism" },
  { icon: "/assets/Blockchain-logos/linea.svg", label: "Linea" },
  { icon: "/assets/Blockchain-logos/bitcoin.svg", label: "Bitcoin" },
  { icon: "/assets/Blockchain-logos/Stacks.svg", label: "Stacks" },
  { icon: "/assets/Blockchain-logos/Citra.svg", label: "Citra" },
  {
    icon: "/assets/Blockchain-logos/Thorchain.svg",
    label: "Thor-chain",
  },
  { icon: "/assets/Blockchain-logos/avalanche.svg", label: "Avalanche" },
  { icon: "/assets/Blockchain-logos/Manta.svg", label: "Manta" },
];

export const features: featuresArray[] = [
  {
    name: "100% Gas-less Protocol",
    background: "/assets/Features/Card1.svg",
    className:
      "col-span-2 md:col-span-3  row-span-3   col-start-1 lg:col-start-1 lg:col-end-1 lg:row-end-3",
    textPosition: "top-left",
  },
  {
    name: "AI powered personalised learning about DeFi",
    background: "/assets/Features/Card2.svg",
    className:
      "col-span-2 md:col-span-3  row-span-2 col-start-1  lg:col-start-2 lg:col-end-2 lg:-row-start-2 lg:row-end-",
    textPosition: "bottom",
  },
  {
    name: "Smarter Yield Optimization",
    background: "/assets/Features/Card3.svg",
    className:
      "col-span-2 md:col-span-3  row-span-1 col-start-1 row-span-4 lg:col-start-3  lg:col-end-3 lg:-row-start-2 lg:row-end-3",
    textPosition: "top-left",
  },
  {
    name: "Predictive Market Analytics",
    background: "/assets/Features/Card6.svg",
    className:
      " col-span-2 md:col-span-3  row-span-3 lg:col-start-1 lg:col-end-2 lg:row-start-3",
    textPosition: "top-left",
  },
  {
    name: "AI Managed Interoperability",
    background: "/assets/Features/Card4.svg",
    className:
      "col-span-2 md:col-span-3 row-span-3 lg:col-start-2 lg:col-end-2 lg:row-start-4 lg:row-end-2",
    textPosition: "top-left",
  },
  {
    name: "AI Driven Trading Bots",
    background: "/assets/Features/Card5.svg",
    className:
      " col-span-2 md:col-span-3   row-span-2 lg:col-start-3 lg:col-end-4 lg:row-start-3 lg:row-end-3",
    textPosition: "middle",
  },
  {
    name: "AI Powered DAO Governance",
    background: "/assets/Features/Card7.svg",
    className:
      "col-span-2 md:col-span-3 row-span-3  lg:col-start-2 lg:col-end-3 lg:row-start-6 lg:row-end-4",
    textPosition: "top-left",
  },
  {
    name: "Cross Chain Liquidity Hub",
    background: "/assets/Features/Card8.svg",
    className:
      "col-span-2 md:col-span-3 row-span-3 lg:col-start-3 lg:col-end-4 lg:row-start-4 lg:row-end-6",
    textPosition: "bottom",
  },
];

export const zeechain: Zeechain[] = [
  {
    icon: "/assets/why_zee/Defi.svg",
    label: "DeFiAI will on-board billions on DeFi",
    description:
      "ZeeChain's AI-powered infrastructure is designed to break down barriers and make decentralized finance accessible to everyone. By integrating AI-driven automation, gasless transactions, and seamless cross-chain aggregation, DeFiAI will onboard the next billion users into Web3.",
  },
  {
    icon: "/assets/why_zee/build.svg",
    label: "Building since 2020",
    description:
      "From pioneering aggregation solutions to evolving into a Cosmos-based Layer-1, we've been relentlessly innovating since 2020. ZeeChain is the next step in our journey—scalable, AI-powered, and built for the future of decentralized finance.",
  },
  {
    icon: "/assets/why_zee/values.svg",
    label: "Values",
    description:
      "ZeeChain is built on the principles of scalability, interoperability, AI-driven innovation, and user empowerment. We believe in a frictionless, decentralized future, where seamless cross-chain aggregation, gasless transactions, and community governance redefine the Web3 experience.",
  },
  {
    icon: "/assets/why_zee/zee-tech.svg",
    label: "ZEE Chain Technology",
    description:
      "Powered by Cosmos SDK, ZeeChain combines AI-driven automation, cross-chain interoperability, and modular scalability to create a seamless Web3 experience. With gasless transactions, decentralized governance, and high-performance aggregation, ZeeChain is the next evolution of blockchain infrastructure",
  },
];

export const Blogs: Blog[] = [
  {
    label: "How to participate in Governance of ZeeChain",
    image: "/assets/Blog/Participite.svg",
    description:
      "Be a part of ZeeChain's future! Vote on proposals, stake your tokens, and contribute to key decisions that shape the ecosystem. Join the governance and make your voice heard.",
    link: "https://kiran-kumar-km.ghost.io/ghost/#/site",
    ReadMore: "Read more",
  },
  {
    label: "When is the Testnet arriving for ZeeChain",
    image: "/assets/Blog/When_test-net.svg",
    description:
      "Get ready to experience ZeeChain! The testnet launch is just around the corner, bringing early access to developers and users. Stay tuned for updates and launch details.",
    link: "",
    ReadMore: "Read more",
  },
  {
    label: "How to use ZeeChain Testnet",
    image: "/assets/Blog/How_test_net.svg",
    description:
      "Explore ZeeChain's features risk-free on the testnet. Learn how to set up your wallet, deploy smart contracts, and interact with DeFiAI-powered services before the mainnet launch.",
    link: "",
    ReadMore: "Read more",
  },
];
