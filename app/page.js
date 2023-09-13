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
  return (
    <>
      <Navbar />
      <Home />
      <Achievements />
      <Experience />
      <Services />
      <Projects />
      <Footer />

      {/* <Skills /> */}
    </>
  );
}
