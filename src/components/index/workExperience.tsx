import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useDarkMode } from "@/contexts/darkModeContext";
import Image from "next/image";
import Link from "next/link";

function WorkExperience() {
  const { isDarkMode } = useDarkMode();
  const backgroundColor = isDarkMode
    ? "var(--background-color-dark)"
    : "var(--background-color-light)";
  const color = isDarkMode
    ? "var(--foreground-color-dark)"
    : "var(--foreground-color-light)";

  useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: 200,
      once: true,
    });
  }, []);

  return (
    <section
      id="experience"
      style={{ backgroundColor, color }}
      className="py-20 max-md:py-12 duration-200 overflow-hidden"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <h2
          className="text-4xl font-hiraKakuPro text-center mb-24 max-md:mb-16"
          data-aos="fade-in"
        >
          Professional Journey
        </h2>
        <div className="grid grid-cols-2 max-md:grid-cols-1 gap-y-32 max-md:gap-y-16 items-center">
          <div className="pr-12 max-md:pr-0" data-aos="fade-right">
            <div className="max-w-xl">
              <h3 className="text-3xl font-semibold mb-3">
                React Native Developer
              </h3>
              <p className="mb-6 text-lg opacity-90">
                Compute and Cultivate Ltd (PWG Windows & Doors)
                <br />
                Contract Position • 1.5 Years
              </p>
              <div>
                <h4 className="text-xl font-semibold mb-4">
                  Key Achievements & Responsibilities
                </h4>
                <ul className="list-disc pl-5 space-y-2 text-base">
                  <li>
                    Developed and deployed a React Native mobile application for
                    field engineers, improving site visit efficiency by 40%
                  </li>
                  <li>
                    Implemented real-time calendar integration and advanced form
                    processing system using RESTful APIs
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
                    Established CI/CD pipelines for streamlined deployment and
                    testing processes
                  </li>
                </ul>
              </div>
            </div>
            <Link
              href="/work/pwg"
              className="inline-block mt-4 px-6 py-2 border border-current rounded hover:bg-opacity-10 hover:bg-white transition-all duration-200"
            >
              Learn More
            </Link>
          </div>

          <div
            className="relative flex justify-center items-center"
            data-aos="fade-left"
          >
            <Image
              id="coding"
              alt="coding"
              src="/images/index/pwg.png"
              width={640}
              height={1024}
              className="max-w-[90%] h-auto rounded-lg shadow-xl border border-gray-100"
            />
          </div>

          <div
            className="relative flex justify-center items-center order-2 max-md:order-3"
            data-aos="fade-right"
          >
            <Image
              id="vocabo"
              alt="Vocabo Chrome Extension"
              src="/images/index/vocabo.png"
              width={1102}
              height={703}
              className="max-w-[100%] h-auto rounded-lg shadow-xl border border-gray-100"
            />
          </div>

          <div
            className="pl-12 max-md:pl-0 order-3 max-md:order-2"
            data-aos="fade-left"
          >
            <div className="max-w-xl">
              <h3 className="text-3xl font-semibold mb-3">
                Frontend Developer
              </h3>
              <p className="mb-6 text-lg opacity-90">
                Vocabo - Language Learning Platform
                <br />6 Months
              </p>
              <div>
                <h4 className="text-xl font-semibold mb-4">
                  Technical Highlights
                </h4>
                <ul className="list-disc pl-5 space-y-2 text-base">
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
                    ensure efficient feature delivery
                  </li>
                </ul>
              </div>
            </div>
            <Link
              href="/work/vocabo"
              className="inline-block mt-4 px-6 py-2 border border-current rounded hover:bg-opacity-10 hover:bg-white transition-all duration-200"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WorkExperience;