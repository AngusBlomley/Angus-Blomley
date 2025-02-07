"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

interface DarkModeContextType {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const DarkModeContext = createContext<DarkModeContextType | undefined>(
  undefined
);

export function DarkModeProvider({ children }: { children: React.ReactNode }) {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("darkMode");
      setIsDarkMode(saved !== null ? JSON.parse(saved) : true);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("darkMode", JSON.stringify(isDarkMode));
      document.body.className = isDarkMode ? "dark-mode" : "light-mode";
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

export function useDarkMode() {
  const context = useContext(DarkModeContext);
  if (context === undefined) {
    throw new Error("useDarkMode must be used within a DarkModeProvider");
  }
  return context;
}
