import Image from "next/image";
export default function Services() {
  return (
    <section className="servicesSection" id="services">
      <span>
        Services
        <Image
          src="/code.png"
          width={125}
          height={125}
          alt="Picture of the author"
        />
      </span>
    </section>
  );
}
