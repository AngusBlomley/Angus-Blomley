import React from "react";
import dynamic from "next/dynamic";
import Head from "next/head";
import { useDarkMode } from "@/contexts/darkModeContext";

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
    </main>
  );
}

export default HomePage;
