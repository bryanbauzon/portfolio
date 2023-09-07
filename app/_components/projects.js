import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import Image from "next/image";
export default function Projects() {
  return (
    <div className="  h-[120vh] lg:h-90vh md:h-[65vh] backgroundGradient">
      <h1 className="p-10 lg:text-[3.1rem] md:text-[3.1rem] text-[1.8rem] text-center nongradient text-dark">
        PERSONAL PROJECTS
      </h1>
      <div className="grid  lg:grid-cols-3 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 p-10 gap-6">
       

        <motion.div whileHover={{ scale: 1.1 }}>
          <div className=" p-2 rounded-md glasseffect">
            <div className="grid grid-cols-3 gap-1">
              <h1 className="text-white p-2 text-left col-span-2">
                Portfolio Website <span className="year">09.2023</span>
              </h1>
            </div>
            <h3 className="text-white p-2">
              My online space that shows my creativity, interest, and passion in
              technology and videography.
            </h3>
            <div className="flex">
              <Link href="https://nextjs.org/" target={"_blank"}>
                <h6 className="text-white font-bold p-2 underline">NextJS</h6>
              </Link>
              <Link href="https://tailwindcss.com/" target={"_blank"}>
                <h6 className="text-white font-bold p-2 underline">
                  TailwindCss
                </h6>
              </Link>
              
            </div>
            <div className="flex p-1">
              <Image src="/portfolio.png" alt="Portfolio Website" width={100} height={120}/>
            </div>
          </div>
        </motion.div>

        <motion.div whileHover={{ scale: 1.1 }}>
          <div className=" p-2 rounded-md glasseffect">
            <div className="grid grid-cols-3 gap-1">
              <h1 className="text-white p-2 text-left col-span-2">
                My Hometown <span className="year">08.2023</span>
              </h1>
            </div>
            <h3 className="text-white p-2">
              Explore the natural beauty of my hometown - Anda, Pangasinan!
            </h3>
            <div className="flex">
              <Link href="https://www.capcut.com/" target={"_blank"}>
                <h6 className="text-white font-bold p-2 underline">Capcut</h6>
              </Link>
              <Link
                href="https://youtu.be/8iBvhVrAnRQ"
                className=" font-bold underline text-white p-2 flex items-end "
                target="_blank"
              >
                Youtube
              </Link>
            </div>
            <div className="flex p-1">
              <Image src="/anda.png" alt="Portfolio Website" width={100} height={120}/>
            </div>
          </div>
         
        </motion.div>

        <motion.div whileHover={{ scale: 1.1 }}>
          <div className=" p-2 rounded-md glasseffect">
            <div className="grid grid-cols-3 gap-1">
              <h1 className="text-white p-2 text-left col-span-2">
                Job Finder <span className="year">2020</span>
              </h1>
            </div>
            <h3 className="text-white p-2">
              A simple Job hunt prototype app made with Flutter
            </h3>
            <div className="flex">
              <Link href="https://flutter.dev/" target={"_blank"}>
                <h6 className="text-white font-bold p-2 underline">Flutter</h6>
              </Link>
              <Link
                href="https://github.com/bryanbauzon/Job-Finder"
                className="font-bold underline text-white p-2 flex items-end "
                target="_blank"
              >
                Source Code
              </Link>
            </div>
            <div className="flex p-1">
              <div className="p-2">
                <Image src="/JobFinder.png" alt="Job Finder" height={50} width={50} />
              </div>
              <div className="p-2">
                <Image src="/jf2.png" alt="Job Finder" height={50} width={50} />
              </div>
              <div className="p-2">
                <Image src="/jf3.png" alt="Job Finder" height={50} width={50} />
              </div>
              <div className="p-2">
                <Image src="/jf4.png" alt="Job Finder" height={50} width={50} />
              </div>
              
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
