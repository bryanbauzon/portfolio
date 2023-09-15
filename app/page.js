"use client";
import Navbar from "./_components/navbar";
import Footer from "./_components/footer";
import Services from "./_components/services";
import Home from "./_components/home";
import Skills from "./_components/skills";
import Projects from "./_components/projects";
import Experience from "./_components/experience";
import Achievements from "./_components/achievements";
import Contact from "./_components/contact";
export default async function Page() {
  
  let date = new Date();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let year = date.getFullYear();

  let birthday = "";

  if (month == 10 && day == 8) {
    birthday = (
      <div className="text-bold text-[5rem] defaultFont">
        AND TODAY IS MY <span className="text-theme">BIRTHDAY</span>!🥳🎉🎊
      </div>
    );
  }

  return (
    <>
      <Navbar  birthday={birthday} />
      <Home birthday={birthday} month={month} year={year}/>
      {birthday == "" ? (
        <>
          {" "}
          <Achievements />
          <Experience />
          <Services />
          <Projects />
        </>
      ) : (
        <></>
      )} 

      <Contact/>

      <Footer />

      {/* <Skills /> */}
    </>
  );
}
