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
import { checkPathname,AboutComponent,ContactComponents} from "../util/util";
import { MENU_ITEMS, WEBSITE_NAME} from "../constants/strings";

export default function NavbarComp(props) {
  const [mounted, setMounted] = useState(true);
  const { theme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);


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
            <AboutComponent websiteName={WEBSITE_NAME}/>
          </NavbarBrand>
        </NavbarContent>
        {props.birthday == "" ? (
          <>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
              <NavbarItem>
                <Link
                  className="text-darkMode dark:text-white"
                  href={checkPathname("#home", props)}
                >
                  {MENU_ITEMS[0]}
                </Link>
              </NavbarItem>
              <NavbarItem>
                <Link
                  className="text-darkMode dark:text-white"
                  href={checkPathname("#salesforce", props)}
                >
                 { MENU_ITEMS[1]}
                </Link>
              </NavbarItem>
              <NavbarItem>
                <Link
                  className="text-darkMode dark:text-white"
                  href={checkPathname("#experience", props)}
                >
                  { MENU_ITEMS[2]}
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
                  href={checkPathname("#projects", props)}
                >
                 {  MENU_ITEMS[3]}
                </Link>
              </NavbarItem>
              <NavbarItem>
                <Link className="text-darkMode dark:text-white" href="/films">
                {MENU_ITEMS[4]}
                </Link>
              </NavbarItem>
              <NavbarItem>
               <ContactComponents link={ MENU_ITEMS[5]}/>
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
            {MENU_ITEMS.map((item, index) => (
              <NavbarMenuItem key={`${item}-${index}`}>
                <Link
                  className="w-full  text-darkMode dark:text-white"
                  href={
                    item.toLowerCase() === "home"
                      ? checkPathname("home", props)
                      : item.toLowerCase() === "films"
                      ? checkPathname(`films`, props)
                      : checkPathname(`#${item.toLowerCase()}`, props)
                  }
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
