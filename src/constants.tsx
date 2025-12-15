import {
  FaHome,
  FaInfo,
  FaGraduationCap,
  FaBriefcase,
  FaCode,
  FaEnvelope,
  FaFileDownload,
} from "react-icons/fa";
import React from "react";

interface SectionSubLink {
  name: string;
  link: string;
}

export interface SectionConstant {
  id: string;
  name: string;
  iconIdentifier: string;
  link?: string;
  actionIdentifier?: "handleResumeClick";
  subLinks?: SectionSubLink[];
}

export const handleResumeClick = (): void => {
  window.open("/pdf/Angus-Blomley.pdf", "_blank");
};

export const sectionsDataConstants: SectionConstant[] = [
  {
    id: "home",
    name: "Home",
    iconIdentifier: "FaHome",
    link: "/",
  },
  {
    id: "about",
    name: "About",
    iconIdentifier: "FaInfo",
    link: "/aboutMe",
  },
  {
    id: "experience",
    name: "Experience",
    iconIdentifier: "FaBriefcase",
    link: "/#experience",
  },
  {
    id: "education",
    name: "Education",
    iconIdentifier: "FaGraduationCap",
    link: "/#education",
  },
  {
    id: "work",
    name: "Work",
    iconIdentifier: "FaBriefcase",
    link: "/work/pwg",
    subLinks: [
      { name: "PWG Windows & Doors", link: "/work/pwg" },
      { name: "Vocabo", link: "/work/vocabo" },
      { name: "Open Fern Studio", link: "/work/openfern" },
      { name: "Be First", link: "/work/beFirst" },
    ],
  },
  {
    id: "projects",
    name: "Projects",
    iconIdentifier: "FaCode",
    link: "/work/stringBox",
    subLinks: [
      { name: "String Box", link: "/work/stringBox" },
      {
        name: "Final Major Project",
        link: "/work/fmp",
      },
      { name: "Meetly", link: "/work/meetly" },
    ],
  },
  {
    id: "contact",
    name: "Contact",
    iconIdentifier: "FaEnvelope",
    link: "/#contact",
  },
  {
    id: "resume",
    name: "Resume",
    iconIdentifier: "FaFileDownload",
    actionIdentifier: "handleResumeClick",
  },
];

// Mapping from icon identifiers to actual icon components
export const iconMap: { [key: string]: React.ReactNode } = {
  FaHome: <FaHome />,
  FaInfo: <FaInfo />,
  FaGraduationCap: <FaGraduationCap />,
  FaBriefcase: <FaBriefcase />,
  FaCode: <FaCode />,
  FaEnvelope: <FaEnvelope />,
  FaFileDownload: <FaFileDownload />,
};

// Derive workLinksData from sectionsDataConstants to maintain single source of truth
export const workLinksData =
  sectionsDataConstants
    .find((s) => s.id === "work")
    ?.subLinks?.map((link) => ({
      href: link.link,
      text: link.name,
      ariaLabel: `View project details about ${link.name}`,
    })) || [];

// Derive projectLinksData from sectionsDataConstants to maintain single source of truth
export const projectLinksData =
  sectionsDataConstants
    .find((s) => s.id === "projects")
    ?.subLinks?.map((link) => ({
      href: link.link,
      text: link.name,
      ariaLabel: `View project details about ${link.name}`,
    })) || [];

export const profileLinksData = [
  {
    href: "https://www.codecademy.com/users/AngusBlomley/achievements",
    text: "Codecademy",
    ariaLabel: "Visit my Codecademy profile (opens in a new tab)",
    type: "external",
  },
  {
    href: "https://github.com/AngusBlomley",
    text: "GitHub",
    ariaLabel: "Visit my GitHub profile (opens in a new tab)",
    type: "external",
  },
  {
    href: "https://www.linkedin.com/in/angus-blomley-82b45a177/",
    text: "LinkedIn",
    ariaLabel: "Visit my LinkedIn profile (opens in a new tab)",
    type: "external",
  },
  {
    text: "Resume",
    ariaLabel: "View my resume (opens in a new tab)",
    type: "button",
    actionId: "resume",
  },
];

export const ascii = `&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&$XXXX$$$$$&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&$xx+;;;;;;;;;;;;;;;+++xX$&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&X+;;;;;;;:::;;;;;;;;;;;;;;++xX$&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&Xx+;;;;;;;;;:::::;;;;;;;;;;;;;;;;;;+X&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&&&&&&&&X+;;;;;;;;;;;;;:::::::;;;;;;;;:;+;++;;+x$&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&&&&&&X++;;;:;;;;:::;:::::::::;::;;;;;::;++++;;+x&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&&&&$x+;+;;;;::::;;::::;;;::::::::::;;;;::;++;;;:;;x$&&&&&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&&&x+;;;;+;;::::::::;;;;;;;;;;:;::::::;;::::;;;;::::;X&&&&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&&x;;;;;;;;;;;:;;;;::;;;;;;;;;;;;:;::;;;;::::;;;::::;;X&&&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&X+++;;;;;;;;;;;;;;;;+++++++++++++++++++;+;;;;;;;::::;+$&&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&x;;;;;;;;;;;;;;;+++++++++xxxxxxxxxxxxxxxxxxxx++;:::::+$&&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&x;;+;;;;;;;+++++++++xxxxxxxxxXXXXXXXXXXXXXXXxXx++;;::;X&&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&x;;+;;;;;++xxxxxxxxxxxxxxXXXXXXXXXXXX$$$$$$$$$$XXXx+;;x&&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&x;;+;;++xxxxxxxxxxxxxXxxXXXXXXXXXXXXXX$$$$$$$$$$$$Xx;;x$&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&x;+;++xXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX$$$$$$$$$$$$X+;+$&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&x;++xxXXXXXXXXXXXXXxxxxxXXXXXXXXXXXXXXX$$$$$$$$$$$$X++x&&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&X++xxXXX$$$XXXXXXXXXXXXXXXXXXXXXXXXXXX$$$$$$$$$$$$$Xx+X&&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&$++xxXXX$$$$XXXXxXXXXXXXXXXXXXXXXXXXX$$$$$$$$$$$$$XXx+X&&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&$x+xxX$$$$$$XXxxxxxxxxxxxxXXXXXXXXXXXXxxxxxxXXXXXXXXxx$&&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&&xxxxX$$$$$xx++++;;;;;;++++xxXXXXxxxxx+;;;++++xxxxXXxx$&&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&&XxxxX$$$$XXXXxxxxxxx++++++xxxXXXXXxxxxxxxXXXXXXXXXXXx$&&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&$xx+xX$$$$$$XXxxxxx++++++;+xXXXX$$XXx++;;;;+xxxXXXXXXxX&&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&$XX+xxx$$$$$Xx+++;;::+x+;;;+xXXXX$$XXX+;;;:;;++;+xX$$XxX$&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&Xx$$XXx$$$$$Xx++++;;;;+;;;++xXXXXX$XXXXx++++xxXX$$$$$XX$X$&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&Xxxx$$X$$$$$XXXXxxxxxx++;;+xXXXXXX$XXXXxxxXX$$$$$$$$$XX$$&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&Xx+x$$$$$$$XXXXXXxxxx+++xxXXXXXXXXXXX$$$$$$$$$$$$$$$XX$$&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&$x;;+x$$$$$$$XXXXXxxxxx+xxXXXXxxXXXXXX$$$$$$$$$$$$$$$XxxX&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&$+;++X$$$$$$$$XXXXxxxxx++xXXXXxXXXXXXX$$$$$$$$$$$$$$$XXxx$&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&X+++x$$$$$$$$XXXXXxxx++++xX$$XXX$$XXXX$$$$$$$$$$$$$$Xx+X&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&&$$x+XX$$$$$$XXXXXxx+++++XXXXXxxXXXXXXX$$$$$$$$$$$$$XX$$&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&&&$$XXX$$$$$$$XXXXxx+++++++;+xx+xx+;+XX$$$$$$$$$$$$$X$$&&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&&&&$XXX$$$$$$$XXXXXxx++++++;++++xxxxxXX$$$$$$$$$$$$$X$&&&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&&&&&&$XX$$$$$$$XXXXx+++;;;;;;++;;;;;;;++xX$$$$$$$$$XX&&&&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&&&&&&&$XX$$$$$$$XXx+;;;;++++++x+;++++++++++X$$$$$$XX$&&&&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&&&&&&&&XX$XXXX$$Xx+;;;;;;;;;;;;;;++;;;+;;;;+x$$$XXXX&&&&&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&&&&&&&&$XXXXxxXXXx++++xxx+++++xxxxxxxxxxx++xX$XxxxXX&&&&&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&&&&&&&&$XXXXXXXXXXxxxxxXXXxxxxxxxxxxXXX$$XxxXXxxxXx$&&&&&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&&&&&&&&&XXXXXXXXXXxxxxXXXXxxxxxxxxXX$XX$$XxxXXxxxxX&&&&&&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&XXXXXXXXXx+xxxxxxxxxx+++xXXXXXXXXxXXXXXxX&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&$x+xXXXxxx+++xxxxxxxx+++xXXxxXxxxx+xXxx$&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&$x++xxxx+++++xxx++++x++xxx++x+++++x+x&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&&&&&&&&$X$$$X+;;++++++++++++x+xx+++++++++;;;;x$&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&&&&&&&$xx$$$$$X+;;;;;;;;+++++++++;;;;;;;;;;x$$&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&&&&&&X+;+$$$XXXXx++;;;;;;;;;;;;;;;;;;;;;+x$$$$$&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&&&&&$+;;;X$$XXXXXXXxxxx+;::::;;;:;;;+xXX$$$$$$XX&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&&&&$Xxx+;+xXXXXXxxxXXXXXxxxxx+++xX$$$$$$$$$$$$x+&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&&&$XXxxx++;;+xxxxxxxxXXXXxxxxxxX$$$$$$X$$$$$$$x;$&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&&$$Xxxxxxx+;;;++xxxxxxXXXXxxxxxX$$X$$$$$$$$$$$+;X&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&$x+xXXx+++xxxx+;;++xxxxxxxXXXXxxxxxXX$$$$$$$$$$X;;X&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&$XXx+;+xXxx+++xxxxx++++xxxxxxxxXXXxxxxXXX$$$$$$$$$Xx:+X$&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&$Xxxx++x+;;;+xxx++;+xxxxxxx++xxxxxxxxxXXXXXXX$$$X$$$$$Xx;:xxxX&&&&&&&&&&&&&&&&&&&&&&&&&&&&
&&&&&$$$X+++++++++++;;;+x++++++xxxxxxxxxxxxxxxxxXXXXXX$$$$$$$$$XX;:+xXxxXX$&&&&&&&&&&&&&&&&&&&&&&&&&
&$$$Xxx++++++++++xx++;;;+++++++++xxxxxxxxxxxxxxxxxxxXXXXX$$$$$$X;:+xXXxxxxxXX$&&&&&&&&&&&&&&&&&&&&&&
$XXXXxxxxxxxxxxxxxxxxx++++xxxx+xxxXXxXXXXXXXXXXXXXXXXXX$$$$$$$X+;+XXXXXXXXXXXXXX$&&&&&&&&&&&&&&&&&&&`;
