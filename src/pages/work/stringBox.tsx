import React, { useState } from "react";
import Header from "@/components/globals/header";
import Footer from "@/components/globals/footer";
import Image from "next/image";
import { useDarkMode } from "@/contexts/darkModeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import ProjectNavigation from "@/components/work/ProjectNavigation";
import { PulseLoader } from "react-spinners";

const StringBox = () => {
  const { isDarkMode } = useDarkMode();
  const [videoLoading, setVideoLoading] = useState(true);

  // Fallback timer to hide loading state after 5 seconds
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setVideoLoading(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-theme-bg-light dark:bg-theme-bg-dark text-theme-text-light dark:text-theme-text-dark">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-0 pt-20 lg:pt-20">
        <h1 className="text-4xl font-bold mb-6 text-center font-ibmPlexMono italic">
          StringBox - Racket Ecommerce and Trade
        </h1>

        <div className="flex justify-center gap-4 mb-8">
          <a
            href="http://string-box.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-150"
            aria-label="Visit live site (opens in a new tab)"
          >
            <FontAwesomeIcon icon={faExternalLinkAlt} className="mr-2" />
            Live Site
          </a>
          <a
            href="https://github.com/AngusBlomley/string-box"
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
        <div className="mb-8 max-w-4xl mx-auto rounded-lg overflow-hidden shadow-lg relative aspect-video">
          {videoLoading && (
            <div className="absolute inset-0 bg-gray-200 dark:bg-gray-800 animate-pulse flex items-center justify-center">
              <PulseLoader color="#6B7280" size={8} />
            </div>
          )}
          <video
            src="/videos/stringBoxWeb.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            onLoadedData={() => setVideoLoading(false)}
            onCanPlay={() => setVideoLoading(false)}
            onError={() => setVideoLoading(false)}
            className="w-full h-auto transition-opacity duration-300"
            style={{
              opacity: videoLoading ? 0 : 1,
              transition: "opacity 0.3s ease-in-out",
            }}
          />
        </div>

        <div className="max-w-4xl mx-auto space-y-8 font-karla">
          <section>
            <h2 className="text-2xl font-semibold mb-3 font-ibmPlexMono">
              Project Overview
            </h2>
            <p>
              String Box is a convenient mail-in racquet stringing service
              catering to tennis players. Leveraging 40 years of professional
              hand-stringing experience, the service aims to improve racquet
              performance and longevity. Users can place orders online, send in
              their racquets, and receive them back freshly strung with
              high-quality strings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 font-ibmPlexMono">
              Technical Details
            </h2>
            <p className="mb-4">
              Built with Next.js and JavaScript, this project features a
              responsive frontend styled with Tailwind CSS. It includes user
              authentication, an ordering system (likely involving a backend
              service not detailed in the repo, possibly via Vercel Serverless
              Functions or a separate API), and content management for service
              details and string types.
            </p>

            <h3 className="text-xl font-semibold mb-2">Technologies Used</h3>
            <ul className="list-disc list-inside space-y-1 mb-4">
              <li>Next.js (React Framework)</li>
              <li>JavaScript</li>
              <li>Tailwind CSS</li>
              <li>Vercel (Deployment)</li>
              {/* Add backend/DB specifics if known */}
            </ul>

            <h3 className="text-xl font-semibold mb-2">Key Features</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Online ordering system for racquet stringing.</li>
              <li>Mail-in service model.</li>
              <li>
                Display of various string types and information (Polyester,
                Solid Core, Multi Fiber, Natural Gut).
              </li>
              <li>User authentication (Login/Sign Up).</li>
              <li>Shopping cart functionality.</li>
              <li>Contact form.</li>
            </ul>
          </section>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-2">Technologies Used</h3>
            <div className="flex flex-wrap gap-4 items-center mb-6">
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
                src="/images/icons/js.webp"
                alt="JavaScript"
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
                src="/images/icons/github.webp"
                alt="GitHub"
                width={40}
                height={40}
                className="w-10 h-10 object-contain m-2"
                style={{
                  objectFit: "contain",
                  filter: isDarkMode ? "invert(0)" : "invert(1)",
                }}
              />
            </div>
          </div>
        </div>
        <ProjectNavigation currentSlug="stringBox" />
      </main>
      <Footer />
    </div>
  );
};

export default StringBox;
