import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import Link from "next/link";
// Badge Components
export const BadgeComponents = (props) => {
  return (
    <>
      <div className="flex flex-col lg:justify-center  md:justify-center justify-center items-center p-1">
        <motion.a
          href={props.pdf}
          target="_blank"
          whileHover={{ scale: 1.5, rotate: [0, 0, 20, 20, 0] }}
          whileTap={{ scale: 0.5 }}
        >
          <Image
            src={props.image}
            height={props.size}
            width={props.size}
            alt={props.alt}
          ></Image>
        </motion.a>
      </div>
    </>
  );
};

//ExperienceComponents
export const ExperienceComponents = (props) => {
  return (
    <>
      <div className="text-highlights">
        <h1 className="defaultFont text-3xl font-bold lg:text-right md:text-right">
          {props.title}
        </h1>
      </div>
      <div className="text-white pb-5 subFont">
        <h1 className="company">
          <Link
            href={props.website}
            className="underline font-bold"
            target={"_blank"}
          >
            {props.company}
          </Link>{" "}
          - <span className="font-xs">{props.type}</span>
        </h1>
        <h4 className="date">{props.date}</h4>
        <h2 className="font-bold">Roles and Responsibilities:</h2>
        <div className="responsibilities">
          {props.roles.map((val) => {
            return <li>{val}</li>;
          })}
        </div>
        <h2 className="font-bold">Technology Used:</h2>
        <li>{props.tech}</li>
      </div>
    </>
  );
};

export const ServicesComponents = (props) => {
  return (
    <>
      <div>
        <div className="flex justify-center p-3">
          <motion.div whileHover={{ scale: 1.5 }}>
            <Image
              className="object-cover services"
              src={props.src}
              alt={props.alt}
              width={80}
              height={80}
            />
          </motion.div>
        </div>
        <p className="text-center text-lg font-bold text-highlights defaultFont">
          {props.title}
        </p>
        <p className="text-center text-white subFont">{props.description}</p>
      </div>
    </>
  );
};

export const ProjectComponents = (props) => {
  return (
    <>
      <div className="p-0">
        <div className=" flex flex-col">
          <div className="sampleWorks p-5">
            <div className="font-bold text-white p-2 text-2xl defaultFont">
              {props.title.toUpperCase()}
            </div>
            <div className="subFont text-white p-2">
              {props.description}

              <Link
                href={`${props.href}`}
                className="underline font-bold subFont projectLink"
                target={"_blank"}
              >
                {props.toLink}
              </Link>
            </div>
            {props.isMobile ? (
             <div>
                 <div className="grid grid-cols-3 lg:grid-cols-3 md:grid-cols-3 gap-2">
                {props.src.map((i) => {
                  return (
                    <>
                      <motion.div
                        whileHover={{ scale: 1.3 }}
                        whileTap={{ scale: 0.8 }}
                      >
                        <Image
                          src={i}
                          className="services p-2"
                          height={120}
                          width={90}
                        />
                      </motion.div>
                    </>
                  );
                })}
              </div>
              <div className="p-5">
                  <img
                    alt={props.badgeAltText}
                    src={props.badgeSrc}
                    width={70}
                    height={20}
                  />
                </div>
             </div>

            ) : (
              <div>
                <div className=" flex justify-center items-center flex-column ">
                  <motion.div
                    whileHover={{ scale: 1.3 }}
                    whileTap={{ scale: 0.8 }}
                  >
                    <Image
                      src={props.src}
                      className="services p-2"
                      height={150}
                      width={250}
                    />
                  </motion.div>
                </div>
                <div className="p-5">
                  <img
                    alt={props.badgeAltText}
                    src={props.badgeSrc}
                    width={70}
                    height={40}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
