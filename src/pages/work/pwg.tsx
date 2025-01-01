/* eslint-disable react/no-unescaped-entities */
import React, { useEffect } from "react";
import HeaderGlobal from "@/components/globals/headerGlobal";
import Footer from "@/components/globals/footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useDarkMode } from "@/contexts/darkModeContext";
import { WorkNavigation } from "@/components/work/WorkNavigation";
import Image from "next/image";

const PWG = () => {
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
      <div id="pwg" data-aos="fade-in" style={{ backgroundColor, color }}>
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl mt-16 font-bold mb-4">
            PWG Windows & Doors - Mobile App Development
          </h1>
          <p className="text-lg mb-8">
            A comprehensive React Native mobile application showcasing
            cross-platform development, offline-first architecture, and
            enterprise-level state management.
          </p>

          <div className="grid grid-cols-3 border-b border-opacity-10 border-gray-100 max-2xl:col-span-2 max-lg:grid-cols-1">
            <div className="col-span-1 max-lg:col-span-full">
              <section className="pb-8 pt-8 pr-8 border-b border-opacity-10 border-gray-100">
                <h2 className="text-2xl font-semibold mb-4">
                  Technical Overview
                </h2>
                <p>
                  Engineered a sophisticated React Native application that
                  demonstrates expertise in mobile development, offline-first
                  architecture, and complex state management. The project
                  showcases proficiency in building enterprise-level mobile
                  solutions with robust offline capabilities, efficient data
                  synchronization, and comprehensive error tracking.
                </p>
              </section>

              <section className="h-full pt-8 pr-8 border-b border-opacity-10 border-gray-100">
                <h2 className="text-2xl font-semibold mb-4">
                  Technical Stack & Implementation
                </h2>
                <h3 className="text-xl font-semibold mb-4">
                  Mobile Development
                </h3>
                <ul className="list-disc pl-5 mb-8">
                  <li>
                    React Native with TypeScript for cross-platform development
                  </li>
                  <li>Expo Router for seamless navigation and deep linking</li>
                  <li>Custom hooks for complex business logic</li>
                  <li>Context API and AsyncStorage for state persistence</li>
                  <li>Native module integration for device features</li>
                  <li>Responsive UI with platform-specific adaptations</li>
                </ul>

                <h3 className="text-xl font-semibold mb-4">
                  Architecture & Data Flow
                </h3>
                <ul className="list-disc pl-5 mb-8">
                  <li>Offline-first architecture with data synchronization</li>
                  <li>Queue-based system for handling offline actions</li>
                  <li>RESTful API integration with retry mechanisms</li>
                  <li>Efficient data caching and storage strategies</li>
                  <li>Background task management for sync operations</li>
                </ul>

                <h3 className="text-xl font-semibold mb-4">
                  Development Practices
                </h3>
                <ul className="list-disc pl-5 mb-8">
                  <li>Comprehensive error tracking with Sentry integration</li>
                  <li>
                    Automated testing with Jest and React Native Testing Library
                  </li>
                  <li>CI/CD pipeline for mobile deployment</li>
                  <li>Performance monitoring and optimization</li>
                  <li>Cross-device testing and validation</li>
                </ul>

                <div className="flex flex-wrap gap-4 items-center">
                  <Image
                    src="/images/icons/react.webp"
                    alt="React Native"
                    width={50}
                    height={50}
                    className="py-2"
                  />
                  {/* <Image
                    src="/images/icons/typescript.webp"
                    alt="TypeScript"
                    width={50}
                    height={50}
                    className="py-2"
                  />
                  <Image
                    src="/images/icons/expo.webp"
                    alt="Expo"
                    width={50}
                    height={50}
                    className="py-2"
                  />
                  <Image
                    src="/images/icons/sentry.webp"
                    alt="Sentry"
                    width={50}
                    height={50}
                    className="py-2"
                  /> */}
                  <Image
                    src="/images/icons/github.webp"
                    alt="GitHub"
                    width={50}
                    height={50}
                    className="py-2"
                  />
                </div>
              </section>
            </div>

            <section className="col-span-2 max-lg:col-span-full pl-8">
              <div className="space-y-8">
                <video
                  title="PWG Mobile App Demo"
                  src="/videos/pwg_web.mp4"
                  autoPlay
                  muted
                  loop
                  width={1280}
                  height={720}
                  className="rounded-lg shadow-xl mx-auto"
                />
                <video
                  title="PWG Mobile App Demo Tablet"
                  src="/videos/pwg_tablet.webm"
                  autoPlay
                  muted
                  loop
                  width={600}
                  height={720}
                  className="rounded-lg shadow-xl mx-auto"
                />
              </div>
            </section>
          </div>

          <WorkNavigation currentPath="/work/pwg" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PWG;
