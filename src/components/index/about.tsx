/* eslint-disable react/no-unescaped-entities */
import React, { useEffect } from "react";
import "../../app/globals.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { useDarkMode } from "@/contexts/darkModeContext";
import { useLanguage } from "@/contexts/language";

import Link from "next/link";

function About() {
  const { isDarkMode } = useDarkMode();
  const { language } = useLanguage();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const backgroundColor = isDarkMode
    ? "var(--background-color-dark)"
    : "var(--background-color-light)";

  const content =
    language === "ja" ? (
      <>
        <h2
          className={`text-4xl text-center mb-24 max-md:mb-16 font-hiraKakuPro`}
          data-aos="fade-in"
        >
          こんにちは、アンガス・ブロムリーです
        </h2>
        <div className="grid grid-cols-2 max-md:grid-cols-1 gap-y-32 max-md:gap-y-16 items-center">
          <div className="pr-12 max-md:pr-0" data-aos="fade-right">
            <div className="max-w-xl">
              <h3 className={`text-3xl font-semibold mb-3 font-hiraKakuPro`}>
                言語学習の旅
              </h3>
              <p className={`mb-6 text-lg opacity-90 font-hiraKakuPro`}>
                日本語と日本文化への情熱は、私の個人的および職業的な成長の原動力となってきました。熱心な学習と没入を通じて、日本語能力試験N2レベルを達成し、日本のクライアントや同僚と有意義なコミュニケーションを取ることができるようになりました。
              </p>
            </div>
          </div>

          <div
            className="pl-12 max-md:pl-0 order-3 max-md:order-2"
            data-aos="fade-left"
          >
            <div className="max-w-xl">
              <h3 className={`text-3xl font-semibold mb-3 font-hiraKakuPro`}>
                グローバルな視点
              </h3>
              <p className={`mb-6 text-lg opacity-90 font-hiraKakuPro`}>
                複数の国で生活し、働いた経験から、開発業務にユニークなグローバルな視点をもたらしています。この国際的な経験は、文化の境界を超えて共感を呼ぶソリューションを生み出す能力を高めています。
              </p>
            </div>
          </div>

          <div className="pr-12 max-md:pr-0 order-4" data-aos="fade-right">
            <div className="max-w-xl">
              <h3 className={`text-3xl font-semibold mb-3 font-hiraKakuPro`}>
                プログラミングの旅
              </h3>
              <p className={`mb-6 text-lg opacity-90 font-hiraKakuPro`}>
                プログラミングの旅は、インタラクティブな体験を作ることへの魅力から始まりました。長年にわたり、ウェブとモバイル開発に焦点を当て、様々な技術の専門知識を身につけてきました。特に、直感的なユーザーインターフェースと堅牢なバックエンドシステムの作成に情熱を注いでいます。
              </p>
            </div>
          </div>
        </div>
        <p
          className="font-hiraKakuPro leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <Link
            href="/aboutMe"
            className="inline-block mt-4 px-6 py-2 border border-current rounded relative overflow-hidden group mr-4"
          >
            <span className="absolute left-0 top-0 h-full w-0 bg-blue-500/80 transition-all duration-300 group-hover:w-full"></span>
            <span className="relative z-10">私の物語</span>
          </Link>
          <Link
            href="/#contact"
            className="inline-block mt-4 px-6 py-2 border border-current rounded relative overflow-hidden group"
          >
            <span className="absolute left-0 top-0 h-full w-0 bg-blue-500/80 transition-all duration-300 group-hover:w-full"></span>
            <span className="relative z-10">連絡する</span>
          </Link>
        </p>
      </>
    ) : (
      <>
        <h2 className="text-4xl mb-8" data-aos="fade-up">
          The Person Behind the Pixels
        </h2>
        <p className="text-lg mb-6 leading-relaxed" data-aos="fade-up">
          Hello! I'm Angus Blomley, a React developer passionate about crafting
          exceptional web experiences. Since I started my programming journey in
          May 2014, I've developed expertise in HTML, CSS, JavaScript, React,
          React Native and various modern web technologies.
        </p>
        <p className="text-lg mb-6 leading-relaxed" data-aos="fade-up">
          It's not just about the programming languages but language in general,
          I'm currently learning japanese to help connect with my girlfriend.
        </p>
        <p
          className="text-lg mb-6 leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          As a former international springboard diver, I enjoy challenging
          outdoor activities and thrive in like-minded company. My adventurous
          spirit drives me to explore new technologies and constantly push my
          boundaries in both professional and personal pursuits.
        </p>
        <p
          className="text-lg leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <Link
            href="/aboutMe"
            className="inline-block mt-4 px-6 py-2 border border-current rounded relative overflow-hidden group mr-4"
          >
            <span className="absolute left-0 top-0 h-full w-0 bg-blue-500/80 transition-all duration-300 group-hover:w-full"></span>
            <span className="relative z-10">My Story</span>
          </Link>
          <Link
            href="/#contact"
            className="inline-block mt-4 px-6 py-2 border border-current rounded relative overflow-hidden group"
          >
            <span className="absolute left-0 top-0 h-full w-0 bg-blue-500/80 transition-all duration-300 group-hover:w-full"></span>
            <span className="relative z-10">Reach out</span>
          </Link>
        </p>
      </>
    );

  return (
    <section
      id="about"
      style={{ backgroundColor }}
      className="relative z-10 duration-1000 flex row items-center pt-16"
    >
      <div className="absolute inset-0">
        <div
          className={`absolute inset-0 bg-gradient-to-b from-[#121212] via-[#121212]/${
            isDarkMode ? "70" : "50"
          } to-transparent opacity-${
            isDarkMode ? "100" : "70"
          } z-10 max-md:via-[#121212]/${
            isDarkMode ? "50" : "30"
          } max-md:to-transparent via-30%`}
        ></div>
        <div
          className={`absolute inset-0 bg-gradient-to-r from-[#121212] via-[#121212]/${
            isDarkMode ? "50" : "30"
          } to-transparent opacity-${
            isDarkMode ? "100" : "70"
          } z-10 max-md:via-[#121212]/${
            isDarkMode ? "80" : "60"
          } max-md:to-transparent via-30%`}
        ></div>
        <div
          className={`absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/${
            isDarkMode ? "70" : "50"
          } to-transparent opacity-${
            isDarkMode ? "100" : "70"
          } z-10 max-md:via-[#121212]/${
            isDarkMode ? "50" : "30"
          } max-md:to-transparent via-30%`}
        ></div>

        <Image
          alt=""
          src="/images/index/back.jpg"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
      </div>
      <div className="max-w-2xl ml-44 my-40 relative z-10 text-gray-100 max-lg:mx-auto max-lg:px-4">
        {content}
      </div>
    </section>
  );
}

export default About;
