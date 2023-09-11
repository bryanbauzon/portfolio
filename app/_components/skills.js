import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
export default function Technology() {
  return (
    <div
      className=" h-min bg-pages pt-20 p-20"
      id="tech"
    >
      <h1 className="p-4 lg:text-[3.1rem] md:text-[3.1rem] text-[1.8rem] text-center nongradient text-dark">
        SKILLS
      </h1>
      <div className="grid grid-cols-3 lg:p-2 p-10  md:grid-cols-4 justify-center lg:grid-cols-4 gap-6 items-center">
        <div className=" flex justify-center">
          <motion.div
            className="hover:underline"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.5 }}
          >
            <h1 className="font-mono hover:font-bold tech">HTML</h1>
          </motion.div>
        </div>
        <div className=" flex justify-center">
          <motion.div
            className="hover:underline"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.5 }}
          >
            <h1 className="font-mono hover:font-bold tech">CSS</h1>
          </motion.div>
        </div>
        <div className=" flex justify-center">
          <motion.div
            className="hover:underline"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.5 }}
          >
            <h1 className="font-mono hover:font-bold tech">TailwindCSS</h1>
          </motion.div>
        </div>
        <div className=" flex justify-center">
          <motion.div
            className="hover:underline"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.5 }}
          >
            <h1 className="font-mono hover:font-bold tech">Bootstrap</h1>
          </motion.div>
        </div>
        <div className=" flex justify-center">
          <motion.div
            className="hover:underline"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.5 }}
          >
            <h1 className="font-mono hover:font-bold tech">Javascript</h1>
          </motion.div>
        </div>
        <div className=" flex justify-center">
          <motion.div
            className="hover:underline"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.5 }}
          >
            <h1 className="font-mono hover:font-bold tech">NextJS</h1>
          </motion.div>
        </div>
        <div className=" flex justify-center">
          <motion.div
            className="hover:underline"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.5 }}
          >
            <h1 className="font-mono hover:font-bold tech">JQuery</h1>
          </motion.div>
        </div>
        <div className=" flex justify-center">
          <motion.div
            className="hover:underline"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.5 }}
          >
            <h1 className="font-mono hover:font-bold tech">Flutter</h1>
          </motion.div>
        </div>

        <div className=" flex justify-center">
          <motion.div
            className="hover:underline"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.5 }}
          >
            <h1 className="font-mono hover:font-bold tech">Java</h1>
          </motion.div>
        </div>
        <div className=" flex justify-center">
          <motion.div
            className="hover:underline"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.5 }}
          >
            <h1 className="font-mono hover:font-bold tech">SQL</h1>
          </motion.div>
        </div>
        <div className=" flex justify-center">
          <motion.div
            className="hover:underline"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.5 }}
          >
            <h1 className="font-mono hover:font-bold tech">git</h1>
          </motion.div>
        </div>
        <div className=" flex justify-center">
          <motion.div
            className="hover:underline"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.5 }}
          >
            <h1 className="font-mono hover:font-bold tech">Github</h1>
          </motion.div>
        </div>
        <div className=" flex justify-center">
          <motion.div
            className="hover:underline"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.5 }}
          >
            <h1 className="font-mono hover:font-bold tech">Bitbucket</h1>
          </motion.div>
        </div>
        <div className=" flex justify-center">
          <motion.div
            className="hover:underline"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.5 }}
          >
            <h1 className="font-mono hover:font-bold tech">Tortoise SVN</h1>
          </motion.div>
        </div>
        <div className=" flex justify-center">
          <motion.div
            className="hover:underline"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.5 }}
          >
            <h1 className="font-mono hover:font-bold tech">Salesforce</h1>
          </motion.div>
        </div>
        <div className=" flex justify-center">
          <motion.div
            className="hover:underline"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.5 }}
          >
            <h1 className="font-mono hover:font-bold tech">
              Lightning Web Component
            </h1>
          </motion.div>
        </div>
        <div className=" flex justify-center">
          <motion.div
            className="hover:underline"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.5 }}
          >
            <h1 className="font-mono hover:font-bold tech">Apex</h1>
          </motion.div>
        </div>
        <div className=" flex justify-center">
          <motion.div
            className="hover:underline"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.5 }}
          >
            <h1 className="font-mono hover:font-bold tech">Flows</h1>
          </motion.div>
        </div>
        <div className=" flex justify-center">
          <motion.div
            className="hover:underline"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.5 }}
          >
            <h1 className="font-mono hover:font-bold tech">Validation Rules</h1>
          </motion.div>
        </div>
        <div className=" flex justify-center">
          <motion.div
            className="hover:underline"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.5 }}
          >
            <h1 className="font-mono hover:font-bold tech">Formula</h1>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
