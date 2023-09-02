import Navbar from "./components/nav";
import Footer from "./components/footer";
import Home from "./components/home";
import About from "./components/about";
import Services from "./components/services";
import Contact from "./components/contact";
import Image from "next/image";
export default async function Page() {

  return (
    <>
    
     <div>
        <Navbar />
        <Home />
      

        <About />
        <Services />
        <Contact />
        <Footer />
      </div>  
    </>
  );
}

 