import { ServicesComponents,Header } from "../util/util";
export default function Services() {
  return (
    <div className="p-3 pt-20 dark:bg-darkMode h-min" id="services">
      <Header header="Services offered"/>

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
          alt="Video Editing"
          title="VIDEO EDITING"
          description=" We specialize in professional video editing services, transforming
      your raw footage into polished, engaging content that captivates
      your audience."
        />
      </div>
    </div>
  );
}
