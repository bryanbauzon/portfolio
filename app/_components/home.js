export default function Home() {
  return (
    <div className="h-screen bg-pages">
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-1">
        <div>
        <div className="text-white nongradient text-[2.1rem] flex flex-col px-10 justify-center items-left lg:h-screen h-[75vh] w-full">
        <span className="text-[1rem] font-mono">Hi I'm Max Bryan Bauzon,</span>
          <span className="gradient text-[3rem]">A Software Engineer</span> by profession with 4+ years of work experience based in the <div className="philippines text-[5rem]">Philippines.</div>
        </div>
        </div>
        <div className="flex flex-col justify-center  items-center lg:h-screen h-[25vh] w-full">
        </div>
      </div>
    </div>
  );
}
