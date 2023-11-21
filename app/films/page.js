"use client";
import { ProjectComponent } from "../util/components";
import { NextUIProvider } from "@nextui-org/react";
import { usePathname } from "next/navigation";
import NavbarComp from "../_components/navbar";
import { FILMS, INTRO_FILM,SAME_DAY_EDIT, OTHER_PROJECTS } from "../constants/strings";

import Footer from "../_components/footer";
export default function Videos() {
  const pathname = usePathname();

  return (
    <>
      <NextUIProvider>
        {" "}
        <div className="  h-min dark:bg-darkMode ">
          <NavbarComp pathname={pathname} />

          <div className="flex flex-col" id="videography">
            <div className="p-4 items-center justify-center flex flex-col">
              <div className="xl:text-8xl lg:text-7xl md:text-7xl text-5xl font-bold">
                {FILMS}
              </div>
              <div className="ml-5 text-lg defaultFont text-center dark:text-sub text-lightSub">
                {INTRO_FILM}
              </div>
            </div>
            <div>
              <div className="p-8 xl:text-6xl lg:text-5xl md:text-5xl text-3xl font-bold text-theme">
                {SAME_DAY_EDIT}
              </div>
              <div className="grid  lg:grid-cols-3 grid-cols-1 sm:grid-cols-1 md:grid-cols-2">
                <ProjectComponent
                  actionText="Watch"
                  title="Life Journey"
                  href="https://youtu.be/TCJZsbnDrJo"
                  date="October 2023"
                  src={"/projects/lifeJourney.png"}
                />
                <ProjectComponent
                  actionText="Watch"
                  title="Quarter Century"
                  href="https://youtu.be/DLmx6iCGLJY"
                  date="October 2023"
                  src={"/projects/quarterCentury.png"}
                />
                <ProjectComponent
                  title="19th BINONGEY FESTIVAL 2023 - MTB CHALLENGE HIGHLIGHTS (SDE)"
                  href="https://youtu.be/VrrJBm4Qmgw"
                  src={"/projects/binongey2023.png"}
                  date="May 2023"
                  actionText="Watch"
                />
                <ProjectComponent
                  actionText="Watch"
                  title="Celebrating Pista'y Dayat 2023!"
                  href="https://youtu.be/BZCwppetjw4"
                  src={"/projects/pistayDayat2023.png"}
                  date="May 2023"
                />
                 <ProjectComponent
                title="Tondol White Sand Beach - 04 March 2023"
                href="https://youtu.be/0nX-RlWMblI"
                src={"/projects/beach.png"}
                actionText="Watch"
                date="March 2023"
              />
              <ProjectComponent
                title="'Panayunan' - Leaves by Ben&Ben"
                href="https://youtu.be/e3B8Zqu5iA4"
                src={"/projects/panayunan2023.png"}
                actionText="Watch"
                date="February 2023"
              />
              </div>
            </div>

           <div>
           <div className="p-8 xl:text-6xl lg:text-5xl md:text-5xl text-3xl font-bold text-theme">
                {OTHER_PROJECTS}
              </div>
           <div className="grid  lg:grid-cols-3 grid-cols-1 sm:grid-cols-1 md:grid-cols-2">
              <ProjectComponent
                actionText="Watch"
                title="Nature"
                href="https://youtu.be/zuyhurlybgY"
                date="September 2023"
                src={"/projects/nature.png"}
              />
              <ProjectComponent
                actionText="Watch"
                title=" Discover Anda, Pangasinan"
                href="https://www.youtube.com/watch?v=8iBvhVrAnRQ"
                date="August 2023"
                src={"/projects/anda.png"}
              />
              <ProjectComponent
                title="PARINAD TI"
                href="https://youtu.be/LPIhgopF1RE"
                src={"/projects/parinadti.png"}
                date="July 2023"
                actionText="Watch"
              />
              <ProjectComponent
                title="JUST KEEP GOING!"
                href="https://youtu.be/YdbyI57jejA"
                src={"/projects/keepgoing.png"}
                date="May 2023"
                actionText="Watch"
              />

              <ProjectComponent
                actionText="Watch"
                title="YOUTH OF IGLESIA FILIPINA INDEPENDIENTE FELLOWSHIP"
                href="https://youtu.be/Fa-kjsuxRKs"
                date="April 2023"
                src={"/projects/yifi.png"}
              />
              <ProjectComponent
                actionText="Watch"
                title="Eastwood City"
                href="https://youtu.be/vcKWDdgcIzk"
                date="April 2023"
                src={"/projects/eastwood.png"}
              />
             
            </div>
           </div>
          </div>

          <Footer pathname={pathname} />
        </div>
      </NextUIProvider>
    </>
  );
}
