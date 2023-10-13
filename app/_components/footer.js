import { WEBSITE_NAME } from "../constants/strings";
export default function Footer() {
  return (
    <div>
      <footer className="h-[25vh] dark:bg-darkMode flex">
        <div className="flex lg:p-4 md:p-4 p-2 w-full justify-center items-center">
          <div className=" dark:text-white text-darkMode subFont cursor-default">
            Design & Built by {WEBSITE_NAME}
          </div>
        </div>
      </footer>
    </div>
  );
}
