import { BadgeComponent, HeaderComponent } from "../util/components";
import { HEADERS } from "../constants/strings";
export default function Certifications() {
  return (
    <>
      <div className="h-min dark:bg-darkMode pt-20" id="certifications">
        <HeaderComponent header={HEADERS[0]} subHeader = "SALESFORCE"id="certifications" />
        <div className="flex items-center justify-center">
          <div className="  w-fit grid grid-cols-1  md:grid-cols-3 lg:grid-cols-3 gap-1">
             
            <BadgeComponent
              imageCert="/salesforce/certificate/sfadmin.png"
              size={350}
              isUdemy={false}
              altTitle="Salesforce Administrator"
            />
            <BadgeComponent
              imageCert="/salesforce/certificate/sfpd1.png"
              size={350}
              isUdemy={false}
              altTitle="Salesforce Platform Developer 1"
            />
            <BadgeComponent
              imageCert="/salesforce/certificate/sfassoc.png"
              size={350}
              isUdemy={false}
              altTitle="Salesforce Associate"
            />
             <BadgeComponent
              imageCert="/salesforce/certificate/expense-manager.jpeg"
              size={300}
              isUdemy={true}
              altTitle="Expense Manager App with LWC OSS, JSForce, OAuth2 & ExpressJS"
            />
          </div>
        </div>
      </div>
    </>
  );
}
