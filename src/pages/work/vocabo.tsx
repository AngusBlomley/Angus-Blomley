import HeaderGlobal from "@/components/globals/headerGlobal";
import Footer from "@/components/globals/footer";
import Image from "next/image";
import { useDarkMode } from "@/contexts/darkModeContext";
import ProjectNavigation from "@/components/work/ProjectNavigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChrome } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";

const Vocabo = () => {
  const { isDarkMode } = useDarkMode();
  const backgroundColor = isDarkMode
    ? "var(--background-color-dark)"
    : "var(--background-color-light)";
  const color = isDarkMode
    ? "var(--foreground-color-dark)"
    : "var(--foreground-color-light)";

  const [isVideoLoading, setIsVideoLoading] = useState(true);

  return (
    <>
      <HeaderGlobal />
      <main className="min-h-screen pt-20" style={{ backgroundColor, color }}>
        <div className="container mx-auto px-4 pt-9 lg:pt-9">
          <h1 className="text-4xl font-bold mb-6 text-center font-ibmPlexMono italic">
            Vocabo - Chrome Extension
          </h1>

          <div className="flex justify-center gap-4 mb-8">
            <a
              href="https://chromewebstore.google.com/detail/vocabo/jkidhonedioaomijgdccandhiffoiheb"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-150"
              aria-label="View on Chrome Web Store (opens in a new tab)"
            >
              <FontAwesomeIcon icon={faChrome} className="mr-2" />
              Chrome Store
            </a>
            <button
              className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-150"
              aria-label="Repository is private"
              disabled
            >
              Repo is Private
            </button>
          </div>

          <div className="mb-8 max-w-4xl mx-auto">
            <div className="rounded-lg shadow-lg border border-gray-700 relative aspect-video">
              {isVideoLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-200 dark:bg-gray-700">
                  <span className="text-gray-500 dark:text-gray-400">
                    Loading video...
                  </span>
                </div>
              )}
              <video
                src="/videos/vocabo.mp4"
                controls
                autoPlay
                muted
                loop
                className={`rounded-lg w-full h-auto transition-opacity duration-300 ${
                  isVideoLoading ? "opacity-0" : "opacity-100"
                }`}
                onLoadedData={() => setIsVideoLoading(false)}
              />
            </div>
          </div>

          <div className="max-w-4xl mx-auto space-y-8 font-karla">
            <section>
              <h2 className="text-2xl font-semibold mb-3 font-ibmPlexMono">
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

            <div className="my-8 max-w-2xl mx-auto">
              <Image
                src="/images/index/vocabo.png"
                alt="Vocabo Extension Interface"
                width={800}
                height={600}
                className="rounded-lg shadow-lg border border-gray-700 w-full h-auto"
              />
            </div>

            <section>
              <h2 className="text-2xl font-semibold mb-3 font-ibmPlexMono">
                Technical Overview
              </h2>
              <p className="mb-4">
                This project demonstrates expertise in Chrome extension
                development (Manifest V3), complex JavaScript logic including
                DOM manipulation (Mutation Observers, Regex), and build tooling
                integration.
              </p>
              <h3 className="text-xl font-semibold mb-2">
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

              <h3 className="text-xl font-semibold mb-2">Core Functionality</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Real-time text translation on web pages.</li>
                <li>Vocabulary management system (saving words).</li>
                <li>Spaced repetition learning integration.</li>
                <li>Cross-browser synchronization (potential via backend).</li>
                <li>Offline functionality (using local storage).</li>
              </ul>
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
