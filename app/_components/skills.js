import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
export default function Technology() {
  return (
    <div
      className=" h-min bg-pages pt-20 p-20"
      id="text-white"
    >
      <h1 className="p-4 text-3xl text-center defaultFont text-white">
        SKILLS
      </h1>
      <div className="grid grid-cols-3 lg:p-2 p-5  md:grid-cols-4 justify-center lg:grid-cols-4 gap-6 items-center">
        <div className=" flex justify-center">
          <motion.div
            className="hover:underline text-white"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.5 }}
          >
            <h1 className="subFont text-md   tech  hover:font-bold text-white">HTML</h1>
          </motion.div>
        </div>
        <div className=" flex justify-center">
          <motion.div
            className="hover:underline text-white"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.5 }}
          >
            <h1 className="subFont text-md   tech  hover:font-bold text-white">CSS</h1>
          </motion.div>
        </div>
        <div className=" flex justify-center">
          <motion.div
            className="hover:underline text-white"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.5 }}
          >
            <h1 className="subFont text-md   tech  hover:font-bold text-white">TailwindCSS</h1>
          </motion.div>
        </div>
        <div className=" flex justify-center">
          <motion.div
            className="hover:underline text-white"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.5 }}
          >
            <h1 className="subFont text-md   tech  hover:font-bold text-white">Bootstrap</h1>
          </motion.div>
        </div>
        <div className=" flex justify-center">
          <motion.div
            className="hover:underline text-white"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.5 }}
          >
            <h1 className="subFont text-md   tech  hover:font-bold text-white">Javascript</h1>
          </motion.div>
        </div>
        <div className=" flex justify-center">
          <motion.div
            className="hover:underline text-white"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.5 }}
          >
            <h1 className="subFont text-md   tech  hover:font-bold text-white">NextJS</h1>
          </motion.div>
        </div>
        <div className=" flex justify-center">
          <motion.div
            className="hover:underline text-white"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.5 }}
          >
            <h1 className="subFont text-md   tech  hover:font-bold text-white">JQuery</h1>
          </motion.div>
        </div>
        <div className=" flex justify-center">
          <motion.div
            className="hover:underline text-white"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.5 }}
          >
            <h1 className="subFont text-md   tech  hover:font-bold text-white">Flutter</h1>
          </motion.div>
        </div>

        <div className=" flex justify-center">
          <motion.div
            className="hover:underline text-white"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.5 }}
          >
            <h1 className="subFont text-md   tech  hover:font-bold text-white">Java</h1>
          </motion.div>
        </div>
        <div className=" flex justify-center">
          <motion.div
            className="hover:underline text-white"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.5 }}
          >
            <h1 className="subFont text-md   tech  hover:font-bold text-white">SQL</h1>
          </motion.div>
        </div>
        <div className=" flex justify-center">
          <motion.div
            className="hover:underline text-white"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.5 }}
          >
            <h1 className="subFont text-md   tech  hover:font-bold text-white">git</h1>
          </motion.div>
        </div>
        <div className=" flex justify-center">
          <motion.div
            className="hover:underline text-white"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.5 }}
          >
            <h1 className="subFont text-md   tech  hover:font-bold text-white">Github</h1>
          </motion.div>
        </div>
        <div className=" flex justify-center">
          <motion.div
            className="hover:underline text-white"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.5 }}
          >
            <h1 className="subFont text-md   tech  hover:font-bold text-white">Bitbucket</h1>
          </motion.div>
        </div>
        <div className=" flex justify-center">
          <motion.div
            className="hover:underline text-white"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.5 }}
          >
            <h1 className="subFont text-md   tech  hover:font-bold text-white">Tortoise SVN</h1>
          </motion.div>
        </div>
        <div className=" flex justify-center">
          <motion.div
            className="hover:underline text-white"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.5 }}
          >
            <h1 className="subFont text-md   tech  hover:font-bold text-white">Salesforce</h1>
          </motion.div>
        </div>
        <div className=" flex justify-center">
          <motion.div
            className="hover:underline text-white"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.5 }}
          >
            <h1 className="subFont text-md   tech  hover:font-bold text-white">
              LWC
            </h1>
          </motion.div>
        </div>
        <div className=" flex justify-center">
          <motion.div
            className="hover:underline text-white"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.5 }}
          >
            <h1 className="subFont text-md   tech  hover:font-bold text-white">Apex</h1>
          </motion.div>
        </div>
        <div className=" flex justify-center">
          <motion.div
            className="hover:underline text-white"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.5 }}
          >
            <h1 className="subFont text-md   tech  hover:font-bold text-white">Flows</h1>
          </motion.div>
        </div>
        <div className=" flex justify-center">
          <motion.div
            className="hover:underline text-white"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.5 }}
          >
            <h1 className="subFont text-md   tech  hover:font-bold text-white">Validation Rules</h1>
          </motion.div>
        </div>
        <div className=" flex justify-center">
          <motion.div
            className="hover:underline text-white"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.5 }}
          >
            <h1 className="subFont text-md   tech  hover:font-bold text-white">Formula</h1>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
