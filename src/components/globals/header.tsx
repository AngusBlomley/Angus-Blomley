import React, { JSX, useEffect, useState } from "react";
import Link from "next/link";
import { useDarkMode } from "@/contexts/darkModeContext";
import { FaGithub, FaLinkedin, FaSun, FaMoon } from "react-icons/fa";
import {
  sectionsDataConstants,
  iconMap,
  handleResumeClick as resumeAction,
} from "./constants";
import type { SectionConstant } from "./constants";

function Header(): JSX.Element {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const [menuVisible, setMenuVisible] = useState(false);
  const [workSublinksVisible, setWorkSublinksVisible] = useState(false);
  const [projectsSublinksVisible, setProjectsSublinksVisible] = useState(false);

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

  useEffect(() => {
    if (!menuVisible) {
      setWorkSublinksVisible(false);
      setProjectsSublinksVisible(false);
    }
  }, [menuVisible]);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
    if (!menuVisible) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
  };

  return (
    <>
      <header className="fixed font-ibmPlexMono italic flex justify-center w-full top-0 z-50 p-4 max-lg:p-4 bg-theme-bg-light dark:bg-theme-bg-dark text-theme-text-light dark:text-theme-text-dark">
        <div className="flex w-10/12 items-center justify-between max-lg:w-full">
          <Link href="/" passHref>
            <h2
              id="logo"
              className="text-3xl font-rubik font-bold opacity-75 hover:opacity-100 cursor-pointer no-underline"
            >
              AB
            </h2>
          </Link>
          <nav
            className="hidden lg:flex items-center"
            aria-label="Main navigation"
          >
            {sectionsDataConstants.map((section: SectionConstant) => {
              const actionToPerform =
                section.actionIdentifier === "handleResumeClick"
                  ? resumeAction
                  : undefined;

              return (
                <div key={section.id} className="relative group">
                  {section.link ? (
                    <Link href={section.link} passHref>
                      <div
                        className="inline-block bg-inherit opacity-75 p-1 px-3 no-underline hover:opacity-100 hover:bg-white/10 dark:hover:bg-white/20 rounded-md cursor-pointer font-ibmPlexMono"
                        onClick={(e: React.MouseEvent<HTMLDivElement>) =>
                          actionToPerform && actionToPerform()
                        }
                      >
                        {section.name}
                      </div>
                    </Link>
                  ) : (
                    <div
                      className="inline-block bg-inherit opacity-75 p-1 px-3 no-underline hover:opacity-100 hover:bg-white/10 dark:hover:bg-white/20 rounded-md cursor-pointer font-ibmPlexMono"
                      onClick={() => actionToPerform && actionToPerform()}
                    >
                      {section.name}
                    </div>
                  )}
                  {section.subLinks && (
                    <div className="absolute px-5 py-4 -left-2 mt-0 w-64 shadow-lg rounded hidden group-hover:flex flex-col transition-opacity border border-gray-800 bg-theme-bg-light dark:bg-theme-bg-dark">
                      {section.subLinks.map((subLink) => (
                        <Link key={subLink.name} href={subLink.link} passHref>
                          <div className="inline-block bg-inherit opacity-75 p-1 px-3 no-underline font-ibmPlexMono hover:opacity-100 hover:bg-white/10 dark:hover:bg-white/20 rounded-md cursor-pointer w-full">
                            {subLink.name}
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
            <div className="flex items-center">
              <a
                href="https://github.com/AngusBlomley"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-inherit opacity-75 p-2 px-3 hover:opacity-100 hover:bg-white/10 dark:hover:bg-white/20 rounded-md"
                aria-label="GitHub profile"
              >
                <FaGithub aria-hidden="true" />
                <span className="sr-only">GitHub profile</span>
              </a>
              <a
                href="https://www.linkedin.com/in/angus-blomley-82b45a177/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-inherit opacity-75 p-2 px-3 hover:opacity-100 hover:bg-white/10 dark:hover:bg-white/20 rounded-md"
                aria-label="LinkedIn profile"
              >
                <FaLinkedin aria-hidden="true" />
                <span className="sr-only">LinkedIn profile</span>
              </a>
              <button
                onClick={toggleDarkMode}
                className="inline-block bg-inherit opacity-75 p-2 px-3 hover:opacity-100 hover:bg-white/10 dark:hover:bg-white/20 rounded-md"
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
            } flex flex-col items-center shadow-xl z-50 overflow-y-auto bg-theme-bg-light dark:bg-theme-bg-dark text-theme-text-light dark:text-theme-text-dark`}
          >
            <div
              onClick={toggleMenu}
              className="cursor-pointer text-3xl fixed right-4 top-4 z-20"
              role="button"
              tabIndex={0}
              aria-label="Close navigation menu"
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  toggleMenu();
                }
              }}
            >
              &#x2715;
            </div>
            <ul className="w-full mt-20 text-xl list-none">
              {sectionsDataConstants.map((section: SectionConstant) => {
                const currentIcon = iconMap[section.iconIdentifier];
                const actionToPerform =
                  section.actionIdentifier === "handleResumeClick"
                    ? resumeAction
                    : undefined;

                const isWorkSection = section.id === "work";
                const isProjectsSection = section.id === "projects";
                const isSubmenuExpanded = isWorkSection
                  ? workSublinksVisible
                  : isProjectsSection
                  ? projectsSublinksVisible
                  : false;

                return (
                  <li key={section.id} className="p-4 opacity-75 text-lg">
                    {!section.subLinks ? (
                      <Link href={section.link || ""} passHref>
                        <div
                          className="no-underline flex items-center cursor-pointer"
                          onClick={() => {
                            toggleMenu();
                            if (actionToPerform) actionToPerform();
                          }}
                        >
                          {currentIcon}
                          <span className="ml-2">{section.name}</span>
                        </div>
                      </Link>
                    ) : (
                      <>
                        <button
                          type="button"
                          className="no-underline flex items-center cursor-pointer w-full text-left bg-transparent border-none p-0 m-0 inherit-color"
                          onClick={() => {
                            if (isWorkSection) {
                              setWorkSublinksVisible(!isSubmenuExpanded);
                              setProjectsSublinksVisible(false);
                            } else if (isProjectsSection) {
                              setProjectsSublinksVisible(!isSubmenuExpanded);
                              setWorkSublinksVisible(false);
                            }
                          }}
                          aria-expanded={isSubmenuExpanded}
                          aria-controls={`${section.id}-sublinks`}
                        >
                          {currentIcon}
                          <span className="ml-2">{section.name}</span>
                        </button>
                        <div
                          id={`${section.id}-sublinks`}
                          className={`overflow-hidden duration-500 ${
                            isSubmenuExpanded ? "max-h-screen" : "max-h-0"
                          }`}
                          role="region"
                          aria-hidden={!isSubmenuExpanded}
                        >
                          <ul className="list-none pl-6 pt-2">
                            {section.subLinks?.map((subLink) => (
                              <li key={subLink.name}>
                                <Link href={subLink.link} passHref>
                                  <div
                                    className="p-2 text-base cursor-pointer opacity-50 hover:opacity-100"
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
                );
              })}
              <li className="px-4">
                <button
                  onClick={toggleDarkMode}
                  className="bg-inherit opacity-75 mt-5 no-underline font-ibmPlexMono hover:opacity-100 hover:bg-white/10 dark:hover:bg-white/20 rounded-md flex items-center"
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
