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
import { AboutComponent, ContactComponent } from "../util/components";
import { checkPathname } from "../util/util";
import { MENU_ITEMS, WEBSITE_NAME } from "../constants/strings";

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
        isMenuOpen={isMenuOpen}
        className="bg-navbar"
        onMenuOpenChange={setIsMenuOpen}
        shouldHideOnScroll
      >
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
          <NavbarBrand>
            <AboutComponent websiteName={WEBSITE_NAME} />
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4" justify="end">
          {MENU_ITEMS.map((item, index) => (
            <NavbarItem key={index}>
              {index == 4 ? (
                <ContactComponent link={MENU_ITEMS[index]} />
              ) : (
                <Link
                  className="text-white"
                  href={checkPathname(`${MENU_ITEMS[index]}`, props)}
                >
                  {MENU_ITEMS[index]}
                </Link>
              )}
            </NavbarItem>
          ))}
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem>
            <ThemeSwitch />
          </NavbarItem>
        </NavbarContent>

        {isMenuOpen ? (
          <NavbarMenu>
            {MENU_ITEMS.map((item, index) => (
              <NavbarMenuItem key={`${item}-${index}`}>
                {index == 5 ? (
                  <>
                    <ContactComponent link={MENU_ITEMS[index]} />
                  </>
                ) : (
                  <Link
                    className="w-full dark:text-white text-darkMode"
                    href={checkPathname(`${MENU_ITEMS[index]}`, props)}
                    size="lg"
                    onClick={() => {
                      toggle();
                    }}
                  >
                    {item}
                  </Link>
                )}
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
