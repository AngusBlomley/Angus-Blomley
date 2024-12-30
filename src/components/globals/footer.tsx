import React, { JSX } from "react";

function Footer(): JSX.Element {
  return (
    <footer className="bg-black text-white text-center py-5 w-full">
      <p id="license" className="text-xs">
        &copy; 2024 Angus Blomley
      </p>
    </footer>
  );
}

export default Footer;
