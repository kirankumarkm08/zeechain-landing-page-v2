"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Arrow from "/public/assets/Blog/Arrow_right.svg";
import Sphare from "/public/assets/background-assets/sphere.svg";
import { Blogs } from "@/constants";

const Get_started = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="mx-auto max-w-[1240px]   ">
      <Image src={Sphare} alt="" className=" absolute  end-0 -z-10" />
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8 py-8 text-24 md:text-40 font-semibold bg-text-top-buttom-linear bg-clip-text text-transparent font-display leading-166 tracking-wide mx-20"
      >
        Get-Started with Zero Chain
      </motion.h1>
      <div
        ref={ref}
        className="grid md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-5 px-5 "
      >
        {Blogs.map((blog, index) => (
          <motion.div
            key={blog.label}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className=" rounded-3xl mx-2 border border-pink-500 p-[24px]  bg-card_background flex flex-col items-center gap-7 leading-30 line-extra-tight"
          >
            <Image
              src={blog.image}
              alt={`Blog image for ${blog.label}`}
              width={350}
              height={200}
              className=" mt-2 "
            />
            <h2 className="font-medium text-white-600 text-24 leading-32  font-display ">
              {blog.label}
            </h2>
            <p className="font-normal  text-14 leading-20 text-white-700 border-b border-gray-200 pb-2 leading-22 font-inter">
              {blog.description}
            </p>

            <div className="flex justify-between w-full">
              <p className="font-normal text-white-700 font-inter text-14 leading-22">
                February 8, 2025
              </p>
              <Link
                href={blog.link}
                className="font-medium text-16 flex text-white-50 items-center hover:scale-95 translate-x-1 duration-300"
              >
                Read More
                <span className="ml-1">
                  <Image src={Arrow} alt="" className="-rotate-90" />
                </span>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Get_started;
