import React, { useEffect } from "react";
import HeaderGlobal from "@/components/globals/headerGlobal";
import Footer from "@/components/globals/footer";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { useDarkMode } from "@/contexts/darkModeContext";
import { WorkNavigation } from "@/components/work/WorkNavigation";

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
            Vocabo - Chrome Extension for Language Learning
          </h1>
          <p className="text-lg mb-8">
            A sophisticated Chrome extension developed for passive language
            learning, enabling users to learn any language supported by Google
            Translate while browsing the web. The extension features seamless
            Anki integration for automated flashcard creation and spaced
            repetition learning.{" "}
            <a
              href="https://chromewebstore.google.com/detail/vocabo/jkidhonedioaomijgdccandhiffoiheb"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700"
            >
              Check it out on Chrome Web Store
            </a>
          </p>

          <div className="grid grid-cols-3 border-b border-opacity-10 border-gray-100 max-2xl:col-span-2 max-lg:grid-cols-1">
            <div className="col-span-1 max-lg:col-span-full">
              <section className="pb-8 pt-8 pr-8 border-b border-opacity-10 border-gray-100">
                <h2 className="text-2xl font-semibold mb-4">
                  Technical Overview
                </h2>
                <p>
                  Independently architected and developed the entire Chrome
                  extension from concept to deployment. Led all technical
                  decisions including library selection, build system
                  configuration, and implementation of complex features like
                  IIFE bundling for React script injection and Anki Connect
                  integration.
                </p>
              </section>

              <section className="h-full pt-8 pr-8 border-b border-opacity-10 border-gray-100">
                <h2 className="text-2xl font-semibold mb-4">
                  Technical Implementation
                </h2>
                <ul className="list-disc pl-5 mb-8">
                  <li>React with TypeScript for type-safe development</li>
                  <li>Custom hooks for shared logic and state management</li>
                  <li>Context API for global state management</li>
                  <li>Chrome Extension Manifest V3 implementation</li>
                  <li>Webpack configuration for extension bundling</li>
                  <li>CSS Modules for scoped styling (tailwind)</li>
                </ul>

                <h3 className="text-xl font-semibold mb-4">
                  Backend Architecture
                </h3>
                <ul className="list-disc pl-5 mb-8">
                  <li>Node.js/Express.js RESTful API</li>
                  <li>Rate limiting and caching strategies</li>
                  <li>Integration with google translation APIs</li>
                </ul>

                <h3 className="text-xl font-semibold mb-4">
                  Development Highlights
                </h3>
                <ul className="list-disc pl-5 mb-8">
                  <li>Solo development of the extension codebase</li>
                  <li>
                    Regular stakeholder collaboration for feature prioritization
                  </li>
                  <li>Implemented advanced browser extension patterns</li>
                  <li>
                    Optimized performance for seamless browsing experience
                  </li>
                  <li>Built robust error handling and recovery systems</li>
                </ul>
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
