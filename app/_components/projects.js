import Image from "next/image";
import Link from "next/link";
import { ProjectComponents,Header } from "./util/util";
export default function Projects() {
  return (
    <div className="  h-min bg-pages ">
      <Header header="Personal Projects"/>
      <div className="grid  lg:grid-cols-3 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 p-5 gap-6">
        <ProjectComponents
          title="Job Finder Prototype"
          description={`In 2020, I joined the UI Challenge managed by 
            Flutter Philippines
          —a mini prototyping challenge made for the community. The main
          goal of this challenge is to create a working prototype, a
          minimum of 1 screen, on any platform that Flutter supports. `}

          isMobile={true}
          src={[
            "/projects/jobFinder.png",
            "/projects/jf2.png",
            "/projects/jf3.png",
          ]}
          badgeSrc={
            "https://img.shields.io/github/stars/bryanbauzon/Job-Finder?style=for-the-badge&color=%234ECCA3"
          }
          badgeAltText={"GitHub Repo stars"}
          id="jobFinder"
         // href="https://github.com/bryanbauzon/Job-Finder"
         // repo="https://img.shields.io/badge/Github-white?style=for-the-badge&logo=github&logoColor=black&color=white"
        />
        <ProjectComponents
          title="Portfolio Website"
          description={` As a college student, I planned to create a website showcasing my
          skills and interests in programming and other kinds of stuff. My
          previous website project was unfinished because of schoolwork and
          a need for more resources. 7+ years have passed, and I decided to
          build a portfolio step-by-step; now, it's accessible online. I
          used Next.js and Tailwind CSS for responsiveness to build this website. `}
          isMobile={false}
          src={"/projects/portfolio.png"}
          id="portfolioWebsite"
          // badgeSrc={
          //   "https://img.shields.io/github/v/release/bryanbauzon/portfolio?style=for-the-badge&color=%234ECCA3"
          // }
          // badgeAltText={"Release"}
         // href={"https://github.com/bryanbauzon/portfolio"}
         // repo="https://img.shields.io/badge/Github-white?style=for-the-badge&logo=github&logoColor=black&color=white"
        />
        <ProjectComponents
          title=" Discover Anda, Pangasinan"
          description={` Three years ago, I used photography to freeze time and capture
          important moments. Eventually, I was curious about how to edit
          stunning videos I've watched on YouTube, Facebook, and other
          social media platforms. I remember my first video upload on my
          Facebook page; it had a lot of glitch transitions and
          over-saturated adjustment color, but it was a good start.
          Recently, this year, 2023, I made a promotional video for my
          hometown, Anda, Pangasinan, focusing mainly on our tourist
          attraction, the Tondol White Sand Beach - Little Boracay of
          the North.`}
          href="https://www.youtube.com/watch?v=8iBvhVrAnRQ"
          isMobile={false}
          src={"/projects/anda.png"}
          badgeSrc={"https://img.shields.io/youtube/views/8iBvhVrAnRQ?style=for-the-badge&color=%234ECCA3"}
          badgeAltText={"Youtube Video Views"}
          repo="https://img.shields.io/badge/Youtube-white?style=for-the-badge&logo=youtube&logoColor=red&color=white"
          id="discoverAnda"
        />

        <ProjectComponents
          title=" Celebrating Pista'y Dayat 2023!"
          description={`Theme: "Bridging our Noble Past to a Great Picture through Thanksgiving and Unity: Arangkada ANDA! - May 2, 2023`}
          href="https://youtu.be/BZCwppetjw4"
          isMobile={false}
          src={"/projects/pistayDayat2023.png"}
          badgeSrc={"https://img.shields.io/youtube/views/BZCwppetjw4?style=for-the-badge&color=%234ECCA3"}
          badgeAltText={"Youtube Video Views"}
          repo="https://img.shields.io/badge/Youtube-white?style=for-the-badge&logo=youtube&logoColor=red&color=white"
          id="pistayDayat2023"
        />
      </div>
    </div>
  );
}
