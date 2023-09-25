import { BadgeComponents, Header } from "./util/util";
export default function Salesforce() {
  return (
    <>
      <div className="h-min dark:bg-darkMode pt-20" id="salesforce">
        <Header
          header="3x salesforce certified"
          subHeader="Click Badge to view the certificate"
        />
        <div className="flex items-center justify-center">
          <div className="  w-fit grid grid-cols-3  md:grid-cols-3 lg:grid-cols-3 gap-8">
            <BadgeComponents
              cert="/salesforce/certificate/sfadmin.png"
              image="/salesforce/badges/sfadmin.png"
              size={100}
              alt="Salesforce Administrator"
              title="Salesforce Administrator"

            />
            <BadgeComponents
              cert="/salesforce/certificate/sfpd1.png"
              image="/salesforce/badges/sfpd1.png"
              size={100}
              alt="Salesforce Platform Developer 1"
              title="Salesforce Platform Developer 1"

            />
            <BadgeComponents
              cert="/salesforce/certificate/sfassoc.png"
              image="/salesforce/badges/sfassoc.png"
              size={100}
              alt="Salesforce Associate"
              title="Salesforce Associate"

            />
          </div>
        </div>
      </div>
    </>
  );
}
