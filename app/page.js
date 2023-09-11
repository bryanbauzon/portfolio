"use client";
import Navbar from "./_components/navbar";
import Footer from "./_components/footer";
import Services from "./_components/services";
import { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import Home from "./_components/home";
import Skills from "./_components/skills";
import Projects from "./_components/projects";
import Certificates from "./_components/certificates";
import Experience from "./_components/experience";

export default async function Page() {
  return (
    <>
     <Navbar />
      <Home />
      <Experience/>
      <Services /> 
      <Skills />
      
      {/* <Projects /> */}
      <Certificates />
      <Footer />
    </>
  );
}
