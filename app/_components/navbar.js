"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
export default function Navbar() {
  return (
    <>
      <nav className="p-6 w-full mx-auto navbar nav z-20 fixed flex items-center space-x-4">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <Link href="#home" className="flex items-center flex-shrink-0 mr-6 text-md text-sm text-dark subFont">
            @bryanbauzon
          </Link>
        </div>
        <div className="flex w-full justify-end">
          <motion.div  whileHover={{ scale: 1.2, rotate: [0, 0, 10, 10, 0] }}
            whileTap={{ scale: 0.5 }}>
            <h6 className="underdev p-2 text-xs rounded-full subFont">Development</h6>
          </motion.div>
          {/* <motion.a
          href="mailto:mrbryanbauzon@gmail.com"
            whileHover={{
              scale: 1.2,
              transition: { duration: 1 },
            }}
            whileTap={{ scale: 0.9 }}
            className="text-smfont-mono about p-2 rounded-full"
          >Get in touch</motion.a> */}
        </div>
      </nav>
    </>
  );
}
