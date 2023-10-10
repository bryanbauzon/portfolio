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
  CardHeader,
  Tooltip,
} from "@nextui-org/react";
import Image from "next/image";

export const Header = (props) => {
  return (
    <>
      <div className="flex flex-col justify-center">
        <Link href={"#" + (props.id != undefined ? props.id : "")} draggable>
          <h1 className="p-5 cursor-pointer header text-3xl  text-center defaultFont text-darkMode dark:text-white font-bold">
            {props.header.toUpperCase()}
            <p className="subFont font-light cert text-darkMode dark:text-white">
              {props.subHeader != "" ? props.subHeader : <></>}
            </p>
          </h1>
        </Link>
      </div>
    </>
  );
};

export const ProjectCategory = (props) => {
  return (
    <>
      <div>
        {" "}
        <h1 className="pl-10 font-bold text-theme underline">
          {props.category.toUpperCase()}
        </h1>
      </div>
    </>
  );
};

//quotes Component
export const AboutComponent = (props) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Link
        className="font-bold text-theme"
        href={"javascript:void(0);"}
        onClick={() => {
          onOpen();
        }}
      >
       {props.websiteName}
      </Link>

      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size="xs"
        backdrop="blur"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Hi!</ModalHeader>
              <ModalBody>
                <p className="defaultFont text-sm">
                  What pain do you want in life? What are you willing to
                  struggle for?
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export const ContactComponents = (props) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Link
        className="text-darkMode dark:text-white"
        href={"javascript:void(0);"}
        onClick={() => {
          onOpen();
        }}
      >
        {props.link}
      </Link>

      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size="xs"
        backdrop="blur"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Let's work together! 🚀
              </ModalHeader>
              <ModalBody>
                <p className="defaultFont text-md">
                  {" "}
                  I would love to hear from you. Whether it’s a project, a job
                  opportunity, or just a chat. Feel free to contact me! 👋
                </p>
                <Link href={`mailto:mrbryanbauzon@gmail.com`} className="text-sm text-theme">mrbryanbauzon@gmail.com</Link>
              </ModalBody>
              <ModalFooter>
                <Button color="" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
// Badge Components
export const BadgeComponents = (props) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <div className="flex flex-col lg:justify-center  md:justify-center justify-center items-center p-5">
        <motion.div
          className="cursor-pointer"
          whileHover={{ scale: 1.2, rotate: [0, 1, 1, 0] }}
          onClick={() => {
            onOpen();
          }}
        >
          <Image
            src={props.image}
            height={props.size}
            width={props.size}
            alt={props.alt}
            priority
          />
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
                  <img src={props.cert} priority />
                </ModalBody>
                <ModalFooter>
                  <Button variant="light" onPress={onClose}>
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
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <div>
        <Card className="max-w-[420px] p-10">
          <CardHeader className="justify-between">
            <div className="flex gap-5">
              <div className="flex flex-col gap-1 items-start justify-center">
                <h1 className="text-small font-semibold leading-none text-theme font-bold">
                  {props.company}
                </h1>
                <h2 className="text-small tracking-tight text-default-400">
                  {props.title} - {props.type}
                </h2>
              </div>
            </div>
          </CardHeader>

          <CardFooter className="gap-3">
            <div className="flex gap-1">
              <p className=" text-default-400 text-small">{props.date}</p>
            </div>
            <div className="flex gap-1">
              <Button
                className="ml-5 bg-theme"
                size="sm"
                onClick={() => {
                  onOpen();
                }}
              >
                Details
              </Button>
            </div>
          </CardFooter>
        </Card>
        <Modal
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          size="4xl"
          backdrop="blur"
          className="p-5"
          scrollBehavior="inside"
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  <h1 className="text-theme">
                    {" "}
                    {props.title} @ {props.company}
                  </h1>
                </ModalHeader>
                <ModalBody>
                  <div>
                    <h2 className="font-bold">Date:</h2>
                    <p> {props.date}</p>
                    {props.type}
                  </div>
                  <div>
                    <h2 className="font-bold">Roles:</h2>
                    {props.roles.map((val) => {
                      return <li key={`res-${val}`}>{val}</li>;
                    })}
                  </div>
                  <div>
                    <h2 className="font-bold">Technologies:</h2>
                    {props.tech}
                  </div>
                  <div>
                    <h2 className="font-bold">Website:</h2>
                    <Link
                      href={props.website}
                      className="text-theme underline"
                      target="_blank"
                    >
                      {props.website}
                    </Link>
                  </div>
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

export const ServicesComponents = (props) => {
  return (
    <>
      <div>
        <div className="flex justify-center p-3">
          <motion.div whileHover={{ scale: 1.5 }}>
            <img
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
  let IMAGE_SRC = props.src;
  return (
    <>
      <div className="flex justify-center">
        {props.src == null ? (
          <div className="w-full">
            <Card className="max-w-[420px] p-10">
              <CardHeader className="justify-between">
                <div className="flex gap-5">
                  <div className="flex flex-col gap-1 items-start justify-center">
                    <h1 className="text-lg font-semibold leading-none text-theme font-bold">
                      {props.title} - {props.date}
                    </h1>
                    <h2 className="text-small tracking-tight text-default-400">
                      {props.description}
                    </h2>
                  </div>
                </div>
              </CardHeader>

              <CardFooter className="gap-3">
                <div className="flex gap-1">
                  <p className=" text-default-400 text-small font-bold">
                    {props.tech}
                  </p>
                </div>
                <div className="content-end">
                  <Link
                    href={props.href}
                    className="underline text-theme text-small"
                    target={"_blank"}
                  >
                    {props.actionText}
                  </Link>
                </div>
              </CardFooter>
            </Card>
          </div>
        ) : (
          <motion.div whileTap={{ scale: 0.8 }}>
            <Tooltip
              showArrow={true}
              color="foreground"
              content={
                <div className="px-1 py-2">
                  <div className="text-small font-bold">{props.title}</div>
                  <div className="text-tiny">{props.date}</div>
                </div>
              }
            >
              <Link href={props.href} target="_blank">
                <Image
                  className="rounded-none m-0 p-0 h-full w-full"
                  src={IMAGE_SRC}
                  priority
                  width={500}
                  height={500}
                />
              </Link>
            </Tooltip>
          </motion.div>
        )}
      </div>
    </>
  );
};
export function checkPathname(redirect, props) {
  redirect = redirect.toLowerCase();
  if (redirect === "home") {
    return "/";
  }else if(redirect === 'films'){
    return '/'+ redirect;
  }
  if (props.pathname === "/films") {
    if(redirect === '#home'){
      return '/'
    }
    return "/#" + redirect;
  }
  return '#'+redirect;
}

export function ageChecker(age) {
  let lastDigit = age.toString().slice(-1);
  let ageStr = age;
  if (lastDigit == 1) {
    ageStr += "st";
  } else if (lastDigit == 2) {
    ageStr += "nd";
  } else if (lastDigit == 3) {
    ageStr += "rd";
  } else {
    ageStr += "th";
  }
  return ageStr;
}
