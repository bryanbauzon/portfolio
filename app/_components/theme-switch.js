import React from "react";

import { Switch, VisuallyHidden, useSwitch } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { MoonIcon } from "./icons/moon_icon";
import { SunIcon } from "./icons/sun_icon";
import { useState, useEffect } from "react";
import { Tooltip } from "@nextui-org/react";

export default function ThemeSwitch(props) {
  const [mounted, setMounted] = useState(true);
  const {
    Component,
    slots,
    isSelected,
    getBaseProps,
    getInputProps,
    getWrapperProps,
  } = useSwitch(props);

  const { theme, setTheme } = useTheme();
  useEffect(() => {
    setMounted(true);
    setTheme("dark");
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <div className="flex flex-col gap-2">
      <Tooltip showArrow={true} content={isSelected?'Dark Mode':'Light Mode'} placement="right">
        <Component {...getBaseProps()}>
          <VisuallyHidden>
            <input {...getInputProps()} />
          </VisuallyHidden>
          <div
            {...getWrapperProps()}
            onClick={() => {
              setTheme(theme === "dark" ? "light" : "dark");
            }}
            className={`w-15  h-15 rounded-full flex items-center justify-center `}
          >
            {isSelected ? (
              <>
                <MoonIcon />
              </>
            ) : (
              <SunIcon />
            )}
          </div>
        </Component>
      </Tooltip>
    </div>
  );
}
