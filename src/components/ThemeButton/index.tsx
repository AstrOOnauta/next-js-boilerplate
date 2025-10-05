"use client";

import React, { useEffect, useState } from "react";
import { IconButton, IconButtonProps } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";

import { useColorMode } from "~/shared/contexts/colorMode";

interface ThemeButtonProps extends IconButtonProps {}

export default function ThemeButton(props: ThemeButtonProps) {
  const [themeMode, setThemeMode] = useState<"light" | "dark">("light");

  const { colorMode, toggleColorMode } = useColorMode();

  useEffect(() => {
    if (colorMode) {
      setThemeMode(colorMode);
    }
  }, [colorMode]);

  return (
    <IconButton {...props} data-cy="theme-button" onClick={toggleColorMode}>
      {themeMode === "light" ? <FaSun /> : <FaMoon />}
    </IconButton>
  );
}
