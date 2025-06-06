/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import WorldMap from "@/components/WorldMap";
// import { useDarkMode } from "@/contexts/darkModeContext"; // Removed
import Header from "@/components/globals/header";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { FaMailBulk } from "react-icons/fa";

interface VisitedCountry {
  country: string;
  coordinates: [number, number];
  description?: string;
}

const visitedCountries: VisitedCountry[] = [
  {
    country: "USA",
    coordinates: [39.1653, -86.5264] as [number, number],
    description:
      "Attended a two-week diving camp at Indiana University to improve springboard and platform skills.",
  },
  {
    country: "GBR",
    coordinates: [51.5074, -0.1278] as [number, number],
    description:
      "Born and raised in the UK, studied Broadcast Engineering at Ravensbourne University London for three years, engineering and programming.",
  },
  {
    country: "USA-las-vegas",
    coordinates: [37.1699, -112.1398] as [number, number],
  },
  { country: "AUS", coordinates: [-14.8688, 151.2093] as [number, number] },
  { country: "CHN", coordinates: [39.9042, 116.4074] as [number, number] },
  { country: "PRT", coordinates: [39.3999, -8.2245] as [number, number] },
  { country: "ESP", coordinates: [40.4637, -3.7492] as [number, number] },
  { country: "AUT", coordinates: [47.5162, 14.5501] as [number, number] },
  { country: "SGP", coordinates: [11.3521, 103.8198] as [number, number] },
  { country: "FRA", coordinates: [46.8566, 2.3522] as [number, number] },
  { country: "NLD", coordinates: [50.8676, 4.9041] as [number, number] },
  { country: "KEN", coordinates: [10.0236, 37.9062] as [number, number] },
];

export default function AboutMe() {
  const [profileImageLoading, setProfileImageLoading] = useState(true);

  return (
    <>
      <Header />
      <main
        className="min-h-screen pt-10 px-4 sm:px-6 lg:px-8 pb-20 bg-theme-bg-light dark:bg-theme-bg-dark text-theme-text-light dark:text-theme-text-dark"
        // style={{ backgroundColor, color }} // Removed
      >
        <div className="relative">
          <div className="z-50 mt-10 sm:mt-20 absolute left-0 right-0 flex justify-center"></div>
          {/*
          <section className="mb-20">
            <div className="w-full h-full flex items-center justify-center">
              <WorldMap visitedCountries={visitedCountries} />
            </div>
            <div
              className="text-center mx-auto -translate-y-10 sm:-translate-y-20 hover:text-green-400 group z-50 cursor-pointer max-lg:hidden"
              onClick={() => {
                document
                  .getElementById("gbr")
                  ?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
            >
              <p className="font-semibold text-sm tracking-wide">LEARN MORE</p>
              <FontAwesomeIcon
                icon={faArrowDown}
                size="1x"
                className="group-hover:animate-bounce -translate-y-1 mt-2"
              />
            </div>
          </section>
          */}

          <div className="max-w-6xl mx-auto mt-20">
            {" "}
            {/* Added mt-20 as map section is removed */}
            <section
              id="gbr"
              className="mb-16 scroll-mt-24 bg-white/5 dark:bg-white/[.02] p-8 rounded-lg shadow-sm"
            >
              <h2 className="text-3xl font-semibold mb-6 text-center sm:text-left">
                Hi, I'm Angus Blomley
              </h2>
              <div className="flex flex-col-reverse sm:flex-row justify-center items-center gap-8">
                <p className="text-lg text-center sm:text-left font-rubik leading-relaxed tracking-normal">
                  I'm a Front End Software developer specializing in creating
                  high-performance web and mobile applications. My experience
                  includes developing advanced Chrome extensions and React /
                  React Native apps. I'm always eager to take on new challenges,
                  drive innovation, and build impactful solutions that deliver
                  exceptional user experiences.
                </p>
                <div className="relative">
                  {profileImageLoading && (
                    <div className="absolute inset-0 bg-gray-200 dark:bg-gray-800 animate-pulse rounded-full w-48 h-48 sm:w-[200px] sm:h-[200px] sm:mx-20 flex items-center justify-center">
                      <div className="text-gray-500 dark:text-gray-400 text-sm">Loading...</div>
                    </div>
                  )}
                  <Image
                    src="/images/about/portrait.jpeg"
                    alt="Angus Blomley"
                    width={200}
                    height={200}
                    className="rounded-full shadow-xl w-48 h-48 sm:w-[200px] sm:h-[200px] sm:mx-20"
                    onLoad={() => setProfileImageLoading(false)}
                    onError={() => setProfileImageLoading(false)}
                    style={{
                      opacity: profileImageLoading ? 0 : 1,
                      transition: "opacity 0.3s ease-in-out",
                    }}
                  />
                </div>
              </div>
            </section>
            <section className="mb-16">
              <h2 className="text-3xl font-semibold mb-8 text-center sm:text-left">
                Technical Skills
              </h2>

              <div className="mt-6 bg-white/5 dark:bg-white/[.02] p-8 rounded-lg shadow-sm mb-10">
                <h3 className="text-2xl font-semibold mb-4 text-blue-500">
                  Frontend Development
                </h3>
                <p className="text-lg mb-6 font-karla leading-relaxed">
                  My primary focus area, where I specialize in creating
                  responsive, accessible, and performant user interfaces that
                  deliver exceptional experiences across all devices.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                  <div className="bg-white/10 dark:bg-white/[.03] p-4 rounded-md hover:shadow-md transition-all">
                    <h4 className="font-semibold mb-2">React & React Native</h4>
                    <p className="text-sm opacity-80">
                      Building component-based UIs for web and mobile
                    </p>
                  </div>
                  <div className="bg-white/10 dark:bg-white/[.03] p-4 rounded-md hover:shadow-md transition-all">
                    <h4 className="font-semibold mb-2">Next.js</h4>
                    <p className="text-sm opacity-80">
                      Server-side rendering and static site generation
                    </p>
                  </div>
                  <div className="bg-white/10 dark:bg-white/[.03] p-4 rounded-md hover:shadow-md transition-all">
                    <h4 className="font-semibold mb-2">TypeScript</h4>
                    <p className="text-sm opacity-80">
                      Type-safe JavaScript for better developer experience
                    </p>
                  </div>
                  <div className="bg-white/10 dark:bg-white/[.03] p-4 rounded-md hover:shadow-md transition-all">
                    <h4 className="font-semibold mb-2">Tailwind CSS</h4>
                    <p className="text-sm opacity-80">
                      Utility-first CSS framework for rapid styling
                    </p>
                  </div>
                  <div className="bg-white/10 dark:bg-white/[.03] p-4 rounded-md hover:shadow-md transition-all">
                    <h4 className="font-semibold mb-2">CSS/SCSS</h4>
                    <p className="text-sm opacity-80">
                      Custom styling and animations
                    </p>
                  </div>
                  <div className="bg-white/10 dark:bg-white/[.03] p-4 rounded-md hover:shadow-md transition-all">
                    <h4 className="font-semibold mb-2">Responsive Design</h4>
                    <p className="text-sm opacity-80">
                      Mobile-first, accessible interfaces
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-white/5 dark:bg-white/[.02] p-8 rounded-lg shadow-sm">
                <h3 className="text-2xl font-semibold mb-4 text-green-500">
                  Backend Development
                </h3>
                <p className="text-lg mb-6 font-karla leading-relaxed">
                  Building robust, scalable server-side applications and APIs to
                  support modern web applications.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                  <div className="bg-white/10 dark:bg-white/[.03] p-4 rounded-md hover:shadow-md transition-all">
                    <h4 className="font-semibold mb-2">Node.js</h4>
                    <p className="text-sm opacity-80">
                      JavaScript runtime for server-side applications
                    </p>
                  </div>
                  <div className="bg-white/10 dark:bg-white/[.03] p-4 rounded-md hover:shadow-md transition-all">
                    <h4 className="font-semibold mb-2">Express</h4>
                    <p className="text-sm opacity-80">
                      Web framework for building RESTful APIs
                    </p>
                  </div>
                  <div className="bg-white/10 dark:bg-white/[.03] p-4 rounded-md hover:shadow-md transition-all">
                    <h4 className="font-semibold mb-2">MongoDB</h4>
                    <p className="text-sm opacity-80">
                      NoSQL database for flexible data storage
                    </p>
                  </div>
                  <div className="bg-white/10 dark:bg-white/[.03] p-4 rounded-md hover:shadow-md transition-all">
                    <h4 className="font-semibold mb-2">Supabase</h4>
                    <p className="text-sm opacity-80">
                      Open source Firebase alternative with PostgreSQL
                    </p>
                  </div>
                  <div className="bg-white/10 dark:bg-white/[.03] p-4 rounded-md hover:shadow-md transition-all">
                    <h4 className="font-semibold mb-2">RESTful APIs</h4>
                    <p className="text-sm opacity-80">
                      Designing and implementing robust API endpoints
                    </p>
                  </div>
                  <div className="bg-white/10 dark:bg-white/[.03] p-4 rounded-md hover:shadow-md transition-all">
                    <h4 className="font-semibold mb-2">Authentication</h4>
                    <p className="text-sm opacity-80">
                      Secure user authentication and authorization
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10 bg-white/5 dark:bg-white/[.02] p-8 rounded-lg shadow-sm">
                <h3 className="text-2xl font-semibold mb-4 text-purple-500">
                  Development Tools
                </h3>
                <p className="text-lg mb-6 font-karla leading-relaxed">
                  Tools and practices that help me deliver high-quality code
                  efficiently.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                  <div className="bg-white/10 dark:bg-white/[.03] p-4 rounded-md hover:shadow-md transition-all">
                    <h4 className="font-semibold mb-2">Git & GitHub</h4>
                    <p className="text-sm opacity-80">
                      Version control and collaboration
                    </p>
                  </div>
                  <div className="bg-white/10 dark:bg-white/[.03] p-4 rounded-md hover:shadow-md transition-all">
                    <h4 className="font-semibold mb-2">VS Code</h4>
                    <p className="text-sm opacity-80">
                      Customized editor for efficient development
                    </p>
                  </div>
                  <div className="bg-white/10 dark:bg-white/[.03] p-4 rounded-md hover:shadow-md transition-all">
                    <h4 className="font-semibold mb-2">CI/CD Pipelines</h4>
                    <p className="text-sm opacity-80">
                      Automated testing and deployment
                    </p>
                  </div>
                </div>
              </div>
            </section>
            <section className="flex justify-center scroll-mt-24" id="contact">
              <Link
                href="mailto:ablomley01@gmail.com"
                className="flex items-center gap-3 opacity-75 hover:opacity-100 transition-opacity p-4 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                <FaMailBulk className="text-2xl" />
                <span>ablomley01@gmail.com</span>
              </Link>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
