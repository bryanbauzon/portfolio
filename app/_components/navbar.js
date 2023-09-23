"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarItem,
  NavbarMenuItem,
  Button,
} from "@nextui-org/react";
import { Link } from "@nextui-org/react";
import React from "react";
export default function NavbarComp(props) {
  return (
    <>
      <Navbar shouldHideOnScroll className="navbar nav">
        <NavbarContent>
          <NavbarBrand>
            <Link className="font-bold text-white" href="#home">@bryanbauzon</Link>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link className="text-white" href="#home">
              Home
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link className="text-white" href="#salesforce">
              Salesforce
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link className="text-white" href="#experience">
              Experience
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link className="text-white" href="#services">
              Services
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link className="text-white" href="#projects">
              Projects
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link className="text-white" href="#contact">
              Contact
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem>
            <Link isBlock showAnchorIcon href="mailto:mrbryanbauzon@gmail.com" className="text-theme hireme">
              Hire me
            </Link>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </>
  );
}
