/* eslint-disable react/no-unescaped-entities */
import React, { useEffect } from "react";
import HeaderGlobal from "@/components/globals/headerGlobal";
import Footer from "@/components/globals/footer";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { useDarkMode } from "@/contexts/darkModeContext";
import { useLanguage } from "@/contexts/language";
import { WorkNavigation } from "@/components/work/WorkNavigation";

const Misuzu = () => {
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
      <div
        id="projectShowcase"
        data-aos="fade-in"
        style={{ backgroundColor, color }}
      >
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl mt-16 font-bold mb-4">
            {language === "en"
              ? "Collaboration with Misuzu Kanzaki"
              : "神崎美鈴とのコラボレーション"}
          </h1>
          <p className="text-lg">
            {language === "en"
              ? "This section of my portfolio showcases a project where I collaborated with Misuzu Kanzaki, a talented graphic designer. I built her personal portfolio website using vanilla HTML, CSS, and JavaScript, bringing her design visions to life and demonstrating my development skills."
              : "ポートフォリオのこのセクションでは、才能あるグラフィックデザイナーの神崎美鈴とコラボレーションしたプロジェクトを紹介します。HTML、CSS、JavaScriptを使用して彼女の個人ポートフォリオウェブサイトを構築し、彼女のデザインビジョンを実現しながら、私の開発スキルを実証しました。"}
            <a
              href="https://angusblomley.github.io/Misuzu-Portfolio-Website/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700"
            >
              <span>
                {language === "en"
                  ? " Visit Misuzu Kanzaki's Portfolio Website "
                  : " 神崎美鈴のポートフォリオウェブサイトを見る "}
              </span>
            </a>
            {language === "en" ? "or" : "または"}
            <a
              href="https://github.com/AngusBlomley/Misuzu-Portfolio-Website"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700"
            >
              <span>
                {language === "en" ? " the github." : " GitHubを見る。"}
              </span>
            </a>
          </p>

          <div className="grid grid-cols-3 border-b border-opacity-10 border-gray-100 max-2xl:col-span-2 max-lg:grid-cols-1">
            <section className="pb-8 pt-8 pr-8 border-b border-opacity-10 border-gray-100 col-span-3 max-2xl:col-span-1">
              <h2 className="text-2xl font-semibold mb-2">
                {language === "en" ? "Project Overview" : "プロジェクト概要"}
              </h2>
              <p>
                {language === "en"
                  ? "Misuzu Kanzaki's portfolio website highlights her design work and creativity. My role in this project was to develop a fully functional, responsive website that showcases her art and design philosophy. The website is built to be clean, intuitive, and engaging."
                  : "神崎美鈴のポートフォリオウェブサイトは、彼女のデザインワークと創造性を強調しています。このプロジェクトでの私の役割は、彼女のアートとデザイン哲学を紹介する、完全に機能的でレスポンシブなウェブサイトを開発することでした。ウェブサイトはクリーンで直感的、そして魅力的になるように構築されています。"}
              </p>
            </section>

            <section className="h-full pt-8 pr-8 grid-cols-1 max-lg:row-start-2 border-b border-gray-100 border-opacity-10 max-2xl:pb-8">
              <h2 className="text-2xl font-semibold mb-2">
                {language === "en" ? "Key Features" : "主な機能"}
              </h2>
              <ul className="list-disc pl-5">
                {language === "en" ? (
                  <>
                    <li>
                      Responsive design ensuring optimal viewing on all devices
                    </li>
                    <li>Interactive elements to enhance user engagement</li>
                    <li>Clean and semantic HTML structure</li>
                    <li>Custom CSS for styling and layout</li>
                    <li>JavaScript for dynamic content and interactions</li>
                  </>
                ) : (
                  <>
                    <li>
                      全デバイスで最適な表示を確保するレスポンシブデザイン
                    </li>
                    <li>
                      ユーザーエンゲージメントを高めるインタラクティブな要素
                    </li>
                    <li>クリーンでセマンティックなHTML構造</li>
                    <li>スタイリングとレイアウトのためのカスタムCSS</li>
                    <li>
                      動的なコンテンツとインタラクションのためのJavaScript
                    </li>
                  </>
                )}
              </ul>
            </section>

            <section className="h-full pr-8 pt-8 row-start-3 max-2xl:pb-8 max-2xl:row-start-1 max-2xl:col-end-3 max-lg:row-start-3 max-lg:col-start-1 border-b border-gray-100 border-opacity-10 max-lg:pb-8 max-2xl:pt-8">
              <h2 className="text-2xl font-semibold mb-2">
                {language === "en" ? "Technologies Used" : "使用技術"}
              </h2>
              <ul className="list-disc pl-5">
                {language === "en" ? (
                  <>
                    <li>HTML5 for structuring the content</li>
                    <li>CSS3 for styling and layout</li>
                    <li>JavaScript for interactivity and dynamic content</li>
                  </>
                ) : (
                  <>
                    <li>コンテンツ構造化のためのHTML5</li>
                    <li>スタイリングとレイアウトのためのCSS3</li>
                    <li>
                      インタラクティブ性と動的コンテンツのためのJavaScript
                    </li>
                  </>
                )}
              </ul>
            </section>

            <section className="border-l pt-8 pl-8 pb-8 border-opacity-10 border-gray-100 row-span-2 col-span-2 max-2xl:col-span-3 max-2xl:border-none max-2xl:px-0">
              <a
                href="https://angusblomley.github.io/Misuzu-Portfolio-Website/"
                className="filter hover:brightness-75 duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                <video
                  src="/videos/misuzu.mp4"
                  autoPlay
                  muted
                  loop
                  title="Misuzu Kanzaki Portfolio"
                  width={960}
                  height={480}
                  className="w-full"
                />
              </a>
            </section>
          </div>

          <div className="grid grid-cols-6 grid-rows-2 mt-8 max-lg:grid-cols-1">
            <section className="row-span-full col-span-2 col-start-2 max-lg:row-start-3 max-lg:row-span-1 pt-8 border-r border-gray-100 border-opacity-10 bg-gray-100 bg-opacity-20 max-2xl:col-span-3">
              <h2 className="text-2xl font-semibold mb-2 pl-4">
                {language === "en"
                  ? "Challenges and Learning Outcomes"
                  : "課題と学習成果"}
              </h2>
              <p className="p-4 rounded-md flex-1 overflow-x-auto max-w-full">
                {language === "en"
                  ? "Throughout the project, I faced several challenges, such as ensuring cross-browser compatibility and optimizing performance for fast loading times. These challenges helped me to grow as a developer, enhancing my problem-solving skills and deepening my understanding of web development best practices."
                  : "プロジェクトを通じて、クロスブラウザ互換性の確保や高速な読み込み時間のためのパフォーマンス最適化など、いくつかの課題に直面しました。これらの課題は、開発者としての成長を促し、問題解決能力を向上させ、ウェブ開発のベストプラクティスへの理解を深めるのに役立ちました。"}
              </p>
              <h2 className="px-4 pt-4 text-2xl font-semibold mb-2">
                {language === "en"
                  ? "Client Feedback"
                  : "クライアントフィードバック"}
              </h2>
              <p className="p-4 pb-8">
                {language === "en"
                  ? "Misuzu was thrilled with the final product. She appreciated the seamless collaboration and the way her vision was brought to life on the web. The positive feedback from Misuzu and the users of her website was incredibly rewarding and reaffirmed my passion for web development."
                  : "美鈴は最終成果物に大変満足していました。シームレスな協力関係と、彼女のビジョンがウェブ上で実現された方法を高く評価してくれました。美鈴とウェブサイトユーザーからの肯定的なフィードバックは非常に励みになり、ウェブ開発への情熱を再確認することができました。"}
              </p>
            </section>

            <div className="p-8 max-lg:px-0 col-span-2 col-start-4 row-span-full max-2xl:col-span-3">
              <h2 className="text-2xl font-semibold mb-2 pt-8">
                {language === "en" ? "Client" : "クライアント"}
              </h2>
              <p className="pb-8 border-b border-gray-100 border-opacity-10">
                {language === "en" ? (
                  <>
                    <strong>Misuzu Kanzaki - Junior Graphic Designer:</strong>{" "}
                    Misuzu is an emerging graphic designer who brings fresh and
                    creative ideas to the table. Her passion for design was a
                    key element in the project's success.
                  </>
                ) : (
                  <>
                    <strong>神崎美鈴 - ジュニアグラフィックデザイナー：</strong>{" "}
                    美鈴は、フレッシュで創造的なアイデアをもたらす新進気鋭のグラフィックデザイナーです。彼女のデザインへの情熱は、プロジェクトの成功における重要な要素でした。
                  </>
                )}
              </p>
              <div className="flex row h-16 flex-wrap">
                <Image
                  src="/images/icons/html.webp"
                  alt="html"
                  width={50}
                  height={50}
                  className="my-2 py-2"
                />
                <Image
                  src="/images/icons/css.webp"
                  alt="css"
                  width={50}
                  height={50}
                  className="my-2 py-2 ml-2"
                />
                <Image
                  src="/images/icons/js.webp"
                  alt="js"
                  width={50}
                  height={50}
                  className="my-2 py-2 ml-2"
                />
              </div>
            </div>
          </div>

          <WorkNavigation currentPath="/work/misuzuPortfolio" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Misuzu;
