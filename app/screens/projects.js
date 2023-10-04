import Link from "next/link";
import { ProjectComponents, Header, ProjectCategory } from "../_components/util/util";
export default function Projects() {
  return (
    <>
      <div className="  h-min dark:bg-darkMode " id="projects">
        <Header header="Personal Projects" id="projects" />

        <div className="flex flex-col pt-5" id="programming">
          <div className="grid  lg:grid-cols-3 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 p-5 gap-5">
            <ProjectComponents
              title="Job Finder (Prototype)"
              tech="Flutter, Dart"
              actionText="Github"
              href="https://github.com/bryanbauzon/Job-Finder"
              description="In 2020, I joined the UI Challenge managed by 
            Flutter Philippines
          —a mini prototyping challenge made for the community. The main
          goal of this challenge is to create a working prototype, a
          minimum of 1 screen, on any platform that Flutter supports."
              date="2020"
            />
            <ProjectComponents
              title="Portfolio Website"
              actionText="Visit"
              tech="NextJS, Tailwind"
              description="My online space that shows my interests and passion in software technologies and other interesting stuffs."
              href={"https://bryanbauzon.com/"}
              date="2023"
            />
          </div>
        </div>
       
      </div>
    </>
  );
}
