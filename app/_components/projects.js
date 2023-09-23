import Image from "next/image";
import Link from "next/link";
import { ProjectComponents,Header } from "./util/util";
export default function Projects() {
  return (
    <div className="  h-min bg-pages " id="projects">
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
          tech="mobile | flutter | dart"
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
          tech="Web | NextJS | TailwindCSS | Vercel"
          // badgeSrc={
          //   "https://img.shields.io/github/v/release/bryanbauzon/portfolio?style=for-the-badge&color=%234ECCA3"
          // }
          // badgeAltText={"Release"}
         // href={"https://github.com/bryanbauzon/portfolio"}
         // repo="https://img.shields.io/badge/Github-white?style=for-the-badge&logo=github&logoColor=black&color=white"
        />
       
      </div>
      <div className="grid  lg:grid-cols-3 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 p-5 gap-6">
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
          tech="dji | capcut"

          src={"/projects/anda.png"}
          badgeSrc={"https://img.shields.io/youtube/views/8iBvhVrAnRQ?style=for-the-badge&color=%234ECCA3"}
          badgeAltText={"Youtube Video Views"}
          repo="https://img.shields.io/badge/Youtube-white?style=for-the-badge&logo=youtube&logoColor=red&color=white"
          id="discoverAnda"
        />

        <ProjectComponents
          title="Celebrating Pista'y Dayat 2023!"
          description={`Theme: "Bridging our Noble Past to a Great Picture through Thanksgiving and Unity: Arangkada ANDA!" - May 2, 2023. Same Day Edit`}
          href="https://youtu.be/BZCwppetjw4"
          isMobile={false}
          src={"/projects/pistayDayat2023.png"}
          badgeSrc={"https://img.shields.io/youtube/views/BZCwppetjw4?style=for-the-badge&color=%234ECCA3"}
          badgeAltText={"Youtube Video Views"}
          repo="https://img.shields.io/badge/Youtube-white?style=for-the-badge&logo=youtube&logoColor=red&color=white"
          id="pistayDayat2023"
          tech="dji | capcut"

        />
         <ProjectComponents
          title="19th BINONGEY FESTIVAL 2023 - MTB CHALLENGE HIGHLIGHTS (SDE)"
          description={`Bacon ipsum dolor amet dolore et ground round quis, commodo turkey spare ribs non tongue salami cillum pariatur. Tempor commodo non drumstick aliqua. Boudin tail drumstick, cupidatat brisket sunt magna jowl shoulder frankfurter buffalo dolore culpa nostrud jerky. Aliquip irure occaecat kielbasa do exercitation quis. Brisket turducken dolor, quis in shankle labore ea occaecat dolore.`}
          href="https://youtu.be/VrrJBm4Qmgw"
          isMobile={false}
          src={"/projects/binongey2023.png"}
          badgeSrc={"https://img.shields.io/youtube/views/VrrJBm4Qmgw?style=for-the-badge&color=%234ECCA3"}
          badgeAltText={"Youtube Video Views"}
          repo="https://img.shields.io/badge/Youtube-white?style=for-the-badge&logo=youtube&logoColor=red&color=white"
          id="binongey2023"
          tech="dji | capcut"
        />
        <ProjectComponents
          title="'Panayunan' - Leaves by Ben&Ben"
          description={`Bro ipsum dolor sit amet park bunny slope gondy taco mitt. Epic ski bum switch, apres ride brain bucket beater Skate roadie. Whistler crunchy hammer taco glove bowl hardtail bump huckfest air 360 gear jammer bail Bike. DH Whistler back country death cookies, jib hammerhead air avie gondy endo. Roadie stoked taco mitt pow, laps nose press grind avie greasy skid lid. Shred nose greasy, dirtbag fatty pow schwag. Tele endo grind chain ring ride titanium gondy hero snake bite misty.`}
          href="https://youtu.be/e3B8Zqu5iA4"
          isMobile={false}
          src={"/projects/panayunan2023.png"}
          badgeSrc={"https://img.shields.io/youtube/views/e3B8Zqu5iA4?style=for-the-badge&color=%234ECCA3"}
          badgeAltText={"Youtube Video Views"}
          repo="https://img.shields.io/badge/Youtube-white?style=for-the-badge&logo=youtube&logoColor=red&color=white"
          id="binongey2023"
          tech="dji | capcut"
        />
      </div>
    </div>
  );
}
