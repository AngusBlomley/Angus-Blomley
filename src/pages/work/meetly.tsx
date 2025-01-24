/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from "react";
import HeaderGlobal from "@/components/globals/headerGlobal";
import Footer from "@/components/globals/footer";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { useDarkMode } from "@/contexts/darkModeContext";
import { useLanguage } from "@/contexts/language";
import { WorkNavigation } from "@/components/work/WorkNavigation";

const Meetly = () => {
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
      <div id="stringBox" data-aos="fade-in" style={{ backgroundColor, color }}>
        <div className="container mx-auto px-4 py-8">
          <h1
            className={`text-4xl mt-16 font-bold mb-4 ${
              language === "ja" ? "font-hiraKakuPro" : ""
            }`}
          >
            {language === "en"
              ? "Meetly - Find The Central Train Station Between Two Locations"
              : "Meetly - 2つの場所の中間にある駅を探す"}
          </h1>
          <p
            className={`text-lg ${language === "ja" ? "font-hiraKakuPro" : ""}`}
          >
            {language === "en"
              ? "Welcome to Meetly, a web application that helps users find the central train station between two addresses. This page demonstrates the work I've done on this project, including the technology stack used and key features implemented."
              : "Meetlyへようこそ。2つの住所の中間にある駅を見つけるウェブアプリケーションです。このページでは、使用した技術スタックと実装した主要機能を含む、このプロジェクトでの私の作業を紹介します。"}
            <a
              href="https://meetly-zeta.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700"
            >
              {language === "en"
                ? "Visit the Meetly app"
                : "Meetlyアプリを見る"}
            </a>
            <span> {language === "en" ? "or" : "または"} </span>
            <a
              href="https://github.com/AngusBlomley/Meetly"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700"
            >
              {language === "en"
                ? "view the Meetly Github."
                : "Meetly Githubを見る。"}
            </a>
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
                  ? "Meetly is a web application that allows users to find the central train station between two addresses, making it perfect for planning meetups. Users can quickly discover a convenient location for both parties."
                  : "Meetlyは、2つの住所の中間にある駅を見つけることができるウェブアプリケーションで、待ち合わせの計画に最適です。両者にとって便利な場所をすぐに見つけることができます。"}
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
                    <li>React.js for the frontend framework</li>
                    <li>Next.js for server-side rendering</li>
                    <li>TypeScript for type safety</li>
                    <li>Google Maps API for location services</li>
                    <li>Axios for making HTTP requests</li>
                  </>
                ) : (
                  <>
                    <li>フロントエンドフレームワークとしてのReact.js</li>
                    <li>サーバーサイドレンダリングのためのNext.js</li>
                    <li>型安全性のためのTypeScript</li>
                    <li>位置情報サービスのためのGoogle Maps API</li>
                    <li>HTTPリクエストのためのAxios</li>
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
                    <li>
                      Enter two addresses and the application will find the
                      midpoint.
                    </li>
                    <li>
                      Displays the nearest train station to the midpoint on a
                      Google Map.
                    </li>
                    <li>
                      The map is initially blurred and hidden, becoming visible
                      and focused upon submitting the addresses.
                    </li>
                    <li>
                      A back button allows users to return to the form and enter
                      new addresses.
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      2つの住所を入力すると、アプリケーションが中間地点を見つけます。
                    </li>
                    <li>中間地点に最も近い駅をGoogle Map上に表示します。</li>
                    <li>
                      マップは最初はぼかされて非表示になっており、住所を送信すると表示されフォーカスされます。
                    </li>
                    <li>
                      戻るボタンで、フォームに戻って新しい住所を入力できます。
                    </li>
                  </>
                )}
              </ul>
            </section>

            <section className="border-l pt-8 pl-8 pb-8 border-opacity-10 border-gray-100 row-span-2 col-span-2 max-2xl:col-span-3 max-2xl:border-none max-2xl:px-0 ">
              <a
                href="https://meetly-zeta.vercel.app/"
                className="filter hover:brightness-75 duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                <video
                  title="Meetly Application"
                  src="/videos/meetly.mp4"
                  autoPlay
                  muted
                  loop
                  width={960}
                  height={480}
                  className="w-full"
                />
              </a>
            </section>
          </div>
          <div className="grid grid-cols-6 grid-rows-2 mt-8 max-lg:grid-cols-1">
            <section className="row-span-full col-span-2 col-start-2 max-lg:row-start-3 max-lg:row-span-1 pt-8 border-r border-gray-100 border-opacity-10 bg-gray-100 bg-opacity-20 max-2xl:col-span-3">
              <h2
                className={`text-2xl font-semibold mb-2  pl-4 ${
                  language === "ja" ? "font-hiraKakuPro" : ""
                }`}
              >
                {language === "en" ? "Package.json" : "Package.json"}
              </h2>
              <pre className="p-4 rounded-md flex-1 overflow-x-auto max-w-full">
                <code>
                  {`{
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  },
  "dependencies": {
    "@google/maps": "^1.1.3",
    "@react-google-maps/api": "^2.19.3",
    "axios": "^1.3.4",
    "google-map-react": "^2.2.0",
    "next": "^14.1.4",
    "react": "18.2.0",
    "react-dom": "18.2.0"
  },
  "devDependencies": {
    "@types/google-map-react": "^2.1.7",
    "@types/node": "18.11.3",
    "@types/react": "18.0.21",
    "@types/react-dom": "18.0.6",
    "autoprefixer": "^10.4.12",
    "postcss": "^8.4.18",
    "tailwindcss": "^3.2.4",
    "typescript": "4.9.4"
  }
}`}
                </code>
              </pre>
            </section>

            <div className="p-8 max-lg:px-0 col-span-2 col-start-4 row-span-full max-2xl:col-span-3">
              <h2
                className={`text-2xl font-semibold mb-2 ${
                  language === "ja" ? "font-hiraKakuPro" : ""
                }`}
              >
                {language === "en" ? "Deployment" : "デプロイメント"}
              </h2>
              <p
                className={`pb-8 border-b border-gray-100 border-opacity-10 ${
                  language === "ja" ? "font-hiraKakuPro" : ""
                }`}
              >
                {language === "en"
                  ? "This project is deployed on Vercel, leveraging its powerful deployment platform for Next.js applications. Vercel provides automatic scaling, a global CDN, and easy-to-configure deployment settings."
                  : "このプロジェクトはVercelにデプロイされており、Next.jsアプリケーション向けの強力なデプロイメントプラットフォームを活用しています。Vercelは自動スケーリング、グローバルCDN、簡単に設定できるデプロイメント設定を提供しています。"}
              </p>
              <h2
                className={`text-2xl font-semibold mb-2 pt-8 ${
                  language === "ja" ? "font-hiraKakuPro" : ""
                }`}
              >
                {language === "en"
                  ? "Database Information"
                  : "データベース情報"}
              </h2>
              <p
                className={`pb-8 border-b border-gray-100 border-opacity-10 ${
                  language === "ja" ? "font-hiraKakuPro" : ""
                }`}
              >
                {language === "en"
                  ? "Meetly uses a combination of Google Maps API for location services and does not require a traditional database for the main functionality."
                  : "Meetlyは位置情報サービスにGoogle Maps APIを使用しており、主要機能には従来のデータベースを必要としません。"}
              </p>
              <h2 className="text-2xl font-semibold mb-4 mt-8">Client</h2>
              <div className="team-member mb-8">
                <div className="flex items-center">
                  <div>
                    <h3 className="text-xl font-semibold"></h3>
                  </div>
                </div>
              </div>
              <div className="team-member">
                <div className="flex items-center">
                  <div>
                    <h3 className="text-xl font-semibold"></h3>
                    <p className="text-gray-500 w-full mt-2"></p>
                  </div>
                </div>
              </div>
              <div className="flex row h-16 flex-wrap">
                <Image
                  src="/images/icons/next.webp"
                  alt="Next.js"
                  width={50}
                  height={50}
                  className="my-2 py-2"
                />
                <Image
                  src="/images/icons/maps2.png"
                  alt="Maps"
                  width={50}
                  height={50}
                  className="my-2 py-2 ml-2"
                />
                <Image
                  src="/images/icons/axios.webp"
                  alt="Axios"
                  width={50}
                  height={50}
                  className="my-2 py-2 ml-2"
                />
                <Image
                  src="/images/icons/react.webp"
                  alt="Axios"
                  width={50}
                  height={50}
                  className="ml-2 py-4"
                />
                <Image
                  src="/images/icons/tailwind.webp"
                  alt="Tailwind CSS"
                  width={50}
                  height={50}
                  className="ml-2 my-2 py-4"
                />
              </div>
            </div>
          </div>

          <WorkNavigation currentPath="/work/meetly" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Meetly;
