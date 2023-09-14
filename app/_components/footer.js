import Link from "next/link";
export default function Footer() {
  let year = new Date().getFullYear();
  return (
    <footer className="h-[25vh] bg-footer flex">
      <div className="flex p-4 w-full justify-center items-center">
        <div className="grid grid-cols-3 gap-2 p-10">
          <div>
            <Link
              href="/buymeacoffee"
              className="underline text-dark text-xs subFont"
            >
             Buy Me A Coffee
            </Link>
          </div>
          <div >
            <h2 className="text-dark subFont text-center">{year}</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-1 md:grid-cols-2">
            <Link href={"https://www.linkedin.com/in/bryanbauzon/"} className="text-dark hover:underline ml-2 subFont" target="_blank">LinkedIn</Link> 
            <Link href={"https://www.salesforce.com/trailblazer/bryanbauzon"} className="text-dark hover:underline ml-2 subFont" target="_blank">Salesforce</Link> 
            <Link href={"https://github.com/bryanbauzon"} className="text-dark hover:underline ml-2 subFont" target="_blank">Github</Link>
            <Link href={"https://www.youtube.com/channel/UCHKE9izs5Z7N9yLWQDFVAlg"} className="text-dark hover:underline ml-2 subFont" target="_blank">Youtube</Link> 
            <Link href={"https://www.facebook.com/brynbzn.films"} className="text-dark hover:underline ml-2 subFont" target="_blank">Facebook</Link> 
          </div>
        </div>
      </div>
    </footer>
  );
}
