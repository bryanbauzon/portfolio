"use client";
import Navbar from "./_components/navbar";
import Footer from "./_components/footer";
import Services from "./_components/services";
import Home from "./_components/home";
import Skills from "./_components/skills";
import Projects from "./_components/projects";
import Experience from "./_components/experience";
import Salesforce from "./_components/salesforce";
import Contact from "./_components/contact";
import { NextUIProvider } from "@nextui-org/react";
import NavbarComp from "./_components/navbar";
import { usePathname } from "next/navigation";
export default async function Page() {
  const pathname = usePathname();
  let date = new Date();
  let month = date.getMonth() + 1;
  let dayNum = date.getDate();
  let year = date.getFullYear();
  let age = year - 1998;
  
  let day = date.getDay();

  let birthday = "";

  
  if (month == 10 && dayNum == 8) {
    birthday = (
      <div className="text-bold text-[2.2rem] defaultFont">
        CELEBRATING MY {age == 25 ? <><span className="text-theme underline font-bold">QUARTER-CENTURY </span></>:<span  className="text-theme underline font-bold">{ageChecker(age)} YEAR BIRTHDAY</span>}!<br />
        🥳🎉🎊
      </div>
    );
  }

  function ageChecker(age){
    let lastDigit = age.toString().slice(-1);
    let ageStr = age;
    if(lastDigit == 1){
      ageStr += 'st';
    }else  if(lastDigit == 2){
      ageStr += 'nd';
    }else  if(lastDigit == 3){
      ageStr += 'rd';
    }else{
      ageStr += 'th';
    }
    return ageStr
  }
  let dayStatus = "";
  if (!(day % 6)) {
    dayStatus = "Away from keyboard...";
  }

  return (
    <>
      <NextUIProvider>
        <NavbarComp birthday={birthday} />
        <Home
          birthday={birthday}
          month={month}
          year={year}
          dayStatus={dayStatus}
        />
        {birthday == "" ? (
          <>
            <Salesforce />
            <Experience />
            {/* <Services /> */}
            <Projects />
            <Contact />
          </>
        ) : (
          <></>
        )}

        <Footer birthday={birthday} pathname={pathname} isVideo={false}/>

        {/* <Skills /> */}
      </NextUIProvider>
    </>
  );
}
