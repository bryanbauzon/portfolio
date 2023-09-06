"use client";
import Navbar from "./_components/navbar";
import Footer from "./_components/footer";
import Services from "./_components/services";
import { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import Home from "./_components/home";
import Technology from "./_components/technology";
export default async function Page() {
  return (
    <>
       
      <Navbar />
      <Home />
      <Technology/>
      <Services />
      <div className="h-screen bg-pages">CONTACT</div>
      <Footer />
    </>
  );
}
