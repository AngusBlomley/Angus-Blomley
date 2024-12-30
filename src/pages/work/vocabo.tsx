import React, { useEffect } from "react";
import HeaderGlobal from "@/components/globals/headerGlobal";
import Footer from "@/components/globals/footer";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { useDarkMode } from "@/contexts/darkModeContext";

const Vocabo = () => {
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
      <div id="vocabo" data-aos="fade-in" style={{ backgroundColor, color }}>
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl mt-16 font-bold mb-4">
            Vocabo - Language Learning Platform
          </h1>
          <p className="text-lg mb-8">
            A Chrome extension designed to enhance language learning through
            seamless integration with web browsing.
          </p>

          <div className="grid grid-cols-3 border-b border-opacity-10 border-gray-100 max-2xl:col-span-2 max-lg:grid-cols-1">
            <section className="pb-8 pt-8 pr-8 border-b border-opacity-10 border-gray-100 col-span-3 max-2xl:col-span-1">
              <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
              <p>
                Vocabo is an innovative Chrome extension that helps users learn
                new languages while browsing the web. The extension provides
                real-time translations and vocabulary tracking.
              </p>
            </section>

            <section className="h-full pt-8 pr-8 grid-cols-1 max-lg:row-start-2 border-b border-gray-100 border-opacity-10 max-2xl:pb-8">
              <h2 className="text-2xl font-semibold mb-4">Technology Stack</h2>
              <ul className="list-disc pl-5">
                <li>React</li>
                <li>Express.js</li>
                <li>Node.js</li>
                <li>Chrome Extension API</li>
                <li>Translation APIs</li>
                <li>Webpack</li>
              </ul>
            </section>

            <section className="border-l pt-8 pl-8 pb-8 border-opacity-10 border-gray-100 row-span-2 col-span-2 max-2xl:col-span-3 max-2xl:border-none max-2xl:px-0">
              <Image
                src="/images/index/vocabo.png"
                alt="Vocabo Chrome Extension"
                width={1102}
                height={703}
                className="w-full rounded-lg shadow-xl"
              />
            </section>
          </div>

          <div className="grid grid-cols-2 gap-8 mt-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>Real-time translation</li>
                <li>Vocabulary tracking</li>
                <li>Progress monitoring</li>
                <li>Multiple language support</li>
                <li>Custom learning paths</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Development Process
              </h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>Agile methodology</li>
                <li>Regular sprint planning</li>
                <li>Continuous integration</li>
                <li>User feedback integration</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Vocabo;
