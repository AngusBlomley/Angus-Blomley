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
    link: "/#work",
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
    subLinks: [
      {
        name: "Japanese Host Family Platform",
        link: "/work/japaneseHostFamily",
      },
      { name: "String Box", link: "/work/stringBox" },
      {
        name: "Celestial Object Tracker",
        link: "/work/celestialObjectTracker",
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
