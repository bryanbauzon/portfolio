import Link from "next/link";
import { motion } from "framer-motion";
import { toUpperLowerCase } from "../util/util";
import {
  FILMMAKER,
  DEVELOPER,
  EXPLORE,
  INTRO_DEV,
  INTRO_FILM,
  RESUME,
} from "../constants/strings";
import { checkPathname, openForWork } from "../util/util";
import { NAME, INTRO_DESCRIPTION } from "../constants/strings";
import { CustomLinksComponent } from "../util/components";
import Image from "next/image";
export default function Home(props) {
  const textDisplayConfig = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
        staggerDirection: -1,
      },
    },
  };

  return (
    <div className={`h-screen dark:bg-darkMode  `}>
      <motion.div variants={textDisplayConfig} initial="hidden" animate="show">
        <div className=" flex h-screen w-full items-center">
          <div className=" p-10 defaultFont grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-3">
            <div className="w-full hidden md:hidden lg:flex  items-center justify-center">
              <Image
                src={"/profile/image.png"}
                className="profile mr-5 mb-10"
                height={2000}
                width={750}
              />
            </div>
            <div>
              <p className="text-tiny mt-2 font-bold">Welcome, I'm</p>
              <p className="text-2xl text-theme font-bold">{NAME}</p>
              <div className="xl:text-8xl lg:text-7xl md:text-7xl text-5xl font-bold">
                <p className="dark:text-white text-darkMode  animate-pulse">
                  {toUpperLowerCase(DEVELOPER, "u")}
                </p>
                {/* <Link
                  href={checkPathname("films", props)}
                  className="ml-2 text-theme animate-pulse"
                >
                  {toUpperLowerCase(FILMMAKER, "u")}
                </Link> */}
              </div>
              <p className="text-lg dark:text-sub text-lightSub">
                {INTRO_DESCRIPTION}
              </p>
              <p className="text-lg dark:text-sub text-lightSub">
                {INTRO_DEV}
                {/* {INTRO_FILM} */}
              </p>

              <div className="mt-1 text-3xl flex flex-row">
                <CustomLinksComponent
                  isAnimate={true}
                  href={openForWork()}
                  displayText={toUpperLowerCase(RESUME, "")}
                />
                <CustomLinksComponent
                  isAnimate={true}
                  href={"#experience"}
                  displayText={toUpperLowerCase(EXPLORE, "")}
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
