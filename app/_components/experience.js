import { ExperienceComponents, Header } from "./util/util";
export default function Experience() {
  return (
    <div className="h-min dark:bg-darkMode pt-20" id="experience">
      <Header header="experience" />
      <div className="flex justify-center p-3">
        <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-5 p-5">
          {/* Software Engineer */}
          <ExperienceComponents
            title="Software Engineer"
            website="https://www.techmahindra.com/en-in/"
            company="Tech Mahindra"
            type="Full Time"
            date="April 2022 - Present"
            roles={[
              "Developed Service Request, customizations and enhancement based on specification.",
              "Work closely with the product team to ensure that all requirements are met.",
              "Bug fixing and Unit Testing.",
            ]}
            tech="Java Enterprise Edition/ Vaadin/ Oracle SQL Developer/ Bitbucket/ Eclipse"
          />
          {/* Junior Application Programmer */}
          <ExperienceComponents
            title=" Junior Programmer"
            website="https://www.nova-hub.com/"
            company="NovaSolutions (Philippines) Inc."
            type="Full Time"
            date="June 2019 - April 2022"
            roles={[
              "Developed Service and Change requests, customizations and enhancement based on business requirements/ specifications.",
              "Performed deployment in System Integration Testing (SIT) environment.",
              "Performed Bug fixing minor to critical User Acceptance Testing(UAT) and Production issues.",
              "Quality Assurance",
              "Developed Batch and Scheduled Jobs using cron.",
              "Developed Reports using Elixir Ambience.",
              "Contributed in writing documentations: Test Cases.",
            ]}
            tech="Java Enterprise Edition/ JSP/ ExtJS/ SyncfusionJS/ jQuery/
          Elixir Ambience/ Microsoft SQL Server Management/ Struts2/
          TortoiseSVN/ JIRA"
          />
        </div>
      </div>
    </div>
  );
}
