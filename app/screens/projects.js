import { ProjectComponent, HeaderComponent } from "../util/components";
import { HEADERS } from "../constants/strings";
export default function Projects() {
  return (
    <>
      <div className="  h-min dark:bg-darkMode " id="projects">
        <HeaderComponent header={HEADERS[2]} id="projects" />

        <div className="flex flex-col pt-5 items-center" id="programming">
          <div className="grid  lg:grid-cols-3 grid-cols-1 lg:grid-cols-2 md:grid-cols-2 p-5 gap-4">
            <ProjectComponent
              title="Expense Manager"
              actionText="Github."
              tech="Salesforce, LWR OSS, JSForce, OAuth2, ExpressJS"
              description="Gain total control of your money. Become your own money manager and make every cent count."
              href="https://github.com/bryanbauzon/expense-manager"
              date="2023"
            />

            <ProjectComponent
              title="NextJS Template"
              actionText="Github."
              tech="NextJS, Tailwind"
              description="A NextJS Template for building website."
              href="https://github.com/bryanbauzon/nextjs-template"
              date="2023"
              href2={"https://nextjs-template-demooo.vercel.app/"}
              actionText2="Live."
            />
            <ProjectComponent
              title="Portfolio Website"
              tech="NextJS, Tailwind"
              description="My online space that shows my interests and passion in software technologies and other interesting stuffs."
            
              date="2023"
              href={"https://github.com/bryanbauzon/portfolio"}
              actionText="Github."
              href2={"https://bryanbauzon.com/"}
              actionText2="Live."
            />
          </div>
        </div>
      </div>
    </>
  );
}
