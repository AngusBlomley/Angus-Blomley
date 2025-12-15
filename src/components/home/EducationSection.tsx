"use client";

import { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import Image from "next/image";
import Button from "@/components/globals/Button";

export function EducationSection() {
  const eduRef = useRef(null);
  const eduInView = useInView(eduRef, { once: true, margin: "100px" });

  const parentVariants: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.1,
      },
    },
  };

  const blockVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  return (
    <motion.section
      id="education"
      className="overflow-x-hidden text-neutral-800"
      ref={eduRef}
      variants={parentVariants}
      initial="hidden"
      animate={eduInView ? "show" : "hidden"}
    >
      <div className="py-32 max-md:py-20 bg-neutral-300">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="grid grid-cols-2 max-md:grid-cols-1 gap-y-16 gap-x-20 max-xl:gap-x-12 max-md:gap-y-12 items-center">
            <motion.div
              variants={blockVariants}
              className="mb-12 max-md:mb-0 rounded-lg flex flex-col justify-center min-h-[340px] items-end max-md:items-start"
            >
              <div className="w-full max-w-xl">
                <h3 className="text-2xl font-semibold mb-4">
                  Ravensbourne University London
                </h3>
                <p className="degree mb-6">
                  BSc (Hons) Broadcast Engineering - 2:1 <br />
                  September 2021 - April 2024
                </p>
                <div className="education-level mt-4">
                  <h4 className="text-xl mb-4 font-semibold">
                    Key Courses and Projects
                  </h4>
                  <ul className="course-list list-disc pl-5 mb-6 space-y-2">
                    <li>Software Development & Programming</li>
                    <li>Python & Data Structures</li>
                    <li>Low-Level Programming (Arduino)</li>
                    <li>Computer Architecture & Operating Systems</li>
                    <li>Algorithms & Computational Theory</li>
                    <li>Final Major Project</li>
                  </ul>
                  <p className="font-semibold mt-4 mb-6">
                    Total Degree Credits: 360
                  </p>
                  <div className="mt-8">
                    <Image
                      width={300}
                      height={150}
                      id="ravensbourne-light"
                      src="/images/index/ravensbourne-black.png"
                      alt="Ravensbourne University (Light Mode Logo)"
                      className="block"
                    />
                    <Image
                      width={300}
                      height={150}
                      id="ravensbourne-dark"
                      src="/images/index/ravensbourne-white.png"
                      alt="Ravensbourne University (Dark Mode Logo)"
                      className="hidden"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              variants={blockVariants}
              className="relative mb-12 flex items-center justify-center min-h-[340px] max-md:justify-start"
            >
              <Image
                id="graduation"
                alt="graduation"
                src="/images/index/graduation.svg"
                width={500}
                height={500}
                className="max-w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </div>
      <div className="w-full bg-neutral-200 py-32 max-md:py-20">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="grid grid-cols-2 max-md:grid-cols-1 gap-y-16 gap-x-20 max-xl:gap-x-12 max-md:gap-y-12 items-center">
            <motion.div
              variants={blockVariants}
              className="rounded-lg flex flex-col justify-center min-h-[340px]"
            >
              <div className="w-full max-w-xl">
                <h3 className="text-2xl font-semibold mb-4">
                  Belfast Metropolitan
                </h3>
                <p className="diploma mb-6">
                  IT Extended Diploma Level 3<br />
                  September 2015 - June 2018
                </p>
                <div className="education-level mt-4">
                  <h4 className="text-xl mb-4 font-semibold">Key Courses</h4>
                  <ul className="course-list list-disc pl-5 mb-6 space-y-2">
                    <li>Communication and Employability Skills</li>
                    <li>Information Systems</li>
                    <li>Software Design and Development</li>
                    <li>Website Production</li>
                    <li>Computer Systems</li>
                  </ul>
                  <div className="mt-8">
                    <Image
                      width={150}
                      height={150}
                      id="belfastmet"
                      src="/images/index/belfastmet.png"
                      alt="Belfast Metropolitan"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              variants={blockVariants}
              className="relative flex items-center justify-end min-h-[340px]"
            >
              <Image
                id="computer"
                alt="Computer"
                src="/images/index/computer.svg"
                width={500}
                height={500}
                className="max-w-full h-auto -rotate-45"
              />
            </motion.div>
          </div>
        </div>
      </div>
      <div className="py-32 max-md:py-20 bg-neutral-300">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="grid grid-cols-2 max-md:grid-cols-1 gap-y-16 gap-x-20 max-xl:gap-x-12 max-md:gap-y-12 items-center">
            <motion.div
              variants={blockVariants}
              className="mb-12 rounded-lg flex flex-col justify-center min-h-[340px] items-end max-md:items-start"
            >
              <div className="w-full max-w-xl">
                <h3 className="text-2xl font-semibold mb-4">Codecademy</h3>
                <p className="certificate mb-6">
                  Front-End Development Course
                  <br />
                  Completed: May 2024
                </p>
                <div className="education-level mt-4">
                  <h4 className="text-xl mb-4 font-semibold">
                    Key Skills and Projects
                  </h4>
                  <ul className="course-list list-disc pl-5 mb-6 space-y-2">
                    <li>HTML, CSS, and JavaScript</li>
                    <li>Responsive Web Design</li>
                    <li>React and Redux</li>
                    <li>APIs and Asynchronous Programming</li>
                    <li>Portfolio Projects</li>
                    <li>Linear Data Structures</li>
                    <li>Complex Data Structures</li>
                    <li>Algorithms</li>
                  </ul>
                  <div className="mt-8">
                    <Image
                      width={220}
                      height={150}
                      id="codecademy"
                      src="/images/index/codecademy.png"
                      alt="Codecademy"
                    />
                    <Button
                      onClick={() =>
                        window.open("/pdf/certificate.pdf", "_blank")
                      }
                      ariaLabel="View my Full-Stack Developer certificate"
                      className="mt-6 !border-gray-400 !text-gray-800 hover:!bg-gray-200"
                    >
                      See certificate
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              variants={blockVariants}
              className="relative mb-12 flex items-center justify-start min-h-[340px] max-md:justify-center"
            >
              <Image
                id="networking"
                alt="networking graphic"
                src="/images/index/networking.svg"
                width={500}
                height={500}
                className="max-w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
