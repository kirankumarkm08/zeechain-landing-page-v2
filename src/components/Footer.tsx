import Image from "next/image";
import { Learn, ZEE, Community } from "@/constants";
import FooterSection from "@/components/FooterSection";

const Footer = () => {
  return (
    <footer className=" md:py-12 px-5 md:px-10 relative    ">
      <div className="md:flex items-center  max-w-[1440px]   mx-auto ">
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
            <p className="text-white-500  w-full md:max-w-lg text-start text-[16px] font-inter font-normal">
              ZeeChain is the first AI-driven DeFi Layer 1, merging Cosmos
              interoperability with intelligent swaps, lending, and staking.
              Experience the future of decentralized finance with AI automation
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-20 py-10    ml-0  lg:ml-28">
          <FooterSection title="Learn" items={Learn} />{" "}
          <FooterSection title="ZEE" items={ZEE} />
          <FooterSection title="Community" items={Community} />
        </div>
      </div>
      <div className="absolute inset-0 -top-1/2 ">
        <Image
          src="/assets/background-assets/footer_grafient.svg"
          alt="Background gradient"
          fill
          sizes="100vw"
          className="object-cover blur-lg -z-10 w-auto h-full"
          style={{ objectPosition: "center" }}
        />
      </div>
    </footer>
  );
};

export default Footer;
