"use client";
import Navbar from "./_components/navbar";
import Footer from "./_components/footer";
import Services from "./_components/services";
import { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion"
export default async function Page() {
  return (
    <>
  
      <Navbar />
      <div className="h-screen bg-pages flex">
        <div className="m-auto left-0">
          
          <h1>MAX BRYAN BAUZON</h1>
        </div>
      </div>
      <div className="h-screen bg-pages">ABOUT</div>
      <Services />
      <div className="h-screen bg-pages">CONTACT</div>
      <Footer />
    </>
  );
}
