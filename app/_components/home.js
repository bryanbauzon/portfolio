import Link from "next/link";
export default function Home() {
  return (
    <div className="h-screen bg-pages" id="home">
      <div className="grid grid-cols-1 p-5 lg:p-20 pt-10 md:pt-70 lg:pt-2 md:grid-cols-1 lg:grid-cols-2 gap-1">
          <div className="text-white lg:text-[1.4rem] font-mono text-[1.3rem] flex flex-col justify-center items-left lg:h-[80vh] h-[80vh] ">
            <span className="text-[1rem] font-mono">
              Hi I'm Max Bryan Bauzon,
            </span>
            <span className="gradient text-[2.5rem] lg:text-[3rem]">A Software Engineer</span> by
            profession with 4+ years of work experience based in the
            <div className="gradient text-[3rem] lg:text-[5rem]">Philippines.</div>
          </div>
        <div className="flex flex-col justify-center  items-center lg:h-[80vh] h-[2vh] "></div>
      </div>
      <div className=" flex justify-center items-center">
       <div className="animate-bounce">
        <Link href="#tech"> <svg
          color="white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
          />
        </svg></Link>
       </div>
      </div>
    </div>
  );
}
