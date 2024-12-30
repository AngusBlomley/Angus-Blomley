import React, { useEffect } from "react";
import HeaderGlobal from "@/components/globals/headerGlobal";
import Footer from "@/components/globals/footer";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { useDarkMode } from "@/contexts/darkModeContext";

const PWG = () => {
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
      once: false,
    });
  }, []);

  return (
    <>
      <HeaderGlobal />
      <div id="pwg" data-aos="fade-in" style={{ backgroundColor, color }}>
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl mt-16 font-bold mb-4">
            PWG Windows & Doors - Mobile Application
          </h1>
          <p className="text-lg mb-8">
            A comprehensive React Native mobile application developed for field
            engineers to streamline site visits and improve operational
            efficiency.
          </p>

          <div className="grid grid-cols-3 border-b border-opacity-10 border-gray-100 max-2xl:col-span-2 max-lg:grid-cols-1">
            <section className="pb-8 pt-8 pr-8 border-b border-opacity-10 border-gray-100 col-span-3 max-2xl:col-span-1">
              <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
              <p>
                As the lead React Native developer for PWG Windows & Doors, I
                developed a mobile application that revolutionized how field
                engineers conduct site visits and process customer data.
              </p>
            </section>

            <section className="h-full pt-8 pr-8 grid-cols-1 max-lg:row-start-2 border-b border-gray-100 border-opacity-10 max-2xl:pb-8">
              <h2 className="text-2xl font-semibold mb-4">Technology Stack</h2>
              <ul className="list-disc pl-5">
                <li>React Native</li>
                <li>TypeScript</li>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>MongoDB</li>
                <li>AWS Services</li>
              </ul>
            </section>

            <section className="border-l pt-8 pl-8 pb-8 border-opacity-10 border-gray-100 row-span-2 col-span-2 max-2xl:col-span-3 max-2xl:border-none max-2xl:px-0">
              <Image
                src="/images/index/pwg.png"
                alt="PWG Mobile App"
                width={640}
                height={1024}
                className="w-full rounded-lg shadow-xl"
              />
            </section>
          </div>

          <div className="grid grid-cols-2 gap-8 mt-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>Real-time calendar integration</li>
                <li>Advanced form processing system</li>
                <li>Secure customer data handling</li>
                <li>Offline functionality</li>
                <li>Automated reporting system</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Technical Achievements
              </h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>40% improvement in site visit efficiency</li>
                <li>Implemented CI/CD pipelines</li>
                <li>Reduced data entry errors by 60%</li>
                <li>99.9% app uptime achievement</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PWG;
