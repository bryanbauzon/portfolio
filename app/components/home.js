import SocialLinks from "./social_links";


export default function Home() {
  return (
    <section className="homeSection" id="home">
      <div>
        <h1 className="name">MAX BRYAN BAUZON </h1> 
        <h4 className="role">Developer | Photographer | Film maker</h4>
        <h5 id="inprogress">In Progress</h5>
        <h3 className="description">
          A Software Engineer by profession with 4+ years work experience based in
          the Philippines.
          <br/>
          Also, a passionate Photographer and Film maker.
        </h3>
        <SocialLinks/> 
       
       
      </div>
    </section>
  );
}
