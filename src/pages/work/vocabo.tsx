import HeaderGlobal from "@/components/globals/headerGlobal";
import Footer from "@/components/globals/footer";
import { WorkNavigation } from "@/components/work/WorkNavigation";
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

  return (
    <>
      <HeaderGlobal />
      <main className="min-h-screen pt-20" style={{ backgroundColor, color }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="space-y-8">
            <div className="text-center">
              <h1 className="text-4xl mt-16 font-bold mb-4">
                Vocabo - Chrome Extension Development
              </h1>
              <p className="text-lg">
                A sophisticated Chrome extension for language learners,
                featuring real-time translation, vocabulary management, and
                spaced repetition learning.
                <a
                  href="https://chromewebstore.google.com/detail/vocabo/jkidhonedioaomijgdccandhiffoiheb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-600"
                >
                  Available on Chrome Store
                </a>
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-semibold mb-4">
                    Technical Overview
                  </h2>
                  <p className="text-lg">
                    Vocabo demonstrates expertise in Chrome extension
                    development and full-stack integration. The project
                    showcases advanced JavaScript capabilities, including
                    sophisticated DOM manipulation for real-time text scanning
                    and translation. Using DOM mutation observers and regex
                    pattern matching, it dynamically identifies and translates
                    target words by comparing page content against the user&apos;s
                    word bank. Built with modern web technologies and following
                    best practices in extension development.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">
                    Technical Implementation
                  </h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-medium mb-2">
                        Extension Architecture
                      </h3>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>React for component-based UI development</li>
                        <li>React injection for dynamic component rendering</li>
                        <li>Chrome Extension Manifest V3 compliance</li>
                        <li>Content scripts for webpage integration</li>
                        <li>Vite for webpacking and bundling</li>
                        <li>
                          IIFE (Immediately Invoked Function Expression) for
                          library or plugin integration
                        </li>
                        <li>pnpm for package management and turbo for HMR</li>
                        <li>Multi-package build setup</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-2">
                        Backend Services
                      </h3>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Node.js and Express for API endpoints</li>
                        <li>Chrome Local Storage for vocabulary storage</li>
                        <li>RESTful API design principles</li>
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
                      src="/images/icons/react.webp"
                      alt="React"
                      width={50}
                      height={50}
                      className="mx-2"
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
                      alt="tailwind"
                      width={50}
                      height={50}
                      className="m-2"
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

                <section>
                  <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Real-time text translation</li>
                    <li>Vocabulary management system</li>
                    <li>Spaced repetition learning</li>
                    <li>Cross-browser synchronization</li>
                    <li>Offline functionality</li>
                    <li>User progress analytics</li>
                  </ul>
                </section>
              </div>

              <div className="space-y-8">
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <video
                    src="/videos/vocabo.mp4"
                    autoPlay
                    muted
                    loop
                    className="w-full rounded-lg shadow-xl"
                  />
                </div>

                <Image
                  src="/images/index/vocabo.png"
                  alt="Vocabo Extension Interface"
                  width={800}
                  height={600}
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>

          <WorkNavigation currentPath="/work/vocabo" />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Vocabo;
