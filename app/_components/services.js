export default function Services() {
  return (
    <div className="h-[50vh] bg-pages ">
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="flex flex-col justify-center items-center  lg:h-[50vh] h-[25vh]">
          <svg
            color="white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-10 h-10"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
            />
          </svg>

          <p className="text-center">test</p>
        </div>
        <div className="flex flex-col lg:justify-center lg:items-center  lg:h-[50vh] h-[25vh]">
          <svg
            color="white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 25 25"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-10 h-10"
          >
            <path
              stroke-linecap="round"
              d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
            />
          </svg>
          <p className="text-center">test</p>
        </div>
      </div>
    </div>
  );
}
