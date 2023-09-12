import { ServicesComponents } from "./util/util";
export default function Services() {
  return (
    <div className="p-3 bg-pages h-min">
      <h1 className="p-10 lg:text-[3.1rem] md:text-[3.1rem] text-[1.8rem] text-center defaultFont text-white">
        SERVICES OFFERED
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 p-5 gap-2">
        <ServicesComponents
          src="/services/mobiledev.png"
          alt="Mobile Development"
          title="MOBILE DEVELOPMENT"
          description="Specializing in creating high-performance mobile apps for iOS and
      Android, we turn your ideas into reality with precision and
      innovation."
        />
        <ServicesComponents
          src="/services/webdev.png"
          alt="Web Development"
          title="WEB DEVELOPMENT"
          description="We craft exceptional websites tailored to your needs, from stunning
      custom designs to e-commerce solutions. Elevate your online presence
      with our professional web development services."
        />
        <ServicesComponents
          src="/services/videoediting.png"
          alt="Vide Editing"
          title="VIDE EDITING"
          description=" We specialize in professional video editing services, transforming
      your raw footage into polished, engaging content that captivates
      your audience."
        />
      </div>
    </div>
  );
}
