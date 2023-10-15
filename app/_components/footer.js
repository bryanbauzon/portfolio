import { WEBSITE_NAME } from "../constants/strings";
export default function Footer() {
  return (
      <footer className="h-[25vh] dark:bg-darkMode flex">
        <div className="flex lg:p-4 md:p-4 p-2 w-full justify-center items-center">
          <div className=" dark:text-white text-darkMode defaultFont cursor-default">
            Design & Built by <span className="text-theme">{WEBSITE_NAME}</span>
          </div>
        </div>
      </footer>
  );
}
