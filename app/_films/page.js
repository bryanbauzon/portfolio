"use client";
import { ProjectComponent } from "../util/components";
import { NextUIProvider } from "@nextui-org/react";
import { usePathname } from "next/navigation";
import NavbarComp from "../_components/navbar";
import {
  FILMS,
  INTRO_FILM,
  SAME_DAY_EDIT,
  OTHER_PROJECTS,
} from "../constants/strings";

import Footer from "../_components/footer";
export default function Videos() {
  const pathname = usePathname();

  const CategoryComponent = (props) => {
    return (
      <>
        <div className="p-8 xl:text-6xl lg:text-5xl md:text-5xl text-3xl font-bold text-theme">
          {props.displayText}
        </div>
      </>
    );
  };

  return (
    <>
      <NextUIProvider>
        {" "}
        <div className="  h-min dark:bg-darkMode ">
          <NavbarComp pathname={pathname} />

          <div className="flex pb-20  flex-col defaultFont" id="videography">
            <div className="p-4 items-center justify-center flex flex-col">
              <div className="xl:text-8xl lg:text-7xl md:text-7xl text-5xl font-bold ">
                {FILMS}
              </div>
              <div className="ml-5 text-lg defaultFont text-center dark:text-sub text-lightSub">
                {INTRO_FILM}
              </div>
            </div>
            <div>
              <CategoryComponent displayText={SAME_DAY_EDIT} />
              <div className="grid  lg:grid-cols-3 grid-cols-1 sm:grid-cols-1 md:grid-cols-2">
                <ProjectComponent
                  actionText="Watch"
                  title="COLOR ANDA 2024"
                  href="https://www.facebook.com/AndaJoganie/videos/2199920107036783"
                  date="May 2024"
                  src={"/projects/2024/colorAnda.png"}
                />
                <ProjectComponent
                  actionText="Watch"
                  title="HAPPY FIESTA, BARANGAY TONDOL!"
                  href="https://youtu.be/4W2k_fWqps8"
                  date="March 2024"
                  src={"/projects/2024/BarangayTondol.png"}
                />
                <ProjectComponent
                  actionText="Watch"
                  title="57th FOUNDING ANNIVERSARY - TONDOL NATIONAL HIGH SCHOOL"
                  href="https://youtu.be/RvoEv5ymD1Q"
                  date="March 2024"
                  src={"/projects/2024/57foundingAnniversary.png"}
                />
                <ProjectComponent
                  actionText="Watch"
                  title="LIFE IS TOO SHORT"
                  href="https://youtu.be/OpzL18Af2R0"
                  date="February 2024"
                  src={"/projects/2024/lifeIsTooShort.png"}
                />
                <ProjectComponent
                  actionText="Watch"
                  title="Tanduyong Island - The Untold Story"
                  href="https://www.youtube.com/watch?v=iESDS_YYeJA"
                  date="November 2023"
                  src={"/projects/2023/tanduyongIs.png"}
                />
                <ProjectComponent
                  actionText="Watch"
                  title="Capture Everything"
                  href="https://www.youtube.com/watch?v=p-k61M1yU_c"
                  date="November 2023"
                  src={"/projects/2023/captureEverything.png"}
                />
                <ProjectComponent
                  actionText="Watch"
                  title="Life Journey"
                  href="https://youtu.be/TCJZsbnDrJo"
                  date="October 2023"
                  src={"/projects/2023/lifeJourney.png"}
                />
                <ProjectComponent
                  actionText="Watch"
                  title="Quarter Century"
                  href="https://youtu.be/DLmx6iCGLJY"
                  date="October 2023"
                  src={"/projects/2023/quarterCentury.png"}
                />
                <ProjectComponent
                  title="19th BINONGEY FESTIVAL 2023 - MTB CHALLENGE HIGHLIGHTS (SDE)"
                  href="https://youtu.be/VrrJBm4Qmgw"
                  src={"/projects/2023/binongeyFiestival.png"}
                  date="May 2023"
                  actionText="Watch"
                />
                <ProjectComponent
                  actionText="Watch"
                  title="Celebrating Pista'y Dayat 2023!"
                  href="https://youtu.be/BZCwppetjw4"
                  src={"/projects/2023/pistayDayat.png"}
                  date="May 2023"
                />
                <ProjectComponent
                  title="Tondol White Sand Beach - 04 March 2023"
                  href="https://youtu.be/0nX-RlWMblI"
                  src={"/projects/2023/beach.png"}
                  actionText="Watch"
                  date="March 2023"
                />
                <ProjectComponent
                  title="'Panayunan' - Leaves by Ben&Ben"
                  href="https://youtu.be/e3B8Zqu5iA4"
                  src={"/projects/2023/panayunan.png"}
                  actionText="Watch"
                  date="February 2023"
                />
              </div>
            </div>

            <div>
              <CategoryComponent displayText={OTHER_PROJECTS} />
              <div className="grid  lg:grid-cols-3 grid-cols-1 sm:grid-cols-1 md:grid-cols-2">
                <ProjectComponent
                  actionText="Watch"
                  title="DJI AVATA X DJI OSMO ACTION 1"
                  href="https://www.youtube.com/watch?v=6kCg6ZFGFrc"
                  date="January 2024"
                  src={"/projects/2024/avata.png"}
                />
                <ProjectComponent
                  actionText="Watch"
                  title="2023 SEASON"
                  href="https://youtu.be/MR_FI7tNDds"
                  date="December 2023"
                  src={"/projects/2023/2023.png"}
                />
                <ProjectComponent
                  actionText="Watch"
                  title="IT'S REFUSING TO GIVE UP"
                  href="https://youtu.be/7K1WDy3emes"
                  date="December 2023"
                  src={"/projects/2023/help.png"}
                />
                <ProjectComponent
                  actionText="Watch"
                  title="Nature"
                  href="https://youtu.be/zuyhurlybgY"
                  date="September 2023"
                  src={"/projects/2023/nature.png"}
                />
                <ProjectComponent
                  actionText="Watch"
                  title=" Discover Anda, Pangasinan"
                  href="https://www.youtube.com/watch?v=8iBvhVrAnRQ"
                  date="August 2023"
                  src={"/projects/2023/anda.png"}
                />
                <ProjectComponent
                  title="PARINAD TI"
                  href="https://youtu.be/LPIhgopF1RE"
                  src={"/projects/2023/parinadti.png"}
                  date="July 2023"
                  actionText="Watch"
                />
                <ProjectComponent
                  title="JUST KEEP GOING!"
                  href="https://youtu.be/YdbyI57jejA"
                  src={"/projects/2023/keepgoing.png"}
                  date="May 2023"
                  actionText="Watch"
                />

                <ProjectComponent
                  actionText="Watch"
                  title="YOUTH OF IGLESIA FILIPINA INDEPENDIENTE FELLOWSHIP"
                  href="https://youtu.be/Fa-kjsuxRKs"
                  date="April 2023"
                  src={"/projects/2023/yifi.png"}
                />
                <ProjectComponent
                  actionText="Watch"
                  title="Eastwood City"
                  href="https://youtu.be/vcKWDdgcIzk"
                  date="April 2023"
                  src={"/projects/2023/eastwood.png"}
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
