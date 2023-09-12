import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import Link from "next/link";
export default function Services() {
  return (
    <div className="p-3 bg-pages h-min">
      <h1 className="p-10 lg:pt-20 text-3xl text-center pt-10 text-white defaultFont">
        SERVICES OFFERED
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 p-5 gap-2">
        <div>
          <div className="flex justify-center p-3">
            <motion.div whileHover={{ scale: 1.5 }}>
              <Image
                className="object-cover services"
                src="/services/mobiledev.png"
                alt="Mobile Development"
                width={80}
                height={80}
              />
            </motion.div>
          </div>
          <p className="text-center text-lg font-bold text-highlights defaultFont">
            MOBILE DEVELOPMENT
          </p>
          <p className="text-center text-white subFont">
            Specializing in creating high-performance mobile apps for iOS and
            Android, we turn your ideas into reality with precision and
            innovation.
          </p>
          <div className="p-5">
            <div className=" flex flex-col">
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
                  minimum of 1 screen, on any platform that Flutter supports.
                  For more information, click{" "}
                  <Link
                    href="https://medium.com/flutterphilippines/flutter-philippines-uichallenge-september-2020-82f1549503b4"
                    target={"_blank"}
                    className="text-white subFont font-bold underline"
                  >
                    here
                  </Link>
                  .
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-center p-3">
            <motion.div whileHover={{ scale: 1.5 }}>
              <Image
                className="object-cover services"
                src="/services/webdev.png"
                width={80}
                height={80}
                alt="Web Development"
              />
            </motion.div>
          </div>
          <p className="text-center text-highlights  text-lg font-bold defaultFont">
            WEB DEVELOPMENT
          </p>
          <p className="text-white text-center subFont">
            We craft exceptional websites tailored to your needs, from stunning
            custom designs to e-commerce solutions. Elevate your online presence
            with our professional web development services.
          </p>
          <div className="p-5">
            <div className=" ">
              <div className="flex justify-center w-full ">
              <motion.div
                  whileHover={{ scale: 1.3 }}
                  whileTap={{ scale: 0.8 }}
                >
                <Image
                  src={"/projects/portfolio.png"}
                  className=" webdev p-2"
                  height={150}
                  width={250}
                  quality={100}
                />
                </motion.div>
              </div>
              <div className="sampleWorks p-5">
                <div className="font-bold text-white p-2  text-2xl  defaultFont">
                  Portfolio Website
                </div>
                <div className="subFont text-white p-2 sampleWorks">
                  As a college student, I planned to create a website showcasing
                  my skills and interests in programming and other kinds of
                  stuff. My previous website project was unfinished because of
                  schoolwork and a need for more resources. 7+ years have
                  passed, and I decided to build a portfolio step-by-step; now,
                  it's accessible online. I used{" "}
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
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-center p-3">
            <motion.div whileHover={{ scale: 1.5 }}>
              <Image
                className="object-cover services"
                src="/services/videoediting.png"
                width={80}
                height={80}
                alt="Video Editing"
              />
            </motion.div>
          </div>
          <p className="text-center text-highlights  text-lg font-bold defaultFont">
            VIDEO EDITING
          </p>
          <p className="text-white text-center subFont">
            We specialize in professional video editing services, transforming
            your raw footage into polished, engaging content that captivates
            your audience.
          </p>
          <div className="p-5">
            <div className="">
            <div className="flex justify-center w-full ">

              <motion.div
                  whileHover={{ scale: 1.3 }}
                  whileTap={{ scale: 0.8 }}
                >
                <Image
                  src={"/projects/anda.png"}
                  className="object-cover videoediting p-2"
                  height={150}
                  width={250}
                  quality={100}
                />
                </motion.div>
              </div>
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
                  <br/><br/>
                  Recently, this year, 2023, I made a promotional video for my
                  hometown, Anda, Pangasinan, focusing mainly on our tourist
                  attraction, the Tondol White Sand Beach - the little Boracay
                  of the North. To watch this video, click{" "}
                  <Link
                    href={"https://www.youtube.com/watch?v=8iBvhVrAnRQ"}
                    target="_blank"
                    className="text-white font-bold subFont underline"
                  >
                    here
                  </Link>
                  .
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
