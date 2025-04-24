import React, { useState, useEffect } from "react";
import Head from "next/head";
import { useDarkMode } from "@/contexts/darkModeContext";
import { FaArrowUp } from "react-icons/fa";
import Header from "@/components/globals/header";
import Main from "@/components/index/main";
import About from "@/components/index/about";
import Education from "@/components/index/education";
import Contact from "@/components/index/contact";
import Footer from "@/components/globals/footer";
import WorkExperience from "@/components/index/workExperience";

function HomePage() {
  const { isDarkMode } = useDarkMode();
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (window.innerWidth <= 768) {
        setShowScrollTop(currentScrollY > 300 && currentScrollY < lastScrollY);
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
