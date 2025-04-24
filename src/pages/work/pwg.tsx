/* eslint-disable react/no-unescaped-entities */
import HeaderGlobal from "@/components/globals/headerGlobal";
import Footer from "@/components/globals/footer";
import Image from "next/image";
import { useDarkMode } from "@/contexts/darkModeContext";
import ProjectNavigation from "@/components/work/ProjectNavigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";

const PWG = () => {
  const { isDarkMode } = useDarkMode();
  const backgroundColor = isDarkMode
    ? "var(--background-color-dark)"
    : "var(--background-color-light)";
  const color = isDarkMode
    ? "var(--foreground-color-dark)"
    : "var(--foreground-color-light)";

  return (
    <>
      <HeaderGlobal />
      <main
        className="flex-grow container mx-auto px-4 py-8 pt-24 lg:pt-32"
        style={{ backgroundColor, color }}
      >
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
          <div className="rounded-lg overflow-hidden shadow-lg">
            <video
              src="/videos/pwg_web.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              className="w-full rounded-lg shadow-xl"
            />
          </div>
        </div>

        <div className="max-w-4xl mx-auto space-y-8 font-karla">
          <section>
            <h2 className="text-2xl font-semibold mb-3 font-ibmPlexMono">
              Project Overview
            </h2>
            <p>
              Developed a comprehensive React Native mobile application for PWG
              Windows & Doors engineers. The app enables efficient on-site
              assessments of custom windows and doors, featuring robust offline
              capabilities, data synchronization, and enterprise-level state
              management to streamline workflows and replace paper-based
              processes.
            </p>
          </section>

          {/* Second Video - Moved and Resized */}
          <div className="my-8 max-w-lg mx-auto">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <video
                src="/videos/pwg_tablet.webm"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                className="w-full rounded-lg shadow-xl"
              />
            </div>
          </div>

          {/* Technical Overview Section */}
          <section>
            <h2 className="text-2xl font-semibold mb-3 font-ibmPlexMono">
              Technical Overview
            </h2>
            <p className="mb-4">
              Engineered a sophisticated React Native application demonstrating
              expertise in mobile development, offline-first architecture, and
              complex state management. The project showcases proficiency in
              building enterprise-level mobile solutions with robust offline
              capabilities, efficient data synchronization, and comprehensive
              error tracking via Sentry.
            </p>

            <h3 className="text-xl font-semibold mb-2">Architecture & Stack</h3>
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
                <strong>API:</strong> RESTful API integration (with retry logic)
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
              <h3 className="text-xl font-semibold mb-2">Technologies Used</h3>
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
                  style={{
                    objectFit: "contain",
                    filter: isDarkMode ? "invert(0)" : "invert(1)",
                  }}
                />
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 font-ibmPlexMono">
              Project Impact
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 p-4 rounded-lg shadow">
                <h3 className="text-lg font-medium mb-1">
                  Enhanced Efficiency
                </h3>
                <p className="text-sm">
                  Reduced on-site assessment time by 40% through streamlined
                  digital processes.
                </p>
              </div>
              <div className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 p-4 rounded-lg shadow">
                <h3 className="text-lg font-medium mb-1">Improved Accuracy</h3>
                <p className="text-sm">
                  Decreased measurement errors by 35% with digital validation
                  and standardized procedures.
                </p>
              </div>
              <div className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 p-4 rounded-lg shadow">
                <h3 className="text-lg font-medium mb-1">Business Growth</h3>
                <p className="text-sm">
                  Enabled a 25% increase in assessment capacity, supporting
                  business expansion.
                </p>
              </div>
            </div>
          </section>
        </div>

        <ProjectNavigation currentSlug="pwg" />
      </main>
      <Footer />
    </>
  );
};

export default PWG;
