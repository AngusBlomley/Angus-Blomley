import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useDarkMode } from "@/contexts/darkModeContext";
import { useLanguage } from "@/contexts/language";
import Image from "next/image";
import Link from "next/link";

function WorkExperience() {
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
      delay: 200,
      once: true,
    });
  }, []);

  return (
    <section
      id="experience"
      style={{ backgroundColor, color }}
      className="py-20 max-md:py-12 duration-200 overflow-hidden"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <h2
          className="text-4xl font-hiraKakuPro text-center mb-24 max-md:mb-16"
          data-aos="fade-in"
        >
          {language === "en" ? "Professional Journey" : "職歴"}
        </h2>
        <div className="grid grid-cols-2 max-md:grid-cols-1 gap-y-32 max-md:gap-y-16 items-center">
          <div className="pr-12 max-md:pr-0" data-aos="fade-right">
            <div className="max-w-xl">
              <h3 className="text-3xl font-semibold mb-3">
                React / React Native Developer
              </h3>
              <p className="mb-6 text-lg opacity-90">
                {language === "en" ? (
                  <>
                    Compute and Cultivate Ltd (PWG Windows & Doors)
                    <br />
                    Contract Position • 3 Years
                  </>
                ) : (
                  <>
                    Compute and Cultivate Ltd（PWG Windows & Doors）
                    <br />
                    期間・2年間
                  </>
                )}
              </p>
              <div>
                <h4 className="text-xl font-semibold mb-4">
                  {language === "en"
                    ? "Key Achievements & Responsibilities"
                    : "業務内容"}
                </h4>
                <ul className="list-disc pl-5 space-y-2 text-base">
                  {language === "en" ? (
                    <>
                      <li>
                        Developed and deployed a React Native mobile application
                        for field engineers, improving site visit efficiency.
                      </li>
                      <li>
                        Implemented real-time calendar integration and advanced
                        form processing system using RESTful APIs
                      </li>
                      <li>
                        Collaborated in an agile environment with
                        cross-functional teams to gather requirements and
                        iterate on features
                      </li>
                      <li>
                        Designed and integrated secure database connections for
                        sensitive customer data handling
                      </li>
                      <li>
                        Established CI/CD pipelines for streamlined deployment
                      </li>
                    </>
                  ) : (
                    <>
                      <li>
                        現場エンジニア向けのReact
                        Nativeモバイルアプリケーションを開発・展開し、
                        現場訪問の効率を向上
                      </li>
                      <li>
                        RESTful
                        APIを使用したリアルタイムカレンダー統合と高度なフォーム処理システムを実装
                      </li>
                      <li>
                        アジャイル環境で機能横断的なチームと協力し、要件収集と機能の反復を実施
                      </li>
                      <li>
                        機密性の高い顧客データ処理のための安全なデータベース接続を設計・統合
                      </li>
                      <li>
                        効率的なデプロイメントのためのCI/CDパイプラインを確立
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </div>
            <div className="flex gap-4">
              <a
                href="https://www.timberwindows.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 px-6 py-2 border border-current rounded relative overflow-hidden group"
              >
                <span className="absolute left-0 top-0 h-full w-0 bg-blue-500/40 transition-all duration-300 group-hover:w-full"></span>
                <span className="relative z-10">
                  {language === "en" ? "Visit Website" : "ウェブサイトへ"}
                </span>
              </a>
              <Link
                href="/work/pwg"
                className="inline-block mt-4 px-6 py-2 border border-current rounded relative overflow-hidden group"
              >
                <span className="absolute left-0 top-0 h-full w-0 bg-blue-500/40 transition-all duration-300 group-hover:w-full"></span>
                <span className="relative z-10">
                  {language === "en" ? "Learn More" : "詳細を見る"}
                </span>
              </Link>
            </div>
          </div>

          <div
            className="relative flex justify-center items-center group cursor-pointer"
            data-aos="fade-left"
          >
            <Link href="/work/pwg">
              <video
                title="PWG Mobile App Demo"
                src="/videos/pwg_tablet.webm"
                autoPlay
                muted
                loop
                width={800}
                height={1200}
                className="max-w-[80%] h-auto rounded-lg shadow-xl transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </Link>
          </div>

          <div
            className="relative flex justify-center items-center order-2 max-md:order-3 group cursor-pointer"
            data-aos="fade-right"
          >
            <Link href="/work/vocabo">
              <div className="w-full rounded-lg relative overflow-hidden shadow-xl transition-transform duration-300 group-hover:scale-[1.02]">
                <div className="absolute top-0 left-0 w-full bg-gray-100 h-[1.6rem] rounded-t-md flex items-center px-4">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 rounded-full bg-red-400"></div>
                    <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                    <div className="w-2 h-2 rounded-full bg-green-400"></div>
                  </div>
                </div>
                <video
                  title="Vocabo Chrome Extension Demo"
                  src="/videos/vocabo.mp4"
                  autoPlay
                  muted
                  loop
                  width={1280}
                  height={720}
                  className="h-auto rounded-lg shadow-xl transition-transform duration-300"
                />
              </div>
            </Link>
          </div>

          <div
            className="pl-12 max-md:pl-0 order-3 max-md:order-2"
            data-aos="fade-left"
          >
            <div className="max-w-xl">
              <h3 className="text-3xl font-semibold mb-3">
                {language === "en"
                  ? "Frontend Developer"
                  : "フロントエンドディベロッパー"}
              </h3>
              <p className="mb-6 text-lg opacity-90">
                {language === "en" ? (
                  <>
                    Vocabo - Language Learning Platform
                    <br />6 Months
                  </>
                ) : (
                  <>
                    Vocabo - 語学学習プラットフォーム
                    <br />
                    期間・６ヶ月
                  </>
                )}
              </p>
              <div>
                <h4 className="text-xl font-semibold mb-4">
                  {language === "en" ? "Technical Highlights" : "業務内容"}
                </h4>
                <ul className="list-disc pl-5 space-y-2 text-base">
                  {language === "en" ? (
                    <>
                      <li>
                        Built a Chrome extension using React and modern
                        JavaScript practices for seamless language learning
                        integration
                      </li>
                      <li>
                        Implemented complex state management and real-time
                        translation features using multiple language APIs
                      </li>
                      <li>
                        Developed a robust Express.js backend server to secure
                        api usage, data persistence and language tokenisation
                      </li>
                      <li>
                        Utilized Vite and Webpack for optimal bundle
                        optimization and performance improvements
                      </li>
                      <li>
                        Participated in daily stand-ups and sprint planning to
                        ensure efficient feature delivery
                      </li>
                    </>
                  ) : (
                    <>
                      <li>
                        ReactとモダンなJavaScriptを使用してChrome拡張機能を開発し、
                        シームレスな言語学習統合を実現
                      </li>
                      <li>
                        複数の言語APIを使用した複雑な状態管理とリアルタイム翻訳機能を実装
                      </li>
                      <li>
                        APIの使用、データの永続化、言語のトークン化を確保するための
                        堅牢なExpress.jsバックエンドサーバーを開発
                      </li>
                      <li>
                        ViteとWebpackを活用して、バンドルの最適化とパフォーマンスを改善
                      </li>
                      <li>
                        デイリースタンドアップとスプリント計画に参加し、効率的な機能提供を確保
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </div>
            <div className="flex gap-4">
              <a
                href="https://chromewebstore.google.com/detail/vocabo/jkidhonedioaomijgdccandhiffoiheb"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 px-6 py-2 border border-current rounded relative overflow-hidden group"
              >
                <span className="absolute left-0 top-0 h-full w-0 bg-blue-500/40 transition-all duration-300 group-hover:w-full"></span>
                <span className="relative z-10">
                  {language === "en"
                    ? "Visit Chrome Extension"
                    : "Chrome拡張機能へ"}
                </span>
              </a>
              <Link
                href="/work/vocabo"
                className="inline-block mt-4 px-6 py-2 border border-current rounded relative overflow-hidden group"
              >
                <span className="absolute left-0 top-0 h-full w-0 bg-blue-500/40 transition-all duration-300 group-hover:w-full"></span>
                <span className="relative z-10">
                  {language === "en" ? "Learn More" : "詳細を見る"}
                </span>
              </Link>
            </div>
          </div>

          <div className="pr-12 max-md:pr-0 order-4" data-aos="fade-right">
            <div className="max-w-xl">
              <h3 className="text-3xl font-semibold mb-3">
                {language === "en"
                  ? "Frontend Developer"
                  : "フロントエンドディベロッパー"}
              </h3>
              <p className="mb-6 text-lg opacity-90">
                {language === "en" ? (
                  <>
                    Open Fern Studio
                    <br />
                    Contract Position • 2 Months
                  </>
                ) : (
                  <>
                    Open Fern Studio
                    <br />
                    契約ポジション • 2ヶ月間
                  </>
                )}
              </p>
              <div>
                <h4 className="text-xl font-semibold mb-4">
                  {language === "en"
                    ? "Key Achievements & Responsibilities"
                    : "業務内容"}
                </h4>
                <ul className="list-disc pl-5 space-y-2 text-base">
                  {language === "en" ? (
                    <>
                      <li>
                        Developed a responsive business website for a social
                        media marketing company
                      </li>
                      <li>
                        Implemented modern design practices and animations to
                        create an engaging user experience
                      </li>
                      <li>
                        Built a contact form system with email integration for
                        client communications
                      </li>
                      <li>
                        Optimized website performance and SEO to improve search
                        engine visibility
                      </li>
                    </>
                  ) : (
                    <>
                      <li>
                        ソーシャルメディアマーケティング企業向けのレスポンシブなビジネスウェブサイトを開発
                      </li>
                      <li>
                        魅力的なユーザー体験を創出するため、モダンなデザインとアニメーションを実装
                      </li>
                      <li>
                        クライアントとのコミュニケーション用にメール統合されたコンタクトフォームシステムを構築
                      </li>
                      <li>
                        検索エンジンでの視認性を向上させるため、ウェブサイトのパフォーマンスとSEOを最適化
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </div>
            <div className="flex gap-4">
              <a
                href="https://www.openfern.studio/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 px-6 py-2 border border-current rounded relative overflow-hidden group"
              >
                <span className="absolute left-0 top-0 h-full w-0 bg-blue-500/40 transition-all duration-300 group-hover:w-full"></span>
                <span className="relative z-10">
                  {language === "en" ? "Visit Website" : "ウェブサイトへ"}
                </span>
              </a>
              <Link
                href="/work/openfern"
                className="inline-block mt-4 px-6 py-2 border border-current rounded relative overflow-hidden group"
              >
                <span className="absolute left-0 top-0 h-full w-0 bg-blue-500/40 transition-all duration-300 group-hover:w-full"></span>
                <span className="relative z-10">
                  {language === "en" ? "Learn More" : "詳細を見る"}
                </span>
              </Link>
            </div>
          </div>

          <div
            className="relative flex justify-center items-center order-5 group cursor-pointer"
            data-aos="fade-left"
          >
            <Link href="/work/openfern">
              <div className="w-full max-w-[100%] rounded-lg overflow-hidden shadow-xl transition-transform duration-300 group-hover:scale-[1.02]">
                <div className="bg-gray-100 h-5 rounded-t-lg flex items-center px-4">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 rounded-full bg-red-400"></div>
                    <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                    <div className="w-2 h-2 rounded-full bg-green-400"></div>
                  </div>
                </div>
                <Image
                  id="openfern"
                  alt="Open Fern Studio Website"
                  src="/images/work/openfern.png"
                  width={1102}
                  height={703}
                  className="w-full h-auto"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WorkExperience;
