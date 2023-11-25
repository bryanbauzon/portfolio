"use client";
import Footer from "./_components/footer";
import Home from "./screens/home";
import Projects from "./screens/projects";
import Experience from "./screens/experience";
import Certifications from "./screens/certifications";
import { NextUIProvider } from "@nextui-org/react";
import NavbarComp from "./_components/navbar";
import { usePathname } from "next/navigation";
export default async function Page() {
  const pathname = usePathname();
  return (
    <>
      <NextUIProvider>
        <NavbarComp />
        <Home />
        <Experience />
        <Certifications />
        <Projects />
        <Footer />
      </NextUIProvider>
    </>
  );
}
