import Link from "next/link";
export default function Footer(props) {
  let year = new Date().getFullYear();

  function redirectToEmail() {
    window.location.href = `mailto:mrbryanbauzon@gmail.com?subject=${
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
              bryanbauzon © {year}
            </div>
            {props.birthday != "" ? (
              <></>
            ) : (
              <h2 className=" dark:text-white text-darkMode  subFont text-center">
                {!props.pathname == "/videos" ? (
                  <>
                    <Link
                      href={"#home"}
                      className="p-2 cursor-n-resize dark:text-white text-darkMode  footerLink hover:underline ml-2 subFont"
                    >
                      Back to Top
                    </Link>
                  </>
                ) : (
                  <></>
                )}
              </h2>
            )}
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-1 md:grid-cols-2  ">
            <Link
              href={"https://www.linkedin.com/in/bryanbauzon/"}
              className="cursor-alias  dark:text-white text-darkMode hover:underline footerLink ml-2 subFont"
              target="_blank"
            >
              LinkedIn
            </Link>
            <Link
              href={"https://www.salesforce.com/trailblazer/bryanbauzon"}
              className="cursor-alias  dark:text-white text-darkMode hover:underline footerLink ml-2 subFont"
              target="_blank"
            >
              Salesforce
            </Link>
            {/* <Link href={"https://github.com/bryanbauzon"} className="text-white hover:underline ml-2 subFont" target="_blank">Github</Link> */}
            <Link
              href={"https://www.youtube.com/channel/UCHKE9izs5Z7N9yLWQDFVAlg"}
              className="cursor-alias  dark:text-white text-darkMode hover:underline footerLink ml-2 subFont"
              target="_blank"
            >
              Youtube
            </Link>
            <Link
              href={"https://www.facebook.com/brynbzn.films"}
              className="cursor-alias  dark:text-white text-darkMode hover:underline footerLink ml-2 subFont"
              target="_blank"
            >
              Facebook
            </Link>
          </div>
        </div>
          <Link
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              redirectToEmail();
            }}
            className="animate-pulse fixed bottom-10 right-8 bg-theme w-20 h-10  drop-shadow-lg flex justify-center items-center text-darkMode dark:text-white text-small"
            href={"javascript:void(0);"}
          >
            {" "}
            Hire Me
          </Link>
      </div>
    </footer>
  );
}
