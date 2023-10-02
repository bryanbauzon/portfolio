"use client";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import { Link } from "@nextui-org/react";
import React from "react";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import ThemeSwitch from "./theme-switch";
import { checkPathname } from "./util/util";
export default function NavbarComp(props) {
  const [mounted, setMounted] = useState(true);
  const { theme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Home",
    "Salesforce",
    "Experience",
    "Videography",
    "Projects",
    "Contact"
  ];
  useEffect(() => {
    setMounted(true);
    setTheme("dark");
  }, []);

  const toggle = () => {
    setIsMenuOpen((isMenuOpen) => !isMenuOpen);
  };

  if (!mounted) {
    return null;
  }



  return (
    <>
      <Navbar
        shouldHideOnScroll
        isMenuOpen={isMenuOpen}
        className="dark:bg-darkMode bg-white"
        onMenuOpenChange={setIsMenuOpen}
      >
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
          <NavbarBrand>
            <Link
              className="font-bold text-theme"
              href={checkPathname('home',props)}
            >
              @bryanbauzon
            </Link>
          </NavbarBrand>
        </NavbarContent>
        {props.birthday == "" ? (
          <>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
              <NavbarItem>
                <Link className="text-darkMode dark:text-white"   href={checkPathname('#home',props)}>
                  Home
                </Link>
              </NavbarItem>
              <NavbarItem>
                <Link
                  className="text-darkMode dark:text-white"
                  href={checkPathname('#salesforce',props)}
                >
                  Salesforce
                </Link>
              </NavbarItem>
              <NavbarItem>
                <Link
                  className="text-darkMode dark:text-white"
                  href={checkPathname('#experience',props)}
                >
                  Experience
                </Link>
              </NavbarItem>
              {/* <NavbarItem>
                <Link
                  className="text-darkMode dark:text-white"
                  href="#services"
                >
                  Services
                </Link>
              </NavbarItem> */}
            
              <NavbarItem>
                <Link
                  className="text-darkMode dark:text-white"
                  href="/videos"
                >
                  Videography
                </Link>
              </NavbarItem>
              <NavbarItem>
                <Link
                  className="text-darkMode dark:text-white"
                  href={checkPathname('#projects',props)}
                >
                  Projects
                </Link>
              </NavbarItem>
              <NavbarItem>
                <Link className="text-darkMode dark:text-white" href={checkPathname('#contact',props)}>
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
            <ThemeSwitch />
          </NavbarItem>
        </NavbarContent>
        {isMenuOpen ? (
          <NavbarMenu>
            {menuItems.map((item, index) => (
              <NavbarMenuItem key={`${item}-${index}`}>
                <Link
                  
                  className="w-full  text-darkMode dark:text-white"
                  href={ item.toLowerCase() === 'home' ?checkPathname('home',props):item.toLowerCase() === 'videography'? checkPathname(`videos`,props):checkPathname(`#${item.toLowerCase()}`,props)}
                  size="lg"
                  onClick={() => {
                    toggle();
                  }}
                >
                  {item}
                </Link>
              </NavbarMenuItem>
            ))}
          </NavbarMenu>
        ) : (
          <></>
        )}
      </Navbar>
    </>
  );
}
