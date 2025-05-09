import React, { JSX } from "react";

function Footer(): JSX.Element {
  return (
    <footer className="bg-theme-bg-light dark:bg-theme-bg-dark text-theme-text-light dark:text-theme-text-dark text-center py-5 w-full">
      <p id="license" className="text-xs">
        &copy; 2024 Angus Blomley
      </p>
    </footer>
  );
}

export default Footer;
