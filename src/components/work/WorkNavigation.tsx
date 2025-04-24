import Link from "next/link";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

interface WorkNavigationProps {
  currentPath: string;
}

export const workPages = [
  { name: "PWG Windows & Doors", path: "/work/pwg" },
  { name: "Vocabo", path: "/work/vocabo" },
  { name: "Open Fern Studio", path: "/work/openfern" },
  // { name: "Re-String Box", path: "/work/stringBox" },
  { name: "Celestial Object Tracker", path: "/work/celestialObjectTracker" },
  { name: "Meetly", path: "/work/meetly" },
  { name: "Be First", path: "/work/beFirst" },
];

export const WorkNavigation = ({ currentPath }: WorkNavigationProps) => {
  const currentIndex = workPages.findIndex((page) => page.path === currentPath);
  const prevPage = currentIndex > 0 ? workPages[currentIndex - 1] : null;
  const nextPage =
    currentIndex < workPages.length - 1 ? workPages[currentIndex + 1] : null;

  return (
    <div className="mt-16 mb-8">
      <div className="flex justify-center gap-4">
        {prevPage && (
          <Link
            href={prevPage.path}
            className="flex items-center gap-2 px-4 py-2 rounded-md bg-opacity-20 hover:bg-opacity-30 transition-all duration-200 bg-gray-500"
          >
            <FaArrowLeft className="h-4 w-4" />
            <span className="hidden md:inline">{prevPage.name}</span>
          </Link>
        )}

        {nextPage && (
          <Link
            href={nextPage.path}
            className="flex items-center gap-2 px-4 py-2 rounded-md bg-opacity-20 hover:bg-opacity-30 transition-all duration-200 bg-gray-500"
          >
            <span className="hidden md:inline">{nextPage.name}</span>
            <FaArrowRight className="h-4 w-4" />
          </Link>
        )}
      </div>
      <div className="text-center mt-4 text-sm opacity-60">
        Page {currentIndex + 1} of {workPages.length}
      </div>
    </div>
  );
};
