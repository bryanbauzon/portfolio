import Link from "next/link";
import Image from "next/image";
export default function Navbar() {
  return (
    <>
      <nav className="p-6 w-full mx-auto bg-navbar  fixed flex items-center space-x-4">
        {/* <div className="shrink-0">
          <Image
            src="/salesforce.png"
            className="h-12 w-12"
            width={50}
            height={50}
          />
        </div> */}
        <div>
          <Link href="">
            <div className="text-xl font-medium text-name">Max Bryan Bauzon</div>
            <p className="text-role text-xs">Developer - Photographer - Film maker</p>
          </Link>
        </div>
      </nav>
    </>
  );
}
