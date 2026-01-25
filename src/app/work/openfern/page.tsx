'use client';

/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const OpenFern = () => {

  return (
    <main className="min-h-screen pt-20 bg-theme-bg-light dark:bg-theme-bg-dark text-theme-text-light dark:text-theme-text-dark">
        <div className="container mx-auto px-4 pt-8">
          <h1 className="text-4xl font-bold mb-6 text-center font-ibmPlexMono italic">
            Open Fern Studio - Marketing Agency Website
          </h1>

          <div className="flex justify-center gap-4 mb-8">
            <a
              href="https://openfern.studio"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-150"
              aria-label="Visit live site (opens in a new tab)"
            >
              <FontAwesomeIcon icon={faExternalLinkAlt} className="mr-2" />
              Live Site
            </a>
            <a
              href="https://github.com/AngusBlomley/open-fern-studio"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-sm font-medium rounded-md shadow-sm text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-150"
              aria-label="View source code on GitHub (opens in a new tab)"
            >
              <FontAwesomeIcon icon={faGithub} className="mr-2" />
              GitHub
            </a>
          </div>

          <div className="mb-8 max-w-4xl mx-auto">
            <Image
              src="/images/work/openfern.png"
              alt="Open Fern Studio Website Screenshot"
              width={1200}
              height={675}
              className="rounded-lg shadow-lg w-full h-auto"
              priority
            />
          </div>

          <div className="max-w-4xl mx-auto space-y-8 font-karla">
            <section>
              <h2 className="text-2xl font-semibold mb-3 font-ibmPlexMono">
                Project Overview
              </h2>
              <p>
                Built a professional website for Open Fern Studio, a social media
                marketing agency specializing in video content creation. The site
                serves as their primary client-facing platform, showcasing their
                portfolio and services with modern design and smooth animations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3 font-ibmPlexMono">
                Challenges & Solutions
              </h2>
              <ul className="list-disc list-inside space-y-1">
                <li>Optimized video and image loading for fast initial page render</li>
                <li>Implemented smooth scroll-based animations without impacting performance</li>
                <li>Built a responsive layout that adapts from mobile to desktop seamlessly</li>
                <li>Set up SEO best practices to improve organic search visibility</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3 font-ibmPlexMono">
                Technical Overview
              </h2>
              <h3 className="text-xl font-semibold mb-2">
                Architecture & Stack
              </h3>
              <ul className="list-disc list-inside space-y-1 mb-4">
                <li>
                  <strong>Framework:</strong> Next.js with TypeScript
                </li>
                <li>
                  <strong>Styling:</strong> Tailwind CSS
                </li>
                <li>
                  <strong>Animation:</strong> Framer Motion
                </li>
                <li>
                  <strong>Key Features:</strong> Dynamic Routing, SEO
                  Optimization, Content Management Integration
                </li>
              </ul>

              <h3 className="text-xl font-semibold mb-2">Key Features</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Responsive design adapting to all devices</li>
                <li>Portfolio showcase with video previews</li>
                <li>Team member profiles and service descriptions</li>
                <li>Contact form with validation</li>
                <li>Deployed on Vercel with automatic CI/CD</li>
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
                    className="rounded-lg"
                    style={{ objectFit: "contain" }}
                  />
                  <Image
                    src="/images/icons/react.webp"
                    alt="React"
                    width={35}
                    height={35}
                    className="rounded-lg"
                    style={{ objectFit: "contain" }}
                  />
                  <Image
                    src="/images/icons/tailwind.webp"
                    alt="Tailwind CSS"
                    width={40}
                    height={40}
                    className="rounded-lg"
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

export default OpenFern;
