"use client";
import Navbar from "./_components/navbar";
import Footer from "./_components/footer";
import Services from "./_components/services";
import Home from "./_components/home";
import Skills from "./_components/skills";
import Projects from "./_components/projects";
import Experience from "./_components/experience";
import Achievements from "./_components/achievements";
export default async function Page() {
  let date = new Date();
  let month = date.getMonth() + 1;
  let day = date.getDate();

  let birtday = "";

  if (month == 9 && day == 14) {
    birtday = (
      <div className="text-bold text-[5rem] defaultFont">
        AND TODAY IS MY <span className="text-theme">BIRTHDAY</span>!🥳🎉🎊
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <Home birtday={birtday} />
      {birtday == "" ? (
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

      <Footer />

      {/* <Skills /> */}
    </>
  );
}
