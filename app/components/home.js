import SocialLinks from "./social_links";


export default function Home() {
  return (
    <section className="homeSection" id="home">
      <div>
        <h1 className="name">MAX BRYAN BAUZON</h1>
        <h4 className="role">Developer | Photographer | Film maker</h4>
        <h3 className="description">
          A Software Engineer by profession with 4+ years work experience based in
          the Philippines.Also, a passionate Photographer and Film maker.
        </h3>
        <h5 id="inprogress">IN PROGRESS</h5>
        {/* <SocialLinks/> */}
      </div>
    </section>
  );
}