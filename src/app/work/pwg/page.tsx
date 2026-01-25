/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";

const PWG = () => {
  return (
    <main className="min-h-screen pt-20 bg-theme-bg-light dark:bg-theme-bg-dark text-theme-text-light dark:text-theme-text-dark">
        <div className="container mx-auto px-4 pt-8">
          <h1 className="text-4xl font-bold mb-6 text-center font-ibmPlexMono italic">
            PWG Windows & Doors - Mobile App
          </h1>

          <div className="flex justify-center mb-8">
            <span
              className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-sm font-medium rounded-md shadow-sm text-gray-400 dark:text-gray-500 bg-gray-100 dark:bg-gray-800 cursor-default"
              title="Repository is private due to client confidentiality"
            >
              <FontAwesomeIcon icon={faLock} className="mr-2 w-4 h-4" />
              Private (Client Work)
            </span>
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
                preload="metadata"
                className="w-full rounded-lg shadow-xl"
              />
            </div>
          </div>

          <div className="max-w-4xl mx-auto mb-8 space-y-8 font-karla">
            <section>
              <h2 className="text-2xl font-semibold mb-3 font-ibmPlexMono">
                Project Overview
              </h2>
              <p>
                Developed a React Native mobile application for PWG Windows & Doors
                field engineers using Expo SDK 54 with native modules. The app enables
                efficient on-site assessments of custom windows and doors, featuring
                robust offline capabilities, data synchronization, and enterprise-level
                state management to streamline workflows and replace paper-based processes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3 font-ibmPlexMono">
                My Role & Impact
              </h2>
              <p>
                Working as part of the development team, my key contributions include:
              </p>
              <ul className="list-disc list-inside space-y-1 mt-2">
                <li>Replaced manual paper forms with digital workflows, reducing admin time for engineers</li>
                <li>Implemented offline-first architecture allowing engineers to work in areas with poor connectivity</li>
                <li>Built a queue-based sync system ensuring no data loss between field and office</li>
                <li>Integrated camera and signature capture for on-site documentation</li>
              </ul>
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
                  preload="metadata"
                  className="w-full rounded-lg shadow-xl"
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
                Built with React Native and Expo SDK 54, this application demonstrates
                mobile development expertise with a focus on offline-first architecture
                and reliable state management. The project includes queue-based data
                synchronization, native module integration, and error tracking via Sentry.
              </p>

              <h3 className="text-xl font-semibold mb-2">
                Architecture & Stack
              </h3>
              <ul className="list-disc list-inside space-y-1 mb-4">
                <li>
                  <strong>Platform:</strong> React Native with Expo SDK 54
                </li>
                <li>
                  <strong>Language:</strong> TypeScript
                </li>
                <li>
                  <strong>Build:</strong> Expo Dev Client with Native Modules
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
                <div className="flex flex-wrap gap-4 items-center">
                  <Image
                    src="/images/icons/react.webp"
                    alt="React Native"
                    width={40}
                    height={40}
                    className="rounded-lg"
                    style={{ objectFit: "contain" }}
                  />
                  <Image
                    src="/images/icons/js.webp"
                    alt="JavaScript"
                    width={40}
                    height={40}
                    className="rounded-lg"
                    style={{ objectFit: "contain" }}
                  />
                  <Image
                    src="/images/icons/tailwind.webp"
                    alt="Tailwind CSS / NativeWind"
                    width={40}
                    height={40}
                    className="rounded-lg"
                    style={{ objectFit: "contain" }}
                  />
                  <Image
                    src="/images/icons/expoGo.svg"
                    alt="Expo"
                    width={40}
                    height={40}
                    className="rounded-lg w-10 h-10"
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

export default PWG;
