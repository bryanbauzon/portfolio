import Link from "next/link";
export default function Navbar(){
    return ( <header id="header">
    <nav>
      <ul>
        <li>
          <Link href="#home" scroll={true}>
            Home
          </Link>
        </li>
        <li>
          <Link href="#about" scroll={true}>
            About
          </Link>
        </li>
        <li>
          <Link href="#services" scroll={true}>
            Services
          </Link>
        </li>
        <li>
          <Link href="#contact" scroll={true}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  </header>);
}