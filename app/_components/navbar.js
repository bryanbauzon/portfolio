"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
export default function Navbar(props) {
  return (
    <>
      <nav className="p-6 w-full mx-auto navbar nav z-20 fixed flex items-center space-x-4">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <Link href={props.birthday == ''?"#home":"/"} className="flex items-center flex-shrink-0 mr-6 text-md text-sm text-dark subFont">
            @bryanbauzon
          </Link>
        </div>
        <div className="flex w-full justify-end">

          {props.birthday == ''?<><motion.a  whileHover={{ scale: 1.2, rotate: [0, 0, 10, 10, 0] }}
            whileTap={{ scale: 0.5 }}  href="mailto:mrbryanbauzon@gmail.com">
            <h6 className="underdev p-2 text-xs rounded-full subFont">Hire me</h6>
          </motion.a></>:<></>}
        </div>
      </nav>
    </>
  );
}
