import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
export default function Technology() {
  return (
    <div className=" lg:h-screen md:h-[70vh] h-[120vh] backgroundGradient pt-20" id="tech">
      <h1 className="p-4 lg:text-[3.1rem] md:text-[3.1rem] text-[1.8rem] text-center nongradient text-dark">
        TECHNOLOGY USED
      </h1>
      <div className="grid grid-cols-3 lg:p-2 p-5 md:grid-cols-3 justify-center lg:grid-cols-4 gap-6 items-center">
        <div className=" flex justify-center">
          <motion.div href="" whileHover={{ scale: 1.2 }}>
            <Image src="/html.svg" width={100} height={100} title="HTML5" className="tech" alt="HTML"/>
          </motion.div>
        </div>
        <div className=" flex justify-center">
          <motion.div href="" whileHover={{ scale: 1.2 }}>
            <Image src="/css.svg" width={100} height={100} title="CSS3" className="tech" alt="CSS"/>
          </motion.div>
        </div>
        <div className=" flex justify-center">
          <motion.div href="" whileHover={{ scale: 1.2 }}>
            <Image src="/tailwindcss.svg" width={100} height={100} title="TailwindCSS" className="tech" alt="TailwindCSS"/>
          </motion.div>
        </div>
        <div className=" flex justify-center">
          <motion.div href="" whileHover={{ scale: 1.2 }}>
            <Image src="/bootstrap.svg" width={100} height={100} title="Bootstrap"className="tech" alt="Bootstrap"/>
          </motion.div>
        </div>
        <div className=" flex justify-center">
          <motion.div href="" whileHover={{ scale: 1.2 }}>
            <Image src="/js.svg" width={100} height={100} title="Javascript"className="tech" alt="Javascript"/>
          </motion.div>
        </div>
        <div className=" flex justify-center">
          <motion.div href="" whileHover={{ scale: 1.2 }}>
            <Image src="/nextjs.svg" width={120} height={120} title="NextJS"className="tech" alt="NextJS"/>
          </motion.div>
        </div>

        <div className=" flex justify-center">
          <motion.div href="" whileHover={{ scale: 1.2 }}>
            <Image src="/flutter.svg" width={50} height={50} title="Flutter"className="tech" alt="Flutter" />
          </motion.div>
        </div>

        <div className=" flex justify-center">
          <motion.div href="" whileHover={{ scale: 1.2 }}>
            <Image src="/salesforce.svg" width={100} height={100} title="Salesforce"className="tech" alt="Salesforce"/>
          </motion.div>
        </div>
        <div className=" flex justify-center">
          <motion.div href="" whileHover={{ scale: 1.2 }}>
            <Image src="/java.svg" width={100} height={100} title="Java"className="tech" alt="Java"/>
          </motion.div>
        </div>
        <div className=" flex justify-center">
          <motion.div href="" whileHover={{ scale: 1.2 }}>
            <Image src="/sql.svg" width={100} height={100} title="SQL"className="tech" alt="SQL"/>
          </motion.div>
        </div>
        <div className=" flex justify-center">
          <motion.div href="" whileHover={{ scale: 1.2 }}>
            <Image src="/git.svg" width={100} height={100} title="Git"className="tech" alt="Git"/>
          </motion.div>
        </div>
        <div className=" flex justify-center">
          <motion.div href="" whileHover={{ scale: 1.2 }}>
            <Image src="/github.svg" width={100} height={100} title="Github"className="tech" alt="Github" />
          </motion.div>
        </div>
        <div className=" flex justify-center">
          <motion.div href="" whileHover={{ scale: 1.2 }}>
            <Image src="/bitbucket.svg" width={100} height={100} title="Bitbucket"className="tech" alt="Bitbucket"/>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
