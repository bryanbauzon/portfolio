import Image from "next/image";
import { motion, useScroll } from "framer-motion";
import Link from "next/link";
import React from "react";
import { Divider } from "@nextui-org/react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";

export const Header = (props) => {
  return (
    <>
      <div className="flex flex-col justify-center">
        <h1 className="p-5 cursor-pointer header text-3xl  text-center defaultFont text-white">
          {props.header.toUpperCase()}
          <p className="subFont font-light cert text-white">
            {props.subHeader != "" ? props.subHeader : <></>}
          </p>
        </h1>
      </div>
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
                  <img src={props.cert} />
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
        <Divider className="bg-theme" />
        <div className="text-white lg:p-5 md:p-5 subFont">
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
              return <li>{val}</li>;
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
        <p className="text-center text-white subFont">{props.description}</p>
      </div>
    </>
  );
};

export const ProjectComponents = (props) => {
  return (
    <>
      <div className="p-0 projectContainer" id={props.id}>
        <div className=" flex flex-col">
          <div className="sampleWorks p-5">
            {props.isMobile ? (
              <div>
                <div className="grid grid-cols-3 lg:grid-cols-3 md:grid-cols-3 ">
                  {props.src.map((i) => {
                    return (
                      <>
                        <motion.div
                          // whileHover={{ scale: 1.3 }}
                          whileTap={{ scale: 0.8 }}
                          // href={`${props.href}`}
                          // target={"_blank"}
                        >
                          <Image
                            src={i}
                            className="services p-2"
                            height={120}
                            width={90}
                            alt={props.title.toUpperCase()}
                            loading={"eager"}
                          />
                        </motion.div>
                      </>
                    );
                  })}
                </div>
                <div className="p-2 flex items-center">
                  {props.badgeSrc ? (
                    <>
                      <img alt={props.badgeAltText} src={props.badgeSrc} />

                      <div className="pl-2 font-bold  text-theme subFont text-xs">
                        {props.tech != "" ? props.tech.toLowerCase() : ""}
                      </div>
                    </>
                  ) : (
                    <></>
                  )}

                  {props.repo ? (
                    <>
                      {" "}
                      <Link
                        href={`${props.href}`}
                        className="ml-2 cursor-alias"
                        target={"_blank"}
                      >
                        <img alt="Source" src={props.repo} />
                      </Link>
                    </>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            ) : (
              <div>
                <div className=" flex justify-center items-center flex-column ">
                  <motion.div
                    // whileHover={{ scale: 1.3 }}
                    whileTap={{ scale: 0.8 }}
                    // href={`${props.href}`}
                    // target={"_blank"}
                  >
                    <Image
                      src={props.src}
                      className="services p-2"
                      height={150}
                      width={280}
                      alt={props.title.toUpperCase()}
                      loading={"eager"}
                    />
                  </motion.div>
                </div>
                <div className="p-2 flex  items-center">
                  {props.badgeSrc ? (
                    <>
                      <img alt={props.badgeAltText} src={props.badgeSrc} />
                    </>
                  ) : (
                    <></>
                  )}

                  {props.repo ? (
                    <>
                      <Link
                        href={`${props.href}`}
                        className="ml-2 cursor-alias"
                        target={"_blank"}
                      >
                        <img alt="Source" src={props.repo} />
                      </Link>
                      <div className="pl-2 font-bold text-theme subFont text-xs">
                        {props.tech != "" ? props.tech.toLowerCase() : ""}
                      </div>
                    </>
                  ) : (
                    <div className="pl-2 text-theme subFont text-xs font-bold ">
                      {props.tech != "" ? props.tech.toLowerCase() : ""}
                    </div>
                  )}
                </div>
              </div>
            )}
            <div className="projectDetails">
              <div className="font-bold text-2xl defaultFont">
                {props.title.toUpperCase()}
              </div>
              <Divider className="bg-theme" />
              <div className="subFont pt-4">{props.description}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
