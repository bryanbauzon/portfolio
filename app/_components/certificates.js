import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
export default function Certificates() {
  return (
    <div className="lg:h-[screen] h-[90vh] backgroundGradient md:h-[100vh]">
      <div className="flex flex-col justify-center">
        <h1 className="p-10 lg:p-20 lg:text-[3.1rem] md:text-[3.1rem] text-[1.8rem] text-center p-10 text-dark nongradient">
          3X SALESFORCE CERTIFIED<p className="font-mono cert font-dark underline">Click badge to view certificate.</p>
        </h1>
        
      </div>
      <div className="p-21  grid grid-cols-1  md:grid-cols-1 lg:grid-cols-3 gap-1">
        <div className="flex flex-col lg:justify-center  md:justify-center justify-center items-center p-1">
          <motion.a href={"/salesforce/certificate/sfadmin.pdf"}   target="_blank" whileHover={{scale:1.5,rotate: [0, 0, 20, 20, 0],}} whileTap={{scale:0.5}}>
            <Image
              src={"/salesforce/badges/sfadmin.png"}
              height={100}
              width={100}
            />
          </motion.a >
        </div>
      
        <div className="flex flex-col  lg:justify-center  md:justify-center justify-center items-center p-1">
          <motion.a  href={"/salesforce/certificate/sfpd1.pdf"}   target="_blank" whileHover={{scale:1.5,rotate: [0, 0, 20, 20, 0],}} whileTap={{scale:0.5}}>
            <Image
              src={"/salesforce/badges/sfpd1.png"}
              height={100}
              width={100}
            />
          </motion.a >
        </div>
        
        <div className="flex flex-col  lg:justify-center md:justify-center justify-center items-center p-1">
          <motion.a href={"/salesforce/certificate/sfassoc.pdf"}    target="_blank" whileHover={{scale:1.5,rotate: [0, 0, 20, 20, 0],}} whileTap={{scale:0.5}}>
            <Image
              src={"/salesforce/badges/sfassoc.png"}
              height={100}
              width={100}
            />
          </motion.a>
          
        </div>
      
      </div>
    </div>
  );
}
