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
          <h1
            className={`text-4xl mt-16 font-bold mb-4 ${
              language === "ja" ? "font-hiraKakuPro" : ""
            }`}
          >
            {language === "en"
              ? "Misuzu Kanzaki - Portfolio Website"
              : "神崎美涼 - ポートフォリオウェブサイト"}
          </h1>
          <p
            className={`text-lg ${language === "ja" ? "font-hiraKakuPro" : ""}`}
          >
            {language === "en"
              ? "Welcome to the Misuzu Kanzaki Portfolio project. This section showcases my work in creating a personal portfolio website that highlights Misuzu's design work and creativity."
              : "神崎美涼のポートフォリオプロジェクトへようこそ。このセクションでは、美涼のデザインワークと創造性を紹介する個人ポートフォリオウェブサイトの制作を紹介します。"}
          </p>

          <div className="grid grid-cols-3 border-b border-opacity-10 border-gray-100 max-2xl:col-span-2 max-lg:grid-cols-1">
            <section className="pb-8 pt-8 pr-8 border-b border-opacity-10 border-gray-100 col-span-3 max-2xl:col-span-1">
              <h2
                className={`text-2xl font-semibold mb-2 ${
                  language === "ja" ? "font-hiraKakuPro" : ""
                }`}
              >
                {language === "en" ? "Project Overview" : "プロジェクト概要"}
              </h2>
              <p className={language === "ja" ? "font-hiraKakuPro" : ""}>
                {language === "en"
                  ? "This portfolio website was designed to showcase Misuzu Kanzaki's creative work and professional journey. The site features a clean, minimalist design that puts the focus on her projects while maintaining excellent usability."
                  : "このポートフォリオウェブサイトは、神崎美涼のクリエイティブワークとプロフェッショナルな経歴を紹介するために設計されました。サイトは、優れた使いやすさを維持しながら、彼女のプロジェクトに焦点を当てたクリーンでミニマルなデザインを特徴としています。"}
              </p>
            </section>

            <section className="h-full pt-8 pr-8 grid-cols-1 max-lg:row-start-2 border-b border-gray-100 border-opacity-10 max-2xl:pb-8">
              <h2
                className={`text-2xl font-semibold mb-2 ${
                  language === "ja" ? "font-hiraKakuPro" : ""
                }`}
              >
                {language === "en" ? "Technology Stack" : "技術スタック"}
              </h2>
              <ul
                className={`list-disc pl-5 ${
                  language === "ja" ? "font-hiraKakuPro" : ""
                }`}
              >
                {language === "en" ? (
                  <>
                    <li>HTML5 for structure</li>
                    <li>CSS3 for styling</li>
                    <li>JavaScript for interactivity</li>
                    <li>Responsive design principles</li>
                  </>
                ) : (
                  <>
                    <li>構造化のためのHTML5</li>
                    <li>スタイリングのためのCSS3</li>
                    <li>インタラクティブ性のためのJavaScript</li>
                    <li>レスポンシブデザインの原則</li>
                  </>
                )}
              </ul>
            </section>

            <section className="h-full pr-8 pt-8 row-start-3 max-2xl:row-start-1 max-2xl:col-end-3 max-lg:row-start-3 max-lg:col-start-1 border-b border-gray-100 border-opacity-10 max-lg:pb-8 max-2xl:pt-8">
              <h2
                className={`text-2xl font-semibold mb-2 ${
                  language === "ja" ? "font-hiraKakuPro" : ""
                }`}
              >
                {language === "en" ? "Key Features" : "主な機能"}
              </h2>
              <ul
                className={`list-disc pl-5 ${
                  language === "ja" ? "font-hiraKakuPro" : ""
                }`}
              >
                {language === "en" ? (
                  <>
                    <li>Clean and minimalist design</li>
                    <li>Project showcase gallery</li>
                    <li>About and contact sections</li>
                    <li>Mobile-first approach</li>
                  </>
                ) : (
                  <>
                    <li>クリーンでミニマルなデザイン</li>
                    <li>プロジェクトショーケースギャラリー</li>
                    <li>自己紹介と連絡先セクション</li>
                    <li>モバイルファーストアプローチ</li>
                  </>
                )}
              </ul>
            </section>

            <div className="p-8 max-lg:px-0 col-span-2 col-start-4 row-span-full max-2xl:col-span-3">
              <h2
                className={`text-2xl font-semibold mb-2 ${
                  language === "ja" ? "font-hiraKakuPro" : ""
                }`}
              >
                {language === "en" ? "Development Process" : "開発プロセス"}
              </h2>
              <p
                className={`pb-8 border-b border-gray-100 border-opacity-10 ${
                  language === "ja" ? "font-hiraKakuPro" : ""
                }`}
              >
                {language === "en"
                  ? "The development process focused on creating a clean, professional portfolio that effectively showcases Misuzu's work. The design emphasizes simplicity and usability while maintaining visual appeal."
                  : "開発プロセスでは、美涼の作品を効果的に紹介するクリーンでプロフェッショナルなポートフォリオの作成に焦点を当てました。デザインは、視覚的な魅力を維持しながら、シンプルさと使いやすさを重視しています。"}
              </p>

              <h2
                className={`text-2xl font-semibold mb-2 pt-8 ${
                  language === "ja" ? "font-hiraKakuPro" : ""
                }`}
              >
                {language === "en"
                  ? "Client Feedback"
                  : "クライアントのフィードバック"}
              </h2>
              <div className="client-feedback mb-8">
                <div>
                  <p
                    className={`w-full mt-2 italic ${
                      language === "ja" ? "font-hiraKakuPro" : ""
                    }`}
                  >
                    {language === "en"
                      ? "The portfolio website perfectly captures my style and presents my work in a professional manner. The clean design and intuitive navigation make it easy for potential clients to explore my projects."
                      : "ポートフォリオウェブサイトは私のスタイルを完璧に捉え、私の作品をプロフェッショナルな方法で紹介しています。クリーンなデザインと直感的なナビゲーションにより、潜在的なクライアントが私のプロジェクトを簡単に探索できます。"}
                  </p>
                  <p
                    className={`text-right mt-4 font-semibold ${
                      language === "ja" ? "font-hiraKakuPro" : ""
                    }`}
                  >
                    - {language === "en" ? "Misuzu Kanzaki" : "神崎美涼"}
                  </p>
                </div>
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
