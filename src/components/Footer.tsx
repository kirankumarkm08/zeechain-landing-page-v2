import Image from "next/image";
import Link from "next/link";
import { Learn, ZEE, Community } from "@/constants";
import Logo from "/public/assets/ZEEchain_logo/Footer_logo.svg";

const FooterSection = ({
  title,
  items,
}: {
  title: string;
  items: { title: string; link: string }[];
}) => (
  <div>
    <h3 className="text-24 font-semibold mb-4 text-white-100 font-display">
      {title}
    </h3>
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item.title}>
          <Link
            href={item.link}
            className="hover:text-white-200 capitalize text-white-800 font-inter text-16  "
          >
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  return (
    <footer className="text-white py-12  px-10 relative  ">
      <div className="lg:flex items-center justify-evenly max-w-[1280px] m-auto ">
        <div className="flex">
          <div className="space-y-4 border-b lg:border-b-0 lg:border-r  border-lightgray pr-20">
            <div className="flex items-center gap-3">
              <Image
                src={"/assets/zeechain-logo.svg"}
                alt="ZEE Chain Logo"
                width={200}
                height={100}
              />
              {/* <span className="text-white-500 font-semibold text-[24px] leading-[30px]">
                ZEE Chain
              </span> */}
            </div>
            <p className="text-white-200 max-w-xs text-[16px] font-inter font-light">
              ZeeChain is the first AI-driven DeFi Layer 1, merging Cosmos
              interoperability with intelligent swaps, lending, and staking.
              Experience the future of decentralized finance with AI automation
            </p>
          </div>
        </div>
        <div className="md:flex md:flex-row flex-col gap-10 md:gap-20 my-10 py-5 relative">
          <FooterSection title="Learn" items={Learn} />{" "}
          <FooterSection title="ZEE" items={ZEE} />
          <FooterSection title="Community" items={Community} />
        </div>
      </div>
      <Image
        src="/assets/background-assets/footer_grafient.svg"
        alt="bg-gradient"
        width={1675}
        height={1105}
        className=" absolute blur-sm bottom-0 w-full start-0 -z-10"
      />
    </footer>
  );
};

export default Footer;
