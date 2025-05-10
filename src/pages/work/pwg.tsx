/* eslint-disable react/no-unescaped-entities */
import Header from "@/components/globals/header";
import Footer from "@/components/globals/footer";
import Image from "next/image";
import ProjectNavigation from "@/components/work/ProjectNavigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";

const PWG = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-20 bg-theme-bg-light dark:bg-theme-bg-dark text-theme-text-light dark:text-theme-text-dark">
        <div className="container mx-auto px-4 pt-8">
          <h1 className="text-4xl font-bold mb-6 text-center font-ibmPlexMono italic">
            PWG Windows & Doors - Mobile App
          </h1>

          <div className="flex justify-center gap-4 mb-8">
            <button
              className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-sm font-medium rounded-md shadow-sm text-gray-400 dark:text-gray-500 bg-gray-100 dark:bg-gray-800 cursor-not-allowed"
              aria-label="GitHub Repository is private"
              disabled
            >
              <FontAwesomeIcon icon={faLock} className="mr-2" />
              Repo is Private
            </button>
          </div>

          {/* First Video */}
          <div className="mb-8 max-w-4xl mx-auto">
            <div className="rounded-lg overflow-hidden shadow-lg relative">
              <video
                src="/videos/pwg_web.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                className="w-full rounded-lg shadow-xl transition-opacity duration-300 opacity-100"
              />
            </div>
          </div>

          <div className="max-w-4xl mx-auto mb-8 space-y-8 font-karla">
            <section>
              <h2 className="text-2xl font-semibold mb-3 font-ibmPlexMono">
                Project Overview
              </h2>
              <p>
                Developed a comprehensive React Native mobile application for
                PWG Windows & Doors engineers. The app enables efficient on-site
                assessments of custom windows and doors, featuring robust
                offline capabilities, data synchronization, and enterprise-level
                state management to streamline workflows and replace paper-based
                processes.
              </p>
            </section>

            {/* Second Video - Moved and Resized */}
            <div className="my-8 max-w-lg mx-auto">
              <div className="rounded-lg overflow-hidden shadow-lg relative">
                <video
                  src="/videos/pwg_tablet.webm"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  className="w-full rounded-lg shadow-xl transition-opacity duration-300 opacity-100"
                />
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto space-y-8 font-karla">
            <section>
              <h2 className="text-2xl font-semibold mb-3 font-ibmPlexMono">
                Technical Overview
              </h2>
              <p className="mb-4">
                Engineered a sophisticated React Native application
                demonstrating expertise in mobile development, offline-first
                architecture, and complex state management. The project
                showcases proficiency in building enterprise-level mobile
                solutions with robust offline capabilities, efficient data
                synchronization, and comprehensive error tracking via Sentry.
              </p>

              <h3 className="text-xl font-semibold mb-2">
                Architecture & Stack
              </h3>
              <ul className="list-disc list-inside space-y-1 mb-4">
                <li>
                  <strong>Platform:</strong> React Native (with Expo)
                </li>
                <li>
                  <strong>Language:</strong> TypeScript
                </li>
                <li>
                  <strong>Navigation:</strong> Expo Router
                </li>
                <li>
                  <strong>State Management:</strong> Context API, AsyncStorage
                </li>
                <li>
                  <strong>Architecture:</strong> Offline-first with queue-based
                  sync
                </li>
                <li>
                  <strong>API:</strong> RESTful API integration (with retry
                  logic)
                </li>
                <li>
                  <strong>Error Tracking:</strong> Sentry
                </li>
                <li>
                  <strong>Styling:</strong> NativeWind (Tailwind for RN) or
                  similar
                </li>
              </ul>

              <h3 className="text-xl font-semibold mb-2">Core Functionality</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Comprehensive offline data capture and storage.</li>
                <li>Automated background data synchronization.</li>
                <li>
                  Queue system for managing offline actions (create, update,
                  delete).
                </li>
                <li>Custom hooks for encapsulating complex business logic.</li>
                <li>
                  Native module integration for device-specific features (e.g.,
                  camera, GPS).
                </li>
                <li>Detailed error reporting and monitoring.</li>
              </ul>

              <div className="mt-6">
                <h3 className="text-xl font-semibold mb-2">
                  Technologies Used
                </h3>
                <div className="flex justify-start items-center flex-wrap">
                  <Image
                    src="/images/icons/react.webp"
                    alt="React Native"
                    width={50}
                    height={50}
                    className="m-2"
                    style={{ objectFit: "contain" }}
                  />
                  <Image
                    src="/images/icons/js.webp"
                    alt="JavaScript"
                    width={50}
                    height={50}
                    className="m-2"
                    style={{ objectFit: "contain" }}
                  />
                  <Image
                    src="/images/icons/tailwind.webp"
                    alt="Tailwind CSS / NativeWind"
                    width={50}
                    height={50}
                    className="m-2 py-1"
                    style={{ objectFit: "contain" }}
                  />
                  <Image
                    src="/images/icons/expoGo.svg"
                    alt="Expo"
                    width={50}
                    height={50}
                    className="m-2"
                    style={{ objectFit: "contain" }}
                  />
                  <Image
                    src="/images/icons/github.webp"
                    alt="GitHub"
                    width={50}
                    height={50}
                    className="m-2"
                    style={{ objectFit: "contain" }}
                  />
                </div>
              </div>
            </section>
          </div>

          <ProjectNavigation currentSlug="pwg" />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default PWG;
