import { PLEASE_WAIT } from "./constants/strings";
export default function Loading() {
    return (
      <div className="dark:bg-darkMode bg-white h-screen flex items-center justify-center ">
          <p className="dark:text-white text-darkMode defaultFont text-2xl">{PLEASE_WAIT}</p>
      </div>
    );
  }