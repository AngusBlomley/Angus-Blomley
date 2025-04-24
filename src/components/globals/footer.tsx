import React, { JSX } from "react";
import { useDarkMode } from "@/contexts/darkModeContext";

function Footer(): JSX.Element {
  const { isDarkMode } = useDarkMode();
  return (
    <footer className={`bg-${isDarkMode ? "black" : "white"} text-${isDarkMode ? "white" : "black"} text-center py-5 w-full`}>
      <p id="license" className="text-xs">
        &copy; 2024 Angus Blomley
      </p>
    </footer>
  );
}

export default Footer;
