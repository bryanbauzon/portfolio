"use client";
import { ProjectComponents } from "../util/util";
import { NextUIProvider } from "@nextui-org/react";
import { usePathname } from "next/navigation";
import NavbarComp from "../_components/navbar";
import Footer from "../_components/footer";
export default function Videos() {
  
  const pathname = usePathname();

  return (
    <>
      <NextUIProvider>
        {" "}
        <div className="  h-min dark:bg-darkMode ">
          <NavbarComp pathname={pathname}/>

          <div className="flex flex-col" id="videography">
            <div className="grid  lg:grid-cols-3 grid-cols-1 sm:grid-cols-1 md:grid-cols-2">
            <ProjectComponents
                actionText="Watch"
                title="Life Journey"
                href="https://youtu.be/TCJZsbnDrJo"
                date="October 2023"
                src={"/projects/lifeJourney.png"}
              />
            <ProjectComponents
                actionText="Watch"
                title="Quarter Century"
                href="https://youtu.be/DLmx6iCGLJY"
                date="October 2023"
                src={"/projects/quarterCentury.png"}
              />
              <ProjectComponents
                actionText="Watch"
                title="Nature"
                href="https://youtu.be/zuyhurlybgY"
                date="September 2023"
                src={"/projects/nature.png"}
              />
              <ProjectComponents
                actionText="Watch"
                title=" Discover Anda, Pangasinan"
                href="https://www.youtube.com/watch?v=8iBvhVrAnRQ"
                date="August 2023"
                src={"/projects/anda.png"}
              />
              <ProjectComponents
                title="PARINAD TI"
                href="https://youtu.be/LPIhgopF1RE"
                src={"/projects/parinadti.png"}
                date="July 2023"
                actionText="Watch"
              />
              <ProjectComponents
                title="JUST KEEP GOING!"
                href="https://youtu.be/YdbyI57jejA"
                src={"/projects/keepgoing.png"}
                date="May 2023"
                actionText="Watch"
              />
              <ProjectComponents
                title="19th BINONGEY FESTIVAL 2023 - MTB CHALLENGE HIGHLIGHTS (SDE)"
                href="https://youtu.be/VrrJBm4Qmgw"
                src={"/projects/binongey2023.png"}
                date="May 2023"
                actionText="Watch"
              />
              <ProjectComponents
                actionText="Watch"
                title="Celebrating Pista'y Dayat 2023!"
                href="https://youtu.be/BZCwppetjw4"
                src={"/projects/pistayDayat2023.png"}
                date="May 2023"
              />
                 <ProjectComponents
                actionText="Watch"
                title="YOUTH OF IGLESIA FILIPINA INDEPENDIENTE FELLOWSHIP"
                href="https://youtu.be/Fa-kjsuxRKs"
                date="April 2023"
                src={"/projects/yifi.png"}
              />
              <ProjectComponents
                actionText="Watch"
                title="Eastwood City"
                href="https://youtu.be/vcKWDdgcIzk"
                date="April 2023"
                src={"/projects/eastwood.png"}
              />
              <ProjectComponents
                title="Tondol White Sand Beach - 04 March 2023"
                href="https://youtu.be/0nX-RlWMblI"
                src={"/projects/beach.png"}
                actionText="Watch"
                date="March 2023"
              />
              <ProjectComponents
                title="'Panayunan' - Leaves by Ben&Ben"
                href="https://youtu.be/e3B8Zqu5iA4"
                src={"/projects/panayunan2023.png"}
                actionText="Watch"
                date="February 2023"
              />
            </div>
          </div>

          <Footer pathname={pathname}/>
        </div>
      </NextUIProvider>
    </>
  );
}
