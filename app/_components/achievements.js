
import { BadgeComponents } from "./util/util";
import { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
export default function Achievements(){
    return(<>
         <div className="h-min bg-pages p-20" id="certificates">
      <div className="flex flex-col justify-center">
        <h1 className="p-10 lg:text-[3.1rem] md:text-[3.1rem] text-[1.8rem] text-center defaultFont hover:text-theme text-white">
          3X SALESFORCE CERTIFIED
          <p className="subFont font-light cert text-white underline">
            Click badge to view certificate.
          </p>
        </h1>
      </div>
     <div className="flex items-center justify-center">
     <div className="  w-fit grid grid-cols-3  md:grid-cols-3 lg:grid-cols-3 gap-8">
      
      <BadgeComponents pdf="/salesforce/certificate/sfadmin.pdf" image="/salesforce/badges/sfadmin.png" size={100} alt="Salesforce Administrator"/>
      <BadgeComponents pdf="/salesforce/certificate/sfpd1.pdf" image="/salesforce/badges/sfpd1.png" size={100} alt="Salesforce Platform Developer 1"/>
      <BadgeComponents pdf="/salesforce/certificate/sfassoc.pdf" image="/salesforce/badges/sfassoc.png" size={100} alt="Salesforce Associate"/>

      </div>
     </div>
    </div>
    </>)
}