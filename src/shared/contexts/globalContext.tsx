"use client";

import React from "react";
import { ChakraProvider, defaultSystem, Theme } from "@chakra-ui/react";

import { ChildrenInterface } from "~/shared/interfaces/general/childrenNode";
import { ColorModeProvider, useColorMode } from "~/shared/contexts/colorMode";

const ThemeBridge: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { colorMode } = useColorMode();
  return <Theme appearance={colorMode}>{children}</Theme>;
};

const GlobalContext: React.FC<ChildrenInterface> = ({ children }) => {
  return (
    <ChakraProvider value={defaultSystem}>
      <ColorModeProvider defaultColorMode={"dark"}>
        <ThemeBridge>{children}</ThemeBridge>
      </ColorModeProvider>
    </ChakraProvider>
  );
};

export default GlobalContext;
