import Link from "next/link";
export default function Footer(){

    const year = new Date().getFullYear();
    return(<section className="footerSection">
    <span className="footer">
      <Link href="mailto:bryanbauzon.creatives.com">
        hello@bryanbauzon.com
      </Link> | {year} 
    </span>
  </section>);
}