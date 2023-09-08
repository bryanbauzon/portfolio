import Link from "next/link";
import Image from "next/image";
export default function Certificates() {
  return (
    <div className="lg:h-screen md:h-[135vh]">
      <div className="flex flex-col justify-center banner">
        <h1 className="p-10 lg:p-20 lg:text-[3.1rem] md:text-[3.1rem] text-[1.8rem] text-center p-10 text-dark nongradient">
          SALESFORCE BADGES<p className="font-mono cert ">Click badge to view certificate.</p>
        </h1>
        
      </div>
      <div className="p-5  grid grid-cols-1  md:grid-cols-1 lg:grid-cols-2 gap-2">
        <div className="flex flex-col  lg:justify-start  md:justify-start justify-center items-center p-5">
          <Link href={"/salesforce/certificate/sfadmin.pdf"} target="_blank">
            <Image
              src={"/salesforce/badges/sfadmin.png"}
              height={70}
              width={70}
            />
          </Link>
          <div>Salesforce Admin</div>
        </div>
        <div>
          <h3 className="p-10">
            A Salesforce Administrator solves business problems by customizing
            the Salesforce Platform. They build, configure, and automate
            technology solutions to deliver business value. Salesforce
            Administrators work with stakeholders to define system requirements
            and customize the platform.
          </h3>
        </div>
        <div className="flex flex-col  lg:justify-start  md:justify-start justify-center items-center p-5">
          <Link href={"/salesforce/certificate/sfpd1.pdf"} target="_blank">
            <Image
              src={"/salesforce/badges/sfpd1.png"}
              height={70}
              width={70}
            />
          </Link>
          <div>Salesforce Platform Developer 1</div>
        </div>
        <div>
          <h3 className="p-10">
            The Salesforce Platform Developer I credential is designed for
            individuals who have experience developing and deploying basic
            business logic and user interfaces using the programmatic
            capabilities of the Lightning Platform. This exam covers these key
            topics, each making up a certain percentage of the exam.
          </h3>
        </div>
        <div className="flex flex-col  lg:justify-start  md:justify-start justify-center items-center p-5">
          <Link href={"/salesforce/certificate/sfassoc.pdf"} target="_blank">
            <Image
              src={"/salesforce/badges/sfassoc.png"}
              height={70}
              width={70}
            />
          </Link>
          <div>Salesforce Associate</div>
        </div>
        <div>
          <h3 className="p-10">
            The Salesforce Certified Associate is a relatively new entry-level
            certification, aimed at Trailblazers with 0-6 months of Salesforce
            experience. This certification removes the emphasis on hands-on
            practical expertise, and instead validates and empowers those with
            foundational Salesforce knowledge.
          </h3>
        </div>
      </div>
    </div>
  );
}
