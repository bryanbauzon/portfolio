import Link from "next/link"
export default function Footer(){
    return (<footer className="h-[25vh] bg-pages flex">
    <div className="m-auto">
        <Link href='mailto:mrbryanbauzon@gmail.com' className="underline text-links text-xs">hi@bryanbauzon.com</Link> 
    </div>
  </footer>)
}