import { BadgeComponents, Header } from "../util/util";
import { HEADERS } from "../constants/strings";
export default function Certifications() {
  return (
    <>
      <div className="h-min dark:bg-darkMode pt-20" id="certifications">
        <Header header={HEADERS[0]} subHeader = "SALESFORCE"id="certifications" />
        <div className="flex items-center justify-center">
          <div className="  w-fit grid grid-cols-1  md:grid-cols-4 lg:grid-cols-4 gap-1">
              <BadgeComponents
              imageCert="/salesforce/certificate/expense-manager.jpeg"
              size={205}
              isUdemy={true}
              altTitle="Expense Manager App with LWC OSS, JSForce, OAuth2 & ExpressJS"
            />
            <BadgeComponents
              imageCert="/salesforce/certificate/sfadmin.png"
              size={350}
              isUdemy={false}
              altTitle="Salesforce Administrator"
            />
            <BadgeComponents
              imageCert="/salesforce/certificate/sfpd1.png"
              size={350}
              isUdemy={false}
              altTitle="Salesforce Platform Developer 1"
            />
            <BadgeComponents
              imageCert="/salesforce/certificate/sfassoc.png"
              size={350}
              isUdemy={false}
              altTitle="Salesforce Associate"
            />
          </div>
        </div>
      </div>
    </>
  );
}
