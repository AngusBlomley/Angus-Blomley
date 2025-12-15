'use client';

/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChrome } from "@fortawesome/free-brands-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";

const Vocabo = () => {

  return (
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
              className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-sm font-medium rounded-md shadow-sm text-gray-400 dark:text-gray-500 bg-gray-100 dark:bg-gray-800 cursor-not-allowed w-full sm:w-auto"
              aria-label="GitHub Repository is private"
              disabled
            >
              <FontAwesomeIcon icon={faLock} className="mr-2" />
              Repo is Private
            </button>
          </div>

          <div className="mb-8 max-w-4xl mx-auto">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <video
                title="Vocabo Chrome Extension Demo"
                src="/videos/vocabo.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="w-full rounded-lg shadow-xl"
              />
            </div>
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
                Chrome Extension Environments
              </h3>
              <ul className="list-disc ml-5 space-y-1 mb-4">
                <li>
                  <strong>Content script:</strong> Directly interacts with the
                  DOM (uses JavaScript) of the current webpage by injecting a
                  shadow DOM, allowing it to read and edit elements from the
                  page.
                </li>
                <li>
                  <strong>Content UI script:</strong> Indirectly interacts with
                  the DOM (uses React). We create a shadow DOM or React portal,
                  and render content in the <code>document.body</code> without
                  the native code colliding with the injected content script.
                </li>
                <li>
                  <strong>Popup:</strong> The main user interface (built with
                  React) that appears when clicking the extension icon. Provides
                  vocabulary management, learning statistics, settings
                  configuration, and serves as the central hub for all extension
                  features in an isolated environment.
                </li>
              </ul>
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
                  <strong>Backend:</strong> Node.js/Express, Google App Engine
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
        </div>
      </main>
  );
};

export default Vocabo;
