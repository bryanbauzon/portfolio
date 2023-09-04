import Link from "next/link"
export default function Footer(){
    return (<div className="h-[25vh] bg-footer flex">
    <div className="m-auto">
        <Link href='mailto:mrbryanbauzon@gmail.com' className="underline text-links text-xs">hi@bryanbauzon.com</Link> 
    </div>
  </div>)
}