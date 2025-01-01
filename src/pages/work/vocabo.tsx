import React, { useEffect } from "react";
import HeaderGlobal from "@/components/globals/headerGlobal";
import Footer from "@/components/globals/footer";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { useDarkMode } from "@/contexts/darkModeContext";
import { WorkNavigation } from "./components/WorkNavigation";

const Vocabo = () => {
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
      <div id="vocabo" data-aos="fade-in" style={{ backgroundColor, color }}>
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl mt-16 font-bold mb-4">
            Vocabo - Chrome Extension Development
          </h1>
          <p className="text-lg mb-8">
            A full-stack Chrome extension showcasing modern web development
            practices, state management, and real-time data processing.{" "}
            <a
              href="https://chromewebstore.google.com/detail/vocabo/jkidhonedioaomijgdccandhiffoiheb"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700"
            >
              Available on Chrome Web Store
            </a>
          </p>

          <div className="grid grid-cols-3 border-b border-opacity-10 border-gray-100 max-2xl:col-span-2 max-lg:grid-cols-1">
            <div className="col-span-1 max-lg:col-span-full">
              <section className="pb-8 pt-8 pr-8 border-b border-opacity-10 border-gray-100">
                <h2 className="text-2xl font-semibold mb-4">
                  Technical Overview
                </h2>
                <p>
                  Developed a complex Chrome extension utilizing React for the
                  frontend and Node.js for the backend. The project demonstrates
                  proficiency in modern JavaScript development, API integration,
                  and browser extension architecture. Key technical achievements
                  include implementing efficient state management, real-time
                  data processing, and seamless browser integration.
                </p>
              </section>

              <section className="h-full pt-8 pr-8 border-b border-opacity-10 border-gray-100">
                <h2 className="text-2xl font-semibold mb-4">
                  Technical Stack & Implementation
                </h2>
                <h3 className="text-xl font-semibold mb-4">
                  Frontend Development
                </h3>
                <ul className="list-disc pl-5 mb-8">
                  <li>React with TypeScript for type-safe development</li>
                  <li>Custom hooks for shared logic and state management</li>
                  <li>Context API for global state management</li>
                  <li>Chrome Extension Manifest V3 implementation</li>
                  <li>Webpack configuration for extension bundling</li>
                  <li>CSS Modules for scoped styling</li>
                </ul>

                <h3 className="text-xl font-semibold mb-4">
                  Backend Architecture
                </h3>
                <ul className="list-disc pl-5 mb-8">
                  <li>Node.js/Express.js RESTful API</li>
                  <li>MongoDB for data persistence</li>
                  <li>JWT authentication implementation</li>
                  <li>Rate limiting and caching strategies</li>
                  <li>Integration with third-party translation APIs</li>
                </ul>

                <h3 className="text-xl font-semibold mb-4">
                  Development Practices
                </h3>
                <ul className="list-disc pl-5 mb-8">
                  <li>
                    Test-Driven Development with Jest and React Testing Library
                  </li>
                  <li>CI/CD pipeline with GitHub Actions</li>
                  <li>Code quality enforcement with ESLint and Prettier</li>
                  <li>Performance optimization and lazy loading</li>
                  <li>Cross-browser compatibility testing</li>
                </ul>

                <div className="flex flex-wrap gap-4 items-center">
                  <Image
                    src="/images/icons/react.webp"
                    alt="React"
                    width={50}
                    height={50}
                    className="py-2"
                  />
                  <Image
                    src="/images/icons/tailwind.webp"
                    alt="Tailwind CSS"
                    width={50}
                    height={50}
                    className="py-2"
                  />
                </div>
              </section>
            </div>

            <section className="col-span-2 max-lg:col-span-full pl-8">
              <div className="space-y-8">
                <Image
                  src="/images/index/vocabo.png"
                  alt="Vocabo Chrome Extension"
                  width={1102}
                  height={703}
                  className="w-full rounded-lg shadow-xl"
                />
                <video
                  title="Vocabo Demo"
                  src="/videos/vocabo.mp4"
                  autoPlay
                  muted
                  loop
                  width={1102}
                  height={703}
                  className="w-full rounded-lg shadow-xl"
                />
              </div>
            </section>
          </div>

          <WorkNavigation currentPath="/work/vocabo" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Vocabo;
