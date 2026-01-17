"use client";

import { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import {
  ascii,
  workLinksData,
  projectLinksData,
  profileLinksData,
} from "../constants";
import Button from "@/components/common/Button";
import { EducationSection } from "@/components/home/EducationSection";
import { ContactSection } from "@/components/home/ContactSection";
import { BrowserWindowHeader } from "@/components/common/BrowserWindowHeader";
import { useScrollToTop } from "@/hooks/useScrollToTop";
import { useAsciiAnimation } from "@/hooks/useAsciiAnimation";
import { calculateDuration } from "@/utils/dateUtils";

function HomePage() {
  // Custom hooks
  const { showScrollTop, scrollToTop } = useScrollToTop();
  const displayedText = useAsciiAnimation(ascii);

  // Calculate experience durations
  const pwgDuration = calculateDuration(new Date(2025, 0, 1)); // June 2025

  // Animation refs and variants
  const expRef = useRef(null);
  const expInView = useInView(expRef, { once: true, margin: "-100px" });

  const parentVariants: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariantsLeft: Variants = {
    hidden: { opacity: 0, x: -40 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7 },
    },
  };

  const cardVariantsRight: Variants = {
    hidden: { opacity: 0, x: 40 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7 },
    },
  };

  return (
    <>
      <section
        className="section flex lg:mt-12 justify-center lg:items-center w-full lg:h-screen"
        role="region"
        aria-label="Introduction"
      >
        <main className="max-lg:mt-20 max-lg:w-screen max-sm:w-full max-lg:px-4">
          <article className="grid grid-cols-2 max-md:grid-cols-1">
            <div className="max-md:mx-auto max-md:w-96 max-sm:w-72">
              <h1 className="font-ibmPlexMono italic mb-2 text-xl md:text-2xl">
                Angus Blomley
              </h1>
              <h2 className="w-full mb-4 text-lg md:text-lg opacity-80">
                React / React Native Developer
              </h2>

              <div id="links" className="grid grid-cols-1 mb-20">
                <h3 className="font-ibmPlexMono mb-2">Work:</h3>
                {workLinksData.map((link) => (
                  <Link
                    key={link.text}
                    href={link.href}
                    className="text-[0.9em] p-1 px-2 rounded-md -ml-2 w-fit hover:bg-white/10 dark:hover:bg-white/20"
                    aria-label={link.ariaLabel}
                  >
                    - {link.text}
                  </Link>
                ))}

                <h3 className="font-ibmPlexMono mt-3 mb-1">Projects:</h3>
                {projectLinksData.map((link) => (
                  <Link
                    key={link.text}
                    href={link.href}
                    className="text-[0.9em] p-1 px-2 rounded-md -ml-2 w-fit hover:bg-white/10 dark:hover:bg-white/20"
                    aria-label={link.ariaLabel}
                  >
                    - {link.text}
                  </Link>
                ))}

                <h3 className="font-ibmPlexMono mt-3 mb-1">Profiles:</h3>
                {profileLinksData.map((link) =>
                  link.actionId === "resume" ? (
                    <button
                      key={link.text}
                      onClick={() =>
                        window.open("/pdf/Angus-Blomley.pdf", "_blank")
                      }
                      className="text-[0.9em] p-1 px-2 rounded-md -ml-2 w-fit hover:bg-white/10 dark:hover:bg-white/20 text-left"
                      aria-label={link.ariaLabel}
                    >
                      - {link.text}
                    </button>
                  ) : (
                    <a
                      key={link.text}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[0.9em] p-1 px-2 rounded-md -ml-2 w-fit hover:bg-white/10 dark:hover:bg-white/20"
                      aria-label={link.ariaLabel}
                    >
                      - {link.text}
                    </a>
                  )
                )}
              </div>
            </div>
            <div className="mx-auto max-lg:mt-5 max-lg:mb-5 max-md:row-start-2 overflow-hidden">
              <pre
                id="text"
                className="whitespace-pre font-mono text-[10px] leading-[10px] tracking-normal transform-none w-[550px] h-[500px] max-xl:text-[8px] max-xl:leading-[8px] max-xl:w-[480px] max-xl:h-[400px] max-lg:w-[420px] max-lg:h-[400px] max-sm:w-full max-sm:h-[300px] max-lg:text-[7px] max-lg:leading-[7px] max-sm:leading-[5px] max-sm:text-[5px]"
                aria-hidden="true"
              >
                <p className="text-wrap bg-[#121212] text-white">
                  {displayedText}
                </p>
              </pre>
            </div>
          </article>
        </main>
      </section>

      <section
        id="experience"
        className="py-32 max-md:py-12 overflow-hidden bg-theme-bg-light dark:bg-theme-bg-dark text-theme-text-light dark:text-theme-text-dark"
      >
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <motion.div
            ref={expRef}
            variants={parentVariants}
            initial="hidden"
            animate={expInView ? "show" : "hidden"}
            className="space-y-32 max-md:space-y-16"
          >
            <motion.div
              variants={cardVariantsLeft}
              className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center"
            >
              <div className="w-full lg:w-7/12">
                <Link href="/work/pwg">
                  <div className="w-full rounded-lg overflow-hidden shadow-xl hover:brightness-[0.8] transition">
                    <BrowserWindowHeader />
                    <video
                      title="PWG Mobile App Demo"
                      src="/videos/pwg_web.mp4"
                      autoPlay
                      muted
                      loop
                      width={1280}
                      height={720}
                      className="w-full rounded-b-lg shadow-xl"
                      playsInline
                      preload="metadata"
                    />
                  </div>
                </Link>
              </div>
              <div className="w-full lg:w-5/12 lg:pl-4 max-w-xl mt-8 lg:mt-0">
                <h3 className="text-2xl font-semibold mb-2">
                  React / React Native Developer
                </h3>
                <p className="mb-4 text-base opacity-90">
                  Compute and Cultivate Ltd (PWG Windows & Doors)
                  <br />
                  Contract Position • {pwgDuration}
                </p>
                <p className="text-base">
                  Developed a key React Native mobile application for field
                  engineers, significantly improving site visit efficiency and
                  data management.
                </p>
                <div className="flex gap-3 mt-4">
                  <Button
                    href="/work/pwg"
                    ariaLabel="See more about PWG project"
                  >
                    See More
                  </Button>
                </div>
              </div>
            </motion.div>
            <motion.div
              variants={cardVariantsRight}
              className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12"
            >
              <div className="w-full lg:w-5/12 order-2 lg:order-1">
                <h3 className="text-2xl font-semibold mb-2">
                  Front End Developer
                </h3>
                <p className="mb-4 text-base opacity-90">
                  Vocabo - Language Learning Platform
                  <br />
                  1.5 years active development • Maintained as needed
                </p>
                <p className="text-base">
                  Built a chromium browser extension for passive vocabulary
                  learning. Uses a monorepo turbo build configuration with vite.
                  Handles browser specific enviroments including content
                  scripts, background scripts (service workers), a google
                  engine/express backend for api endpoints.
                </p>
                <div className="flex gap-3 mt-4">
                  <Button
                    href="/work/vocabo"
                    ariaLabel="See more about Vocabo project"
                  >
                    See More
                  </Button>
                </div>
              </div>
              <div className="w-full lg:w-7/12 flex justify-center lg:justify-end order-1 lg:order-2">
                <Link href="/work/vocabo" className="w-full max-w-4xl">
                  <div className="rounded-lg overflow-hidden shadow-lg relative hover:brightness-[0.8] transition">
                    <BrowserWindowHeader />
                    <div className="relative aspect-video overflow-hidden">
                      <video
                        title="Vocabo Chrome Extension Demo"
                        src="/videos/vocabo.mp4"
                        autoPlay
                        muted
                        loop
                        width={1280}
                        height={720}
                        className="h-auto rounded-b-lg"
                        style={{
                          objectFit: "cover",
                          display: "block",
                          position: "relative",
                          top: "-12px",
                          height: "calc(100% + 29px - 0px)",
                          width: "100%",
                        }}
                        playsInline
                        preload="metadata"
                      />
                    </div>
                  </div>
                </Link>
              </div>
            </motion.div>
             <motion.div
              variants={cardVariantsLeft}
              className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center"
            >
              <div className="w-full lg:w-7/12">
                <Link href="/work/openfern">
                  <div className="w-full rounded-lg overflow-hidden shadow-xl hover:brightness-[0.8] transition">
                    <BrowserWindowHeader />
                    <div className="relative">
                      <Image
                        id="openfern"
                        alt="Open Fern Studio Website"
                        src="/images/work/openfern.png"
                        width={1102}
                        height={703}
                        className="w-full h-auto rounded-b-lg"
                      />
                    </div>
                  </div>
                </Link>
              </div>
              <div className="w-full lg:w-5/12 lg:pl-4 max-w-xl mt-8 lg:mt-0">
                <h3 className="text-2xl font-semibold mb-2">
                  Front End Developer
                </h3>
                <p className="mb-4 text-base opacity-90">
                  Open Fern Studio
                  <br />
                  Contract Position • 2 Months (Maintained Occasionally)
                </p>
                <p className="text-base">
                  Created a responsive and SEO-optimized business website with
                  modern design and animations for a social media marketing
                  agency.
                </p>
                <div className="flex gap-3 mt-4">
                  <Button
                    href="/work/openfern"
                    ariaLabel="See more about Open Fern Studio project"
                  >
                    See More
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <EducationSection />

      <ContactSection />

      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 p-3 rounded-full bg-theme-bg-light dark:bg-white/10 text-theme-text-light dark:text-theme-text-dark hover:bg-gray-200 dark:hover:bg-white/20 shadow-lg transition-all scale-90 z-50
          ${
            showScrollTop
              ? "opacity-70 translate-y-0"
              : "opacity-0 translate-y-20 pointer-events-none"
          }
        `}
        aria-label="Scroll to top"
      >
        <FaArrowUp size={16} aria-hidden="true" />
      </button>
    </>
  );
}

export default HomePage;
