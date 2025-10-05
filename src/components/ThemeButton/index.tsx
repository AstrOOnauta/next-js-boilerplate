"use client";

import React from "react";
import { IconButton, IconButtonProps } from "@chakra-ui/react";
import { Sun, Moon } from "lucide-react";

import { useColorMode } from "~/shared/contexts/colorMode";

export default function ThemeButton(props: IconButtonProps) {
  const { colorMode, toggleColorMode } = useColorMode();

  const handleClick: IconButtonProps["onClick"] = (event) => {
    toggleColorMode();
    props.onClick?.(event as any);
  };

  return (
    <IconButton {...props} data-cy="theme-button" onClick={handleClick}>
      {colorMode === "light" ? <Sun /> : <Moon />}
    </IconButton>
  );
}
