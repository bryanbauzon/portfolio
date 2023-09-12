import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
export default function Badges(props) {
  return (
    <>
      <div className="flex flex-col lg:justify-center  md:justify-center justify-center items-center p-1">
        <motion.a
          href={props.pdf}
          target="_blank"
          whileHover={{ scale: 1.5, rotate: [0, 0, 20, 20, 0] }}
          whileTap={{ scale: 0.5 }}
        >
          <Image src={props.image} height={props.size} width={props.size} alt={props.alt}></Image>
        </motion.a>
      </div>
    </>
  );
}
