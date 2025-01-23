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
            Open Fern Studio - Videography & Social Media website
          </h1>
          <p className="text-lg mb-8">
            A modern website for a self-employed videographer and social media
            content creator, showcasing their work, services, and creative
            expertise. The site features a clean design that highlights their
            video content and social media management capabilities.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-semibold mb-4">
                  Project Overview
                </h2>
                <p>
                  Open Fern Studio's website serves as a professional portfolio
                  for a creative professional specializing in videography and
                  social media content creation. The site effectively showcases
                  their work through an engaging visual layout while providing
                  potential clients with detailed information about their
                  services and expertise in social media marketing and content
                  management.
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
                <li>Video portfolio showcase with optimized playback</li>
                <li>Social media content gallery</li>
                <li>Service packages and pricing information</li>
                <li>Client testimonials and case studies</li>
                <li>Integrated contact form for project inquiries</li>
                <li>Responsive design for all devices</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Technical Achievements
              </h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>Optimized video loading and streaming</li>
                <li>Smooth animations and transitions</li>
                <li>Social media feed integration</li>
                <li>Automated email notifications</li>
                <li>SEO optimization for local visibility</li>
                <li>Fast page load times with Next.js</li>
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
