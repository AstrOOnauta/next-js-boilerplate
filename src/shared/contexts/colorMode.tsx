"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

export type ColorMode = "light" | "dark";

interface ColorModeContextValue {
  colorMode: ColorMode;
  toggleColorMode: () => void;
  setColorMode: (value: ColorMode) => void;
}

const ColorModeContext = createContext<ColorModeContextValue>(
  {} as ColorModeContextValue
);

interface ProviderProps {
  children: React.ReactNode;
  defaultColorMode?: ColorMode;
  storageKey?: string;
}

export const ColorModeProvider: React.FC<ProviderProps> = ({
  children,
  defaultColorMode = "light",
  storageKey = "@theme-next-js-boilerplate",
}) => {
  const [colorMode, setColorModeState] = useState<ColorMode>(defaultColorMode);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(storageKey);
      if (stored === "light" || stored === "dark") {
        setColorModeState(stored);
      }
    } catch {
      // ignore
    }
  }, [storageKey]);

  useEffect(() => {
    try {
      window.localStorage.setItem(storageKey, colorMode);
    } catch {
      // ignore
    }
  }, [colorMode, storageKey]);

  const setColorMode = useCallback((value: ColorMode) => {
    setColorModeState(value);
  }, []);

  const toggleColorMode = useCallback(() => {
    setColorModeState((prev) => (prev === "light" ? "dark" : "light"));
  }, []);

  const value = useMemo(
    () => ({ colorMode, toggleColorMode, setColorMode }),
    [colorMode, toggleColorMode, setColorMode]
  );

  return (
    <ColorModeContext.Provider value={value}>
      {children}
    </ColorModeContext.Provider>
  );
};

export function useColorMode() {
  return useContext(ColorModeContext);
}
