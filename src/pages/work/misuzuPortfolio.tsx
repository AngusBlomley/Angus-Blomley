/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from "react";
import HeaderGlobal from "@/components/globals/headerGlobal";
import Footer from "@/components/globals/footer";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { useDarkMode } from "@/contexts/darkModeContext";
import { WorkNavigation } from "./components/WorkNavigation";

const Misuzu = () => {
  const { isDarkMode } = useDarkMode();
  const backgroundColor = isDarkMode
    ? "var(--background-color-dark)"
    : "var(--background-color-light)";
  const color = isDarkMode
    ? "var(--foreground-color-dark)"
    : "var(--foreground-color-light)";

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <>
      <HeaderGlobal />
      <div
        id="projectShowcase"
        data-aos="fade-in"
        style={{ backgroundColor, color }}
      >
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl mt-16 font-bold mb-4">
            Collaboration with Misuzu Kanzaki
          </h1>
          <p className="text-lg">
            This section of my portfolio showcases a project where I
            collaborated with Misuzu Kanzaki, a talented graphic designer. I
            built her personal portfolio website using vanilla HTML, CSS, and
            JavaScript, bringing her design visions to life and demonstrating my
            development skills.
            <a
              href="https://angusblomley.github.io/Misuzu-Portfolio-Website/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700"
            >
              <span> Visit Misuzu Kanzaki's Portfolio Website </span>
            </a>
            or
            <a
              href="https://github.com/AngusBlomley/Misuzu-Portfolio-Website"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700"
            >
              <span> the github.</span>
            </a>
          </p>

          <div className="grid grid-cols-3 border-b border-opacity-10 border-gray-100 max-2xl:col-span-2 max-lg:grid-cols-1">
            <section className="pb-8 pt-8 pr-8 border-b border-opacity-10 border-gray-100 col-span-3 max-2xl:col-span-1">
              <h2 className="text-2xl font-semibold mb-2">Project Overview</h2>
              <p>
                Misuzu Kanzaki's portfolio website highlights her design work
                and creativity. My role in this project was to develop a fully
                functional, responsive website that showcases her art and design
                philosophy. The website is built to be clean, intuitive, and
                engaging.
              </p>
            </section>

            <section className="h-full pt-8 pr-8 grid-cols-1 max-lg:row-start-2 border-b border-gray-100 border-opacity-10 max-2xl:pb-8">
              <h2 className="text-2xl font-semibold mb-2">Key Features</h2>
              <ul className="list-disc pl-5">
                <li>
                  Responsive design ensuring optimal viewing on all devices
                </li>
                <li>Interactive elements to enhance user engagement</li>
                <li>Clean and semantic HTML structure</li>
                <li>Custom CSS for styling and layout</li>
                <li>JavaScript for dynamic content and interactions</li>
              </ul>
            </section>

            <section className="h-full pr-8 pt-8 row-start-3 max-2xl:pb-8 max-2xl:row-start-1 max-2xl:col-end-3 max-lg:row-start-3 max-lg:col-start-1 border-b border-gray-100 border-opacity-10 max-lg:pb-8 max-2xl:pt-8">
              <h2 className="text-2xl font-semibold mb-2">Technologies Used</h2>
              <ul className="list-disc pl-5">
                <li>HTML5 for structuring the content</li>
                <li>CSS3 for styling and layout</li>
                <li>JavaScript for interactivity and dynamic content</li>
              </ul>
            </section>

            <section className="border-l pt-8 pl-8 pb-8 border-opacity-10 border-gray-100 row-span-2 col-span-2 max-2xl:col-span-3 max-2xl:border-none max-2xl:px-0">
              <a
                href="https://angusblomley.github.io/Misuzu-Portfolio-Website/"
                className="filter hover:brightness-75 duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                <video
                  src="/videos/misuzu.mp4"
                  autoPlay
                  muted
                  loop
                  title="Misuzu Kanzaki Portfolio"
                  width={960}
                  height={480}
                  className="w-full"
                />
              </a>
            </section>
          </div>

          <div className="grid grid-cols-6 grid-rows-2 mt-8 max-lg:grid-cols-1">
            <section className="row-span-full col-span-2 col-start-2 max-lg:row-start-3 max-lg:row-span-1 pt-8 border-r border-gray-100 border-opacity-10 bg-gray-100 bg-opacity-20 max-2xl:col-span-3">
              <h2 className="text-2xl font-semibold mb-2 pl-4">
                Challenges and Learning Outcomes
              </h2>
              <p className="p-4 rounded-md flex-1 overflow-x-auto max-w-full">
                Throughout the project, I faced several challenges, such as
                ensuring cross-browser compatibility and optimizing performance
                for fast loading times. These challenges helped me to grow as a
                developer, enhancing my problem-solving skills and deepening my
                understanding of web development best practices.
              </p>
              <h2 className="px-4 pt-4 text-2xl font-semibold mb-2">
                Client Feedback
              </h2>
              <p className="p-4 pb-8">
                Misuzu was thrilled with the final product. She appreciated the
                seamless collaboration and the way her vision was brought to
                life on the web. The positive feedback from Misuzu and the users
                of her website was incredibly rewarding and reaffirmed my
                passion for web development.
              </p>
            </section>

            <div className="p-8 max-lg:px-0 col-span-2 col-start-4 row-span-full max-2xl:col-span-3">
              <h2 className="text-2xl font-semibold mb-2 pt-8">Client</h2>
              <p className="pb-8 border-b border-gray-100 border-opacity-10">
                <strong>Misuzu Kanzaki - Junior Graphic Designer:</strong>{" "}
                Misuzu is an emerging graphic designer who brings fresh and
                creative ideas to the table. Her passion for design was a key
                element in the project's success.
              </p>
              <div className="flex row h-16 flex-wrap">
                <Image
                  src="/images/icons/html.webp"
                  alt="html"
                  width={50}
                  height={50}
                  className="my-2 py-2"
                />
                <Image
                  src="/images/icons/css.webp"
                  alt="css"
                  width={50}
                  height={50}
                  className="my-2 py-2 ml-2"
                />
                <Image
                  src="/images/icons/js.webp"
                  alt="js"
                  width={50}
                  height={50}
                  className="my-2 py-2 ml-2"
                />
              </div>
            </div>
          </div>

          <WorkNavigation currentPath="/work/misuzuPortfolio" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Misuzu;
