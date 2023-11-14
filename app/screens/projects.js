import { ProjectComponents, Header } from "../util/util";
import { HEADERS } from "../constants/strings";
export default function Projects() {
  return (
    <>
      <div className="  h-min dark:bg-darkMode " id="projects">
        <Header header={HEADERS[2]} id="projects" />

        <div className="flex flex-col pt-5 items-center" id="programming">
          <div className="grid  lg:grid-cols-3 grid-cols-1 lg:grid-cols-2 md:grid-cols-2 p-5 gap-4">
            <ProjectComponents
              title="Expense Manager"
              actionText="Github"
              tech="Salesforce, LWR, Apex"
              description="Gain total control of your money. Become your own money manager and make every cent count."
              href="https://github.com/bryanbauzon/expense-manager"
              date="2023"
            />

            <ProjectComponents
              title="NextJS Template"
              actionText="Github"
              tech="NextJS, Tailwind"
              description="A NextJS Template for building website."
              href="https://github.com/bryanbauzon/nextjs-template"
              date="2023"
              href2={"https://nextjs-template-demooo.vercel.app/"}
              actionText2="Live"
            />
            <ProjectComponents
              title="Portfolio Website"
              actionText="Live"
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
