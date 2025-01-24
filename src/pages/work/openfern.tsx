/* eslint-disable react/no-unescaped-entities */
import React, { useEffect } from "react";
import HeaderGlobal from "@/components/globals/headerGlobal";
import Footer from "@/components/globals/footer";
import { WorkNavigation } from "@/components/work/WorkNavigation";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { useDarkMode } from "@/contexts/darkModeContext";
import { useLanguage } from "@/contexts/language";

const OpenFern = () => {
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
                  ? "Open Fern Studio - Web Development Agency"
                  : "Open Fern Studio - ウェブ開発エージェンシー"}
              </h1>
              <p className="text-lg max-w-3xl mx-auto">
                {language === "en"
                  ? "A modern web development agency website showcasing services, portfolio, and expertise. Built with Next.js and featuring dynamic content management."
                  : "サービス、ポートフォリオ、専門知識を紹介するモダンなウェブ開発エージェンシーのウェブサイト。Next.jsで構築され、動的なコンテンツ管理を特徴としています。"}{" "}
                <a
                  className="text-blue-500 hover:text-blue-700 px-2 py-1 rounded-md"
                  href="https://openfern.studio"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {language === "en" ? "Visit the website" : "ウェブサイトへ"}
                </a>
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-semibold mb-4">
                    {language === "en"
                      ? "Project Overview"
                      : "プロジェクト概要"}
                  </h2>
                  <p className="text-lg">
                    {language === "en"
                      ? "Open Fern Studio represents a sophisticated web development agency platform that demonstrates expertise in modern web technologies and design principles. The project showcases a perfect blend of aesthetic appeal and technical excellence, featuring responsive design, smooth animations, and optimized performance."
                      : "Open Fern Studioは、最新のウェブ技術とデザイン原則における専門知識を実証する洗練されたウェブ開発エージェンシープラットフォームです。このプロジェクトは、レスポンシブデザイン、スムーズなアニメーション、最適化されたパフォーマンスを特徴とし、美的魅力と技術的卓越性の完璧な調和を示しています。"}
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
                          ? "Frontend Architecture"
                          : "フロントエンドアーキテクチャ"}
                      </h3>
                      <ul className="list-disc pl-5 space-y-1">
                        {language === "en" ? (
                          <>
                            <li>
                              Next.js with TypeScript for robust development
                            </li>
                            <li>Tailwind CSS for responsive design</li>
                            <li>Framer Motion for smooth animations</li>
                            <li>Dynamic routing and SEO optimization</li>
                          </>
                        ) : (
                          <>
                            <li>
                              堅牢な開発のためのTypeScriptを使用したNext.js
                            </li>
                            <li>レスポンシブデザインのためのTailwind CSS</li>
                            <li>
                              スムーズなアニメーションのためのFramer Motion
                            </li>
                            <li>動的ルーティングとSEO最適化</li>
                          </>
                        )}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-2">
                        {language === "en"
                          ? "Development Features"
                          : "開発機能"}
                      </h3>
                      <ul className="list-disc pl-5 space-y-1">
                        {language === "en" ? (
                          <>
                            <li>Responsive design across all devices</li>
                            <li>Performance optimization techniques</li>
                            <li>Modern UI/UX principles</li>
                            <li>Content management integration</li>
                          </>
                        ) : (
                          <>
                            <li>全デバイス対応のレスポンシブデザイン</li>
                            <li>パフォーマンス最適化技術</li>
                            <li>モダンなUI/UX原則</li>
                            <li>コンテンツ管理の統合</li>
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
                    {language === "en" ? "Key Features" : "主な機能"}
                  </h2>
                  <ul className="list-disc pl-5 space-y-2">
                    {language === "en" ? (
                      <>
                        <li>Modern and responsive design</li>
                        <li>Dynamic content management</li>
                        <li>Portfolio showcase with filtering</li>
                        <li>Team member profiles</li>
                        <li>Service descriptions and pricing</li>
                        <li>Contact form with validation</li>
                      </>
                    ) : (
                      <>
                        <li>モダンでレスポンシブなデザイン</li>
                        <li>動的コンテンツ管理</li>
                        <li>フィルタリング機能付きポートフォリオ展示</li>
                        <li>チームメンバープロフィール</li>
                        <li>サービス説明と価格設定</li>
                        <li>バリデーション付きコンタクトフォーム</li>
                      </>
                    )}
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
