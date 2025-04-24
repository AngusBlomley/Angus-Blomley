/* eslint-disable react/no-unescaped-entities */
import HeaderGlobal from "@/components/globals/headerGlobal";
import Footer from "@/components/globals/footer";
import { WorkNavigation } from "@/components/work/WorkNavigation";
import Image from "next/image";
import { useDarkMode } from "@/contexts/darkModeContext";

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
      <main className="min-h-screen pt-20" style={{ backgroundColor, color }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="space-y-8">
            <div className="text-center">
              <h1 className="text-4xl mt-16 font-bold mb-4">
                PWG Windows & Doors - Mobile App Development
              </h1>
              <p className="text-lg">
                A comprehensive React Native mobile application for engineers to
                perform on-site assessments of custom windows and doors,
                featuring robust offline capabilities and enterprise-level state
                management.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-semibold mb-4">
                    Technical Overview
                  </h2>
                  <p className="text-lg">
                    Engineered a sophisticated React Native application that
                    demonstrates expertise in mobile development, offline-first
                    architecture, and complex state management. The project
                    showcases proficiency in building enterprise-level mobile
                    solutions with robust offline capabilities, efficient data
                    synchronization, and comprehensive error tracking.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">
                    Technical Implementation
                  </h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-medium mb-2">
                        Mobile Development
                      </h3>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>
                          React Native with TypeScript for cross-platform
                          development
                        </li>
                        <li>
                          Expo Router for seamless navigation and deep linking
                        </li>
                        <li>Custom hooks for complex business logic</li>
                        <li>
                          Context API and AsyncStorage for state persistence
                        </li>
                        <li>Native module integration for device features</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-2">
                        Architecture & Data Flow
                      </h3>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>
                          Offline-first architecture with data synchronization
                        </li>
                        <li>Queue-based system for handling offline actions</li>
                        <li>RESTful API integration with retry mechanisms</li>
                        <li>Efficient data caching and storage strategies</li>
                        <li>Background task management for sync operations</li>
                      </ul>
                    </div>
                  </div>
                </section>
                <section>
                  <h2 className="text-2xl font-semibold mb-4">
                    Development Practices
                  </h2>
                  <div className="flex justify-start">
                    <Image
                      src="/images/icons/react.webp"
                      alt="React Native"
                      width={50}
                      height={50}
                      className="mx-2"
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
                      alt="tailwind"
                      width={50}
                      height={50}
                      className="m-2 py-2"
                    />
                    <Image
                      src="/images/icons/github.webp"
                      alt="GitHub"
                      width={50}
                      height={50}
                      className="mx-2"
                      style={{
                        objectFit: "contain",
                        filter: isDarkMode ? "invert(0)" : "invert(1)",
                      }}
                    />
                    <Image
                      src="/images/icons/expoGo.svg"
                      alt="Redux"
                      width={50}
                      height={50}
                      className="mx-2"
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Comprehensive offline functionality</li>
                    <li>Real-time data synchronization</li>
                    <li>Advanced error tracking with Sentry</li>
                    <li>Cross-platform compatibility</li>
                    <li>Automated CI/CD pipeline</li>
                    <li>Performance optimization</li>
                  </ul>
                </section>
              </div>

              <div className="space-y-8">
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
            </div>

            <div className="mt-16">
              <h2 className="text-2xl font-semibold mb-4">Project Impact</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-medium mb-2">
                    Enhanced Efficiency
                  </h3>
                  <p>
                    Reduced on-site assessment time by 40% through streamlined
                    digital processes, replacing paper-based workflows.
                  </p>
                </div>
                <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-medium mb-2">
                    Improved Accuracy
                  </h3>
                  <p>
                    Decreased measurement errors by 35% with digital validation
                    and standardized assessment procedures.
                  </p>
                </div>
                <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-medium mb-2">Business Growth</h3>
                  <p>
                    Enabled a 25% increase in assessment capacity, supporting
                    business expansion into new regions.
                  </p>
                </div>
              </div>
            </div>

            <WorkNavigation currentPath="/work/pwg" />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default PWG;
