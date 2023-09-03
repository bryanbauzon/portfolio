import Link from "next/link";
import Image from "next/image";
export default function SocialLinks() {
  return (
    <div id="socialLinksContainer">
      
      <Link   className="socialLinks" href="https://www.facebook.com/brynbzn.films" target="_blank">
        <Image
          src="/facebook.png"
          width={30}
          height={30}
        />
      </Link>
      <Link href="https://www.linkedin.com/in/bryanbauzon/" target="_blank">
        <Image
          src="/linkedin.png"
          className="socialLinks"
          width={30}
          height={30}
        />
      </Link>
      <Link
        href="https://www.salesforce.com/trailblazer/bryanbauzon"
        target="_blank"
      >
        <Image
          src="/salesforce.png"
          className="socialLinks"
          width={30}
          height={30}
        />
      </Link>

      {/* <Link href="https://github.com/bryanbauzon" target="_blank">
        <Image
          src="/github.png"
          className="socialLinks"
          width={30}
          height={30}
        />
      </Link> */}
      <Link
        href="https://www.youtube.com/channel/UCHKE9izs5Z7N9yLWQDFVAlg"
        target="_blank"
      >
        <Image
          src="/youtube.png"
          className="socialLinks"
          width={30}
          height={30}
        />
      </Link>
    </div>
  );
}
