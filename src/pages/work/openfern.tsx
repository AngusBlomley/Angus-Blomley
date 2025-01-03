/* eslint-disable react/no-unescaped-entities */
import React, { useEffect } from "react";
import HeaderGlobal from "@/components/globals/headerGlobal";
import Footer from "@/components/globals/footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useDarkMode } from "@/contexts/darkModeContext";
import { WorkNavigation } from "@/components/work/WorkNavigation";
import Image from "next/image";

const OpenFern = () => {
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
      <div id="openfern" data-aos="fade-in" style={{ backgroundColor, color }}>
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl mt-16 font-bold mb-4">
            Open Fern Studio - Web Development Agency
          </h1>
          <p className="text-lg mb-8">
            A modern web development agency website built with Next.js,
            featuring a sleek design and seamless user experience. The site
            showcases the agency's services, portfolio, and team while
            incorporating modern web development practices.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-semibold mb-4">
                  Project Overview
                </h2>
                <p>
                  Open Fern Studio's website serves as both a portfolio and a
                  client acquisition platform. The site features a modern,
                  responsive design with smooth animations, dynamic content
                  loading, and optimized performance. It effectively
                  communicates the agency's expertise while providing an
                  engaging user experience.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">
                  Technology Stack
                </h2>
                <ul className="list-disc pl-5">
                  <li>Next.js</li>
                  <li>TypeScript</li>
                  <li>Tailwind CSS</li>
                  <li>Framer Motion</li>
                  <li>Vercel</li>
                  <li>SendGrid API</li>
                </ul>
              </section>
            </div>

            <div>
              <Image
                title="Open Fern Studio Website Demo"
                src="/images/work/openfern.png"
                width={1280}
                height={720}
                alt="Open Fern Studio Website Demo"
                className="rounded-lg shadow-xl w-full"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>Responsive, mobile-first design</li>
                <li>Dynamic portfolio showcase</li>
                <li>Smooth page transitions and animations</li>
                <li>Integrated contact form with email notifications</li>
                <li>SEO optimization</li>
                <li>Performance optimization with Next.js</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Technical Achievements
              </h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>Achieved 95+ Lighthouse scores across all metrics</li>
                <li>Implemented SSR and ISR for optimal performance</li>
                <li>Created reusable animation components</li>
                <li>Built a custom CMS integration</li>
                <li>Optimized image loading and caching</li>
                <li>Implemented automated deployment pipeline</li>
              </ul>
            </section>
          </div>

          <WorkNavigation currentPath="/work/openfern" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default OpenFern;
