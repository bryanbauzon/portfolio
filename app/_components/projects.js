import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import Image from "next/image";
export default function Projects() {
  return (
    <div className="  h-min bg-pages">
      <h1 className="p-10 lg:text-[3.1rem] md:text-[3.1rem] text-[1.8rem] text-center defaultFont text-white">
        PERSONAL PROJECTS
      </h1>
      <div className="grid  lg:grid-cols-3 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 p-3 gap-6">
        <div className="p-0">
          <div className=" flex flex-col">
            <div className="sampleWorks p-5">
              <div className="font-bold text-white p-2 text-2xl defaultFont">
                Job Finder Prototype
              </div>
              <div className="subFont text-white p-2">
                In 2020, I joined the UI Challenge managed by{" "}
                <Link
                  href={"https://www.facebook.com/groups/817188595285196"}
                  target="_blank"
                  className="text-white font-bold underline"
                >
                  Flutter Philippines
                </Link>
                —a mini prototyping challenge made for the community. The main
                goal of this challenge is to create a working prototype, a
                minimum of 1 screen, on any platform that Flutter supports. For
                more information, click{" "}
                <Link
                  href="https://medium.com/flutterphilippines/flutter-philippines-uichallenge-september-2020-82f1549503b4"
                  target={"_blank"}
                  className="text-white subFont font-bold underline"
                >
                  here
                </Link>
                .
              </div>
              <div className="grid grid-cols-3 lg:grid-cols-3 md:grid-cols-3 gap-2">
                <motion.div
                  whileHover={{ scale: 1.3 }}
                  whileTap={{ scale: 0.8 }}
                >
                  <Image
                    src={"/projects/jobFinder.png"}
                    className="mobdev p-2"
                    height={120}
                    width={90}
                  />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.3 }}
                  whileTap={{ scale: 0.8 }}
                >
                  <Image
                    src={"/projects/jf2.png"}
                    className="mobdev p-2"
                    height={120}
                    width={90}
                  />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.3 }}
                  whileTap={{ scale: 0.8 }}
                >
                  {" "}
                  <Image
                    src={"/projects/jf3.png"}
                    className="mobdev p-2"
                    height={120}
                    width={90}
                  />
                </motion.div>
              </div>
              {/* here */}
            </div>
          </div>
        </div>

        <div className="p-0">
          <div className="sampleWorks p-5">
            <div className="font-bold text-white p-2  text-2xl  defaultFont">
              Portfolio Website
            </div>
            <div className="subFont text-white p-2">
              As a college student, I planned to create a website showcasing my
              skills and interests in programming and other kinds of stuff. My
              previous website project was unfinished because of schoolwork and
              a need for more resources. 7+ years have passed, and I decided to
              build a portfolio step-by-step; now, it's accessible online. I
              used{" "}
              <Link
                href={"https://nextjs.org/"}
                target="_blank"
                className="text-white font-bold subFont underline"
              >
                Next.js
              </Link>{" "}
              and{" "}
              <Link
                href={"https://tailwindcss.com/"}
                target="_blank"
                className="text-white font-bold subFont underline"
              >
                Tailwind CSS
              </Link>{" "}
              for responsiveness to build this website.
            </div>
            <div className="flex justify-center w-full ">
              <motion.div whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.8 }}>
                <Image
                  src={"/projects/portfolio.png"}
                  className=" webdev p-2"
                  height={150}
                  width={250}
                  quality={100}
                />
              </motion.div>
            </div>
          </div>
        </div>

        <div className="p-0">
          <div className="sampleWorks p-5">
            <div className="font-bold text-white p-2  text-2xl  defaultFont">
              Discover Anda, Pangasinan
            </div>
            <div className="subFont text-white p-2 sampleWorks">
              Three years ago, I used photography to freeze time and capture
              important moments. Eventually, I was curious about how to edit
              stunning videos I've watched on YouTube, Facebook, and other
              social media platforms. I remember my first video upload on my
              Facebook page; it had a lot of glitch transitions and
              over-saturated adjustment color, but it was a good start.
              <br />
              <br />
              Recently, this year, 2023, I made a promotional video for my
              hometown, Anda, Pangasinan, focusing mainly on our tourist
              attraction, the Tondol White Sand Beach - little Boracay of
              the North. To watch this video, click{" "}
              <Link
                href={"https://www.youtube.com/watch?v=8iBvhVrAnRQ"}
                target="_blank"
                className="text-white font-bold subFont underline"
              >
                here
              </Link>
              .
            </div>
            <div className="flex justify-center w-full ">
              <motion.div whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.8 }}>
                <Image
                  src={"/projects/anda.png"}
                  className="object-cover videoediting p-2"
                  height={150}
                  width={250}
                  quality={100}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
