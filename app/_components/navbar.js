import Link from "next/link";
import Image from "next/image";
export default function Navbar() {
  return (
    <>
      <nav className="p-6 w-full mx-auto bg-navbar z-20 fixed flex items-center space-x-4">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <Link href="/" className="flex items-center flex-shrink-0 mr-6">
            <div className="text-md text-bermuda">Max Bryan Bauzon</div>
          </Link>
        </div>
        {/* BURGER */}
        <div className="block lg:hidden">
            <button className="flex items-center px-3 py-2" type="button" data-target="#navbarMenus"  data-collapse-toggle="navbar-default" aria-controls="navbar-default" aria-expanded="false">
            <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
            </button>
        </div>
        {/* MENU */}
       <div className="w-full hidden md:block md:w-auto flex-grow lg:flex lg:items-center lg:w-auto"  id="navbar-default">
          <div className="lg:flex-grow" data-te-nav-item-ref>
              <Link  data-te-nav-link-ref href="" className="block lg:inline-block mt-4 lg:mt-0 text-bermuda hover:text-white mr-4">Home</Link>
              <Link  data-te-nav-link-ref href="" className="block lg:inline-block mt-4 lg:mt-0 text-bermuda hover:text-white mr-4">Experience</Link>
              <Link  data-te-nav-link-ref href="" className="block lg:inline-block mt-4 lg:mt-0 text-bermuda hover:text-white mr-4">Services</Link>
              <Link  data-te-nav-link-ref href="" className="block lg:inline-block mt-4 lg:mt-0 text-bermuda hover:text-white mr-4">Contact</Link>
          </div>
       </div>
      </nav>
    </>
  );
}
