"use client";
import { SunIcon } from "./icons/sun_icon";
import { MoonIcon } from "./icons/moon_icon";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import { Link } from "@nextui-org/react";
import React from "react";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Switch } from "@nextui-org/react";

export default function NavbarComp(props) {
  const [mounted, setMounted] = useState(true);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    setTheme('dark')
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <Navbar shouldHideOnScroll className="dark:bg-darkMode bg-white">
        <NavbarContent>
          <NavbarBrand>
            <Link
              className="font-bold text-darkMode dark:text-white"
              href="#home"
            >
              @bryanbauzon
            </Link>
          </NavbarBrand>
        </NavbarContent>
        {props.birthday == "" ? (
          <>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
              <NavbarItem>
                <Link className="text-darkMode dark:text-white" href="#home">
                  Home
                </Link>
              </NavbarItem>
              <NavbarItem>
                <Link
                  className="text-darkMode dark:text-white"
                  href="#salesforce"
                >
                  Salesforce
                </Link>
              </NavbarItem>
              <NavbarItem>
                <Link
                  className="text-darkMode dark:text-white"
                  href="#experience"
                >
                  Experience
                </Link>
              </NavbarItem>
              <NavbarItem>
                <Link
                  className="text-darkMode dark:text-white"
                  href="#services"
                >
                  Services
                </Link>
              </NavbarItem>
              <NavbarItem>
                <Link
                  className="text-darkMode dark:text-white"
                  href="#projects"
                >
                  Projects
                </Link>
              </NavbarItem>
              <NavbarItem>
                <Link className="text-darkMode dark:text-white" href="#contact">
                  Contact
                </Link>
              </NavbarItem>
            </NavbarContent>
         
          </>
        ) : (
          <></>
        )}
           <NavbarContent justify="end">
              <NavbarItem>
                <Switch
                defaultSelected
                className="dark:text-dark text-white"
                  size="sm"
                  color="warning"
                  startContent={<SunIcon />}
                  endContent={<MoonIcon />}
                  onValueChange={() => {
                    setTheme(theme === "dark" ? "light" : "dark");
                    //setup the updated state of the swith to store in localStorage
                  }}
                  //to get the value of state in localStorage
                >
               </Switch>
              </NavbarItem>
            
            </NavbarContent>
      </Navbar>
    </>
  );
}
