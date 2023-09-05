import Link from "next/link";
import SocialLinks from "./social_links";


export default function Home() {
  return (
    <section className="homeSection" id="home">
      <div>
         <h1 className="name">MAX BRYAN BAUZON </h1> 
        <h4 className="role">Developer - Photographer - Filmmaker</h4>
        <h5 id="inprogress">In Progress</h5>
        <h3 className="description">
          A <Link href="https://www.linkedin.com/in/bryanbauzon/" className="links" target="_blank">Software Engineer</Link> by profession with 4+ years work experience based in
          the Philippines.
          <br/>
          Also, a passionate <Link href="https://www.facebook.com/brynbzn.films" target="_blank" className="links">Photographer</Link> and <Link  href="https://www.youtube.com/channel/UCHKE9izs5Z7N9yLWQDFVAlg"  className="links" target="_blank">Filmmaker.</Link>
        </h3>
      </div>
    </section>
  );
}
