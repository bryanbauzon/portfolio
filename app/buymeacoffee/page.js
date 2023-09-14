'use client'
import Image from "next/image"
import { motion, useScroll } from "framer-motion";
export default function BuyMeACoffee(){
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
    return(<>
        <div className="h-screen bg-pages flex justify-center items-center">
            <motion.a  variants={animationConfig}
          initial="hidden"
          animate="show"
          className="qr"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          href="/"
          >
            <Image src="/maya/maya.jpeg" className="cursor-pointer" height={400} width={300}/>
            </motion.a>
        </div>
    </>)
}