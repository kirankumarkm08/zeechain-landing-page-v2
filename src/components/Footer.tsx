import Image from "next/image";
import Link from "next/link";
import { Learn, ZEE, Community } from "@/constants";

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
            className="hover:text-white-800 capitalize text-white-100 font-inter text-16 font-normal  "
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
    <footer className=" md:py-12 md:px-10 relative    ">
      <div className="md:flex items-center  max-w-[1440px] md:mx-auto mx-10 ">
        <div className="flex ">
          <div className="border-b lg:border-b-0 lg:border-r  border-lightgray pr-20 ">
            <div className="flex items-center gap-3">
              <Image
                src={"/assets/zeechain-logo.svg"}
                alt="ZEE Chain Logo"
                width={200}
                height={100}
              />
            </div>
            <p className="text-white-500 max-w-lg text-start text-[16px] font-inter font-normal">
              ZeeChain is the first AI-driven DeFi Layer 1, merging Cosmos
              interoperability with intelligent swaps, lending, and staking.
              Experience the future of decentralized finance with AI automation
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-20 my-10  relative ml:0  md:ml-32">
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
