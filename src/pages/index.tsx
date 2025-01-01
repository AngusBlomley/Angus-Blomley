import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Head from "next/head";
import { useDarkMode } from "@/contexts/darkModeContext";
import { FaArrowUp } from "react-icons/fa";

const Header = dynamic(() => import("@/components/globals/header"), {
  ssr: false,
});
const Main = dynamic(() => import("@/components/index/main"), { ssr: false });
const About = dynamic(() => import("@/components/index/about"), { ssr: false });
const Education = dynamic(() => import("@/components/index/education"), {
  ssr: false,
});
const Work = dynamic(() => import("@/components/index/work"), { ssr: false });
const Contact = dynamic(() => import("@/components/index/contact"), {
  ssr: false,
});
const Footer = dynamic(() => import("@/components/globals/footer"), {
  ssr: false,
});
const WorkExperience = dynamic(
  () => import("@/components/index/workExperience"),
  {
    ssr: false,
  }
);

function HomePage() {
  const { isDarkMode } = useDarkMode();
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (window.innerWidth <= 768) {
        setShowScrollTop(currentScrollY > 300 && currentScrollY > lastScrollY);
      } else {
        setShowScrollTop(currentScrollY > 300);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const backgroundColor = isDarkMode
    ? "var(--background-color-dark)"
    : "var(--background-color-light)";
  const color = isDarkMode
    ? "var(--foreground-color-dark)"
    : "var(--foreground-color-light)";

  return (
    <main
      className={`flex justify-center flex-col ${
        isDarkMode ? "dark-mode" : ""
      }`}
      style={{ backgroundColor, color }}
    >
      <Head>
        <title>Angus Blomley</title>
        <meta name="description" content="Angus Blomley's Portfolio Website" />
      </Head>
      <Header />
      <Main />
      <About />
      <WorkExperience />
      <Education />
      <Work />
      <Contact />
      <Footer />

      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 p-3 rounded-full bg-white hover:bg-gray-100 text-gray-800 shadow-lg transition-all duration-300 scale-90 z-50
          ${
            showScrollTop
              ? "opacity-70 translate-y-0"
              : "opacity-0 translate-y-16 pointer-events-none"
          }
        `}
        aria-label="Scroll to top"
      >
        <FaArrowUp size={16} />
      </button>
    </main>
  );
}

export default HomePage;
