import Link from "next/link";
import {
  ProjectComponents,
  Header,
  ProjectCategory,
} from "../_components/util/util";
export default function Videos() {
  return (
    <>
      {" "}
      <div className="  h-min dark:bg-darkMode ">
        <div className="flex items-center p-5">
          <Link href="/"   className="font-bold text-darkMode dark:text-white">@bryanbauzon</Link>
          <Header header="Videography" className="pt-5" />
        </div>

        <div className="flex flex-col pt-1" id="videography">
          <div className="grid  lg:grid-cols-3 grid-cols-1 sm:grid-cols-1 pt-1 md:grid-cols-2">
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
      </div>
    </>
  );
}
