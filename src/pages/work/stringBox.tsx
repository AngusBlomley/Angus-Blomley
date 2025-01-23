import React, { useEffect } from "react";
import HeaderGlobal from "@/components/globals/headerGlobal";
import Footer from "@/components/globals/footer";
import { WorkNavigation } from "@/components/work/WorkNavigation";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { useDarkMode } from "@/contexts/darkModeContext";

const StringBox = () => {
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
      <main className="min-h-screen pt-20" style={{ backgroundColor, color }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="space-y-8" data-aos="fade-up">
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-4">
                Re-StringBox - Restringing and Ecommerce Website
              </h1>
              <p className="text-lg max-w-3xl mx-auto">
                A modern ecommerce platform for racquet restringing services,
                built with Next.js and a robust tech stack.{" "}
                <a
                  href="https://string-box.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-600"
                >
                  Visit the website
                </a>{" "}
                or{" "}
                <a
                  href="https://github.com/AngusBlomley/string-box"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-600"
                >
                  view on GitHub
                </a>
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-semibold mb-4">
                    Project Overview
                  </h2>
                  <p className="text-lg">
                    Re-StringBox is a comprehensive ecommerce solution designed
                    for racquet sports professionals. It enables users to book
                    restringing services, purchase equipment, and manage their
                    orders seamlessly. Built with scalability and performance in
                    mind, it features a modern tech stack and intuitive user
                    interface.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">
                    Technical Implementation
                  </h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-medium mb-2">
                        Frontend Architecture
                      </h3>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Next.js for server-side rendering and routing</li>
                        <li>Redux Toolkit for centralized state management</li>
                        <li>Tailwind CSS for responsive design</li>
                        <li>Stripe Elements for secure payment processing</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-2">
                        Backend Services
                      </h3>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>MongoDB with Mongoose for data persistence</li>
                        <li>NextAuth.js for secure authentication</li>
                        <li>RESTful API endpoints for order management</li>
                        <li>Nodemailer for automated notifications</li>
                      </ul>
                    </div>
                  </div>
                </section>
              </div>

              <div className="space-y-8">
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <video
                    src="/videos/stringBoxWeb.mp4"
                    autoPlay
                    muted
                    loop
                    className="w-full"
                  />
                </div>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">
                    Development Practices
                  </h2>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    <Image
                      src="/images/icons/next.webp"
                      alt="Next.js"
                      width={50}
                      height={50}
                      className="mx-auto"
                    />
                    <Image
                      src="/images/icons/js.webp"
                      alt="JavaScript"
                      width={50}
                      height={50}
                      className="mx-auto"
                    />
                    <Image
                      src="/images/icons/mongodb.webp"
                      alt="MongoDB"
                      width={50}
                      height={50}
                      className="mx-auto"
                    />
                    <Image
                      src="/images/icons/tailwind.webp"
                      alt="Tailwind CSS"
                      width={50}
                      height={50}
                      className="mx-auto"
                    />
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Secure user authentication and authorization</li>
                    <li>Integrated payment processing with Stripe</li>
                    <li>Real-time order tracking and management</li>
                    <li>Responsive design for all devices</li>
                    <li>Admin dashboard for business operations</li>
                    <li>Automated email notifications</li>
                  </ul>
                </section>
              </div>
            </div>

            <section className="mt-12">
              <h2 className="text-2xl font-semibold mb-4">
                Package Information
              </h2>
              <div className="bg-opacity-5 bg-white dark:bg-opacity-5 dark:bg-black rounded-lg p-6">
                <pre className="overflow-x-auto">
                  <code>
                    {`{
  "name": "string-box",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "@reduxjs/toolkit": "^2.2.3",
    "@stripe/react-stripe-js": "^2.7.1",
    "@stripe/stripe-js": "^3.4.0",
    "autoprefixer": "^10.4.19",
    "axios": "^1.6.8",
    "bcryptjs": "^2.4.3",
    "cors": "^2.8.5",
    "dotenv": "^16.4.5",
    "googleapis": "^137.1.0",
    "jsonwebtoken": "^9.0.2",
    "mongodb": "^6.6.1",
    "mongoose": "^8.3.4",
    "next": "^14.2.3",
    "next-auth": "^4.24.7",
    "nodemailer": "^6.9.13",
    "pg": "^8.11.5",
    "react": "^18",
    "react-dom": "^18",
    "react-redux": "^9.1.1",
    "react-responsive": "^10.0.0",
    "redux": "^5.0.1",
    "redux-thunk": "^3.1.0",
    "sharp": "^0.33.3",
    "stripe": "^15.5.0",
    "react-recaptcha-v3": "^1.9.1"
  },
  "devDependencies": {
    "eslint": "^8",
    "eslint-config-next": "14.2.3",
    "postcss": "^8.4.38",
    "tailwindcss": "^3.4.3"
  }
}`}
                  </code>
                </pre>
              </div>
            </section>
          </div>

          <WorkNavigation currentPath="/work/stringBox" />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default StringBox;
