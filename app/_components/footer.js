import Link from "next/link";
export default function Footer(props) {
  let year = new Date().getFullYear();
  return (
    <footer className="h-[25vh] bg-footer flex">
      <div className="flex lg:p-4 md:p-4 p-2 w-full justify-center items-center">
        <div className="grid grid-cols-2 gap-2 md:p-10 lg:p-10 p-2">
          <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-1">
            <div className="text-white subFont cursor-default">
              bryanbauzon © {year}
            </div>
            {props.birthday != ""?<></>:<h2 className="text-white subFont text-center">
              <Link
                href={"#home"}
                className="p-2 cursor-n-resize text-white footerLink hover:underline ml-2 subFont"
              >
                Back to Top
              </Link>
            </h2>}
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-1 md:grid-cols-2">
            <Link
              href={"https://www.linkedin.com/in/bryanbauzon/"}
              className="cursor-alias text-white hover:underline footerLink ml-2 subFont"
              target="_blank"
            >
              LinkedIn
            </Link>
            <Link
              href={"https://www.salesforce.com/trailblazer/bryanbauzon"}
              className="cursor-alias text-white hover:underline footerLink ml-2 subFont"
              target="_blank"
            >
              Salesforce
            </Link>
            {/* <Link href={"https://github.com/bryanbauzon"} className="text-white hover:underline ml-2 subFont" target="_blank">Github</Link> */}
            <Link
              href={"https://www.youtube.com/channel/UCHKE9izs5Z7N9yLWQDFVAlg"}
              className="cursor-alias text-white hover:underline footerLink ml-2 subFont"
              target="_blank"
            >
              Youtube
            </Link>
            <Link
              href={"https://www.facebook.com/brynbzn.films"}
              className="cursor-alias text-white hover:underline footerLink ml-2 subFont"
              target="_blank"
            >
              Facebook
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
