'use client';

/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

const Meetly = () => {

  return (
    <main className="min-h-screen pt-20 bg-theme-bg-light dark:bg-theme-bg-dark text-theme-text-light dark:text-theme-text-dark">
        <div className="container mx-auto px-4 pt-8">
          <h1 className="text-4xl font-bold mb-6 text-center font-ibmPlexMono italic">
            Meetly - Meeting Scheduler
          </h1>

          <div className="flex justify-center gap-4 mb-8">
            <a
              href="https://meetly-zeta.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
              aria-label="Visit live site (opens in a new tab)"
            >
              <FontAwesomeIcon icon={faExternalLinkAlt} className="mr-2" />
              Live Site
            </a>
            <a
              href="https://github.com/AngusBlomley/Meetly"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
              aria-label="View source code on GitHub (opens in a new tab)"
            >
              <FontAwesomeIcon icon={faGithub} className="mr-2" />
              GitHub
            </a>
          </div>

          <div className="mb-8 max-w-4xl mx-auto rounded-lg overflow-hidden shadow-lg border aspect-video">
            <video
              src="/videos/meetly.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="w-full h-auto"
            />
          </div>

          <div className="max-w-4xl mx-auto space-y-8 font-karla">
            <section>
              <h2 className="text-2xl font-semibold mb-3 font-ibmPlexMono">
                Project Overview
              </h2>
              <p>
                Meetly is a practical web application designed to simplify
                meeting arrangements by finding the central train station
                between two specified addresses. It's ideal for users needing to
                find a mutually convenient public transport location.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3 font-ibmPlexMono">
                Technical Overview
              </h2>
              <p className="mb-4">
                This project integrates frontend technologies with external APIs
                to provide a location-based service. Built using Next.js for
                server-side rendering benefits and React for the UI, it
                leverages the Google Maps API for geocoding addresses,
                calculating midpoints, and finding nearby train stations.
              </p>

              <h3 className="text-xl font-semibold mb-2">
                Architecture & Stack
              </h3>
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
                <li>
                  Midpoint calculation between the two geocoded addresses.
                </li>
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
                <h3 className="text-xl font-semibold mb-2">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-4 items-center">
                  <Image
                    src="/images/icons/next.webp"
                    alt="Next.js"
                    width={40}
                    height={40}
                    style={{ objectFit: "contain" }}
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

export default Meetly;
