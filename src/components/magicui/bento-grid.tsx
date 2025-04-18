import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { motion, type MotionProps, type HTMLMotionProps } from "framer-motion";
// import Image from "next/image";

interface BentoGridProps extends ComponentPropsWithoutRef<typeof motion.div> {
  children: ReactNode;
  className?: string;
}

interface BentoCardProps extends Omit<HTMLMotionProps<"div">, "className"> {
  name: string;
  className: string;
  background: string;
  textPosition?: string;
  index: number;
}

const BentoGrid = ({ children, className, ...props }: BentoGridProps) => {
  return (
    <motion.div
      className={cn("grid w-full grid-cols-1  md:grid-cols-3 gap-6", className)}
      {...props}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

const BentoCard = ({
  name,
  className,
  background,
  textPosition = "top-left",
  ...props
}: BentoCardProps) => {
  const textPositionClasses = {
    "top-left": "justify-start items-start",
    "top-right": "justify-start items-end",
    bottom: "justify-end items-start",
    middle: "justify-center items-center",
  }[textPosition];

  const motionProps: MotionProps = {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.3, ease: "easeOut" },
    whileHover: { scale: 1.05 },
  };

  return (
    <motion.div
      className={cn(
        "group relative flex flex-col  bg-card_background bg-fixed rounded-2xl border border-purple-400 transition-all duration-300 overflow-hidden",
        className
      )}
      {...props}
      {...motionProps}
    >
      <motion.div
        className="absolute inset-0  bg-no-repeat  bg-center bg-cover  transition-opacity duration-300    hover:shadow-2xl"
        style={{ backgroundImage: `url(${background})` }}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ ease: "easeOut" }}
      />

      {/* <Image src={background} alt="bg" width={500} height={100} className="" /> */}
      <motion.div
        className={cn(
          "relative z-10 flex h-full w-full flex-col p-6",
          textPositionClasses
        )}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ ease: "easeOut" }}
      >
        <motion.h3
          className={`text-24 font-clash font-medium  bg-linear-gradient bg-clip-text text-transparent 
           
             `}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeOut" }}
        >
          {name}
        </motion.h3>
      </motion.div>

      <motion.div
        className="pointer-events-none absolute bottom-0 flex w-full transform-gpu flex-row items-center p-4"
        initial={{ opacity: 0, scale: 0.95 }}
        whileHover={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      ></motion.div>
    </motion.div>
  );
};

export { BentoCard, BentoGrid };
