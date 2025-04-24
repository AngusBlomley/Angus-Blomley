/* eslint-disable react/no-unescaped-entities */
import HeaderGlobal from "@/components/globals/headerGlobal";
import Footer from "@/components/globals/footer";
import Image from "next/image";
import { useDarkMode } from "@/contexts/darkModeContext";
import ProjectNavigation from "@/components/work/ProjectNavigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Meetly = () => {
  const { isDarkMode } = useDarkMode();
  const backgroundColor = isDarkMode
    ? "var(--background-color-dark)"
    : "var(--background-color-light)";
  const color = isDarkMode
    ? "var(--foreground-color-dark)"
    : "var(--foreground-color-light)";

  // Add state for video loading
  const [isVideoLoading, setIsVideoLoading] = useState(true);

  return (
    <>
      <HeaderGlobal />
      <main
        className="flex-grow container mx-auto px-4 py-8 pt-24 lg:pt-32"
        style={{ backgroundColor, color }}
      >
        {/* Title */}
        <h1 className="text-4xl font-bold mb-6 text-center font-ibmPlexMono italic">
          Meetly - Central Meeting Point Finder
        </h1>

        {/* Links */}
        <div className="flex justify-center gap-4 mb-8">
          <a
            href="https://meetly-zeta.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-150"
            aria-label="Visit live site (opens in a new tab)"
          >
            <FontAwesomeIcon icon={faExternalLinkAlt} className="mr-2" />
            Live Site
          </a>
          <a
            href="https://github.com/AngusBlomley/Meetly"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-sm font-medium rounded-md shadow-sm text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-150"
            aria-label="View source code on GitHub (opens in a new tab)"
          >
            <FontAwesomeIcon icon={faGithub} className="mr-2" />
            GitHub
          </a>
        </div>

        {/* Main Video */}
        <div className="mb-8 max-w-4xl mx-auto rounded-lg overflow-hidden shadow-lg border border-gray-700 relative aspect-video">
          {isVideoLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-200 dark:bg-gray-700">
              <span className="text-gray-500 dark:text-gray-400">
                Loading video...
              </span>
            </div>
          )}
          <video
            src="/videos/meetly.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className={`w-full h-auto transition-opacity duration-300 ${
              isVideoLoading ? "opacity-0" : "opacity-100"
            }`}
            onLoadedData={() => setIsVideoLoading(false)}
          />
        </div>

        {/* Content Area */}
        <div className="max-w-4xl mx-auto space-y-8 font-karla">
          {/* Project Overview */}
          <section>
            <h2 className="text-2xl font-semibold mb-3 font-ibmPlexMono">
              Project Overview
            </h2>
            <p>
              Meetly is a practical web application designed to simplify meeting
              arrangements by finding the central train station between two
              specified addresses. It's ideal for users needing to find a
              mutually convenient public transport location.
            </p>
          </section>

          {/* Technical Overview */}
          <section>
            <h2 className="text-2xl font-semibold mb-3 font-ibmPlexMono">
              Technical Overview
            </h2>
            <p className="mb-4">
              This project integrates frontend technologies with external APIs
              to provide a location-based service. Built using Next.js for
              server-side rendering benefits and React for the UI, it leverages
              the Google Maps API for geocoding addresses, calculating
              midpoints, and finding nearby train stations.
            </p>

            <h3 className="text-xl font-semibold mb-2">Architecture & Stack</h3>
            <ul className="list-disc list-inside space-y-1 mb-4">
              <li>
                <strong>Framework:</strong> Next.js (React)
              </li>
              <li>
                <strong>Language:</strong> TypeScript
              </li>
              <li>
                <strong>API Integration:</strong> Google Maps API (Geocoding,
                Places)
              </li>
              <li>
                <strong>HTTP Client:</strong> Axios
              </li>
              <li>
                <strong>Styling:</strong> Tailwind CSS
              </li>
              <li>
                <strong>Deployment:</strong> Vercel
              </li>
            </ul>

            <h3 className="text-xl font-semibold mb-2">Core Functionality</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Input fields for two addresses.</li>
              <li>Midpoint calculation between the two geocoded addresses.</li>
              <li>
                Finding the nearest train station to the calculated midpoint
                using Google Places API.
              </li>
              <li>
                Displaying the resulting station and route on an interactive
                Google Map.
              </li>
              <li>
                Dynamic map visibility (initially blurred/hidden, revealed on
                submit).
              </li>
            </ul>

            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-2">Technologies Used</h3>
              <div className="flex flex-wrap gap-4 items-center">
                <Image
                  src="/images/icons/next.webp"
                  alt="Next.js"
                  width={40}
                  height={40}
                  style={{
                    objectFit: "contain",
                    filter: isDarkMode ? "invert(1)" : "invert(0)",
                  }}
                />
                <Image
                  src="/images/icons/react.webp"
                  alt="React"
                  width={40}
                  height={40}
                  style={{ objectFit: "contain" }}
                />
                <Image
                  src="/images/icons/tailwind.webp"
                  alt="Tailwind CSS"
                  width={40}
                  height={40}
                  style={{ objectFit: "contain" }}
                />
                <Image
                  src="/images/icons/maps2.png"
                  alt="Google Maps API"
                  width={40}
                  height={40}
                  style={{ objectFit: "contain" }}
                />
                <Image
                  src="/images/icons/axios.webp"
                  alt="Axios"
                  width={40}
                  height={40}
                  style={{
                    objectFit: "contain",
                    filter: isDarkMode ? "invert(1)" : "invert(0)",
                  }}
                />
                <Image
                  src="/images/icons/github.webp"
                  alt="GitHub"
                  width={40}
                  height={40}
                  style={{
                    objectFit: "contain",
                    filter: isDarkMode ? "invert(0)" : "invert(1)",
                  }}
                />
              </div>
            </div>
          </section>
        </div>

        <ProjectNavigation currentSlug="meetly" />
      </main>
      <Footer />
    </>
  );
};

export default Meetly;
