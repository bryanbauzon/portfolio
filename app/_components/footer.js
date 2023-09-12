import Link from "next/link";
export default function Footer() {
  let year = new Date().getFullYear();
  return (
    <footer className="h-[25vh] bg-footer flex">
      <div className="flex p-4 w-full justify-center items-center">
        <div className="grid grid-cols-3 gap-2">
          <div>
            <Link
              href="mailto:mrbryanbauzon@gmail.com?subject=Sample Email"
              className="underline text-dark text-xs"
            >
              hi@bryanbauzon.com
            </Link>
          </div>
          <div >
            <h2 className="text-dark">{year}</h2>
          </div>
          <div>
            <Link href={"https://www.linkedin.com/in/bryanbauzon/"} className="text-dark hover:underline" target="_blank">LinkedIn</Link> • 
            <Link href={"https://www.salesforce.com/trailblazer/bryanbauzon"} className="text-dark hover:underline" target="_blank">Salesforce</Link> • 
            <Link href={"https://github.com/bryanbauzon"} className="text-dark hover:underline" target="_blank">Github</Link> • 
            <Link href={"https://www.youtube.com/channel/UCHKE9izs5Z7N9yLWQDFVAlg"} className="text-dark hover:underline" target="_blank">Youtube</Link> • 
            <Link href={"https://www.facebook.com/brynbzn.films"} className="text-dark hover:underline" target="_blank">Facebook</Link> 
          </div>
        </div>
      </div>
    </footer>
  );
}
