import Image from "next/image";
import { Learn, ZEE, Community } from "@/constants";
import FooterSection from "@/components/FooterSection";

const Footer = () => {
  return (
    <footer className=" md:py-12 px-5 md:px-10 relative    ">
      <div className="lg:flex items-center  max-w-[1440px]   mx-auto ">
        <div className="flex ">
          <div className="border-b lg:border-b-0 lg:border-r pb-5 border-lightgray pr-20 ">
            <div className="flex items-center ">
              <Image
                src="/assets/navbar/Zeechain-Logo/Logo2.svg"
                alt="ZEE Chain Logo"
                width={200}
                height={100}
                priority
                className="w-[150px] md:w-[180px] lg:w-[200px] h-auto py-4 md:py-5 transition-all duration-300 hover:opacity-90"
              />
            </div>
            <p className="text-white-500  max-w-lg  text-start  font-inter font-normal">
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
      <div className="absolute inset-0 -top-1/2 -z-10 blur-md ">
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
