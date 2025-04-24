import React, { JSX, useEffect, useState } from "react";
import Link from "next/link";
import { useDarkMode } from "@/contexts/darkModeContext";
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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const menuContainer = document.getElementById("menucontainer");
      const toggleButton = document.getElementById("togglebutton");

      if (
        menuVisible &&
        menuContainer &&
        !menuContainer.contains(event.target as Node) &&
        toggleButton &&
        !toggleButton.contains(event.target as Node)
      ) {
        setMenuVisible(false);
        document.body.classList.remove("menu-open");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuVisible]);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
    if (!menuVisible) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
  };

  const handleResumeClick = () => {
    // Open resume in a new tab
    window.open("/pdf/Angus-Blomley.pdf", "_blank");
  };

  const sections: Section[] = [
    {
      id: "home",
      name: "Home",
      icon: <FaHome />,
      link: "/",
    },
    {
      id: "about",
      name: "About",
      icon: <FaInfo />,
      link: "/aboutMe",
    },
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
        {
          name: "PWG Windows & Doors",
          link: "/work/pwg",
        },
        {
          name: "Vocabo",
          link: "/work/vocabo",
        },
        {
          name: "Open Fern Studio",
          link: "/work/openfern",
        },
        {
          name: "Re-String Box",
          link: "/work/stringBox",
        },
        {
          name: "Celestial Object Tracker",
          link: "/work/celestialObjectTracker",
        },
        {
          name: "Meetly",
          link: "/work/meetly",
        },
        {
          name: "Be First",
          link: "/work/beFirst",
        },
      ],
    },
    {
      id: "contact",
      name: "Contact",
      icon: <FaEnvelope />,
      link: "/#contact",
    },
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
        className="fixed font-ibmPlexMono italic flex justify-center w-full top-0 z-50 p-4 max-lg:p-4"
        style={{ backgroundColor }}
      >
        <div className="flex w-10/12 items-center justify-between max-lg:w-full">
          <Link href="/" passHref>
            <h2
              id="logo"
              className="text-3xl font-bold opacity-50 hover:opacity-100 cursor-pointer no-underline font-ibmPlexMono"
            >
              AB
            </h2>
          </Link>
          <nav className="hidden lg:flex items-center">
            {sections.map((section) => (
              <div key={section.id} className="relative group">
                {section.link ? (
                  <Link href={section.link} passHref>
                    <div
                      className="inline-block bg-inherit opacity-75 p-1 px-3 no-underline hover:opacity-100 hover:bg-opacity-10 hover:bg-white rounded-md cursor-pointer font-ibmPlexMono"
                      onClick={(e: React.MouseEvent<HTMLDivElement>) =>
                        section.action && section.action()
                      }
                    >
                      {section.name}
                    </div>
                  </Link>
                ) : (
                  <div
                    className="inline-block bg-inherit opacity-75 p-1 px-3 no-underline hover:opacity-100 hover:bg-opacity-10 hover:bg-white rounded-md cursor-pointer font-ibmPlexMono"
                    onClick={(e: React.MouseEvent<HTMLDivElement>) =>
                      section.action && section.action()
                    }
                  >
                    {section.name}
                  </div>
                )}
                {section.subLinks && (
                  <div
                    className="absolute px-5 py-4 -left-2 mt-0 w-64 shadow-lg rounded hidden group-hover:flex flex-col transition-opacity border border-gray-800"
                    style={{ backgroundColor }}
                  >
                    {section.subLinks.map((subLink) => (
                      <Link key={subLink.name} href={subLink.link} passHref>
                        <div className="inline-block bg-inherit opacity-75 p-1 px-3 no-underline font-ibmPlexMono hover:opacity-100 hover:bg-opacity-10 hover:bg-white rounded-md cursor-pointer w-full">
                          {subLink.name}
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="flex items-center">
              <a
                href="https://github.com/AngusBlomley"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-inherit opacity-75 p-2 px-3 hover:opacity-100 hover:bg-opacity-10 hover:bg-white rounded-md"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/angus-blomley-82b45a177/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-inherit opacity-75 p-2 px-3 hover:opacity-100 hover:bg-opacity-10 hover:bg-white rounded-md"
              >
                <FaLinkedin />
              </a>
              <button
                onClick={toggleDarkMode}
                className="inline-block bg-inherit opacity-75 p-2 px-3 hover:opacity-100 hover:bg-opacity-10 hover:bg-white rounded-md"
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
            className={`fixed top-0 right-0 w-3/4 md:w-2/3 lg:w-1/2 h-screen duration-300 ${
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
                        onClick={() =>
                          setWorkSublinksVisible(!workSublinksVisible)
                        }
                      >
                        {section.icon}
                        <span className="ml-2">{section.name}</span>
                      </div>
                      <div
                        className={`overflow-hidden duration-500 ${
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
              <li className="px-4">
                <button
                  onClick={toggleDarkMode}
                  className="bg-inherit opacity-75 mt-5 no-underline font-ibmPlexMono hover:opacity-100 hover:bg-opacity-10 hover:bg-white rounded-md flex items-center"
                >
                  {isDarkMode ? (
                    <FaSun className="mr-2" />
                  ) : (
                    <FaMoon className="mr-2" />
                  )}
                  <span>
                    {isDarkMode ? "Light Mode" : "Dark Mode"}
                  </span>
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div
          className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
            menuVisible ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={toggleMenu}
        ></div>
      </header>
    </>
  );
}

export default Header;
