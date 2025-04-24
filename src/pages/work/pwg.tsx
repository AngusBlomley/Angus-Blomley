/* eslint-disable react/no-unescaped-entities */
import HeaderGlobal from "@/components/globals/headerGlobal";
import Footer from "@/components/globals/footer";
import { WorkNavigation } from "@/components/work/WorkNavigation";
import Image from "next/image";
import { useDarkMode } from "@/contexts/darkModeContext";
import { useLanguage } from "@/contexts/language";

const PWG = () => {
  const { isDarkMode } = useDarkMode();
  const { language } = useLanguage();
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
              <h1
                className={`text-4xl mt-16 font-bold mb-4 ${
                  language === "ja" ? "font-hiraKakuPro" : ""
                }`}
              >
                {language === "en"
                  ? "PWG Windows & Doors - Mobile App Development"
                  : "PWG Windows & Doors - モバイルアプリ開発"}
              </h1>
              <p
                className={`text-lg ${
                  language === "ja" ? "font-hiraKakuPro" : ""
                }`}
              >
                {language === "en"
                  ? "A comprehensive React Native mobile application for engineers to perform on-site assessments of custom windows and doors, featuring robust offline capabilities and enterprise-level state management."
                  : "カスタムウィンドウとドアのオンサイト評価を行うエンジニア向けの包括的なReact Nativeモバイルアプリケーション。堅牢なオフライン機能とエンタープライズレベルの状態管理を特徴としています。"}
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
                      ? "Engineered a sophisticated React Native application that demonstrates expertise in mobile development, offline-first architecture, and complex state management. The project showcases proficiency in building enterprise-level mobile solutions with robust offline capabilities, efficient data synchronization, and comprehensive error tracking."
                      : "モバイル開発、オフラインファーストアーキテクチャ、複雑な状態管理における専門知識を実証する高度なReact Nativeアプリケーションを設計。堅牢なオフライン機能、効率的なデータ同期、包括的なエラー追跡を備えたエンタープライズレベルのモバイルソリューションを構築する能力を示しています。"}
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
                          ? "Mobile Development"
                          : "モバイル開発"}
                      </h3>
                      <ul className="list-disc pl-5 space-y-1">
                        {language === "en" ? (
                          <>
                            <li>
                              React Native with TypeScript for cross-platform
                              development
                            </li>
                            <li>
                              Expo Router for seamless navigation and deep
                              linking
                            </li>
                            <li>Custom hooks for complex business logic</li>
                            <li>
                              Context API and AsyncStorage for state persistence
                            </li>
                            <li>
                              Native module integration for device features
                            </li>
                          </>
                        ) : (
                          <>
                            <li>
                              クロスプラットフォーム開発のためのTypeScript搭載React
                              Native
                            </li>
                            <li>
                              シームレスなナビゲーションとディープリンクのためのExpo
                              Router
                            </li>
                            <li>
                              複雑なビジネスロジックのためのカスタムフック
                            </li>
                            <li>状態永続化のためのContext APIとAsyncStorage</li>
                            <li>
                              デバイス機能のためのネイティブモジュール統合
                            </li>
                          </>
                        )}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-2">
                        {language === "en"
                          ? "Architecture & Data Flow"
                          : "アーキテクチャとデータフロー"}
                      </h3>
                      <ul className="list-disc pl-5 space-y-1">
                        {language === "en" ? (
                          <>
                            <li>
                              Offline-first architecture with data
                              synchronization
                            </li>
                            <li>
                              Queue-based system for handling offline actions
                            </li>
                            <li>
                              RESTful API integration with retry mechanisms
                            </li>
                            <li>
                              Efficient data caching and storage strategies
                            </li>
                            <li>
                              Background task management for sync operations
                            </li>
                          </>
                        ) : (
                          <>
                            <li>
                              データ同期機能を備えたオフラインファーストアーキテクチャ
                            </li>
                            <li>
                              オフラインアクション処理のためのキューベースシステム
                            </li>
                            <li>再試行メカニズムを備えたRESTful API統合</li>
                            <li>効率的なデータキャッシュと保存戦略</li>
                            <li>同期操作のためのバックグラウンドタスク管理</li>
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
                      alt="React Native"
                      width={50}
                      height={50}
                      className="mx-2"
                      style={{ objectFit: "contain" }}
                    />
                    <Image
                      src="/images/icons/js.webp"
                      alt="JavaScript"
                      width={50}
                      height={50}
                      className="m-2"
                      style={{ objectFit: "contain" }}
                    />
                    <Image
                      src="/images/icons/tailwind.webp"
                      alt="tailwind"
                      width={50}
                      height={50}
                      className="m-2 py-2"
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
                    <Image
                      src="/images/icons/expoGo.svg"
                      alt="Redux"
                      width={50}
                      height={50}
                      className="mx-2"
                      style={{ objectFit: "contain" }}
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
                        <li>Comprehensive offline functionality</li>
                        <li>Real-time data synchronization</li>
                        <li>Advanced error tracking with Sentry</li>
                        <li>Cross-platform compatibility</li>
                        <li>Automated CI/CD pipeline</li>
                        <li>Performance optimization</li>
                      </>
                    ) : (
                      <>
                        <li>包括的なオフライン機能</li>
                        <li>リアルタイムデータ同期</li>
                        <li>Sentryを使用した高度なエラー追跡</li>
                        <li>クロスプラットフォーム互換性</li>
                        <li>自動化されたCI/CDパイプライン</li>
                        <li>パフォーマンス最適化</li>
                      </>
                    )}
                  </ul>
                </section>
              </div>

              <div className="space-y-8">
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <video
                    src="/videos/pwg_web.mp4"
                    autoPlay
                    muted
                    loop
                    className="w-full rounded-lg shadow-xl"
                  />
                </div>

                <div className="rounded-lg overflow-hidden shadow-lg">
                  <video
                    src="/videos/pwg_tablet.webm"
                    autoPlay
                    muted
                    loop
                    className="w-full rounded-lg shadow-xl"
                  />
                </div>
              </div>
            </div>
          </div>

          <WorkNavigation currentPath="/work/pwg" />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default PWG;
