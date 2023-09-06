import Link from "next/link";
export default function Home() {
  return (
    <div className="h-screen bg-pages" id="home">
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-1">
        <div>
          <div className="text-white nongradient text-[2.1rem] flex flex-col px-10 justify-center items-left lg:h-[90vh] h-[50vh] w-full">
            <span className="text-[1rem] font-mono">
              Hi I'm Max Bryan Bauzon,
            </span>
            <span className="gradient text-[3rem]">A Software Engineer</span> by
            profession with 4+ years of work experience based in the{" "}
            <div className="gradient text-[5rem]">Philippines.</div>
          </div>
        </div>
        <div className="flex flex-col justify-center  items-center lg:h-[90vh] h-[25vh] w-full"></div>
      </div>
      <div className=" flex justify-center items-center p-6">
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
