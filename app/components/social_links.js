import Link from "next/link";
import Image from "next/image";
export default function SocialLinks() {
  return (
    <div id="socialLinksContainer">
      <Link
        href="https://www.salesforce.com/trailblazer/bryanbauzon"
        target="_blank"
      >
        <Image src="/salesforce.png" width={30} height={30} alt="salesforce" />
      </Link>
      <Link href="https://www.linkedin.com/in/bryanbauzon/" target="_blank">
        <Image src="/linkedin.png" width={30} height={30} alt="linkedin" />
      </Link>
      <Link href="https://www.facebook.com/brynbzn.films" target="_blank">
        <Image src="/facebook.png" width={30} height={30} alt="facebook" />
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
        <Image src="/youtube.png" width={30} height={30} alt="youtube" />
      </Link>
    </div>
  );
}
