import React from "react";
import Image from "next/image";
import Header from "@/components/globals/header";
import Footer from "@/components/globals/footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import ProjectNavigation from "@/components/work/ProjectNavigation";

const JapaneseHostFamilyPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-theme-bg-light dark:bg-theme-bg-dark text-theme-text-light dark:text-theme-text-dark">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-0 pt-20">
        <h1 className="text-4xl font-bold mb-6 text-center font-ibmPlexMono italic">
          Japanese Host Family Platform
        </h1>

        <div className="flex justify-center gap-4 mb-8">
          <a
            href="https://japanese-host-family.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-150"
            aria-label="Visit live site (opens in a new tab)"
          >
            <FontAwesomeIcon icon={faExternalLinkAlt} className="mr-2" />
            Live Site
          </a>
          <a
            href="https://github.com/AngusBlomley/japanese-host-family"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 border text-sm font-medium rounded-md shadow-sm text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-150"
            aria-label="View source code on GitHub (opens in a new tab)"
          >
            <FontAwesomeIcon icon={faGithub} className="mr-2" />
            GitHub
          </a>
        </div>

        <div className="mb-8 max-w-4xl mx-auto">
          <Image
            src="/images/japanese-host-family/japanese-host-family.png"
            alt="Japanese Host Family Platform Screenshot"
            width={1200}
            height={675}
            className="rounded-lg shadow-lg border"
            priority // Load image eagerly as it's the main content
          />
        </div>

        <div className="max-w-4xl mx-auto space-y-8 font-karla">
          <section>
            <h2 className="text-2xl font-semibold mb-3 font-ibmPlexMono">
              Website Summary
            </h2>
            <p>
              This is a marketplace application connecting Japanese host
              families with international guests seeking accommodation in Japan.
              It facilitates homestay arrangements, offering an immersive
              cultural and language experience for visitors.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 font-ibmPlexMono">
              Technical Overview
            </h2>
            <p className="mb-4">
              This project demonstrates comprehensive full-stack development
              capabilities, encompassing frontend UI/UX, backend API
              development, database design, authentication, and performance
              optimization.
            </p>

            <h3 className="text-xl font-semibold mb-2">Architecture & Stack</h3>
            <ul className="list-disc list-inside space-y-1 mb-4">
              <li>
                <strong>Frontend:</strong> React 18, TypeScript, Vite, React
                Query, Context API, shadcn/ui, Tailwind CSS, React Router v6
              </li>
              <li>
                <strong>Backend:</strong> Supabase (PostgreSQL, Auth, Storage),
                Serverless Architecture
              </li>
              <li>
                <strong>Database:</strong> PostgreSQL via Supabase (See diagram
                below)
              </li>
              <li>
                <strong>Real-time:</strong> WebSocket integration via Supabase
              </li>
              <li>
                <strong>Internationalization:</strong> i18next
              </li>
            </ul>

            <h3 className="text-xl font-semibold mb-2">Core Features</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>
                Dual user roles (Hosts, Guests) with distinct functionalities.
              </li>
              <li>Comprehensive listing management for hosts.</li>
              <li>
                Advanced search, filtering, and map-based discovery for guests.
              </li>
              <li>Real-time messaging system between users.</li>
              <li>Detailed user profiles with rating/review system.</li>
              <li>Full bilingual support (English/Japanese).</li>
              <li>
                Secure authentication (email/password, social login, password
                reset).
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 font-ibmPlexMono">
              Key Implementation Details
            </h2>
            <ul className="list-disc list-inside space-y-1 mb-4">
              <li>Type-safe data flow using shared TypeScript interfaces.</li>
              <li>
                Custom React hooks for business logic (<code>useAuth</code>,{" "}
                <code>useLanguage</code>, <code>useConversation</code>).
              </li>
              <li>Responsive layouts adapting from mobile to desktop.</li>
              <li>
                Data-driven UI components with loading, error, and success
                states.
              </li>
              <li>
                Optimized image loading and code splitting for performance.
              </li>
              <li>Row-level security in Supabase and secure API endpoints.</li>
            </ul>
          </section>

          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-2">Technologies Used</h3>
            <div className="flex flex-wrap gap-4 items-center">
              <Image
                src="/images/icons/react.webp"
                alt="React"
                width={40}
                height={40}
                style={{ objectFit: "contain" }}
              />
              <Image
                src="/images/icons/typescript.png"
                alt="TypeScript"
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
                src="/images/icons/supabase.jpeg"
                alt="Supabase"
                width={40}
                height={40}
                style={{ objectFit: "contain", borderRadius: "0.5rem" }}
              />
              <Image
                src="/images/icons/github.webp"
                alt="GitHub"
                width={40}
                height={40}
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>
        </div>
        <ProjectNavigation currentSlug="japaneseHostFamily" />
      </main>
      <Footer />
    </div>
  );
};

export default JapaneseHostFamilyPage;
