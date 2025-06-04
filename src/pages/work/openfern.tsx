/* eslint-disable react/no-unescaped-entities */
import Header from "@/components/globals/header";
import Footer from "@/components/globals/footer";
import ImageWithLoader from "@/components/globals/ImageWithLoader";
import ProjectNavigation from "@/components/work/ProjectNavigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const OpenFern = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-20 bg-theme-bg-light dark:bg-theme-bg-dark text-theme-text-light dark:text-theme-text-dark">
        <div className="container mx-auto px-4 pt-8">
          <h1 className="text-4xl font-bold mb-6 text-center font-ibmPlexMono italic">
            OpenFern - Social Media Video Productions
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
            <ImageWithLoader
              src="/images/work/openfern.png"
              alt="Open Fern Studio Website Screenshot"
              width={1200} // Adjusted for consistency
              height={675} // Adjusted for consistency
              className="rounded-lg shadow-lg border w-full h-auto"
              priority
            />
          </div>

          <div className="max-w-4xl mx-auto space-y-8 font-karla">
            <section>
              <h2 className="text-2xl font-semibold mb-3 font-ibmPlexMono">
                Project Overview
              </h2>
              <p>
                Open Fern Studio represents a sophisticated web development
                agency platform showcasing expertise in modern web technologies
                and design principles. Built with Next.js, it features a
                responsive design, smooth animations via Framer Motion, and
                optimized performance, demonstrating a perfect blend of
                aesthetic appeal and technical excellence.
              </p>
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

              <h3 className="text-xl font-semibold mb-2">Core Functionality</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Modern and responsive design adapting to all devices.</li>
                <li>Dynamic content management for easy updates.</li>
                <li>
                  Portfolio showcase with potential filtering capabilities.
                </li>
                <li>
                  Display of team member profiles and service descriptions.
                </li>
                <li>Performance optimization techniques implemented.</li>
                <li>Contact form with validation.</li>
              </ul>

              <div className="mt-6">
                <h3 className="text-xl font-semibold mb-2">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-4 items-center">
                  <ImageWithLoader
                    src="/images/icons/next.webp"
                    alt="Next.js"
                    width={40}
                    height={40}
                    style={{ objectFit: "contain" }}
                  />
                  <ImageWithLoader
                    src="/images/icons/react.webp"
                    alt="TypeScript"
                    width={35}
                    height={35}
                    style={{ objectFit: "contain" }}
                  />
                  <ImageWithLoader
                    src="/images/icons/tailwind.webp"
                    alt="Tailwind CSS"
                    width={40}
                    height={40}
                    style={{ objectFit: "contain" }}
                  />
                  <ImageWithLoader
                    src="/images/icons/github.webp"
                    alt="GitHub"
                    width={40}
                    height={40}
                    style={{ objectFit: "contain" }}
                  />
                </div>
              </div>
            </section>
          </div>

          <ProjectNavigation currentSlug="openfern" />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default OpenFern;
