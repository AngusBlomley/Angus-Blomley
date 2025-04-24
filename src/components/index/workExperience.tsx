import { useDarkMode } from "@/contexts/darkModeContext";
import Image from "next/image";
import Link from "next/link";
import Button from "../globals/Button";

function WorkExperience() {
  const { isDarkMode } = useDarkMode();
  const backgroundColor = isDarkMode
    ? "var(--background-color-dark)"
    : "var(--background-color-light)";
  const color = isDarkMode
    ? "var(--foreground-color-dark)"
    : "var(--foreground-color-light)";

  return (
    <section
      id="experience"
      style={{ backgroundColor, color }}
      className="py-16 max-md:py-12 duration-200 overflow-hidden"
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <h2 className="text-4xl font-semibold text-center mb-16 max-md:mb-12 max-md:text-3xl">
          Professional Journey
        </h2>

        <div className="space-y-20 max-md:space-y-16">
          {/* PWG Experience */}
          <div className="grid grid-cols-12 gap-6 items-center">
            <div className="col-span-5 max-md:col-span-12 pr-4 max-md:pr-0">
              <div className="max-w-xl">
                <h3 className="text-2xl font-semibold mb-2">
                  React / React Native Developer
                </h3>
                <p className="mb-4 text-base opacity-90">
                  Compute and Cultivate Ltd (PWG Windows & Doors)
                  <br />
                  Contract Position • 1.5 Years
                </p>
                <div>
                  <h4 className="text-lg font-semibold mb-3">
                    Key Achievements & Responsibilities
                  </h4>
                  <ul className="list-disc pl-5 space-y-2 text-sm">
                    <li>
                      Developed and deployed a React Native mobile application
                      for field engineers, improving site visit efficiency.
                    </li>
                    <li>
                      Implemented real-time calendar integration and advanced
                      form processing system using RESTful APIs
                    </li>
                    <li>
                      Collaborated in an agile environment with cross-functional
                      teams to gather requirements and iterate on features
                    </li>
                    <li>
                      Designed and integrated secure database connections for
                      sensitive customer data handling
                    </li>
                    <li>
                      Established CI/CD pipelines for streamlined deployment
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex gap-3 mt-4">
                <Button
                  href="https://www.timberwindows.com/"
                  external
                  ariaLabel="Visit PWG website"
                >
                  Visit Website
                </Button>
                <Button
                  href="/work/pwg"
                  ariaLabel="Learn more about PWG project"
                >
                  Learn More
                </Button>
              </div>
            </div>

            <div className="col-span-7 max-md:col-span-12 relative flex justify-center items-center">
              <Link href="/work/pwg">
                <div className="rounded-lg overflow-hidden shadow-xl max-w-[70%] mx-auto">
                  <video
                    title="PWG Mobile App Demo"
                    src="/videos/pwg_tablet.webm"
                    autoPlay
                    muted
                    loop
                    width={800}
                    height={1200}
                    className="w-full h-auto"
                  />
                </div>
              </Link>
            </div>
          </div>

          {/* Vocabo Experience */}
          <div className="grid grid-cols-12 gap-6 items-center">
            <div className="col-span-7 max-md:col-span-12 max-md:order-2 relative flex justify-center items-center">
              <Link href="/work/vocabo">
                <div className="w-full rounded-lg relative overflow-hidden shadow-xl">
                  <div className="absolute top-0 left-0 w-full bg-gray-100 dark:bg-gray-800 h-[1.9rem] rounded-t-md flex items-center px-4">
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 rounded-full bg-red-400"></div>
                      <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                      <div className="w-2 h-2 rounded-full bg-green-400"></div>
                    </div>
                  </div>
                  <video
                    title="Vocabo Chrome Extension Demo"
                    src="/videos/vocabo.mp4"
                    autoPlay
                    muted
                    loop
                    width={1280}
                    height={720}
                    className="h-auto w-full"
                    style={{ objectFit: "contain" }}
                    playsInline
                    preload="auto"
                  />
                </div>
              </Link>
            </div>

            <div className="col-span-5 max-md:col-span-12 max-md:order-1 pl-4 max-md:pl-0">
              <div className="max-w-xl">
                <h3 className="text-2xl font-semibold mb-2">
                  Frontend Developer
                </h3>
                <p className="mb-4 text-base opacity-90">
                  Vocabo - Language Learning Platform
                  <br />6 Months
                </p>
                <div>
                  <h4 className="text-lg font-semibold mb-3">
                    Technical Highlights
                  </h4>
                  <ul className="list-disc pl-5 space-y-2 text-sm">
                    <li>
                      Built a Chrome extension using React and modern JavaScript
                      practices for seamless language learning integration
                    </li>
                    <li>
                      Implemented complex state management and real-time
                      translation features using multiple language APIs
                    </li>
                    <li>
                      Developed a robust Express.js backend server to secure api
                      usage, data persistence and language tokenisation
                    </li>
                    <li>
                      Utilized Vite and Webpack for optimal bundle optimization
                      and performance improvements
                    </li>
                    <li>
                      Participated in daily stand-ups and sprint planning to
                      ensure project milestones were met
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex gap-3 mt-4">
                <Button
                  href="/work/vocabo"
                  ariaLabel="Learn more about Vocabo project"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>

          {/* Open Fern Experience */}
          <div className="grid grid-cols-12 gap-6 items-center">
            <div className="col-span-5 max-md:col-span-12 pr-4 max-md:pr-0">
              <div className="max-w-xl">
                <h3 className="text-2xl font-semibold mb-2">
                  Frontend Developer
                </h3>
                <p className="mb-4 text-base opacity-90">
                  Open Fern Studio
                  <br />
                  Contract Position • 2 Months
                </p>
                <div>
                  <h4 className="text-lg font-semibold mb-3">
                    Key Achievements & Responsibilities
                  </h4>
                  <ul className="list-disc pl-5 space-y-2 text-sm">
                    <li>
                      Developed a responsive business website for a social media
                      marketing company
                    </li>
                    <li>
                      Implemented modern design practices and animations to
                      create an engaging user experience
                    </li>
                    <li>
                      Built a contact form system with email integration for
                      client communications
                    </li>
                    <li>
                      Optimized website performance and SEO to improve search
                      engine visibility
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex gap-3 mt-4">
                <Button
                  href="https://www.openfern.studio/"
                  external
                  ariaLabel="Visit Open Fern Studio website"
                >
                  Visit Website
                </Button>
                <Button
                  href="/work/openfern"
                  ariaLabel="Learn more about Open Fern Studio project"
                >
                  Learn More
                </Button>
              </div>
            </div>

            <div className="col-span-7 max-md:col-span-12 relative flex justify-center items-center">
              <Link href="/work/openfern">
                <div className="w-full rounded-lg overflow-hidden shadow-xl">
                  <div className="bg-gray-100 dark:bg-gray-800 h-5 rounded-t-lg flex items-center px-4">
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 rounded-full bg-red-400"></div>
                      <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                      <div className="w-2 h-2 rounded-full bg-green-400"></div>
                    </div>
                  </div>
                  <Image
                    id="openfern"
                    alt="Open Fern Studio Website"
                    src="/images/work/openfern.png"
                    width={1102}
                    height={703}
                    className="w-full h-auto"
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WorkExperience;
