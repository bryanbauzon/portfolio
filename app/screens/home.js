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
  RESUME_DIR
} from "../constants/strings";
import { checkPathname } from "../util/util";
import { NAME, INTRO_DESCRIPTION } from "../constants/strings";
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
              <Image src={"/profile/profile.jpeg"} className="profile" height={1500} width={550} />
            </div>
            <div>
              <p className="text-tiny mt-2">Welcome, I'm</p>
              <p className="text-2xl text-theme font-bold">{NAME}</p>
              <div className="xl:text-8xl lg:text-7xl md:text-7xl text-3xl font-bold">
                <p>{toUpperLowerCase(DEVELOPER, "u")}</p>
                <Link
                  href={checkPathname("films", props)}
                  className="ml-2 text-theme"
                >
                  {toUpperLowerCase(FILMMAKER, "u")}
                </Link>
              </div>
              <p className="text-lg dark:text-sub text-lightSub">
                {INTRO_DESCRIPTION}
              </p>
              <p className="text-lg dark:text-sub text-lightSub">
                {INTRO_DEV} {INTRO_FILM}
              </p>

              <div className="mt-1 text-3xl flex flex-row">
                <Link
                  href={RESUME_DIR}
                  target={"_blank"}
                  className="underline flex items-center hover:animate-pulse text-theme font-bold"
                >
                  {toUpperLowerCase(RESUME, "")}
                </Link>
                <Link
                  href={"#experience"}
                  className="underline flex items-center hover:animate-pulse text-theme font-bold ml-2"
                >
                   {toUpperLowerCase(EXPLORE, "")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
