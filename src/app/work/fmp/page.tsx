"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";

const FMP = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "/images/fmp/img1.jpg",
    "/images/fmp/img2.jpg",
    "/images/fmp/img3.jpg",
    "/images/fmp/img4.jpg",
    "/images/fmp/img5.jpg",
    "/images/fmp/img6.jpg",
    "/images/fmp/img7.jpg",
    "/images/fmp/img8.jpg",
    "/images/fmp/img9.jpg",
    "/images/fmp/img10.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <main className="min-h-screen pt-20 bg-theme-bg-light dark:bg-theme-bg-dark text-theme-text-light dark:text-theme-text-dark">
      <div className="container mx-auto px-4 pt-8">
        <h1 className="text-4xl font-bold mb-6 text-center font-ibmPlexMono italic">
          Celestial Object Tracker
        </h1>
        <p className="text-center text-gray-500 dark:text-gray-400 mb-6 -mt-4">
          University Final Major Project
        </p>

        <div className="flex justify-center gap-4 mb-8">
          <a
            href="/pdf/Angus_Blomley_Final_Major_Project_Report.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-150"
            aria-label="View Project Report PDF (opens in a new tab)"
          >
            <FontAwesomeIcon icon={faFilePdf} className="mr-2" />
            Project Report
          </a>
          <a
            href="https://github.com/AngusBlomley/Celestial-Object-Tracker"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-md shadow-sm text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-150"
            aria-label="View source code on GitHub (opens in a new tab)"
          >
            <FontAwesomeIcon icon={faGithub} className="mr-2" />
            GitHub
          </a>
        </div>

        <div className="mb-8 max-w-4xl mx-auto rounded-lg">
          <div className="relative w-full aspect-video">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                className="absolute inset-0 w-full h-full"
              >
                <Image
                  alt="FMP (Final Major Project) Image Carousel"
                  src={images[currentIndex]}
                  fill
                  style={{ objectFit: "contain" }}
                  className="shadow-lg rounded-lg"
                  priority
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Project Details */}
        <div className="max-w-4xl mx-auto space-y-8 font-karla">
          <section>
            <h2 className="text-2xl font-semibold mb-3 font-ibmPlexMono">
              Project Overview
            </h2>
            <p>
              My final major university project: an affordable and scalable
              electronic device designed to track celestial objects in
              real-time. It combines stepper motors for precise movement, an
              Arduino for low-level hardware control, a Raspberry Pi for
              processing and calculations, and a camera for capturing real-time
              celestial observations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 font-ibmPlexMono">
              Technical Overview
            </h2>
            <p className="mb-4">
              This complex project involved integrating hardware (Raspberry Pi,
              Arduino, sensors, motors) with software (Python) to perform
              real-time calculations and control physical movements based on
              astronomical data. It included 3D design and printing for the
              physical structure.
            </p>

            <h3 className="text-xl font-semibold mb-2">Architecture & Stack</h3>
            <ul className="list-disc list-inside space-y-1 mb-4">
              <li>
                <strong>Control Processing:</strong> Raspberry Pi
              </li>
              <li>
                <strong>Hardware Control:</strong> Arduino
              </li>
              <li>
                <strong>Software:</strong> Python (with libraries like Skyfield,
                OpenCV, NumPy, Pillow)
              </li>
              <li>
                <strong>Sensors:</strong> MPU6050 (IMU), GT-U7 (GPS)
              </li>
              <li>
                <strong>Actuators:</strong> Stepper Motors
              </li>
              <li>
                <strong>API Integration:</strong> Skyfield API (for celestial
                coordinates)
              </li>
              <li>
                <strong>UI:</strong> Tkinter GUI
              </li>
              <li>
                <strong>3D Design:</strong> Autodesk Fusion 360
              </li>
            </ul>

            <h3 className="text-xl font-semibold mb-2">Core Functionality</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>
                Accurate celestial object tracking using GPS, IMU, and time
                data.
              </li>
              <li>Real-time coordinate calculation using Skyfield API.</li>
              <li>
                Automated, precise control of stepper motors based on calculated
                coordinates.
              </li>
              <li>
                Interactive Tkinter GUI for selecting targets and monitoring
                status.
              </li>
              <li>Real-time image processing potential with OpenCV.</li>
            </ul>

            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-2">Technologies Used</h3>
              <div className="flex flex-wrap gap-4 items-center">
                <Image
                  src="/images/icons/python.webp"
                  alt="Python"
                  width={40}
                  height={40}
                  className="rounded-lg"
                  style={{ objectFit: "contain" }}
                />
                <Image
                  src="/images/icons/raspberrypi.webp"
                  alt="Raspberry Pi"
                  width={40}
                  height={40}
                  className="rounded-lg"
                  style={{ objectFit: "contain" }}
                />
                <Image
                  src="/images/icons/arduino.webp"
                  alt="Arduino"
                  width={40}
                  height={40}
                  className="rounded-lg"
                  style={{ objectFit: "contain" }}
                />
                <Image
                  src="/images/icons/fusion360.png"
                  alt="Fusion 360"
                  width={40}
                  height={40}
                  className="rounded-lg"
                  style={{ objectFit: "contain" }}
                />
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 font-ibmPlexMono">
              Development Insights
            </h2>
            <h3 className="text-xl font-semibold mb-2">
              Software & Libraries Used
            </h3>
            <pre className="p-4 mb-4 rounded-md bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 text-xs overflow-x-auto">
              <code>
                {`# Key Python Dependencies
certifi==2024.2.2
future==1.0.0
iso8601==2.1.0
jplephem==2.21
numpy==1.26.4
opencv-python==4.9.0.80
pillow==10.3.0
PyYAML==6.0.1
serial==0.0.97
sgp4==2.23
skyfield==1.48`}
              </code>
            </pre>
            <h3 className="text-xl font-semibold mb-2">
              Hardware Integration & 3D Design
            </h3>
            <p className="mb-4">
              The project involved significant hardware integration, interfacing
              sensors (IMU, GPS) and motors with the Arduino and Raspberry Pi. A
              custom 3D-printed frame, designed iteratively in Fusion 360,
              provided the necessary stability and mounting for the components.
            </p>
            <h3 className="text-xl font-semibold mb-2">
              Learning & Future Plans
            </h3>
            <p>
              This project was a major learning experience in hardware-software
              co-design, real-time systems, and applied mathematics/astronomy.
              Future plans include refactoring the control logic into C++ for
              improved performance and enhancing the user interface.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
};

export default FMP;
