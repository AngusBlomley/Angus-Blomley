/* eslint-disable react/no-unescaped-entities */
import HeaderGlobal from "@/components/globals/headerGlobal";
import Footer from "@/components/globals/footer";
import { WorkNavigation } from "@/components/work/WorkNavigation";
import Image from "next/image";
import { useDarkMode } from "@/contexts/darkModeContext";

const OpenFern = () => {
  const { isDarkMode } = useDarkMode();
  const backgroundColor = isDarkMode
    ? "var(--background-color-dark)"
    : "var(--background-color-light)";
  const color = isDarkMode
    ? "var(--foreground-color-dark)"
    : "var(--foreground-color-light)";

  return (
    <>
      <HeaderGlobal />
      <main className="min-h-screen pt-20" style={{ backgroundColor, color }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="space-y-8">
            <div className="text-center">
              <h1 className="text-4xl mt-16 font-bold mb-4">
                Open Fern Studio - Web Development Agency
              </h1>
              <p className="text-lg">
                A modern web development agency website showcasing services, portfolio, and expertise. Built with Next.js and featuring dynamic content management.
                <a
                  className="text-blue-500 hover:text-blue-700 px-2 py-1 rounded-md"
                  href="https://openfern.studio"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit the website
                </a>
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-semibold mb-4">
                    Project Overview
                  </h2>
                  <p>
                    Open Fern Studio represents a sophisticated web development agency platform that demonstrates expertise in modern web technologies and design principles. The project showcases a perfect blend of aesthetic appeal and technical excellence, featuring responsive design, smooth animations, and optimized performance.
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
                        <li>
                          Next.js with TypeScript for robust development
                        </li>
                        <li>Tailwind CSS for responsive design</li>
                        <li>Framer Motion for smooth animations</li>
                        <li>Dynamic routing and SEO optimization</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-2">
                        Development Features
                      </h3>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Responsive design across all devices</li>
                        <li>Performance optimization techniques</li>
                        <li>Modern UI/UX principles</li>
                        <li>Content management integration</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">
                    Development Practices
                  </h2>
                  <div className="flex justify-start">
                    <Image
                      src="/images/icons/next.webp"
                      alt="Next.js"
                      width={50}
                      height={50}
                      className="mx-2"
                      style={{
                        objectFit: "contain",
                        filter: isDarkMode ? "invert(1)" : "invert(0)",
                      }}
                    />
                    <Image
                      src="/images/icons/js.webp"
                      alt="JavaScript"
                      width={50}
                      height={50}
                      className="mx-2"
                    />
                    <Image
                      src="/images/icons/tailwind.webp"
                      alt="Tailwind CSS"
                      width={50}
                      height={50}
                      className="mx-2 py-2"
                    />
                    <Image
                      src="/images/icons/github.webp"
                      alt="GitHub"
                      width={50}
                      height={50}
                      className="mx-2"
                      style={{
                        objectFit: "contain",
                        filter: isDarkMode ? "invert(0)" : "invert(1)",
                      }}
                    />
                  </div>
                </section>
              </div>

              <div className="space-y-8">
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/images/work/openfern.png"
                    alt="Open Fern Studio"
                    width={500}
                    height={300}
                    className="w-full rounded-lg shadow-xl"
                  />
                </div>
                <section>
                  <h2 className="text-2xl font-semibold mb-4">
                    Key Features
                  </h2>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Modern and responsive design</li>
                    <li>Dynamic content management</li>
                    <li>Portfolio showcase with filtering</li>
                    <li>Team member profiles</li>
                    <li>Service descriptions and pricing</li>
                    <li>Contact form with validation</li>
                  </ul>
                </section>
              </div>
            </div>
          </div>

          <WorkNavigation currentPath="/work/openfern" />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default OpenFern;