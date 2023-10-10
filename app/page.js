"use client";
import Footer from "./_components/footer";
import Home from "./screens/home";
import Projects from "./screens/projects";
import Experience from "./screens/experience";
import Salesforce from "./screens/salesforce";
import { NextUIProvider } from "@nextui-org/react";
import NavbarComp from "./_components/navbar";
import { usePathname } from "next/navigation";
import { ageChecker } from "./util/util";
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

  
  let dayStatus = "Exploring";
  if (!(day % 6)) {
    dayStatus = "Away from keyboard...";
  }else if(birthday != ""){
    dayStatus = "Celebrating..."
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
