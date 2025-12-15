'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

interface Project {
  slug: string;
  title: string;
}

const projects: Project[] = [
  { slug: "pwg", title: "PWG Windows & Doors" },
  { slug: "vocabo", title: "Vocabo" },
  { slug: "stringBox", title: "String Box" },
  { slug: "openfern", title: "Open Fern Studio" },
  { slug: "fmp", title: "Final Major Project" },
  { slug: "meetly", title: "Meetly" },
  { slug: "beFirst", title: "Be First" },
];

function ProjectNavigation() {
  const pathname = usePathname();
  const currentSlug = pathname?.split('/').pop() || '';
  const currentIndex = projects.findIndex((p) => p.slug === currentSlug);

  if (currentIndex === -1) {
    return null;
  }

  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <nav
      className="max-w-4xl mx-auto mt-12 p-4 border-t border-gray-300 dark:border-gray-700 flex justify-between items-center font-ibmPlexMono"
      aria-label="Project navigation"
    >
      <div className="flex-1 text-left">
        {prevProject ? (
          <Link href={`/work/${prevProject.slug}`}>
            <div className="inline-flex items-center text-sm opacity-75 hover:opacity-100 transition-opacity cursor-pointer">
              <FaArrowLeft className="mr-2" />
              <div>
                <div className="font-semibold">{prevProject.title}</div>
              </div>
            </div>
          </Link>
        ) : (
          <div className="text-sm text-gray-400 dark:text-gray-600"></div>
        )}
      </div>

      <div className="text-center text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap px-4">
        {currentIndex + 1} / {projects.length}
      </div>

      <div className="flex-1 text-right">
        {nextProject ? (
          <Link href={`/work/${nextProject.slug}`}>
            <div className="inline-flex items-center text-sm opacity-75 hover:opacity-100 transition-opacity cursor-pointer">
              <div>
                <div className="font-semibold">{nextProject.title}</div>
              </div>
              <FaArrowRight className="ml-2" />
            </div>
          </Link>
        ) : (
          <div className="text-sm text-gray-400 dark:text-gray-600"></div>
        )}
      </div>
    </nav>
  );
}

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <ProjectNavigation />
    </>
  );
}
