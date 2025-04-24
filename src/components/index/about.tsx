/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import { useDarkMode } from "@/contexts/darkModeContext";
import Button from "../globals/Button";

function About() {
  const { isDarkMode } = useDarkMode();

  const backgroundColor = isDarkMode
    ? "var(--background-color-dark)"
    : "var(--background-color-light)";

  const content = (
    <>
      <h2 className="text-4xl mb-8">The Person Behind the Pixels</h2>

      <p className="text-lg mb-6 leading-relaxed">
        Hello! I'm Angus Blomley, a React developer dedicated to building
        high-performance, accessible web applications. I have refined my
        expertise in HTML, CSS, JavaScript, React, and React Native, leveraging
        modern web technologies.
      </p>

      <p className="text-lg mb-6 leading-relaxed"></p>

      <p className="text-lg leading-relaxed">
        <Button
          href="/aboutMe"
          ariaLabel="Read more about my personal story and background"
          className="mr-4"
        >
          Learn More
        </Button>
        <Button href="#contact" ariaLabel="Navigate to contact section">
          Reach out
        </Button>
      </p>
    </>
  );

  return (
    <section
      id="about"
      style={{ backgroundColor }}
      className="relative z-10 duration-1000 flex items-center pt-16"
      role="region"
      aria-label="About Me"
    >
      <div className="absolute inset-0">
        <div
          className={`absolute inset-0 bg-gradient-to-b from-[#121212] via-[#121212]/${
            isDarkMode ? "70" : "50"
          } to-transparent opacity-${
            isDarkMode ? "100" : "70"
          } z-10 max-md:via-[#121212]/${
            isDarkMode ? "50" : "30"
          } max-md:to-transparent via-30%`}
        ></div>
        <div
          className={`absolute inset-0 bg-gradient-to-r from-[#121212] via-[#121212]/${
            isDarkMode ? "50" : "30"
          } to-transparent opacity-${
            isDarkMode ? "100" : "70"
          } z-10 max-md:via-[#121212]/${
            isDarkMode ? "80" : "60"
          } max-md:to-transparent via-30%`}
        ></div>
        <div
          className={`absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/${
            isDarkMode ? "70" : "50"
          } to-transparent opacity-${
            isDarkMode ? "100" : "70"
          } z-10 max-md:via-[#121212]/${
            isDarkMode ? "50" : "30"
          } max-md:to-transparent via-30%`}
        ></div>

        <Image
          alt="About background image"
          src="/images/index/back.jpg"
          layout="fill"
          objectFit="cover"
          className="z-0"
          priority
          quality={75}
        />
      </div>
      <div className="max-w-2xl ml-44 my-40 relative z-10 text-gray-100 max-lg:mx-auto max-lg:px-4">
        {content}
      </div>
    </section>
  );
}

export default About;
