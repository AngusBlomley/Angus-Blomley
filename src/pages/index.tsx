import React, { useState, useEffect, lazy, Suspense } from "react";
import Head from "next/head";
import { useDarkMode } from "@/contexts/darkModeContext";
import { FaArrowUp } from "react-icons/fa";
import Header from "@/components/globals/header";
import Main from "@/components/index/main";
import About from "@/components/index/about";
import Contact from "@/components/index/contact";
import Footer from "@/components/globals/footer";

// Lazy load non-critical components
const Education = lazy(() => import("@/components/index/education"));
const WorkExperience = lazy(() => import("@/components/index/workExperience"));

// Loading fallback
const LoadingFallback = () => (
  <div
    className="flex justify-center items-center py-16"
    role="status"
    aria-label="Loading content"
  >
    <div className="w-8 h-8 border-4 border-blue-200 border-t-sky-800 rounded-full animate-spin"></div>
    <span className="sr-only">Loading...</span>
  </div>
);

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
    <>
      <Head>
        <title>Angus Blomley | React & React Native Developer</title>
        <meta
          name="description"
          content="Angus Blomley is a React and React Native developer specializing in building responsive, accessible web applications and mobile solutions."
        />
        <meta
          name="keywords"
          content="React, React Native, Web Developer, Frontend Developer, Mobile Developer, JavaScript, TypeScript"
        />
        <meta
          property="og:title"
          content="Angus Blomley | React & React Native Developer"
        />
        <meta
          property="og:description"
          content="Portfolio showcasing React and React Native development projects, skills, and experience."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://angusblomley.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://angusblomley.com" />
      </Head>

      {/* Skip to main content link for keyboard users */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-50 focus:p-4 focus:bg-white focus:text-black"
      >
        Skip to main content
      </a>

      <Header />

      <main
        id="main-content"
        className={`flex justify-center flex-col ${
          isDarkMode ? "dark-mode" : ""
        }`}
        style={{ backgroundColor, color }}
      >
        <Main />
        <About />
        <Suspense fallback={<LoadingFallback />}>
          <WorkExperience />
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <Education />
        </Suspense>
        <Contact />
      </main>

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
        <FaArrowUp size={16} aria-hidden="true" />
      </button>
    </>
  );
}

export default HomePage;
