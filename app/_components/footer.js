import Link from "next/link";
import {
  WEBSITE_NAME,
  EMAIL,
  SOCIAL_MEDIA,
  HIRE_ME,
  SOCIAL_LINKS,
  BACK_TO_TOP
} from "../constants/strings";
export default function Footer(props) {
  let year = new Date().getFullYear();

  function redirectToEmail() {
    window.location.href = `mailto:${EMAIL}?subject=${
      props.isVideo
        ? "<Videographer/Video Editor>"
        : "<Software Developer Opportunity>"
    }`;
  }
  return (
    <footer className="h-[25vh] dark:bg-darkMode flex">
      <div className="flex lg:p-4 md:p-4 p-2 w-full justify-center items-center">
        <div className="grid grid-cols-2 gap-2 md:p-10 lg:p-10 p-2">
          <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-1">
            <div className=" dark:text-white text-darkMode  subFont cursor-default">
              {WEBSITE_NAME} © {year}
            </div>
            {props.birthday != "" ? (
              <></>
            ) : (
              <h2 className=" dark:text-white text-darkMode  subFont text-center">
                <>
                  <Link
                    href={"#top"}
                    className="p-2 cursor-n-resize dark:text-white text-darkMode  footerLink hover:underline ml-2 subFont"
                  >
                   {BACK_TO_TOP}
                  </Link>
                </>
              </h2>
            )}
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-1 md:grid-cols-2  ">
            {SOCIAL_MEDIA.map((item, index) => (
              <Link
                key={`${index}`}
                href={SOCIAL_LINKS[index]}
                className="cursor-alias  dark:text-white text-darkMode hover:underline footerLink ml-2 subFont"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
        {props.birthday == "" ? (
          <>
            {" "}
            <Link
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                redirectToEmail();
              }}
              className="fixed bottom-10 right-8 bg-theme w-20 h-10  drop-shadow-lg flex justify-center items-center text-darkMode dark:text-white text-small"
              href={"javascript:void(0);"}
            >
              {" "}
              {HIRE_ME}
            </Link>
          </>
        ) : (
          <></>
        )}
      </div>
    </footer>
  );
}
