import { ProjectComponents, Header, ProjectCategory } from "./util/util";
export default function Projects() {
  return (
    <>
    <div className="  h-min dark:bg-darkMode " id="projects">
      <Header header="Personal Projects" />

      <div className="flex flex-col">
        <ProjectCategory category={`Mobile/ Web Development`} />
        <div className="grid  lg:grid-cols-3 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 p-5 gap-6">
          <ProjectComponents
            title="Job Finder"
            src={"/projects/jobFinder.png"}
            tech="Flutter"
            actionText="Repo"
            href="https://github.com/bryanbauzon/Job-Finder"
          />
          <ProjectComponents
            title="Portfolio Website"
              src={"/projects/portfolio.png"}
            actionText="Visit"
            tech="NextJS"
            href={"https://bryanbauzon.com/"}
          />
        </div>
      </div>
      <div className="flex flex-col">
        <ProjectCategory category={`Videography/ Video Editing`} />
        <div className="grid  lg:grid-cols-3 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 p-5 gap-6">
          <ProjectComponents
            title="'Panayunan' - Leaves by Ben&Ben"
            href="https://youtu.be/e3B8Zqu5iA4"
            src={"/projects/panayunan2023.png"}
            actionText="Watch"
            tech="February 2023"
          />
         

          <ProjectComponents
            actionText="Watch"
            title="Celebrating Pista'y Dayat 2023!"
            href="https://youtu.be/BZCwppetjw4"
            src={"/projects/pistayDayat2023.png"}
            tech="May 2023"
          />
          <ProjectComponents
            title="19th BINONGEY FESTIVAL 2023 - MTB CHALLENGE HIGHLIGHTS (SDE)"
            href="https://youtu.be/VrrJBm4Qmgw"
            src={"/projects/binongey2023.png"}
            tech="May 2023"
            actionText="Watch"
          />
         <ProjectComponents
            actionText="Watch"
            title=" Discover Anda, Pangasinan"
          
            href="https://www.youtube.com/watch?v=8iBvhVrAnRQ"
            tech="August 2023"
            src={"/projects/anda.png"}
          />
        </div>
      </div>
    </div></>
  );
}
