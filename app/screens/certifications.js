import { BadgeComponents, Header } from "../util/util";
import { HEADERS } from "../constants/strings";
export default function Certifications() {
  return (
    <>
      <div className="h-min dark:bg-darkMode pt-20" id="certifications">
        <Header header={HEADERS[0]} subHeader = "SALESFORCE"id="certifications" />
        <div className="flex items-center justify-center">
          <div className="  w-fit grid grid-cols-1  md:grid-cols-3 lg:grid-cols-3 gap-1">
            <BadgeComponents
              image="/salesforce/certificate/sfadmin.png"
              cert="/salesforce/certificate/sfadmin.png"
              size={350}
              alt="Salesforce Administrator"
              title="Salesforce Administrator"
            />
            <BadgeComponents
              image="/salesforce/certificate/sfpd1.png"
              cert="/salesforce/certificate/sfpd1.png"
              size={350}
              alt="Salesforce Platform Developer 1"
              title="Salesforce Platform Developer 1"
            />
            <BadgeComponents
              image="/salesforce/certificate/sfassoc.png"
              cert="/salesforce/certificate/sfassoc.png"
              size={350}
              alt="Salesforce Associate"
              title="Salesforce Associate"
            />
          </div>
        </div>
      </div>
    </>
  );
}