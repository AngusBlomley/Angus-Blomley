import React, { useState, useEffect, JSX } from "react";
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
import AOS from "aos";
import "aos/dist/aos.css";
import { useDarkMode } from "@/contexts/darkModeContext";

interface Section {
  id: string;
  name: string;
  icon: React.ReactNode;
  link?: string;
  action?: () => void;
  subLinks?: Array<{ name: string; link: string }>;
}

function HeaderGlobal(): JSX.Element {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const [menuVisible, setMenuVisible] = useState<boolean>(false);
  const [workSublinksVisible, setWorkSublinksVisible] =
    useState<boolean>(false);
  const [pdfVisible, setPdfVisible] = useState<boolean>(false);
  const backgroundColor = isDarkMode
    ? "var(--background-color-dark)"
    : "var(--background-color-light)";
  const color = isDarkMode
    ? "var(--foreground-color-dark)"
    : "var(--foreground-color-light)";

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const toggleMenu = (): void => {
    setMenuVisible(!menuVisible);
    if (!menuVisible) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
  };

  const toggleWorkSublinks = (): void => {
    setWorkSublinksVisible(!workSublinksVisible);
  };

  const handleLinkClick = (): void => {
    setMenuVisible(false);
    document.body.classList.remove("menu-open");
  };

  const handleResumeClick = (): void => {
    if (window.innerWidth < 1024) {
      const link = document.createElement("a");
      link.href = "/pdf/Angus-Blomley.pdf";
      link.download = "Angus-Blomley.pdf";
      link.click();
    } else {
      setPdfVisible(true);
    }
  };

  const sections: Section[] = [
    { id: "home", link: "/", name: "Home", icon: <FaHome /> },
    { id: "about", link: "/#about", name: "About", icon: <FaInfo /> },
    {
      id: "education",
      link: "/#education",
      name: "Education",
      icon: <FaGraduationCap />,
    },
    {
      id: "work",
      name: "Work",
      icon: <FaBriefcase />,
      subLinks: [
        { name: "Re-String Box", link: "/work/stringBox" },
        { name: "Celestial Star Tracker", link: "/work/celestialStarTracker" },
        { name: "Meetly", link: "/work/meetly" },
        { name: "Be First", link: "/work/beFirst" },
        { name: `Misuzu's Portfolio`, link: "/work/misuzuPortfolio" },
      ],
    },
    { id: "contact", link: "/#contact", name: "Contact", icon: <FaEnvelope /> },
    {
      id: "resume",
      link: "",
      name: "Resume",
      icon: <FaFileDownload />,
      action: handleResumeClick,
    },
  ];

  return (
    <>
      <header
        className="fixed font-ibmPlexMono italic flex justify-center w-full top-0 z-50 p-4 opacity-0 max-lg:p-4"
        style={{ backgroundColor, color }}
        data-aos="fade-in"
      >
        <div className="flex w-10/12 items-center justify-between max-lg:w-full">
          <Link href="/" passHref>
            <h2
              id="logo"
              className="text-3xl font-rubik font-bold opacity-75 hover:opacity-100 duration-200 cursor-pointer no-underline"
            >
              AB
            </h2>
          </Link>
          <nav className="hidden lg:flex space-x-6 items-center">
            {sections.map((section) => (
              <div key={section.id} className="relative group">
                <Link href={section.link || ""} passHref>
                  <div
                    className="opacity-50 no-underline transition duration-100 hover:opacity-100 cursor-pointer"
                    onClick={(e: React.MouseEvent<HTMLDivElement>) =>
                      section.action && section.action()
                    }
                  >
                    {section.name}
                  </div>
                </Link>
                {section.subLinks && (
                  <div
                    className="absolute px-5 py-4 -left-2 mt-0 w-64 shadow-lg rounded hidden group-hover:block transition-opacity duration-200 border border-gray-800"
                    style={{ backgroundColor }}
                  >
                    {section.subLinks.map((subLink) => (
                      <Link
                        key={subLink.name}
                        href={subLink.link || ""}
                        passHref
                      >
                        <div className="p-2 cursor-pointer opacity-50 hover:opacity-100">
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
                className="opacity-75 hover:opacity-100"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/angus-blomley-82b45a177/"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-75 hover:opacity-100"
              >
                <FaLinkedin />
              </a>
              <button
                onClick={toggleDarkMode}
                className="opacity-50 hover:opacity-100 duration-200"
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
              className="cursor-pointer text-3xl opacity-75"
            >
              &#x2630;
            </div>
          </div>

          <div
            id="menucontainer"
            className={`fixed top-0 right-0 w-1/2 h-screen duration-300 ${
              menuVisible ? "translate-x-0" : "translate-x-full"
            } flex flex-col items-center shadow-xl z-50 overflow-y-auto`}
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
                          handleLinkClick();
                          section.action && section.action();
                        }}
                      >
                        {section.icon}
                        <span className="ml-2">
                          {section.id === "resume" ? "Resume" : section.name}
                        </span>
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
                              <Link href={subLink.link || ""} passHref>
                                <div
                                  className="p-2 ml-2 text-base cursor-pointer opacity-50 hover:opacity-100"
                                  onClick={handleLinkClick}
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
              title="Angus Blomley Resume"
              src="/pdf/Angus-Blomley.pdf"
              className="w-full h-full"
            />
          </div>
        </div>
      )}
    </>
  );
}

export default HeaderGlobal;