"use client";
import Image from "next/image";
import { motion, useScroll } from "framer-motion";
import Link from "next/link";
export default function BuyMeACoffee() {
  const animationConfig = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.8,
        staggerDirection: -1,
      },
    },
  };
  return (
    <>
      <div className="h-screen bg-pages flex flex-col justify-center items-center">
        <motion.a
          variants={animationConfig}
          initial="hidden"
          animate="show"
          className="qr"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          href="/"
        >
          <Image
            src="/maya/maya.jpeg"
            className="cursor-pointer"
            height={400}
            width={300}
          />
        </motion.a>
        <Link
          href="/"
          className="underline text-white subFont hover:text-theme p-3"
        >
          Return to home
        </Link>
      </div>
    </>
  );
}
