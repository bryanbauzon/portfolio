import Navbar from "./_components/navbar";
import Footer from "./_components/footer";
import Services from "./_components/services";
export default async function Page() {
  return (
    <>
     <Navbar />
      <div className="h-screen bg-pages flex">
        <div className="m-auto left-0">
          <p className="text-name font-mono">MAX BRYAN C. BAUZON</p>
        </div>
      </div>
      <div className="h-screen bg-pages">ABOUT</div> 
      <Services/>
     <div className="h-screen bg-pages">CONTACT</div>
      <Footer /> 
    </>
  );
}
