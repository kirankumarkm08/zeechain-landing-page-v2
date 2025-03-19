import type {
  NavLink,
  FooterLinks,
  Blockchain,
  featuresArray,
  Zeechain,
  Blog,
  DECORATIVE_ELEMENT,
} from "@/types";
import Arrow_down from "/public/assets/navbar/Arrow-down.svg";

export const navLinks: NavLink[] = [
  {
    label: "Products",
    icon: Arrow_down,
    dropdownItems: [
      {
        icon: "/assets/navbar/Products/Exchange.svg",
        title: "Exchange ",
        href: "https://app.zeroswap.io/swap",
        description:
          "Bridge assets across chains with zero fee and gasless transactions",
      },
      {
        icon: "/assets/navbar/Products/Stake.svg",
        title: "Stacking ",
        href: "https://app.zeroswap.io/staking",
        description: "Stake to earn rewards and participate in ZeeDO",
      },
      {
        icon: "/assets/navbar/Products/Bridge.svg",
        title: "Bridge  ",
        href: "https://app.zeroswap.io/staking",
        description: "Bi-directional bridge between ZEE token on multichain",
      },
      {
        icon: "/assets/navbar/Products/ZeeDO.svg",
        title: "ZeeDo ",
        href: "https://zeedo.zeroswap.io/",
        description: "Simple anad Fair Dex Token offering",
      },
      {
        icon: "/assets/navbar/Products/Prediction.svg",
        title: "Predictions ",
        href: "https://predictions.zeroswap.io/",
        description: "Predict future without losing money ",
      },
      {
        icon: "/assets/navbar/Products/Test_drive.svg",
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
        icon: "/assets/navbar/Socials/telegram.svg",
        title: "Telegram",
        href: "https://t.me/zeroswap",
      },
      {
        icon: "/assets/navbar/Socials/X.svg",
        title: "Twitter",
        href: "https://twitter.com/ZeroSwapLabs",
      },
      {
        icon: "/assets/navbar/Socials/Discord.svg",
        title: "Discord",
        href: "https://discord.com/invite/nVW9sq9XSQ",
      },
      {
        icon: "/assets/navbar/Socials/Medium.svg",
        title: "Medium",
        href: "https://medium.com/zeroswaplabs",
      },
      {
        icon: "/assets/navbar/Socials/Reddit.svg",
        title: "Reddit",
        href: "https://www.reddit.com/r/ZeroSwapLabs/",
      },
    ],
  },
  {
    label: "Resources",
    icon: Arrow_down,
    dropdownItems: [
      {
        icon: "/assets/navbar/Resources/Tokenomics.svg",
        title: "Tokenomics",
        href: "",
        description:
          "$Zee economic model: distribution, supply, mechanisms and utility",
      },
      {
        icon: "/assets/navbar/Resources/Documents.svg",
        title: "Documentation",
        href: "",
        description: "Comprehensive guide and resources of Zee Chain",
      },
      {
        icon: "/assets/navbar/Resources/BrandHub.svg",
        title: "Brand Hub",
        href: "",
        description: "Zee Chains branding resources",
      },
      {
        icon: "/assets/navbar/Resources/WhitePaper.svg",
        title: "Zee Chain Whitepaper",
        href: "",
        description:
          "Know about zee chain’s foundational principles, architecture and vision ",
      },
      {
        icon: "/assets/navbar/Resources/CommunityHub.svg",
        title: "Zee Chain Community Hub",
        href: "",
        description:
          "A collaborative space for ideas, proposals and community engagement",
      },
      {
        icon: "/assets/navbar/Resources/FAQ.svg",
        title: "FAQs",
        href: "",
        description: "Find answers to platform related queries",
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
    icon: "/assets/Blockchain-logo/Solana.svg",
    label: "Solana",
    link: "https://solana.com/",
  },
  {
    icon: "/assets/Blockchain-logo/Ethereum.svg",
    label: "Ethereum",
    link: "https://ethereum.org/en/",
  },
  {
    icon: "assets/Blockchain-logo/polygon.svg",
    label: "Polygon",
    link: "https://polygon.technology/",
  },
  {
    icon: "/assets/Blockchain-logo/BNB.svg",
    label: "BNB CHAIN",
    link: "https://www.bnbchain.org/en",
  },
  {
    icon: "/assets/Blockchain-logo/base.svg",
    label: "Base",
    link: "https://www.base.org/",
  },
  {
    icon: "/assets/Blockchain-logo/mantle.svg",
    label: "Mantle",
    link: "https://www.mantle.xyz/",
  },
  {
    icon: "/assets/Blockchain-logo/scroll.svg",
    label: "Scroll",
    link: "https://scroll.io/",
  },
  {
    icon: "/assets/Blockchain-logo/Arbitrum.svg",
    label: "Arbitrum",
    link: "https://arbitrum.io/",
  },
  {
    icon: "/assets/Blockchain-logo/OP.svg",
    label: "Optimism",
    link: "https://www.optimism.io/",
  },
  {
    icon: "/assets/Blockchain-logo/linea.svg",
    label: "Linea",
    link: "https://linea.build/",
  },
  {
    icon: "/assets/Blockchain-logo/bitcoin.svg",
    label: "Bitcoin",
    link: "https://bitcoin.org/en/",
  },
  {
    icon: "/assets/Blockchain-logo/Stacks.svg",
    label: "Stacks",
    link: "https://www.stacks.co/",
  },
];
export const lastRowBlockchains: Blockchain[] = [
  {
    icon: "/assets/Blockchain-logo/Citra.svg",
    label: "Citra",
    link: "https://citrea.xyz/",
  },
  {
    icon: "/assets/Blockchain-logo/Thorchain.svg",
    label: "Thor-chain",
    link: "https://thorchain.org/",
  },
  {
    icon: "/assets/Blockchain-logo/avalanche.svg",
    label: "Avalanche",
    link: "https://www.avax.network/",
  },
  {
    icon: "/assets/Blockchain-logo/Manta.svg",
    label: "Manta",
    link: "https://manta.network/",
  },
];

export const featuresData: featuresArray[] = [
  {
    name: "100% Gas-less Protocol",
    background: "/assets/Features/Card1.svg",
    className:
      "col-span-2 lg:col-span-3  row-span-3   col-start-1 lg:col-start-1 lg:col-end-1 lg:row-end-3",
    textPosition: "top-left",
  },
  {
    name: "AI powered personalised learning about DeFi",
    background: "/assets/Features/Card2.svg",
    className:
      "col-span-2 lg:col-span-3  row-span-2 col-start-1  lg:col-start-2 lg:col-end-2 lg:-row-start-2 lg:row-end-2",
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

export const DECORATIVE_ELEMENTS: DECORATIVE_ELEMENT[] = [
  {
    src: "/assets/background-assets/star8.svg",
    alt: "Decorative star",
    className: "absolute top-32 left-44 hidden md:block",
    animation: "star",
    width: 61,
    height: 60,
  },
  {
    src: "/assets/background-assets/star6.svg",
    alt: "Decorative star",
    className: "absolute end-1/4 top-1/2 hidden lg:block",
    animation: "star",
    width: 54,
    height: 49,
  },
  {
    src: "/assets/background-assets/star4.svg",
    alt: "Decorative star",
    className: "absolute end-1/4 top-20 w-[18px] lg:w-auto",
    animation: "star",
    width: 74,
    height: 74,
  },
  {
    src: "/assets/background-assets/star8.svg",
    alt: "Decorative star",
    className: "absolute bottom-10 start-1/2 hidden md:block",
    animation: "star",
    width: 61,
    height: 60,
  },
  {
    src: "/assets/background-assets/Hero_monera-1.svg",
    alt: "Decorative monera",
    className: "absolute top-1/4 start-0 w-[44px] lg:w-auto",
    animation: "float",
    width: 206,
    height: 205,
  },
  {
    src: "/assets/background-assets/Hero_Eth.svg",
    alt: "Ethereum logo",
    className:
      "absolute  start-20 md:start-32 bottom-32 md:bottom-1/4 w-[46px] md:w-auto",
    animation: "float",
    width: 194,
    height: 194,
  },
  {
    src: "/assets/background-assets/Hero_bitcoin.svg",
    alt: "Bitcoin logo",
    className:
      "absolute end-0 top-20 w-[25px] h-[29px] mr-5 md:w-auto md:h-auto",
    animation: "float",
    width: 79,
    height: 107,
  },
  {
    src: "/assets/background-assets/Hero_monera-2.svg",
    alt: "Decorative monera",
    className: "absolute top-2/3 end-1/4 hidden lg:flex",
    animation: "float",
    width: 305,
    height: 306,
  },
  {
    src: "/assets/background-assets/Yellowish_sphere.svg",
    alt: "Yellow sphere",
    className:
      "absolute -start-5 md:start-auto top-1/2 end-20 w-[46px] md:w-auto",
    animation: "float",
    width: 108,
    height: 109,
  },
  {
    src: "/assets/background-assets/Purpleish_sphere.svg",
    alt: "Purple sphere",
    className: "absolute top-2/3 end-5 md:end-32 w-[46px] h-[45px] md:w-auto",
    animation: "float",
    width: 259,
    height: 259,
  },
];
