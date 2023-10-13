"use client";
import Footer from "./_components/footer";
import Home from "./screens/home";
import Projects from "./screens/projects";
import Experience from "./screens/experience";
import Certifications from "./screens/certifications";
import { NextUIProvider } from "@nextui-org/react";
import NavbarComp from "./_components/navbar";
import { usePathname } from "next/navigation";
import { ageChecker } from "./util/util";
import { STATUS } from "./constants/strings";
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
        CELEBRATING MY{" "}
        {age == 25 ? (
          <>
            <span className="text-theme underline font-bold">
              QUARTER-CENTURY{" "}
            </span>
          </>
        ) : (
          <span className="text-theme underline font-bold">
            {ageChecker(age)} YEAR BIRTHDAY
          </span>
        )}
        !<br />
        🥳🎉🎊
      </div>
    );
  }

  let dayStatus = STATUS[0];
  if (!(day % 6)) {
    //WEEKENDS
    dayStatus = STATUS[1];
  } else if (birthday != "") {
    dayStatus = STATUS[2];
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
          pathname={pathname}
        />
        {birthday == "" ? (
          <>
            <Experience />
            <Certifications />
            {/* <Services /> */}
            <Projects />
          </>
        ) : (
          <></>
        )}

        <Footer birthday={birthday} pathname={pathname} isVideo={false} />

        {/* <Skills /> */}
      </NextUIProvider>
    </>
  );
}
