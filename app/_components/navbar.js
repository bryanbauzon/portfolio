'use client'
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <>
      <nav className="p-6 w-full mx-auto bg-transparent z-20 fixed flex items-center space-x-4">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
         
          <Link href="/" className="flex items-center flex-shrink-0 mr-6">
            <div className="text-md text-bermuda">Max Bryan Bauzon</div>
          </Link>
        </div>
      </nav>
    </>
  );
}
