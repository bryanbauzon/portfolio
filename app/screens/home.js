import Link from "next/link";
import { motion } from "framer-motion";
import { Chip } from "@nextui-org/react";
export default function Home(props) {
  const textDisplayConfig = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.8,
        staggerDirection: -1,
      },
    },
  };

  return (
    <div className={`h-screen dark:bg-darkMode  `} id="home">
      <div className="grid grid-cols-1 p-5 lg:p-20 pt-10 md:pt-70 lg:pt-5 md:grid-cols-1 lg:grid-cols-2 gap-1">
        <motion.div
          variants={textDisplayConfig}
          initial="hidden"
          animate="show"
        >
          <div className="text-darkMode lg:text-[1.4rem] dark:text-white defaultFont text-[1.3rem] flex flex-col justify-center md:h-[50vh] items-left lg:h-[70vh] h-[70vh] ">
            <span className="text-2xl text-darkMode dark:text-white">
              Hi! I'm <span className="font-bold">MAX BRYAN BAUZON</span>,
            </span>
            {props.birthday != "" ? (
              props.birthday
            ) : (
              <>
                <span className="defaultFont text-[2.5rem] lg:text-[3rem]">
                  A <span className="text-theme">SOFTWARE DEVELOPER </span>
                </span>
                <span className="dark:text-white text-darkMode defaultFont text-2xl">
                  by profession with {props.year - 2019}+ years
                  {/* {props.month - 6}{" "} */} of work experience based in the
                </span>
                <div className="basedCountry text-[3rem] text-darkMode dark:text-white lg:text-[5rem]">
                  PHILIPPINES.
                </div>
              </>
            )}

            <span className="subFont dark:text-white text-darkMode text-sm">
              I am a passionate software developer who is continuously learning
              and improving my skills in everyday life. Reading various
              philosophy books helps me think positively and see life much
              better. I am also interested in Photography and videography to
              freeze time and capture moments.
            </span>
            <br />
            <Chip
              color={
                props.dayStatus == "Celebrating..."
                  ? "warning"
                  : props.dayStatus == "Away from keyboard..."
                  ? "default"
                  : "success"
              }
              className="dark:text-white text-darkMode animate-pulse"
              variant="dot"
            >
              {props.dayStatus}
            </Chip>
          </div>
        </motion.div>
        <div className="flex flex-col justify-center  items-center md:h-[10vh] lg:h-[70vh] h-[5vh] ">
          {props.birthday != "" ? (
            <motion.div
              variants={textDisplayConfig}
              initial="hidden"
              animate="show"
              whileTap={{ scale: 0.9 }}
            >
              <Link
                href={"/buymeacoffee"}
                className="defaultFont coffee text-[2rem] dark:text-white text-darkMode cursor-alias"
              >
                Buy me a Coffee ☕
              </Link>
            </motion.div>
          ) : (
            <></>
          )}
        </div>
      </div>
      {props.birthday == "" ? (
        <div className=" flex justify-center items-center">
          <div className="animate-bounce">
            <Link href="#salesforce">
              <svg
                color="#ffff"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                class="w-6 h-20 text-darkMode dark:text-white"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
                />
              </svg>
            </Link>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}