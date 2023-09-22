import { Header } from "./util/util";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
export default function Contact() {
  return (
    <>
      <div className="h-[50vh] bg-pages justify-center items-center flex-col text-white flex">
        <Header header="Get in touch" />
        <div className="px-10 p-10 text-center subFont">
          I would love to hear from you. Whether it’s a project, a job
          opportunity, or just a chat. Feel free to contact me!
            
          <motion.div whileHover={{ scale: 5,rotate: [0, 0, 20, 20, 0] }} whileTap={{scale:1}} className="cursor-pointer">
            👋
          </motion.div>
            {" "}
        </div>
        <div className="animate-bounce">
          <svg
            color="#ffff"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            class="w-6 h-7"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
            />
          </svg>
        </div>
        <Link
          href={"mailto:mrbryanbauzon"}
          className="underline emailLink cursor-alias"
        >
          mrbryanbauzon@gmail.com
        </Link>
      </div>
    </>
  );
}
