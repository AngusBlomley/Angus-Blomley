import React, { useEffect } from "react";
import HeaderGlobal from "@/components/globals/headerGlobal";
import Footer from "@/components/globals/footer";
import { WorkNavigation } from "@/components/work/WorkNavigation";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { useDarkMode } from "@/contexts/darkModeContext";
import { useLanguage } from "@/contexts/language";

const Vocabo = () => {
  const { isDarkMode } = useDarkMode();
  const { language } = useLanguage();
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
                {language === "en"
                  ? "Vocabo - Chrome Extension Development"
                  : "Vocabo - Chrome拡張機能開発"}
              </h1>
              <p className="text-lg max-w-3xl mx-auto">
                {language === "en"
                  ? "A sophisticated Chrome extension for language learners, featuring real-time translation, vocabulary management, and spaced repetition learning. "
                  : "リアルタイム翻訳、語彙管理、間隔反復学習を特徴とする、語学学習者のための高度なChrome拡張機能。"}
                <a
                  href="https://chromewebstore.google.com/detail/vocabo/jkidhonedioaomijgdccandhiffoiheb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-600"
                >
                  {language === "en"
                    ? "Available on Chrome Store"
                    : "Chrome ストアで利用可能"}
                </a>
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-semibold mb-4">
                    {language === "en" ? "Technical Overview" : "技術概要"}
                  </h2>
                  <p className="text-lg">
                    {language === "en"
                      ? "Vocabo demonstrates expertise in Chrome extension development and full-stack integration. The project showcases advanced JavaScript capabilities, real-time data processing, and seamless integration with browser APIs. Built with modern web technologies and following best practices in extension development."
                      : "VocaboはChrome拡張機能開発とフルスタック統合における専門知識を実証します。このプロジェクトは、高度なJavaScript機能、リアルタイムデータ処理、ブラウザAPIとのシームレスな統合を特徴としています。最新のWeb技術を使用し、拡張機能開発のベストプラクティスに従って構築されています。"}
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">
                    {language === "en"
                      ? "Technical Implementation"
                      : "技術実装"}
                  </h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-medium mb-2">
                        {language === "en"
                          ? "Extension Architecture"
                          : "拡張機能アーキテクチャ"}
                      </h3>
                      <ul className="list-disc pl-5 space-y-1">
                        {language === "en" ? (
                          <>
                            <li>React for component-based UI development</li>
                            <li>Chrome Extension Manifest V3 compliance</li>
                            <li>Background service workers for processing</li>
                            <li>Content scripts for webpage integration</li>
                          </>
                        ) : (
                          <>
                            <li>コンポーネントベースのUI開発のためのReact</li>
                            <li>Chrome Extension Manifest V3への準拠</li>
                            <li>
                              処理のためのバックグラウンドサービスワーカー
                            </li>
                            <li>
                              ウェブページ統合のためのコンテンツスクリプト
                            </li>
                          </>
                        )}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-2">
                        {language === "en"
                          ? "Backend Services"
                          : "バックエンドサービス"}
                      </h3>
                      <ul className="list-disc pl-5 space-y-1">
                        {language === "en" ? (
                          <>
                            <li>Node.js and Express for API endpoints</li>
                            <li>MongoDB for vocabulary storage</li>
                            <li>JWT authentication for secure access</li>
                            <li>RESTful API design principles</li>
                          </>
                        ) : (
                          <>
                            <li>APIエンドポイントのためのNode.jsとExpress</li>
                            <li>語彙ストレージのためのMongoDB</li>
                            <li>セキュアなアクセスのためのJWT認証</li>
                            <li>RESTful APIの設計原則</li>
                          </>
                        )}
                      </ul>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">
                    {language === "en"
                      ? "Development Practices"
                      : "開発プラクティス"}
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
                      src="/images/icons/mongodb.webp"
                      alt="MongoDB"
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
                  <h2 className="text-2xl font-semibold mb-4">
                    {language === "en" ? "Key Features" : "主な機能"}
                  </h2>
                  <ul className="list-disc pl-5 space-y-2">
                    {language === "en" ? (
                      <>
                        <li>Real-time text translation</li>
                        <li>Vocabulary management system</li>
                        <li>Spaced repetition learning</li>
                        <li>Cross-browser synchronization</li>
                        <li>Offline functionality</li>
                        <li>User progress analytics</li>
                      </>
                    ) : (
                      <>
                        <li>リアルタイムテキスト翻訳</li>
                        <li>語彙管理システム</li>
                        <li>間隔反復学習</li>
                        <li>ブラウザ間同期</li>
                        <li>オフライン機能</li>
                        <li>ユーザー進捗分析</li>
                      </>
                    )}
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
