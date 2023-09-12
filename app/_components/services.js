import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import Link from "next/link";
export default function Services() {
  return (
    <div className="p-3 bg-pages h-min">
      <h1 className="p-10 lg:text-[3.1rem] md:text-[3.1rem] text-[1.8rem] text-center defaultFont text-white">
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
       
        </div>
      </div>
    </div>
  );
}
