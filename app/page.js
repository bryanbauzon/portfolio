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
export default async function Page() {
  let date = new Date();
  let month = date.getMonth() + 1;
  let dayNum = date.getDate();
  let year = date.getFullYear();
  let day = date.getDay();

  let birthday = "";
  let dayStatus = "";
  if (!(day % 6)) {
    dayStatus = "Probably sleeping...";
  }

  if (month == 10 && dayNum == 8) {
    birthday = (
      <div className="text-bold text-[2.2rem] defaultFont">
        CELEBRATING MY <span className="text-theme">QUARTER-CENTURY</span>
        !<br />
        🥳🎉🎊
      </div>
    );
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
            <Services />
            <Projects />
            <Contact />
          </>
        ) : (
          <></>
        )}

        <Footer birthday={birthday} />

        {/* <Skills /> */}
      </NextUIProvider>
    </>
  );
}
