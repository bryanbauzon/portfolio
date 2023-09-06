import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
export default function Technology() {
  return (
    <div className=" lg:h-[80vh] md:h-[85vh] h-[85vh] w-full  backgroundGradient pt-20" id="tech">
      <h1 className="p-4 text-[2.1rem] w-full text-center nongradient text-dark">
        Technology Used
      </h1>
      <div className="grid grid-cols-3 md:grid-cols-3 justify-center lg:grid-cols-4 gap-6 items-center">
        <div className="w-full flex justify-center">
          <motion.a href="" whileHover={{ scale: 1.2 }}>
            <Image src="/html.svg" width={80} height={80} title="HTML5" />
          </motion.a>
        </div>
        <div className="w-full flex justify-center">
          <motion.a href="" whileHover={{ scale: 1.2 }}>
            <Image src="/css.svg" width={80} height={80} title="CSS3" />
          </motion.a>
        </div>
        <div className="w-full flex justify-center">
          <motion.a href="" whileHover={{ scale: 1.2 }}>
            <Image src="/tailwindcss.svg" width={80} height={80} title="TailwindCSS" />
          </motion.a>
        </div>
        <div className="w-full flex justify-center">
          <motion.a href="" whileHover={{ scale: 1.2 }}>
            <Image src="/bootstrap.svg" width={80} height={80} title="Bootstrap"/>
          </motion.a>
        </div>
        <div className="w-full flex justify-center">
          <motion.a href="" whileHover={{ scale: 1.2 }}>
            <Image src="/js.svg" width={80} height={80} title="Javascript"/>
          </motion.a>
        </div>
        <div className="w-full flex justify-center">
          <motion.a href="" whileHover={{ scale: 1.2 }}>
            <Image src="/nextjs.svg" width={120} height={120} title="NextJS"/>
          </motion.a>
        </div>

        <div className="w-full flex justify-center">
          <motion.a href="" whileHover={{ scale: 1.2 }}>
            <Image src="/flutter.svg" width={50} height={50} title="Flutter"/>
          </motion.a>
        </div>

        <div className="w-full flex justify-center">
          <motion.a href="" whileHover={{ scale: 1.2 }}>
            <Image src="/salesforce.svg" width={80} height={80} title="Salesforce"/>
          </motion.a>
        </div>
        <div className="w-full flex justify-center">
          <motion.a href="" whileHover={{ scale: 1.2 }}>
            <Image src="/java.svg" width={80} height={80} title="Java"/>
          </motion.a>
        </div>
        <div className="w-full flex justify-center">
          <motion.a href="" whileHover={{ scale: 1.2 }}>
            <Image src="/sql.svg" width={80} height={80} title="SQL"/>
          </motion.a>
        </div>
        <div className="w-full flex justify-center">
          <motion.a href="" whileHover={{ scale: 1.2 }}>
            <Image src="/git.svg" width={80} height={80} title="Git"/>
          </motion.a>
        </div>
        <div className="w-full flex justify-center">
          <motion.a href="" whileHover={{ scale: 1.2 }}>
            <Image src="/github.svg" width={80} height={80} title="Github"/>
          </motion.a>
        </div>
        <div className="w-full flex justify-center">
          <motion.a href="" whileHover={{ scale: 1.2 }}>
            <Image src="/bitbucket.svg" width={80} height={80} title="Bitbucket"/>
          </motion.a>
        </div>
      </div>
    </div>
  );
}
