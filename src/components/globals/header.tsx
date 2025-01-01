import React, { JSX, useEffect, useState } from "react";
import Link from "next/link";
import {
  FaHome,
  FaInfo,
  FaGraduationCap,
  FaBriefcase,
  FaEnvelope,
  FaFileDownload,
  FaGithub,
  FaLinkedin,
  FaSun,
  FaMoon,
} from "react-icons/fa";
import "../../app/globals.css";
import { useDarkMode } from "@/contexts/darkModeContext";
import AOS from "aos";
import "aos/dist/aos.css";

interface Section {
  id: string;
  name: string;
  icon: React.ReactNode;
  link?: string;
  action?: () => void;
  subLinks?: Array<{ name: string; link: string }>;
}

function Header(): JSX.Element {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const [menuVisible, setMenuVisible] = useState(false);
  const [workSublinksVisible, setWorkSublinksVisible] = useState(false);
  const [pdfVisible, setPdfVisible] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    const headerElement = document.querySelector("header");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (
            entry.target.id === "about" &&
            entry.isIntersecting &&
            headerElement
          ) {
            headerElement.style.backgroundColor = isDarkMode
              ? "var(--foreground-color-light)"
              : "var(--foreground-color-dark)";
          } else if (
            entry.target.id === "home" &&
            entry.isIntersecting &&
            headerElement
          ) {
            headerElement.style.backgroundColor = "transparent";
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll("#home, #about");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [isDarkMode]);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
    if (!menuVisible) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
  };

  const toggleWorkSublinks = () => {
    setWorkSublinksVisible(!workSublinksVisible);
  };

  const handleResumeClick = () => {
    if (window.innerWidth < 1024) {
      // 1024px is the breakpoint for 'lg'
      const link = document.createElement("a");
      link.href = "/pdf/Angus-Blomley.pdf";
      link.download = "Angus-Blomley.pdf";
      link.click();
    } else {
      setPdfVisible(true);
    }
  };

  const sections: Section[] = [
    { id: "home", name: "Home", icon: <FaHome />, link: "/" },
    { id: "about", name: "About", icon: <FaInfo />, link: "/#about" },
    {
      id: "experience",
      name: "Experience",
      icon: <FaBriefcase />,
      link: "/#experience",
    },
    {
      id: "education",
      name: "Education",
      icon: <FaGraduationCap />,
      link: "/#education",
    },
    {
      id: "work",
      name: "Work",
      icon: <FaBriefcase />,
      link: "/#work",
      subLinks: [
        { name: "PWG Windows & Doors", link: "/work/pwg" },
        { name: "Vocabo", link: "/work/vocabo" },
        { name: "Open Fern Studio", link: "/work/openfern" },
        { name: "Re-String Box", link: "/work/stringBox" },
        {
          name: "Celestial Object Tracker",
          link: "/work/celestialObjectTracker",
        },
        { name: "Meetly", link: "/work/meetly" },
        { name: "Be First", link: "/work/beFirst" },
        { name: `Misuzu's Portfolio`, link: "/work/misuzuPortfolio" },
      ],
    },
    { id: "contact", name: "Contact", icon: <FaEnvelope />, link: "/#contact" },
    {
      id: "resume",
      name: "Resume",
      icon: <FaFileDownload />,
      action: handleResumeClick,
    },
  ];

  const backgroundColor = isDarkMode
    ? "var(--background-color-dark)"
    : "var(--background-color-light)";

  return (
    <>
      <header
        className="fixed font-ibmPlexMono italic flex justify-center w-full top-0 z-50 p-4 opacity-0 max-lg:p-4"
        style={{ backgroundColor }}
        data-aos="fade-in"
      >
        <div className="flex w-10/12 items-center justify-between max-lg:w-full">
          <Link href="/" passHref>
            <h2
              id="logo"
              className="text-3xl font-rubik font-bold opacity-50 hover:opacity-100 duration-200 cursor-pointer no-underline"
            >
              AB
            </h2>
          </Link>
          <nav className="hidden lg:flex space-x-6 items-center">
            {sections.map((section) => (
              <div key={section.id} className="relative group">
                {section.link ? (
                  <Link href={section.link} passHref>
                    <div
                      className="inline-block bg-inherit opacity-75 p-1 px-2 no-underline font-ibmPlexMono hover:opacity-100 hover:bg-opacity-10 hover:bg-white rounded-md transition-all duration-100 cursor-pointer"
                      onClick={(e: React.MouseEvent<HTMLDivElement>) =>
                        section.action && section.action()
                      }
                    >
                      {section.name}
                    </div>
                  </Link>
                ) : (
                  <div
                    className="inline-block bg-inherit opacity-75 p-1 px-2 no-underline font-ibmPlexMono hover:opacity-100 hover:bg-opacity-10 hover:bg-white rounded-md transition-all duration-100 cursor-pointer"
                    onClick={(e: React.MouseEvent<HTMLDivElement>) =>
                      section.action && section.action()
                    }
                  >
                    {section.name}
                  </div>
                )}
                {section.subLinks && (
                  <div
                    className="absolute px-5 py-4 -left-2 mt-0 w-64 shadow-lg rounded hidden group-hover:block transition-opacity duration-100 border border-gray-800 flex flex-col gap-2"
                    style={{ backgroundColor }}
                  >
                    {section.subLinks.map((subLink) => (
                      <Link key={subLink.name} href={subLink.link} passHref>
                        <div className="inline-block bg-inherit opacity-75 p-1 px-2 no-underline font-ibmPlexMono hover:opacity-100 hover:bg-opacity-10 hover:bg-white rounded-md transition-all duration-100 cursor-pointer w-full">
                          {subLink.name}
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="flex space-x-4 items-center">
              <a
                href="https://github.com/AngusBlomley"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-inherit opacity-75 p-1 px-2 hover:opacity-100 hover:bg-opacity-10 hover:bg-white rounded-md transition-all duration-100"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/angus-blomley-82b45a177/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-inherit opacity-75 p-1 px-2 hover:opacity-100 hover:bg-opacity-10 hover:bg-white rounded-md transition-all duration-100"
              >
                <FaLinkedin />
              </a>
              <button
                onClick={toggleDarkMode}
                className="inline-block bg-inherit opacity-75 p-1 px-2 hover:opacity-100 hover:bg-opacity-10 hover:bg-white rounded-md transition-all duration-100"
                aria-label={
                  isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"
                }
              >
                {isDarkMode ? <FaSun /> : <FaMoon />}
              </button>
            </div>
          </nav>

          <div className="lg:hidden">
            <div
              id="togglebutton"
              onClick={toggleMenu}
              className="cursor-pointer text-3xl opacity-50"
            >
              &#x2630;
            </div>
          </div>

          <div
            id="menucontainer"
            className={`fixed top-0 right-0 w-1/2 h-screen duration-300 ${
              menuVisible ? "translate-x-0" : "translate-x-full"
            } flex flex-col items-center shadow-xl z-50`}
            style={{ backgroundColor }}
          >
            <div
              onClick={toggleMenu}
              className="cursor-pointer text-3xl fixed right-4 top-4 z-20"
            >
              &#x2715;
            </div>
            <ul className="w-full mt-20 text-xl list-none">
              {sections.map((section) => (
                <li key={section.id} className="p-4 opacity-75 text-lg">
                  {section.id !== "work" ? (
                    <Link href={section.link || ""} passHref>
                      <div
                        className="no-underline flex items-center cursor-pointer"
                        onClick={() => {
                          toggleMenu();
                          if (section.action) section.action();
                        }}
                      >
                        {section.icon}
                        <span className="ml-2">{section.name}</span>
                      </div>
                    </Link>
                  ) : (
                    <>
                      <div
                        className="no-underline flex items-center cursor-pointer"
                        onClick={toggleWorkSublinks}
                      >
                        {section.icon}
                        <span className="ml-2">{section.name}</span>
                      </div>
                      <div
                        className={`overflow-hidden transition-all duration-500 ${
                          workSublinksVisible ? "max-h-screen" : "max-h-0"
                        }`}
                      >
                        <ul>
                          {section.subLinks?.map((subLink) => (
                            <li key={subLink.name}>
                              <Link href={subLink.link} passHref>
                                <div
                                  className="p-2 ml-2 text-base cursor-pointer opacity-50 hover:opacity-100"
                                  onClick={toggleMenu}
                                >
                                  {subLink.name}
                                </div>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </>
                  )}
                </li>
              ))}
              <li className="px-4 no-underline flex items-center">
                <button
                  onClick={toggleDarkMode}
                  className="opacity-50 hover:opacity-100 duration-200 flex items-center"
                >
                  {isDarkMode ? (
                    <FaSun className="mr-2" />
                  ) : (
                    <FaMoon className="mr-2" />
                  )}
                  <span>{isDarkMode ? "Light Mode" : "Dark Mode"}</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div
          className={`fixed top-0 left-0 w-full h-full bg-opacity-50 z-40 transition-opacity duration-300 ${
            menuVisible ? "opacity-50" : "opacity-0 pointer-events-none"
          }`}
        ></div>
      </header>
      {pdfVisible && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            className="absolute inset-0 bg-black opacity-75"
            onClick={() => setPdfVisible(false)}
          ></div>
          <div className="relative w-4/5 h-4/5">
            <iframe
              title="Angus-Blomley.pdf"
              src="/pdf/Angus-Blomley.pdf"
              className="w-full h-full"
            />
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
