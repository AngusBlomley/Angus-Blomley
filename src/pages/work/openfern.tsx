import React, { useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { FaArrowLeft } from "react-icons/fa";
import { useDarkMode } from "@/contexts/darkModeContext";
import HeaderGlobal from "@/components/globals/headerGlobal";
import AOS from "aos";
import "aos/dist/aos.css";

function OpenFernStudio() {
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
        <Head>
          <title>Open Fern Studio | Angus Blomley</title>
          <meta
            name="description"
            content="Open Fern Studio - Social Media Marketing Website Development Project"
          />
        </Head>

        <div className="container mx-auto px-4 py-20">
          <Link
            href="/"
            className="inline-flex items-center space-x-2 mb-8 opacity-50 hover:opacity-100 duration-200"
          >
            <FaArrowLeft />
            <span>Back to Home</span>
          </Link>

          <article className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-4">Open Fern Studio</h1>
            <p className="text-xl mb-8 opacity-75">
              Social Media Marketing Website Development
            </p>

            <div className="mb-12">
              <a
                href="https://www.openfern.studio/"
                target="_blank"
                rel="noopener noreferrer"
                className="block duration-100 hover:brightness-75"
              >
                <Image
                  src="/images/work/openfern.png"
                  alt="Open Fern Studio Website"
                  width={1200}
                  height={675}
                  className="rounded-lg shadow-lg"
                />
              </a>
            </div>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Overview</h2>
              <p className="mb-4">
                Open Fern Studio is a social media marketing company that
                required a professional website to showcase their services and
                attract potential clients. The project involved creating a
                responsive, modern website that effectively communicates their
                brand identity and services.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Key Features</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Responsive design optimized for all devices</li>
                <li>Modern, clean user interface</li>
                <li>Interactive service showcase sections</li>
                <li>Integrated contact form system</li>
                <li>SEO optimization</li>
                <li>Performance optimized image loading</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Technologies Used</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>React.js</li>
                <li>Next.js</li>
                <li>Tailwind CSS</li>
                <li>TypeScript</li>
                <li>Vercel (Deployment)</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">
                Role & Responsibilities
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Frontend development</li>
                <li>Responsive design implementation</li>
                <li>Performance optimization</li>
                <li>SEO implementation</li>
                <li>Contact form integration</li>
                <li>Testing and debugging</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Outcome</h2>
              <p className="mb-4">
                The website successfully launched, providing Open Fern Studio
                with a professional online presence that effectively showcases
                their services. The responsive design ensures a seamless
                experience across all devices, while the optimized performance
                contributes to improved search engine rankings.
              </p>
            </section>

            <div className="mt-12 flex space-x-4">
              <a
                href="https://www.openfern.studio/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 border border-current rounded hover:bg-opacity-10 hover:bg-white transition-all duration-200"
              >
                Visit Website
              </a>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}

export default OpenFernStudio;
