import Link from "next/link";
export default function Experience() {
  return (
    <div
      className="h-min bg-pages pt-20"
      id="experience"
    >
      <h1 className="p-10 lg:text-[3.1rem] md:text-[3.1rem] text-[1.8rem] text-center defaultFont text-white">
        EXPERIENCE
      </h1>
     <div className="flex justify-center p-5">
     <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-2 ">
        {/* Software Engineer */}
        <div className="text-highlights">
            <h1 className="defaultFont text-3xl font-bold lg:text-right md:text-right">Software Engineer</h1>
        </div>
        <div className="text-white pb-5 subFont">
            <h1 className="company"><Link href={"https://www.techmahindra.com/en-in/"} className="underline font-bold" target={"_blank"}>Tech Mahindra</Link> - <span className="font-xs">Full Time</span></h1>
            <h4 className="date">April 2022 - Present</h4>
            <h2 className="font-bold">Roles and Responsibilities:</h2>
            <div className="responsibilities">
                • Developed Service Request, customizations and enhancement based on specification. <br/>
                • Work closely with the product team to ensure that all requirements are met.<br />
                • Bug fixing and Unit Testing.
            </div>
            <h2 className="font-bold">Technology Used:</h2>
            <div>
                • Java Enterprise Edition/ JSP/ ExtJS/ SyncfusionJS/ jQuery/ Elixir Ambience/ Microsoft SQL Server Management/ Struts2/ TortoiseSVN/ JIRA
            </div>
        </div>
        {/* Junior Application Programmer */}
        <div className="text-highlights">
            <h1 className="defaultFont text-3xl font-bold  lg:text-right md:text-right">Junior Application Programmer</h1>
        </div>
        <div className="text-white pb-5 subFont">
            <h1 className="company"><Link href={"https://www.nova-hub.com/"} className="underline font-bold" target={"_blank"}>NovaSolutions (Philippines) Inc.</Link> - <span className="font-xs">Full Time</span></h1>
            <h4 className="date">June 2019 - April 2022</h4>
            <h2 className="font-bold">Roles and Responsibilities:</h2>
            <div className="responsibilities">
                • Developed Service and Change requests, customizations and enhancement based on business requirements/ specifications. <br/>
                • Performed deployment in System Integration Testing (SIT) environment.<br />
                • Performed Bug fixing minor to critical User Acceptance Testing (UAT) and Production issues. <br/>
                • Quality Assurance. <br/>
                • Developed Batch and Scheduled Jobs using cron. <br/>
                • Developed Reports using Elixir Ambience. <br/>
                • Contributed in writing documentations: Test Cases.
    
            </div>
            <h2 className="font-bold">Technology Used:</h2>
            <div>
                • Java Enterprise Edition/ Oracle SQL Developer/ Bitbucket/ Eclipse/ Jira
            </div>
        </div>
      </div>
     </div>
    </div>
  );
}
