import React from "react";
import Link from "next/link";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

interface Project {
  slug: string;
  title: string;
}

// Define the order of projects here
// This should match the order in your header/main links for consistency
const projects: Project[] = [
  { slug: "vocabo", title: "Vocabo" },
  { slug: "pwg", title: "PWG Windows & Doors" },
  { slug: "japaneseHostFamily", title: "Japanese Host Family Platform" },
  { slug: "stringBox", title: "String Box" },
  { slug: "openfern", title: "Open Fern Studio" },
  { slug: "celestialObjectTracker", title: "Celestial Object Tracker" },
  { slug: "meetly", title: "Meetly" },
  { slug: "beFirst", title: "Be First" },

  // Add any other projects in their display order
];

interface ProjectNavigationProps {
  currentSlug: string;
}

const ProjectNavigation: React.FC<ProjectNavigationProps> = ({
  currentSlug,
}) => {
  const currentIndex = projects.findIndex((p) => p.slug === currentSlug);

  if (currentIndex === -1) {
    console.warn(
      `ProjectNavigation: Slug "${currentSlug}" not found in project list.`
    );
    return null; // Or render nothing if the slug isn't found
  }

  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject =
    currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <nav
      className="max-w-4xl mx-auto mt-12 mb-8 p-4 border-t border-gray-300 dark:border-gray-700 flex justify-between items-center font-ibmPlexMono"
      aria-label="Project navigation"
    >
      <div>
        {prevProject ? (
          <Link href={`/work/${prevProject.slug}`} passHref>
            <div className="inline-flex items-center text-sm opacity-75 hover:opacity-100 transition-opacity cursor-pointer">
              <FaArrowLeft className="mr-2" />
              <div>
                <div>Previous Project</div>
                <div className="font-semibold">{prevProject.title}</div>
              </div>
            </div>
          </Link>
        ) : (
          <div className="text-sm text-gray-400 dark:text-gray-600">
            No Previous Project
          </div> // Placeholder for styling when no prev exists
        )}
      </div>

      {/* Project Counter */}
      <div className="text-center text-sm text-gray-500 dark:text-gray-400">
        {currentIndex + 1} / {projects.length}
      </div>

      <div className="text-right">
        {nextProject ? (
          <Link href={`/work/${nextProject.slug}`} passHref>
            <div className="inline-flex items-center text-sm opacity-75 hover:opacity-100 transition-opacity cursor-pointer">
              <div>
                <div>Next Project</div>
                <div className="font-semibold">{nextProject.title}</div>
              </div>
              <FaArrowRight className="ml-2" />
            </div>
          </Link>
        ) : (
          <div className="text-sm text-gray-400 dark:text-gray-600">
            No Next Project
          </div> // Placeholder for styling when no next exists
        )}
      </div>
    </nav>
  );
};

export default ProjectNavigation;
