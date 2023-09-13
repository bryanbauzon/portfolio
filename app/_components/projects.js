import Image from "next/image";
import Link from "next/link";
import { ProjectComponents } from "./util/util";
export default function Projects() {
  return (
    <div className="  h-min bg-pages">
      <h1 className="p-10 lg:text-[3.1rem] md:text-[3.1rem] text-[1.8rem] text-center defaultFont text-white">
        PERSONAL PROJECTS
      </h1>
      <div className="grid  lg:grid-cols-3 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 p-3 gap-6">
        <ProjectComponents
          title="Job Finder Prototype"
          description={`In 2020, I joined the UI Challenge managed by 
            Flutter Philippines
             
          —a mini prototyping challenge made for the community. The main
          goal of this challenge is to create a working prototype, a
          minimum of 1 screen, on any platform that Flutter supports. For
          more information, click `}
          toLink="here"
          href="https://medium.com/flutterphilippines/flutter-philippines-uichallenge-september-2020-82f1549503b4"
          isMobile={true}
          src={[
            "/projects/jobFinder.png",
            "/projects/jf2.png",
            "/projects/jf3.png",
          ]}
          badgeSrc={"https://img.shields.io/github/stars/bryanbauzon/Job-Finder"}
          badgeAltText={"GitHub Repo stars"}
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
          badgeSrc={"https://img.shields.io/github/v/release/bryanbauzon/portfolio"}
          badgeAltText={"Release"}
          href={"https://github.com/bryanbauzon/portfolio"}
          toLink="View Repository"
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
          the North. To watch this video, click `}
          href="https://www.youtube.com/watch?v=8iBvhVrAnRQ"
          toLink="here."
          isMobile={false}
          src={"/projects/anda.png"}
          badgeSrc={"https://img.shields.io/youtube/views/8iBvhVrAnRQ"}
          badgeAltText={"Youtube Video Views"}
        />
     

      </div>
    </div>
  );
}
