/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import Header from "@/components/globals/header";
import Footer from "@/components/globals/footer";
import Image from "next/image";
import ProjectNavigation from "@/components/work/ProjectNavigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChrome } from "@fortawesome/free-brands-svg-icons";

const Vocabo = () => {
  const [desktopVideoLoading, setDesktopVideoLoading] = useState(true);
  const [mobileVideoLoading, setMobileVideoLoading] = useState(true);

  return (
    <>
      <Header />
      <main className="min-h-screen pt-20 bg-theme-bg-light dark:bg-theme-bg-dark text-theme-text-light dark:text-theme-text-dark">
        <div className="container mx-auto px-4 pt-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center font-ibmPlexMono italic">
            Vocabo - Chrome Extension
          </h1>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8 w-full max-w-md mx-auto">
            <a
              href="https://chromewebstore.google.com/detail/vocabo/jkidhonedioaomijgdccandhiffoiheb"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-150 w-full sm:w-auto"
              aria-label="View on Chrome Web Store (opens in a new tab)"
            >
              <FontAwesomeIcon icon={faChrome} className="mr-2" />
              Chrome Store
            </a>
            <button
              className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-150 w-full sm:w-auto"
              aria-label="Repository is private"
              disabled
            >
              Repo is Private
            </button>
          </div>

          {/* Desktop (lg and up): original styling */}
          <div
            className="hidden lg:block mx-auto mb-8 rounded-lg shadow-xl overflow-hidden relative"
            style={{ width: 1080, height: 561 }}
          >
            {desktopVideoLoading && (
              <div className="absolute inset-0 bg-gray-200 dark:bg-gray-800 animate-pulse flex items-center justify-center">
                <div className="text-gray-500 dark:text-gray-400">Loading video...</div>
              </div>
            )}
            <video
              title="Vocabo Chrome Extension Demo"
              src="/videos/vocabo.mp4"
              width={1080}
              height={561}
              autoPlay
              muted
              loop
              playsInline
              onLoadedData={() => setDesktopVideoLoading(false)}
              onError={() => setDesktopVideoLoading(false)}
              style={{
                position: "relative",
                top: "-22px",
                width: 1080,
                height: 607,
                objectFit: "cover",
                display: "block",
                opacity: desktopVideoLoading ? 0 : 1,
                transition: "opacity 0.3s ease-in-out",
              }}
            />
          </div>

          {/* Mobile/Tablet (below lg): responsive styling */}
          <div className="block lg:hidden mx-auto mb-8 rounded-lg shadow-xl overflow-hidden w-full max-w-3xl aspect-video bg-black relative">
            {mobileVideoLoading && (
              <div className="absolute inset-0 bg-gray-200 dark:bg-gray-800 animate-pulse flex items-center justify-center">
                <div className="text-gray-500 dark:text-gray-400">Loading video...</div>
              </div>
            )}
            <video
              title="Vocabo Chrome Extension Demo"
              src="/videos/vocabo.mp4"
              autoPlay
              muted
              loop
              playsInline
              onLoadedData={() => setMobileVideoLoading(false)}
              onError={() => setMobileVideoLoading(false)}
              className="w-full h-full object-cover"
              style={{
                position: "relative",
                top: 0,
                display: "block",
                opacity: mobileVideoLoading ? 0 : 1,
                transition: "opacity 0.3s ease-in-out",
              }}
            />
          </div>

          <div className="max-w-4xl mx-auto space-y-8 font-karla px-2 sm:px-4">
            <section>
              <h2 className="text-xl sm:text-2xl font-semibold mb-3 font-ibmPlexMono">
                Project Overview
              </h2>
              <p>
                Vocabo is a sophisticated Chrome extension designed for language
                learners, enabling real-time translation, vocabulary management,
                and spaced repetition learning directly within the browser. It
                leverages advanced JavaScript for DOM manipulation, dynamically
                identifying and translating words based on the user&apos;s
                custom word bank.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold mb-3 font-ibmPlexMono">
                Technical Overview
              </h2>
              <p className="mb-4">
                This project demonstrates expertise in Chrome extension
                development (Manifest V3), complex JavaScript logic including
                DOM manipulation (Mutation Observers, Regex), and build tooling
                integration.
              </p>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">
                Architecture & Stack
              </h3>
              <ul className="list-disc list-inside space-y-1 mb-4">
                <li>
                  <strong>Frontend:</strong> React (injected dynamically),
                  Content Scripts
                </li>
                <li>
                  <strong>Build Tools:</strong> Vite, pnpm, Turbo (HMR)
                </li>
                <li>
                  <strong>Extension Specifics:</strong> Manifest V3, Chrome
                  Local Storage
                </li>
                <li>
                  <strong>Backend (Potential):</strong> Node.js/Express (for
                  API, if applicable beyond local storage)
                </li>
              </ul>

              <h3 className="text-lg sm:text-xl font-semibold mb-2">
                Core Functionality
              </h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Real-time text translation on web pages.</li>
                <li>Vocabulary management system (saving words).</li>
                <li>Spaced repetition learning integration.</li>
                <li>Cross-browser synchronization (potential via backend).</li>
                <li>Offline functionality (using local storage).</li>
              </ul>

              <div className="mt-6">
                <h3 className="text-lg sm:text-xl font-semibold mb-2">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2 items-center">
                  <Image
                    src="/images/icons/react.webp"
                    alt="React"
                    width={40}
                    height={40}
                    className="m-2"
                    style={{ objectFit: "contain" }}
                  />
                  <Image
                    src="/images/icons/js.webp"
                    alt="JavaScript"
                    width={40}
                    height={40}
                    className="m-2"
                    style={{ objectFit: "contain" }}
                  />
                  <Image
                    src="/images/icons/tailwind.webp"
                    alt="Tailwind CSS"
                    width={40}
                    height={40}
                    className="m-2 py-1"
                    style={{ objectFit: "contain" }}
                  />
                  <Image
                    src="/images/icons/github.webp"
                    alt="GitHub"
                    width={40}
                    height={40}
                    className="m-2"
                    style={{ objectFit: "contain" }}
                  />
                </div>
              </div>
            </section>
          </div>

          <ProjectNavigation currentSlug="vocabo" />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Vocabo;
