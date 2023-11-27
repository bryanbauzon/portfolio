import Link from "next/link";
import { WEBSITE_NAME } from "../constants/strings";
export default function Footer() {
  let year = new Date().getFullYear();
  return (
      <footer className="h-[25vh] bg-footer flex">
        <div className="flex lg:p-4 md:p-4 p-2 flex-col w-full justify-center items-center">
          <div className=" dark:text-white text-darkMode defaultFont cursor-default text-xs">
            Design & Built with ❤️ by 
            <span className="text-theme underline decoration-dotted ml-1">
              <Link href={'#home'}>{WEBSITE_NAME}</Link>
            </span>
          </div>
          <div className="text-tiny defaultFont">{year}</div>
        </div>
      </footer>
  );
}
