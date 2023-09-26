"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Card,
  CardFooter,
  Image,
} from "@nextui-org/react";

export const Header = (props) => {
  return (
    <>
      <div className="flex flex-col justify-center">
        <h1 className="p-5 cursor-pointer header text-3xl  text-center defaultFont text-darkMode dark:text-white font-bold">
          {props.header.toUpperCase()}
          <p className="subFont font-light cert text-darkMode dark:text-white">
            {props.subHeader != "" ? props.subHeader : <></>}
          </p>
        </h1>
      </div>
    </>
  );
};

export const ProjectCategory = (props) => {
  return (
    <>
     <div> <h2 className="pl-10 font-bold text-theme">{props.category}</h2></div>
    </>
  );
};
// Badge Components
export const BadgeComponents = (props) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <div className="flex flex-col lg:justify-center  md:justify-center justify-center items-center p-1">
        <motion.div
          className="cursor-pointer"
          whileHover={{ scale: 1.2 }}
          onClick={() => {
            onOpen();
          }}
        >
          <Image
            src={props.image}
            height={props.size}
            width={props.size}
            alt={props.alt}
            loading={"eager"}
          ></Image>
        </motion.div>
        <Modal
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          size="5xl"
          backdrop="blur"
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  {props.title}
                </ModalHeader>
                <ModalBody>
                  <img src={props.cert} loading="eager" />
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Close
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </div>
    </>
  );
};

//ExperienceComponents
export const ExperienceComponents = (props) => {
  return (
    <>
      <div className="flex flex-col lg:p-10 md:p-10 p-5 experience h-min">
        <div>
          <h1 className="defaultFont text-2xl text-theme font-bold ">
            {props.title.toUpperCase()}
          </h1>
        </div>
        <div className="text-darkMode dark:text-white lg:p-5 md:p-5 subFont">
          <h1 className="company">
            <Link
              href={props.website}
              className="underline font-bold cursor-alias"
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
              return <li key={`res-${val}`}>{val}</li>;
            })}
          </div>
          <h2 className="font-bold">Technology Used:</h2>
          <li>{props.tech}</li>
        </div>
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
              loading={"eager"}
            />
          </motion.div>
        </div>
        <p className="text-center text-lg font-bold text-theme defaultFont">
          {props.title}
        </p>
        <p className="text-center text-darkMode dark:text-white subFont">
          {props.description}
        </p>
      </div>
    </>
  );
};

export const ProjectComponents = (props) => {
  return (
    <>
      <div>
      <div className="flex justify-center">
       <Card isPressable
          isFooterBlurred
          className="w-fit h-[300px] col-span-12 sm:col-span-7"
        >
          <Image
            removeWrapper
            alt="Relaxing app background"
            className="z-0 w-full h-full object-cover"
            src={props.src}
            loading="eager"
          />

          <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
            <div className="flex flex-grow gap-2 items-center">
              <div className="flex flex-col justify-start items-start">
                <p className="text-tiny text-theme text-left font-bold">
                  {props.title.toUpperCase()}
                </p>
                <p className="text-tiny text-white/60">{props.tech}</p>
              </div>
            </div>
            <Button radius="full" size="sm" className="bg-theme">
              <Link href={props.href} target="_blank">
                {props.actionText}
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
      </div>
    </>
  );
};

